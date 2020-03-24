import React from 'react'
import Header from './Header'


export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

        this.state = {
        prevScrollpos: window.pageYOffset,
        visible: true
        };
    }

    // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos || currentScrollPos == 0;
    //console.log(visible);

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
      
    });
  };

//   burgerTransition = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
//     debugger;
//     nav.classList.toggle('nav-active');
//     nav.style.transition = 'transform 0.5s ease-in';

//     //animate sidebar
//     navLinks.forEach((link, index) => {
//         if(link.style.animation){
//             link.style.animation = '';
//         }
//         else{
//             link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;

//         }
//     });
//     //burger animation
//     burger.classList.toggle('toggle');
// };burgerTransition={this.burgerTransition}

  render() {
    return (
        <Header visible={!this.state.visible} />
    );
  }
}