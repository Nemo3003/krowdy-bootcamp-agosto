import { Link } from 'react-router-dom'
import { ButtonPlay } from '../../helpers/ButtonCards'

export const QuestionsCard = ({ vid }:any) => {
    return (
        <div>
            <div>
                <video muted playsInline></video>
                <div className='button'>
                     <Link to={`/question/${vid.id}`}>
                        <ButtonPlay />
                    </Link >
                </div>
                <div>
                    <p>{vid.question}</p>
                </div>
            </div>
        </div>
    )
}

