import React, { Component } from 'react';
import Square from './square'

class Visualizer extends Component {
    constructor(){
        super()
        this.state = {
            randomArray: this.createArray()
        }
    }

    createArray() {
        //Change Array Value for width
        let array = Array(1750).fill()
        // Populates the array with numbers
        for(let i = 0; i < array.length; i++){
            //Change the random value for height
                array[i] = Math.floor(Math.random()*750)
        }
        return array
    }

    bubbleSort() {
        let arr = this.state.randomArray
            for(let j = 0; j < 3; j++)
            for(let i = 0;i < arr.length; i++){
                if (arr[i] > arr[i+1]){
                    let temp = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = temp
                } else {
                }
            }
            this.setState({ randomArray: arr })
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async bubbleLoop() {
        for(let i = 0; i < this.state.randomArray.length/3; i++){
            await this.sleep(10);
            this.bubbleSort()
        }
    }
    
    render(){
        let boxes = this.state.randomArray.map(value => <Square value = {value}/>)
        return (
            <div>
                <div className = "align">
                    { boxes }
                </div>
                <button onClick={() => this.bubbleLoop()}>Bubble Sort</button>
                {/* <button onClick={() => this.selectionLoop()}>Selection Sort</button> */}
            </div>
        );
    }
}
export default Visualizer;