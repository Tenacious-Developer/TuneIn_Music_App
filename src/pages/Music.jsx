import { useState, useEffect } from 'react';
import MusicCard from '../components/MusicCard';
import Loader from '../components/Loader';

const MusicPage = ({ onTrackSelect }) => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const addAudioUrl = (youtubeUrl) => {
      // Temporary placeholder - replace with actual audio URL logic
      return '/demo.mp3';
    };
  
    useEffect(() => {
      const fetchMusicData = async () => {
        try {
          const response = await fetch(
            'https://www.theaudiodb.com/api/v1/json/2/mvid.php?i=112024'
          );
          
          if (!response.ok) throw new Error('Failed to fetch music');
          const data = await response.json();
          
          if (!data.mvids) throw new Error('No tracks found');
          
          // Filter and enhance tracks
          const validTracks = data.mvids
            .filter(track => track.strTrackThumb) // Remove tracks without images
            .map(track => ({
              ...track,
              audioUrl: addAudioUrl(track.strMusicVid)
            }));
  
          setTracks(validTracks);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMusicData();
    }, []);
  
    if (loading) return <Loader />;
    if (error) return <div className="text-red-400 p-8 text-center">{error}</div>;
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Trending Music</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <MusicCard 
              key={track.idTrack} 
              track={track}
              onPlay={onTrackSelect}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default MusicPage;