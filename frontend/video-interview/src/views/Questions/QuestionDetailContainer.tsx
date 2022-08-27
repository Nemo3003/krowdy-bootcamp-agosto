import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import {DetailedQuery} from "../Main/DetailedQuery"
import { getQuestions } from "../../helpers/getQuestions"

export const QuestionDetailContainer = () => {
    const [videos, setVideos] = useState({})
    const { detailId } = useParams()

    useEffect(() => {
        getQuestions(detailId)
            .then(res => setVideos(res))
            .catch((err) => console.log(err))
    }, [detailId, videos])

    return (
        <div>
            <DetailedQuery videos={videos} />
        </div>
    )
}