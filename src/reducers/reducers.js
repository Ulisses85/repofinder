import { combineReducers } from 'redux'
import * as types from '../actions/types.js';

const searchRequest = (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH_START:
      return {
        ...state,
        startAt: Date.now()
      }
    default:
      return state
  }
}
const searchProgress = (state = 0, action) => {
  switch (action.type) {
    case types.SEARCH_START:
      return 1
    case types.SEARCH_FEEDBACK:
      return 4
    case types.SEARCH_END:
      return 5
    default:
      return state
  }
}

const searchResponse = (state = {
  isFetching: false,
  results: [],
  item: '',
  radioItem: 'profiles',
  endAt: Date.now()
}, action) => {
  switch (action.type) {
    case types.SEARCH_START:
      return {
        ...state,
        isFetching: true
      }
    case types.SEARCH_PROCESS:
      return {
        ...state,
        isFetching: false,
        results: action.results,
        item: action.textValue,
        radioItem: action.radioValue,
        endAt: Date.now()
      }
    default:
      return state
  }
}

const searchReducer = combineReducers({
  searchRequest,
  searchResponse,
  searchProgress
})

export default searchReducer;
