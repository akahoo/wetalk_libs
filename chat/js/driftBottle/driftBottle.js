function bottleJs() {
    let data = {
        token: localStorage.getItem("token"),
        cdn: localStorage.getItem("cdn"),
        throwDriftBottleType: 1,
        throwDriftBottleFile: "",
        throwDriftBottlePicList: [],
        driftBottleDetails: "",
        bottleId: "",
        commentId: "",
        bottleCurrent: 1,
        myType: 1,
        bottlePages: "",
        bottlePage: "",
        bottleUploadImgList: [],
        sortType: 1,
        bottleLocalityPic: [],
        LongitudeAndLatitudeList: [],
        ipList: [],
        provinceList: [],
        imgBase64: "",
        picWeight:0.92,
    }
    $("#driftBottleIndex").remove()
    $(`
    <div id="driftBottleIndex" class="weTalkRightItem">
        <!-- 漂流瓶简介 -->
		<div id="driftBottleIntro">
			<p>关于漂流瓶</p>
			<div>
				<p>在漂流瓶中的纸条往往包含着重要的信息、情感的倾诉或者衷心的祝福。发现一个从未知领域而来的漂流瓶，是一种惊喜、神秘、偶然、期待……</p>
				<p> 每个漂流瓶在海上漂流30天后沉没，在这期间任何人都有机会捡起漂流瓶，查看瓶中的内容，与其互动。</p>
				<p> 扔漂流瓶和捡漂流瓶都有机会获得“惊喜礼物”，吸引越多人评论和点赞，获得礼物的概率越大。</p>
			</div>
			<span>
				<button id="driftBottleIntroBtn">好的</button>
			</span>
		</div>
        <!-- 我的漂流瓶 -->
        <div id="myDriftBottle">
            <div class="bottleOnePage">这已经是第一页了</div>
            <div class="bottleEndPage">这已经是最后一页了</div>
            <div class="bottleRemove">销毁成功</div>
            <img src="images/driftbottle/9.png" id="closeMyDriftBottle">
            <p>我的瓶子</p>
            <div class="myDriftBottleOut">
                <div class="myDriftBottleTab">
                    <p id="myBottleOption">我的瓶子</p>
                    <p id="myFootprintOption">我的足迹</p>
                </div>
                <ul id="myDriftBottleContent">
                </ul>
            </div>
            <span>
                <img src="images/driftbottle/1.png" id="bottleTopPage">
                <img src="images/driftbottle/3.png" id="bottleBottomPage">
            </span>
        </div>
        <!-- 瓶子详情 -->
        <div id="driftBottleDetails">
            <div class="driftBottleDetailsHint">请输入评论内容</div>
            <img src="images/driftbottle/9.png" id="closeDriftBottleDetails">
            <div class="driftBottleDetailsTop">
                <p><img src="" id="detailBottletype"></p>
                <div>
                    <p id="driftBottleDetailsType"></p>
                    <div class="topRightFooter">
                        <p class="topRightFooterLeft">
                            <span class="detailtopTime"></span>
                            <span>来自：<span class="detailtopProvince"></span></span>
                        </p>
                        <p id="driftBottleDetailsMap">查看漂流地图</p>
                    </div>
                </div>
            </div>
            <div class="driftBottleContent">
                <div class="driftBottleContentText"></div>
                <p class="driftBottleContentPic">
                    <img class="driftBottleContentOnePic">
                    <img class="driftBottleContentTwoPic">
                    <img class="driftBottleContentThreePic">
                </p>
                <div class="driftBottleContentFooter">
                    <p class="driftBottleContentPraise">
                        <img src="images/driftbottle/7.png" id="bottleGiveLike">
                        <img src="images/driftbottle/8.png" id="bottleAlreadyLike">
                        <span id="bottleLikeNum"></span>
                    </p>
                    <p>
                        <span>剩余时间：<span id="timeRemaining"></span>天</span>
                    </p>
                </div>
            </div>
            <div class="driftBottleDetailsBottom">
                <div>
                    <div class="driftBottleComment" contenteditable="true" data-text="如果想持续关注这个瓶子，就留下你的足迹吧~"></div>
                    <div class="driftBottleCommentTab">
                        <p>
                            <button type="button" id="driftBottleCommentThrow">扔回海里</button>
                            <button type="button" id="driftBottleCommentStay">留下足迹</button>
                        </p>
                    </div>
                    <div class="driftBottleCommentDetails">
                        <div class="driftBottleDetailsBottomTitle">
                            <p class="driftBottleDetailsTrack">足迹（<span id="driftBottleDetailsTrack"></span>）</p>
                            <p class="driftBottleDetailsCut">
                                <span id="driftBottleDetailsHot">热度</span>
                                <span class="driftBottleDetailsLine"></span>
                                <span id="driftBottleDetailsNew">最新</span>
                            </p>
                        </div>
                        <ul id="driftBottleComment">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- 漂流瓶地图 -->
        <div id="bottleMapOut">
            <div id="bottleMap"></div>
            <p>
                <img src="images/driftbottle/14.png" id="closeBottleMap">
            </p>
        </div>
        <!-- 漂流瓶蒙版 -->
        <div class="driftBottleIndexMasking"></div>
        <!-- 漂流瓶预览 -->
        <div class="bottlePreviewTier">
            <div class="bottlePreviewTierPic">
                <img src="" id="bottlePreviewTierPic">
            </div>
            <p class="bottlePreviewTierFooter">
                <img src="images/driftbottle/14.png" id="closeBottlePreviewTier">
            </p>
        </div>
        <!-- 扔个瓶子 -->
		<div id="throwDriftBottle">
			<div class="throwDriftBottleHint">请输入漂流瓶内容</div>
			<p>新瓶子</p>
			<img src="images/driftbottle/9.png" id="closeThrowDriftBottle">
			<div>
				<div class="throwDriftBottleAllBtn">
					<p>
						<img src="images/driftbottle/friend.png">
						<button type="button" class="changeThrowBottle" id="friendBottle">交友瓶</button>
					</p>
					<p>
						<img src="images/driftbottle/secret.png">
						<button type="button" class="changeThrowBottle" id="secretBottle">秘密瓶</button>
					</p>
					<p>
						<img src="./images/driftbottle/emotion.png">
						<button type="button" class="changeThrowBottle" id="emotionBottle">情绪瓶</button>
					</p>
				</div>
				<div contenteditable="true" id="throwDriftBottleIpt" data-text="请填写纸条内容"></div>
				<div class="throwDriftBottleUplodeDiv">
					<ul id="bottleLocalityPic"></ul>
					<label for="throwDriftBottleUplode" class="throwDriftBottleUplode">
						<img src="images/driftbottle/11.png" />
					</label>
					<input type="file" id="throwDriftBottleUplode" class="weTalkSendPic" />
				</div>
				<p class="throwDriftBottleText">可添加<span id="throwDriftBottleUplodeNum">0</span>/3张图片</p>
			</div>
			<span>
				<button type="button" id="throwDriftBottleBtn">扔到海里</button>
			</span>
        </div>
        <div class="bottleHint"></div>
        <!-- 漂流瓶主页 -->
        <p>
            <img src="images/driftbottle/title.png">
            <img src="images/driftbottle/icon.png" id="driftBottleIndexIcon">
        </p>
        <div id="driftBottleAllBtn">
            <p><img src="images/driftbottle/btn1.png" id="openMyBottle"></p>
            <p>
                <img src="images/driftbottle/btn3.png" id="fishForBottle">
                <span id="pickNum"></span>
            </p>
            <p>
                <img src="images/driftbottle/btn2.png" id="throwBottle">
                <span id="throwNum"></span>
            </p>
        </div>
        <img src="images/driftbottle/06.png" id="twoCloud">
        <img src="images/driftbottle/07.png" id="oneCloud">
        <img src="" id="driftBottleBottle">
        <img src="images/driftbottle/08.png" class="driftBottleFooter">
    </div>
    `).appendTo(".weTalkRight")
    console.log(data.token)
    $("#driftBottleIndex").show()
    console.log($(".weTalkRight"))
    getDriftBottleNum()
    cleanLikeRecord('LikeRecord')
    cleanLikeRecord('LikeCommentIdRecord')
    $("#driftBottleIndexIcon").on("click", driftBottleIndexIcon)
    $("#driftBottleIntroBtn").on("click", driftBottleIntroBtn)
    $("#openMyBottle").on("click", openMyBottle)
    $("#throwBottle").on("click", throwBottle)
    $("#fishForBottle").on("click", fishForBottle)
    $("#closeDriftBottleDetails").on("click", function () {
        $(".driftBottleComment").html("")
        $("#driftBottleDetails").hide()
        $(".driftBottleContentOnePic").attr("src", "")
        $(".driftBottleContentTwoPic").attr("src", "")
        $(".driftBottleContentThreePic").attr("src", "")
    })
    $("#closeThrowDriftBottle").on("click", function () {
        $("#throwDriftBottle").hide()
    })
    $("#closeMyDriftBottle").on("click", function () {
        data.bottleCurrent = 1
        $("#myDriftBottle").hide()
    })
    $("#friendBottle").on("click", function () {
        $(".changeThrowBottle").css({
            "color": "#A0711B",
            "background": "#DBD4C6"
        })
        $(this).css({
            "color": "#fff",
            "background": "#E5B155"
        })
        data.throwDriftBottleType = 1
    })
    $("#secretBottle").on("click", function () {
        $(".changeThrowBottle").css({
            "color": "#A0711B",
            "background": "#DBD4C6"
        })
        $(this).css({
            "color": "#fff",
            "background": "#EB6052"
        })
        data.throwDriftBottleType = 2
    })
    $("#emotionBottle").on("click", function () {
        $(".changeThrowBottle").css({
            "color": "#A0711B",
            "background": "#DBD4C6"
        })
        $(this).css({
            "color": "#fff",
            "background": "#7854E8"
        })
        data.throwDriftBottleType = 3
    })
    //扔瓶子将图片加载在本地
    $("#throwDriftBottleUplode").on("change", function (event) {
        data.throwDriftBottleFile = event.currentTarget.files[0]
        $("#throwDriftBottleUplode").val("")
        console.log(data.throwDriftBottleFile)
        let filePath = data.throwDriftBottleFile.name;
        // let imgBase64 = ''; //存储图片的base64
        let fileFormat = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
        if (!fileFormat.match(/.png|.jpg|.jpeg|.bmp/)) {
            showTip('上传错误,文件格式必须为：png/jpg/jpeg/bmp');
            return;
        }
        data.maxSize = 1 * 1000 * 1024;
        if (data.throwDriftBottleFile.size > data.maxSize) {
            console.log(1)
            // console.log(data.throwDriftBottleFile)
            compress(data.throwDriftBottleFile, check)
        } else {
            console.log(2)
            directTurnIntoBase64(data.throwDriftBottleFile, function (imgBase64) {
                data.bottleLocalityPic.push(imgBase64)
                data.throwDriftBottlePicList.push(convertBase64UrlToFile(imgBase64, (new Date()).valueOf()))
                console.log(data.throwDriftBottlePicList)
                shwoBottleLocalityPic()
                let throwDriftBottleUplodeNum = data.throwDriftBottlePicList.length
                $("#throwDriftBottleUplodeNum").text(`${throwDriftBottleUplodeNum}`)
                if (data.throwDriftBottlePicList.length == 3) {
                    $(".throwDriftBottleUplode").hide()
                }

            });

        }
    })
    $("#throwDriftBottleBtn").on("click", subThrowDriftBottle)
    $("#driftBottleBottle").on("click", lookDriftBottle)
    //点赞
    $("#bottleGiveLike").on("click", bottleGiveLike)
    $("#driftBottleCommentThrow").on("click", function () {
        $("#driftBottleDetails").hide()
    })
    //切换排序
    $("#driftBottleDetailsHot").on("click", function () {
        $("#driftBottleDetailsNew").css({
            "color": "#C0A676",
        })
        $(this).css({
            "color": "#A0711B",
        })
        data.sortType = 1
        lookDriftBottleDetail()
    })
    $("#driftBottleDetailsNew").on("click", function () {
        $("#driftBottleDetailsHot").css({
            "color": "#C0A676",
        })
        $(this).css({
            "color": "#A0711B",
        })
        data.sortType = 2
        lookDriftBottleDetail()
    })
    //我的瓶子
    $("#driftBottleCommentStay").on("click", driftBottleCommentStay)
    $("#myBottleOption").on("click", function () {
        $("#myFootprintOption").css({
            "color": "#A0711B",
            "background": "#D0C3AB",
        })
        $(this).css({
            "color": "#fff",
            "background": "#A0711B",
        })
        data.bottleCurrent = 1
        data.myType = 1
        getDriftBottleList()
    })
    //我的足迹
    $("#myFootprintOption").on("click", function () {
        $("#myBottleOption").css({
            "color": "#A0711B",
            "background": "#D0C3AB",
        })
        $(this).css({
            "color": "#fff",
            "background": "#A0711B",
        })
        data.bottleCurrent = 1
        data.myType = 2
        getDriftBottleListMyComment()
    })
    //漂流瓶上一页
    $("#bottleTopPage").on("click", bottleTopPage)
    //漂流瓶下一页
    $("#bottleBottomPage").on("click", bottleBottomPage)
    $("#closeBottlePreviewTier").on("click", function () {
        $(".driftBottleIndexMasking").hide()
        $(".bottlePreviewTier").hide()
    })
    $("#driftBottleDetailsMap").on("click", function () {
        let oneCss = "https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css"
        loadCSS(oneCss)
        $(".driftBottleIndexMasking").show()
        $("#bottleMapOut").show()
        var map = new AMap.Map("bottleMap", {
            center: [116.395577, 39.892257],
            zoom: 14
        });
        var path = data.LongitudeAndLatitudeList
        for (let i = 0; i < path.length; i++) {
            map.add(new AMap.Marker({
                position: path[i]
            }))
        }
        var polyline = new AMap.Polyline({
            path: path,
            outlineColor: 'red',
            borderWeight: 3,
            strokeColor: "red",
            strokeOpacity: 1,
            strokeWeight: 5,
            strokeStyle: "solid",
            strokeDasharray: [10, 5],
            lineJoin: 'round',
            lineCap: 'round',
            zIndex: 50,
        })
        polyline.setMap(map)
        map.setFitView([polyline])
    })
    $("#closeBottleMap").on("click", function () {
        $("#bottleMapOut").hide()
        $(".driftBottleIndexMasking").hide()
        removejscssfile("https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css", "css")
    })


    function convertBase64UrlToFile(urlData, filename) {
        var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime })
    }
    function directTurnIntoBase64(currentfile, callback) {
        var r = new FileReader();
        //转成base64
        r.onload = function () {
            imgBase64 = r.result;
            callback(imgBase64)
        }
        r.readAsDataURL(currentfile);//转成base64格式
    }
    function driftBottleIndexIcon() {
        $("#driftBottleIntro").show()
    }
    function driftBottleIntroBtn() {
        $("#driftBottleIntro").hide()
    }
    function openMyBottle() {
        $("#myDriftBottle").show()
        $("#myFootprintOption").css({
            "color": "#A0711B",
            "background": "#D0C3AB",
        })
        $("#myBottleOption").css({
            "color": "#fff",
            "background": "#A0711B",
        })
        getDriftBottleList()
    }
    function throwBottle() {
        if ($("#pickNum").text() == 0) {
            console.log($("#pickNum").text())
            $(".bottleHint").text("今日扔瓶子的次数已用完")
            $(".bottleHint").show();
            setTimeout(function () {
                $(".bottleHint").hide();
            }, 3000)
        } else {
            $("#throwDriftBottle").show()
            $(".throwDriftBottleUplode").show()
        }
        // data.throwDriftBottlePicList = []
        $("#throwDriftBottleIpt").html("")
        $(".throwDriftBottleUplodeImg").remove()
        $("#throwDriftBottleUplodeNum").text("0")
        $("#bottleLocalityPic").empty()
        data.bottleLocalityPic = []
        data.throwDriftBottlePicList = []
        data.throwDriftBottleFile = ""
        console.log(data.throwDriftBottleFile)
    }

    //可使用次数
    function getDriftBottleNum() {
        driftBottleNum(data.token).then((res) => {
            $("#pickNum").text(`${res.data.pickNum}`)
            $("#throwNum").text(`${res.data.throwNum}`)
        })
    }
    //扔瓶子
    async function subThrowDriftBottle() {
        let content = $("#throwDriftBottleIpt").html()
        //在这里调用上传图片的函数  不这样的写的请求接口是异步获取不到list list为空
        if (content == "") {
            $(".throwDriftBottleHint").show();
            setTimeout(function () {
                $(".throwDriftBottleHint").hide();
            }, 3000)
        } else {
            await bottleUpload()
            //用到服务器返回的值然后再进行请求发送服务返回的值
            let list = data.bottleUploadImgList
            console.log(list)
            let image1 = ""
            let image2 = ""
            let image3 = ""
            if (list[0]) {
                image1 = list[0]
            }
            if (list[1]) {
                image2 = list[1]
            }
            if (list[2]) {
                image3 = list[2]
            }
            driftBottleAdd(data.token, content, image1, image2, image3, data.throwDriftBottleType).then((res) => {
                if (res.code == 1) {
                    $("#throwDriftBottle").hide()
                    getDriftBottleNum()
                    data.throwDriftBottlePicList = []
                    data.bottleUploadImgList = []
                    console.log(data.bottleUploadImgList)
                    $("#throwDriftBottleIpt").html("")
                    $(".throwDriftBottleUplodeImg").remove()
                    $("#throwDriftBottleUplodeNum").text("0")
                    $(".bottleHint").text("瓶子已经成功扔到海里")
                    $(".bottleHint").show();
                    setTimeout(function () {
                        $(".bottleHint").hide();
                    }, 3000)
                }
            })
        }

    }
    //遍历请求
    async function bottleUpload() {
        //本地拉取的三张图片在一个数组
        let list = data.throwDriftBottlePicList
        console.log(list)
        for (let i = 0; i < list.length; i++) {
            let params = new FormData();
            params.append("file", list[i], list[i].name);
            //遍历本地图片数组依次请求上传的服务器
            await upload(4, params, data.token).then((res) => {
                if (res.code == 1) {
                    //存储到服务器服务器返回值然后把每个返回值存到另一个数组
                    data.bottleUploadImgList.push(res.message)
                }
            })
        }
    }
    //遍历显示从本地拉取的图片
    function shwoBottleLocalityPic() {
        $("#bottleLocalityPic").empty()
        console.log(data.bottleLocalityPic)
        let list = data.bottleLocalityPic
        for (let i = 0; i < list.length; i++) {
            bottleLocalityPic = $(
                `<li id="showBottleLocalityPic">
              <img src="${list[i]}" class="BottleLocalityPic">
              <div id="throwBottleMasking"></div>
              <img src="images/driftbottle/10.png" id="removeBottleLocalityPic">
             </li>
        `).appendTo($("#bottleLocalityPic"))
            bottleLocalityPic.on("mouseover", showbottleLocalityPic)
            bottleLocalityPic.on("mouseleave", hidbottleLocalityPic)
            bottleLocalityPic.children("#removeBottleLocalityPic").on("click", removeBottleLocalityPic)
            bottleLocalityPic.attr("index", i)
        }

    }
    function showbottleLocalityPic() {
        console.log($(this))
        $(this).children("#throwBottleMasking").show()
        $(this).children("#removeBottleLocalityPic").show()
    }
    function hidbottleLocalityPic() {
        console.log($(this))
        $(this).children("#throwBottleMasking").hide()
        $(this).children("#removeBottleLocalityPic").hide()
    }

    function removeBottleLocalityPic() {
        console.log($(this).parent().attr("index"))
        data.bottleLocalityPic.splice($(this).parent().attr("index"), 1)
        shwoBottleLocalityPic()
        data.throwDriftBottlePicList.splice($(this).parent().attr("index"), 1)
        let throwDriftBottleUplodeNum = data.throwDriftBottlePicList.length
        $("#throwDriftBottleUplodeNum").text(`${throwDriftBottleUplodeNum}`)
        if (data.throwDriftBottlePicList.length == 3) {
            $(".throwDriftBottleUplode").hide()
        }
        if (data.throwDriftBottlePicList.length < 3) {
            $(".throwDriftBottleUplode").show()
        }
        console.log(data.bottleLocalityPic)
        console.log(data.throwDriftBottlePicList)
    }
    //捞瓶子
    function fishForBottle() {
        if ($("#pickNum").text() == 0) {
            console.log($("#pickNum").text())
            $(".bottleHint").text("今日捞瓶子的次数已用完")
            $(".bottleHint").show();
            setTimeout(function () {
                $(".bottleHint").hide();
            }, 3000)
        } else {
            if ($("#driftBottleBottle").attr("src") == "") {
                driftBottlePick(data.token).then((res) => {
                    // console.log(res)
                    if (res.code == 1) {
                        // data.driftBottleDetails = res.data
                        $(".bottleHint").text("一个瓶子缓缓飘来...")
                        $(".bottleHint").show();
                        setTimeout(function () {
                            $(".bottleHint").hide();
                        }, 3000)
                        data.bottleId = res.data.id
                        getDriftBottleNum()
                        $("#driftBottleBottle").fadeIn();
                        if (res.data.type == 1) {
                            $("#driftBottleBottle").attr("src", "images/driftbottle/gainfriend.png")
                        } else if (res.data.type == 2) {
                            $("#driftBottleBottle").attr("src", "images/driftbottle/gainsecret.png")
                        } else if (res.data.type == 3) {
                            $("#driftBottleBottle").attr("src", "images/driftbottle/gainemotion.png")
                        }
                    }
                })
            }
        }

    }
    //查看瓶子详情
    function lookDriftBottle() {
        $("#driftBottleDetails").show()
        $("#driftBottleBottle").attr("src", "")
        $(".driftBottleComment").text("")
        data.sortType = 1
        $("#driftBottleDetailsHot").css({
            "color": "#A0711B"
        })
        $("#driftBottleDetailsNew").css({
            "color": "#c0a676"
        })
        lookDriftBottleDetail()
    }
    function lookDriftBottleDetail() {
        $("#driftBottleComment").empty()
        data.LongitudeAndLatitudeList = []
        driftBottleDetail(data.token, data.bottleId, data.sortType).then((res) => {
            console.log(res)
            let detail = res.data.main
            if (detail.type == 1) {
                $("#driftBottleDetailsType").css({
                    "background": "#E5B155"
                })
                $("#driftBottleDetailsType").text("交友瓶")
                $("#detailBottletype").attr("src", "images/driftbottle/friend.png")
            } else if (detail.type == 2) {
                $("#detailBottletype").attr("src", "images/driftbottle/secret.png")
                $("#driftBottleDetailsType").css({
                    "background": "#EB6052"
                })
                $("#driftBottleDetailsType").text("秘密瓶")
            } else if (detail.type == 3) {
                $("#detailBottletype").attr("src", "images/driftbottle/emotion.png")
                $("#driftBottleDetailsType").css({
                    "background": "#7854E8"
                })
                $("#driftBottleDetailsType").text("情绪瓶")
            }
            // getAddress(detail.ip)
            $(".detailtopTime").text(`${detail.create_time}`)
            $(".detailtopProvince").text(`${detail.province}`)
            $(".driftBottleContentText").text(`${detail.content}`)
            $("#timeRemaining").text(`${detail.remaining_day}`)
            $("#bottleLikeNum").text(`${detail.like_num}`)
            let address = detail.province
            getLongitudeAndLatitude(address)
            if (detail.image1 !== "") {
                $(".driftBottleContentOnePic").attr("src", data.cdn + `${detail.image1}`)
                $(".driftBottleContentOnePic").on("click", bottlePreview)
            }
            if (detail.image2 !== "") {
                $(".driftBottleContentTwoPic").attr("src", data.cdn + `${detail.image2}`)
                $(".driftBottleContentTwoPic").on("click", bottlePreview)
            }
            if (detail.image3 !== "") {
                $(".driftBottleContentThreePic").attr("src", data.cdn + `${detail.image3}`)
                $(".driftBottleContentThreePic").on("click", bottlePreview)
            }
            data.ipList = res.data.comment
            let list = res.data.comment
            $("#driftBottleDetailsTrack").text(`${list.length}`)
            if (list.length == 0) {
                $(".driftBottleCommentDetails").hide()
            } else {
                $(".driftBottleCommentDetails").show()
                if (list.length < 4) {
                    $("#driftBottleDetailsvViewMore").hide()
                }
                for (let i = 0; i < list.length; i++) {
                    commentDetils = $(
                        `
                    <li class="driftBottleDetailsComment">
                    <div class="criticPersonalinFormation">
                        <p>
                            <span id="criticHeadPortrait">${list[i].nickname.charAt(0)}</span>
                            <img class="commentDetilsheadPortrait"/>
                            <span id="criticName">${list[i].nickname}</span>
                            <span id="criticAdd">${list[i].province}网友</span>
                        </p>
                        <p>
                            <span id="criticTime">${list[i].create_time}</span>
                            <span id="endorseNum">+<span id="likeCommentNum">${list[i].like_num}</span></span>
                        </p>
                    </div>
                    <div class="commentContent">
                        ${list[i].content}
                    </div>
                </li>
                `
                    ).appendTo($("#driftBottleComment"))
                    commentDetils.attr("commentId", list[i].id)
                    if (list[i].avatar) {
                        commentDetils.children(".criticPersonalinFormation").children().children("#criticHeadPortrait").hide();
                        commentDetils.children(".criticPersonalinFormation").children().children(".commentDetilsheadPortrait").attr({
                            "src": data.cdn + list[i].avatar
                        }).show();
                    } else {
                        commentDetils.children(".criticPersonalinFormation").children().children("#criticHeadPortrait").show();
                        commentDetils.children(".criticPersonalinFormation").children().children(".commentDetilsheadPortrait").hide();
                    }
                    let obj = commentDetils.children(".criticPersonalinFormation").children().children("#endorseNum")
                    isLickComment(list[i].id, obj)
                    let address = list[i].province
                    getLongitudeAndLatitude(address)
                }
            }
            isLikeAvailable(data.bottleId)
        })
    }

    //是否可以点赞评论
    function isLickComment(commentId, obj) {
        if (window.localStorage.getItem('LikeCommentIdRecord') == null) {
            $(obj).on("click", endorseNum)
            return true;
        }
        let list = JSON.parse(window.localStorage.getItem('LikeCommentIdRecord'));
        for (var i = 0; i < list.length; i++) {
            var cols = list[i].split(",");
            if (cols[1] == commentId) {
                return false;
            }
        }
        $(obj).on("click", endorseNum)
        return true;
    }

    //是否可以点赞瓶子
    function isLikeAvailable(bottleId) {
        if (window.localStorage.getItem('LikeRecord') == null) {
            $("#bottleGiveLike").show()
            $("#bottleAlreadyLike").hide()
            return true;
        }
        let list = JSON.parse(window.localStorage.getItem('LikeRecord'));
        for (var i = 0; i < list.length; i++) {
            var cols = list[i].split(",");
            if (cols[1] == bottleId) {
                $("#bottleGiveLike").hide()
                $("#bottleAlreadyLike").show()
                return false;
            }
        }
        $("#bottleGiveLike").show()
        $("#bottleAlreadyLike").hide()
        return true;
    }
    //清理过期的LIKE数据
    function cleanLikeRecord(likeName) {
        if (window.localStorage.getItem(likeName) != null) {
            let list = JSON.parse(window.localStorage.getItem(likeName));
            var lastMonth = new Date().getTime() - 2592000000;
            for (var i = 0; i < list.length; i++) {
                var cols = list[i].split(",");
                if (parseFloat(cols[0]) < lastMonth) {
                    console.log(i)
                    list.splice(i, 1)
                }
            }
            window.localStorage.setItem(likeName, JSON.stringify(list))
        }
    }
    //点赞
    function bottleGiveLike() {
        driftBottleLike(data.token, data.bottleId).then((res) => {
            console.log(res)
            if (res.code == 1) {
                let num = parseInt($("#bottleLikeNum").text()) + 1
                $("#bottleLikeNum").text(`${num}`)
                let list = [];
                if (window.localStorage.getItem('LikeRecord') != null) {
                    list = JSON.parse(window.localStorage.getItem('LikeRecord'))
                }
                var item = new Date().getTime() + "," + data.bottleId;
                list.push(item)
                console.log("save like:" + item);
                window.localStorage.setItem('LikeRecord', JSON.stringify(list))
                $("#bottleGiveLike").hide()
                $("#bottleAlreadyLike").show()
            }
            // lookDriftBottleDetail()
        })
    }
    //评论漂流瓶
    function driftBottleCommentStay() {
        let content = $(".driftBottleComment").html()
        console.log(1)
        if (content == "") {
            console.log(1)
            $(".driftBottleDetailsHint").show();
            setTimeout(function () {
                $(".driftBottleDetailsHint").hide();
            }, 3000)
        } else {
            driftBottleComment(data.token, data.bottleId, content).then((res) => {
                if (res.code == 1) {
                    lookDriftBottleDetail()
                }
            })
        }

    }
    //点赞评论
    function endorseNum() {
        let commentId = $(this).parent().parent().parent().attr("commentId")
        console.log(commentId)
        driftBottleLikeComment(data.token, commentId).then((res) => {
            if (res.code == 1) {
                let list = []
                if (window.localStorage.getItem('LikeCommentIdRecord') != null) {
                    list = JSON.parse(window.localStorage.getItem('LikeRecord'))
                }
                var item = new Date().getTime() + "," + commentId;
                list.push(item)
                window.localStorage.setItem('LikeCommentIdRecord', JSON.stringify(list))
                let num = parseInt($(this).children().text()) + 1
                $(this).children().text(`${num}`)
                $(this).unbind("click", endorseNum)
            }
        })
    }

    //获取我的瓶子
    function getDriftBottleList() {
        $("#myDriftBottleContent").empty()
        driftBottleList(data.token, data.bottleCurrent, 3).then((res) => {
            console.log(res)
            let list = res.data.records
            data.bottlePage = parseInt(res.data.current)
            data.bottlePages = parseInt(res.data.pages)
            if (data.bottlePage == 1 && data.bottlePages == data.bottlePage) {
                $("#bottleTopPage").attr("src", "images/driftbottle/1.png")
                $("#bottleBottomPage").attr("src", "images/driftbottle/3.png")
            } else if (data.bottlePage == 1 && data.bottlePages > data.bottlePage) {
                $("#bottleTopPage").attr("src", "images/driftbottle/1.png")
                $("#bottleBottomPage").attr("src", "images/driftbottle/4.png")
            } else if (data.bottlePages == data.bottlePage && data.bottlePages > 1) {
                $("#bottleTopPage").attr("src", "images/driftbottle/2.png")
                $("#bottleBottomPage").attr("src", "images/driftbottle/3.png")
            } else if (data.bottlePage > 1 && data.bottlePage < data.bottlePages) {
                $("#bottleTopPage").attr("src", "images/driftbottle/2.png")
                $("#bottleBottomPage").attr("src", "images/driftbottle/4.png")
            }
            if (list.length == 0) {
                $(`<li class="myBottleNull">
                     <p>你还没有扔过漂流瓶，赶快试试吧！</p>
                   </li>`).appendTo($("#myDriftBottleContent"))
            } else {
                for (let i = 0; i < list.length; i++) {
                    myBottle = $(
                        `
                    <li id="myBottle">
                    <div class="myBottleLeft">
                        <p><img src="images/driftbottle/friend.png"></p>
                    </div>
                    <div class="myBottleRight">
                        <div class="myBottleRightTop">
                            <p>
                                <span id="myBottleType"></span>
                                <span id="myBottleTime">${list[i].create_time}</span>
                            </p>
                            <p class="myBottleRightTopRight">
                                <span id="myBottleOpen" class="myBottleTab">打开</span>
                                <span class="myBottleLine"></span>
                                <span class="myBottleTab" id="myBottleRemove">销毁</span>
                            </p>
                        </div>
                        <p class="myBottleRightCenter">${list[i].content}</p>
                        <div class="myBottleRighBottom">
                            <div class="myBottleRighBottomLeft">
                                <p><img src="./images/driftbottle/5.png"><span>${list[i].view_num}</span></p>
                                <p><img src="images/driftbottle/6.png"><span>${list[i].like_num}</span></p>
                                <p><img src="images/driftbottle/15.png"><span>${list[i].comment_num}</span></p>
                            </div>
                            <p><img src="images/driftbottle/16.png"><span>${list[i].remaining_day}天</span></p>
                        </div>
                    </div>
                </li>
                `
                    ).appendTo($("#myDriftBottleContent"))
                    if (list[i].type == 1) {
                        myBottle.children(".myBottleRight").children(".myBottleRightTop").children().children("#myBottleType").css({ "background": "#E5B155" })
                        myBottle.children(".myBottleRight").children(".myBottleRightTop").children().children("#myBottleType").text("交友瓶")
                        myBottle.children(".myBottleLeft").children().children().attr("src", "images/driftbottle/friend.png");
                    } else if (list[i].type == 2) {
                        myBottle.children(".myBottleLeft").children().children().attr("src", "images/driftbottle/secret.png");
                        myBottle.children(".myBottleRight").children(".myBottleRightTop").children().children("#myBottleType").css({ "background": "#EB6052" })
                        myBottle.children(".myBottleRight").children(".myBottleRightTop").children().children("#myBottleType").text("秘密瓶")
                    } else if (list[i].type == 3) {
                        myBottle.children(".myBottleLeft").children().children().attr("src", "images/driftbottle/emotion.png");
                        myBottle.children(".myBottleRight").children(".myBottleRightTop").children().children("#myBottleType").css({ "background": "#7854E8" })
                        myBottle.children(".myBottleRight").children(".myBottleRightTop").children().children("#myBottleType").text("情绪瓶")
                    }
                    myBottle.attr("bottleId", list[i].id)
                    myBottle.children(".myBottleRight").children(".myBottleRightTop").children(".myBottleRightTopRight").children("#myBottleOpen").on("click", openBottle)
                    myBottle.children(".myBottleRight").children(".myBottleRightTop").children(".myBottleRightTopRight").children("#myBottleRemove").on("click", removeBottle)
                }
            }

        })
    }
    //我的瓶子打开
    function openBottle() {
        // console.log($(this).parent().parent().parent().parent().attr("bottleId"))
        data.bottleId = $(this).parent().parent().parent().parent().attr("bottleId")
        $("#myDriftBottle").hide()
        lookDriftBottleDetail()
        $("#driftBottleDetails").show()
    }
    function removeBottle() {
        console.log(1)
        bottleId = $(this).parent().parent().parent().parent().attr("bottleId")
        driftBottleRemove(data.token, bottleId).then((res) => {
            console.log(res)
            if (res.code == 1) {
                $(".bottleRemove").show();
                setTimeout(function () {
                    $(".bottleRemove").hide();
                }, 3000)
                getDriftBottleList()
            }

        })
    }
    function getDriftBottleListMyComment() {
        $("#myDriftBottleContent").empty()
        driftBottleListMyComment(data.token, data.bottleCurrent, 4).then((res) => {
            console.log(res)
            let list = res.data.records
            data.bottlePage = parseInt(res.data.current)
            data.bottlePages = parseInt(res.data.pages)
            if (data.bottlePage == 1 && data.bottlePages == data.bottlePage) {
                $("#bottleTopPage").attr("src", "images/driftbottle/1.png")
                $("#bottleBottomPage").attr("src", "images/driftbottle/3.png")
            } else if (data.bottlePage == 1 && data.bottlePages > data.bottlePage) {
                console.log(1)
                $("#bottleTopPage").attr("src", "images/driftbottle/1.png")
                $("#bottleBottomPage").attr("src", "images/driftbottle/4.png")
            } else if (data.bottlePages == data.bottlePage && data.bottlePages > 1) {
                $("#bottleTopPage").attr("src", "images/driftbottle/2.png")
                $("#bottleBottomPage").attr("src", "images/driftbottle/3.png")
            } else if (data.bottlePage > 1 && data.bottlePage < data.bottlePages) {
                $("#bottleTopPage").attr("src", "images/driftbottle/2.png")
                $("#bottleBottomPage").attr("src", "images/driftbottle/4.png")
            }
            if (list.length == 0) {
                $(`<li class="myBottleNull">
                     <p>你还没有给漂流瓶瓶子留言过哦</p>
                   </li>`).appendTo($("#myDriftBottleContent"))
            } else {
                for (let i = 0; i < list.length; i++) {
                    myFootprint = $(
                        `
                <li id="myFootprint">
                <div>
                    <p>
                        <span id="myFootprintTime">${list[i].createTime}</span>
                        <span class="myFootprintText">
                            <span>${list[i].likeNum}</span>
                            人赞过你的足迹
                        </span>
                    </p>
                    <p class="myFootprintText" id="myFootprintOpen">打开</p>
                </div>
                <p>${list[i].content}</p>
            </li>
            `
                    ).appendTo($("#myDriftBottleContent"))
                    myFootprint.attr("bottleId", list[i].bottleId)
                    myFootprint.children().children("#myFootprintOpen").on("click", myFootprintOpen)
                }
            }
        })
    }
    //我的足迹打开
    function myFootprintOpen() {
        data.bottleId = $(this).parent().parent().attr("bottleId")
        $("#myDriftBottle").hide()
        lookDriftBottleDetail()
        $("#driftBottleDetails").show()
    }
    //上一页
    function bottleTopPage() {
        if (data.myType == 1) {
            if (data.bottlePage == 1) {
                $(".bottleOnePage").show();
                setTimeout(function () {
                    $(".bottleOnePage").hide();
                }, 3000)
            } else if (data.bottlePage > 1) {
                data.bottleCurrent = data.bottlePage - 1
                getDriftBottleList()
            }
        } else if (data.myType == 2) {
            if (data.bottlePage == 1) {
                $(".bottleOnePage").show();
                setTimeout(function () {
                    $(".bottleOnePage").hide();
                }, 3000)
            } else if (data.bottlePage > 1) {
                data.bottleCurrent = data.bottlePage - 1
                getDriftBottleListMyComment()
            }
        }

    }
    //下一页
    function bottleBottomPage() {
        console.log(1)
        if (data.myType == 1) {
            console.log(3)
            console.log(data.bottlePage)
            console.log(data.bottlePages)
            if (data.bottlePage == data.bottlePages || data.bottlePage > data.bottlePages) {
                console.log(2)
                $(".bottleEndPage").show();
                setTimeout(function () {
                    $(".bottleEndPage").hide();
                }, 3000)
            } else if (data.bottlePage < data.bottlePages) {
                data.bottleCurrent = data.bottlePage + 1
                getDriftBottleList()
            }
        } else if (data.myType == 2) {
            if (data.bottlePage < data.bottlePages) {
                data.bottleCurrent = data.bottlePage + 1
                getDriftBottleListMyComment()
            } else if (data.bottlePage == data.bottlePages || data.bottlePage > data.bottlePages) {
                $(".bottleEndPage").show();
                setTimeout(function () {
                    $(".bottleEndPage").hide();
                }, 3000)
            }
        }
    }
    function bottlePreview() {
        let src = $(this).attr('src')
        let img = new Image()
        img.src = src
        if (img.height > 442) {
            console.log(1)
            img.width = img.width * (442 / img.height)
            img.height = 442
            console.log(img.width,)
            if (img.width > 910) {
                img.height = img.height * (910 / img.width)
                img.width = 910
                $("#bottlePreviewTierPic").css({
                    "width": "442px",
                    "height": `${img.height}px`
                })
                $("#bottlePreviewTierPic").attr("src", src)
            }
            $("#bottlePreviewTierPic").css({
                "width": `${img.width}px`,
                "height": "442px"
            })
            $("#bottlePreviewTierPic").attr("src", img.src)
        } else if (img.width > 910) {
            img.height = img.height * (910 / img.width)
            img.width = 910
            if (img.height > 442) {
                img.width = img.width * (442 / img.height)
                img.height = 442
                $("#bottlePreviewTierPic").css({
                    "width": `${img.width}px`,
                    "height": "442px"
                })
                $("#bottlePreviewTierPic").attr("src", src)
            }
            $("#bottlePreviewTierPic").css({
                "width": "910px",
                "height": `${img.height}px`
            })
            $("#bottlePreviewTierPic").attr("src", img.src)
        } else {
            $("#bottlePreviewTierPic").attr("src", src)
        }
        $(".driftBottleIndexMasking").show()
        $(".bottlePreviewTier").show()

    }
    // function getAddress(ip) {
    //     address(ip).then((res) => {
    //         $(".detailtopProvince").text(`${res.province}` + "网友")
    //         let address = res.province
    //         getLongitudeAndLatitude(address)
    //     })
    // }
    //根据地址获取经纬度
    function getLongitudeAndLatitude(address) {
        longitudeAndLatitude(address).then((res) => {
            let list = []
            list = res.geocodes[0].location.split(",");
            data.LongitudeAndLatitudeList.push(list)
            console.log(data.LongitudeAndLatitudeList)
        })
    }

    //对图片进行压缩
    function compress(currentfile, callback) {
        if (typeof (FileReader) === 'undefined') {
            console.log("当前浏览器内核不支持base64图片压缩")
            directTurnIntoBase64(currentfile, callback);
        } else {
            try {  // 获取图片的原始大小
                let picNatW, picNatH,picWeight;
                getImageInfo(URL.createObjectURL(currentfile), function (width, height) {
                    // 在这里面使用
                    picNatW = width;    //图片的原始宽度
                    picNatH = height;   //图片的原始高度
                    picWeight = data.picWeight;
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        let image = $(`<img/>`);
                        image.on('load', function () {
                            if (picNatW > picNatH) {
                                if (picNatH > 1024) {
                                    var squareW = 1024
                                        , squareH = picNatH / picNatW * squareW
                                } else {
                                    var squareW = picNatW
                                        , squareH = picNatH
                                }
                            } else {
                                if (picNatW > 1024) {
                                    var squareH = 1024
                                        , squareW = picNatW / picNatH * squareH
                                } else {
                                    var squareW = picNatW
                                        , squareH = picNatH
                                }
                            }
                            var canvas = document.createElement('canvas'),
                                context = canvas.getContext('2d'),
                                imageWidth = 0, //压缩图片大小
                                imageHeight = 0,
                                offsetX = 0,
                                offsetY = 0,
                                data = '';
                            canvas.width = squareW;
                            canvas.height = squareH;
                            context.clearRect(0, 0, squareW, squareH);
                            if (this.width > squareW) {
                                imageWidth = Math.round(squareW);
                                imageHeight = squareH;
                                offsetX = Math.round((imageWidth - squareW) / 2);
                            } else {
                                imageHeight = Math.round(squareH);
                                imageWidth = squareW;
                                offsetY = Math.round((imageHeight - squareH) / 2)
                            }
                            context.drawImage(this, offsetX, offsetY, imageWidth, imageHeight);
                            var data = canvas.toDataURL('image/jpeg', data.picWeight)
                            console.log(1)
                            callback(data)
                        });
                        image.attr('src', event.target.result)
                    }
                    reader.readAsDataURL(currentfile);
                })

            } catch (e) {
                console.log('压缩失败!')
                //调用不压缩方法
                directTurnIntoBase64(currentfile, callback)
            }
        }
    }
    function check(imgBase64) {
        data.bottleLocalityPic.push(imgBase64);
        data.throwDriftBottlePicList.push(convertBase64UrlToFile(imgBase64, (new Date()).valueOf() + '.png'))
        shwoBottleLocalityPic()
        let throwDriftBottleUplodeNum = data.throwDriftBottlePicList.length
        $("#throwDriftBottleUplodeNum").text(`${throwDriftBottleUplodeNum}`)
        if (data.throwDriftBottlePicList.length == 3) {
            $(".throwDriftBottleUplode").hide()
        }
    }
    function getImageInfo(url, callback) {
        var img = new Image();
        img.src = url;
        if (img.complete) {
            // 如果图片被缓存，则直接返回缓存数据
            callback(img.width, img.height);
        } else {
            img.onload = function () {
                callback(img.width, img.height);
            }
        }
    }
    function removejscssfile(filename, filetype) {
        var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none"
        var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none"
        var allsuspects = document.getElementsByTagName(targetelement)
        for (var i = allsuspects.length; i >= 0; i--) {
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1) {
                allsuspects[i].parentNode.removeChild(allsuspects[i])
            }
            console.log(i)
        }
    }
    function loadCSS(url) {
        var css = $("link[href='" + url + "']");
        if (css.length > 0) {
            return;
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        head.appendChild(link);
    }
}