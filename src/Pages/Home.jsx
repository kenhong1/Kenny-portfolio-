import React from "react";
import Footer from "../Components/Footer"
import mk from "../Image/mkx.jpg"
import comple from "../Image/login1.png"
import xposure from "../Image/xposure.png"
import stackd from "../Image/stackd.png"
import video from "../Image/asthetic.mp4"
import pictureOne from "../Image/kennethHong.png"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faNode, faPython, faHtml5, faCss3, faBootstrap, faAdobe, faEtsy, faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faPlay, faServer} from '@fortawesome/free-solid-svg-icons';
import ResumePDF from "../Image/KenHongResume.pdf"
import {Jumbotron, Button, Carousel, Col, Row, Container, Image} from "react-bootstrap";

library.add(faJsSquare, faReact, faNode, faPython, faServer, faHtml5, faCss3, faBootstrap,faDatabase, faAdobe, faInstagram, faGithub, faLinkedin, faEtsy, faPlay)

const Home = (props) => {


   return(
<div className="Home">
      <div className="HomeInternal">
   <div className="cBox">
         <Jumbotron className="jumbotron" fluid >
               <h1 className="headerH1">Kenneth Hong</h1>
               <p className="headerP"> Full Stack Developer, Content Creator, and Innovator </p>
         <video className="video-background" preload={true} muted={true} autoPlay={true} loop={true}>
               <source src={video} type="video/mp4" />
            </video>
            <Container className="jumbotronBox">
            </Container>
         </Jumbotron>
   <div className="aboutMe">
      <Row>
         <Col className="colBox" lg={true}> 
            <Image className="selfie" src={pictureOne} roundedCircle /> 
         </Col>
         <Col>
            <Container className="aboutMeContainer">
            <h3> Who I Am</h3>
            <p> 
               Hello! 
               My name is Kenneth Hong and I am a Full Stack Developer with a passion for photography, content creation, and all things aesthetically pleasing. If I am not coding or working on
               freelance projects you can catch me exploring and taking pictures. Please feel free to look around and stay!  
            </p>
            <a href = {ResumePDF} target = "_blank" onLoadSuccess={()=>console.log('success')}><Button variant="primary">Resume </Button></a>
            </Container>
         </Col>
      </Row>
   </div>

<br /> 
   <div className="skillsBox">
   <h1> Skills & Abilities </h1>
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" strokeWidth="0" fill="#2274A5" points="0,0.6 0,1 10,1 10,0"></polygon></svg> 
<br />
      <div className="colorRow">
         <Row>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'js-square']} /> Javascript </Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'react']} /> React</Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'node']} /> Node.js</Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'python']} />Python</Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', 'etsy']} />Express</Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon="server" /> Postgres</Col>
         </Row>
<br /> 
         <Row>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "html5"]} /> HTML </Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "css3"]} /> CSS </Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "bootstrap"]} /> Bootstrap </Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon="database"/> Mongo.db</Col>
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "adobe"]} /> Adobe Creative Cloud </Col>
         </Row>
      </div>
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" strokeWidth="0" fill="#2274A5" points="0,0 10,0 10,0.3 0,1"></polygon></svg>
   </div>
   <div className="portfolioStuff">
      <h1> Projects & Freelance </h1>
   <svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#FFBF00" points="0,0.6 0,1 10,1 10,0"></polygon></svg>
         <div className="colorRow2">
   <Carousel className="mainCarousel">
      <Carousel.Item className="item">
         <img className="caroselOne" src={xposure} alt="First slide" />
         <Carousel.Caption>
            <h3>Xposure</h3>
            <p> Find. Create. Enjoy. </p>
            <p>Dive into the photo app that helps generates ideas on locations, patterns, and moods. Powered by the 
               Unsplash API, Xposure delivers high quality photos by the click of a button. </p>
            <Row>
            <Col  lg={true}><a className="cIcons" href="https://github.com/kenhong1/Project-II-Exposure"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
            <Col  lg={true}><a className="cIcons" href="https://whispering-plateau-38685.herokuapp.com/"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>
            </Row>
         </Carousel.Caption>
   </Carousel.Item>
      <Carousel.Item className="item"> <img className="caroselOne" src={comple} alt="Third slide" />
         <Carousel.Caption>
               <h3>Complemont</h3>
               <p>Matching Made Easy</p>
               <p>From picking out what goes with that top to repainting your living room. Compliemont supplies you with the best 
                  complimentory colors with one click of the button! </p>
               <Row>
                  <Col  lg={true}><a className="cIcons" href="https://github.com/orjames/mernProject"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
                  <Col  lg={true}><a className="cIcons" href="https://orj-mern-project.herokuapp.com/"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>
               </Row>
         </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className="item" > 
         <img className="caroselOne" src={mk} alt="Third slide"/>
         <Carousel.Caption>
               <h3>MKX Clicker Edition </h3>
               <p> Test Your Might </p>
               <p>Do you have what it takes to protect Earth Realm from the unknown forces? 
                  Jump into the hotseat MKX clicker edition and test your might!</p>
            <Row>
               <Col  lg={true}><a className="cIcons" href="https://github.com/kenhong1/Mortal-Kombat-X-RPG"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
               <Col  lg={true}><a className="cIcons" href="https://kenhong1.github.io/Mortal-Kombat-X-RPG/"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>  
            </Row>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item"> 
         <img className="caroselOne" src={stackd} alt="Third slide"/>
         <Carousel.Caption>
               <h3>Stackd</h3>
               <p> Connecting You To The Latest Tech Trends</p>
               <p> Grabbing data from 3 tech media sources. Stackd allows a user to stay up to date on the latest tech trends. Save, update, and share your favorite articles with your friends on Stackd.
               </p>
            <Row>
               <Col  lg={true}><a className="cIcons" href="https://github.com/kenhong1/Stackd/tree/kennybranch"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
               <Col  lg={true}><a className="cIcons" href="https://stark-basin-81992.herokuapp.com/profile/5cb9f21b856c4a0017968c37"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>  
            </Row>
         </Carousel.Caption>
      </Carousel.Item>
   </Carousel>
</div>      
      </div>
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#FFBF00" points="0,0 10,0 10,0.3 0,1"></polygon></svg>
   </div>
<br /> 
   <div className="followMe">
      <h1> Connect With Me </h1>
<br /> 
      <Row>
         <Col  lg={true} > <a className="connectIcons" href="https://www.instagram.com/sungi_oppa/?hl=en"> <FontAwesomeIcon className="fontAwe"  size="4x" icon={['fab', "instagram"]} /></a>  </Col>
         <Col  lg={true} > <a className="connectIcons" href="https://github.com/kenhong1"> <FontAwesomeIcon className="fontAwe"  size="4x" icon={['fab', "github"]} /></a>  </Col>
         <Col  lg={true} > <a className="connectIcons" href="https://www.linkedin.com/in/kensungihong/"> <FontAwesomeIcon className="fontAwe"  size="4x" icon={['fab', "linkedin"]} /></a>  </Col>
      </Row>
<br /> 
   </div>
<br /> 
<br /> 
   <div className="footer">
      <Footer /> 
   </div>
   </div>
</div>
   )
}


export default Home; 