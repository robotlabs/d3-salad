import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.node = React.createRef();
  }
  componentDidMount() {
    let loaderPage = document.getElementsByClassName('loader-page')[0];
    console.log('loader page ', loaderPage);
  }
  render() {
    return (
      <div 
        ref={this.node}
        className="App">
        <header className="App-header">
          Ciao
          
        </header>
      </div>
    );
  }
}

export default App;
