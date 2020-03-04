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
        let array = Array(1000).fill()
        // Populates the array with numbers
        for(let i = 0; i < array.length; i++){
            //Change the random value for height
                array[i] = i
        }
        console.log("Array: ",array);
        
        let arr = []
        let init = array.length
        for(let j = 0; j < init; j++){
            let r = Math.floor(Math.random()*array.length)
            arr.push(array[r])
            array.splice(r,1)
        }
        console.log("Arr: ", arr);
        
        array = arr
        return array
    }

    mergeSort() {
        let list = this.state.randomArray
        const len = list.length
        // an array of length == 1 is technically a sorted list
        if (len == 1) {
            return list
        }
    
        // get mid item
        const middleIndex = Math.ceil(len / 2)
    
        // split current list into two: left and right list
        let leftList = list.slice(0, middleIndex)
        let rightList = list.slice(middleIndex, len)
    
        list = this.merge(leftList, rightList)
        this.setState({ randomArray: list })
        return
    }
    
      // Solve the sub-problems and merge them together
    merge(leftList, rightList) {
        const sorted = []
        while (leftList.length > 0 && rightList.length > 0) {
            const leftItem = leftList[0]
            const rightItem = rightList[0]
            if (leftItem > rightItem) {
                sorted.push(rightItem)
                rightList.shift()
            } else { 
                sorted.push(leftItem);
                leftList.shift()
            }
        }
    
        // if left list has items, add what is left to the results
        while (leftList.length !== 0) {
            sorted.push(leftList[0])
            leftList.shift()
        }
    
        // if right list has items, add what is left to the results
        while (rightList.length !== 0) {
            sorted.push(rightList[0])
            rightList.shift()
        }
    
        // merge the left and right list
        return sorted
    }

    async mergeLoop() {
        for(let i = 0; i < 20; i++){
            await this.sleep(10);
            this.mergeSort()
        }
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
        let boxes = this.state.randomArray.map(value => <Square value = {value}
        length = {this.state.randomArray.length}/>)
        return (
            <div>
                <div className = "align">
                    { boxes }
                </div>
                <button onClick={() => this.bubbleLoop()}>Bubble Sort</button>
                <button onClick={() => this.mergeLoop()}>Merge Sort</button>
            </div>
        );
    }
}
export default Visualizer;