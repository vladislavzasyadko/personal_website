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

  render() {
    return (
        <Header visible={!this.state.visible} />
    );
  }
}