import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MusicCard from '../components/MusicCard';

const Home = ({ onTrackSelect }) => {
  const [featuredTracks, setFeaturedTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.theaudiodb.com/api/v1/json/2/mvid.php?i=112024'
        );
        const data = await response.json();
        setFeaturedTracks(data.mvids.slice(0, 6));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-white text-center p-8">Loading...</div>;

  return (
    <div className="p-6">
      {/* Hero Carousel */}
      <div className="mb-12 rounded-xl overflow-hidden">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
        >
          {featuredTracks.slice(0, 3).map((track) => (
            <div key={track.idTrack} className="relative">
              <img
                src={track.strTrackThumb}
                alt={track.strTrack}
                className="h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-3xl font-bold text-white">{track.strTrack}</h2>
                <p className="text-gray-300">{track.strArtist}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Featured Tracks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Tracks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredTracks.map((track) => (
            <MusicCard
              key={track.idTrack}
              track={track}
              onPlay={onTrackSelect}
            />
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredTracks.slice(0, 6).map((track) => (
            <div key={track.idTrack} className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700">
              <img
                src={track.strTrackThumb}
                alt={track.strTrack}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-sm font-medium truncate">{track.strTrack}</p>
              <p className="text-xs text-gray-400 truncate">{track.strArtist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;