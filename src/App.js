import {useState} from 'react'

const Button = ({onClick, text}) => {
    // console.log(props)
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Display = ({counter}) => {
    return <div>{counter}</div>
}

const App = () => {
    const [counter, setCounter] = useState(0)
    const setToZero = () => setCounter(0)
    const increaseByOne = () => setCounter(counter + 1)
    const deincreaseByOne = () => setCounter(counter - 1)

    return (
        <div>
            {/*<div>{counter}</div>*/}
            <Display counter={counter}/>
            <Button text='-' onClick={deincreaseByOne}/>
            <Button text='0' onClick={setToZero}/>
            <Button text='+' onClick={increaseByOne}/>
        </div>
    )

}

export default App