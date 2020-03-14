import React from 'react';
import './App.css';
import './Lib/Api';
import Api from './Lib/Api';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalActive: false,
      characters: [],
      idCharacterSelected: 1,
    }
  }

  componentDidMount(){
    Api.getAllCharacters()
    .then(results => {
      this.setState({
        characters: results
      })
    })
    .catch(c => console.error(c))
  }

  activateModal(id){
    Api.getCharacterById(id)
    .then(character => {
      this.setState({
        modalActive: true,
        characterSelected: character,
      })
    })
    console.log(this.state)
  }
  
  deactivateModal(){
    this.setState({
      modalActive: false
    })
  }
  renderCards(c) {
    return( 
      <div key={c.id} className="card" onClick={character => this.activateModal(c.id)}>
        <div className="card-img">
          <figure>
            <img src={c.image} alt='' />
          </figure>
        </div>
        <div className="card-description">
          <div className="card-name">
            <h3> {c.name} </h3>
          </div>
        </div>
      </div>
            
    )
  }

  render() {
    const { modalActive, characters } = this.state
    const cards = characters.map(c => this.renderCards(c))
    console.log(cards)
    return (
      <div className="app">
        <div className="app-container">
          <h1> Ricardo y Martin</h1>
          <div className="card-container">
            {cards}
          </div>
          { modalActive ? (
            <div className="modal" onClick={c => this.deactivateModal()}>
              <div className="card-detail">
                <div className="card-img">
                  <figure>
                    <img src={this.state.characterSelected.image} alt='no te salio prro' />
                  </figure>
                </div>
                <div className="card-detail-description">
                  <div className="description">
                    <h3> {this.state.characterSelected.name} </h3>
                    <div className="caracteristic">
                      <p> Status </p>
                      <p className="caracteristic-value">
                        {this.state.characterSelected.status}
                      </p>
                    </div>
                    <div className="caracteristic">
                      <p> Species </p>
                      <p className="caracteristic-value">
                        {this.state.characterSelected.species}
                      </p>
                    </div>
                    <div className="caracteristic">
                      <p> Gender </p>
                      <p className="caracteristic-value">
                        {this.state.characterSelected.gender}
                      </p>
                    </div>
                    <div className="caracteristic">
                      <p> Origin </p>
                      <p className="caracteristic-value">
                        {this.state.characterSelected.origin.name}
                      </p>
                    </div>
                    <div className="caracteristic">
                      <p> Last Location </p>
                      <p className="caracteristic-value">
                        {this.state.characterSelected.location.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  
  }

  
export default App;
