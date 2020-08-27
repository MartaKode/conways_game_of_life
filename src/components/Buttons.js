import React from 'react'

const Buttons = ({ setIsRunning, isRunning, runningRef, playGame, random, numRows, clearGrid, setGrid, countNeighbors, setGeneration, generation }) => {

    return (
        <div className='buttons'>
            <button
                onClick={() => {
                    setIsRunning(!isRunning)
                    if (!isRunning) { // if we're not running the game, run the game
                        runningRef.current = true // change the current value of runningRef to true 
                        playGame()
                    }
                }}
            >
                {isRunning ? 'Stop' : 'Start'}
            </button>

            <button
                onClick={() => random(numRows)}
            >Random</button>

            <button
                onClick={() => clearGrid()}
            >Empty Grid</button>

            <button
                onClick={() => {
                    setGrid(countNeighbors)
                    setGeneration(generation + 1)
                }}
            >Next Generation</button>
        </div>
    )
}

export default Buttons