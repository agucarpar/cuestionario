import React from 'react'

const FinalMessage = (props) => {
    const {score,questionsLength} = props
    return (
        <div>
            <h5>Esa ha sido la última pregunta</h5>
            <p>Has acertado <span>{score}/{questionsLength}</span></p>
        </div>
    )
}

export default FinalMessage
