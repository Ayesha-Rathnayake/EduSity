import React from 'react'
import './VideoPlayer.css'
import video_play from '../../assets/videoPlay.mp4'
import { useRef } from 'react'

const VideoPlayer = ({playState,setPlayerState}) => {

    const player=useRef(null);

    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlayerState(false);
        }
    }
  return (
    <div className={`video-player ${playState?'':'hide'}`}ref={player}onClick={closePlayer}>
      <video src={video_play} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
