import React from "react";
import WebTechnology from "./components/WebTechnology";

import "./App.css";

const technologies = [
  {
    id: "react-123",
    value: "React",
  },
  {
    id: "reactnative-123",
    value: "React Native",
  },
  {
    id: "js-123",
    value: "JavaScript",
  },
  {
    id: "chsarp-123",
    value: "C#",
  },
];

class App extends React.Component {
  afficherTechnologies = () => {
    let content = <h2>Aucune technologies</h2>;

    if (technologies.length > 0) {
      content = (
        <>
          <h1>Technologies</h1>
          <ul>
            {technologies.map((item) => {
              return <WebTechnology key={item.id} data={item} />;
            })}
          </ul>
        </>
      );
    }

    return content;
  };

  render() {
    return <div>{this.afficherTechnologies()}</div>;
  }
}

export default App;
