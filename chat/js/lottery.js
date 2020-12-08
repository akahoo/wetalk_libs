function choujiangInit() {
    // 全局变量
    let lotD = {
        // 抽奖
        lotteryI: 0,
        arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        lotteryArr: [0, 1, 2, 3, 6, 10, 9, 8, 7, 4],
        scrollLi: null,
        lotteryRes: null,
        lotteryList: [],
        lotteryCircle: 0,
        lotteryNum: null,
        lotCur: 1,
        lotSize: 8,
        lotPages: null,
        cdn: localStorage.getItem("cdn"),
        token: localStorage.getItem("token"),
        nickname: localStorage.getItem("nickname")
    }
    // 全局变量结束

    // 引入html
    $(".weTalkLottery").remove();
    $(`
        <div class="weTalkLottery weTalkRightItem">
            <div class="weTalkLotteryCover weTalkRightItem"></div>
            <div class="weTalkLTip"></div>
            <div class="weTalkAward"></div>
            <div class="weTalkLotteryTip">
                <div class="weTalkLotteryTipItem">
                    <div class="weTalkLotteryTipTitle">抽奖总则：</div>
                    1、每个用户每天可获得3次免费抽奖机会，每日 0点更新
                </div>
                <div class="weTalkLotteryTipItem">
                    <div class="weTalkLotteryTipBlock"></div>
                    2、如发现有恶意刷奖行为，WeTalk有权不发放或撤回发放的奖品
                </div>
                <div class="weTalkLotteryTipItem">
                    <div class="weTalkLotteryTipBlock"></div>
                    3、此活动解释权归WeTalk所有
                </div>
            </div>
            <div class="weTalkLotteryHistory">
                我的奖品
            </div>
            <div class="weTalkLotteryResView weTalkRightItem"></div>
            <div class="weTalkLotteryRecords weTalkRightItem">
                <img class="weTalkLotteryRecordsXX" src="./images/closePersonalInfo.png"/>
                <div class="weTalkLotteryRecordsTitle">
                    <span>我的奖品</span>
                    <span>最近30天中奖记录</span>
                </div>
                <div class="weTalkLotteryRecordsContent"></div>
                <div class="weTalkLotteryRecordsPages">
                    <img class="weTalkLotteryRecordsLastP" src="./images/lottery/pbtn1.png">
                    <img class="weTalkLotteryRecordsNextP" src="./images/lottery/pbtn2.png">
                </div>
            </div>
        </div>
    `).appendTo($(".weTalkRight"))

    // 初始化+绑定事件
    $(".weTalkRightItem").hide();
    $(".weTalkLottery").show();
    $(".weTalkAward").html("");
    awardList(lotD.token).then(res => {
        // lotD.lotteryList = randArr(res.data);
        lotD.lotteryList = res.data;
        lotD.lotteryList.splice(5, 0, "1");
        for (let i = 0; i < lotD.lotteryList.length; i++) {
            let weTalkAwardItem = $(`
            <div class="weTalkAwardItem">

            </div>
            `)
            if (i != 5) {
                switch (lotD.lotteryList[i].type) {
                    case 1:
                        // 积分
                        weTalkAwardItem.html(`
                            <img class="weTalkAwardPoint">
                            <div class="weTalkAwardInfo">${lotD.lotteryList[i].value}积分</div>
                        `)
                        if (lotD.lotteryList[i].value <= 10) {
                            weTalkAwardItem.children(".weTalkAwardPoint").attr("src", "./images/lottery/award_point_2.png");
                        } else {
                            weTalkAwardItem.children(".weTalkAwardPoint").attr("src", "./images/lottery/award_point1.png");
                        }
                        break;
                    case 2:
                        // 会员
                        weTalkAwardItem.html(`
                        <img class="weTalkAwardPoint" src="./images/lottery/award_vip.png" >
                        <div class="weTalkAwardInfo">${lotD.lotteryList[i].value}天VIP</div>
                    `)
                        break;
                    case 3:
                        // 碎片
                        weTalkAwardItem.html(`
                        <img class="weTalkAwardPoint" src="./images/lottery/award_frag.png" >
                        <div class="weTalkAwardInfo">碎片*1</div>
                    `)
                        break;
                    case 4:
                        // 谢谢惠顾
                        weTalkAwardItem.html(`
                        <img class="weTalkAwardPoint" src="./images/lottery/award_none.png" >
                        <div class="weTalkAwardInfo">谢谢惠顾</div>
                    `)
                        break;
                }
                weTalkAwardItem.appendTo(".weTalkAward");
            } else {
                $(`
                    <div class="weTalkLotteryBtn"></div>
        `).appendTo(".weTalkAward");
            }
        }
        // 获取可抽奖次数
        getLotteryNum(lotD.token).then(res => {
            if (res.code == 1) {
                if (res.data > 0) {
                    $(".weTalkLotteryBtn").html("");
                    $(`
                        <div class="weTalklotteryNum">(${res.data})</div>
                    `).appendTo($(".weTalkLotteryBtn"))
                } else {
                    $(".weTalkLotteryBtn").html("");
                }
            }
        })
        $(".weTalkLottery").show();
        $(".weTalkLotteryBtn").off("click").on("click", getLotteryRes);
    })

    // 幸运抽奖再来一次/确定
    $(".weTalkLottery").on("click", ".weTalkLotteryResViewBtn", function () {
        if ($(".weTalkLotteryResViewBtn").html() == "确定") {
            $(".weTalkLotteryResView").hide();
            $(".weTalkLotteryCover").hide();
            $(".weTalkLotteryBtn").css({ "pointer-events": "auto" })
        } else {
            $(".weTalkLotteryResView").hide();
            $(".weTalkLotteryCover").hide();
            getLotteryRes();
        }
    })

    // 幸运抽奖关闭weTalkLotteryResViewBtn
    $(".weTalkLottery").on("click", ".weTalkCloseRes", function () {
        $(".weTalkLotteryResView").hide();
        $(".weTalkLotteryCover").hide();
        $(".weTalkLotteryBtn").css({ "pointer-events": "auto" })
    })

    // 幸运抽奖分页按钮
    $(".weTalkLottery").on("mouseenter", ".weTalkLotteryRecordsLastP", function () {
        $(".weTalkLotteryRecordsLastP").attr("src", "./images/lottery/pbtn3.png")
        $(".weTalkLotteryRecordsNextP").attr("src", "./images/lottery/pbtn2.png")
    })

    $(".weTalkLottery").on("mouseleave", ".weTalkLotteryRecordsLastP", function () {
        $(".weTalkLotteryRecordsLastP").attr("src", "./images/lottery/pbtn1.png")
        // $(".weTalkLotteryRecordsNextP").attr("src","./images/lottery/pbtn2.png")
    })

    $(".weTalkLottery").on("click", ".weTalkLotteryRecordsLastP", function () {
        if (lotD.lotCur > 1) {
            lotD.lotCur -= 1;
            awardLogRequest();
        } else {
            showlTip("已经是第一页了")
        }
    })

    $(".weTalkLottery").on("mouseenter", ".weTalkLotteryRecordsNextP", function () {
        $(".weTalkLotteryRecordsLastP").attr("src", "./images/lottery/pbtn1.png")
        $(".weTalkLotteryRecordsNextP").attr("src", "./images/lottery/pbtn4.png")
    })

    $(".weTalkLottery").on("mouseleave", ".weTalkLotteryRecordsNextP", function () {
        // $(".weTalkLotteryRecordsLastP").attr("src", "./images/lottery/pbtn1.png")
        $(".weTalkLotteryRecordsNextP").attr("src", "./images/lottery/pbtn2.png")
    })

    $(".weTalkLottery").on("click", ".weTalkLotteryRecordsNextP", function () {
        if (lotD.lotCur < lotD.lotPages) {
            lotD.lotCur += 1;
            awardLogRequest();
        } else {
            showlTip("已经是最后一页了")
        }
    })

    // 获取我的奖品记录
    $(".weTalkLottery").on("click", ".weTalkLotteryHistory", function () {
        lotD.lotCur = 1;
        awardLogRequest();
        $(".weTalkLotteryRecords").show();
        $(".weTalkLotteryCover").show();
    })

    // 关闭我的奖品记录
    $(".weTalkLottery").on("click", ".weTalkLotteryRecordsXX", function () {
        $(".weTalkLotteryRecords").hide();
        $(".weTalkLotteryCover").hide();
    })
    // 绑定事件结束

    // 全局方法
    function getLotteryRes() {
        draw(lotD.token).then(res => {
            if (res.code == 1) {
                $(".weTalkLotteryCover").show();
                $(".weTalkLotteryBtn").css({ "pointer-events": "none" })
                for (let i = 0; i < lotD.lotteryList.length; i++) {
                    if (lotD.lotteryList[i].id && lotD.lotteryList[i].id == res.data.id) {
                        lotD.lotteryRes = i;
                        console.log("lotD.lotteryRes", lotD.lotteryRes)
                        break;
                    }
                }
                clearInterval(lotD.scrollLi)
                lotD.scrollLi = setInterval(around, 200);
            } else if (res.code == 44444) {
                if (res.message == "今日碎片已发完") {
                    getLotteryRes();
                    return;
                }
                showlTip(res.message)
            }
        })
    }

    function around() {
        lotD.lotteryI += 1;
        // 重制i的值
        if (lotD.lotteryI === lotD.lotteryArr.length) {
            lotD.lotteryI = 0;
            lotD.lotteryCircle += 1;
        }
        // 转圈圈
        for (let j = 0; j < lotD.lotteryArr.length; j++) {
            $(".weTalkAward").children().eq(lotD.lotteryArr[j]).css("background", `url("./images/lottery/award_bg.png")`);
            $(".weTalkAward").children().eq(lotD.lotteryArr[j]).children(".weTalkAwardInfo").css("color", "#DB5947");
        }

        $(".weTalkAward").children().eq(lotD.lotteryArr[lotD.lotteryI]).css("background", `url("./images/lottery/award_bg1.png")`)
        $(".weTalkAward").children().eq(lotD.lotteryArr[lotD.lotteryI]).children(".weTalkAwardInfo").css("color", "white");

        if (lotD.lotteryCircle >= 2) {
            if (lotD.lotteryArr[lotD.lotteryI] == lotD.lotteryRes) {
                clearInterval(lotD.scrollLi);
                lotD.lotteryCircle = 0;
                // console.log("匹配", lotD.lotteryI, lotD.lotteryRes, lotD.lotteryArr[lotD.lotteryI])
                getLotteryNum(lotD.token).then(res => {
                    if (res.code == 1) {
                        lotD.lotteryNum = res.data;
                        switch (lotD.lotteryList[lotD.lotteryRes].type) {
                            case 1:
                                $(".weTalkLotteryResView").html(`
                            <img class="weTalkCloseRes" src="./images/closePersonalInfo.png"/>
                            <div class="weTalkLotteryResViewTitle">中奖啦！</div>
                            <div class="weTalkLotteryResViewTip">
                                恭喜你获得了<span class="weTalkLotteryAwardFont">${lotD.lotteryList[lotD.lotteryRes].value}积分</span>，积分已经增加到你的个人账户
                            </div>
                            <div class="weTalkLotteryResViewBtn"></div>
                        `);
                                // 渲染个人信息积分
                                info(lotD.token).then(res => {
                                    if (res.code == 1) {
                                        localStorage.setItem("point", res.data.point)
                                    }
                                })
                                break;
                            case 2:
                                $(".weTalkLotteryResView").html(`
                                <img class="weTalkCloseRes" src="./images/closePersonalInfo.png"/>
                            <div class="weTalkLotteryResViewTitle">中奖啦！</div>
                            <div class="weTalkLotteryResViewTip">
                                恭喜你获得了<span class="weTalkLotteryAwardFont">${lotD.lotteryList[lotD.lotteryRes].value}天VIP</span>的使用资格
                            </div>
                            <div class="weTalkLotteryResViewBtn"></div>
                        `);
                                // 渲染VIP
                                lotD.vip = true;
                                localStorage.setItem("vip", true);
                                $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoVip").show();
                                $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoLow").show();
                                $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkKthy").hide();

                                $(".weTalkNickVip").html(`${lotD.nickname}`).show();
                                $(".weTalkNick").hide();
                                if ($(".weTalkChangeMethod").length > 0) {
                                    $(".weTalkChangeMethod").remove();
                                }
                                $(`
                        <label class="weTalkChangeMethod weTalkPointer" for="weTalkChangeMethodInput">更改头像</label>
                        <input id="weTalkChangeMethodInput" type="file">
                      `).insertAfter($(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar"));
                                break;
                            case 3:
                                $(".weTalkLotteryResView").html(`
                                <img class="weTalkCloseRes" src="./images/closePersonalInfo.png"/>
                            <div class="weTalkLotteryResViewTitle">中奖啦！</div>
                            <div class="weTalkLotteryResViewTip">
                                恭喜你获得了<span class="weTalkLotteryAwardFont">奖品碎片*1</span>
                            ，凑齐完整碎片可获得实物奖励哦！
                            </div>
                            <div class="weTalkLotteryResViewBtn"></div>
                        `);
                                break;
                            case 4:
                                $(".weTalkLotteryResView").html(`
                                <img class="weTalkCloseRes" src="./images/closePersonalInfo.png"/>
                            <div class="weTalkLotteryResViewTitle">未中奖</div>
                            <div class="weTalkLotteryResViewTip">
                            很遗憾，这次没有中奖，继续加油哦！
                            </div>
                            <div class="weTalkLotteryResViewBtn"></div>
                        `);
                                break;
                        }
                        if (lotD.lotteryNum > 0) {
                            $(".weTalkLotteryResViewBtn").html(`再来一次（${lotD.lotteryNum}）`)
                            $(".weTalklotteryNum").html(`(${lotD.lotteryNum})`)
                        } else {
                            $(".weTalkLotteryResViewBtn").html(`确定`)
                            $(".weTalkLotteryBtn").html("");
                        }
                        $(".weTalkLotteryResView").css("display", "block");
                        $(".weTalkLotteryCover").show();
                    }
                })

            }
        }

    }

    // 幸运抽奖提示
    function showlTip(obj) {
        $(".weTalkLTip").html(obj).show();
        setTimeout(function () {
            $(".weTalkLTip").hide();
        }, 3000)
    }

    // 获取抽奖记录
    function awardLogRequest() {
        // 在获取数据时不允许用户再次点击
        $(".weTalkLotteryRecordsLastP").attr("disabled", true)
        $(".weTalkLotteryRecordsNextP").attr("disabled", true)
        awardLog(lotD.lotCur, lotD.lotSize, lotD.token).then(res => {
            if (res.code == 1) {
                $(".weTalkLotteryRecordsContent").html("");
                // 请求完毕后恢复按钮
                if (lotD.lotCur >= lotD.lotpages) {
                    $(".weTalkLotteryRecordsNextP").attr("disabled", true)
                } else {
                    $(".weTalkLotteryRecordsNextP").attr("disabled", false)
                }
                if (lotD.lotCur == 1) {
                    $(".weTalkLotteryRecordsLastP").attr("disabled", true)
                } else {
                    $(".weTalkLotteryRecordsLastP").attr("disabled", false)
                }
                lotD.lotPages = res.data.pages;
                let list = res.data.records;
                list.forEach(item => {
                    switch (item.lottery_type) {
                        case 1:
                            // 积分
                            $(`
                        <div>
                            <div>${item.create_time.substring(0, 10)}获得</div>
                            <div>${item.lottery_value}积分</div>
                        </div>
                        `).prependTo($(".weTalkLotteryRecordsContent"))
                            break;
                        case 2:
                            // 会员
                            $(`
                        <div>
                            <div>${item.create_time.substring(0, 10)}获得</div>
                            <div>${item.lottery_value}天VIP</div>
                        </div>
                        `).prependTo($(".weTalkLotteryRecordsContent"))
                            break;
                        case 3:
                            // 碎片
                            $(`
                        <div>
                            <div>${item.create_time.substring(0, 10)}获得</div>
                            <div>奖品碎片*1</div>
                        </div>
                        `).prependTo($(".weTalkLotteryRecordsContent"))
                            break;
                    }
                })
            }
        })
    }

    // 打乱数组顺序
    function randArr(arr) {
        var len = arr.length
        //首先从最大的数开始遍历，之后递减
        for (var i = arr.length - 1; i >= 0; i--) {
            //随机索引值randomIndex是从0-arr.length中随机抽取的
            var randomIndex = Math.floor(Math.random() * (i + 1));
            //下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置
            var itemIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemIndex;
        }
        //每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）
        return arr;
    }

    // 全局方法结束
}
