import '../../App.css';
import React, { useRef, useState,useEffect} from 'react';
import { MapContainer, TileLayer, Marker , Popup,Polyline} from 'react-leaflet';
import 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {FaCarSide} from 'react-icons/fa'
import { renderToString } from 'react-dom/server';
import {GiPlainCircle} from 'react-icons/gi'
import {DashboardWrapper} from  './style'
import Sidebar from './Sidebar/Sidebar';

const OfflineTileLayer = L.TileLayer.Offline;
const OfflineControl = L.Control.Offline;


/*static data*/
const origin=[41.2420118,-8.7127922 ]
// second position

const posSec=[ 41.2380000,-8.6227922 ]
//current pos
const currentLat= 41.2320118 
const currentlog=-8.5127922 



const markers = [
  { position: origin,  popupText: ' موقعیت خودرو در ساعت 5:30' },
  { position: posSec,  popupText: ' موقعیت خودرو در ساعت 10:30' },
];

/*static data*/


function DashboardCo() {
    const [currentMarker, setCurrentMarker] = useState({
        position: [41.2320118, -8.5127922],
        popupText: 'موقعیت فعلی خودرو',
      });
      
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentMarker((prevMarker) => {
            // Update the latitude by adding 0.005
            const updatedLong = prevMarker.position[1] + 0.0005;
            // Keep the longitude unchanged
            const updatedPosition = [prevMarker.position[0], updatedLong];
      
            return {
              ...prevMarker,
              position: updatedPosition,
            };
          });
        }, 1000);
      
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
      }, []);
      
    
    const carIcon = L.divIcon({
      html: renderToString(<FaCarSide size={32} color="black" />),
      iconAnchor: [16, 12],
      iconSize: [3, 3],
    });
    const customIcon = L.divIcon({
      html: renderToString(<GiPlainCircle size={24} color="blue" />),
      iconAnchor: [16, 12],
      iconSize: [3, 3],
    });


  return (
    <DashboardWrapper>

<div >
    <Sidebar />
</div>
<div className='container'>


  <MapContainer

center={[currentLat, currentlog]}
zoom={12}
maxZoom={18}
style={{ height: "100%", width: "100%", borderRadius:'10px'}}
zoomControl={false}
>
<TileLayer
 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
{/* OFFLINE  */}
 {/* <OfflineTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={18}
      /> */}
       {/* <OfflineControl />  */}
       {/* OFFLINE  */}
{markers.map((marker, index) => (
     <Marker key={index} position={marker.position} icon={customIcon}>
       <Popup>{marker.popupText}</Popup>
     </Marker>
   ))} 

<Marker position={currentMarker.position} icon={carIcon}>
       <Popup>{currentMarker.popupText}</Popup>
</Marker>
<Polyline positions={[origin, currentMarker.position]} color="blue" />
</MapContainer>
</div>

 {/*  */}
    </DashboardWrapper>
  )
}

export default DashboardCo