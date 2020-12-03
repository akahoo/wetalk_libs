
serverUrl();

function serverUrl() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "get",
            url: 'https://server.wetalk.icu/config.json',
            async: false,
            success: function (res) {
                resolve(res)
                wTurl = res.server.substring(0, res.server.length - 1);
                wTsocketUrl = res.socket;
                localStorage.setItem("wTurl", wTurl)
                localStorage.setItem("wTsocketUrl", wTsocketUrl)
                localStorage.setItem("cdn", res.cdn.substring(0, res.cdn.length - 1))
                localStorage.setItem("server", res.server.substring(0, res.cdn.length - 1))
                localStorage.setItem("speakInterval", res.speakInterval)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 用户登录
function loginRequest(domain, title, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/user/login',
            headers: { user_token: token },
            data: {
                domain: domain,
                title: title
            },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            },
            statusCode: {
                500: function () {
                    localStorage.setItem("token", "");
                }
            }
        })
    })
}

// 获取私聊用户列表
function getFriends(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            // url: wTurl + `/user/friends?user_token=${token}`,
            url: wTurl + `/user/friends?t=${(new Date()).getTime()}`,
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

// 获取上传图片签名
function getImageSignature(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/chat/getImageSignature`,
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

// 获取私聊聊天记录
function getPrivateLog(targetId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/chat/private/log?targetId=${targetId}`,
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

// 获取聊天室聊天记录 roomId
function getPublicLog(roomId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/chat/public/log?roomId=${roomId}`,
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

// 获取在线用户列表和数量
function getOnlineUsers(roomId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "get",
            url: wTurl + `/chat/room/online/user?roomId=${roomId}`,
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

// 聊天列表移除用户 POST id 
function removeUser(id, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/remove`,
            data: { id: id },
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

// 添加到聊天列表  (Long)friendId
function addUser(friendId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/add`,
            data: { friendId: friendId },
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


// 举报某条消息 post
function reportMessage(message, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chat/add`,
            data: { message: message },
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

// 获取站内信息列表（分页）
function getInboxMessageList(current, size, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/getInboxMessageList`,
            data: { current: current, size: size },
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

// 删除站内信息
function deleteInboxMessage(messageId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/deleteInboxMessage`,
            data: { messageId: messageId },
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

// 用户通过邮箱登录
function loginByAccount(account, password, domain, title) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/loginByAccount`,
            data: { account: account, password: password, domain: domain, title: title },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 重置密码
function resetPassword(code, password, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/resetPassword`,
            data: { code: code, password: password },
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

// 绑定邮箱
function bindEmail(email, verifyCode, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/bindEmail`,
            data: { email: email, verifyCode: verifyCode },
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

// 忘记密码（发送邮件到用户邮箱）
function forgetPassword(email, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/forgetPassword`,
            data: { email: email },
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

// 绑定邮箱获取验证码
function getBindCode(email, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/getBindCode`,
            data: { email: email },
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

// 提交用户反馈
function submitFeedback(type, contact, content, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/submitFeedback`,
            data: { type: type, contact: contact, content: content },
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

// type 4：骰子 5：猜拳 6：抛硬币
function specialMessage(interactType, roomId, targetId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chat/specialMessage`,
            data: { interactType: interactType, roomId: roomId, targetId: targetId },
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



// 读取消息内容，并标记已读状态
function readInboxMessage(messageId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/readInboxMessage`,
            data: { messageId: messageId },
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

// 设置昵称（自动注册的用户可以修改一次昵称）
function setUserNick(nickname, roomId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/setUserNick`,
            data: { nickname: nickname, roomId: roomId },
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

// 设置性别（未设置的可以设置一次，1男 2女）
function setUserSex(sex, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/setUserSex`,
            data: { sex: sex },
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

// 获取积分商城商品
function getGiftsList(current, size, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/buy/getGiftsList`,
            data: { current: current, size: size },
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

// 支付宝异步通知回调
function alipayCallback(option, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/buy/alipayCallback`,
            data: { option: option },
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

// 提交购买VIP
function buyVipPayment(itemId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/buy/buyVipPayment`,
            data: { itemId: itemId },
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


// 获取VIP购买配置
function getVipPayment(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/buy/getVipPayment`,
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


// 获取关于我们内容
function getAboutUs(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/common/getAboutUs`,
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

// 发送绑定邮箱获取验证码
function sendEmailBindCode(email, verifyCode, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/sendEmailBindCode`,
            headers: { user_token: token },
            data: { email: email, verifyCode: verifyCode },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 获取用户个人信息
function info(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/info`,
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

// 获取消息未读条数
function getUnreadMessageCount(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/getUnreadMessageCount`,
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

// 修改密码
function changePassword(oldPassword, newPassword, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/changePassword`,
            data: { oldPassword: oldPassword, newPassword: newPassword },
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

// 获取推广链接
function getPromoteInfo(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/getPromoteInfo`,
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


// 签到  获取签到信息(signDays表示目前应该签第X天)
function getSignInfo(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/getSignInfo`,
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

// 今天是否已经签到
function hasSignIn(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/hasSignIn`,
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

// 用户签到，领取奖励，返回当前积分
function signIn(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/signIn`,
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


//文件上传接口 type:1头像 2聊天 3系统
function upload(type, file, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/common/upload?type=${type}`,
            data: file,
            processData: false,
            contentType: false,
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

// 设置头像
function updateAvatar(path, roomId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/updateAvatar`,
            data: { path: path, roomId: roomId },
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

// 注册
function register(nickname, username, password, sex, domain, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/register`,
            data: { nickname: nickname, username: username, password: password, sex: sex, domain: domain, promoteUserId: 0 },
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


// 随机获取一个用户名
function getRandNickname(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/getRandNickname`,
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



// 获取会话列表
function getChatlist(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/list`,
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

// 切换聊天室
function changeRoom(websiteId, roomId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/changeRoom`,
            data: { websiteId: websiteId, roomId: roomId },
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

// 查找聊天室记录
function roomChatRecord(websiteId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/roomChatRecord`,
            data: { websiteId: websiteId },
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

// 查看用户是否是好友和拉黑
function friendAndBlock(targetUserId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/friendAndBlock`,
            data: { targetUserId: targetUserId },
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

// 加为好友
function addFriend(friendId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/friend/add`,
            data: { friendId: friendId },
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

// 拉黑
function blockUser(targetUserId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/block`,
            data: { targetUserId: targetUserId },
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

// 取消拉黑
function unblock(targetUserId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/unblock`,
            data: { targetUserId: targetUserId },
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

// 群组是否收藏
function isFavorite(websiteId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/isFavorite`,
            data: { websiteId: websiteId },
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

// 添加网站收藏
function addFavorite(websiteId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/addFavorite`,
            data: { websiteId: websiteId },
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

// 获取其他用户的个人信息
function otherUserInfo(targetUserId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/otherUserInfo`,
            data: { targetUserId: targetUserId },
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

// 设置个性签名

function updateSignature(signature, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/updateSignature`,
            data: { signature: signature },
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

// 抽奖
function draw(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/lottery/draw`,
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

// 奖品列表
function awardList(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/lottery/list`,
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

// 抽奖记录
function awardLog(current, size, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/lottery/log`,
            headers: { user_token: token },
            data: { current: current, size: size },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 获取可用抽奖次数
function getLotteryNum(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/lottery/getNum`,
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


// 退出登录
function logout(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/user/logout`,
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

// 切换网站时调接口
function changeWebsite(url, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "post",
            url: wTurl + `/chatList/changeWebsite`,
            data: { url: url },
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

// 获取好友列表
function getFriends(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/friend/list',
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

// 添加群聊到聊天列表
function addWebsite(websiteId, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/chatList/addWebsite',
            headers: { user_token: token },
            data: { websiteId: websiteId },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

// 获取群聊列表
function favorite(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/chatRoom/favorite',
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


//设置备注
function friendNote(id, noteName, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/friend/note',
            data: { id: id, noteName: noteName },
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


//删除好友
function removeFriend(id, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/friend/remove',
            data: { id: id },
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


//取消群聊收藏

function removeFavorite(id, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/chatRoom/removeFavorite',
            data: { id: id },
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


//获取推荐的网站
function dailyRecommend(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/website/dailyRecommend',
            data: {},
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


//网站搜索

function search(current, size, param, token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/website/search',
            data: { current: current, size: size, param: param },
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

//获取搜索关键词
function searchKeywords(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/website/searchKeywords',
            data: {},
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


//获取分类下的热门网站
function getHotWebsite(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/website/getHotWebsite',
            data: {},
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



//漂流瓶

//获取可用瓶子次数
function driftBottleNum(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/num',
            data: {},
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

//扔瓶子
function driftBottleAdd(token, content, image1, image2, image3, type) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/add',
            data: {
                content: content,
                image1: image1,
                image2: image2,
                image3: image3,
                type: type
            },
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

//捡瓶子
function driftBottlePick(token) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/pick',
            data: {},
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

//获取瓶子内容
function driftBottleDetail(token, bottleId, sort) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/detail',
            data: {
                bottleId: bottleId,
                sort: sort,
            },
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

//获取我的瓶子
function driftBottleList(token, current, size) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/list',
            data: {
                current: current,
                size: size,
            },
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
//获取我的评论
function driftBottleListMyComment(token, current, size) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/listMyComment',
            data: {
                current: current,
                size: size,
            },
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


//评论漂流瓶
function driftBottleComment(token, bottleId, content) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/comment',
            data: {
                bottleId: bottleId,
                content: content,
            },
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

//漂流瓶点赞
function driftBottleLike(token, bottleId) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/like',
            data: {
                bottleId: bottleId,
            },
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

//评论点赞
function driftBottleLikeComment(token, commentId) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/likeComment',
            data: {
                commentId: commentId,
            },
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

//销毁瓶子
function driftBottleRemove(token, bottleId) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "POST",
            url: wTurl + '/driftBottle/remove',
            data: {
                bottleId: bottleId,
            },
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

//高德根据ip获取地址
function address(ip) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "GET",
            url: 'https://restapi.amap.com/v3/ip?parameters',
            data: {
                ip: ip,
                output: "JSON",
                key: "a56620b1b0ce81cba0140eed46a4ac86"
                // bottleId: bottleId,
            },
            // headers: { user_token: token },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}

//高德根据地址过去经纬度
function longitudeAndLatitude(address) {
    return new Promise((resolve, reject) => {
        jQuery.ajax({
            type: "GET",
            url: 'https://restapi.amap.com/v3/geocode/geo',
            data: {
                address: address,
                output: "JSON",
                key: "a56620b1b0ce81cba0140eed46a4ac86"
                // bottleId: bottleId,
            },
            // headers: { user_token: token },
            success: function (res) {
                resolve(res)
            },
            fail: function (error) {
                reject(error)
            }
        })
    })
}
