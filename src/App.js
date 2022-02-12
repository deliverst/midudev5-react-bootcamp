import {useState} from 'react'

const Button = ({text, onClick, total}) => {
    return <button onClick={onClick}>{text}</button>
}

const Display = ({contador, text}) => {
    return (<p>{text} {contador}</p>)
}

const Statistics = (props) => {
    const {neutral, bad, good} = props.data
    let sumTotal = neutral + bad + good
    let ave = parseFloat(sumTotal / 3).toFixed(2)
    let porcentage = sumTotal === 0 ? 0 : parseFloat(100 / sumTotal * good).toFixed(2)
    return <>
        {/*<div>Good: {good}</div>*/}
        {/*<div>Neutral: {neutral}</div>*/}
        {/*<div>Bad: {bad}</div>*/}
        {/*<div>Promedio: {ave}</div>*/}
        {/*<div>Porcentaje: {porcentage}%</div>*/}
        <table>
            <tr>
                <td>Good</td>
                <td>{good}</td>
            </tr>
            <tr>
                <td>Neutral</td>
                <td>{neutral}</td>
            </tr>
            <tr>
                <td>Bad</td>
                <td>{bad}</td>
            </tr>
            <tr>
                <td>Promedio</td>
                <td>{ave}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>{sumTotal}</td>
            </tr>
            <tr>
                <td>Porce Positiv</td>
                <td>{porcentage}</td>
            </tr>
        </table>
    </>
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const clicksLetter = [];
    const handleGood = () => setGood(good + 1)
    const handleNeutral = () => setNeutral(neutral + 1)
    const handleBad = () => setBad(bad + 1)
    const total = good + neutral + bad

    return (
        <div>
            <Button text={'Good'} onClick={handleGood}/>
            <Button text={'Neutral'} onClick={handleNeutral}/>
            <Button text={'Bad'} onClick={handleBad}/>

            <h1>STATICS</h1>
            {/*<Display text={'Good'} contador={good}/>*/}
            {/*<Display text={'Neutral'} contador={neutral}/>*/}
            {/*<Display text={'Bad'} contador={bad}/>*/}
            {/*<Display text={'Total: '} contador={total}/>*/}
            {total === 0 ? <h1>No hay Estadisticas Aun</h1> : <Statistics data={{good, neutral, bad}}/>}

        </div>
    )
}

export default App