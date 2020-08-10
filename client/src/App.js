import React from 'react';
import './App.css'
import {Image} from 'semantic-ui-react'
import AboutMe from './components/AboutMe.js'
import ShopGrid from './components/ShopGrid.js'
import MenuBar from './components/MenuBar.js'
import Carrousel from './components/Carrousel.js'
import ContactUs from './components/ContactUs.js'
import './fonts/Sangha.ttf'
import './fonts/Blatant.otf'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.myRefHome = React.createRef()
    this.myRefAbout = React.createRef()
    this.myRefShop = React.createRef()
    this.myRefContactUs = React.createRef()
  }

  handler(menuValue) {
    this.setState({showContent: menuValue});
    switch(menuValue) {
      case "Home":
        this.myRefHome.current.scrollIntoView({behavior: 'smooth'});
        break;
      case "About":
        this.myRefAbout.current.scrollIntoView({behavior: 'smooth'});
        break;
      case "Shop":
        this.myRefShop.current.scrollIntoView({behavior: 'smooth'});
        break;
      case "Contact Us":
        //this.myRefContactUs.current.scrollIntoView({behavior: 'smooth'});
        window.scrollTo(0, this.myRefContactUs.current.offsetTop) 
        break;
      default:
        console.log("can't scroll to undefined case")
        break;
    }
  }

  componentDidMount(){
    /*
    //fix home image
    let homeImage = document.querySelector('div[data-item="1"] img')
    let wrapper = document.querySelector("div.wrapper")
    let diference = ((wrapper.offsetHeight - homeImage.height) / 2) - 100
    diference = diference.toString() + 'px';
    homeImage.style.marginTop = diference;
    console.log(diference, homeImage)
    console.log(React.version, "app component mounted");
    */
    class Slider {
      constructor(settings) {
        this.setting = settings;
        let delay, autoplay, arrows, dots, wait_time;
        delay = 5000;
        autoplay = false;
        arrows = true;
        dots = false;
        this.clicked = false;
        this.delayClicked = 1000;
        this.current = 1;
        if (!settings) {
          this.setting = { delay, autoplay, arrows, dots };
        }
        this.wrapper = document.querySelector(".wrapper");
        this.items = document.querySelectorAll(".slide-image");
        this.nextBtn = document.querySelector(".next-btn");
        this.prevBtn = document.querySelector(".prev-btn");

        if (this.setting.arrows) {
          this.nextBtn.addEventListener(
            "click",
            function() {
              clearInterval(wait_time);
              if (!this.clicked) {
                this.clicked = true;
                this.next();
                setTimeout(() => {
                  this.clicked = false;
                }, this.delayClicked);
              }
              if(this.setting.autoplay){
                          wait_time = setInterval(() => {
                this.next();
              }, this.setting.delay);
              }
    
            }.bind(this)
          );
          this.prevBtn.addEventListener(
            "click",
            function() {
              clearInterval(wait_time);
              if (!this.clicked) {
                this.clicked = true;
                this.prev();
                setTimeout(() => {
                  this.clicked = false;
                }, this.delayClicked);
              }
              if(this.setting.autoplay){
                    wait_time = setInterval(() => {
                this.prev();
              }, this.setting.delay);
              }
            
            }.bind(this)
          );
        } else {
          this.nextBtn.style.display = "none";
          this.prevBtn.style.display = "none";
        }
        if (this.setting.dots) {
          let i, len, ul, li, div;
          ul = document.createElement("ul");
          ul.classList.add("dots-parent");
          dots = [];
          len = this.items.length;
          let self = this;
          for (i = 1; i <= len; i++) {
            li = document.createElement("li");
            li.classList.add("dot");
            li.setAttribute("data-item", i);
            li.addEventListener("click", function() {
              clearInterval(wait_time);
              wait_time = setInterval(
                function() {
                  self.next();
                }.bind(this),
                self.setting.delay
              );
            });
            li.addEventListener("click", this.showSlide.bind(this, i));
            ul.appendChild(li);
            dots.push(li);
          }
          div = document.createElement("div");
          div.classList.add("container-dots");
          div.appendChild(ul);
          this.wrapper.appendChild(div);
          document.querySelector(".dot").classList.add("active");
        }
        if (this.setting.autoplay) {
          this.setting.delay = 6000;
          wait_time = setInterval(() => {
            this.next();
          }, this.setting.delay);
        }
      }
      next() {
        if (this.current !== this.items.length) {
          this.current += 1;
          this.showSlide(this.current);
        } else {
          this.current = 1;
          this.showSlide(this.current);
        }
      }
      prev() {
        if (this.current > 1) {
          this.current -= 1;
          this.showSlide(this.current);
        } else {
          this.current = this.items.length;
          this.showSlide(this.current);
        }
      }
      showSlide(slideNumber) {
        this.items.forEach(function(item) {
          item.classList.remove("active");
        });
        try{
          //set active
          document
            .querySelector('div[data-item="' + slideNumber + '"]')
            .classList.add("active");
          /*
          let activeImage = document.querySelector(".slide-image.active img")
          let wrapper = document.querySelector("div.wrapper")
          let diference = ((wrapper.offsetHeight - activeImage.height) / 2) - 0
          diference = diference.toString() + 'px';
          //console.log(diference, " -> imageH= ", activeImage.offsetHeight, "wrapperH=", wrapper.offsetHeight)
          activeImage.style.marginTop = diference;
          */
          if (this.setting.dots) {
            document.querySelectorAll(".dot").forEach(function(dot) {
              dot.classList.remove("active");
            });
            document
              .querySelector('.dot[data-item="' + slideNumber + '"]')
              .classList.add("active");
          }
        }catch(e){
          console.log(e)
        }
      }
    }
    document.addEventListener("DOMContentLoaded", function() {
      new Slider({
        arrows: true,
        dots: true,
        autoplay: true,
        delay: 6000
      });
    });          
  }

  componentDidUpdate(){
    console.log("me actualize we")
  }

  render(){
    /*
    const content = this.state.showContent;
    let showComponent;//this is the conditional render
    if(content == "Home") {
      showComponent = <Carrousel/>;
    } else if(content == "Shop") {
      showComponent = <ShopGrid/>;
    }
    */

    return (
      <div className="App">
        <MenuBar id="Menu" menuOption={this.handler} />
        <Carrousel ref={this.myRefHome}/>
        <AboutMe ref={this.myRefAbout}/>
        <ShopGrid ref={this.myRefShop}/>
        <Image/>
        <ContactUs ref={this.myRefContactUs}/>
        <div className="BrandRegistration">
          <p>© 2020, Two Heads Clothing.</p>
        </div>
      </div>
    );
  }
}

export default App;
