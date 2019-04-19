import React from "react"
import mk from "../Image/mkx.png"
import stackd from "../Image/stackd.png"
import xposure from "../Image/xposure.png"
import comple from "../Image/login1.png"
import {Container, Row, Col, Card} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub,faPlay)


const Projects = (props) =>{
   return(
      <div className="projects">
         <h1 className="headerProjects"> Full Stack Projects & Freelance Work  </h1>
         <br /> 
         <Container>
            <Row>
               <Col lg={true}>
               <Card style={{ width: '18rem' }}>
                     <Card.Img variant="top" src={xposure} />
                        <Card.Body>
                           <Card.Title>Xposure</Card.Title>
                           <p> Find. Create. Enjoy </p>
                           <Card.Text>
                              Dive into the photo app that helps generates ideas on locations, patterns, and moods. Powered by the 
                              Unsplash API, Xposure delivers high quality photos by the click of a button.                               
                           </Card.Text>
                           <Row>
                           <Col  lg={true}><a href="https://github.com/kenhong1/Project-II-Exposure"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
                           <Col  lg={true}><a href="https://whispering-plateau-38685.herokuapp.com/"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>
                           </Row>
                        </Card.Body>
                     </Card>
               </Col>
               <Col lg={true}>
               <Card className="compleCard" style={{ width: '18rem' }}>
                     <Card.Img className="compleCard" variant="top" src={comple} />
                        <Card.Body>
                           <Card.Title>Comple</Card.Title>
                           <p> Colors Made Easy </p>
                           <Card.Text>
                              Don't know what color goes with that top? Or what color paint would work best for your room? No worries, Complemont color analzying software 
                              accesses the cloudinary API to pick out what colors are in your photo as well as what colors go well with it. 
                           </Card.Text>
                           <Row>
                           <Col  lg={true}><a href="https://github.com/orjames/mernProject"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
                           <Col  lg={true}><a href="https://orj-mern-project.herokuapp.com/"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>
                           </Row>
                        </Card.Body>
                     </Card>
               </Col>
               <Col lg={true}>
               <Card className="compleCard" style={{ width: '18rem' }}>
                     <Card.Img className="compleCard" variant="top" src={mk} />
                        <Card.Body>
                           <Card.Title>Mortal Kombat X Clicker Edition</Card.Title>
                           <p> Test Your Might</p>
                           <Card.Text>
                           Do you have what it takes to protect earth realm from the invaders? Jump into to this hot seat clicker game where you and another person
                           go head to head in Mortal Kombat X Clicker Edition!
                           </Card.Text>
                           <Row>
                           <Col  lg={true}><a href="https://github.com/kenhong1/Mortal-Kombat-X-RPG"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
                           <Col  lg={true}><a href="https://kenhong1.github.io/Mortal-Kombat-X-RPG/"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>
                           </Row>
                        </Card.Body>
                     </Card>
               </Col>
               <Col lg={true}>
               <Card className="compleCard" style={{ width: '18rem' }}>
                     <Card.Img className="compleCard" variant="top" src={stackd} />
                        <Card.Body>
                           <Card.Title>Mortal Kombat X Clicker Edition</Card.Title>
                           <p> Test Your Might</p>
                           <Card.Text>
                           Do you have what it takes to protect earth realm from the invaders? Jump into to this hot seat clicker game where you and another person
                           go head to head in Mortal Kombat X Clicker Edition!
                           </Card.Text>
                           <Row>
                           <Col  lg={true}><a href="https://github.com/kenhong1/Mortal-Kombat-X-RPG"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
                           <Col  lg={true}><a href="https://kenhong1.github.io/Mortal-Kombat-X-RPG/"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>
                           </Row>
                        </Card.Body>
                     </Card>
               </Col>
            </Row>
      </Container>






      </div>
   )
} 

export default Projects