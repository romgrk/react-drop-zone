/*
 * main.js
 */

import React from 'react'
import { render } from 'react-dom'

import DropZone, { StyledDropZone } from '../'
import '../dist/styles.css'

import './styles.css'

class App extends React.Component {
  render() {

    return (
      <div>

        <StyledDropZone
          onDrop={(file, text) => console.log(file, text)}
        />

        <br/>
        <br/>

        <DropZone onDrop={(file, text) => console.log(file, text)}>
          {
            ({ over, overDocument }) =>
              <div>
                {
                  over ?
                    'Over element' :
                  overDocument ?
                    'Over document' :
                    'Not over'

                }
              </div>
          }
        </DropZone>
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)
