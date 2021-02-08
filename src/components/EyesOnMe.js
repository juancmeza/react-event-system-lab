import React, { Component } from 'react';

export default class EyesonMe extends Component {

//   makeColorSwatches = () => (
//     ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
//       return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
//     })
//   )

 handleOnFocus = () => {
     console.log('Good!')
 }

 handleOnBlur = () => {
    console.log('Hey! Eyes on me!')
}

  render() {
    return (
      <div >
          <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button>
      </div>
    )
  }
}
