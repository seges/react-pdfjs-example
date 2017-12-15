import React, { Component }  from 'react';

// Components
import { PDFViewer } from './components/PDFViewer';

// Assets
import logo from './assets/images/logo.svg';

// Styles
import './assets/css/App.css';

class App extends Component {
  state = {
    renderPdf: false
  };

  toggleRender = () => {
    this.setState({
      renderPdf: !this.state.renderPdf
    });
  };

  render() {
    const { renderPdf } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PDF.JS Example for ReactJS</h1>
        </header>
        <p className="App-intro">
          To get started, check code in <code>src/components/PDFViewer/index.js</code>.
        </p>
        <button className="App-button" onClick={this.toggleRender}>Open default PDF</button>

        { renderPdf && (
          <div className="App-overlay">
            <button className="App-button App-button-close" onClick={this.toggleRender}>Close</button>
            <PDFViewer />
          </div>
        )}
      </div>
    );
  }
};

export default App;
