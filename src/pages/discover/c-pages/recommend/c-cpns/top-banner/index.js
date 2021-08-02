import React, { memo, useEffect, useRef, useCallback, useState} from 'react'
import { useSelector, useDispatch ,shallowEqual} from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreator'

import { Carousel } from 'antd';

import {
    BannerWrapper,
    BannerControl,
    BannerRight,
    BannerLeft
} from'./style'
function MQtopBanner(props) {
    // state
    const [currenIndex, setCrurrenIndex] = useState()

      // 组件和redux关联，获取数据和进行操作 
    const { topBanners }  = useSelector(state => ({
        // topBanners: state.get("recommend").get("topBanners")
        topBanners: state.getIn(["recommend","topBanners"])
    }),shallowEqual);
    const dispatch = useDispatch()

    // 其它的hooks
    const bannerRef = useRef()
    // 发送网络请求 
    useEffect(() => {
        console.log(111111) 
        dispatch(getTopBannerAction())
    },[dispatch]);

    const bannerChange = useCallback(
        (from, to) => {
            setCrurrenIndex(to)
        },
        [],
    )
    // 其它业务逻辑
    const bgImage = topBanners[currenIndex] && (topBanners[currenIndex].imageUrl + "?imageView&blur=40x20")
    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                    {
                        topBanners.map((item, index) => {
                            return(
                                <div className="banner-item" key={item.imageUrl}>
                                    <img className="image" src={item.imageUrl} alt="..."/>
                                </div>
                            )
                        })
                    }
                </Carousel>,
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
}


export default memo(MQtopBanner)