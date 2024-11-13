// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {
    isTimerRunning: false,
    timerInSeconds: 0,
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalId)
  }

  startTimer = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  OnClickStartButton = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.intervalId = setInterval(this.startTimer, 1000)
      this.setState({isTimerRunning: true})
    }
  }

  onClickStopButton = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onClickResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, timerInSeconds: 0})
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    const seconds = Math.floor(timerInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    const time = this.getElapsedSecondsInTimeFormat()

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-image"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                disabled={isTimerRunning}
                className="start-button button"
                onClick={this.OnClickStartButton}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onClickStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onClickResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
