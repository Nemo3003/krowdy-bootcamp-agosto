
export const processVideo = () => {
  //Lets process the video
  const video = document.getElementById('video') as HTMLVideoElement;
  video.src = `https://www.youtube.com/embed/${video.id}`;
  video.style.display = 'block';
  document.body.appendChild(video);
  
}

