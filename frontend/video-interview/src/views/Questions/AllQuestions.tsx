import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getQuestions } from "../../helpers/getQuestions"
import { InterviewCards } from "../MainPage/InterviewCards"

export const QuestionsCardsContainer = () => {
    const [videos, setVideos]:any = useState<any[]>([])
    const { id }:any = useParams<any>()

    useEffect(() => {
        if (id) {
            getQuestions(null)
                .then(res => setVideos(res.filter((vid:any) => vid.id === id)))
                .catch((err) => console.log(err))
        } else {
            getQuestions(null)
                .then(res => setVideos(res))
                .catch((err) => console.log(err))
        }
    }, [id])

    return (
        <div>
            <h1 >Video Cuestionario</h1>
            <div >
                <InterviewCards videos={videos} />
            </div>
        </div>
    )
}
