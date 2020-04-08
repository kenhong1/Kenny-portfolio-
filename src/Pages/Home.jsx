import React from "react";
import Footer from "../Components/Footer"
// import freelance from "../Pages/freelance"
// import Projects from "../Pages/Projects"; 
import mk from "../Image/mkx.jpg"
import comple from "../Image/login1.png"
import xposure from "../Image/xposure.png"
import stackd from "../Image/stackd.png"
import video from "../Image/giffy.gif"
import ResumePDF from "../Image/KenHongResume.pdf"
import pictureOne from "../Image/kennethHong.png"
import {Jumbotron, Button, Carousel, Col, Row, Container, Image} from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faNode, faPython, faHtml5, faCss3, faBootstrap, faAdobe, faEtsy, faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faPlay, faServer, faArrowDown} from '@fortawesome/free-solid-svg-icons';
// import {projectTwo} from 'https://github.com/kenhong1/Project-II-Exposure';
import {Link} from "react-router-dom";

library.add(faJsSquare, faReact, faNode, faPython, faServer, faHtml5, faCss3, faBootstrap,faDatabase, faAdobe, faInstagram, faGithub, faLinkedin, faEtsy, faPlay, faArrowDown)

const Home = (props) => {


   return(
<div className="Home">
      <div className="HomeInternal">
         <div className="cBox">
            <Jumbotron className="jumbotron" fluid >
               <h1 className="headerH1">Kenneth Sungi Hong</h1>
               <p className="headerP"> Web Developer, Designer, and Creator</p>
               <Image className="homeGif" src={video} type="gif" /> 
            <br /> 
            <Col  lg={true} ><FontAwesomeIcon className="fontAwe" size="4x" icon="arrow-down"/></Col>
         </Jumbotron>
   <div className="aboutMe">
      <Row>
         <Col className="colBox" lg={true}> 
            <Image className="selfie" src={pictureOne} roundedCircle /> 
         </Col>
         <Col>
            <Container className="aboutMeContainer">
            <h3> Who I Am</h3>
            <p className="aboutMeP"> 
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
         <Row>
            <Col lg={true}>
               <a href="/projects"> <h3> Projects </h3></a> 
            </Col>
            <Col lg={true}>
               <h3> Freelance</h3>
            </Col>
         </Row>
         </div>      
      </div>
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#FFBF00" points="0,0 10,0 10,0.3 0,1"></polygon></svg>
   </div>
<br /> 
   <div className="followMe">
      <h1> Connect With Me </h1>
<br /> 
      <Row>
         <Col  lg={true} > <a className="connectIcons" href="https://github.com/kenhong1" target="_blank"> <FontAwesomeIcon className="fontAwe"  size="4x" icon={['fab', "github"]} /></a>  </Col>
         <Col  lg={true} > <a className="connectIcons" href="https://www.linkedin.com/in/kensungihong/" target="_blank"> <FontAwesomeIcon className="fontAwe"  size="4x" icon={['fab', "linkedin"]} /></a>  </Col>
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