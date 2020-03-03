import React, { Component } from 'react';

export default class square extends Component {
    setSize(){
        if(this.props.value > 0){
        return (this.props.value)
        } 
        if(this.props.value === 0){
            return 1
        }
    }

  render(){
  return (
    <div style={{ height: this.setSize(), width: 1, backgroundColor: "teal" }}></div>
  );
  }
}