import anecdoteService from '../services/anecdotes'

/*const initialState = {
  anecdotes: [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
],
filter: ''
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialAnecdotes = initialState.anecdotes.map(asObject)
*/

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'ADD_VOTE':
      return state.map(anecdote =>
        anecdote.id !== action.data.id ? anecdote : action.data
      )
    default:
      return state
  }
}

export const newAnecdote = (content) => {
  const newAnecdote = { content: content, votes: 0}
  return async dispatch => {
    const anecdote = await anecdoteService.create(newAnecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const addVote = (anecdote) => {
  console.log('addVote', anecdote)
  const changedAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1
  }
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(changedAnecdote.id, changedAnecdote)
    dispatch({
      type: 'ADD_VOTE',
      data: updatedAnecdote
    })

  }
}

export default anecdoteReducer