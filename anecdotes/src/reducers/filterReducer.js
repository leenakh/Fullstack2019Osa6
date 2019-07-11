const initialFilter = ''

const filterReducer = (state = initialFilter, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.data
        default:
            return state
    }
}

export const setFilter = (search) => {
    return {
        type: 'SET_FILTER',
        data: search
    }
}

export default filterReducer