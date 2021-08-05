import * as actionTypes from './constants'
import { getSongDetail } from "@/services/player";


const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song
});


const changePlayListAction = (palyList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  palyList
});

const changeCurrenSOngIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
});

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"])
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2.判断是否找到歌曲
    if(songIndex !== -1){
      dispatch(changeCurrenSOngIndexAction(songIndex))
      const song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
    }else{ //没有找到歌曲
      // 请求歌曲数据
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if(!song) return;
        // 1.将最新请求歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song)
 
        // 2.更新rudux中的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrenSOngIndexAction(newPlayList.length -1))

        dispatch(changeCurrentSongAction(song))
      })
    }
  } 
} 