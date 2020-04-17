import React, { Component } from 'react';
import './index.css';
import LifeCycle from './component/LifeCycles'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      framework: "React",
      doYouWantToRedirect: false
    }
  } 

  changeDecision = () => {
    this.setState({framework: "Vue"})
  }

  changeRedirect =() => {
    this.setState (prevState => ({doYouWantToRedirect: !prevState.doYouWantToRedirect }))
  }

  render() {
    return (
      <div className="app">

        <div>hey open the console to learn React LifeCycles</div><br/>
        <button onClick={this.changeRedirect}>Redirect me to LifeCycles Component</button>  
         <br/>
        {
          this.state.doYouWantToRedirect &&   
          <>  
          <LifeCycle framework={this.state.framework} />  

          <button onClick={this.changeDecision}>Change my decision</button>
          </> 
        }

      </div>
    );
  }
}

export default App;

// Mounting
// LifeCycles constructor
// LifeCycles getDerivedStateFromProps
// LifeCycles render
// LifeCycles componentDidMount

// Updating
// LifeCycles getDerivedStateFromProps
// LifeCycles shouldComponentUpdate
// LifeCycles render
// LifeCycles getSnapshotBeforeUpdate
// LifeCycles componentDidUpdate

