import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiFillPlayCircle } from 'react-icons/ai'

const ButtonLeft = () => {
    return (
        <AiOutlineArrowLeft size={14}></AiOutlineArrowLeft>
    )
}

const ButtonPlay = () => {
    return (
        <AiFillPlayCircle color='grey' size={35}></AiFillPlayCircle>
    )
}

export {
    ButtonLeft,
    ButtonPlay
}
