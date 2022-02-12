import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css'

const rootElement = document.getElementById('root')

const WarningNotUse = () => {
    return <h1>no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => {
    // console.log(clicks)
    return <h1>{clicks}</h1>
}

const App = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)

    const [counter, setCounter] = useState({
        left: 0,
        right: 0,
        mensaje: 'Hola Como estas',
        clicksLetter: []
    })

    // const [clicks, setClicks] = useState([])

    const handleClickLeft = () => {
        const newCounterState = {
            ...counter,
            left: counter.left + 1,
            clicks: counter.clicks + 1,
            clicksLetter: [...counter.clicksLetter, 'L']
        }
        setCounter(newCounterState)
        // setClicks(prevClicks => ([...prevClicks, 'L']))
    }

    const handleClickRight = () => {
        setCounter({
            ...counter,
            left: counter.left,
            right: counter.right + 1,
            clicks: counter.clicks + 1,
            clicksLetter: [...counter.clicksLetter, 'R']
        })
        // setClicks(prevClicks => ([...prevClicks, 'R']))
    }

    return (
        <div>
            {counter.left}
            <button onClick={handleClickLeft}>left</button>
            <button onClick={handleClickRight}>right</button>
            {counter.right}
            <br/>
            <span>{counter.clicksLetter.length}</span>
            <br/>
            <span>{counter.mensaje}</span>
            {/*{counter.clicksLetter.length}*/}
            {/*<p>{counter.clicksLetter.length === 0 ? <WarningNotUse/> : <ListOfClicks clicks={clicks}/>}</p>*/}
            {counter.clicksLetter.length === 0 ? (<WarningNotUse/>) : (
                <ListOfClicks clicks={counter.clicksLetter.length}/>)
            }
        </div>
    )
}

ReactDOM.render(
    <App/>,
    rootElement
)
;



































