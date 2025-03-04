import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import PropTypes from 'prop-types';

const MusicCard = ({ track, onPlay }) => {
    const [imgSrc, setImgSrc] = useState(track.strTrackThumb);
  
    return (
      <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition group relative">
        <div className="relative">
          <img
            src={imgSrc}
            alt={track.strTrack}
            className="w-full h-48 object-cover rounded-lg mb-4"
            onError={() => setImgSrc('/placeholder.jpg')}
          />
          <button
            onClick={() => onPlay(track)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 p-4 rounded-full hover:bg-black/70 transition-opacity opacity-0 group-hover:opacity-100"
          >
            <FaPlay className="text-white text-2xl" />
          </button>
        </div>
  
        <h3 className="text-xl font-semibold mb-2 truncate">{track.strTrack}</h3>
        <p className="text-gray-400 truncate">{track.strArtist}</p>
      </div>
    );
  };
  
  MusicCard.propTypes = {
    track: PropTypes.shape({
      idTrack: PropTypes.string.isRequired,
      strTrack: PropTypes.string.isRequired,
      strArtist: PropTypes.string.isRequired,
      strTrackThumb: PropTypes.string,
      audioUrl: PropTypes.string.isRequired
    }).isRequired,
    onPlay: PropTypes.func.isRequired
  };
  
  export default MusicCard;