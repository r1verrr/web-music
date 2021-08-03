import React, { memo, useEffect, } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreator'

import MQThemeHeaderRcm from '@/components/theme-header-rcm'
import MQSongsCover from '@/components/songs-cover'
import {
    HotRecommendWrapper
} from './style'

export default memo(function MQHotRecommend() {
    
    // state

    // redux hooks
      // 组件和redux关联，获取数据和进行操作 
    const { hotRecommends }  = useSelector(state => ({
        hotRecommends: state.getIn(["recommend","hotRecommends"])
    }),shallowEqual);

    console.log(hotRecommends,'21')
    const dispatch = useDispatch()

    // other hooks
    useEffect(() => {
      dispatch(getHotRecommendAction(8))
    },[dispatch])

    return (
        <HotRecommendWrapper>
            <MQThemeHeaderRcm title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>
            <div className="recommend-list">
               {
                hotRecommends.map((item, index) => {
                  return(
                    <MQSongsCover  key={item.id} info={item} />
                  )
                })
              }
            </div>
        </HotRecommendWrapper>
    )
})
