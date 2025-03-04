import React from 'react'; // Add React import
import { useState} from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";

const Layout = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          {React.cloneElement(children, { 
            onTrackSelect: (track) => {
              if(track.audioUrl) setCurrentTrack(track);
            }
          })}
        </main>
      </div>

      <Player currentTrack={currentTrack} />
    </div>
  );
};

export default Layout;
