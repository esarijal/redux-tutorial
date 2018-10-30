import * as actionTypes from '../actions'

const initialState = {
    results: []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.counter})
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter((result, id) => result.id !== action.resultElId)
            }
    }
    return state;
}

export default reducer