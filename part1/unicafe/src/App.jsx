import { useState } from 'react'
import './App.css'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad <= 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <h2>No feedback given</h2>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text='Good' value={good}/>
          <StatisticLine text='Neutral' value={neutral}/>
          <StatisticLine text='Bad' value={bad}/>
          <StatisticLine text='Total' value={good + neutral + bad}/>
          <StatisticLine text='Average' value={((good - bad) / (good + bad)).toFixed(2)}/>
          <StatisticLine text='Positive' value={((good / (good + neutral + bad) * 100)).toFixed(2)}/>
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Us FeedBack Please!</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App