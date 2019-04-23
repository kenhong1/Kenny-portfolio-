import React from "react";
import Footer from "../Components/Footer"
import mk from "../Image/mkx.jpg"
import comple from "../Image/login1.png"
import xposure from "../Image/xposure.png"
import stackd from "../Image/stackd.png"
import pictureOne from "../Image/kennethHong.jpg"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare} from "@fortawesome/free-brands-svg-icons"
import { faReact} from "@fortawesome/free-brands-svg-icons"
import { faNode} from "@fortawesome/free-brands-svg-icons"
import { faPython} from "@fortawesome/free-brands-svg-icons"
import {faHtml5} from "@fortawesome/free-brands-svg-icons"
import {faCss3} from "@fortawesome/free-brands-svg-icons"
import {faBootstrap} from "@fortawesome/free-brands-svg-icons"
import {faAdobe} from "@fortawesome/free-brands-svg-icons"
import {faEtsy} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
import ResumePDF from "../Image/KennethHongRES.WDI.pdf"
import {Jumbotron, Button, Card, Carousel, Col, Row, Container, Image} from "react-bootstrap";
import Parallax from 'react-springy-parallax'

library.add(faJsSquare, faReact, faNode, faPython, faServer, faHtml5, faCss3, faBootstrap,faDatabase, faAdobe, faInstagram, faGithub, faLinkedin, faEtsy)

const Home = (props) => {


   return(
<div className="Home">
   <div className="cBox">
         <Jumbotron className="jumbotron" fluid >
            <Container className="jumbotronBox">
               <h1 className="headerH1">Kenneth Hong</h1>
               <p className="headerP"> Full Stack Developer, Content Creator, and Innovator </p>
            </Container>
         </Jumbotron>
   <div className="aboutMe">
      <Row>
         <Col className="colBox" lg={true}> 
            <h3> Who Am I? </h3>
            <Image className="selfie" src={pictureOne} thumbnail /> 
         </Col>
         <Col>
            <Container className="aboutMeContainer">
            <p> 
               Hello! 
               My name is Kenneth Hong and I am a Full Stack Developer with a passion for Photography, Content Creation, and all things astheticly pleasing. If I am not coding or working on
               freelance projects you can catch me exploring and taking pictures. Please feel free to look around, hope to connect soon! 
            </p>
            <a href = {ResumePDF} target = "_blank" onLoadSuccess={()=>console.log('success')}><Button variant="primary">Resume </Button></a>
            </Container>
         </Col>
      </Row>
   </div>

<br /> 
   <div className="skillsBox">
   <h1> Skills & Abilities </h1>
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" strokeWidth="0" fill="#04b3e7" points="0,0.6 0,1 10,1 10,0"></polygon></svg> 
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
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" strokeWidth="0" fill="#04b3e7" points="0,0 10,0 10,0.3 0,1"></polygon></svg>
   </div>
   <div className="portfolioStuff">
      <h1> Projects & Freelance </h1>
   <svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#f9d368" points="0,0.6 0,1 10,1 10,0"></polygon></svg>
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
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#f9d368" points="0,0 10,0 10,0.3 0,1"></polygon></svg>
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
   )
}


export default Home; 