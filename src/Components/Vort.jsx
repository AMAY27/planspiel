import React from 'react'
import './vort.css'
import { PiCertificate, PiFileMagnifyingGlassLight } from "react-icons/pi";
import { GrDocumentVerified } from "react-icons/gr";

const Vort = () => {
  return (
    <div id="vortdiv">
        <div id='vort-img'>
            <img src="/assets/Vort.jpeg" alt="" />
        </div>
        <div id='vort-content'>
            <div id='vorthead'>
                <h1 >VORT</h1>
            </div>
            <p>Vort by V-Tenet is designed for the modern travel entrepreneurs with digital footprints in form of web portals and applications.
                The vort support online business owners in detection of probable dark patterns in their websites and also provides feedbacks to
                remove dark patterns.
            </p>
            <a href="http://vtenet.s3-website.eu-central-1.amazonaws.com/" target='_blank'><button>Get Started with VORT</button></a>
        </div>
    </div>
  )
}

export default Vort