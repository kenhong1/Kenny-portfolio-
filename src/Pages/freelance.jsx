import React from "react"; 

const freelance = () => {

<Carousel className="mainCarousel">
      <Carousel.Item className="item">
         <img className="caroselOne" src={xposure} alt="First slide" />
         <Carousel.Caption>
            <h3>Xposure</h3>
            <p> Find. Create. Enjoy. </p>
            <p>Dive into the photo app that helps generates ideas on locations, patterns, and moods. Powered by the 
               Unsplash API, Xposure delivers high quality photos by the click of a button. </p>
            <Row>
            <Col  lg={true}><a href="https://github.com/kenhong1/Project-II-Exposure" className="cIcons" target="_blank"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
            <Col  lg={true}><a href="https://whispering-plateau-38685.herokuapp.com"className="cIcons" target="_blank"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>
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
                  <Col  lg={true}><a className="cIcons" href="https://github.com/orjames/mernProject" target="_blank"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
                  <Col  lg={true}><a className="cIcons" href="https://orj-mern-project.herokuapp.com/" target="_blank"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>
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
               <Col  lg={true}><a className="cIcons" href="https://github.com/kenhong1/Mortal-Kombat-X-RPG" target="_blank"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
               <Col  lg={true}><a className="cIcons" href="https://kenhong1.github.io/Mortal-Kombat-X-RPG/" target="_blank"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>  
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
               <Col  lg={true}><a className="cIcons" href="https://github.com/kenhong1/Stackd/tree/kennybranch" target="_blank"> <FontAwesomeIcon size="2x" icon={['fab', "github"]} /></a></Col>
               <Col  lg={true}><a className="cIcons" href="https://stark-basin-81992.herokuapp.com/profile/5cb9f21b856c4a0017968c37" target="_blank"> <FontAwesomeIcon size="2x" icon={['fa', "play"]} /></a></Col>  
            </Row>
         </Carousel.Caption>
      </Carousel.Item>
   </Carousel>


}


export default freelance; 