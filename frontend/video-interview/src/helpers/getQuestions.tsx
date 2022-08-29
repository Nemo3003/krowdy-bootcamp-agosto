const questions = [
    { id: 1, question: '¿Qué es lo que mas te gusta de ti mismo?' },
    { id: 2, question: '¿Como te definirias?' },
    { id: 3, question: '¿Tuviste alguna experiencia laboral previa?' },
    { id: 4, question: '¿Como resolverias un problema complejo?' }
]

export const getQuestions = (id:any) => {

    
    return new Promise((resolve) => {

        setTimeout(() => {
            const queryAsk = id ? questions.find(element => element.id == id) : questions
            resolve(queryAsk)
        }, 500)
    })
}