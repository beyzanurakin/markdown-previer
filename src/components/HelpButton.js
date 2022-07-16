import React from 'react'
import { useDispatch } from 'react-redux'
import { showHelp } from '../redux/textSlice'

function HelpButton() {
  // const showExample = useSelector((state) => state.textReducer.isShowingHelp)
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => dispatch(showHelp())}
      //className={`help-button ${isShowingHelp && 'active'}`}
      className='help-button'
    >
      ?
    </div>
  )
}

export default HelpButton
