import React from 'react';
import './App.css';

import WebTechnology from './Components/WebTechnology';

const technologies = ['React', 'React Native', 'JavaScript'];

export default class App extends React.Component {

  renderTechnologiesContent = () => {
    let technologiesContent = <p>Aucune technologie disponible.</p>;

    if(technologies.length > 0) {
      technologiesContent = (
        technologies.map((tech, index) => {
          return (
            <WebTechnology key={index} title={tech} />
          );
        })
      )
    }
    return technologiesContent;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Manipulation des listes et affichage conditionnel
        </header>
        <h2>Technologies Web</h2>
        { this.renderTechnologiesContent() }
      </div>
    );
  }
}

