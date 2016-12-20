import React, { Component } from 'react'

class App extends Component {

  render () {
    return <div className='app'>
      <h1>Explosion Avoider!</h1>
      <div className='gameboard'>
        <table>
          <tbody>
            <tr>
              <td className='empty' />
              <td className='numbered'> 3 </td>
              <td className='flagged' />
            </tr>
            <tr>
              <td className='bomb' />
              <td className='unrevealed' />
              <td className='flagbomb' />
            </tr>
            <tr>
              <td className='unrevealed' />
              <td className='unrevealed' />
              <td className='unrevealed' />
            </tr>
          </tbody>
        </table>
      </div>
      <footer>
        Made with &hearts; At the Iron Yard
      </footer>
    </div>
  }
}

export default App
