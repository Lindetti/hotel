import {Routes, Route} from "react-router-dom";
import "./Styles/App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";

function App() {
  return (

     <div className="wrapper">
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
     </Routes>
     </div>
  )
}

export default App
