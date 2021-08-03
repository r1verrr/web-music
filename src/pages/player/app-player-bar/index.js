import React, { memo } from 'react'

import { Slider } from 'antd';

import { 
  PlaybarWrapper, 
  PlayInfo, 
  Control, 
  Operator
} from './style'
export default memo(function MQAppPlayerBar() {
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href='/todo'>
              <img src="" alt="image"/>
            </a>
          </div>
          <div className="info">
            <div className="song"> 
              <span className="song-name">红豆</span>
              <a href="#/" className="singer-name">王菲</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30} tooltipVisible={false}/>
              <div className="time">
                <span className="now-time">02:30</span>
                <span className="divider"></span>
                <span className="duration">04:30</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator></Operator>
      </div>
    </PlaybarWrapper>
  )
})
