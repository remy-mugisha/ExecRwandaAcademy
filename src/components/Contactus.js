import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import './Contactus.css';
import image from "../components/Navigation/image.jpg"
import { AiOutlineMail } from "react-icons/ai"
import { HiOutlinePhoneMissedCall } from "react-icons/hi"
import { CiLocationOn } from "react-icons/ci"
import { BsArrowRight } from "react-icons/bs"

const Contactus = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    
    <div>
      <Navigation />
      <div><img src={image} alt="not found" style={{height: "50vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/></div>
      <div style={{marginTop:"-15%", position:"absolute", color: "#1d6b87", marginLeft: "43%"}}>
        <h1>Contact US</h1>
        <p1 style={{color: "white", fontSize:"18px"}}>contact The Help team</p1>
      </div>
    <div className="contact-us-container">
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-groups">
            <label htmlFor="message">Message</label>
            <input id="message" name="message" className='mes' required />
          </div>
          <div className="form-group">
            <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div className='all'>
    <div className='get'>
        <h1>Get in Touch</h1>
        <AiOutlineMail className='ico'/>
        <h2>exec@gmail.com</h2>
        
    </div>
    <div className='phone'>
        <HiOutlinePhoneMissedCall className='icos'/>
    <h2>+250799340499</h2>
    </div>
    </div>
          <div className='footer'>
        
        <div className='footer2'>
          <div className='firstly'>
            <h1 style={{color: "white",fontSize:"19px", marginTop:"-3%", marginLeft:"1%"}}>Social Media</h1>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Instagram</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Facebook</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Twitter</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Linkedin</p1><br></br>
          </div>
          <div className='secondly'>
          <h1 style={{color: "white",fontSize:"19px", marginTop:"-3%", marginLeft:"1%"}}>Quick Links</h1>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Homepage</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>About Us</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Programs</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>In the news</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Contact us</p1><br></br>
          </div>
          <div className='thirdly'>
          <h1 style={{color: "white",fontSize:"19px", marginTop:"-3%", marginLeft:"1%"}}>Address</h1>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Adress: Gasabo-Kimihurura</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Avenue: KGAV23</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Email:exec@gmail.com</p1><br></br>
          </div>
          <div className='fourthly'>
          <h1 style={{color: "white",fontSize:"19px", marginTop:"-1%", marginLeft:"1%"}}>Let's Stay Connected</h1>
          <input placeholder='Your Email' className='your' style={{color:"white"}}/>
           <button className='sub'>Submit</button>
           <h1 style={{color: "white", cursor: "pointer", marginLeft:"-2%", marginTop: "2%"}}>Subscribe to our NewsLetter</h1>
           <button className='newsletter'>NewsLetter<BsArrowRight/></button>
           
          </div>
          <div className='fifth'>
             <button className='view'>
             <a style={{color: "white", textDecoration: "none"}} href="https://www.google.com/maps/place/Richard+Code+Genius/@-1.9604883,30.063312,15z/data=!4m6!3m5!1s0x26fd8ea5a278de83:0x2d3f47f4185dc3f6!8m2!3d-1.9604883!4d30.063312!16s%2Fg%2F11sv_fflpk?entry=ttu" target={"_blank"}>View map <CiLocationOn style={{color: "white", fontSize: "22px"}}/></a>               </button> 
          </div>
        </div>
        <div className='footer3'>
          <h1 style={{color:"rgb(154, 153, 153)", fontSize: "16px", marginTop: "2%"}}>Administrative office: KGAV23 Kimihurura</h1>
          <div className='pici'></div>
          <div>
            <h1 style={{color: "#0193DC", marginTop: "2%", marginLeft: "1%"}}>Exec Rwanda Academy<br></br><span style={{color:"white"}}>Transformed For Community</span></h1>
            <p1 style={{color:"rgb(154, 153, 153)", fontSize: "16px", marginTop: "2%", marginLeft: "16%", position: "absolute"}}>&copy; {2023} Exec Rwanda Academy. All Rights Reserved.</p1>
          </div>

       
      </div>
      </div>
    
    </div>
  );
};

export default Contactus;
