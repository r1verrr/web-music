import React, { memo, useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getNewAlbumAction } from "../../store/actionCreator";

import { Carousel } from 'antd';
import MQThemeHeaderRcm from "@/components/theme-header-rcm";
import MQAlbumCover from '@/components/album-cover'

import { 
  AlbumWrapper,
} from './style'

export default memo(function MQNewAlbum() {

    const { newAlbums }  = useSelector(state => ({
        newAlbums: state.getIn(["recommend","newAlbums"])
    }),shallowEqual);    

    console.log(newAlbums)
    const dispatch = useDispatch()

    const pageRef = useRef()
    useEffect(() => {
      dispatch(getNewAlbumAction(10))
    },[dispatch])

  return (
    <div>
      <AlbumWrapper>
        <MQThemeHeaderRcm title="新碟上架"/> 
        <div className="content">
          <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
            <div className="album"> 
              <Carousel dots={false} ref={pageRef}>
                {
                  [0, 1].map((item) => {
                    return(
                      <div key={item} className="page">
                        {
                          newAlbums.slice(item * 5, (item + 1) * 5).map((item1,index) => {
                            return(
                              <MQAlbumCover key={item1.id} info={item1} size={100} width={118} bgp="-570px"></MQAlbumCover>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
          <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
        </div>
      </AlbumWrapper>
    </div>
  );
});
