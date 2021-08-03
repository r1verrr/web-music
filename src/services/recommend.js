import request from './request';

export function getTopBanners() {
    return request({
        url:"banner"
    })
}

// 热门推荐
export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

// 排行榜
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}