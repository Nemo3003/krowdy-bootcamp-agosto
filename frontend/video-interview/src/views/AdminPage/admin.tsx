import React, { useEffect, useState } from 'react'

export const admin = () => {
    const [question, setQuestion] = useState()

    useEffect(() => {
        console.log(`question added: ${question}`)
    })
    const handleSubmission = () => {
        setQuestion(undefined)
        
    }
  return (
    <>
        <h1>Admin View</h1>
        <p>
            Create Questions
        </p>
        <form onSubmit={handleSubmission}>
            <label>Add a question</label>
            <input type="text"
            value={question}
            name="question"
            placeholder="What is one thing you love about yourself?" />
            <button>
                Post Question
            </button>
        </form>
    </>
  )
}

