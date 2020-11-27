// const url = "http://192.168.0.33:8090"
// const url ="http://192.168.0.129:8090"
// const url = "https://api.wetalk.icu"
 let url=""

function serverUrl() {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "get",
			url: 'https://server.wetalk.icu/config.json',
			async : false, 
			success: function(res) {
				resolve(res)
				url=res.server
			},
			fail: function(error) {
				reject(error)
			}
		})
	})
}
serverUrl()

//箱注册账号激活
function activeByEmail(code) {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "POST",
			url: url + '/user/activeByEmail',
			data: {
				code: code
			},
			success: function(res) {
				resolve(res)
			},
			fail: function(error) {
				reject(error)
			}
		})
	})
}


//重置密码（从邮箱跳转到页面重置密码）
function resetPassword(code, password) {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "POST",
			url: url + '/user/resetPassword',
			data: {
				code: code,
				password: password
			},
			success: function(res) {
				resolve(res)
			},
			fail: function(error) {
				reject(error)
			}
		})
	})
}


//箱注册账号激活
function activeByEmail(code) {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "POST",
			url: url + '/user/activeByEmail',
			data: {
				code: code
			},
			success: function(res) {
				resolve(res)
			},
			fail: function(error) {
				reject(error)
			}
		})
	})
}

//注册
function register(username, nickname, password, sex, domain, promoteUserId) {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "POST",
			url: url + '/user/register',
			data: {
				username: username,
				nickname: nickname,
				password: password,
				sex: sex,
				domain: domain,
				promoteUserId: promoteUserId,
			},
			success: function(res) {
				resolve(res)
			},
			fail: function(error) {
				reject(error)
			}
		})
	})
}


//随机获取一个用户名
function getName() {
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "POST",
			url: url + '/user/getRandNickname',
			data: {},
			success: function(res) {
				resolve(res)
			},
			fail: function(error) {
				reject(error)
			}
		})
	})
}