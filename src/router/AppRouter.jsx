import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Music from '../pages/Music.jsx'
import Podcast from '../pages/Podcast.jsx'

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/podcasts" element={<Podcast />} />
      </Routes>
    );
  };
  
  export default AppRouter;