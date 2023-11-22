import { useEffect, useRef, useState } from 'react'
import './index.css'
import Contact from './Components/Contact';
import Teamcard from './Components/Teamcard';
import Mobileabout from './MobileComponents/Mobileabout';
import { teamdata } from './teamdata';
import Mobileteam from './MobileComponents/Mobileteam';
import Footer from './Components/Footer';
import {FaAlignJustify} from "react-icons/fa";
import './Components/Mobnav.css'

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const aboutheads = ['A','B','O','U','T']
  const conRef = useRef(null);

  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setShowMenu(false);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    setActiveOption(null);
  };


  const MobNavBar = () => {
    return(
      <div id="mySidenav" class="sidenav">
        <div class="closebtn" onClick={() => setIsOpen(false)}><FaAlignJustify/></div>
        {moboptions.map((option) => (
          <div key={option} onClick={() => handleOptionClick(option)}>
            {option.slice(3)}
          </div>
        ))}
    </div>
    )
  }
  const handleOptionClick = (option) => {
    setActiveOption(option.slice(3));
    const target = document.getElementById(option.toLowerCase())
    if(target){
      target.scrollIntoView({behavior: 'smooth'})
    }
  };

  const handlenavtoggle = () =>{
    setIsOpen(true)
  }

  const handlenavCLick = (option) => {
    const target = document.getElementById(option.toLowerCase())
    if(target){
      target.scrollIntoView({behavior: 'smooth'})
    }
  }

  const options = [ 'About', 'Team', 'Contact'];
  const moboptions = ['mobabout' , 'mobteam', 'mobcontact'];
  const teamdetails = teamdata
  return(
    <div>
    <div id="home">
            {isMobile ? (
                <div>
                  {isOpen && <MobNavBar/>}
                  <div id="mobilemain">
                    <div id="mobilenav">
                      <img src="/assets/logo.jpeg" alt="" className='moblogoimg' />
                      <div onClick={handlenavtoggle}><FaAlignJustify/></div>
                    </div>
                    <div className='mobimgdiv'>
                      <img src="/assets/squares-311941.svg" alt="" />
                    </div>
                    <div className='heromobheaddiv'>
                      <h2><span className='IstyleforHead'>I</span>dea to code, we help you realise digital dreams.
                        <div className="rollerhead">
                          <span id='rollheadtext'>Software Development<br/>
                          Dark Pattern-free Certfication<br/>Web Application<br/>Automation Platform
                          </span>
                        </div>
                      </h2>
                    </div>
                  </div>
                    <div className='about' id='mobabout'><Mobileabout/></div>
                    <div className='team' id='mobteam'><Mobileteam/></div>
                    <div id='mobcontact'>
                      <h1 style={{color : 'rgb(7, 28, 146)'}}>Connect With Us</h1>
                      <Contact styles={true}/>
                    </div>
                    <div><Footer styles={true}/></div>
                </div>
            ) : (
              <div>
                <div id="homemain">
                  <nav id="nav">
                    <img src="/assets/logo.jpeg" alt="" className='logoimg' />  
                    <div className="headings">
                      {options.map((option) => (
                        <h1 key={option} onClick={() => handlenavCLick(option)}>{option}</h1>
                        // <button className='homeheadingsbtn' key={option} onClick={() => handlenavCLick(option)}>{option}</button>
                      ))}
                    </div>
                  </nav>
                  <div className='homemainchilds'>
                    <div className='imgdiv'>
                      <img src="/assets/squares-311941.svg" alt="" />
                    </div>
                    <div className='heroheaddiv'>
                      <h2><span className='IstyleforHead'>I</span>dea to code, we help you realise digital dreams.<br/>
                        <div className="rollerhead">
                          <span id='rollheadtext'>Data Management<br/>
                            Software Development<br/>Web Applications<br/> Organizational Management
                          </span>
                        </div>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="aboutsection" id='about'>
                  <div className="aboutheads">
                    {/* {aboutheads.map((heads, key)=>(
                      <h1 key={key} className={key === activeIndex ? 'active' : ''}>{heads}</h1>
                    ))} */}
                    <div className='aboutheaddiv'><h1>ABOUT</h1></div>
                    <div className='aboutimg'></div>
                  </div>
                  <div className="aboutcontent">
                    <p>
                      At V-tenet, we are on a mission to foster a transparent and user-centric digital landscape. Our team has been diligently working to build a revolutionary platform focused on certifying web applications for their commitment to being dark pattern-free.
                    </p>
                    <br/>
                    <p>Our team of experts is at the forefront of developing innovative solutions that will empower us to efficiently analyze our clients' web applications. </p>
                  </div>
                </div>
                <div className="teamsection" id='team'>
                  <div className="teamheadings">
                    <h1>Meet</h1>
                    <h1>The</h1>
                    <h1>Team</h1>
                  </div>
                  <div className='teamdiscription'>
                  </div>
                  <div className='teamcards'>
                    {teamdetails.map((member, index)=>(
                      <Teamcard key={index} name= {member.name} role = {member.role} subRole = {member.subRole} styles={false} imageUrl = {member.imageUrl} linkurl = {member.linkedurl} giturl = {member.githuburl}/>
                    ))}
                  </div>
                </div>
                <div id="contact">
                  <div className="conheads">
                    <h1>Connect</h1>
                    <h1>With</h1>
                    <h1>Us</h1>
                  </div>
                  <Contact styles={false}/>
                </div>
                <div id="footer">
                  <Footer/>
                </div>
              </div>
            )} 
        </div>
    </div>
  )
}

export default App
