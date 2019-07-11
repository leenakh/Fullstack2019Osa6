import React from 'react'
import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
    const handleChange = async (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const search = event.target.value
        props.setFilter(search)
    }
    const style = { height: 70 }
    const inputStyle = { height: 20, width: 400, marginBottom: 5, fontFamily: 'Consolas' }

    return (
        <div style={style}>
            <h2>Filter</h2>
            <textarea style={inputStyle} name="filter" value={props.filter} onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)