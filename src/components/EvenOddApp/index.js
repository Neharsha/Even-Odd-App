// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {Number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const RandomNumber = this.getRandomNumber()

    this.setState(prevState => ({Number: prevState.Number + RandomNumber}))
  }

  render() {
    const {Number} = this.state
    const DisplayText = Number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1>Count {Number}</h1>
        <p>Count is {DisplayText}</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
        </div>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
