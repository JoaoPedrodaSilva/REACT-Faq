import React from "react"
import Question from './Question.js'
import questions from './data.js'

function App() {  
  return (
    <main className="App">
      <header>
        <h2 className="title">Frequently Asked Questions</h2>
        <div className="underline" />
      </header>
      <section>
        {questions.map(question => {
            return <Question key={question.id} {...question}/>            
        })}
      </section>   
    </main>
  )
}

export default App
