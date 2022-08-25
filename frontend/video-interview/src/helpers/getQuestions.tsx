import {useState} from 'react'

const questions = [
    { id: 1, question: '¿Qué te motivo a estudiar programación?' },
    { id: 2, question: '¿Qué hacías antes de estudiar programación?' },
    { id: 3, question: '¿Tuviste alguna experiencia laboral previa?' },
    { id: 4, question: '¿Cual fue tu mayor reto en un proyecto?' }
]

export const getQuestions = (id:any) => {
    const [isLoading, setLoading] = useState(false);


    return new Promise((resolve) => {
        setLoading(true)
        {
            isLoading ? <p>loading</p>: null
        }

        setTimeout(() => {
            setLoading(false)
            const queryAsked = id ? questions.find(element => element.id == id) : questions
            resolve(queryAsked)
        }, 350)
        
    })
}