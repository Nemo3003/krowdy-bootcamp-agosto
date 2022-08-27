import { Link } from 'react-router-dom'
import {ButtonPlay} from '../../helpers/Buttons'
import "../../styles/styles.css"


export const QuestionsCards = ({ vid }:any) => {
    return (
        <div className="cards-container">
            <div className="question-card__container">
                <div className="question-video__card">
                    <div className='color-video'>
                        <video muted playsInline></video>
                        <div className='button'>
                            <Link to={`/question/${vid.id}`}>
                                <ButtonPlay />
                            </Link >
                        </div>
                        <div className="question-color__card">
                            <p>{vid.question}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

