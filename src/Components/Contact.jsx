import React from 'react'
import './contact.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
//import { FaLocationDot } from 'react-icons/fa'


const Contact = ({styles}) => {
    let newstyles = {}
    let mapstyles = {}
    if(styles === true){
        newstyles = {
            display : 'block',
            padding : '2vw'
        }
        mapstyles = {
            width : '100%',
            padding : '3vw'
        }
    }else{
        newstyles = {}
        mapstyles = {}
    }
    const position = [50.8399418760066, 12.927741666210276]
  return (
    <div className='contact-div' style={newstyles}>
        <div className="map-div" style={mapstyles}>
            {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "100%" }} >
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />  
                <Marker position={position}>
                    <Popup>
                        Meet Us Here
                    </Popup>
                </Marker>
            </MapContainer>
            <div className='locationdiv'>
                <h4>TU Chemnitz</h4>
            </div> */}
            <img src="src/assets/man-311326.svg" alt="" />
        </div>
        <div id="form-div">
            <form action="">
                <div className="formrow">
                    <div className="inputs">
                        <input type="text" required={true}/>
                        <div className="underline"></div>
                        <label for="">First Name</label>
                    </div>
                    <div className="inputs">
                        <input type="text" required={true}/>
                        <div className="underline"></div>
                        <label for="">Last Name</label>
                    </div>
                </div>
                <div className="formrow">
                    <div className="inputs">
                        <input type="text" required={true}/>
                        <div className="underline"></div>
                        <label for="">Email</label>
                    </div>
                </div>
                <div className="formrow">
                    <div className="inputs textarea">
                        <textarea rows="8" cols="80" required={true}></textarea>
                        <br />
                        <div className="underline"></div>
                        <label for="">Write your message</label>
                    </div>
                </div>
                <div className="formrow">
                    <div>
                        <button className="formbtn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact