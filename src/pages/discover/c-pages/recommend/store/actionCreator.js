import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends} from '@/services/recommend'

const changeTopBannerAction =(res) => ({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction =(res) => ({
    type:actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})

export const getTopBannerAction = () => {
    console.log(2222)
    return dispacth => {
        getTopBanners().then(res=> {
            console.log(res)
            dispacth(changeTopBannerAction(res))
        })
    }
}

export const getHotRecommendAction = (limit) => {
    console.log(2222)
    return dispacth => {
        getHotRecommends(limit).then(res=> {
            console.log(res)
            dispacth(changeHotRecommendAction(res))
        })
    }
}