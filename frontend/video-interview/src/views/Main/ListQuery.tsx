import {QuestionsCards} from "./QuestionsCards"


export const ListQuery = ({ videos }:any) => {
  
    return (
        <>
       { videos.map((vid:any) => <QuestionsCards key={vid.id} vid={vid} />)}
       </>
    )
}

