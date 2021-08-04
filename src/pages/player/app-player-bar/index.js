import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';

import { getSongDetailAction } from '../store/actionCreators'

import { Slider } from 'antd';

import { 
  PlaybarWrapper, 
  PlayInfo, 
  Control, 
  Operator
} from './style'
export default memo(function MQAppPlayerBar() {

  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0);
  const [isChange,setIsChange] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);

      // 组件和redux关联，获取数据和进行操作 
  const { currentSong }  = useSelector(state => ({
      currentSong: state.getIn(["player","currentSong"])
  }),shallowEqual);
  console.log(currentSong)
  const dispatch = useDispatch()

  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(211212))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong])

  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause(): audioRef.current.play();
    setIsPlaying(!isPlaying);
  },[isPlaying])

  const timeUpdate = (e) => {
    if(!isChange){
      setCurrentTime(e.target.currentTime * 1000);
      setProgress(currentTime / duration * 100);
    }
  }

  const sliderChange = useCallback((value) => {
    setIsChange(true)
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setProgress(value);
  }, [duration]);

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000);
    setIsChange(false)

    if(!isPlaying){
      playMusic();
    }
  }, [duration, isPlaying, playMusic]);
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href='/todo'>
              <img src={getSizeImage(currentSong.al.picUrl,35)} alt=""/>
            </a>
          </div>
          <div className="info">
            <div className="song"> 
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">{currentSong.ar[0].name}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} value={progress} tooltipVisible={false} onChange={sliderChange} onAfterChange={sliderAfterChange}/>
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider"></span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio 
        ref={audioRef} onTimeUpdate={timeUpdate}/>
    </PlaybarWrapper>
  )
})
