import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getQuestions } from "../../helpers/getQuestions"
import {ListQuery} from "../Main/ListQuery"
import './QuestionsCardsContainer.css'

export const CardsContainer = () => {
    const [videos, setVideos] = useState([])
    const { id }= useParams()

    useEffect(() => {
        if (id) {
            getQuestions(null)
                .then(res => setVideos(res.filter((vid) => vid.id === id)))
                .catch((err) => console.log(err))
        } else {
            getQuestions(null)
                .then(res => setVideos(res))
                .catch((err) => console.log(err))
        }
    }, [id])

    return (
        <div>
            <h1 className="title-videos">Video Cuestionario</h1>
            <div className="videos__container">
                <ListQuery videos={videos} className="list-container-query" />
            </div>
        </div>
    )
}

