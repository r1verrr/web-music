import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


import MQThemeHeaderRcm from '@/components/theme-header-rcm'
import MQTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreator';

export default memo(function MQRecommendRanking() {

  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <MQThemeHeaderRcm title="榜单"></MQThemeHeaderRcm>
      <div className="tops">
        <MQTopRanking info={upRanking}/>
        <MQTopRanking info={newRanking}/>
        <MQTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
