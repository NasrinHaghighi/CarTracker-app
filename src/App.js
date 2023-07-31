
import './App.css';
import React, { useRef, useState,useEffect} from 'react';
import { MapContainer, TileLayer, Marker , Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {FaCarSide} from 'react-icons/fa'
import { renderToString } from 'react-dom/server';

import {GiPlainCircle} from 'react-icons/gi'
//data//

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout/Layout';
// first position


// const posFirstLat = 41.2420118;
// const  posFirstLong= -8.7127922;

// // second position
// var posSecLat =  41.2420118;
// var posSecLong = -8.6227922;

// //current pos
// const currentLat= 41.2320118 
// const currentlog=-8.5127922

// const markers = [
//   { position: [posFirstLat, posFirstLong],  popupText: ' موقعیت خودرو در ساعت 5:30' },
//   { position: [posSecLat, posSecLong],  popupText: ' موقعیت خودرو در ساعت 10:30' },
// ];

// //data//



function App() {
 
//   const [currentMarker, setCurrentMarker] = useState({
//     position: [41.2320118, -8.5127922],
//     popupText: 'موقعیت فعلی خودرو',
//   });
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentMarker((prevMarker) => {
//         // Update the latitude by adding 0.005
//         const updatedLong = prevMarker.position[1] + 0.0005;
//         // Keep the longitude unchanged
//         const updatedPosition = [prevMarker.position[0], updatedLong];
  
//         return {
//           ...prevMarker,
//           position: updatedPosition,
//         };
//       });
//     }, 1000);
  
//     // Clean up the interval on component unmount
//     return () => clearInterval(interval);
//   }, []);
  

// const carIcon = L.divIcon({
//   html: renderToString(<FaCarSide size={32} color="black" />),
//   iconAnchor: [16, 12],
//   iconSize: [3, 3],
// });
// const customIcon = L.divIcon({
//   html: renderToString(<GiPlainCircle size={24} color="blue" />),
//   iconAnchor: [16, 12],
//   iconSize: [3, 3],
// });


  return (
    <>
    <BrowserRouter>
    <Layout>
     <Routes>
        <Route path="/" element={<Home />}></Route>
       
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    
      </Layout>
    </BrowserRouter>
    </>
//    <div className="App">

//    <div className='container'>
//    <div className='condition'>
//     <h4> :وضعیت خودرو</h4>
//     <p>خودرو روشن و در حال حرکت</p>
//    <p>جهت حرکت به سمت شمال شرق</p>
//   <p>سرعت حرکت  کیلومتر بر ساعت 200</p>
//    </div>
//     <h1>map</h1>

//     <MapContainer
//   className="map"
//   center={[currentLat, currentlog]}
//   zoom={18}
//   maxZoom={18}
//   style={{ height: "100%", width: "100%",}}
//   zoomControl={false}
// >
// <TileLayer
//     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//  {markers.map((marker, index) => (
//         <Marker key={index} position={marker.position} icon={customIcon}>
//           <Popup>{marker.popupText}</Popup>
//         </Marker>
//       ))} 

// <Marker position={currentMarker.position} icon={carIcon}>
//           <Popup>{currentMarker.popupText}</Popup>
// </Marker>

// </MapContainer>
//    </div>
//     </div>
  );
}

export default App;




// const [latitude, setLatitude] = useState(null);
// const [longitude, setLongitude] = useState(null);


// useEffect(() => {
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       setLatitude(position.coords.latitude);
//       setLongitude(position.coords.longitude);
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
// } else {
//   console.error('Geolocation is not supported by this browser.');
// }
// }, []);


// console.log(latitude, longitude)
