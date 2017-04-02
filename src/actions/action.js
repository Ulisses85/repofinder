import * as types from './types.js';

export const searchStart = (textValue, radioValue) => ({
  type: types.SEARCH_START,
  textValue
})

export const searchProcess = (textValue, radioValue, results) => ({
  type: types.SEARCH_PROCESS,
  textValue,
  radioValue,
  results
})

export const searchFeedback = () => ({
  type: types.SEARCH_FEEDBACK
})

export const searchEnd = () => ({
  type: types.SEARCH_END
})

export const fetchResults = (textValue, radioValue) => dispatch => {
  dispatch(searchStart(textValue))
  return fetch (`https://api.github.com/search/${radioValue}?q=${textValue}`)
  .then(response => response.json())
  .then(json => dispatch(searchProcess(textValue, radioValue, json.items)))
  .then(() => dispatch(searchFeedback()))
  .then(() => {
    setTimeout(() => {
      dispatch(searchEnd())
    }, 1000)
  })
  .catch(error => console.log(error))
}
