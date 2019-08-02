import React, { Component } from 'react';
import './App.css';

// const wayNewWord = {this.state.newWord}

class App extends Component {
    state = {
      newWord: "",
      shiftToggle: 0
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      // console.log("new word was " + prevState.newWord);
      const wordy = this.state.newWord;
        if (this.state.shiftToggle === 1) {
          return wordy.slice(0,-1) + wordy.slice(-1).toUpperCase();
          }
          return this.state.newWord;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
      if (this.state.newWord !== prevState.newWord){
      console.log(this.state);
      this.setState({
        ...this.state,
        newWord: snapshot,
        shiftToggle: 0
      })
    }
  }
    addA = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"a"
      })
    }
    addB = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"b"
      })
    }
    addC = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"c"
      })
    }
    addD = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"d"
      })
    }
    addE = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"e"
      })
    }
    addF = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"f"
      })
    }
    addG = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"g"
      })
    }
    addH = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"h"
      })
    }
    addI = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"i"
      })
    }
    addJ = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"j"
      })
    }
    addK = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"k"
      })
    }
    addL = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"l"
      })
    }
    addM = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"m"
      })
    }
    addN = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"n"
      })
    }
    addO = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"o"
      })
    }
    addP = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"p"
      })
    }
    addQ = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"q"
      })
    }
    addR = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"r"
      })
    }
    addS = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"s"
      })
    }
    addT = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"t"
      })
    }
    addU = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"u"
      })
    }
    addV = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"v"
      })
    }
    addW = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"w"
      })
    }
    addX = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"x"
      })
    }
    addY = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"y"
      })
    }
    addZ = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+"z"
      })
    }
    shift = () => {
      this.setState({
      ...this.state,
      shiftToggle: 1
      })
    }
    addSpace = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord+" "
      })
    }
    backSpace = () => {
      // const newWord = Object.assign([], this.state.newWord);
      this.setState({
        ...this.state,
        newWord: this.state.newWord.slice(0,-1),
        shiftToggle: 0
      })
    }
    reset = () => {
      this.setState({
        ...this.state,
        newWord: "",
        shiftToggle: 0
      })
    }
  render(){
    return (
      <div className="App">
        <p
          className="word"
          onChange = {this.state.makeNewWord} >
          {this.state.newWord}
        </p>
        <button
          onClick = {this.addQ}>Q
        </button>
        <button
          onClick = {this.addW}>W
        </button>
        <button
          onClick = {this.addE}>E
        </button>
        <button
          onClick = {this.addR}>R
        </button>
        <button
          onClick = {this.addT}>T
        </button>
        <button
          onClick = {this.addY}>Y
        </button>
        <button
          onClick = {this.addU}>U
        </button>
        <button
          onClick = {this.addI}>I
        </button>
        <button
          onClick = {this.addO}>O
        </button>
        <button
          onClick = {this.addP}>P
        </button>
        <button
          onClick = {this.backSpace}>BackSpace
        </button><br/>
        <button
          onClick = {this.addA}>A
        </button>
        <button
          onClick = {this.addS}>S
        </button>
        <button
          onClick = {this.addD}>D
        </button>
        <button
          onClick = {this.addF}>F
        </button>
        <button
          onClick = {this.addG}>G
        </button>
        <button
          onClick = {this.addH}>H
        </button>
        <button
          onClick = {this.addJ}>J
        </button>
        <button
          onClick = {this.addK}>K
        </button>
        <button
          onClick = {this.addL}>L
        </button><br/>
        <button
          onClick = {this.shift}>Shift
        </button>
        <button
          onClick = {this.addZ}>Z
        </button>
        <button
          onClick = {this.addX}>X
        </button>
        <button
          onClick = {this.addC}>C
        </button>
        <button
          onClick = {this.addV}>V
        </button>
        <button
          onClick = {this.addB}>B
        </button>
        <button
          onClick = {this.addN}>N
        </button>
        <button
          onClick = {this.addM}>M
        </button><br/>
        <button
          onClick = {this.addSpace}>Space
        </button>
        <br></br>
        <br></br>
        <br></br>
        <button
          onClick = {this.reset}>Reset
        </button>
      </div>
    );
  }
}
export default App;
