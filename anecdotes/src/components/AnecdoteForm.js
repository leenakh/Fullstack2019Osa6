import React from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const createAnecdote = (props) => {
  const hide = { display: props.notification !== null ? 'none' : '' }
  const style = { marginBottom: 10 }
  const inputStyle = { height: 100, width: 400, marginBottom: 5, fontFamily: 'Consolas', overflow: 'auto' }

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.newAnecdote(content)
    props.notify(`You added "${content}"`, 5)
  }

  return (
    <div style={style}>
      <div style={hide}>
        <h2>Create new</h2>
        <form onSubmit={addAnecdote}>
          <div><textarea style={inputStyle} name="anecdote" /></div>
          <div><button type="submit">Create</button></div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  newAnecdote,
  notify
}

export default connect(mapStateToProps, mapDispatchToProps)(createAnecdote)