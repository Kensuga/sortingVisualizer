import React, { Component } from 'react';

export default class square extends Component {
  constructor(props){
    super(props)
    this.state = {
      height: this.setSize()
    }
  }
    setSize(){
        if(this.props.value > 0){
        return ((this.props.value/this.props.length)*100)
        } 
    }

  render(){
  return (
    <div style={{ height: `${this.setSize()}%`, width: 1, backgroundColor: "teal" }}></div>
  );
  }
}