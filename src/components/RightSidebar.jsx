// src/components/RightSidebar/RightSidebar.jsx
import { useState } from "react";
import { FaMusic, FaListUl, FaRegClock } from "react-icons/fa";

const RightSidebar = () => {
  const [activeTab, setActiveTab] = useState('queue');

  return (
    <div className="w-80 bg-gray-900 p-4 border-l border-gray-800">
      <div className="flex gap-4 mb-6">
        <button onClick={() => setActiveTab('nowPlaying')} className={`${activeTab === 'nowPlaying' ? 'text-blue-400' : 'text-gray-400'}`}>
          <FaMusic className="text-xl" />
        </button>
        <button onClick={() => setActiveTab('lyrics')} className={`${activeTab === 'lyrics' ? 'text-blue-400' : 'text-gray-400'}`}>
          <FaListUl className="text-xl" />
        </button>
        <button onClick={() => setActiveTab('queue')} className={`${activeTab === 'queue' ? 'text-blue-400' : 'text-gray-400'}`}>
          <FaRegClock className="text-xl" />
        </button>
      </div>

      {activeTab === 'nowPlaying' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Now Playing</h3>
          <img 
            src="https://via.placeholder.com/200" 
            alt="Album" 
            className="rounded-lg w-full"
          />
          <div className="space-y-2">
            <h4 className="font-medium">Song Title</h4>
            <p className="text-gray-400 text-sm">Artist Name</p>
          </div>
        </div>
      )}

      {activeTab === 'lyrics' && (
        <div className="text-gray-400 text-sm">
          Lyrics will appear here...
        </div>
      )}

      {activeTab === 'queue' && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Queue</h3>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
              <img 
                src="https://via.placeholder.com/40" 
                alt="Album" 
                className="w-10 h-10 rounded"
              />
              <div>
                <p className="text-sm">Song Title {item}</p>
                <p className="text-xs text-gray-400">Artist</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RightSidebar;