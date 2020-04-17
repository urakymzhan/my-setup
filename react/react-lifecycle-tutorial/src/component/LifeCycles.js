
import React, { Component } from 'react';

class LifeCycles extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCycles constructor");
  }

  isMountd = false

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycles getDerivedStateFromProps")
    return null;
  }

  componentDidMount() {
    console.log("LifeCycles componentDidMount");

    this.isMountd = true;
    console.log("this.isMountd in componentDidMount: ", this.isMountd);

  }

  shouldComponentUpdate() {
    console.log("LifeCycles shouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycles getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycles componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("LifeCycles componentWillUnmount");

    this.isMountd = false;
    console.log("this.isMountd in componentWillUnmount: ", this.isMountd);
  }

  render() {
    console.log('LifeCycles render');
        
    return (
        <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>

            <div>I am a nested LifeCycles Component</div> <br/>
            <div>III love {this.props.framework}</div><br/>

        </div> 
    );
  }
}


export default LifeCycles;



