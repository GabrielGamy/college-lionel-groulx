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

//const technologies = [];

class App extends React.Component {
  render() {
    return (
      <div>
        {/*technologies.length > 0 ? (
          <ul>
            {technologies.map((item) => {
              return <WebTechnology key={item.id} data={item} />;
            })}
          </ul>
          ) : null*/}

        {technologies.length === 0 && <h2>Aucune technologies</h2>}
        {technologies.length > 0 && (
          <ul>
            {technologies.map((item) => {
              return <WebTechnology key={item.id} data={item} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
