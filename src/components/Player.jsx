import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp } from 'react-icons/fa';
import Slider from './Slider';

const Player = ({ currentTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentTrack) {
      if (isPlaying) audioRef.current.play();
      setProgress(0);
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!currentTrack) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
  };

  return (
    <div className="bg-gray-800 p-4 border-t border-gray-700 fixed bottom-0 w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
        {/* Track Info */}
        {currentTrack ? (
          <div className="flex items-center gap-4 min-w-[240px]">
            <img 
              src={currentTrack.strTrackThumb || '/placeholder.jpg'} 
              alt={currentTrack.strTrack}
              className="w-12 h-12 rounded"
            />
            <div>
              <p className="font-medium truncate">{currentTrack.strTrack}</p>
              <p className="text-sm text-gray-400 truncate">{currentTrack.strArtist}</p>
            </div>
          </div>
        ) : (
          <div className="text-gray-400">Select a track to play</div>
        )}

        {/* Controls */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center justify-center gap-4 mb-2">
            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200"
              disabled={!currentTrack}
            >
              {isPlaying ? <FaPause /> : <FaPlay className="ml-0.5" />}
            </button>
          </div>
          <Slider
            value={progress}
            onChange={(e) => {
              const time = (e.target.value / 100) * audioRef.current.duration;
              audioRef.current.currentTime = time;
            }}
          />
        </div>

        <audio
          ref={audioRef}
          src={currentTrack?.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onError={() => {
            setIsPlaying(false);
            setProgress(0);
          }}
        />
      </div>
    </div>
  );
};

export default Player;