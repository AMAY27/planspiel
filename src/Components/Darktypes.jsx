import React from 'react'
import './darktypes.css'
import './darktypes.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Darktypes = () => {
    const types = [
        {
            type : "Fake Scarcity",
            description : "Ever witnessed the kind of content on websites as shown in the image? It is a dark pattern on websites that creates a false sense of urgency showing the limited availability of products. This aims to take advantage of consumer psychology and drive impulsive buying decisions.",
            imageUrl : "/assets/Fake_Scarcity.jpeg",
            link : "https://www.tourradar.com/"
        },
        {
            type : "Misdirection",
            description : "Content is structured in such a manner to divert user attention away from their desired key actions or information, leading them towards an undesired path.  Generally done for promoting a product or service. Deceptive technique used by site owners for their own benefit.",
            imageUrl : "/assets/Misdirection.jpeg",
            link : "https://www.flugladen.de/"
        },
        {
            type : "Fake Social Proof",
            description : "Incorporating this type of dark pattern in a website will mislead the users and exploit their trust. Usually done by creating a false impression of popularity through the fabrication of endorsements, or social signals.",
            imageUrl : "/assets/Fake_Social_proof.jpeg",
            link : "https://www.tourradar.com/"
            
        },
        {
            type : "Fake Urgency",
            description : "In the fake urgency category of dark patterns, pressure is created on users to make quick decisions, manipulating them into taking irrational actions. This aims to create an unreal sense of limited-time opportunities.",
            imageUrl : "/assets/Fake_Urgency.jpeg",
            link : "https://www.ncl.com/"
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='typesprimarydiv'>
        <div className='head-div'>
            <h1>Dark</h1>
            <h1>Patterns</h1>
            <h1>In</h1>
            <h1>Web</h1>
        </div>
        <Carousel showThumbs={true} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
          <div className='carousel-card'>
              <div className='image-sec'>
                <a data-tooltip-id="my-tooltip" data-tooltip-content="This image is taken from https://pixabay.com/" href="https://pixabay.com/" target='blank'><img src="/assets/certificate.jpg" alt="" /></a>
                <Tooltip id="my-tooltip" />
              </div>
              <div className='text-sec'>
                <h3>What categorizes<br/> a dark pattern ?</h3><br/>
                <p>Dark patterns involve using deceptive design elements in website interfaces to manipulate or pressure users into unintended actions, often at the expense of their user experience or privacy.</p>
              </div>
            </div>
          {types.map((type, index) => (
            <div className='carousel-card' key={index}>
              <div className='image-sec'>
                <a data-tooltip-id="my-tooltip" data-tooltip-content={`This example snapshot of dark patterns is taken from ${type.link}`} href={type.link} target='blank'><img src={type.imageUrl} alt={type.type} /></a>
                <Tooltip id="my-tooltip" />
              </div>
              <div className='text-sec'>
                <h3>{type.type}</h3><br/>
                <p>{type.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
    </div>
  )
}

export default Darktypes