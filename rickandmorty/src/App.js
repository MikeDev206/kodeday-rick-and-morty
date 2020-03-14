import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  renderCards() {
    return( 
      <div className="card">
        <div className="card-img">
          <figure>
            <img src={"https://rickandmortyapi.com/api/character/avatar/427.jpeg"}  />
          </figure>
        </div>
        <div className="card-description">
          <div className="card-name">
            <h3> RICK </h3>
          </div>
        </div>
      </div>
            
    )
  }

  render() {

    const fakeData = [0,1,2,3,4,5,6,7]
    const cards = fakeData.map(prro => this.renderCards())
    console.log(cards)
    return (
      <div className="app">
        <div className="app-container">
          <h1> Ricardo y Martin</h1>
          <div className="card-container">
            {cards}
          </div>
        </div>
      </div>
    );
  }
  
  }

  
export default App;
