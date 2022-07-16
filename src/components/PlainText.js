import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { enterText } from '../redux/textSlice'

function PlainText() {
  const dispatch = useDispatch()
  const rawText = useSelector((state) => state.textReducer.rawText)
  //setPlainText(rawText)

  return (
    <textarea
      value={rawText}
      onChange={(event) => dispatch(enterText(event.target.value))}
      className='input'
      // readOnly={isShowingHelp}
    ></textarea>
  )
}

export default PlainText
