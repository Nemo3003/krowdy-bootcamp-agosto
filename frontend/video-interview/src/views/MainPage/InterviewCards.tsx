import {QuestionsCard} from "./QuestionCard"

export const InterviewCards = ({ videos }:any) => {
    return (
        videos.map((vid:any) => <QuestionsCard key={vid.id} vid={vid} />)
    )
}


