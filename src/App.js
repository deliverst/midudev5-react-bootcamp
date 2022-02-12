import {useState} from 'react'
import './App.css'

const Button = (props) => {
    render

}

const App = () => {
    const [counter, setCounter] = useState(0)
    const setToZero = () => setCounter(0)
    const increaseByOne = () => setCounter(counter + 1)
    const deincreaseByOne = () => setCounter(counter - 1)

    return (
        <div>
            <div>{counter}</div>
            <button onClick={deincreaseByOne}>-</button>
            <button onClick={setToZero}>0</button>
            <button onClick={increaseByOne}>+</button>
        </div>
    )

}

export default App