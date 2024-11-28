import { useState } from 'react'

const MostRatedAnecdote = ({ value, anecdote }) => {
  return (
    <div>
      <h1>Most Rated Anecdote</h1>
      <p>Votes:{value}</p>
      <p>{anecdote}</p>
    </div>
  )
}

const Votes = ({ value }) => {

  return (
    <div>
      <p>Votes count: {value}</p>
    </div>
  )
}

const Buttons = ({ onClick, text }) => {

  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  const handleSwitchAnecdote = () => {
    let newValue;
    do {
      newValue = Math.floor(Math.random() * 7);
    } while (newValue === selected);
    setSelected(newValue);
  };
  console.log(selected)

  const handleVoteAnecdote = () => {
    const dupArr = [...votes]
    dupArr[selected] += 1
    setVotes(dupArr)
  }

  const sortFunc = () => {
    const maxIndex = votes.indexOf(Math.max(...votes))
    return maxIndex
  }

  const highVotes = sortFunc()

  return (
    <div>
      {anecdotes[selected]}
      <Votes value={votes[selected]}/>
      <Buttons onClick={handleVoteAnecdote} text='Vote' />
      <Buttons onClick={handleSwitchAnecdote} text='Random Anecdote' />
      <MostRatedAnecdote value={votes[highVotes]} anecdote={anecdotes[highVotes]} />
    </div>
  )
}

export default App