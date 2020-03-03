import React, { Component } from 'react';
import Square from './square'

export default class Visualizer extends Component {
    constructor(){
        super()
        this.state = {
            matrix: this.createArray()
        }
    }

    createArray() {
        let array = Array(2000).fill(1)
        let arr = []
        // Populates the array with numbers
        for(let i = 0; i < array.length; i++){
                array[i] = <Square value = {i}/>
        }

        //Randomizes the array
        while (array.length > 0) {
            let r = Math.floor(Math.random()*array.length)
            arr.push(array[r])
            array.splice( r, 1)
        }
        return arr
    }


    render(){
        let organize = this.state.matrix.map(arr => <div className = "vertical">{arr}</div>)
        return (
            <div className = "align">
                { organize }
            </div>
        );
    }
}