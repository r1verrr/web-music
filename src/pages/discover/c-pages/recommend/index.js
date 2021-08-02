import React, { memo} from 'react'

import MQtopBanner from './c-cpns/top-banner'
import MQHotReommend from './c-cpns/hot-recommend'
import MQNewAlubm from './c-cpns/new_album'
import MQRecommendRanking from './c-cpns/recommend-ranking'
import { 
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
 } from './style'

function MQRecommend(props) {
    return (
        <RecommendWrapper>
            <MQtopBanner></MQtopBanner>
            <Content className="wrap-v2">
                <RecommendLeft>
                    <MQHotReommend></MQHotReommend>
                    <MQNewAlubm/>
                    <MQRecommendRanking/>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}


export default memo(MQRecommend);

// function MQRecommend(props) {

//     const { getBanners ,topBanners} = props;

//     useEffect(() => {
//         getBanners()
//     },[getBanners])

//     return (
//         <div>
//             MQRecommend:{topBanners.length}
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(MQRecommend));