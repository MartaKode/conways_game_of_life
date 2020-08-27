import React from 'react'

const DropDowns = ({setNumRows,setSpeed, setCellsSize, setAliveColor, setDeadColor, setGridColor }) =>{
  // change grid size
  const selectGridSize = () => {
    const gridSelect = document.querySelector('#gridSize')
    // const gridOptions = document.querySelector('#gridSize').options
    // console.log(gridOptions[gridSelect.selectedIndex].text)

    if (gridSelect.selectedIndex === 1) {
      setNumRows(25)
    }
    if (gridSelect.selectedIndex === 2) {
      setNumRows(30)
    }
    if (gridSelect.selectedIndex === 3) {
      setNumRows(35)
    }
    if (gridSelect.selectedIndex === 4) {
      setNumRows(40)
    }
    if (gridSelect.selectedIndex === 5) {
      setNumRows(45)
    }
  }

  //changing speed ??
  const changeSpeed = () => {
    const speedSelect = document.querySelector('#speed')
    if (speedSelect.selectedIndex === 1) {
      setSpeed(10)
    }
    if (speedSelect.selectedIndex === 2) {
      setSpeed(100)
    }
    if (speedSelect.selectedIndex === 3) {
      setSpeed(500)
    }
    if (speedSelect.selectedIndex === 4) {
      setSpeed(1000)
    }
    if (speedSelect.selectedIndex === 5) {
      setSpeed(2000)
    }
  }

  // change cell size? Or Color?
  const changeCellSize = () => {
    const speedSelect = document.querySelector('#cellSize')
    if (speedSelect.selectedIndex === 1) {
      setCellsSize(5)
    }
    if (speedSelect.selectedIndex === 2) {
      setCellsSize(10)
    }
    if (speedSelect.selectedIndex === 3) {
      setCellsSize(15)
    }
    if (speedSelect.selectedIndex === 4) {
      setCellsSize(20)
    }
    if (speedSelect.selectedIndex === 5) {
      setCellsSize(25)
    }
  }

  const changeDeadColor = () => {
    const gridSelect = document.querySelector('#deadColor')
    const gridOptions = document.querySelector('#deadColor').options
    console.log(gridOptions[gridSelect.selectedIndex].text)
    const colorText = gridOptions[gridSelect.selectedIndex].text

    setDeadColor(colorText)
  }

  const changeAliveColor = () => {
    const gridSelect = document.querySelector('#aliveColor')
    const gridOptions = document.querySelector('#aliveColor').options
    console.log(gridOptions[gridSelect.selectedIndex].text)
    const colorText = gridOptions[gridSelect.selectedIndex].text

    setAliveColor(colorText)
  }

  const changeGridColor = () => {
    const gridSelect = document.querySelector('#gridColor')
    const gridOptions = document.querySelector('#gridColor').options
    console.log(gridOptions[gridSelect.selectedIndex].text)
    const colorText = gridOptions[gridSelect.selectedIndex].text

    setGridColor(colorText)
  }
    return(
        <div className = 'dropdowns'>
      <select id={'speed'} name={'speed'} onClick={() => changeSpeed()}>
        <option>Select speed</option>
        <option>10 ms</option>
        <option>100 ms</option>
        <option>500 ms</option>
        <option>1 second</option>
        <option>2   seconds</option>
      </select>

      <select id={'gridSize'} name={'gridSize'} onClick={() => selectGridSize()}>
        <option>Select Grid Size</option>
        <option>original</option>
        <option>30x30</option>
        <option>35x35</option>
        <option>40x40</option>
        <option>50x50</option>
      </select>

        <select id={'cellSize'} name={'cellSize'} onClick={() => changeCellSize()}>
        <option>Select Cell Size</option>
        <option>5px x 5px</option>
        <option>10px x 10px</option>
        <option>15px x 15px</option>
        <option>20px x 20px</option>
        <option>25px x 25px</option>
      </select>

      <select id={'aliveColor'} name={'aliveColor'} onClick={() => changeAliveColor()}>
        <option>Select Alive Cell's Color</option>
        <option>Black</option>
        <option>White</option>
        <option>Deeppink</option>
        <option>GoldenRod</option>
        <option>Palegreen</option>
        <option>Palevioletred</option>
        <option>Mediumpurple</option>
        <option>Lime</option>
        <option>Green</option>
        <option>Midnightblue</option>
        <option>Lawngreen</option>
        <option>Cornflowerblue</option>
        <option>Violet</option>
        <option>Crimson</option>
        <option>Fuchsia</option>
        <option>Salmon</option>
        <option>Aqua</option>
        <option>Olive</option>
        <option>Turquoise</option>
        <option>Darkred</option>
        <option>Yellow</option>
        <option>Orange</option>
        <option>Gold</option>
        <option>Silver</option>
        <option>Orangered</option>
      </select>

      <select id={'deadColor'} name={'deadColor'} onClick={() => changeDeadColor()}>
        <option>Select Dead Cell's Color</option>
        <option>Black</option>
        <option>White</option>
        <option>Deeppink</option>
        <option>GoldenRod</option>
        <option>Palegreen</option>
        <option>Palevioletred</option>
        <option>Mediumpurple</option>
        <option>Lime</option>
        <option>Green</option>
        <option>Midnightblue</option>
        <option>Lawngreen</option>
        <option>Cornflowerblue</option>
        <option>Violet</option>
        <option>Crimson</option>
        <option>Fuchsia</option>
        <option>Salmon</option>
        <option>Aqua</option>
        <option>Olive</option>
        <option>Turquoise</option>
        <option>Darkred</option>
        <option>Yellow</option>
        <option>Orange</option>
        <option>Gold</option>
        <option>Silver</option>
        <option>Orangered</option>
      </select>

      <select id={'gridColor'} name={'gridColor'} onClick={() => changeGridColor()}>
        <option>Select Grid's Color</option>
        <option>Black</option>
        <option>White</option>
        <option>Deeppink</option>
        <option>GoldenRod</option>
        <option>Palegreen</option>
        <option>Palevioletred</option>
        <option>Mediumpurple</option>
        <option>Lime</option>
        <option>Green</option>
        <option>Midnightblue</option>
        <option>Lawngreen</option>
        <option>Cornflowerblue</option>
        <option>Violet</option>
        <option>Crimson</option>
        <option>Fuchsia</option>
        <option>Salmon</option>
        <option>Aqua</option>
        <option>Olive</option>
        <option>Turquoise</option>
        <option>Darkred</option>
        <option>Yellow</option>
        <option>Orange</option>
        <option>Gold</option>
        <option>Silver</option>
        <option>Orangered</option>
      </select>
        </div>
    )

}

export default DropDowns