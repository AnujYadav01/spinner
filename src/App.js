import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    name: "circle",
  };

  startRotation = () => {
    this.setState({
      name: "circle start-rotate",
    });
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate stop-rotate",
      });
    }, Math.floor(Math.random() * 10000) + 1);
  };
  render() {
    return (
      <div>
        <div className="arrow"></div>
        <ul className={this.state.name}>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $100
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $200
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $300
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $400
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $500
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $600
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Try Again
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $800
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $900
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $1000
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              Try Again
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              $1200
            </div>
          </li>
        </ul>
        <button className="spin-button" onClick={this.startRotation}>
          SPIN
        </button>
      </div>
    );
  }
}

export default App;
