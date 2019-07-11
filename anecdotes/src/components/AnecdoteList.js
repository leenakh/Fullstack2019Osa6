import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'


const Anecdotes = (props) => {

  const vote = async (id) => {
    if (props.notification !== null) {
      return
    }
    const anecdote = props.anecdotesToShow.find(a => a.id === id)
    props.addVote(anecdote)
    props.notify(`You voted for "${anecdote.content}"`, 5)
  }

  const style = { position: 'absolute', top: 450, width: 600 }
  const anecdoteStyle = { margin: 5 }
  const contentStyle = { fontStyle: 'italic', fontWeight: 'bold', color: 'teal' }
  


  return (
    <div style={style}>
      {props.anecdotesToShow.map(anecdote =>
        <div style={anecdoteStyle} key={anecdote.id}>
          <div style={contentStyle}>
            {anecdote.content}
          </div>
          <div>
            This has {anecdote.votes} votes.
          </div>
          <div>
            <button onClick={() => vote(anecdote.id)}>Vote</button>
          </div>
        </div>
      )}
    </div>
  )

}

const anecdotesFinally = ({ anecdotes, filter }) => {
  const filteredAnecdotes = filter === ''
    ? anecdotes
    : anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))

  const sortedAnecdotes =
    filteredAnecdotes.sort(function (a, b) {
      if (a.votes < b.votes) {
        return 1
      }
      if (a.votes > b.votes) {
        return -1
      }
      return 0
    })
  return sortedAnecdotes
}

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesFinally(state),
    notification: state.notification,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  notify,
  addVote
}

export default connect(mapStateToProps, mapDispatchToProps)(Anecdotes)