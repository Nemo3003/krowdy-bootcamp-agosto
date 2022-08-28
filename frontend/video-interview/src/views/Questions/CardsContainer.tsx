import { useEffect, useState } from "react"
import { useParams,useNavigate } from 'react-router-dom'
import { getQuestions } from "../../helpers/getQuestions"
import {ListQuery} from "../Main/ListQuery"
import { useContext } from "react";
import {AuthContext} from '../../components/auth/context/AuthContext'
import './QuestionsCardsContainer.css'

export const CardsContainer = () => {
    const [videos, setVideos] = useState([])
    const { user, logout } = useContext(AuthContext);
    const { id }= useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getQuestions(null)
                .then(res => setVideos(res.filter((vid) => vid.id === id)))
                .catch((err) => console.log(err))
        } else {
            getQuestions(null)
                .then(res =>  setVideos(res))
                .catch((err) => console.log(err))
        }
    }, [id])
    const onLogout = () => {
        logout();
    
        navigate("/", {
          replace: true,
        });
      };
    
    return (
        <>
            <h1 className="title-videos">Video Cuestionario</h1>
            <div>
        <h2 className="">Welcome! {user?.username}</h2>
        <button className="" onClick={onLogout}>
              Logout
            </button>
        </div>
            <div className="videos__container">
                <ListQuery videos={videos} className="list-container-query" />
            </div>
        </>
    )
}

