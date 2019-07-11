import React from 'react'
import {connect} from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    borderColor: 'powderblue',
    backgroundColor: 'powderblue',
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    width: 400,
    height: 100,
    overflow: 'hidden',
    position: 'absolute',
    top: 260,
    fontFamily: 'Consolas'
  }
  if (props.notification !== null) {
    return (
      <div className="notification" style={style}>
        {props.notification}
      </div>
    )
  }
  return null
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}


export default connect(mapStateToProps, null)(Notification)