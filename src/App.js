import React from 'react'
import HelpButton from './components/HelpButton'
import PlainText from './components/PlainText'
import PreviewText from './components/PreviewText'

function App() {
  return (
    <main>
      <header>
        <h1 className='app-title'>Markdown Previewer</h1>
        <HelpButton />
      </header>
      <section className='markdown'>
        <PlainText />
        <PreviewText />
      </section>
    </main>
  )
}

export default App
