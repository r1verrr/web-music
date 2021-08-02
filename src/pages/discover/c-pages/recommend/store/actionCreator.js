import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends, getNewAlbums} from '@/services/recommend'

const changeTopBannerAction =(res) => ({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction =(res) => ({
    type:actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})

const changeNewAlbumAction =(res) => ({
    type:actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.albums
})

export const getTopBannerAction = () => {
    console.log(2222)
    return dispatch => {
        getTopBanners().then(res=> {
            console.log(res)
            dispatch(changeTopBannerAction(res))
        })
    }
}

export const getHotRecommendAction = (limit) => {
    console.log(2222)
    return dispatch => {
        getHotRecommends(limit).then(res=> {
            console.log(res)
            dispatch(changeHotRecommendAction(res))
        })
    }
}

export const getNewAlbumAction = (limit) => {
    console.log(2222)
    return dispatch => {
        getNewAlbums(limit).then(res=> {
            console.log(res)
            dispatch(changeNewAlbumAction(res))
        })
    }
}