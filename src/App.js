import React, { Component } from 'react';
import './App.css';
import rayen from "./rayen.jpg"
class App extends Component {
  state = {
    person: {
      fullName: "rayen",
      bio: "A passionate developer",
      imgSrc: rayen,
      profession: "Software Engineer" 
    },
    show: false,
    mountedTime: new Date(),
    elapsedTime: 0
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: Math.floor((new Date() - prevState.mountedTime) / 1000)
      }));
    }, 1000); // Update every 1 second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" height={200} />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
