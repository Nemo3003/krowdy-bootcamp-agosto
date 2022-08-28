import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import {ButtonLeft} from '../../helpers/Buttons';
import {AuthContext} from '../../components/auth/context/AuthContext'

declare global {
    interface Window {
      stream: any;
    }
  }

export const DetailedQuery = ({ videos }:any) => {
    let mediaRecorder:any = useRef(null)
    let recordedBlob:any = useRef(null)
    const audio = useRef([])
    const recVideo:any = document.querySelector('video#recorded');
    const recButton:any = document.querySelector('button#record');
    const Video:any = document.querySelector('video#card');

    const handleRecord = () => {
        Video.style.display = 'block'
        if (recButton.textContent === 'Start Recording') {
            startRecording();
        } else {
            stopRecording();
            recButton.textContent = 'Start Recording';
        }
    }

    const handlePlay=()=> {
        const superBuffer = new Blob(recordedBlob);
        recVideo.src;
        recVideo.srcObject;
        recVideo.src = window.URL.createObjectURL(superBuffer);
        recVideo.controls = true;
        recVideo.play();
        Video.style.display = 'none'
        recVideo.style.display = 'block'
    }

    const handleDataAvailable=(event:any)=> { if (event.data && event.data.size > 0) recordedBlob.push(event.data);}

    const startRecording=()=> {
        recordedBlob = [];
        try {
            mediaRecorder = new MediaRecorder(window.stream);
        } catch (e) {
            console.error('You broke something!', e);
            return;
        }
        recButton.textContent = 'Stop Recording';
        mediaRecorder.onstop = (event:any) => localStorage.setItem('user', JSON.stringify(recordedBlob))
        
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.start();
    }

    const stopRecording=()=> mediaRecorder.stop()

    const handleSuccess=(stream:any)=> {window.stream = stream;recVideo.srcObject = stream;}

    useEffect(() => {
        async function init() {
                const constraints:any = {
                    audio: {
                        sound: { exact: audio }
                    },
                    video: {
                        width: 720, height: 520
                    }
                };
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                handleSuccess(stream);

        }
        init();
    })
    const { user, logout } = useContext(AuthContext);
    return (
        <div className='detail__container' id="container">
            
            <div className='detail-back'>
                <Link to={'/home'}>
                    <p><ButtonLeft /> Get Back</p>
                </Link>
            </div>
            <video src={mediaRecorder} id="card" autoPlay muted playsInline></video>
            <video src={recVideo} id="recorded" autoPlay playsInline loop></video>
            <div>
                <button id="record" onClick={handleRecord}>Start Recording</button>
                <button id="play" onClick={handlePlay}>Play</button>
            </div>
            <div className='video-question'>
                <p>{videos?.question}</p>
            </div>
            <div className='video-id'>
                <Link to={`/question/${videos.id > 1 ? videos.id - 1 : '1'}`}>
                    <p>Back</p>
                </Link>
                <Link to={`/question/${videos.id < 4 ? videos.id + 1 : '4'}`}>
                    <p>Next</p>
                </Link>
            </div>
        </div>
    )
}

