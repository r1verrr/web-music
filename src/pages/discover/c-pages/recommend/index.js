import React, { memo, useEffect} from 'react'
import { useSelector, useDispatch ,shallowEqual} from 'react-redux'

import { getTopBannerAction } from './store/actionCreator'

function MQRecommend(props) {
 
    // 组件和redux关联，获取数据和进行操作 
    const { topBanners }  = useSelector(state => ({
        topBanners: state.recommend.topBanners
    }),shallowEqual);
    const dispatch = useDispatch()
    // 发送网络请求 
    useEffect(() => {
        console.log(111111) 
        dispatch(getTopBannerAction())
    },[dispatch]);

    return (
        <div>
            MQRecommend:{topBanners.length}
        </div>
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