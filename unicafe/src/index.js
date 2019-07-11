import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const reset = () => {
    store.dispatch({
      type: 'ZERO'
    })

  }

  const margin = { margin: '10px' }

  const Tilanne = () => {
    if (store.getState().good === 0 && store.getState().ok === 0 && store.getState().bad === 0) {
      return (
        <div style={margin}>
          Yhtään palautetta ei ole annettu.
        </div>
      )
    }
    return (
      <table style={margin}>
        <tbody>
          <tr><td>hyvä</td><td>{store.getState().good}</td></tr>
          <tr><td>neutraali</td><td>{store.getState().ok}</td></tr>
          <tr><td>huono</td><td>{store.getState().bad}</td></tr>
        </tbody>
      </table>
    )
  }

  return (
    <div style={margin}>
      <h1>Anna palautetta!</h1>
      <button onClick={good}>hyvä</button>
      <button onClick={ok}>neutraali</button>
      <button onClick={bad}>huono</button>
      <button onClick={reset}>nollaa tilastot</button>
      <Tilanne />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
