import * as actionTypes from './constants'
import { getSongDetail, getLyric } from "@/services/player";
import { getRandomNumber } from "@/utils/math-utils"
import { parseLyric } from '@/utils/parse-lyric';

const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song
});


const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
});

const changeCurrenSOngIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
});

const changLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})


// 对外暴露的action
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
});

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]);
    console.log(playList,ids)
    const songIndex = playList.findIndex(song => song.id === ids)

    let song = null
    // 2.判断是否找到歌曲
    if(songIndex !== -1){
      dispatch(changeCurrenSOngIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      // 请求歌词
      dispatch(getLyricAction(song.id))
    }else{ //没有找到歌曲
      // 请求歌曲数据
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0];
        if(!song) return;
        // 1.将最新请求歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song)
        console.log(newPlayList)
        // 2.更新rudux中的值
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrenSOngIndexAction(newPlayList.length -1))
        dispatch(changeCurrentSongAction(song))
        // 请求歌词
        dispatch(getLyricAction(song.id))
      })
    }
  } 
} 


export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"])
    const sequence = getState().getIn(["player", "sequence"])
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"])
      switch(sequence) {
        case 1: //随机
          let randomIndex = getRandomNumber(playList.length);
          while (randomIndex ===  currentSongIndex) {
            randomIndex = getRandomNumber(playList.length);
          }
          currentSongIndex = randomIndex 
          break
        default: //顺序播放
          currentSongIndex += tag;
          if(currentSongIndex >= playList.length) currentSongIndex = 0;
          if(currentSongIndex < 0) currentSongIndex = playList.length - 1;
      }

      const currentSong = playList[currentSongIndex];
      dispatch(changeCurrentSongAction(currentSong))
      dispatch(changeCurrenSOngIndexAction(currentSongIndex))
      // 请求歌词
      dispatch(getLyricAction(currentSong.id))
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      console.log(res)
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList));
    })
  }
}