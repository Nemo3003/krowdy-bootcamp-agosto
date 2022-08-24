import React, {useContext} from 'react';
import {QuestionCard} from '../../components/QuestionCard/QuestionCard';

export const FirstPage  = () => {

    const questions = [
        {
            id: 1,
            title: 'First question',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul',
        },
        {
            id: 2,
            title: 'Second question',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul'
        }
    ]
    return (
        <section>
            <h1 >Video Cuestionario</h1>
            <p >Tendras dos minutos para responder cada una de las siguientes preguntas. Suerte!</p>
            <section>
                {
                    questions.map(question => {
                        return (
                            <div key={question.id * 254}>
                            <h1>{question.title}</h1>
                            <p>{question.content}</p>
                            </div>
                        )
                    })
                }
            </section>
        </section>
    );
};

