import React, { memo } from 'react'
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'

export default memo(function MQPlayer() {
    return (
        <PlayerWrapper>
          <div className="content wrap-v2">
            <PlayerLeft>
              1
            </PlayerLeft>
            <PlayerRight>
              1
            </PlayerRight>
          </div>
        </PlayerWrapper>
    )
})
