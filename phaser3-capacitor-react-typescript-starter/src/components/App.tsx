/// <reference types="../../custom_typings/index" />

import React from 'react'
import { initGame } from '../game/game'

type AppProps = {}
type AppState = {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: {}) {
    super(props)
    initGame('game-root')
  }

  render() {
    return (
      <>
        <div id="game-root"></div>
        <div>This is React</div>
      </>
    )
  }
}

export default App
