import { createSlice } from '@reduxjs/toolkit'
const exampleText = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.`

const initialState = {
  rawText: '# markdown preview',
  markdownText: '# markdown preview',
  helpText: exampleText,
  isShowingHelp: false,
  localText: '# markdown preview',
}

const textSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    enterText: (state = initialState, action) => {
      return {
        ...state,
        rawText: action.payload,
        markdownText: action.payload,
        localText: action.payload,
      }
    },
    showHelp: (state = initialState, action) => {
      console.log(state.isShowingHelp)
      if (state.isShowingHelp) {
        return {
          ...state,
          rawText: state.helpText,
          markdownText: state.helpText,
          isShowingHelp: false,
        }
      } else {
        return {
          ...state,
          rawText: state.localText,
          markdownText: state.localText,
          isShowingHelp: true,
        }
      }
    },
  },
})

export const { enterText, showHelp } = textSlice.actions
export default textSlice.reducer
