import React from 'react'
import './footer.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Footer = () => {
  const position = [50.8399418760066, 12.927741666210276]
  return (
    <div className='footer-div'>
        <div className='footer-child' id='footer-child1'>
            <div className='child1-div'>
                <h1>Hey,</h1>
                <h1>Planspiel</h1>
            </div>
        </div>
        <div className='footer-child' id='footer-child2'>
          <div id="map-div">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }} >
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />  
                <Marker position={position}>
                    <Popup>
                        Meet Us Here
                    </Popup>
                </Marker>
            </MapContainer>
          </div>
        </div>
        <div className='footer-child'>Third</div>
    </div>
  )
}

export default Footer