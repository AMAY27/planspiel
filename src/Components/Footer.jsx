import React from 'react'
import './footer.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'

const Footer = ({styles}) => {
  const position = [50.8399418760066, 12.927741666210276]
  let newstyles = {}
  let imgstyles = {}
  let childonestyle = {}
  let mapstyles = {}
  let mapdivstyles = {}
  let childtwostyles = {}
  let childthree = {}
  if(styles === true){
    newstyles = {
        display : 'block',
        width : '100%',
        height : 'auto'
    }
    imgstyles = {
      width : '38vw',
      height : '38vw'
    }
    childonestyle = {
      padding : '7vw',
      width : '100%'
    }
    mapstyles = {
      height : '280px',
      width : '380px',
      paddingLeft : "5vw",
      paddingBottom : "8vw"
    }
    mapdivstyles = {
      width : '100%'
    }
    childtwostyles = {
      paddingLeft : '28vw'
    }
    childthree = {
      width : '100%',
    }
}
  return (
    <div className='footer-div' style={newstyles}>
        <div className='footer-child' id='footer-child1' style={childonestyle}>
          <div className='footheads'>
            <h3><FaEnvelope/></h3>
            <h3>vtenet125@gmail.com</h3>
          </div>
          <div className='footheads'>
            <a href="http://www.linkedin.com/in/v-tenet/" target='_blank' style={{color : 'white'}}><h3><FaLinkedin/></h3></a>
            <h3>www.linkedin.com/in/v-tenet/</h3>
          </div>
          <div className='footheads'>
            <h3><FaMapMarkerAlt/></h3>
            <h3>Chemnitz, Germany</h3>
          </div>
          <div><br/><h3>This website does not belong to a real company. It is a Planspiel Web Engineering project under Technical University of Chemnitz</h3></div>
        </div>
        <div className='footer-child' id='footer-child2' style={childtwostyles}>
            <div className='child2-div'>
                <img src="/assets/Vtenet-icon-2.png" alt="" style={imgstyles} />
            </div>
        </div>
        <div className='footer-child' id='footer-child3' style={childthree}>
          <div id="maphead">
            <h1>Meet Us Here</h1>
          </div>
        <div id="map-div" style={mapstyles}>
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
    </div>
  )
}

export default Footer