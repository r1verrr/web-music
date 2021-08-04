import * as actionTypes from './constants'
import { getSongDetail } from "@/services/player";


const changeCurrentSongAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  song
});

export const getSongDetailAction = (ids) => {
  return (dispatch) => {
      getSongDetail(ids).then(res => {
        console.log(res)
        dispatch(changeCurrentSongAction(res.songs[0]))
      })
  } 
}