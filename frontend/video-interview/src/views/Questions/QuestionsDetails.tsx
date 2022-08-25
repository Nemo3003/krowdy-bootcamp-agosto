import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getQuestions } from "../../helpers/getQuestions"

export const QuestionsCardsContainer = () => {
    const [videos, setVideos] = useState<any>({})
    const { IdQuest } = useParams()

    useEffect(() => {
        getQuestions(IdQuest)
            .then(res => setVideos(res))
            .catch((err) => console.log(err))
    }, [IdQuest, videos])

    return (
       <>
       </>
    )
}
