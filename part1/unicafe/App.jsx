import { useState } from 'react'

const ClickButton = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}
const Statistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <p>No feedback given</p>
        )
    }
    else {
        return (
            <div>
            <StatisticLine text='good' value={props.good} />
            <StatisticLine text='neutral' value={props.neutral} />
            <StatisticLine text='bad' value={props.bad} />
            <p>average={(props.good-props.bad)/(props.good+props.neutral+props.bad)}</p>
            </div>
        )
    }
}

const App = () => {
  // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const handlegoodClick = () => {
        setGood(good + 1)
    }
    const handleneutralClick = () => {
        setNeutral(neutral + 1)
    }
    const handlebadClick = () => {
        setBad(bad + 1)
    }

    return (
    <div>
        <h1>Give Feedback:</h1>
        <ClickButton text='good' handleClick={handlegoodClick} />
        <ClickButton text='neutral' handleClick={handleneutralClick} />
        <ClickButton text='bad' handleClick={handlebadClick} />        
        <h1>Statistics:</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App