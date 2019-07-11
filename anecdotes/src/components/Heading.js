import React from 'react'

const Heading = () => {

  const imgStyle = { height: 100, width: 'auto' }
  const headingStyle = { fontSize: 50 }
  const tableStyle = { height: 120 }

  return (
    <div style={tableStyle} >
      <table>
        <tbody>
          <tr>
            <td><img src='anecdotes.png' alt='' style={imgStyle}></img></td>
            <td><h1 style={headingStyle}>Anecdotes</h1></td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}

export default Heading