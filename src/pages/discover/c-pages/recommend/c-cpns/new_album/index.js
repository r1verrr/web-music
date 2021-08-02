import React, { memo, useEffect, shallowEqual } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { getNewAlbumAction } from "../../store/actionCreator";
import MQThemeHeaderRcm from "@/components/theme-header-rcm";



export default memo(function MQNewAlbum() {

    // const { newAlbums }  = useSelector(state => ({
    //     newAlbums: state.getIn(["recommend","newAlbums"])
    // }),shallowEqual);    

    // console.log(newAlbums)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //   dispatch(getNewAlbumAction(8))
    // },[dispatch])

  return (
    <div>
      <MQThemeHeaderRcm title="新歌"> 
        
      </MQThemeHeaderRcm>
    </div>
  );
});
