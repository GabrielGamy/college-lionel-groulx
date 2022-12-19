import React from "react";
import "./App.css";
import OutlookForm from "./components/OutlookForm";
import OutlookHeader from "./components/OutlookHeader";

class App extends React.Component {
  envoyer = (data) => {
    console.log("Dans App.js", data);
  };

  render() {
    return (
      <div className="body">
        <OutlookHeader />
        <OutlookForm subject="Introduction à React" envoyer={this.envoyer} />
      </div>
    );
  }
}

export default App;
