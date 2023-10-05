import React, { Component } from 'react';
import './CursorComponent.css'; // Import the CSS file

class CursorComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cursorVisible: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseout', this.handleMouseOut);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseout', this.handleMouseOut);
  }

  handleMouseMove = (e) => {
    const cursor = document.querySelector('#cursor');
    const body = document.querySelector('.cursorBody');

    cursor.style.opacity = 1;
    cursor.style.top = e.pageY+ 'px';
    cursor.style.left = e.pageX + 'px';

    // Background
    body.style.backgroundPositionY = e.pageY / -4 + 'px';
    body.style.backgroundPositionX = e.pageX / -4 + 'px';
  };

  handleMouseOut = () => {
    const cursor = document.querySelector('#cursor');
    cursor.style.opacity = 0;
  };

  hello = () => {
    document.getElementById('p').innerText = "🚀 Fresh full-stack engineer, eager to learn and grow. Let's chat about how I can bring value to your team! 😊👩‍💻";
  };

  render() {
    return (
      <div className='cursorBody' onClick={this.hello}>
        <p>Tap here</p>
        <div id="cursor" ></div>
        <p id="p"></p>
      </div>
    );
  }
}

export default CursorComponent;
