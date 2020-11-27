// const url = "http://192.168.0.33:8090"
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

function register(username,nickname,password,sex,domain,promoteUserId) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: url + '/user/register',
      data: {
        username: username,
        nickname: nickname,
        password: password,
		sex:sex,
		domain:domain,
		promoteUserId:promoteUserId,
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (error) {
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