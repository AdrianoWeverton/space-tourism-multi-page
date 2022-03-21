import { Routes, Route, useLocation } from "react-router-dom";
import { Crew } from "./pages/Crew/Crew";
import { Destination } from "./pages/Destination/Destination";
import { Home } from "./pages/Home/Home";
import { Technology } from "./pages/Technology/Technology";

const App = () => {
  const location = useLocation().pathname;
  const newClass = location.split('/')[1];
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home currentRoute={newClass} />}/>
        <Route path="/destination" element={<Destination currentRoute={newClass} />}/>
        <Route path="/crew" element={<Crew currentRoute={newClass} />}/>
        <Route path='technology' element={<Technology currentRoute={newClass} />}/>
      </Routes>
    </div>
  );
}

export default App;