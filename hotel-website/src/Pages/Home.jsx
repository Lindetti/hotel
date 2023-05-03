import {Link} from "react-router-dom";
import "../Styles/Home.scss";
import {AllRooms} from "../Components/AllRooms";
import {Activities} from "../Components/Activities";

const Home = () => {
    return (
        <div className="home-wrapper">
           <div className="showcase">
            <div className="welcome-heading-div">
           <div className="welcome-heading">
           <h1>Luxurious  Rooms</h1>
           </div>
           <hr/>
           <div className="info">
            <h2>Deluxe Rooms Starting At $299</h2>
           </div>

             <div className="rooms-div">
              <Link to="/rooms">Our rooms</Link>
             </div>
            </div>
           </div>
          <div className="services">
            <div className="services-heading">
              <h1>Services</h1>
              <hr/>
            </div>
          <div className="boxes"> 
            {Activities.map((services, index) => {
              return (
                <div className="box" key={index}>
                 <div className="icon logo">
                  <img src={services.icon} />
                 </div>
                 <div className="title">
                  <p>{services.title}</p>
                 </div>
                 <div className="info">
                  <p>{services.info}</p>
                 </div>
                </div>
              )
            })}
            </div>
           
          </div>
          <div className="featured-rooms">
           <div className="featured-rooms-heading">
           <h1>Featured Rooms</h1>
           <hr/>
           </div>
           <div className="homepage-rooms">
           {AllRooms.map((room, index) => {
            return (
              <div className="room-div" key={index}>
                <div className="feature-rooms-image">
                  <img src={room.picture} alt="image" />
                  <div className="price">
                    <p>{room.price}</p>
                    <p className="per-night">per night</p>
                  </div>
                </div>
                <div className="room-info">
                  <p>{room.roomType}</p>
                </div>
              </div>
            )
           })}
           </div>
          </div>
        </div>
    )
}

export default Home;