export const incAction = () => async dispatch => {
    dispatch({
        type: 'INCREMENT'
    })
}

export const decAction = () => async dispatch => {
    dispatch({
        type: 'DECREMENT'
    })
}