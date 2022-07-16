import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'

function PreviewText() {
  const previewText = useSelector((state) => state.textReducer.markdownText)
  console.log(previewText)

  return (
    <article className='result'>
      <ReactMarkdown>{previewText}</ReactMarkdown>
    </article>
  )
}

export default PreviewText
