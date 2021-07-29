import * as actionTypes from './constants'

import { getTopBanners } from '@/services/recommend'

const changeTopBannerAction =(res) => ({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
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