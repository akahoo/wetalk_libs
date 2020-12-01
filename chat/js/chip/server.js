let wTurl = localStorage.getItem("wTurl");
// let wTurl = "http://192.168.0.129:8090";

// let wTsocketUrl = localStorage.getItem("wTsocketUrl");

// 获取碎片奖品列表
function getAwards(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/piece/list`,
            headers: { user_token: token },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 获取碎片奖品详情
function getAwardsDetail(pieceId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/piece/detail`,
            headers: { user_token: token },
            data: { pieceId: pieceId },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 获取轮播图列表
function listCarousel(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/piece/listCarousel?t=${(new Date()).getTime()}`,
            headers: { user_token: token },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 查看兑奖资格
function exchangeStatus(pieceId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/piece/exchangeStatus?t=${(new Date()).getTime()}`,
            headers: { user_token: token },
            data: { pieceId: pieceId },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 兑奖
function exchange(pieceId, name, phone, addr, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/piece/exchange?t=${(new Date()).getTime()}`,
            headers: { user_token: token },
            data: { pieceId: pieceId, name: name, phone: phone, addr: addr },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 获取兑奖记录
function allExchangeLog(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/piece/allExchangeLog?t=${(new Date()).getTime()}`,
            headers: { user_token: token },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}