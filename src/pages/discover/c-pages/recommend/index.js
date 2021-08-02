import React, { memo} from 'react'

import MQtopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'

function MQRecommend(props) {
    return (
        <RecommendWrapper>
            <MQtopBanner></MQtopBanner>
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