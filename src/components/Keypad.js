import React, { Component } from 'react';

export default class Keypad extends Component {

//   makeColorSwatches = () => (
//     ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
//       return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
//     })
//   )
handleKeyUp = () => {
    console.log('Entering password...')
} 

handleOnChange = (e) => {
    console.log(e.target.value)
} 

render() {
return (
  <div >
    <input type="password" onKeyUp={this.handleKeyUp} onChange={this.handleOnChange}/>
  </div>
)
}
}
