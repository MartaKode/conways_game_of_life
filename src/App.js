import React, { useState, useEffect, useRef } from 'react';
import DropDowns from './components/DropDowns';
import Buttons from './components/Buttons';
import examples from './images/examples.gif'
import beacon from './images/beacon.gif'
import beehive from './images/beehive.png'
import blinker from './images/blinker.gif'
import block from './images/block.png'
import boat from './images/boat.png'
import glider from './images/glider.gif'
import hwss from './images/hwss.gif'
import loaf from './images/loaf.png'
import lwss from './images/lwss.gif'
import mwss from './images/mwss.gif'
import pentadecathlon from './images/pentadecathlon.gif'
import pulsar from './images/pulsar.gif'
import toad from './images/lwss.gif'
import tub from './images/tub.png'


function cloneArray(arr) { // to copy an array of arrays we have to stringify it
  return JSON.parse(JSON.stringify(arr));
}

const createGrid = numRows => { // initial Grid creation
  const rows = [] // array of rows 
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numRows; j++) {
      row.push(0) // initializing a single row of zeros
    }
    rows.push(row) // addign a collection of initialized rows onto rows array
  }
  return rows
}

function App() {
  const [numRows, setNumRows] = useState(25)
  const [grid, setGrid] = useState(createGrid(numRows))
  const [generation, setGeneration] = useState(0)
  const [speed, setSpeed] = useState(1000)
  const [isRunning, setIsRunning] = useState(false) // will use to check if game is running or paused

  const [cellSize, setCellsSize] = useState(20)
  const [deadColor, setDeadColor] = useState('white')
  const [aliveColor, setAliveColor] = useState('black')
  const [gridColor, setGridColor] = useState('black')


  const runningRef = useRef() // will help isRunning to persist and not change its value until intended
  runningRef.current = isRunning // set References initial value, it will persist
  // mutating the current property won't cause/need a rerender but setting state would cause or need a rerender

  const speedRef = useRef()
  speedRef.current = speed

  useEffect(() => {
    setGrid(createGrid(numRows))
  }, [numRows])


  // `````helpers````````
  const selectBox = (row, column) => {
    if (!isRunning) { // only when the game isnt running, we can select boxes
      let gridCopy = cloneArray(grid)
      gridCopy[row][column] = gridCopy[row][column] ? 0 : 1 // make the box the opposite of what it is; 1 becomes 0 and vice versa
      setGrid(gridCopy) //our copied grid is the one visible
    }
  }

  // random combination function 
  const random = (numRows) => {
    const rows = [] // array of rows 
    for (let i = 0; i < numRows; i++) {
      const row = []
      for (let j = 0; j < numRows; j++) {
        row.push(Math.random() > .7 ? 1 : 0) // 70% chance to get a 0
      }
      rows.push(row) // adding a collection of 1s and 0s rows onto rows array
    }
    setGrid(rows)
  }


  //CLEAR THE GRID
  const clearGrid = () => {
    setGrid(createGrid(numRows))
    setGeneration(0)
  }


  // #### Game Logic #####

  const countNeighbors = (currentGrid) => {
    // console.log(currentGrid)
    let gridCopy = cloneArray(currentGrid)

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numRows; j++) {
        let neighbors = 0
        // check bounds -- > reorder  conditions
        // figuring out the 8 possible neighbors and their x-y coordinations:
        if (j < numRows - 1 && currentGrid[i][j + 1] === 1) { // [0,1] // numRows -1?
          neighbors++
        } if (j > 0 && currentGrid[i][j - 1] === 1) { // [0,-1]
          neighbors++
        } if (i < numRows - 1 && currentGrid[i + 1][j] === 1) { // [1,0]
          neighbors++
        } if (i > 0 && currentGrid[i - 1][j] === 1) { // [-1,0]
          neighbors++
        } if (i < numRows - 1 && j < numRows - 1 && currentGrid[i + 1][j + 1] === 1) { // [1,1]
          neighbors++
        } if (i > 0 && j < numRows - 1 && currentGrid[i - 1][j + 1] === 1) { // [-1,1]
          neighbors++
        } if (j > 0 && i < numRows - 1 && currentGrid[i + 1][j - 1] === 1) { //[1,-1]
          neighbors++
        } if (i > 0 && j > 0 && currentGrid[i - 1][j - 1] === 1) { //[-1,-1]
          neighbors++
        }


        if (neighbors < 2 || neighbors > 3) {
          gridCopy[i][j] = 0
        } if (currentGrid[i][j] === 0 && neighbors === 3) {
          gridCopy[i][j] = 1
        }

      }// 2nd forloop end
    }// 1st forloop end

    return gridCopy
  }


  const playGame = () => {
    if (!runningRef.current) { // when we click stop, current value should change to False
      return
    }
    
    setGrid(countNeighbors)
    setGeneration(g => g + 1)

    setTimeout(playGame, speedRef.current) // while current value of runningRef is true, run the loop
  }
  

  return (
    <main>
      <h1>✨Conway's Game of Life✨</h1>

          <div className='controlers'>
            <Buttons
              setIsRunning={setIsRunning}
              isRunning={isRunning}
              runningRef={runningRef}
              playGame={playGame}
              random={random}
              numRows={numRows}
              clearGrid={clearGrid}
              setGrid={setGrid}
              countNeighbors={countNeighbors}
              setGeneration={setGeneration}
              generation={generation}
              />

            <DropDowns
              setNumRows={setNumRows}
              setSpeed={setSpeed}
              setCellsSize={setCellsSize}
              setDeadColor={setDeadColor}
              setAliveColor={setAliveColor}
              setGridColor={setGridColor}
              />
          </div>

            <h4>Generation: {generation}</h4>

          <div className='grid'>
            {grid.map((rows, i) => { // accessing rows at a specific index i => x coordinates
              return (
                <div className='row'
                key={i}
                style={{
                  display: 'flex'
                }}>
                  {rows.map((columns, j) => { // accessing column number => y coordinates
                    return (
                      <div className={grid[i][j] ? 'alive' : 'dead'}
                        key={j}
                        style={{
                          width: cellSize, // width of a single rectangle
                          height: cellSize, // height of a single rectangle
                          backgroundColor: grid[i][j] ? aliveColor : deadColor, // color of each rectangle depending on whether it's a 1 or 0
                          border: `solid 1px ${gridColor}`, // just a basic border for the rectangle to see it
                          color: grid[i][j] ?  deadColor:aliveColor, // color of each rectangle depending on whether it's a 1 or 0
                        }}
                        onClick={() => selectBox(i, j)} // !!!! if running, must disable selection
                      >{grid[i][j]? '`' : ''}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>


          <div className='rules'>
            <h3>Rules</h3>
            <p> Click on the boxes to turn them alive (or dead if they are already alive): </p>
            <p>-- If the cell is alive and has 2 or 3 neighbors, then it remains alive; Else it dies.</p>
            <p>-- If the cell is dead and has exactly 3 neighbors, then it comes to life; Else it remains dead.</p>
          </div>




      <div className='formations'>
        <h3>Cool/basic formations to try out:</h3>
        
        <div className='pictures'>
        <div className='stillLives'>
          <div className='title'>-- Still lives</div>
        block
        <img src={block} alt='block'></img>
        beehive
        <img src={beehive} alt='beehive'></img>
        loaf
        <img src={loaf} alt='loaf'></img>
        boat
        <img src={boat} alt='boat'></img>
        tub
        <img src={tub} alt='tub'></img>
        </div>

        <div className='oscillators'>
        <div className='title'>-- Oscillators</div>
        blinker
        <img src={blinker} alt='blinker'/>
        toad
        <img src={toad} alt='toad'></img>
        beacon
        <img src={beacon} alt='beacon'></img>
        pulsar
        <img src={pulsar} alt='pulsar'></img>
        pentadecathlon
        <img src={pentadecathlon} alt='pentadecathlon'></img>
        </div>

        <div className='spaceships'>
        <div className='title'>-- Spaceships </div>
        glider
        <img src={glider} alt='glider'></img>
        lwss - light-weight spaceship
        <img src={lwss} alt='lwss'></img>
        mwss - medium-weight spaceship
        <img src={mwss} alt='msww'></img>
        hwss - heavy-weight spaceship
        <img src={hwss} alt='hwss'></img>
        </div>

        </div>{/* end of pictures div */}
      </div>{/* end of formations div */}

      <div className='c_a'>
        <h3>Cellular Autonoma</h3>
        <p>A cellular automaton is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells. The rules are then applied iteratively for as many time steps as desired</p>
      </div>

    </main> // main closing div

  );
}


export default App;