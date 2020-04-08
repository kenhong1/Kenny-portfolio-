import React, { Component } from 'react';
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects"; 
// import freelance from "./Pages/freelance";
import Home from "./Pages/Home"; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route, Link} from "react-router-dom"
import LoadingPage from "./Pages/LoadingPage"; 
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';

library.add(faHome, faEnvelope)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {    
      loading: false, //set this to true on deployment
      click: false, 
    }
    this.handleClick = this.handleClick.bind(this)
  } 

  componentDidMount() {
    // console.log("this is running")
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 0)
  }


handleClick(e){
  // e.preventDefault();
  console.log("click click click ")
  this.setState({
    click: true
  })
}


  render() {
      return (

        <BrowserRouter>
            <div className="App" onClick={ (e) => this.handleClick(e) } >
              <Navbar className="navBar" bg="" variant="">
                  <Nav.Link className="navBar"  href="/">
                    <FontAwesomeIcon className="fontAwe" size="2x" icon="home" />
                  </Nav.Link>
                  <Nav.Link className="navBar"  href="/contact"> 
                    <FontAwesomeIcon className="fontAwe" size="2x" icon="envelope" />                   
                  </Nav.Link>
              </Navbar>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/> 
                <Route exact path="/projects" component={Projects} /> 
                {/* <Route exact path="/freelance" component={freelance} />  */}
            </div>
          </BrowserRouter>
        );
      }
    }

export default App;
