$(function () {
    // 全局变量
    let data = {
        // 聊天室聊天记录
        chatPublicRecords: [],
        chatPublicPeople: [],
        chatPublicNum: 0,
        chatPublicLastRecord: null,

        // 站内信
        systemNews: [],
        systemCurrent: 1,
        systemSize: 1000,

        // 移除元素
        RemoveFood: null,
        removeIndex: null,
        removeFriendId: null,

        removeWebsiteId: null,

        // 聊天室用户列表
        weTalkUsersItemList: [],
        weTalkUsersNum: null,

        // 私聊用户列表
        weTalkPerList: [],
        // 好友列表
        weTalkFriendList: [],

        // 读取聊天记录类别
        isPublic: 1,
        // weTalk是否第一次加载
        // isFirstStart: true,
        // 当前域名
        curDomain: null,
        // 当前网页标题
        curTitle: null,

        // 已收藏的聊天室列表
        favouriteRooms: [],


        // 登录后获取的信息
        roomId: null,
        websiteTitle: null,
        webDesiteTitle: null,
        webDesiteId: null,
        websiteId: null,
        id: null,
        token: null,
        isNicknameSet: null,
        sex: null,
        vip: null,
        nickname: null,
        emali: null,
        vipExpireDate: null,
        unreadInboxMsg: null,
        ad: null,
        avatar: null,
        cdn: null,
        server: null,
        point: null,
        email: null,
        signature: "",

        // 正在登录
        isLogining: false,

        // 表情链接
        emojSrc: [],

        // 长连接port
        portName: null,
        port: null,

        // 是否可发送
        sendState: true,

        // 选中的转发人数组
        transmitChoosedArr: [],
        // 转发的话
        transmitSetence: "",

        // 点击时获取某用户id(正打开的聊天窗口Id)
        friendId: null,
        friendIndex: null,

        websiteId: null,
        websiteIndex: null,


        // 转发
        messageType: null,
        flag: 0,
        messageZfImg: null,
        emojzfArr: [],
        transferImg: null,


        // 私聊列表中是否有新消息的id
        isHasThisFriend: false,

        // 未读消息总条数(socketIo)
        // unReadTipNum: 0,

        // 图片名
        fileName: null,
        upFile: null,
        imgBase64: null,
        currentfile: null,
        maxSize: 1 * 1024 * 1024,
        picWeight: 0.92,
        filePath: null,

        // 绑定邮箱
        weTalkMailVal: null,
        weTalkMailPswd: null,
        weTalkMailCpwd: null,
        weTalkUpYzm: null,
        weTalkMailYzm: null,

        // 按帐号登录
        weTalkAccountVal: null,
        weTalkLoginPswd: null,

        // 注册
        weTalkReg: null,
        weTalkAccount: null,
        weTalkAccountPswd: null,
        weTalkRegSex: null,

        // 忘记密码
        weTalkFGmail: null,

        // 游戏事件
        gameType: null,

        // 游戏结果
        pybRes: null,
        touziRes: null,
        stjdbRes: null,
        slYxMsg: null,

        // 选择会员的期限类型
        memberType: null,
        memberId: null,
        membercPrice: null,

        // 修改密码
        weTalkNewPswd: null,
        weTalkQrNewPswd: null,
        weTalkOriPswd: null,

        // 签到
        weTalkSignArr: ["一", "二", "三", "四", "五", "六", "七"],
        weTalkSignDays: null,
        weTalkSignPoints: [],

        // 头像
        upAvatar: null,
        upAvatarFile: null,
        avatarPath: null,

        // 登录帐号和密码
        weTalkUsername: null,
        weTalkUserPswd: null,
        isLoginByAccount: false,
        isOpenLoginViewFirst: true,

        // 是否正在加载内容
        isLoadRecords: false,

        // socketIo
        socketIo: null,

        // 图片最大宽高
        squareW: null,
        squareH: null,

        // 联系我们
        weTalkMobile: null,
        weTalkFeedBackText: null,
        feedBackType: null,

        // 向下滚动
        canScroll: false,

        // 需要告知后端收到消息了
        haveSend: true,
        sendTimer: null,

        // 个人签名
        textArea: null,

        // at Id
        aid: 0,
        aidArr: [],

        // 被at次数
        atArr: [],
        isAtDone: false,

        // 他人信息
        otherInfo: null,
        otherUserId: null,

        //修改备注
        noteId: "",

        // 被动添加该用户时的聊天内容
        passiveChatContent: null,

        //搜索答案分页
        curren: 1,
        pages: "",
        page: "",
        param: "",

        //功能类型设置
        bodyBgType: "",
        shareRoomHint: "",
        privateChatHint: "",
        audio: "",

        //每日推荐
        dailyRecommendWebid: "",

        //漂流瓶
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
        provinceList: []

    }

    // 插入全局提示
    $(`
        <div class="weTalkGlobalTip"></div>
    `).appendTo("body")

    // 全局方法

    // 全局提示
    function showGlobalTip(obj) {
        $(".weTalkGlobalTip").html(obj).show();
        setTimeout(function () {
            $(".weTalkGlobalTip").hide();
        }, 3000)
    }

    // 举报
    function reportMessageRequest() {
        reportMessage(data.token).then(res => {

        })
    };

    // 绑定邮箱
    function bindEmailRequest() {
        if (!(data.weTalkMailVal)) {
            $(".weTalkwxTip1").html("邮箱不得为空").show();
            setTimeout(function () {
                $(".weTalkwxTip1").hide();
            }, 3000)
            return;
        }
        if (!(data.weTalkMailYzm)) {
            $(".weTalkwxTip4").html("验证码不得为空").show();
            setTimeout(function () {
                $(".weTalkwxTip4").hide();
            }, 3000)
            return;
        }

        bindEmail(data.weTalkMailVal, data.weTalkMailYzm, data.token).then(res => {
            if (res.code == 1) {
                $(".weTalkBindMail").hide();
                $(".weTalkPersonalInfoCover").hide();
                data.email = data.weTalkMailVal;
                $(".weTalkPersonalInfoContentRight").children("#weTalkUserMail").html(`
                    <div class="weTalkPersonalInfoHigh">邮箱：</div>
                    <div class="weTalkPersonalInfoLow">${data.email}</div>
                `)
                showTip("绑定成功")
            } else if (res.code == 10006) {
                showTip("绑定失败，用户邮箱已存在")
                $(".weTalkBindMail").show();
            } else {
                showTip("未知错误");
                $(".weTalkBindMail").show();
            }
        })
    }
    // 判断长度
    function strlen(str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            //单字节加1
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                len++;
            }
            else {
                len += 2;
            }
        }
        return len;
    }
    //获取body背景色
    // data.bodyBgType =
    if (window.localStorage.getItem('themeType') == null) {
        window.localStorage.setItem('themeType', 7)
        data.bodyBgType = 7
    } else {
        data.bodyBgType = window.localStorage.getItem('themeType')
    }
    bodyBg(data.bodyBgType)

    //音乐
    data.audio = new Audio("mp3/message.mp3");
    if (window.localStorage.getItem('shareRoomHint') == null) {
        window.localStorage.setItem('shareRoomHint', 0)
        // $("#shareRoomHint").attr('checked', true)
    }
    if (window.localStorage.getItem('privateChatHint') == null) {
        window.localStorage.setItem('privateChatHint', 1)
        $("#privateChatHint").attr('checked', true)

    }

    //1为聊天室提示音开启
    data.shareRoomHint = window.localStorage.getItem('shareRoomHint')
    //1为私聊提示音开启
    data.privateChatHint = window.localStorage.getItem('privateChatHint')

    // 判断滚动条是否在底部
    function scrollBottom(obj) {
        var divHeight = obj.height();
        var nScrollHeight = obj[0].scrollHeight;
        var nScrollTop = obj[0].scrollTop;
        if (nScrollTop + divHeight + 65 >= nScrollHeight) {
            console.log("滚动条处于最底部")
            return true;
        } else {
            console.log("滚动条不在最底部")
            return false;
        }
    }

    // 初始化
    function initialInfo(res) {
        // 初始化
        let weTalkChatRoom = $(
            `
                    <div class="weTalkChatRoom" id="weTalkChatRoom">
                    <div class="weTalkCommonTip"></div>
                    <!-- 主体 -->
                    <div class="weTalkChatRoomContent">
                    <div class="weTalkMain">
                      <div class="weTalkHead">
                        <div class="weTalkBroadcast">
                            <img class="weTalkBroadImg" src="./images/broadCast.png">
                            <div class="weTalkBroadContent">【广播】：恭喜 <span>小小白</span> 成功兑换一个奖品！！！</div>
                        </div>
                        <div class="weTalkLogoArr">
                            <img class="weTalkLogo" src="./images/logo.png"/>
                        </div>
                        <div class="weTalkAvatarCon">
                          <img class="weTalkSignIn weTalkPointer" src="./images/signIcon.png">
                          <div class="weTalkOpenUserSet">
                            <div class="weTalkAvatar">
                                <img src="./images/man.png" class="weTalkMan" id="weTalkAvatarSex"></img>
                                <img class="weTalkAvatarImg">
                                <div class="weTalkDefaultAvatar"></div>
                                <div class="weTalkAvatarTip"></div>
                            </div>
                            <div class="weTalkNick weTalkTextDis"></div>
                            <div class="weTalkNickVip weTalkTextDis"></div>
                            <img src="./images/xiala1.png" class="weTalkXiala"></img>
                          </div>
                          <div class="weTalkUserSet">
                              <div id="weTalkOpenPersonalInfo" class="weTalkSetFont">个人信息</div>
                              <div class="weTalkSetFontArr">
                              <div id="weTalkSystemNews">站内信</div>
                              <div class="weTalkSystemNewsNum"></div>
                            </div>
                            <div id="weTalkInviteP" class="weTalkSetFont">邀请好友</div>
                             <div class="helpOption">
                             <p class="helpOptionTab">
                             <span>帮助</span>
                             <img src="images/xiala.png">
                             <div id="helpOptionDetails">
                                <p class="weTalkPointer" id="weTalkFeedBack">联系我们</p>
                                <p class="weTalkPointer" id="setTheme">功能设置</p>
                                <p class="weTalkPointer" id="weTalkHelp">关于</p>
                            </div>
                             </p>
                             </div>
                              <div id="weTalkExit" class="weTalkSetFont">退出登录</div>
                          </div>
                        </div>
                      </div>
                      <div class="weTalkContent">
                      <div class="weTalkLeft">
                      <div id="leftContainer">
                          <section class="tab" id="weTalkSession" style="display: block;">
                              <div class="weTalkChatList">
                                  <div class="weTalkPublicChannnell">
                                    <div class="weTalkPublicChannnellOne">
                                        <div class="weTalkPublicChannnellTitle"></div>
                                        <div class="weTalkPublicChannnellTime"></div>
                                    </div>
                                    <div class="weTalkPublicChannnellLastRecords">
                                        <div class="weTalkAtWo">[有人@我]</div>
                                        <div class="weTalkPublicChannnellUser"></div>
                                        <div class="weTalkPublicChannnellRecord weTalkTextDis"></div>
                                        <div class="weTalkPublicChannnellNum"></div>
                                    </div>
                                  </div>
                                  <div class="weTalkChatItemList"></div>
                              </div>
                          </section>
                          <section class="tab" id="friend"></section>
                          <section class="tab">
                              <div class="GroupChat">
                                  <div class="GroupChatTiltle">
                                      <div>
                                          <p id="collect" >我的收藏</p>
                                          <p id="recommend" >每日推荐</p>
                                      </div>
                                      <p id="discover">
                                        <img src="./images/scsousuo.png" alt="">
                                      </p>
                                  </div>
                                  <ul id="collectlist">
                                  </ul>
                                  <div id="recommendDetails">
                                  </div>
                              </div>
                          </section>
                          <section class="tab">
                              <div class="activity">
                                  <ul>
                                      <li class="activityOne">
                                          <img src="images/choujiang.png" class="choujiang">
                                          <p class="oneText">天天抽奖</p>
                                      </li>
                                      <li class="activityTwo">
                                          <img src="images/piaoliuping.png" class="piaoliuping">
                                          <p class="twoText">漂流瓶</p>
                                      </li>
                                  </ul>
                                  <ul>
                                      <li class="activityThree"><img src="images/jingcai.png" class="jingcai">
                                          <p class="threeText">积分竞猜</p>
                                      </li>
                                      <li class="activityFour"><img src="images/chip/initFrag1.png" class="duihuan">
                                          <p class="fourText">碎片兑奖</p>
                                      </li>
                                  </ul>
                              </div>
                          </section>
                      </div>
                      <nav id="nav">
                          <ul>
                              <li class="star" id="act">
                                  <div>
                                      <img src="images/1qunliao.png" class="one" style="display: none;">
                                      <img src="images/2qunliao.png" class="two">
                                      <span class="sessionPoint"></span>
                                      会话
                                  </div>
                              </li>
                              <li class="star">
                                  <div  id="friendList">
                                      <img src="./images/1haoyou.png" class="one">
                                      <img src="./images/2haoyou.png" class="two">好友
                                  </div>
                              </li>
                              <li class="star">
                                  <div  id="groupChat">
                                      <img src="./images/1qunliao.png" class="one">
                                      <img src="./images/2qunliao.png" class="two">
                                      群聊
                                  </div>
                              </li>
                              <li class="star">
                                  <img src="./images/1huodong.png" class="one">
                                  <img src="./images/2huodong.png" class="two">
                                  发现
                              </li>
                          </ul>
                      </nav>
                  </div>
                        <div class="weTalkRight">
                            <!-- 幸运抽奖 -->
                                <div class="weTalkLottery weTalkRightItem">
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
                                    <div class="weTalkLotteryResView"></div>
                                </div>
                          <!-- 好友列表修改昵称 -->
                            <div class="amendName">
                                <div class="weTalkAmendName">修改成功</div>
                                <p class="amendTitle">修改备注</p>
                                <input id="amendInput" />
                                <p>
                                    <button type="button" class="amendNameCancel" id="amendNameCancel">取消</button>
                                    <button type="button" class="amendNameSub" id="amendNameSub">确定</button>
                                </p>
                            </div>
                            <div class="weTalkInitial weTalkRightItem">
                            <div class="weTalkInitialView">
                              <img class="weTalkInitialImg" src="./images/WeTalk.png" alt="" />
                              <div class="weTalkInitialTip">寻找志同道合的Ta，我们一起聊天吧</div>
                            </div>
                          </div>
                          <div class="weTalkRightMain weTalkRightItem">
                            <div class="weTalkUsersOpe"></div>
                            <div class="weTalkChatMain">
                              <div class="weTalkLoadRecord">
                                <img class="weTalkLoadAni" src="./images/loading.png" />
                                <div class="weTalkLoadingTip">内容加载中，请稍等...</div>
                              </div>
                            </div>
                            <div class="weTalkChatTool">
                              <div class="weTalkChatFacePackage"></div>
                              <label for="weTalkSendPic" class="weTalkSendPicFor">
                                <img src="./images/pic.png" class="weTalkChatToolPic" alt="" />
                              </label>
                              <input type="file" id="weTalkSendPic" class="weTalkSendPic" />
                              <img src="./images/face.png" class="weTalkChatFace" alt="" />
                              <img src="./images/touzi2.png" class="weTalkChatFace1" alt="" />
                              <img src="./images/paoyingbi.png" class="weTalkChatFace2" alt="" />
                              <img src="./images/jiandaoshou-.png" class="weTalkChatFace3" alt="" />
                            </div>
                            <div
                              contenteditable="true"
                              spellcheck="false"
                              id="weTalkChatFrame"
                              class="weTalkChatFrame"
                            ></div>
                          </div>
                          <!-- 聊天框头部 --!>
                          <div class="weTalkChatMainHead weTalkRightItem">
                             <div class="weTalkChatMainHeadInner">
                                <div class="weTalkChatMainHeadName"></div>
                                <div class="weTalkChatMainHeadEvent"></div>
                             </div>
                          </div>
                          <!-- 聊天框头部私聊 --!>
                          <div class="weTalkChatMainHeadP weTalkRightItem">
                            <div class="weTalkChatMainHeadInnerP">
                                <div class="weTalkChatMainHeadNameP"></div>
                                <div class="weTalkChatMainHeadEventP"></div>
                            </div>
                          </div>

                          <!-- 搜索群聊 -->
                          <div class="weTalkUsers weTalkRightItem">
                            <div class="weTalkOnlineCount"></div>
                            <div class="weTalkUsersItemList"></div>
                          </div>
                          <div class="searchChatroom weTalkRightItem">
                            <p class="searchChatroomTitle">查找聊天室</p>
                            <div class="searchChatroomSearch">
                              <p>关键词：</p>
                              <input
                                type="text"
                                placeholder="请输入网站名称或者网址"
                                id="searchChatroomInput"
                              />
                              <p id="searchChatroomFind" ><img src="./images/scsousuo.png" /></p>
                            </div>
                            <div id="recommendWeb"></div>
                            <div id="hotRecommend">
                              <p class="searchChatroomText">热门推荐</p>
                              <div class="recommend">
                                <div class="lifeRecommend">
                                  <div class="lifeRecommendIcon">
                                    <img src="./images/shenghuo.png" />
                                    <p>生活娱乐</p>
                                  </div>
                                  <ul id="lifeRecommendDetails"></ul>
                                </div>
                                <div class="playRecommend">
                                  <div class="playRecommendIcon">
                                    <img src="images/youxi.png" />
                                    <p>游戏小说</p>
                                  </div>
                                  <ul id="playRecommendDetails"></ul>
                                </div>
                              </div>
                              <div class="recommend">
                                <div class="musicRecommend">
                                  <div class="musicRecommendIcon">
                                    <img src="images/shipin.png" />
                                    <p>视频音乐</p>
                                  </div>
                                  <ul id="musicRecommendDetails"></ul>
                                </div>
                                <div class="newsRecommend">
                                  <div class="newsRecommendIcon">
                                    <img src="images/xinwen.png" />
                                    <p>新闻资讯</p>
                                  </div>
                                  <ul id="newsRecommendDetails"></ul>
                                </div>
                              </div>
                            </div>
                            <div class="searchChatroomResult">
                              <div class="searchChatroomResultTitle">
                                <p class="searchChatroomResultText">搜索结果</p>
                                <p>
                                  <img
                                    src="images/left01.png"
                                    style="margin-right: 10px"
                                    id="turnOverLeft"
                                  />
                                  <img src="images/right01.png" id="turnOverRinght" />
                                </p>
                              </div>
                              <ul id="searchChatroomResultDetils"></ul>
                              <div id="searchChatroomResultNone">
                                <p class="searchChatroomResultImg">
                                  <img src="images/ssempty.png" />
                                </p>
                                <p style="margin-top: 20px">没有搜索到内容哦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   <!-- 功能设置 -->
                   <div class="setTheme">
                        <p>功能设置</p>
                        <img src="./images/closePersonalInfo.png" id="closeSetTheme">
                        <div>
                            <p class="setThemeTitle">背景风格</p>
                            <div class="allRadio">
                                <div>
                                    <label>
                                        <p class="oneRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="0" />
                                    </label>
                                    <label>
                                        <p class="twoRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="1"  />
                                    </label>
                                    <label>
                                        <p class="threeRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="2"  />
                                    </label>
                                    <label>
                                        <p class="fourRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="3"  />
                                    </label>
                                    <label>
                                        <p class="fiveRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="4"  />
                                    </label>
                                    <label>
                                        <p class="sixRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="5"  />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <p class="sevenRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="6"  />
                                    </label>
                                    <label>
                                        <p class="eightRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="7"  />
                                    </label>
                                    <label>
                                        <p class="nineRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="8"  />
                                    </label>
                                    <label>
                                        <p class="tenRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="9"  />
                                    </label>
                                    <label>
                                        <p class="elevenRadio" id="radioPic"></p>
                                        <input name="theme" type="radio" value="10" />
                                    </label>
                                </div>

                            </div>
                            <div>
                                <p>消息提示</p>
                                <p class="setPromptTone"><input type="checkbox" id="privateChatHint" /> <span>收到私聊消息时播放提示音</span></p>
                                <p class="setPromptTone"><input type="checkbox" id="shareRoomHint"/> <span>收到聊天室消息时播放提示音</span></p>
                            </div>
                        </div>
                    </div>
                    <!-- 个人信息 -->
                    <div class="weTalkPersonalInfo">
                    <div class="weTalkPersonalInfoCover"></div>
                    <div class="weTalkAvatarCjView">
                        <div class="weTalkTitle weTalkBindBorder">头像裁切</div>
                        <div class="weTalkavatarPreview">
                            <img class="weTalkavatarPreviewImg" />
                            <div class="weTalkavatarBtns">
                                <div class="weTalkBtn1 weTalkavatarBtn1">取消</div>
                                <div class="weTalkBtn2 weTalkavatarBtn2">确认</div>
                            </div>
                        </div>
                        <div class="weTalkCjRes">
                            <img/>
                        </div>
                        <div class="weTalkavatarPreviewCj"></div>
                    </div>
                    <div class="weTalkPersonalInfoTitle">个人信息</div>
                    <img
                      src="./images/closePersonalInfo.png"
                      class="weTalkPersonalInfoClose weTalkPointer"
                    />
                  </div>
                    <!-- 绑定邮箱 -->
                    <div class="weTalkBindMail">
                      <div class="weTalkdissonantPswd">密码不一致</div>
                      <div class="weTalkBindSuc">绑定成功</div>
                      <div class="weTalkwxTip1"></div>
                      <div class="weTalkwxTip2"></div>
                      <div class="weTalkwxTip3"></div>
                      <div class="weTalkwxTip4"></div>
          
                      <div class="weTalkUpYzm">
                        <div class="weTalkTitle weTalkBindBorder">请输入图片验证码</div>
                        <img crossOrigin class="weTalkUpYzmImg">
                        <input class="weTalkUpYzmInput" type="text">
                        <div class="weTalkUpYzmBtns">
                        <div class="weTalkBtn1 weTalkUpYzmBtn1">取消</div>
                        <div class="weTalkBtn2 weTalkUpYzmBtn2">确认</div>
                        <div class="weTalkYzTip"></div>
                      </div>
                      </div>
                    <div class="weTalkTitle weTalkBindBorder">绑定邮箱</div>
                    <div class="weTalkBindMailContent">
                      <div class="weTalkBindMailItem">
                        <div class="weTalkMailTitle">电子邮箱</div>
                        <input id="weTalkMailVal" class="weTalkMailInput" type="text" placeholder="请输入电子邮箱"/>
                      </div>
                      <div class="weTalkBindMailItem">
                        <div class="weTalkMailTitle">验&ensp;证&ensp;码</div>
                        <input id="weTalkMailYzm" class="weTalkMailInput weTalkMailInputyzm" type="text" placeholder="6位数验证码"/>
                        <div class="weTalkBtn2 weTalkSendyzm">发送</div>
                      </div>
                      <div class="weTalkBindMailTip">注：验证码将会发送到您的邮箱，请及时查收</div>
                    </div>
                    <div class="weTalkBindMailBtns">
                      <div class="weTalkBtn1 weTalkBindMailBtn1">取消</div>
                      <div class="weTalkBtn2 weTalkBindMailBtn2">确认</div>
                    </div>
                  </div>
                    <!-- 切换帐号 -->
                    <div class="weTalkLogin">
                      <div class="weTalkSwitchSuc">登录成功</div>
                      <div class="weTalkTitle weTalkBindBorder">登录</div>
                      <div class="weTalkLoginContent">
                        <div class="weTalkLoginItem">
                          <div class="weTalkMailTitle">电子邮箱</div>
                          <input id="weTalkAccountVal" class="weTalkMailInput" type="text" />
                        </div>
                        <div class="weTalkLoginPswd">
                          <div class="weTalkMailTitle">密码</div>
                          <div class="weTalkLoginInputCon">
                            <input id="weTalkLoginPswd" class="weTalkMailInput" type="password" />
                            <div id="weTalkForgetPswd" class="weTalkPurpleMiniFont">
                              忘记密码
                            </div>
                          </div>
                        </div>
                        <div class="weTalkBinLoginBtns">
                          <div class="weTalkBindLoginBtn1">取消</div>
                          <div class="weTalkBindLoginBtn2">确认</div>
                        </div>
                      </div>
                    </div>
                    <!-- 忘记密码 -->
                    <div class="weTalkFgPswd">
                      <div class="weTalkSubmitSuc">提交成功,请注意查收邮件</div>
                      <div class="weTalkTitle weTalkBindBorder">忘记密码</div>
                      <div class="weTalkFGcontent">
                        <div class="weTalkFGItem">
                          <div class="weTalkMailTitle">电子邮箱</div>
                          <input id="weTalkFGmail" class="weTalkMailInput" type="text" />
                        </div>
                        <div class="weTalkFGtip">
                          <div class="weTalkFGtipItem">
                            提示：重置密码的步骤将会通过邮件发送到邮箱，
                          </div>
                          <div class="weTalkFGtipItem">请注意查收</div>
                        </div>
                        <div class="weTalkFGbtns">
                          <div class="weTalkFGbtn1">取消</div>
                          <div class="weTalkFGbtn2">确认</div>
                        </div>
                      </div>
                    </div>
                    <!-- 修改密码 -->
                    <div class="weTalkXgPswd">
                      <div class="weTalkTitle weTalkBindBorder">修改密码</div>
                      <div class="weTalkXGcg"></div>
                      <div class="weTalkXgCotent">
                        <div class="weTalkXgItem">
                          <div class="weTalkOriPswd">原密码</div>
                          <input id="weTalkOriPswd" class="weTalkOriPswdInput" type="password" placeholder="请输入原密码"/>
                        </div>
                        <div class="weTalkXgItem">
                          <div class="weTalkNewPswd">新密码</div>
                          <input id="weTalkNewPswd" class="weTalkOriPswdInput" type="password" placeholder="长度5-20字符"/>
                        </div>
                        <div class="weTalkXgItem">
                          <div class="weTalkQrNewPswd">确认新密码</div>
                          <input id="weTalkQrNewPswd" class="weTalkOriPswdInput" type="password" placeholder="长度5-20字符"/>
                        </div>
                      </div>
                      <div class="weTalkXgbtns">
                        <div class="weTalkBtn1 weTalkXgbtn1">取消</div>
                        <div class="weTalkBtn2 weTalkXgbtn2">确认</div>
                      </div>
                    </div>
                    <!-- 移除私聊用户对话框 -->
                    <div class="weTalkRemoveDiag">
                      <div class="weTalkTitle weTalkBindBorder">提示</div>
                      <div class="weTalkRemoveDiagContent">确定要移除当前会话吗？</div>
                      <div class="weTalkRemoveDiagbtns">
                        <div class="weTalkRemoveDiagbtn1">取消</div>
                        <div class="weTalkRemoveDiagbtn2">确认</div>
                      </div>
                    </div>
                    <!-- 开通会员 -->
                    <div class="weTalkStartMember">
                      <div class="weTalkTitle weTalkBindBorder">开通会员</div>
                      <div class="weTalkMemberRight">
                            <div class="weTalkMemberRightFirst weTalkFlex">
                              <div class="weTalkMemberTitle weTalkFlex">
                                会员权益
                                <img
                                  src="./images/youlab.png"
                                  class="weTalkMemberYoula weTalkML5"
                                />
                              </div>
                            </div>
                            <div class="weTalkMemberWelfare weTalkFlex">
                              <div class="weTalkMemberWelfareImg">
                                <img id="weTalkMember1" src="./images/member1.png" alt="" />
                                <div class="weTalkSubTitle weTalkMT15">设置头像</div>
                              </div>
                              <div class="weTalkMemberWelfareImg">
                                <img id="weTalkMember2" src="./images/member2.png" alt="" />
                                <div class="weTalkSubTitle weTalkMT15">互动聊天</div>
                              </div>
                              <div class="weTalkMemberWelfareImg">
                                <img id="weTalkMember3" src="./images/member3.png" alt="" />
                                <div class="weTalkSubTitle weTalkMT15">昵称特效</div>
                              </div>
                              <div class="weTalkMemberWelfareImg">
                                <img id="weTalkMember4" src="./images/member4.png" alt="" />
                                <div class="weTalkSubTitle weTalkMT15">活动优先</div>
                              </div>
                            </div>
                          </div>

                      <div class="weTalkStartMemberItem">
                        <div class="weTalkStartMemberSubTitle">帐&emsp;&emsp;号:</div>
                        <div class="weTalkStartMemberMail"></div>
                      </div>
                      <div class="weTalkStartMemberbtns">
                        <div class="weTalkBtn1 weTalkStartMemberbtn1">取消</div>
                        <div class="weTalkBtn2 weTalkStartMemberbtn2">确认</div>
                      </div>
                    </div>
                    <!-- 开通会员支付 -->
                    <div class="weTalkStartMemberPay">
                      <div class="weTalkTitle">扫码支付</div>
                      <img src="./images/closePersonalInfo.png" class="weTalkStartMemberPayCha weTalkPointer"></img>
                      <div class="weTalkStartMemberPaySuc">支付成功</div>
                      <div class="weTalkStartMemberPayQr">
                        <div class="weTalkStartMemberPayQrImg"></div>
                      </div>
                      <div class="weTalkStartMemberPayTip">使用微信扫码支付</div>
                    </div>
                    <!-- 修改昵称 -->
                    <div class="weTalkUpdateNick">
                      <div class="weTalkTitle weTalkBindBorder">修改昵称</div>
                      <input type="text" class="weTalkUpdateNickInput">
                      <div class="weTalkUpdateNickbtns">
                        <div class="weTalkBtn1 weTalkUpdateNickbtn1">取消</div>
                        <div class="weTalkBtn2 weTalkUpdateNickbtn2">确认</div>
                      </div>
                    </div>
                    <!-- 关于我们 -->
                    <div class="weTalkAboutUs">
                      <div class="weTalkTitle weTalkBindBorder">关于我们</div>
                      <img src="./images/closePersonalInfo.png" class="weTalkAboutUsCha weTalkPointer"></img>
                      <div class="weTalkAboutIntro"></div>
                    </div>
                    <!-- 转发 -->
                    <div class="weTalkTransmit">
                      <div class="weTalkZfSwitch">
                        <span class="weTalkZfSwitchSession">会话</span>
                        <span>&nbsp|&nbsp</span>
                        <span class="weTalkZfSwitchFriend">好友</span>
                      </div>
                      <div class="weTalkTitle weTalkBindBorder">转发</div>
                      <div class="weTalkTransmitList"></div>
                      <div class="weTalkTransmitbtns">
                        <div class="weTalkTransmitbtn1">取消</div>
                        <div class="weTalkTransmitbtn2">确认</div>
                      </div>
                    </div>
                    <!-- 邀请好友 -->
                    <div class="weTalkInviteFriend">
                      <div class="weTalkTitle weTalkBindBorder">邀请好友</div>
                      <img src="./images/closePersonalInfo.png" class="weTalkInviteFriendCha weTalkPointer"></img>
                      <div class="weTalkInviteContent">
                        <div class="weTalkInviteBoon">
                          <span>推荐有礼：</span>
                          每邀请一个好友注册并登录账号，你将获得
                          <span>积分奖励（积分可用于兑换VIP和参加抽奖活动）</span>
                          ，邀请人数不设上限，赶快让更多朋友加入吧！  </div>
                        <div class="weTalkInviteA">邀请链接</div>
                        <div class="weTalkInviteGray">
                          <div class="weTalkInviteGrayInner"></div>
                        </div>
                        <div id="weTalkInviteGrayText" contenteditable="true"></div>
                        <div class="weTalkBtn2 weTalkInviteBtn weTalkPointer">复制</div>
                        <div class="weTalkCopySuc">复制成功</div>
                      </div>
                    </div>
                    <!-- 联系我们 -->
                    <div class="weTalkFeedBack">
                      <div class="weTalkTitle weTalkBindBorder">联系我们</div>
                      <img src="./images/closePersonalInfo.png" class="weTalkFeedBackCha weTalkPointer"></img>
                      <div class="weTalkFeedBackContent">
                        <div class="weTalkFeedBackTitle weTalkFeedBackT2">选择分类</div>
                        <div class="weTalkFeedBackRadio">
                          <input type="radio" name="feedBack" value="1" id="feedBack1">
                          <label for="feedBack1" class="weTalkFeedBackLabel weTalkFeedBackTitle weTalkPointer">意见建议</label>
              
                          <input type="radio" name="feedBack" value="2" id="feedBack2">
                          <label for="feedBack2" class="weTalkFeedBackLabel weTalkFeedBackTitle weTalkPointer">业务合作</label>
              
                          <input type="radio" name="feedBack" value="3" id="feedBack3">
                          <label for="feedBack3" class="weTalkFeedBackLabel weTalkFeedBackTitle weTalkPointer">其他</label>
                        </div>
                        <div class="weTalkMobile weTalkFeedBackTitle">联系方式</div>
                        <input type="text" class="weTalkFeedBackMobileInput" id="weTalkMobile" placeholder="QQ/微信/手机号码">
                        <div class="weTalkFeedBackText weTalkFeedBackTitle">内容</div>
                        <textarea name="feedBackText" class="weTalkFeedTextArea" id="weTalkFeedBackText" placeholder="请填写内容"></textarea>
                      </div>
                      <div class="weTalkFeedBackbtns">
                        <div class="weTalkBtn1 weTalkFeedBackbtn1">取消</div>
                        <div class="weTalkBtn2 weTalkFeedBackbtn2">确认</div>
                      </div>
                    </div>
                    <!-- 站内信 -->
                    <div class="weTalkSystemNewsView">
                      <div class="weTalkTitle weTalkBindBorder">站内信</div>
                      <img
                      src="./images/closePersonalInfo.png"
                      class="weTalkSystemNewsViewClose weTalkPointer"
                    />
                      <div class="weTalkSystemNewsViewContent">
                      </div>
                    </div>
                    <!-- 签到 -->
                    <div class="weTalkSignInView">
                      <div class="weTalkSignSuc">签到成功</div>
                      <div class="weTalkAsign">已签到</div>
                      <div class="weTalkSignDays">
          
                      </div>
                      <img class="weTalkGetQdRevenue weTalkPointer"/>
                    </div>
                    <!-- 功能遮罩层 -->
                    <div class="weTalkFunCover">
                        
                    </div>
                    <!-- 切换遮罩层 -->
                    <div class="weTalkSwitchChatRoomTip">
                       <div class="weTalkTitle">是否切换聊天室</div>
                       <div class="weTalkSwitchRoomTipBtns">
                        <div class="weTalkSwitchRoomTipBtn1 weTalkBtn1">取消</div>
                        <div class="weTalkSwitchRoomTipBtn2 weTalkBtn2">确定</div>
                       </div>
                    </div>
                    <!-- 右键用户信息 -->
                    <div class="weTalkyjInfo">
                      <div class="weTalkyjAvatar"></div>
                      <div class="weTalkyjNick">哈哈</div>
                      <div class="weTalkyjPerSign"></div>
                      <div class="weTalkyjTzk">
                        <div class="weTalkTzkMain">Ta在看</div>
                        <div class="weTalkTzkSub">百度一下你就吼吼</div>
                      </div>
                      <div class="weTalkyjbtn weTalkPointer weTalkyjSl">私聊</div>
                      <div class="weTalkyjbtn weTalkPointer weTalkyjAddFriend">加为好友</div>
                      <div class="weTalkyjbtn weTalkPointer weTalkyjAddLh">拉黑</div>
                      <div class="amendName">
                        <div class="weTalkAmendName">修改成功</div>
                        <p class="amendTitle">修改备注</p>
                        <input id="amendInput" />
                        <p>
                            <button type="button" class="amendNameCancel" id="amendNameCancel">取消</button>
                            <button type="button" class="amendNameSub" id="amendNameSub">确定</button>
                        </p>
                    </div>
                    <div class="weTalkRemoveFriend">解除成功</div>
                    <div class="weTalkaddBlacklist">拉黑成功</div>
                    <div class="weTalkcancelCollection">取消成功</div>
                    </div>
                  </div>
                        `
        )
        weTalkChatRoom.appendTo("body");


        $(".weTalkRightMain").hide();
        $(".weTalkUsers").hide();
        $(".weTalkInitial").show();

        // 图片预览
        $(`
        <!-- 压缩后图片 -->
        <div class="weTalkYsPicContent">
            <div class="weTalkYsPic">
            <div class="weTalkSendPicSuc">发送成功</div>
            <div class="weTalkSendPicFail">发送失败</div>
            <img id="weTalkYsPic" />
            <div class="weTalkYsPickbtns">
                <div class="weTalkYsPicbtn1">取消</div>
                <div class="weTalkYsPicbtn2">发送</div>
            </div>
            </div>
        </div>
        `).appendTo("body");

        // 图片遮罩层
        $(`
            <!-- 图片遮罩层 -->
        <div class="weTalkOverCover">
            <img class="weTalkOverCoverCha" src="./images/closeImg.png">
        </div>
        <!-- 预览图片 -->
        <div class="weTalkImgPreview">
            <img class="weTalkImgPreviewImg" >
        </div>

        `).appendTo("body");

        data.otherInfo = $(`
        <div class="weTalkOtherInfo">
            <div class="weTalkaddRepeatly">请勿重复添加</div>
            <div class="weTalkLhSuc"></div>
            <div class="weTalkOtherAvatar">
                <img class="weTalkOtherAvatarImg"/>
                <div class="weTalkOtherDefaultAvatar"></div>
                <img class="weTalkOtherSexImg"/>
            </div>
            <div class="weTalkOtherNick">昵称：</div>
            <div class="weTalkOtherBz"></div>
            <div class="weTalkOtherPerSign"></div>
            <div class="weTalkOtherTzk">
                <div class="weTalkOtherTzkDe">TA在看：</div>
                <div class="weTalkOtherTzkContent weTalkTextDis"></div>
            </div>
            <div class="weTalkOtherBtn" id="chatBtn">发起私聊</div>
            <div class="weTalkOtherBtn" id="friendBtn">加为好友</div>
            <div class="weTalkOtherBtn" id="lhBtn">加入黑名单</div>
        </div>
        `).hide().appendTo("body")

        // 他人信息页方法
        // 发起私聊
        $(document).on("click", ".weTalkSwitchRoomTipBtn1", function () {
            $('.weTalkSwitchChatRoomTip').hide();
            $(".weTalkFunCover").hide();
            data.isLoadRecords = false;
            if(data.websiteId == null){
                changeRoomRequest(data.webDesiteId);
            }else{
                // 不是第一次加载默认聊天室
                loadDeRoomRecords();
            }
        })

        $(document).on("click", ".weTalkSwitchRoomTipBtn2", function () {
            let websiteId = $(".weTalkSwitchChatRoomTip").attr("data-websiteId");
            changeRoom(websiteId, data.roomId, data.token).then(res => {
                data.aid = 0;
                data.atArr = [];
                // 获取聊天室名称
                data.websiteTitle = res.data.title;
                data.roomId = res.data.id;
                data.websiteId = websiteId;
                data.friendId = websiteId;
                data.isAtDone = false;
                $(".weTalkAtWo").hide();
                showPublicRecords(data.roomId)
                $(".weTalkFunCover").hide();
                $(".weTalkSwitchChatRoomTip").hide().attr("data-websiteId", "");
                // console.log("websiteId", data.websiteId, "friend", data.friendId)
                $(".weTalkLoadRecord").css({ "visibility": "visible" })
                data.isLoadRecords = true;
            })
        })

        // 加为好友/解除好友
        $(document).on("click", "#friendBtn", function () {
            if ($("#friendBtn").html() == "加为好友") {
                addFriendRequestInfo(data.otherUserId);
            } else if ($("#friendBtn").html() == "解除好友") {
                removeFriendRequest(data.otherUserId);
            }
        })

        // 聊天记录绑定事件初始化
        recordPoolOpeFin();

        // 碎片兑换
        $(document).on("click", ".activityFour", fragExChange);



        // 设置头像
        $(document).on("change", "#weTalkChangeMethodInput", function () {
            // console.log("event", event)
            $(".weTalkPersonalInfoCover").show();
            data.upAvatar = event.target.files[0];
            // 判断图片的后缀名是否符合
            let filePath = data.upAvatar.name;
            let imgBase64 = ''; //存储图片的base64
            let fileFormat = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
            if (!fileFormat.match(/.png|.jpg|.jpeg|.bmp/)) {
                showTip('上传错误,文件格式必须为：png/jpg/jpeg/bmp');
                return;
            }
            data.maxSize = 1 * 1024 * 1024;
            if (data.upAvatar.size > data.maxSize) {
                console.log("压缩")
                //调用函数,对图片进行压缩
                compress(data.upAvatar, checkAva)
            } else {
                directTurnIntoBase64(data.upAvatar, function (imgBase64) {
                    data.imgBase64 = imgBase64;
                    $(".weTalkavatarPreviewImg").attr({ "src": data.imgBase64 })
                    // $(".weTalkavatarPreview").show();
                    $(".weTalkAvatarCjView").show();
                    var options = {
                        aspectRatio: 1, // 纵横比
                        viewMode: 2,
                        preview: ".weTalkavatarPreviewCj", // 预览图的class名
                    };
                    $('.weTalkavatarPreview').children('.weTalkavatarPreviewImg')
                        .cropper("destroy")
                        .attr("src", imgBase64)
                        .cropper(options);
                    // $(".weTalkavatarPreviewCj").show();
                });
            }
            // }
        })
        $(document).on("click", ".weTalkavatarBtn1", function () {
            // $(".weTalkavatarPreview").hide()
            // $('.weTalkavatarPreviewCj').hide();
            $(".weTalkAvatarCjView").hide()
            $("#weTalkChangeMethodInput").val("");
            $(".weTalkPersonalInfoCover").hide();
        })
        $(document).on("click", ".weTalkavatarBtn2", function () {
            showTip("正在修改...")
            let imgUrl = $('.weTalkavatarPreview').children('.weTalkavatarPreviewImg').cropper("getCroppedCanvas", {
                width: 128, // 裁剪后的长宽
                height: 128,
            }).toDataURL('image/png');
            // $(".weTalkCjRes").children("img").attr("src", imgUrl);
            // $(".weTalkCjRes").show();
            data.upAvatarFile = convertBase64UrlToFile(imgUrl, (new Date()).valueOf())
            uploadFile(1, data.upAvatarFile);
            $(".weTalkAvatarCjView").hide()
            // $('.weTalkavatarPreview').hide();
            // $('.weTalkavatarPreviewCj').hide();
            $("#weTalkChangeMethodInput").val("");
            $(".weTalkPersonalInfoCover").hide();
        })

        // 加入黑名单/移除黑名单
        $(document).on("click", "#lhBtn", function () {
            if ($("#lhBtn").html() == "加入黑名单") {
                blockUserRequestInfo(data.otherUserId);
            } else {
                unblockRequestInfo(data.otherUserId);
            }
        })

        // 切换聊天室
        $(document).on("click", "#chatBtn", function () {
            addUserMethod(data.otherUserId, 2, 0);
            // 关闭他人信息页
            data.otherInfo.hide();
            $(".weTalkOverCover").hide();
        })

        // 遮罩层关闭
        $(".weTalkOverCoverCha").on("click", function () {
            $(".weTalkImgPreview").hide();
            $(".weTalkOtherInfo").hide();
            $(".weTalkOverCover").hide();
        })

        $(".weTalkOverCover").on("click", function () {
            $(".weTalkImgPreview").hide();
            $(".weTalkOtherInfo").hide();
            $(".weTalkOverCover").hide();
        })

        // 激活拖动
        // dragMyWeTalk();

        // 取消右键默认事件
        $(".weTalkChatRoom").on("contextmenu", function (e) {
            e.preventDefault()
        })

        // 发送游戏
        $(".weTalkChatFace1").on("click", sendGame)
        $(".weTalkChatFace2").on("click", sendGame)
        $(".weTalkChatFace3").on("click", sendGame)

        $(".weTalkCloseAd").on("click", closeAd)
        $(".weTalkOpenUserSet").off("click").on("click", setUserInfo)
        $(".weTalkXiala").off("click")


        // 加载表情包
        for (let i = 1; i < 100; i++) {
            if (i < 10) {
                i = "0" + i;
            }
            $(".weTalkChatFacePackage").append(`
              <img src="./images/face/${i}.png" class="weTalkFaceItem weTalkPointer" id="weTalkFaceItem${i}">
            `)
        }
        let faceI = 1;
        $(".weTalkChatFacePackage").children().each(function () {
            if (faceI < 10) {
                faceI = "0" + faceI;
            }
            faceI = (faceI * 1) + 1;
        })

        // 显示所有表情
        $(".weTalkChatFace").click(function () {
            if ($(".weTalkChatFacePackage").css("visibility") == "hidden") {
                $(".weTalkChatFacePackage").css({ "visibility": "visible" })
            } else {
                $(".weTalkChatFacePackage").css({ "visibility": "hidden" })
            }
        })

        // 发送表情
        $(".weTalkChatFacePackage").click(function (e) {
            if ($(e.target).prop("className") != "weTalkChatFacePackage") {
                let emojSuffix1 = $(e.target).attr("src").lastIndexOf(".");
                let emojSuffix2 = $(e.target).attr("src").lastIndexOf("/");
                let emojFin = $(e.target).attr("src").substring(emojSuffix2 + 1, emojSuffix1);
                // data.emojSrc.push($(e.target).attr("src").substring(emojSuffix2 + 1, emojSuffix1));
                $("#weTalkChatFrame").focus();
                $(this).css({ "visibility": "hidden" })
                // let sy = `<img src='${$(e.target).attr("src")}' class='weTalkFaceItem'>`;
                // _insertimg(sy);
                _insertimg(`[emoj]${emojFin}[/emoj]`);
            }
        })

        // 发送图片
        $("#weTalkSendPic").on("change", function () {
            data.currentfile = event.currentTarget.files[0];
            // 判断图片的后缀名是否符合
            let filePath = data.currentfile.name;
            let fileFormat = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
            if (!fileFormat.match(/.png|.jpg|.jpeg|.bmp/)) {
                showTip('文件格式必须为：png/jpg/jpeg/bmp');
                return;
            }
            picDispose(data.currentfile);
        })

        $(".weTalkYsPicbtn2").on("click", function () {
            if (data.sendState) {
                showTip("正在发送...")
                if (data.upFile.size > data.maxSize) {
                    //调用函数,对图片进行压缩
                    compress(data.upFile, check)
                    $(".weTalkYsPicContent").css("visibility", "hidden")
                    $(".weTalkFunCover").show();
                    return;
                }
                uploadFile(2, data.upFile);
            } else {
                showTip("请5秒以后再发送")
            }
        })

        $(".weTalkYsPicbtn1").on("click", function () {
            // $('.weTalkYsPic').hide();
            $(".weTalkYsPicContent").css("visibility", "hidden")
            $('#weTalkSendPic').val('');
        })


        // 默认为联系我们1
        $("input[type=radio][name=feedBack]").change(function () {
            if (this.value == "1") {
                data.feedBackType = "1";
            } else if (this.value == "2") {
                data.feedBackType = "2";
            } else {
                data.feedBackType = "3";
            }
        });
        $('input:radio[name="feedBack"][value="1"]').prop('checked', true);
        data.feedBackType = "1";


        // 左键点击空白处关闭下拉框和表情框

        let weTalkUserSet = $(".weTalkUserSet");
        let weTalkXiala = $(".weTalkXiala");
        let weTalkOpenUserSet = $(".weTalkOpenUserSet");
        let weTalkAvatar = $(".weTalkAvatar");
        let weTalkNick = $(".weTalkNick");
        let weTalkNickVip = $(".weTalkNickVip");
        let weTalkMan = $(".weTalkMan");
        let weTalkAvatarImg = $(".weTalkAvatarImg");
        let weTalkDefaultAvatar = $(".weTalkDefaultAvatar");
        let weTalkAvatarTip = $(".weTalkAvatarTip");


        let weTalkChatFace = $(".weTalkChatFace");
        let weTalkChatFacePackage = $(".weTalkChatFacePackage");

        $(document).click(function (e) {
            if (
                !weTalkUserSet.is(e.target) &&
                !weTalkOpenUserSet.is(e.target) &&
                !weTalkAvatar.is(e.target) &&
                !weTalkNick.is(e.target) &&
                !weTalkNickVip.is(e.target) &&
                !weTalkXiala.is(e.target) &&
                !weTalkMan.is(e.target) &&
                !weTalkAvatarImg.is(e.target) &&
                !weTalkDefaultAvatar.is(e.target) &&
                !weTalkAvatarTip.is(e.target)
            ) {
                weTalkUserSet.hide();
            }
            if (
                !weTalkChatFace.is(e.target) &&
                !weTalkChatFacePackage.is(e.target)
            ) {
                weTalkChatFacePackage.css({ "visibility": "hidden" })
            }
        });

        // 右键关闭下拉框
        $(document).on("contextmenu", ".weTalkChatRoom", function () {
            weTalkUserSet.hide();
        })

        // 关闭个人信息
        $(".weTalkPersonalInfoClose").click(function () {
            if (
                $(".weTalkUpdateNick").css("display") == "none"
                && $(".weTalkXgPswd").css("display") == "none"
                && $(".weTalkBindMail").css("display") == "none"
                && $(".weTalkStartMember").css("display") == "none") {
                $(".weTalkPersonalInfo").hide();
                $(".weTalkFunCover").hide();
            }
        })

        // 显示个人信息
        $("#weTalkOpenPersonalInfo").click(function () {
            $(".weTalkFunCover").show();
            info(data.token).then(res => {
                // 渲染个签
                if (res.data.signature) {
                    data.signature = res.data.signature;
                    data.textArea.val(`${data.signature}`)
                } else {
                    data.signature = "";
                    data.textArea.val(``)
                }
                // 渲染头像
                if (!(data.avatar)) {
                    $(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar").show();
                    $(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkCurAvater").hide();
                } else {
                    $(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkCurAvater").attr({ "src": `${data.cdn}${data.avatar.replace(/\\/g, "/")}` })
                    $(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar").hide();
                }
                // 渲染积分
                $(".weTalkPointVal").html(`
                    ${data.point}
                `)
            })
            // 获取用户信息接口 页面渲染
            $(".weTalkPersonalInfo").show();
            $(".weTalkUserSet").hide();
        })


        // 发送验证码
        $(".weTalkSendyzm").click(function () {
            if (!(data.weTalkMailVal)) {
                showTip("邮箱不得为空");
                return;
            }
            $(".weTalkUpYzm").show();
            $(".weTalkUpYzmImg").attr({ "src": `${data.server}/user/getBindEmailVerifyCode?userId=${data.id}&&t=${new Date().getTime()}` })
        })

        $(".weTalkUpYzmImg").off("click").on("click", function () {
            $(".weTalkUpYzmImg").attr({ "src": `${data.server}/user/getBindEmailVerifyCode?userId=${data.id}&&t=${new Date().getTime()}` })
        })

        // 验证码
        $(".weTalkUpYzmBtn1").click(function () {
            $(".weTalkUpYzm").hide();

        })

        $(".weTalkUpYzmBtn2").click(function () {
            sendEmailBindCode(data.weTalkMailVal, data.weTalkUpYzm, data.token).then(res => {
                if (res.code == 1) {
                    $(".weTalkUpYzm").hide();
                    showTip("验证成功");
                    $(".weTalkSendyzm").hide();

                } else {
                    showTip("验证失败")
                    $(".weTalkUpYzmImg").attr({ "src": `${data.server}user/getBindEmailVerifyCode?userId=${data.id}&&t=${new Date().getTime()}` })
                }
            })
        })

        // 切换帐号
        $("#weTalkSwitchAccount").click(function () {
            $(".weTalkLogin").show();
            $(".weTalkUserSet").hide();
        });

        $(".weTalkBindLoginBtn1").click(function () {
            $(".weTalkLogin").hide();

        });
        $(".weTalkBindLoginBtn2").click(function () {
            loginByEmailRequest();
        });

        // 忘记密码
        $("#weTalkForgetPswd").click(function () {
            $(".weTalkFgPswd").show();
        });

        $(".weTalkFGbtn1").click(function () {
            $(".weTalkFgPswd").hide();
        });

        $(".weTalkFGbtn2").click(function () {
            forgetPasswordRequest();
        });

        // 关于我们 遮罩层
        $("#weTalkHelp").click(function () {
            $(".weTalkFunCover").show();
            $(".weTalkUserSet").hide();
            $(".weTalkAboutUs").show();
            getAboutUsRequest();
        });

        $(".weTalkAboutUsCha").click(function () {
            $(".weTalkAboutUs").hide();
            $(".weTalkFunCover").hide();
        })

        // 邀请好友 遮罩层
        $("#weTalkInviteP").click(function () {
            $(".weTalkFunCover").show();
            $(".weTalkUserSet").hide();
            $(".weTalkInviteGrayInner").html(`这里有个很好玩的聊天软件，可以认识很多志同道合的人，你也来玩玩？https://www.wetalk.icu/register.html?inviteId=${data.id}`)
            $(".weTalkInviteFriend").show();
        })

        $(".weTalkInviteFriendCha").click(function () {
            $(".weTalkInviteFriend").hide();
            $(".weTalkFunCover").hide();
        })

        $(".weTalkInviteBtn").click(function () {
            var textbox = $(".weTalkInviteGrayInner")[0];
            $(".weTalkInviteGrayInner").focus();
            var sel = window.getSelection ? window.getSelection() : document.selection;
            var range = sel.createRange ? sel.createRange() : sel.getRangeAt(0);
            range.selectNode(textbox);
            sel.removeAllRanges();
            sel.addRange(range);
            document.execCommand("copy");
            $(".weTalkCopySuc").show();
            window.setTimeout(function () {
                $(".weTalkCopySuc").hide();
            }, 3000)
        })

        // 开通会员支付遮罩层
        $(".weTalkStartMemberPayCha").click(function () {
            $(".weTalkStartMemberPay").hide();
        })

        // 联系我们 遮罩层
        $("#weTalkFeedBack").click(function () {
            $(".weTalkFunCover").show();
            $(".weTalkUserSet").hide();
            $(".weTalkFeedBack").show();
        })

        $(".weTalkFeedBackCha").click(function () {
            $(".weTalkFunCover").hide();
            $(".weTalkFeedBack").hide();
        })

        $(".weTalkFeedBackbtn1").click(function () {
            // 清空输入内容
            // $("#data.weTalkMobile").val() = "";
            $(".weTalkFeedBack").hide();
        });

        $(".weTalkFeedBackbtn2").click(function () {
            if (data.weTalkMobile == null || data.weTalkMobile.length == 0) {
                showTip("手机号码不能为空");
                return;
            }
            if (data.weTalkFeedBackText == null || data.weTalkFeedBackText.length == 0) {
                showTip("内容不能为空");
                return;
            }
            submitFeedback(data.feedBackType, data.weTalkMobile, data.weTalkFeedBackText, data.token).then(res => {
                if (res.code == 1) {
                    showTip("提交成功");
                    $(".weTalkFeedBack").hide();
                    // 清空意见
                    $("#weTalkMobile").val("");
                    $("#weTalkFeedBackText").val("");
                    data.weTalkMobile = null;
                    data.weTalkFeedBackText = null;
                } else {
                    showTip("提交失败");
                }
            })
        });

        // 站内信
        $(".weTalkSetFontArr").click(function () {
            $(".weTalkFunCover").show();
            $(".weTalkUserSet").hide();
            $(".weTalkSystemNewsView").show();
            loadSystemNews();
        })

        $(".weTalkSystemNewsViewClose").click(function () {
            $(".weTalkSystemNewsView").hide();
            $(".weTalkFunCover").hide();
        })

        // 点击公共频道
        $(".weTalkPublicChannnell").on("click", function () {
            var _websiteId = data.websiteId ? data.websiteId : data.webDesiteId;
            changeRoomRequest(_websiteId, true)
        });

        // 退出登录
        $("#weTalkExit").on("click", function () {
            if (data.haveSend == false) {
                console.log("在退出登录时已经告知后端了")
                clearTimeout(data.sendTimer);
                data.socket.emit('SYSTEM', {
                    type: 1,
                    targetUserId: data.friendId
                })
                data.haveSend = true;
            }
            data.aid = 0;
            data.aidArr = [];
            data.socket.disconnect();
            localStorage.setItem("token", "");
            // data.isFirstStart = true;
            data.isOpenLoginViewFirst = true;
            data.isLoginByAccount = false;
            data.websiteId = null;
            data.friendId = null;
            data.chatPublicPeople = [];
            $(".weTalkChatRoom").hide();
            $(".weTalkChatRoom").remove();
            $(document).off("keyup");
            $("#weTalkChatFrame").off("keydown");
            loadLoginView();
        })

        document.querySelector('.weTalkChatRoom').addEventListener("paste", function (event) {
            if ($(".weTalkRightMain").css("display") != "none") {
                var isChrome = false;
                if (event.clipboardData || event.originalEvent) {
                    //not for ie11  某些chrome版本使用的是event.originalEvent
                    var clipboardData =
                        event.clipboardData || event.originalEvent.clipboardData;
                    if (clipboardData.items) {
                        // for chrome
                        var items = clipboardData.items,
                            len = items.length,
                            blob = null;
                        isChrome = true;
                        // console.log("type", items[0].type, items[0], items.length)
                        if (len == 1) {
                            if (items[0].type == "image/png") {
                                console.log("截图png", items[0]);
                                blob = items[0].getAsFile();
                                var reader = new FileReader();
                                reader.onload = function (event) {
                                    var base64_str = event.target.result; //获得图片base64字符串
                                    data.upFile = convertBase64UrlToFile(base64_str, new Date().getTime());
                                    //调用函数,对图片进行压缩
                                    picDispose(data.upFile);
                                };
                                reader.readAsDataURL(blob);
                            } else {
                                let paste = clipboardData.getData("text/plain");
                                const selection = window.getSelection();
                                if (!selection.rangeCount) return false;
                                var div = document.createElement("span");
                                div.innerHTML = paste;
                                selection.getRangeAt(0).insertNode(div);
                            }
                        } else if (len == 2) {
                            // console.log("复制图片")
                            let isImage = false;
                            let isText = false;
                            for (var i = 0; i < len; i++) {
                                if (items[i].type.indexOf("image") !== -1) {
                                    blob = items[i].getAsFile();
                                    var reader = new FileReader();
                                    reader.onload = function (event) {
                                        var base64_str = event.target.result; //获得图片base64字符串
                                        data.upFile = convertBase64UrlToFile(base64_str, new Date().getTime());
                                        //调用函数,对图片进行压缩
                                        picDispose(data.upFile)
                                    };
                                    reader.readAsDataURL(blob);
                                    isImage = true;
                                } else {
                                    if (!isImage && !isText) {
                                        isText = true;
                                        let paste = clipboardData.getData("text/html");
                                        paste = paste.replace(/<[^<>]+>/g, "");
                                        const selection = window.getSelection();
                                        if (!selection.rangeCount) return false;
                                        var div = document.createElement("span");
                                        div.innerHTML = paste;
                                        selection.getRangeAt(0).insertNode(div);
                                    }
                                }
                            }
                        } else if (len == 3) {
                            let paste = clipboardData.getData("text/plain");
                            const selection = window.getSelection();
                            if (!selection.rangeCount) return false;
                            var div = document.createElement("span");
                            div.innerHTML = paste;
                            selection.getRangeAt(0).insertNode(div);
                        }
                        //阻止默认行为即不让剪贴板内容在div中显示出来
                        event.preventDefault();
                    }
                }
            }

        });

        document.addEventListener("dragenter", function (e) {
        }, false);
        document.addEventListener("dragleave", function (e) {
        }, false);
        $("#weTalkChatFrame")[0].addEventListener("dragenter", function (e) {
        }, false);
        $("#weTalkChatFrame")[0].addEventListener("dragleave", function (e) {
        }, false);
        $("#weTalkChatFrame")[0].addEventListener("dragenter", function (e) {
            e.stopPropagation();
            e.preventDefault();
        }, false);
        $("#weTalkChatFrame")[0].addEventListener("dragover", function (e) {
            e.stopPropagation();
            e.preventDefault();
        }, false);
        $("#weTalkChatFrame")[0].addEventListener("drop", function (e) {
            e.stopPropagation();
            e.preventDefault();
            data.currentfile = e.dataTransfer.files[0];
            picDispose(data.currentfile);
        }, false);
        // 双向绑定文本框的值

        // 绑定邮箱
        $("#weTalkMailVal").on("input propertychange", function () {
            data.weTalkMailVal = $("#weTalkMailVal").val();
        });


        // 手机收到的验证码
        $("#weTalkMailYzm").on("input propertychange", function () {
            data.weTalkMailYzm = $("#weTalkMailYzm").val();
        });

        // 按图填的验证码
        $(".weTalkUpYzmInput").on("input propertychange", function () {
            data.weTalkUpYzm = $(".weTalkUpYzmInput").val();
        });

        // 登录
        $("#weTalkAccountVal").on("input propertychange", function () {
            data.weTalkAccountVal = $("#weTalkAccountVal").val();
        });

        $("#weTalkLoginPswd").on("input propertychange", function () {
            data.weTalkLoginPswd = $("#weTalkLoginPswd").val();
        });

        // 忘记密码
        $("#weTalkFGmail").on("input propertychange", function () {
            data.weTalkFGmail = $("#weTalkFGmail").val();
        });



        // 联系我们
        $("#weTalkMobile").on("input propertychange", function () {
            data.weTalkMobile = $("#weTalkMobile").val();
        });

        $("#weTalkFeedBackText").on("input propertychange", function () {
            data.weTalkFeedBackText = $("#weTalkFeedBackText").val();
        });

        // 用户列表交互
        $(".weTalkUsersOpe").off("mouseleave").on("mouseleave", function () {
            $(".weTalkUsersOpe").hide();
        })

        // 用户签到
        $(".weTalkSignIn").on("click", function () {
            // 签到
            getSignInfoRe();
            $(".weTalkSignInView").show();
            $(".weTalkFunCover").show();
        })


        // 定位初始化全局变量
        data.chatPublicRecords = [];
        data.weTalkUsersItemList = [];
        data.weTalkUsersNum = null;
        data.isPublic = 1;
        data.weTalkPerList = [];
        data.publicLoad = false;
        data.slYxMsg = null;

        data.signature = res.data.signature;
        data.roomId = res.data.roomId;
        data.webDesiteTitle = res.data.websiteTitle;
        data.websiteTitle = res.data.websiteTitle;
        data.webDesiteId = res.data.websiteId;
        // data.friendId = res.data.roomId;
        data.id = res.data.id;
        data.token = res.data.token;
        data.isNicknameSet = res.data.isNicknameSet;
        data.sex = res.data.sex;
        data.vip = res.data.vip;
        // data.vip = true;
        data.nickname = res.data.nickname;
        localStorage.setItem("nickname", data.nickname)
        data.unreadInboxMsg = res.data.unreadInboxMsg;
        data.avatar = res.data.avatar;
        data.ad = res.data.ad;
        data.cdn = localStorage.getItem("cdn");
        data.server = localStorage.getItem("server");

        data.point = res.data.point;
        data.email = res.data.email;
        data.username = res.data.username;

        if (res.data.signature) {
            data.signature = res.data.signature;
        } else {
            data.signature = "";
        }

        localStorage.setItem("token", data.token);
        Gstar();



        // 获取消息未读条数
        // getUnreadMessageCountRequest()

        // 获取好友列表
        getFriends(data.token).then(res => {
            data.weTalkFriendList = res.data;
        })

        // 站内消息条数
        if (data.unreadInboxMsg > 0) {
            $(".weTalkSystemNewsNum").html(`${data.unreadInboxMsg}`)
            $(".weTalkSystemNewsNum").css({ "visibility": "visible" })
            $(".weTalkAvatarTip").show();
        }



        // 获取昵称
        if (data.vip) {
            $(".weTalkNickVip").html(`${data.nickname}`);
            $(".weTalkNick").hide()
        } else {
            $(".weTalkNick").html(`${data.nickname}`);
            $(".weTalkNickVip").hide();
        }
        if (data.avatar == null) {
            $(".weTalkAvatar").children(".weTalkAvatarImg").hide();
            $(".weTalkAvatar").children(".weTalkDefaultAvatar").html(`${data.nickname.substring(0, 1)}`)
            $(".weTalkAvatar").children(".weTalkDefaultAvatar").show();
        } else {
            $(".weTalkAvatar").children(".weTalkDefaultAvatar").hide();
            $(".weTalkAvatar").children(".weTalkAvatarImg").attr("src", data.cdn + data.avatar.replace(/\\/g, "/"))
        }

        // 获取性别
        if (data.sex == 0) {
            $(".weTalkAvatar").children("#weTalkAvatarSex").hide();
        } else if (data.sex == 1) {
            $(".weTalkAvatar").children("#weTalkAvatarSex").attr({ "src": "./images/man.png" })
        } else {
            $(".weTalkAvatar").children("#weTalkAvatarSex").attr({ "src": "./images/woman.png" })
        }
        // 获取私聊列表
        getSessionList();

        // 监听键盘事件
        listenKeyBoard();

        // console.log("data.websiteId", data.websiteId)
        // 建立socketIo
        data.socket = io.connect(wTsocketUrl, { query: `roomId=${data.roomId}&token=${data.token}` })
        data.socket.on('PUBLIC', function (pubmsg) {
            console.log("pubmsg", pubmsg)
            // 收到消息是否有铃声(当聊天音效开启且不是我自己发的且我正处于聊天室中时才会生效)
            if (window.localStorage.getItem('shareRoomHint') == 1 && pubmsg.senderId != data.id && data.websiteId != null) {
                data.audio.play();
            }

            // 聊天室未读消息条数
            if (data.isPublic == 0 && data.websiteId != null) {
                // 会话消息提醒
                sessionTip();
                data.chatPublicNum = data.chatPublicNum + 1
                $(".weTalkPublicChannnellNum").html(`${data.chatPublicNum}`).show();
            }
            // 如果在聊天室收到消息
            data.chatPublicLastRecord = pubmsg;

            if (data.websiteId != null) {
                showDePublicLastRecord(pubmsg, false);
            }


            // 聊天室未读消息条数
            for (let j = 0; j < data.weTalkPerList.length; j++) {
                if (data.weTalkPerList[j].isUsers == false) {
                    if (data.weTalkPerList[j].websiteId == data.websiteId && data.isPublic == 0) {
                        console.log("未读消息加载")
                        data.weTalkPerList[j].UnReadNum += 1;
                        // 渲染会话列表
                        $(".weTalkChatItemList").children().each(function () {
                            if ($(this).attr("data-index") == j) {
                                // console.log("看看这是啥", $(this).children(".weTalkNewsRecords")[0])
                                $(this).children(".weTalkNewsRecords").html(`${data.weTalkPerList[j].UnReadNum}`).show();
                            }
                        });
                        // showPersonalList();
                        break;
                    }
                }
            }

            if (pubmsg.messageType == 1 || pubmsg.messageType == 2) {
                if (pubmsg.messageType == 2) {
                    pubmsg.img = pubmsg.content;
                }
                pubmsg.avatarDefault = pubmsg.senderNickname.substring(0, 1)
                pubmsg.content = disposeText(pubmsg)
                if (/\[at\]/g.test(pubmsg.content)) {
                    pubmsg.at = true;
                }
                if (pubmsg.id != data.id) {
                    if (/\[at\]/g.test(pubmsg.content)) {
                        let atIcon;
                        pubmsg.content = pubmsg.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                        // console.log("content", pubmsg.content)
                        // 判断别人@的人是不是你
                        atIcon = $(`<span>${pubmsg.content}</span>`);
                        atIcon.children("a").each(function () {
                            // if ($("#at").length > 0) {
                            //     console.log("有@id了", $("#at")[0])
                            //     return;
                            // }
                            if (data.isAtDone) {
                                return;
                            }
                            let that = $(this);
                            // console.log("某个@", $(this)[0], $(this).html().substring(1))
                            if ($(this).html().substring(1) == data.nickname) {
                                that.attr('id', "at")
                                data.isAtDone = true;
                                // console.log("@你的aid", $(this).attr("id"))
                                let atYou = $(`
                                                <a class="weTalkAtTip" href="#at">
                                                    <img class="weTalkAtAvatar">
                                                    <div class="weTalkAtYouD">${pubmsg.avatarDefault}</div>
                                                    <div class="weTalkAtYou">有人@我</div>
                                                </a>
                                            `)

                                // console.log("某人@你", atYou[0])
                                let avatar;
                                if (pubmsg.avatar) {
                                    avatar = data.cdn + pubmsg.avatar.replace(/\\/g, "/")
                                    atYou.children(".weTalkAtAvatar").attr("src", avatar).show();
                                    atYou.children(".weTalkAtYouD").hide();
                                } else {
                                    atYou.children(".weTalkAtAvatar").hide().attr("");
                                    atYou.children(".weTalkAtYouD").show();
                                }
                                atYou.on("click", function () {
                                    data.isAtDone = false;
                                    $(".weTalkAtWo").hide();
                                    data.atArr = [];
                                    setTimeout(function () {
                                        // console.log("移除atYou", atYou[0])
                                        atYou.remove();
                                        let at = $("#at").attr("id", "");
                                        console.log("at", at[0], at.attr("id"));
                                    })
                                })
                                data.atArr.push(atYou)
                                if (data.isPublic == 1) {
                                    atYou.appendTo(".weTalkChatMain");
                                }
                            }
                        })
                        pubmsg.content = atIcon[0];
                        // console.log("data.public", data.chatPublicRecords)
                        // console.log("atIcon", atIcon[0])
                        // console.log("处理后", weTalkChatOtherContent.html(), weTalkChatOtherContent[0])
                    }
                }
            }


            data.chatPublicRecords.push(pubmsg);

            if (data.isPublic == 1 && data.websiteId != null) {
                loadPublicRecord();
            }
            //  else {
            //     console.log("进这了吗")
            //     let atYou = $(`
            //         <a class="weTalkAtTip" href="#at">
            //             <img class="weTalkAtAvatar">
            //             <div class="weTalkAtYouD">${pubmsg.avatarDefault}</div>
            //             <div class="weTalkAtYou">有人@我</div>
            //         </a>
            //     `)
            //     if (pubmsg.avatar) {
            //         avatar = data.cdn + pubmsg.avatar.replace(/\\/g, "/")
            //         atYou.children(".weTalkAtAvatar").attr("src", avatar).show();
            //         atYou.children(".weTalkAtYouD").hide();
            //     } else {
            //         atYou.children(".weTalkAtAvatar").hide().attr("");
            //         atYou.children(".weTalkAtYouD").show();
            //     }
            //     data.atArr.push(atYou)
            // }

        })
        data.socket.on('PRIVATE', function (primsg) {

            if (window.localStorage.getItem('privateChatHint') == 1) {
                data.audio.play();
            }
            console.log("primsg", primsg)
            // 初始化参数
            primsg.addFriendType = 2;
            if (primsg.isPublic == undefined) {
                primsg.isPublic = 0;
            }
            // 判断接收类型
            if (primsg.messageType == 1 || primsg.messageType == 2) {
                primsg.content = disposeText(primsg);
            }
            // 判断会话中是否已有该用户，如果已有
            for (let j = 0; j < data.weTalkPerList.length; j++) {
                if (primsg.senderId == data.weTalkPerList[j].userId) {
                    let obj = JSON.parse(JSON.stringify(primsg));
                    obj.nickname = data.weTalkPerList[j].nickname;
                    data.weTalkPerList[j].records.push(obj);
                    // 如果当前打开的聊天框不是与该用户的聊天框
                    if (primsg.senderId != data.friendId) {
                        // 会话消息提醒
                        sessionTip();
                        console.log("不是与该用户的聊天框")
                        data.weTalkPerList[j].UnReadNum = parseInt(data.weTalkPerList[j].UnReadNum) + 1;
                        $(".weTalkChatItemList").children().each(function () {
                            if ($(this).attr("data-index") == j) {
                                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").html(`${data.weTalkPerList[j].UnReadNum}`).show();
                                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                                // console.log("未读消息", $(this), $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords")[0])
                            }
                        })
                        // showPersonalList();
                    } else {
                        $(".weTalkChatItemList").children().each(function () {
                            if ($(this).attr("data-index") == j) {
                                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                            }
                        })
                        // console.log("收到消息时打开的聊天框是与该用户的聊天框")
                        // 如果当前打开的聊天框是与该用户的聊天框
                        data.haveSend = false;
                        loadByFriendOne();
                        if (data.sendTimer != null) {
                            clearTimeout(data.sendTimer);
                        }
                        data.sendTimer = setTimeout(function () {
                            // console.log("已告知后端")
                            data.socket.emit('SYSTEM', {
                                type: 1,
                                targetUserId: data.friendId
                            })
                            data.haveSend = true;
                        }, 15000)
                    }
                    $(".weTalkChatItemList").children().each(function () {
                        if ($(this).attr("data-index") == j) {
                            if (data.weTalkPerList[j].records && data.weTalkPerList[j].records.length > 0) {
                                let record = JSON.parse(JSON.stringify(data.weTalkPerList[j].records[data.weTalkPerList[j].records.length - 1]))
                                loadSessionContent(record, j);
                            }
                        }
                    });

                    data.isHasThisFriend = true;
                    break;
                }
            }
            // 判断会话中是否已有该用户，如果没有
            if (data.isHasThisFriend == false) {
                // console.log(1, primsg.senderId, data.id)
                if (primsg.senderId != data.id) {
                    // 添加该用户
                    data.passiveChatContent = JSON.parse(JSON.stringify(primsg));
                    addUserMethod(primsg.senderId, 1, 1)
                }
            }
        })
        data.socket.on('SYSTEM', function (sysmsg) {
            // console.log("sysmsg", sysmsg)
            // 用户上线
            if (sysmsg.type == 1) {
                let isHas = false;
                for (let j = 0; j < data.weTalkUsersItemList.length; j++) {
                    if (data.weTalkUsersItemList[j].id == sysmsg.id) {
                        isHas = true;
                    }
                }
                if (!isHas) {
                    let obj = {};
                    obj.nickname = sysmsg.nickname;
                    if (sysmsg.id != data.id) {
                        // console.log("加了一个人");
                        data.chatPublicPeople.push(obj.nickname);
                    }
                    // 加载@
                    loadAt();
                    obj.id = sysmsg.id;
                    if (!(sysmsg.sex)) {
                        obj.sex = 0;
                    } else {
                        obj.sex = sysmsg.sex;
                    }
                    obj.avatar = sysmsg.avatar;
                    obj.addFriendType = 1;
                    obj.vip = sysmsg.vip;
                    if (obj.nickname) {
                        obj.avatarDefault = obj.nickname.substring(0, 1)
                    }

                    if (sysmsg.id == data.id) {
                        data.weTalkUsersItemList.unshift(obj);
                    } else {
                        data.weTalkUsersItemList.push(obj);
                    }
                    obj = {};
                    data.weTalkUsersNum += 1;
                    seeUserList();
                }
            }
            // 用户下线
            if (sysmsg.type == 2) {
                for (let j = 0; j < data.weTalkUsersItemList.length; j++) {
                    // console.log(data.weTalkUsersItemList[j].id, sysmsg.id)
                    if (data.weTalkUsersItemList[j].id == sysmsg.id) {
                        data.weTalkUsersItemList.splice(j, 1);
                        data.chatPublicPeople.splice(j - 1, 1);
                        // console.log("chatPublicPeople", data.chatPublicPeople)
                        $("#weTalkChatFrame").atwho('destroy');
                        $("#weTalkChatFrame").atwho({
                            at: "@",
                            data: data.chatPublicPeople,
                            limit: data.chatPublicPeople.length,
                            // displayTpl: "<li><img src='${avatar}' height='16' width='16' />${nickname} </li>",
                            // insertTpl: ':${nickname}:',
                            startWithSpace: false, //是否以空格开始
                        });
                        $(".atwho-view-ul").off("keydown").on("keydown", function () {
                            return false;
                        })
                        data.weTalkUsersNum -= 1;
                        seeUserList();
                    }
                }
            }
            // 广播
        })

        // 获取用户列表和数量
        // getOnlineUsersRequest();

        let avatarNick;
        if (data.nickname) {
            avatarNick = data.nickname.substring(0, 1);
        } else {
            avatarNick = "W";
        }

        var userInfo = $(`
        <div class="weTalkPersonalInfoContent">
          <div class="weTalkChangeAvatar">
            <img class="weTalkCurAvater">
            <div class="weTalkDeInfoAvatar">${avatarNick}</div>
          </div>
          <div class="weTalkPersonalInfoContentRight">
            <div id="weTalkNick" class="weTalkPersonalInfoItem"></div>
            <div id="weTalkPoint" class="weTalkPersonalInfoItem">
              <div class="weTalkPersonalInfoHigh">积分：</div>
              <div class="weTalkPointVal"></div>
            </div>
            <div id="weTalkUserSex" class="weTalkPersonalInfoItem">
              <div class="weTalkPersonalInfoHigh">性别：</div>
            </div>
            <div id="weTalkUserAccount" class="weTalkPersonalInfoItem">
              <div class="weTalkPersonalInfoHigh">帐号：</div>
            </div>
            <div id="weTalkUserMail" class="weTalkPersonalInfoItem">
              <div class="weTalkPersonalInfoHigh">邮箱：</div>
            </div>
            <div id="weTalkUserPerSign" class="weTalkPersonalInfoItem">
              <div class="weTalkPersonalInfoHigh">个签：</div>
              <textarea class="weTalkUserPerSignText" placeholder="还没有设置个性签名哦"></textarea>
            </div>
          </div>
          <div class="weTalkBtn2 weTalkMemberBtn weTalkPointer">确定</div>
        </div>
          `)

        if ($(".weTalkPersonalInfoContent").length > 0) {
            $(".weTalkPersonalInfoContent").remove();
        }

        // 获取个签
        data.textArea = userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserPerSign").children(".weTalkUserPerSignText")
        if (data.signature) {
            data.textArea.val(`${data.signature}`)
        } else {
            data.textArea.val(``)
        }

        // 渲染头像
        userInfo.appendTo(".weTalkPersonalInfo")
        if (!(data.avatar)) {
            userInfo.children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar").show();
            userInfo.children('.weTalkChangeAvatar').children(".weTalkCurAvater").hide();
        } else {
            userInfo.children('.weTalkChangeAvatar').children(".weTalkCurAvater").attr({ "src": `${data.cdn}${data.avatar.replace(/\\/g, "/")}` })
            userInfo.children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar").hide();
        }

        //   确定个签
        userInfo.children(".weTalkMemberBtn").off("click").on("click", function () {
            // console.log("个签", $(".weTalkUserPerSignText").val(), "记录的个签", data.signature)
            if ($(".weTalkUserPerSignText").val() == data.signature) {
                // console.log("如果没有更改，个签的值", $(".weTalkUserPerSignText").val(), "data", data.signature)
                if (
                    $(".weTalkUpdateNick").css("display") == "none"
                    && $(".weTalkXgPswd").css("display") == "none"
                    && $(".weTalkBindMail").css("display") == "none") {
                    $(".weTalkPersonalInfo").hide();
                    $(".weTalkFunCover").hide();
                }
            } else {
                // console.log("个签与更改后的不一样", $(".weTalkUserPerSignText").val(), data.signature)
                if ($(".weTalkUserPerSignText").val().trim().length >= 0 && $(".weTalkUserPerSignText").val().trim().length <= 30) {
                    updateSignature($(".weTalkUserPerSignText").val().trim(), data.token).then(res => {
                        if (res.code == 1) {
                            if (
                                $(".weTalkUpdateNick").css("display") == "none"
                                && $(".weTalkXgPswd").css("display") == "none"
                                && $(".weTalkBindMail").css("display") == "none") {
                                $(".weTalkPersonalInfo").hide();
                                $(".weTalkFunCover").hide();
                            }
                            $(".weTalkUserPerSignText").val(`${$(".weTalkUserPerSignText").val().trim()}`)
                            data.signature = $(".weTalkUserPerSignText").val().trim();
                            showTip("更改成功");
                        } else if (res.code == 44444) {
                            showTip("内容不符合规范,更改不会生效");
                            if (
                                $(".weTalkUpdateNick").css("display") == "none"
                                && $(".weTalkXgPswd").css("display") == "none"
                                && $(".weTalkBindMail").css("display") == "none") {
                                $(".weTalkPersonalInfo").hide();
                                $(".weTalkFunCover").hide();
                            }
                        }
                    })
                } else if ($(".weTalkUserPerSignText").val().trim().length > 30) {
                    showTip("个人签名字数超出30限制");
                }
            }
        })

        // 渲染积分
        $(".weTalkPointVal").html(`
          ${data.point}
        `)

        // 渲染默认聊天室
        $(".weTalkPublicChannnellTitle").html(`${data.webDesiteTitle}聊天室`)

        // 修改昵称
        let updateNick = $(`
              <div class="weTalkPersonalInfoJhNick weTalkPersonalInfoJh">
                <div class="weTalkPersonalInfoLow">${data.nickname}</div>
                <div id="weTalkUpdateNick"  class="weTalkML5 weTalkPointer">
                  <img class="weTalkUpdateNickImg" src="./images/pencil.png">
                </div>
                <div class="weTalkPersonalInfoVip">
                VIP会员
                </div>
                <div class="weTalkKthy weTalkPointer">开通会员</div>
              </div>
            `).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkNick"))
        updateNick.children("#weTalkUpdateNick").on("click", function () {
            $(".weTalkPersonalInfoCover").show();
            $(".weTalkUpdateNick").show();
            $(".weTalkUpdateNickInput").val(`${data.nickname}`)
        })

        let weTalkUpdateNick = data.nickname;
        $(".weTalkUpdateNickInput").on("input propertychange", function () {
            weTalkUpdateNick = $(".weTalkUpdateNickInput").val();

        });
        $(".weTalkUpdateNickbtn1").click(function () {
            $(".weTalkPersonalInfoCover").hide();
            $(".weTalkUpdateNick").hide();
        })

        $(".weTalkUpdateNickbtn2").click(function () {
            if (weTalkUpdateNick != data.nickname) {
                if (strlen(weTalkUpdateNick) < 4) {
                    $(".weTalkCommonTip").html("昵称最少4个字符，中文算2个").show();
                    window.setTimeout(function () {
                        $(".weTalkCommonTip").hide();
                    }, 3000)
                } else {
                    setUserNickRequest(weTalkUpdateNick, data.roomId, data.token);
                    $(".weTalkPersonalInfoCover").hide();
                    $(".weTalkUpdateNick").hide();
                }
            } else {
                $(".weTalkUpdateNick").hide();
                $(".weTalkPersonalInfoCover").hide();
            }
        })

        // vip（如果为vip）
        if (data.vip) {
            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoVip").show();
            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoLow").show();

            $(`
            <label class="weTalkChangeMethod weTalkPointer" for="weTalkChangeMethodInput">更改头像</label>
            <input id="weTalkChangeMethodInput" type="file">
          `).insertAfter(userInfo.children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar"));
        } else {
            $(`
            <div class="weTalkChangeMethod weTalkPointer">更改头像</div>
          `).insertAfter(userInfo.children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar"));

            $(".weTalkChangeMethod").on("click", function () {
                showTip("您不是VIP会员，还不能使用该功能。");
            })

            // 如果不是vip就可以开通vip
            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoVip").hide();
            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoLow").show();
            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkKthy").show();

            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkKthy").off("click").on("click", function () {
                getVipPayment(data.token).then(res => {
                    if (res.code == 1) {
                        let memberPriceInfo = res.data;
                        $(".weTalkStartMember").show();
                        // 配置帐号信息
                        if (data.username == null) {
                            $(".weTalkStartMemberMail").html(`暂无`)
                        } else {
                            $(".weTalkStartMemberMail").html(`${data.username}`)
                        }
                        // 配置会员价格信息
                        let memberPrice = $(`
                      <div class="weTalkPricePz">
                        <div class="weTalkStartMemberItem1 weTalkStartMemberItem">
                          <div class="weTalkStartMemberSubTitle">有&ensp;效&ensp;期:</div>
                        </div>
                        <div class="weTalkStartMemberItem2 weTalkStartMemberItem">
                          <div class="weTalkStartMemberSubTitle">价&emsp;&emsp;格:</div>
                          <div class="weTalkStartMemberItem2Two">
                            <div class="weTalkStartMemberPrice">0</div>
                            <div class="weTalkStartMemberUnit"></div>
                          </div>
                        </div>
                      </div>
                  `)
                        // console.log("会员信息", memberPriceInfo)
                        memberPriceInfo.forEach((item, index) => {
                            let memberOption = $(`
                  <div class="weTalkSMemberA">
                    <input type="radio" name="member" value="${index}" id="weTalkSMember${index + 1}">
                    <label for="weTalkSMember${index + 1}" class="weTalkSMember weTalkPointer">${item.title}</label>
                  </div>
                  `);
                            memberOption.children("input").attr({ "data-id": item.id })
                            memberOption.appendTo(memberPrice.children(".weTalkStartMemberItem1"))
                            data.memberType = res.data.payType;
                        })
                        memberPrice.children(".weTalkStartMemberItem1").children(".weTalkSMemberA").each(function () {
                            $(this).children("input[type=radio][name=member]").on("change", function () {
                                data.membercPrice = memberPriceInfo[$(this).val()].price;
                                memberPrice.children(".weTalkStartMemberItem2").children(".weTalkStartMemberItem2Two").children(".weTalkStartMemberPrice").html(`${data.membercPrice}`)
                                data.memberId = $(this).attr("data-id");
                            });
                        })
                        if (data.memberType == 1) {
                            memberPrice.children(".weTalkStartMemberItem2").children(".weTalkStartMemberItem2Two").children(".weTalkStartMemberUnit").html(`元`);
                        } else {
                            memberPrice.children(".weTalkStartMemberItem2").children(".weTalkStartMemberItem2Two").children(".weTalkStartMemberUnit").html(`积分`);
                        }
                        if ($(".weTalkStartMember").children(".weTalkPricePz")) {
                            $(".weTalkStartMember").children(".weTalkPricePz").remove();
                        }
                        $(".weTalkStartMemberItem").after(memberPrice);
                        // 默认值
                        $('input:radio[name="member"][value="0"]').prop('checked', true);
                        data.membercPrice = memberPriceInfo[0].price;
                        data.memberId = memberPriceInfo[0].id;
                        memberPrice.children(".weTalkStartMemberItem2").children(".weTalkStartMemberItem2Two").children(".weTalkStartMemberPrice").html(`${data.membercPrice}`)
                    }
                })
            })

            $(".weTalkStartMemberbtn1").click(function () {
                $(".weTalkStartMember").hide();
            })

            $(".weTalkStartMemberbtn2").off("click").on("click", function () {
                if (data.memberType == 1) {
                    $(".weTalkStartMemberPay").show();
                    $(".weTalkStartMember").hide();
                    buyVipPaymentRequest()
                } else {
                    buyVipPaymentRequest()
                }
            })
        }

        // 如果邮箱为空
        if (data.email == null) {
            $(`
                <div class="weTalkMailTip">暂未绑定，将无法使用找回密码功能</div>
                <div class="weTalkBindAc weTalkPointer" id="updateMail">马上绑定</div>
            `).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserMail"))

            // 绑定邮箱
            $("#updateMail").off("click").on("click", function () {
                $(".weTalkPersonalInfoCover").show();
                $(".weTalkBindMail").show();
                $(".weTalkSendyzm").show();
            })

            // 取消绑定邮箱
            $(".weTalkBindMailBtn1").off("click").on("click", function () {
                $(".weTalkPersonalInfoCover").hide();
                $(".weTalkBindMail").hide();
                $(".weTalkUpYzmInput").val("");
            })

            $(".weTalkBindMailBtn2").click(function () {
                bindEmailRequest();
            })
        } else {
            $(`
            <div class="weTalkUserMailV weTalkPersonalInfoLow">${data.email}</div>
          `).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserMail"))
        }

        // 帐号
        let updatePswd = $(`
          <div class="weTalkPersonalInfoLow">${data.username}</div>
          <div class="weTalkBindAc weTalkPointer" id="updatePswd">修改密码</div>
        `).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserAccount"))

        $("#updatePswd").off("click").on("click", function () {
            $(".weTalkXgPswd").show();
            $(".weTalkPersonalInfoCover").show();
        })

        // 双向绑定input
        $("#weTalkNewPswd").on("input propertychange", function () {
            data.weTalkNewPswd = $("#weTalkNewPswd").val();
        });

        $("#weTalkQrNewPswd").on("input propertychange", function () {
            data.weTalkQrNewPswd = $("#weTalkQrNewPswd").val();
        });

        $("#weTalkOriPswd").on("input propertychange", function () {
            data.weTalkOriPswd = $("#weTalkOriPswd").val();
        });

        $(".weTalkXgbtn1").off("click").on("click", function () {
            $(".weTalkXgPswd").hide();
            $("#weTalkNewPswd").val("")
            $("#weTalkQrNewPswd").val("")
            $("#weTalkOriPswd").val("")
            $(".weTalkPersonalInfoCover").hide();
        })

        $(".weTalkXgbtn2").off("click").on("click", function () {
            if (data.weTalkOriPswd == null || data.weTalkOriPswd.length == 0) {
                $(".weTalkCommonTip").html("原密码不能为空").show();
                setTimeout(function () {
                    $(".weTalkCommonTip").hide().html("");
                }, 3000)
                return;
            }
            if (data.weTalkNewPswd == null || data.weTalkNewPswd.length == 0) {
                $(".weTalkCommonTip").html("新密码不能为空").show();
                setTimeout(function () {
                    $(".weTalkCommonTip").hide().html("");
                }, 3000)
                return;
            }

            if (data.weTalkQrNewPswd == null || data.weTalkQrNewPswd.length == 0) {
                $(".weTalkCommonTip").html("确认新密码不能为空").show();
                setTimeout(function () {
                    $(".weTalkCommonTip").hide().html("");
                }, 3000)
                return;
            }

            if (data.weTalkNewPswd.length < 5 || data.weTalkNewPswd.length > 20) {
                $(".weTalkCommonTip").html("请输入5-20字符的密码").show();
                setTimeout(function () {
                    $(".weTalkCommonTip").hide().html("");
                }, 3000)
                return;
            }
            if (data.weTalkNewPswd != data.weTalkQrNewPswd) {
                $(".weTalkCommonTip").html("新密码与确认密码不一致").show();
                setTimeout(function () {
                    $(".weTalkCommonTip").hide().html("");
                }, 3000)
                return;
            }
            changePassword(data.weTalkOriPswd, data.weTalkQrNewPswd, data.token).then(res => {
                if (res.code == 1) {
                    $(".weTalkCommonTip").html("密码修改成功，退出账号以后需要使用新密码登录。").show();
                    $(".weTalkXgPswd").hide();
                    setTimeout(function () {
                        $(".weTalkCommonTip").hide().html("");
                    }, 3000)
                    $("#weTalkNewPswd").val("")
                    $("#weTalkQrNewPswd").val("")
                    $("#weTalkOriPswd").val("")
                    $(".weTalkPersonalInfoCover").hide();
                } else {
                    $(".weTalkCommonTip").html("原密码不正确").show();
                    setTimeout(function () {
                        $(".weTalkCommonTip").hide().html("");
                    }, 3000)
                }
            })
        })



        // 修改性别
        if (data.sex == 0) {
            $(`<div class="weTalkPersonalInfoGender">
          <input type="radio" name="sex" value="1" id="weTalkMan" />
          <label class="weTalkPersonalInfoLow weTalkPointer" for="weTalkMan"
            >男生</label
          >
          <input type="radio" name="sex" value="2" id="weTalkWoman" />
          <label
            class="weTalkPersonalInfoLow weTalkPointer"
            for="weTalkWoman"
            >女生</label
          >
          <span class="weTalkPurpleMiniFont">（设置后不允许修改）</span>
        </div>`).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserSex"))
            userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserSex").children(".weTalkPersonalInfoGender").children('input[type=radio][name=sex]').on("change", function () {
                setUserSex(this.value, data.token).then(res => {
                    if (res.code == 1) {
                        $(".weTalkCommonTip").html(`修改成功`);
                        $(".weTalkCommonTip").show();
                        window.setTimeout(function () {
                            $(".weTalkCommonTip").hide();
                        }, 3000)
                        info(data.token).then(res => {
                            if (res.code == 1) {
                                data.sex = res.data.sex;
                                console.log("22", $('.weTalkPersonalInfoGender').html())
                                $('.weTalkPersonalInfoGender').html(`
                    <div class="weTalkPersonalInfoLow">${data.sex == 1 ? "男" : "女"}</div>
                    `)
                            }
                        })

                    }
                })
            });
        } else {
            $(`<div class="weTalkPersonalInfoGender">
          <div class="weTalkPersonalInfoLow">${data.sex == 1 ? "男" : "女"}</div>
          </div>`).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserSex"))
        }

        // 显示weTalk
        $(".weTalkChatRoom").css({ "display": "block" })
    };


    // 通过token登录
    function loginReuqest() {
        loginRequest(data.curDomain, data.curTitle, data.token).then(res => {
            if (res.code == 1) {
                initialInfo(res);
            } else {
                if (res.code == 10008) {
                    $(".weTalkLoginError").html("登录异常").appendTo("body")
                    setTimeout(function () {
                        $(".weTalkLoginError").hide();
                    }, 3000)
                }
                // 登录失败的情况判断token无效，清空token让用户通过账号登录
                localStorage.setItem("token", "");
                startChatRoom();
                // data.isFirstStart = true;
            }
        })
    }

    // 通过email登录
    function loginByEmailRequest() {
        loginByAccount(data.weTalkAccountVal, data.weTalkLoginPswd, data.curDomain, data.title).then(res => {
            if (res.code == 1) {
                // 清空登录信息
                $("#weTalkAccountVal").val("");
                $("#weTalkLoginPswd").val("");
                $(".weTalkSwitchSuc").show();
                setTimeout(function () {
                    $(".weTalkSwitchSuc").hide();
                    $(".weTalkLogin").hide();
                }, 3000)
                initialInfo(res);
            }
        })
    }

    function loginByAccountRequest() {
        // l("isLogining", data.isLogining)
        if (data.isLogining == false) {
            if (data.weTalkUsername == null || data.weTalkUsername.length == 0) {
                $(".weTalkUserNameEmpty").show();
                setTimeout(function () {
                    $(".weTalkUserNameEmpty").hide();
                }, 3000)
                return;
            }
            if (data.weTalkUserPswd == null || data.weTalkUserPswd.length == 0) {
                $(".weTalkUserPswdEmpty").show();
                setTimeout(function () {
                    $(".weTalkUserPswdEmpty").hide();
                }, 3000)
                return;
            }
            data.isLogining = true;
            loginByAccount(data.weTalkUsername, data.weTalkUserPswd, data.curDomain, data.curTitle).then(res => {
                if (res.code == 1) {
                    $("#weTalkUsername").val("");
                    $("#weTalkUserPswd").val("");
                    $(".weTalkLogLSuc").show();
                    forbiddenBtn();
                    setTimeout(function () {
                        $(".weTalkLogLSuc").hide();
                        recoverBtn();
                    }, 3000)
                    $(".weTalkLogView").hide();
                    $(".weTalkWeb").hide();
                    // alert("登录成功")
                    showGlobalTip("登录成功");
                    data.isLogining = false;
                    data.isLoginByAccount = true;
                    localStorage.setItem("token", res.data.token);
                    startChatRoom(res);
                } else if (res.code == 10002) {
                    $(".weTalkSwitchFail").show();
                    $("#weTalkUserPswd").val("");
                    forbiddenBtn();
                    data.isLogining = false;
                    setTimeout(function () {
                        recoverBtn();
                        $(".weTalkSwitchFail").hide();
                    }, 3000)
                } else if (res.code == 10008) {
                    $(".weTalkFj").show();
                    forbiddenBtn();
                    data.isLogining = false;
                    setTimeout(function () {
                        $(".weTalkFj").hide();
                        recoverBtn();
                    }, 3000)
                } else if (res.code == 10010) {
                    $(".weTalkYlogin").show();
                    forbiddenBtn();
                    data.isLogining = false;
                    setTimeout(function () {
                        recoverBtn();
                        $(".weTalkYlogin").hide();
                    }, 3000)
                }
            })

        }

    }

    // 忘记密码
    function forgetPasswordRequest() {
        if (data.weTalkFGmail == null || data.weTalkFGmail.length == 0) {
            $(".weTalkFGEmailEmpty").show();
            setTimeout(function () {
                $(".weTalkFGEmailEmpty").hide();
            }, 3000)
            return;
        }
        forgetPassword(data.weTalkFGmail, data.token).then(res => {
            console.log("res", res.code)
            if (res.code == 1) {
                $(".weTalkSubmitSuc").show();
                setTimeout(function () {
                    $(".weTalkSubmitSuc").hide();
                    $(".weTalkRegResetPswdV").hide();
                    $(".weTalkLogView").show();
                }, 3000)
            } else if (res.code == 10001) {
                $(".weTalkFGEmailUncorrect").html("邮箱不存在").show();
                setTimeout(function () {
                    $(".weTalkFGEmailUncorrect").hide();
                    $("#weTalkRegResetPswdmail").val("")
                }, 3000)
            } else {
                $(".weTalkFGEmailUncorrect").html("无效的邮箱").show();
                setTimeout(function () {
                    $(".weTalkFGEmailUncorrect").hide();
                    $("#weTalkRegResetPswdmail").val("")
                }, 3000)
            }
        })
    };

    // 获取关于我们
    function getAboutUsRequest() {
        getAboutUs(data.token).then(res => {
            if (res.code == 1) {
                $(".weTalkAboutIntro").html(`${res.message}`)
            }
        })
    }

    // 获取消息未读条数
    // function getUnreadMessageCountRequest() {
    //     getUnreadMessageCount(data.token).then(res => {
    //         if (res.code == 1) {

    //         }
    //     })
    // }

    // 修改昵称
    function setUserNickRequest(nickname, roomId, token) {
        setUserNick(nickname, roomId, token).then(res => {
            if (res.code == 1) {
                showTip("修改成功")
                info(data.token).then(res => {
                    if (res.code == 1) {
                        data.nickname = res.data.nickname;
                        localStorage.setItem("nickname", data.nickname);
                        data.isNicknameSet = res.data.isNicknameSet;
                        if (data.vip) {
                            $(".weTalkNickVip").html(`${data.nickname}`)
                            $(".weTalkPersonalInfoContentRight").children("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoLow").html(data.nickname)
                            // 如果会员用默认头像时
                            if (!(data.avatar)) {
                                $(".weTalkDefaultAvatar").html(data.nickname.substring(0, 1));
                                $(".weTalkDeInfoAvatar").html(data.nickname.substring(0, 1));
                            }
                        } else {
                            console.log("非会员改名")
                            $(".weTalkNick").html(`${data.nickname}`)
                            $(".weTalkDefaultAvatar").html(data.nickname.substring(0, 1));
                            $(".weTalkDeInfoAvatar").html(data.nickname.substring(0, 1));

                            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkKthy").show();
                            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoLow").html(`${data.nickname}`).show();
                            $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoVip").hide();
                        }
                    } else if (res.code == 44444) {
                        showTip("昵称不能超过14个字符（中文算2个字符）")
                    }
                })
            }
        })
    }

    // 关闭广告
    function closeAd() {
        $(".weTalkAd").css({ "display": "none" });
        $(".weTalkChatList").css({ "height": "530px" })
    }


    // 发起私聊 总入口
    // senderId 发起私聊的用户Id  
    // addFriendType 添加到会话列表时1为不选中，2为选中
    // isPassive 添加到回话列表时1为被动添加，0为主动添加
    function addUserMethod(senderId, addFriendType, isPassive) {
        // 判断是否需要重新加载
        if (data.friendId == senderId) {
            console.log("不需要加载");
            return;
        }
        // 输入框为私人
        data.isPublic = 0;
        // 判断会话列表是否存在该用户
        let isHas = false;
        // 如果会话列表存在该用户，就向该用户发起私聊
        for (let i = 0; i < data.weTalkPerList.length; i++) {
            if (senderId == data.weTalkPerList[i].userId) {
                let user;
                let userId = data.weTalkPerList[i].userId;
                let userIndex = i;
                let username = data.weTalkPerList[i].nickname;
                let associateId = data.weTalkPerList[i].id;
                $(".weTalkChatItemList").children().each(function () {
                    if ($(this).attr("data-id") == userId) {
                        // console.log("this", $(this))
                        user = $(this);
                    }
                })
                launchPersonalChat(user, userId, userIndex, username, associateId);
                isHas = true;
                break;
            }
        }
        // console.log("isHas", isHas)
        // 如果会话列表里不存在该用户，就将该用户添加到用户列表中
        if (!isHas) {
            addUser(senderId, data.token).then(res => {
                if (res.code == 1) {
                    let obj = {};
                    obj.addFriendType = addFriendType;
                    obj.records = [];
                    obj.load = false;
                    obj.id = res.data.id;
                    obj.userId = res.data.userId;
                    obj.nickname = res.data.nickname;
                    obj.avatarDefault = res.data.nickname.substring(0, 1);
                    obj.sex = res.data.sex;
                    obj.vip = res.data.vip;
                    obj.isUsers = true;
                    obj.UnReadNum = 0;
                    obj.avatar = res.data.avatar;
                    // 是否主动添加
                    if (isPassive == 0) {
                        obj.UnReadNum = 0;
                    } else {
                        obj.UnReadNum = 1;
                        obj.ispassive = true;
                        data.isHasThisFriend = false;
                    }
                    data.weTalkPerList.unshift(obj);
                    // console.log(obj);
                    obj = {};
                    // 渲染会话列表
                    showPersonalList();
                    loadSessionContent(data.passiveChatContent, 0);
                } else if (res.code == 10007) {
                    showTip("用户被拉黑")
                }
            })
        }
    };

    // 添加群聊到会话中
    function addQlMethod(websiteId, addFriendType) {
        let isHas = false;
        for (let i = 0; i < data.weTalkPerList.length; i++) {
            if (data.weTalkPerList[i].isUsers == false) {
                if (websiteId == data.weTalkPerList[i].websiteId) {
                    console.log("找到了对应的会话中的聊天室")
                    // console.log("websiteId", websiteId, data.websiteId)
                    if (websiteId == data.websiteId) {
                        // 隐藏
                        $(".weTalkRightItem").hide();
                        $(".weTalkRightMain").show();
                        $(".weTalkUsers").show();
                        $(".weTalkChatMain").html("");
                        data.websiteIndex = i;
                        data.websiteId = websiteId;
                        $(".weTalkChatItemList").children().each(function () {
                            // console.log("webId比较", $(this)[0], $(this).attr("data-id"), data.websiteId)
                            if ($(this).attr("data-websiteid") == data.websiteId) {
                                $(this).attr("data-ischoosed", "b");
                                $(this).css({ background: "#e5ddff" });
                                // $(this).children('.weTalkRemoveUser2').hide();
                                $(this).children('.weTalkRemoveUser1').hide();
                                $(this).children(".weTalkNewsRecords").hide();
                                $(this).children(".weTalkYjOptions").hide();
                                $(this).children(".weTalkNewsRecords").html("");
                                data.weTalkPerList[data.websiteIndex].UnReadNum = 0;

                                $(this).siblings().attr("data-ischoosed", "a");
                                $(this).siblings().children(".weTalkYjOptions").hide();
                                $(this).siblings().css({ background: "#fff" });
                                // $(this).siblings().children('.weTalkRemoveUser2').hide();
                                $(this).siblings().children('.weTalkRemoveUser1').hide();
                            }
                        })
                        if (data.weTalkPerList[i].records) {
                            data.weTalkPerList[i].records.forEach((item, index) => {
                                if (item.messageType == 1 || item.messageType == 2) {
                                    if (item.messageType == 2) {
                                        item.img = item.content;
                                    }
                                    item.content = disposeText(item)
                                }
                                item.nickname = item.senderNickname;
                                // loadRecords(item, index);
                                loadRecordFin(item, index, false)
                            })
                            // recordsPoolOpe();
                            isHas = true;
                            break;
                        }
                    } else {
                        console.log("当前选中的聊天室不是它时就执行")
                        isHas = true;
                        changeRoomRequest(websiteId, false)
                    }
                }
            }
        }
        if (!isHas) {
            console.log("会话没有时才执行")
            addWebsite(websiteId, data.token).then(res => {
                let obj = {};
                obj.addFriendType = addFriendType;
                obj.records = [];
                obj.load = false;
                obj.id = res.data.id;
                obj.websiteId = res.data.websiteId;
                obj.title = res.data.title;
                obj.isUsers = false;
                obj.UnReadNum = 0;
                data.weTalkPerList.push(obj);
                showPersonalList();
                data.websiteId = obj.websiteId;
                // console.log("websiteId", obj.websiteId)
                changeRoomRequest(data.websiteId, false)
            })
        }
    }

    // 加为好友
    function addFriendRequest(obj) {
        console.log("obj", obj)
        addFriend(data.friendId, data.token).then(res => {
            if (res.code == 1) {
                showTip("添加成功");
                // 判断当前的聊天框是否为该好友的聊天框
                console.log("会话列表", data.weTalkPerList)
                let associateId;
                for (let i = 0; i < data.weTalkPerList.length; i++) {
                    if (data.weTalkPerList[i].userId == data.friendId) {
                        associateId = data.weTalkPerList[i].id;
                        break;
                    }
                }
                if ($(".weTalkChatMainHeadP").attr("data-id") == associateId) {
                    $(".weTalkChatMainHeadEventP").html("解除好友").off("click").on("click", function () {
                        removeFriendRequestByChat(data.friendId);
                    })
                }
                obj.hide();

            }
        })
    }

    // 从个人信息里加为好友
    function addFriendRequestInfo(userId) {
        $("#friendBtn").css("pointer-events", "none")
        addFriend(userId, data.token).then(res => {
            if (res.code == 1) {
                $(".weTalkLhSuc").html("添加成功").show();
                $(".weTalkOtherInfo").children("#friendBtn").html("解除好友")
                let associateId;
                for (let i = 0; i < data.weTalkPerList.length; i++) {
                    if (data.weTalkPerList[i].userId == data.friendId) {
                        associateId = data.weTalkPerList[i].id;
                        break;
                    }
                }
                if ($(".weTalkChatMainHeadP").attr("data-id") == associateId) {
                    $(".weTalkChatMainHeadEventP").html("解除好友").off("click").on("click", function () {
                        removeFriendRequestByChat(data.friendId);
                    })
                }
                setTimeout(function () {
                    $(".weTalkLhSuc").hide().html("");
                }, 3000)
                let obj = JSON.parse(JSON.stringify(res.data));
                obj.friendUserId = obj.userId;
                data.weTalkFriendList.push(obj);
                $("#friendBtn").css("pointer-events", "auto")
            } else if (res.code == 10007) {
                $(".weTalkLhSuc").html("用户被拉黑").show();
                setTimeout(function () {
                    $(".weTalkLhSuc").hide().html("");
                }, 3000)
                $("#friendBtn").css("pointer-events", "auto")
            }
        })
    }

    // 从个人信息里删除好友
    function removeFriendRequest(userId) {
        $("#friendBtn").css("pointer-events", "none")
        let removeId, isHas = false, index = -1;
        for (let i = 0; i < data.weTalkFriendList.length; i++) {
            if (data.weTalkFriendList[i].friendUserId == userId) {
                removeId = data.weTalkFriendList[i].id;
                isHas = true;
                index = i;
                break;
            }
        }
        if (isHas) {
            removeFriend(removeId, data.token).then(res => {
                if (res.code == 1) {
                    $(".weTalkLhSuc").html("删除好友成功").show();
                    $(".weTalkOtherInfo").children("#friendBtn").html("加为好友")
                    let associateId;
                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                        if (data.weTalkPerList[i].userId == data.friendId) {
                            associateId = data.weTalkPerList[i].id;
                            break;
                        }
                    }
                    if ($(".weTalkChatMainHeadP").attr("data-id") == associateId) {
                        $(".weTalkChatMainHeadEventP").html("加为好友").off("click").on("click", function () {
                            addFriendRequestByChat(data.friendId);
                        })
                    }
                    setTimeout(function () {
                        $(".weTalkLhSuc").hide().html("");
                    }, 3000)
                    data.weTalkFriendList.splice(index, 1);
                    $("#friendBtn").css("pointer-events", "auto")
                    isHas = false;
                    index = -1;
                }
            })
        } else {
            $(".weTalkLhSuc").html("该用户不在您好友列表中").show();
            setTimeout(function () {
                $(".weTalkLhSuc").hide().html("");

            }, 3000)
            $("#friendBtn").css("pointer-events", "auto");
        }
    }

    // 从聊天框删除好友
    function removeFriendRequestByChat(removeId) {
        let id;
        for (let i = 0; i < data.weTalkFriendList.length; i++) {
            if (data.weTalkFriendList[i].friendUserId == removeId) {
                id = data.weTalkFriendList[i].id;
                break;
            }
        }
        removeFriend(id, data.token).then(res => {
            if (res.code == 1) {
                showTip("删除成功");
                $(".weTalkChatMainHeadEventP").html("添加好友").off("click").on("click", function () {
                    addFriendRequestByChat(data.friendId);
                });
            }
        })
    }

    // 从聊天框加为好友
    function addFriendRequestByChat(removeId) {
        addFriend(removeId, data.token).then(res => {
            if (res.code == 1) {
                showTip("添加成功");
                $(".weTalkChatMainHeadEventP").html("解除好友").off("click").on("click", function () {
                    removeFriendRequestByChat(data.friendId);
                });
            }else if(res.code == 10007){
                showTip("用户已将您拉黑")
            }
        })
    }

    // 将群聊加入收藏
    function addFavoriteRequest() {
        addFavorite(data.websiteId, data.token).then(res => {
            if (res.code == 1) {
                showTip("收藏成功")
                $(".weTalkChatMainHeadEvent").html("取消收藏").off("click").on("click", function () {
                    removeFavoriteRequest(data.websiteId, data.token);
                })
            }
        })
    }

    // 加载某条聊天记录(已废弃)
    function loadRecord(item, index) {
        // 滚动条位于最底部
        if (scrollBottom($(".weTalkChatMain"))) {
            // console.log("进去了")
            data.canScroll = true;
            // console.log("修改完", data.canScroll)
        }
        if (item.nickname) {
            item.avatarDefault = item.nickname.substring(0, 1);
        }
        // 加载他人的聊天记录
        if (item.senderId != data.id) {
            let otherChatRecord = $(`
                  <div class="weTalkChatOther">
                      <div class="weTalkChatOtherAvatarArr">
                        <div class="weTalkDefaultAvatar">${item.avatarDefault}</div>
                        <img class="weTalkChatOtherAvatar">
                      </div>
                      <div class="weTalkChatOtherRight">
                        <div class="weTalkChatOtherRightTransmit weTalkPointer">转发</div>
                        <div class="weTalkChatOtherInfo">
                          <img class="weTalkChatOtherSex">
                          <div class="weTalkChatFont">${item.nickname}</div>
                          <div class="weTalkChatMemberFont">${item.nickname}</div>
                        </div>
                        <div class="weTalkChatOtherContent"></div>
                      </div>
                    </div>
                  `)


            if (item.avatar) {
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkChatOtherAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkDefaultAvatar").css("display", "none");
            } else {
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkChatOtherAvatar").hide();
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkDefaultAvatar").css("display", "block")
            }



            let weTalkChatOtherContent = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherContent")
            // console.log("渲染时item", item)
            switch (item.messageType) {
                case 1:
                    if (item.at) {
                        otherChatRecord.attr("data-at", item.at)
                    }
                    weTalkChatOtherContent.html("").append(item.content)
                    weTalkChatOtherContent.children("img").each(function () {
                        $(this).attr({ "class": "weTalkDisEmoj" })
                    })
                    weTalkChatOtherContent.children("span").children("img").each(function () {
                        $(this).attr({ "class": "weTalkDisEmoj" })
                    })
                    break;
                case 2:
                    weTalkChatOtherContent.attr("class", "weTalkChatOtherContent weTalkPointer");
                    weTalkChatOtherContent.css("background", "#fff")
                    weTalkChatOtherContent.html(`${item.content}`).hide()
                    otherChatRecord.attr({ "data_img": item.img });

                    getImageInfo(weTalkChatOtherContent.children(".weTalkRecordsImg").attr("src"), function (width, height) {
                        imgResize(200, width, height);
                        weTalkChatOtherContent.children(".weTalkRecordsImg").width(squareW)
                        weTalkChatOtherContent.children(".weTalkRecordsImg").height(squareH)
                        weTalkChatOtherContent.show();
                        if (scrollBottom($(".weTalkChatMain"))) {
                            data.canScroll = true;
                        }
                        otherChatRecord.appendTo($(".weTalkChatMain"));
                        if (data.canScroll) {
                            $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                        }
                        // recordPoolOpe();

                        // 点击图片放大
                        weTalkChatOtherContent.off("click").on("click", function () {
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-width", $(window).width() - 50)
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-height", $(window).height() - 50)
                            $(".weTalkImgPreview").show().children(".weTalkImgPreviewImg").attr("src", weTalkChatOtherContent.children(".weTalkRecordsImg").attr("src"));
                            $(".weTalkOverCover").show();
                        })
                    })
                    break;
                case 4:
                    weTalkChatOtherContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/timg.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 6:
                    weTalkChatOtherContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/paoyingbi.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 5:
                    weTalkChatOtherContent.html(`
                  <img class="weTalkGameGif">
                  <img class="weTalkGameRes">
                `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/shitoujiandaobu.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
            }
            // 添加自定义属性
            otherChatRecord.attr({ "data_nickname": item.nickname })
            otherChatRecord.attr({ "data_index": index })
            otherChatRecord.attr({ "data_vip": item.vip })
            otherChatRecord.attr({ "data_userId": item.senderId })
            // console.log("data_avatar", item.avatar)
            otherChatRecord.attr({ "data_avatar": item.avatar })

            weTalkChatOtherContent.attr({ "data_messageType": item.messageType })

            let otherChatRecordInfo = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherInfo");

            if (item.vip == 1 || item.vip == true) {

                otherChatRecordInfo.children(".weTalkChatFont").hide()
                otherChatRecordInfo.children(".weTalkChatMemberFont").css({ "display": "block" });
            }

            if (item.sex == 1) {
                otherChatRecord.attr({ "data_sex": 1 })
                otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": './images/boy.png' })
            } else if (item.sex == 2) {
                otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": './images/girl.png' })
            } else if (item.sex == undefined || item.sex == 0) {
                otherChatRecordInfo.children(".weTalkChatOtherSex").hide();
            }

            if (item.messageType != 2) {
                otherChatRecord.appendTo($(".weTalkChatMain"));
            }

            // 加载自己的聊天记录
        } else {
            let myChatRecord = $(`
                  <div class="weTalkChatSelf">
                            <div class="weTalkChatSelfLeft">
                              <div class="weTalkChatSelfLeftTransmit weTalkPointer">转发</div>
                              <div class="weTalkChatSelfInfo">
                                <div class="weTalkChatSelfInfoLeft"></div>
                                <div class="weTalkChatSelfInfoRight">
                                    <img class="weTalkChatSelfSex" src="./images/boy.png" alt="">
                                    <span class="weTalkChatFont">${data.nickname}</span>
                                    <span class="weTalkChatMemberFont">${data.nickname}</span>
                                </div>
                              </div>
                              <div class="weTalkChatSelfContent">${item.content}</div>
                            </div>
                            <img class="weTalkChatSelfAvatar">
                            <div class="weTalkDefaultAvatar">${item.avatarDefault}</div>
                          </div>
                  `)


            if (!(item.avatar)) {
                myChatRecord.children(".weTalkChatSelfAvatar").hide();
                myChatRecord.children(".weTalkDefaultAvatar").css("display", "block")
            } else {
                myChatRecord.children(".weTalkChatSelfAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
                myChatRecord.children(".weTalkDefaultAvatar").css("display", "none");
            }


            let weTalkChatSelfContent = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent")
            switch (item.messageType) {
                case 1:
                    if (item.at) {
                        myChatRecord.attr("data-at", item.at)
                    }
                    // console.log("测试", item.content, /\[at\]/g.test(item.content))
                    if (/\[at\]/g.test(item.content)) {
                        item.content = item.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                    }
                    // console.log("data.aid", data.aid)
                    weTalkChatSelfContent.html("").append(item.content)
                    weTalkChatSelfContent.children("img").each(function () {
                        $(this).attr({ "class": "weTalkDisEmoj" })
                    })
                    weTalkChatSelfContent.children("span").children("img").each(function () {
                        $(this).attr({ "class": "weTalkDisEmoj" })
                    })
                    break;
                case 2:

                    weTalkChatSelfContent.html(`${item.content}`).hide();
                    weTalkChatSelfContent.attr("class", "weTalkChatSelfContent weTalkPointer");
                    weTalkChatSelfContent.css("background", "#fff")
                    myChatRecord.attr({ "data_img": item.img });
                    // console.log("进图片", data.canScroll)
                    // console.log("渲染时", item.img)

                    getImageInfo(weTalkChatSelfContent.children(".weTalkRecordsImg").attr("src"), function (width, height) {
                        // 在这里面使用
                        imgResize(200, width, height);
                        weTalkChatSelfContent.children(".weTalkRecordsImg").width(squareW)
                        weTalkChatSelfContent.children(".weTalkRecordsImg").height(squareH)
                        weTalkChatSelfContent.show();
                        if (scrollBottom($(".weTalkChatMain"))) {
                            data.canScroll = true;
                        }
                        myChatRecord.appendTo($(".weTalkChatMain"));
                        if (data.canScroll) {
                            $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                        }
                        // recordPoolOpe();

                        // 点击图片放大
                        weTalkChatSelfContent.off("click").on("click", function () {
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-width", $(window).width() - 50)
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-height", $(window).height() - 50)
                            $(".weTalkImgPreview").show().children(".weTalkImgPreviewImg").attr("src", weTalkChatSelfContent.children(".weTalkRecordsImg").attr("src"));
                            $(".weTalkOverCover").show();
                        })
                    })
                    break;
                case 4:
                    weTalkChatSelfContent.html(`
                        <img class="weTalkGameGif">
                        <img class="weTalkGameRes">
                      `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/timg.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 6:
                    weTalkChatSelfContent.html(`
              <img class="weTalkGameGif">
              <img class="weTalkGameRes">
            `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/paoyingbi.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 5:
                    weTalkChatSelfContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/shitoujiandaobu.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
            }
            // 添加自定义属性
            weTalkChatSelfContent.attr({ "data_messageType": item.messageType })
            myChatRecord.attr({ "data_vip": item.vip })
            myChatRecord.attr({ "data_index": index })


            let myChatRecordInfo = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfInfo");

            if (item.vip == 1 || item.vip == true) {
                myChatRecordInfo.children(".weTalkChatSelfInfoRight").children(".weTalkChatFont").hide()
                myChatRecordInfo.children(".weTalkChatSelfInfoRight").children(".weTalkChatMemberFont").css("display", "inline-block");
            }

            if (item.sex == 1) {
                myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": './images/boy.png' })
            } else if (item.sex == 2) {
                myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": './images/girl.png' })
            } else if (item.sex == 0 || item.sex == undefined) {
                myChatRecordInfo.children(".weTalkChatSelfSex").hide();
            }

            if (item.messageType != 2) {
                myChatRecord.appendTo($(".weTalkChatMain"));
            }
        }
        if (data.canScroll) {
            console.log("有没有进这个滚动条行进至最后")
            $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
            data.canScroll = false;
        }
    }

    // 加载某条聊天记录的聊天交互（已废弃）
    function recordPoolOpe() {
        // 右键转发他人的话,左键私聊、举报、拉黑
        let weTalkChatOther = $(".weTalkChatMain").children(".weTalkChatOther").last();
        // 左键事件
        let userId = weTalkChatOther.attr("data_userId")
        weTalkChatOther.children(".weTalkChatOtherAvatarArr").off("click").on("click", function (e) {
            // console.log("点击头像")
            e.stopPropagation()
            e.preventDefault()
            showOtherInfo(userId);
        })

        // 右键事件
        // 转发他人的话
        weTalkChatOther.off("contextmenu").on("contextmenu", function (e) {
            // 获取需要转发的对话
            data.transmitSetence = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").html();
            data.messageType = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").attr("data_messageType");
            if (data.messageType == 1) {
                // console.log("转发的话", data.transmitSetence)
                if ($(this).attr("data-at")) {
                    if ($(data.transmitSetence).children("a").length > 0) {
                        return;
                    }
                }
                if ($(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").children("img").length > 0) {
                    let emoj = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").children("img");
                    emoj.each(function () {
                        data.emojzfArr.push($(this).attr("src").substring(emoj.attr("src").indexOf(".png") - 2, $(this).attr("src").indexOf(".png")));
                    })
                }
            }
            if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                return;
            }
            if (data.messageType == 2) {
                data.transferImg = $(this).attr("data_index");
            }
            // 获取转发按钮节点
            let thatzf = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
            let thatjb = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport");
            e.preventDefault()
            if (thatzf.css("display") != "none") {
                thatzf.hide();
                thatjb.hide();
            } else {
                thatzf.show();
                thatjb.show();
                $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
                $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport").hide();
                $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
            }
            // 点击转发按钮事件
            let transmitBtn = weTalkChatOther.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
            transmitBtn.off("click").on("click", function () {
                // console.log("点击转发事件");
                // 默认添加会话
                zfSwitchSession();
                // 切换会话
                $(".weTalkZfSwitchSession").off("click").on("click", zfSwitchSession);
                // 切换好友
                $(".weTalkZfSwitchFriend").off("click").on("click", zfSwitchFriend)
                $(".weTalkTransmit").show();
                transmitBtn.hide();
                transmitBtn.siblings(".weTalkChatOtherRightReport").hide()
            })
        })


        let weTalkChatSelf = $(".weTalkChatMain").children(".weTalkChatSelf").last();
        // console.log("weTalkChatSelf", weTalkChatSelf[0])
        // 转发自己的话
        // 右键事件
        weTalkChatSelf.off("contextmenu").on("contextmenu", function (e) {
            // console.log("需要转发的话", data.transmitSetence, data.messageType)
            // 获取需要转发的对话
            data.transmitSetence = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").html();
            data.messageType = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").attr("data_messageType");
            if (data.messageType == 1) {
                // console.log("转发的话", data.transmitSetence)
                if ($(this).attr("data-at")) {
                    if ($(data.transmitSetence).children("a").length > 0) {
                        // console.log("没进去么")
                        return;
                    }
                }
                if ($(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").children("img").length > 0) {
                    let emoj = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").children("img");
                    emoj.each(function () {
                        data.emojzfArr.push($(this).attr("src").substring(emoj.attr("src").indexOf(".png") - 2, $(this).attr("src").indexOf(".png")));
                    })
                }
            }

            if (data.messageType == 2) {
                // console.log("赋值时", $(this)[0], $(this).attr("data_img"))
                data.transferImg = $(this).attr("data_index");
            }

            if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                return;
            }

            // 获取转发按钮节点
            let thatzf = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
            if (thatzf.css("display") != "none") {
                thatzf.hide();
            } else {
                thatzf.show();
                $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
            }
            e.preventDefault()
        })
        // 点击转发按钮事件
        let transmitBtn = weTalkChatSelf.children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
        transmitBtn.off("click").on("click", function () {
            // console.log("点击转发事件");
            // 默认添加会话
            zfSwitchSession();
            // 切换会话
            $(".weTalkZfSwitchSession").off("click").on("click", zfSwitchSession);
            // 切换好友
            $(".weTalkZfSwitchFriend").off("click").on("click", zfSwitchFriend)
            $(".weTalkTransmit").show();
            transmitBtn.hide();
        })

        // 取消并隐藏转发列表
        $(".weTalkTransmitbtn1").off("click").on("click", function () {
            $(".weTalkTransmitItemRight").prop("checked", false)
            $(".weTalkTransmit").hide();
        })
        // 确定并获取已选中的转发人
        $(".weTalkTransmitbtn2").off("click").on("click", function () {
            if (data.sendState) {
                let obj = {};
                $("input[type=checkbox][name=weTalkTransmitObj]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 0;
                        obj.value = $(this).val();
                        data.transmitChoosedArr.push(obj)
                        obj = {};
                        data.flag += 1;
                    }
                });
                $("input[type=checkbox][name=weTalkTransmitObjP]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 1;
                        obj.value = $(this).val();
                        data.transmitChoosedArr.push(obj)
                        obj = {};
                        data.flag += 1;
                    }
                });
                if (data.flag == 0) {
                    showTip("至少要选中一个！");
                    return;
                } else {
                    data.transmitChoosedArr.forEach((item, index) => {
                        let vip;
                        if (data.vip) {
                            vip = 1
                        } else {
                            vip = 0;
                        }
                        let transmitSetence;
                        if (data.messageType == 1) {
                            transmitSetence = data.transmitSetence
                            data.emojzfArr.forEach(item => {
                                transmitSetence = transmitSetence.replace(/<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/, `[emoj]${item}[/emoj]`);
                            })
                            // console.log("表情", transmitSetence)
                            data.emojzfArr = [];
                        }
                        if (data.messageType == 2) {
                            if (data.isPublic == 1) {
                                transmitSetence = $(`${data.chatPublicRecords[data.transferImg].content}`).attr("src").replace(data.cdn, "");
                            } else {
                                for (let i = 0; i < data.weTalkPerList.length; i++) {
                                    // console.log("id", data.friendId, data.weTalkPerList[i].userId)
                                    if (data.friendId == data.weTalkPerList[i].userId) {
                                        // console.log("id相等", $(`${data.weTalkPerList[i].records[data.transferImg].content}`))
                                        transmitSetence = $(`${data.weTalkPerList[i].records[data.transferImg].content}`).attr("src").replace(data.cdn, "");
                                        break;
                                    }
                                }
                            }
                        }

                        if (item.type == 1) {
                            let avatar;
                            if (data.avatar == null) {
                                avatar = "";
                            } else {
                                avatar = data.avatar;
                            }
                            data.socket.emit('PUBLIC',
                                {
                                    targetId: item.value,
                                    senderId: data.id,
                                    messageType: parseInt(data.messageType),
                                    content: transmitSetence,
                                    senderNickname: data.nickname,
                                    avatar: avatar,
                                    sex: data.sex,
                                    vip: vip
                                },
                                function (response) {
                                    console.log("response", response)
                                    if (response != 1) {
                                        console.log("发送异常")
                                        $(".weTalkChatMgc").show();
                                        setTimeout(function () {
                                            $(".weTalkChatMgc").hide();
                                        }, 3000)
                                    }
                                });
                        } else {

                            // console.log("私聊转发", {
                            //     targetId: item.value,
                            //     senderId: data.id,
                            //     messageType: parseInt(data.messageType),
                            //     content: transmitSetence
                            // })
                            data.socket.emit('PRIVATE',
                                {
                                    targetId: item.value,
                                    senderId: data.id,
                                    messageType: parseInt(data.messageType),
                                    content: transmitSetence
                                },
                                function (response) {
                                    // 处理自己发的私聊消息
                                    if (response == 1) {
                                        let obj = {
                                            targetId: item.value,
                                            senderId: data.id,
                                            messageType: parseInt(data.messageType),
                                            content: transmitSetence
                                        };

                                        // console.log("obj", obj.content)

                                        // if (obj.messageType == 1) {
                                        //     obj.content = disposeText(obj);
                                        // }
                                        obj.content = disposeText(obj);
                                        for (let j = 0; j < data.weTalkPerList.length; j++) {
                                            if (obj.targetId == data.weTalkPerList[j].userId) {
                                                data.weTalkPerList[j].records.push(obj);
                                                $(".weTalkChatItemList").children().each(function () {
                                                    if ($(this).attr("data-index") == j) {
                                                        // 转发默认为与该用户消息已读
                                                        data.socket.emit('SYSTEM', {
                                                            type: 1,
                                                            targetUserId: data.friendId
                                                        })
                                                        data.haveSend = true;
                                                        $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                                                        $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                                                        data.weTalkPerList[j].UnReadNum = 0;

                                                        if (data.weTalkPerList[j].records && data.weTalkPerList[j].records.length > 0) {
                                                            let record = JSON.parse(JSON.stringify(data.weTalkPerList[j].records[data.weTalkPerList[j].records.length - 1])),
                                                                content = record.content,
                                                                messageType = record.messageType,
                                                                curHour = getMyHour().h,
                                                                curMin = getMyHour().m,
                                                                user = "我：";
                                                            // 判断内容的类型
                                                            if (messageType == 1) {
                                                                content = disposeText(record);
                                                                // 截取第一个<br>之前的内容
                                                                if (content) {
                                                                    splitBr = content.indexOf("<br>");
                                                                    if (splitBr != -1) {
                                                                        content = content.substring(0, splitBr);
                                                                    }
                                                                }
                                                            }
                                                            else if (messageType == 2) {
                                                                content = "[图片]"
                                                            }
                                                            $(".weTalkChatItemList").children().each(function () {
                                                                if ($(this).attr("data-index") == j) {
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                                                                }
                                                            })
                                                        }
                                                    }
                                                });
                                                data.isHasThisFriend = true;
                                                break;
                                            }
                                        }

                                        if (!(data.isHasThisFriend)) {
                                            addUserMethod(obj.targetId, 1, 0);
                                        }

                                        if (data.friendId == item.value) {
                                            loadByFriendOne();
                                        }
                                    } else if (response == 2) {
                                        showTip("用户已将您拉黑")
                                    } else if (response == 0) {
                                        showTip("您发送的消息包含敏感词");
                                    }
                                });
                        }

                    })
                    // 初始化
                    $(".weTalkTransmitItemRight").prop("checked", false);
                    data.emojSrctransmitChoosedArr = [];
                    data.transmitChoosedArr = [];
                    data.flag = 0;
                    $(".weTalkTransmit").hide();
                }
                data.sendState = false;
                setTimeout(function () {
                    data.sendState = true;
                }, 5000)
            } else {
                showTip("请5秒以后再发送")
            }
        })
    };

    function loadByFriendOne() {
        data.isPublic = 0;
        let item = data.weTalkPerList[data.friendIndex].records[data.weTalkPerList[data.friendIndex].records.length - 1];
        let index = data.weTalkPerList[data.friendIndex].records.length - 1;
        item.addFriendType = 2;
        // if (item.messageType == 2) {
        //     item.img = item.content;
        //     disItem = JSON.parse(JSON.stringify(item))
        //     disItem.content = disposeText(disItem);
        //     disItem.addFriendType = 2;
        //     if (disItem.senderId == data.id) {
        //         disItem.nickname = data.nickname;
        //         disItem.avatar = data.avatar;
        //         disItem.sex = data.sex;
        //         disItem.vip = data.vip;
        //         disItem.avatarDefault = data.nickname.substring(0, 1)
        //     } else {
        //         for (let i = 0; i < data.weTalkPerList.length; i++) {
        //             if (disItem.senderId == data.weTalkPerList[i].userId) {
        //                 disItem.nickname = data.weTalkPerList[i].nickname;
        //                 disItem.avatar = data.weTalkPerList[i].avatar;
        //                 disItem.sex = data.weTalkPerList[i].sex;
        //                 disItem.vip = data.weTalkPerList[i].vip;
        //                 disItem.avatarDefault = data.weTalkPerList[i].nickname.substring(0, 1)
        //                 break;
        //             }
        //         }
        //     }
        //     loadRecord(disItem, index);
        //     // console.log("img", item.img)
        // } else {
        if (item.senderId == data.id) {
            item.nickname = data.nickname;
            item.avatar = data.avatar;
            item.sex = data.sex;
            item.vip = data.vip;
            item.avatarDefault = data.nickname.substring(0, 1)
        } else {
            for (let i = 0; i < data.weTalkPerList.length; i++) {
                if (item.senderId == data.weTalkPerList[i].userId) {
                    item.nickname = data.weTalkPerList[i].nickname;
                    item.avatar = data.weTalkPerList[i].avatar;
                    item.sex = data.weTalkPerList[i].sex;
                    item.vip = data.weTalkPerList[i].vip;
                    item.avatarDefault = data.weTalkPerList[i].nickname.substring(0, 1)
                    break;
                }
            }
        }
        // loadRecord(item, index);
        loadRecordFin(item, index, true);
        // }
        // recordPoolOpe();
    }

    // 加载聊天记录(已废弃)
    function loadRecords(item, index) {
        if (item.nickname) {
            item.avatarDefault = item.nickname.substring(0, 1);
        }
        if (item.senderId != data.id) {
            let otherChatRecord = $(`
                  <div class="weTalkChatOther">
                      <div class="weTalkChatOtherAvatarArr">
                        <div class="weTalkDefaultAvatar">${item.avatarDefault}</div>
                        <img class="weTalkChatOtherAvatar">
                      </div>
                      <div class="weTalkChatOtherRight">
                        <div class="weTalkChatOtherRightTransmit weTalkPointer">转发</div>
                        <div class="weTalkChatOtherInfo">
                          <img class="weTalkChatOtherSex">
                          <div class="weTalkChatFont">${item.nickname}</div>
                          <div class="weTalkChatMemberFont">${item.nickname}</div>
                        </div>
                        <div class="weTalkChatOtherContent"></div>
                      </div>
                    </div>
                  `)

            if (item.avatar) {
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkChatOtherAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkDefaultAvatar").css("display", "none");
            } else {
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkChatOtherAvatar").hide();
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkDefaultAvatar").css("display", "block");
            }



            let weTalkChatOtherContent = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherContent")
            switch (item.messageType) {
                case 1:
                    if (item.content instanceof jQuery) {
                        // console.log("是jquery对象")
                        weTalkChatOtherContent.html("").append(item.content);
                        otherChatRecord.attr("data-at", true)
                    } else {
                        if (/\[at\]/g.test(item.content)) {
                            item.content = item.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                            otherChatRecord.attr("data-at", true)
                        }
                        weTalkChatOtherContent.html("").append(item.content);
                        weTalkChatOtherContent.children("img").each(function () {
                            $(this).attr({ "class": "weTalkDisEmoj" })
                        })
                        weTalkChatOtherContent.children("span").children("img").each(function () {
                            $(this).attr({ "class": "weTalkDisEmoj" })
                        })
                    }
                    break;
                case 2:
                    weTalkChatOtherContent.attr("class", "weTalkChatOtherContent weTalkPointer");
                    weTalkChatOtherContent.css("background", "#fff")
                    weTalkChatOtherContent.html(`${item.content}`).hide();

                    getImageInfo(weTalkChatOtherContent.children(".weTalkRecordsImg").attr("src"), function (width, height) {
                        imgResize(200, width, height);
                        weTalkChatOtherContent.children(".weTalkRecordsImg").width(squareW)
                        weTalkChatOtherContent.children(".weTalkRecordsImg").height(squareH)
                        weTalkChatOtherContent.show();
                        $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);

                        // 点击图片放大
                        weTalkChatOtherContent.off("click").on("click", function () {
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-width", $(window).width() - 50)
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-height", $(window).height() - 50)
                            $(".weTalkImgPreview").show().children(".weTalkImgPreviewImg").attr("src", weTalkChatOtherContent.children(".weTalkRecordsImg").attr("src"));
                            $(".weTalkOverCover").show();
                        })
                    })
                    break;
                case 4:
                    weTalkChatOtherContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/timg.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 6:
                    weTalkChatOtherContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/paoyingbi.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 5:
                    weTalkChatOtherContent.html(`
                  <img class="weTalkGameGif">
                  <img class="weTalkGameRes">
                `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/shitoujiandaobu.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
            }
            // 添加自定义属性
            otherChatRecord.attr({ "data_nickname": item.nickname })
            otherChatRecord.attr({ "data_index": index })
            otherChatRecord.attr({ "data_vip": item.vip })
            otherChatRecord.attr({ "data_userId": item.senderId })
            otherChatRecord.attr({ "data_avatar": item.avatar })
            weTalkChatOtherContent.attr({ "data_messageType": item.messageType })


            let otherChatRecordInfo = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherInfo");

            if (item.vip == 1 || item.vip == true) {
                otherChatRecordInfo.children(".weTalkChatFont").hide()
                otherChatRecordInfo.children(".weTalkChatMemberFont").css({ "display": "block" });
            }

            if (item.sex == 1) {
                otherChatRecord.attr({ "data_sex": 1 })
                otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": './images/boy.png' })
            } else if (item.sex == 2) {
                otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": './images/girl.png' })
            } else if (item.sex == undefined || item.sex == 0) {
                otherChatRecordInfo.children(".weTalkChatOtherSex").hide();
            }
            otherChatRecord.appendTo($(".weTalkChatMain"));
        } else {
            let myChatRecord = $(`
                    <div class="weTalkChatSelf">
                            <div class="weTalkChatSelfLeft">
                              <div class="weTalkChatSelfLeftTransmit weTalkPointer">转发</div>
                              <div class="weTalkChatSelfInfo">
                                <div class="weTalkChatSelfInfoLeft"></div>
                                <div class="weTalkChatSelfInfoRight">
                                    <img class="weTalkChatSelfSex" src="./images/boy.png" alt="">
                                    <span class="weTalkChatFont">${data.nickname}</span>
                                    <span class="weTalkChatMemberFont">${data.nickname}</span>
                                </div>
                              </div>
                              <div class="weTalkChatSelfContent">${item.content}</div>
                            </div>
                            <img class="weTalkChatSelfAvatar">
                            <div class="weTalkDefaultAvatar">${item.avatarDefault}</div>
                    </div>
                  `)

            if (!(item.avatar)) {
                myChatRecord.children(".weTalkChatSelfAvatar").hide();
                myChatRecord.children(".weTalkDefaultAvatar").css("display", "block");
            } else {
                myChatRecord.children(".weTalkChatSelfAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
                myChatRecord.children(".weTalkDefaultAvatar").css("display", "none");
            }


            let weTalkChatSelfContent = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent")
            switch (item.messageType) {
                case 1:
                    if (/\[at\]/g.test(item.content)) {
                        myChatRecord.attr("data-at", true)

                        item.content = item.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                    }
                    weTalkChatSelfContent.html("").append(item.content)
                    weTalkChatSelfContent.children("img").each(function () {
                        $(this).attr({ "class": "weTalkDisEmoj" })
                    })
                    weTalkChatSelfContent.children("span").children("img").each(function () {
                        $(this).attr({ "class": "weTalkDisEmoj" })
                    })
                    break;
                case 2:
                    weTalkChatSelfContent.html(`${item.content}`).hide();
                    weTalkChatSelfContent.attr("class", "weTalkChatSelfContent weTalkPointer");
                    weTalkChatSelfContent.css("background", "#fff")


                    getImageInfo(weTalkChatSelfContent.children(".weTalkRecordsImg").attr("src"), function (width, height) {
                        // 在这里面使用
                        imgResize(200, width, height);
                        weTalkChatSelfContent.children(".weTalkRecordsImg").width(squareW)
                        weTalkChatSelfContent.children(".weTalkRecordsImg").height(squareH)
                        weTalkChatSelfContent.show();
                        $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);

                        // 点击图片放大
                        weTalkChatSelfContent.off("click").on("click", function () {
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-width", $(window).width() - 50)
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-height", $(window).height() - 50)
                            console.log($(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-height"), $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-width"))
                            $(".weTalkImgPreview").show().children(".weTalkImgPreviewImg").attr("src", weTalkChatSelfContent.children(".weTalkRecordsImg").attr("src"));
                            $(".weTalkOverCover").show();
                        })
                    })
                    break;
                case 4:
                    weTalkChatSelfContent.html(`
                        <img class="weTalkGameGif">
                        <img class="weTalkGameRes">
                      `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/timg.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 6:
                    weTalkChatSelfContent.html(`
              <img class="weTalkGameGif">
              <img class="weTalkGameRes">
            `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/paoyingbi.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 5:
                    weTalkChatSelfContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/shitoujiandaobu.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
            }
            // 添加自定义属性
            weTalkChatSelfContent.attr({ "data_messageType": item.messageType })
            myChatRecord.attr({ "data_vip": item.vip })
            myChatRecord.attr({ "data_index": index })

            let myChatRecordInfo = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfInfo");

            if (item.vip == 1 || item.vip == true) {
                // console.log("我是vip")
                myChatRecordInfo.children(".weTalkChatSelfInfoRight").children(".weTalkChatFont").hide()
                myChatRecordInfo.children(".weTalkChatSelfInfoRight").children(".weTalkChatMemberFont").css({ "display": "inline-block" });
            }

            if (item.sex == 1) {
                myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": './images/boy.png' })
            } else if (item.sex == 2) {
                myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": './images/girl.png' })
            } else if (item.sex == 0 || item.sex == undefined) {
                myChatRecordInfo.children(".weTalkChatSelfSex").hide();
            }
            myChatRecord.appendTo($(".weTalkChatMain"));
        }
        $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
    };
    // 加载聊天记录（结束）

    // 加载聊天室聊天记录 
    function loadPublicRecords() {
        // console.log("直接加载默认聊天室记录")
        data.isPublic = 1;
        // 加载聊天室头
        $(".weTalkChatMainHead").show();
        buildRoomHead();
        if (data.chatPublicRecords) {
            $(".weTalkChatMain").html("");
            if (data.chatPublicRecords.length > 0) {
                data.chatPublicRecords.forEach((item, index) => {
                    item.nickname = item.senderNickname;
                    // loadRecords(item, index);
                    loadRecordFin(item, index, false)
                })
                // 加载交互
                // recordsPoolOpe();
            }
        }
        // $(".weTalkChatMain").html(``);
        // // 限制聊天框的消息条数为50
        // if (data.chatPublicRecords.length > 50) {
        //   data.chatPublicRecords.splice(0, data.chatPublicRecords.length - 50)
        // }
    }
    // 加载聊天室聊天记录（结束）

    // 加载单条聊天室记录
    function loadPublicRecord() {
        data.isPublic = 1;
        let item = data.chatPublicRecords[data.chatPublicRecords.length - 1];
        let index = data.chatPublicRecords.length - 1;
        // 添加私聊对象的方式
        // console.log("聊天室", item)
        item.addFriendType = 2;
        item.nickname = item.senderNickname;
        // 渲染聊天框
        // loadRecord(item, index);
        loadRecordFin(item, index, true)
        // 为聊天框添加交互
        // recordPoolOpe();
    }
    // 加载单条聊天室记录(结束)

    // 获取@信息
    function getAtInfo() {
        // console.log("isAtDone", data.isAtDone)
        $(".weTalkAtTip").each(function () {
            $(this).remove();
        })
        if (data.isAtDone) {
            $(".weTalkAtTip").each(function () {
                $(this).remove();
            })
            data.atArr.forEach(item => {
                item.appendTo(".weTalkChatMain");
                item.off("click").on("click", function () {
                    data.isAtDone = false;
                    $(".weTalkAtWo").hide();
                    data.atArr = [];
                    setTimeout(function () {
                        item.remove();
                        $("#at").attr("id", "");
                    })
                })
            })
        }
    }

    // 点击某用户时加载与该用户聊天记录
    function loadByFriend(id, index) {
        data.isPublic = 0;
        if (!(data.weTalkPerList[index].load)) {
            $(".weTalkChatMain").html(`
          <div class="weTalkLoadRecord">
            <img class="weTalkLoadAni" src="./images/loading.png"/>
            <div class="weTalkLoadingTip">内容加载中，请稍等...</div>
          </div>
          `);
            $(".weTalkLoadRecord").css({ "visibility": "visible" })
            data.isLoadRecords = true;
            getPrivateLogRequest(id, data.token, index);
            data.weTalkPerList[index].load = true;
        } else {
            // console.log("friend", data.friendId)
            let associateId;
            for (let i = 0; i < data.weTalkPerList.length; i++) {
                if (data.friendId == data.weTalkPerList[i].userId) {
                    associateId = data.weTalkPerList[i].id;
                    break;
                }
            }
            // if (associateId == $(".weTalkChatMainHeadP").attr("data-id")) {
            //     console.log("是当前窗口")
            // } else {
            // console.log("不是当前窗口")
            if (data.weTalkPerList[index].records) {
                $(".weTalkChatMain").html("");
                if (data.weTalkPerList[index].records.length > 0) {
                    data.weTalkPerList[index].records.forEach((item, dex) => {
                        let disItem = JSON.parse(JSON.stringify(item));
                        disItem.addFriendType = 2;
                        if (disItem.senderId == data.id) {
                            disItem.nickname = data.nickname;
                            disItem.avatar = data.avatar;
                            disItem.sex = data.sex;
                            disItem.vip = data.vip;
                            disItem.avatarDefault = data.nickname.substring(0, 1)
                        } else {
                            for (let i = 0; i < data.weTalkPerList.length; i++) {
                                if (disItem.senderId == data.weTalkPerList[i].userId) {
                                    disItem.nickname = data.weTalkPerList[i].nickname;
                                    disItem.avatar = data.weTalkPerList[i].avatar;
                                    disItem.sex = data.weTalkPerList[i].sex;
                                    disItem.vip = data.weTalkPerList[i].vip;
                                    disItem.avatarDefault = data.weTalkPerList[i].nickname.substring(0, 1)
                                    break;
                                }
                            }
                        }
                        // if (disItem.messageType == 1 || disItem.messageType == 2) {
                        //     disItem.content = disposeText(disItem)
                        // }
                        if (disItem.messageType == 2) {
                            disItem.img = item.content;
                        }
                        // loadRecords(disItem, dex);
                        loadRecordFin(disItem, dex, false)
                    })
                    // 加载交互
                    // recordsPoolOpe();
                }
            }
            // }

        }
        // $(".weTalkChatMain").html(``);
        // // 限制聊天框的消息条数为50
        // if (data.chatRecordsList.length > 50) {
        //   data.chatRecordsList.splice(0, data.chatRecordsList.length - 50)
        // }
    }
    // 点击某用户时加载与该用户聊天记录（结束）

    // 聊天交互(已废弃)
    function recordsPoolOpe() {
        // 右键转发他人的话,左键私聊、举报、拉黑
        $(".weTalkChatMain").children(".weTalkChatOther").each(function () {
            // 左键事件
            let userId = $(this).attr("data_userId")
            $(this).children(".weTalkChatOtherAvatarArr").off("click").on("click", function (e) {
                e.stopPropagation()
                e.preventDefault()
                showOtherInfo(userId)
            })
            // 右键事件
            // 转发他人的话
            $(this).off("contextmenu").on("contextmenu", function (e) {
                // 获取需要转发的对话
                data.transmitSetence = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").html();
                data.messageType = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").attr("data_messageType");

                if (data.messageType == 1) {
                    if (data.isPublic == 1) {
                        // console.log("dataAt", $(this).attr("data-at"))
                        if ($(this).attr("data-at")) {
                            if (data.transmitSetence instanceof jQuery) {
                                // console.log("jQuery对象")
                                if (data.transmitSetence.children("a").length > 0) {
                                    return;
                                }
                            }
                            if ($(`<span>${data.transmitSetence}</span>`).children("a").length > 0) {
                                // console.log("需要包span")
                                return;
                            }
                        }
                    }
                    if ($(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").children("img").length > 0) {
                        let emoj = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").children("img");
                        emoj.each(function () {
                            data.emojzfArr.push($(this).attr("src").substring(emoj.attr("src").indexOf(".png") - 2, $(this).attr("src").indexOf(".png")));
                        })
                    }
                }
                if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                    return;
                }
                if (data.messageType == 2) {
                    data.transferImg = $(this).attr("data_index");
                }

                // 获取转发按钮节点
                let thatzf = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
                let thatjb = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport");

                e.preventDefault()
                if (thatzf.css("display") != "none") {
                    thatzf.hide();
                    thatjb.hide();
                } else {
                    thatzf.show();
                    thatjb.show();
                    $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
                    $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                    $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport").hide();
                }
            })

            // 点击转发按钮事件
            let transmitBtn = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
            transmitBtn.off("click").on("click", function () {
                // console.log("点击转发事件");
                // 默认添加会话
                zfSwitchSession();
                // 切换会话
                $(".weTalkZfSwitchSession").off("click").on("click", zfSwitchSession);
                // 切换好友
                $(".weTalkZfSwitchFriend").off("click").on("click", zfSwitchFriend)
                $(".weTalkTransmit").show();
                transmitBtn.hide();
                transmitBtn.siblings(".weTalkChatOtherRightReport").hide()
            })
        })

        // 转发自己的话
        $(".weTalkChatMain").children(".weTalkChatSelf").each(function (index) {
            // 右键事件
            $(this).off("contextmenu").on("contextmenu", function (e) {
                // 获取需要转发的对话
                data.transmitSetence = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").html();
                data.messageType = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").attr("data_messageType");
                // console.log("需要转发的话", data.transmitSetence, data.messageType)
                if (data.messageType == 1) {
                    // console.log("trans", data.transmitSetence)
                    if (data.isPublic == 1) {
                        if ($(this).attr("data-at")) {
                            if ($(`<span>${data.transmitSetence}</span>`).children("a").length > 0) {
                                return;
                            }
                            if ($(data.transmitSetence).children("a").length > 0) {
                                return;
                            }
                            if (data.transmitSetence instanceof jQuery) {
                                if (data.transmitSetence.children("a").length > 0) {
                                    return;
                                }
                            }
                        }
                    }
                    if ($(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").children("img").length > 0) {
                        let emoj = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").children("img");
                        emoj.each(function () {
                            data.emojzfArr.push($(this).attr("src").substring(emoj.attr("src").indexOf(".png") - 2, $(this).attr("src").indexOf(".png")).trim());
                        })
                    }
                }
                if (data.messageType == 2) {
                    data.transferImg = $(this).attr("data_index");
                    // console.log("拿data_img", data.transferImg)
                }
                if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                    return;
                }
                // 获取转发按钮节点
                let thatzf = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
                if (thatzf.css("display") != "none") {
                    thatzf.hide();
                } else {
                    thatzf.show();
                    // console.log("transmitSetence",data.transmitSetence)
                    $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                    $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
                }
                e.preventDefault()
            })
            // 点击转发按钮事件
            let transmitBtn = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
            transmitBtn.off("click").on("click", function () {
                // 默认添加会话
                zfSwitchSession();
                // 切换会话
                $(".weTalkZfSwitchSession").off("click").on("click", zfSwitchSession);
                // 切换好友
                $(".weTalkZfSwitchFriend").off("click").on("click", zfSwitchFriend)
                $(".weTalkTransmit").show();
                transmitBtn.hide();
            })
        })
        // 取消并隐藏转发列表
        $(".weTalkTransmitbtn1").off("click").on("click", function () {
            $(".weTalkTransmitItemRight").prop("checked", false)
            $(".weTalkTransmit").hide();
        })
        // 确定并获取已选中的转发人
        $(".weTalkTransmitbtn2").off("click").on("click", function () {
            if (data.sendState) {
                let obj = {};
                $("input[type=checkbox][name=weTalkTransmitObj]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 0;
                        obj.value = $(this).val();
                        data.transmitChoosedArr.push(obj)
                        obj = {};
                        data.flag += 1;
                    }
                });
                $("input[type=checkbox][name=weTalkTransmitObjP]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 1;
                        obj.value = $(this).val();
                        data.transmitChoosedArr.push(obj)
                        obj = {};
                        data.flag += 1;
                    }
                });
                if (data.flag < 1) {
                    showTip("至少要选中一个！");
                    return;
                } else {
                    // 遍历数组发送消息
                    data.transmitChoosedArr.forEach((item, index) => {
                        let vip;
                        if (data.vip) {
                            vip = 1
                        } else {
                            vip = 0;
                        }
                        let transmitSetence;
                        if (data.messageType == 1) {
                            transmitSetence = data.transmitSetence
                            data.emojzfArr.forEach(item => {
                                transmitSetence = transmitSetence.replace(/<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/, `[emoj]${item}[/emoj]`);
                            })
                            data.emojzfArr = [];

                        }
                        if (data.messageType == 2) {
                            if (data.isPublic == 1) {
                                transmitSetence = $(`${data.chatPublicRecords[data.transferImg].content}`).attr("src").replace(data.cdn, "");
                            } else {
                                for (let i = 0; i < data.weTalkPerList.length; i++) {
                                    // console.log("id", data.friendId, data.weTalkPerList[i].userId)
                                    if (data.friendId == data.weTalkPerList[i].userId) {
                                        // console.log("id相等", $(`${data.weTalkPerList[i].records[data.transferImg].content}`))
                                        transmitSetence = $(`${data.weTalkPerList[i].records[data.transferImg].content}`).attr("src").replace(data.cdn, "");
                                        break;
                                    }
                                }
                            }
                        }
                        if (item.type == 1) {
                            // console.log("进去了吗", transmitSetence)
                            let avatar;
                            if (data.avatar == null) {
                                avatar = "";
                            } else {
                                avatar = data.avatar;
                            }
                            data.socket.emit('PUBLIC',
                                {
                                    targetId: item.value,
                                    senderId: data.id,
                                    messageType: parseInt(data.messageType),
                                    content: transmitSetence,
                                    senderNickname: data.nickname,
                                    avatar: avatar,
                                    sex: data.sex,
                                    vip: vip
                                },
                                function (response) {
                                    console.log("response", response)
                                    if (response != 1) {
                                        $(".weTalkChatMgc").show();
                                        setTimeout(function () {
                                            $(".weTalkChatMgc").hide();
                                        }, 3000)
                                        console.log("发送异常")
                                    }
                                });
                        } else {

                            // console.log("私聊转发", {
                            //     targetId: item.value,
                            //     senderId: data.id,
                            //     messageType: parseInt(data.messageType),
                            //     content: transmitSetence
                            // })
                            data.socket.emit('PRIVATE',
                                {
                                    targetId: item.value,
                                    senderId: data.id,
                                    messageType: parseInt(data.messageType),
                                    content: transmitSetence
                                },
                                function (response) {
                                    // 处理自己发的私聊消息
                                    if (response == 1) {
                                        let obj = {
                                            targetId: item.value,
                                            senderId: data.id,
                                            messageType: parseInt(data.messageType),
                                            content: transmitSetence
                                        };
                                        // if (obj.messageType == 1) {
                                        //     obj.content = disposeText(obj);
                                        // }
                                        obj.content = disposeText(obj);
                                        // 将转发的内容
                                        for (let j = 0; j < data.weTalkPerList.length; j++) {
                                            if (obj.targetId == data.weTalkPerList[j].userId) {
                                                data.weTalkPerList[j].records.push(obj);
                                                $(".weTalkChatItemList").children().each(function () {
                                                    if ($(this).attr("data-index") == j) {
                                                        // 转发默认为与该用户消息已读
                                                        data.socket.emit('SYSTEM', {
                                                            type: 1,
                                                            targetUserId: data.friendId
                                                        })
                                                        data.haveSend = true;
                                                        $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                                                        $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                                                        data.weTalkPerList[j].UnReadNum = 0;
                                                        if (data.weTalkPerList[j].records && data.weTalkPerList[j].records.length > 0) {
                                                            let record = JSON.parse(JSON.stringify(data.weTalkPerList[j].records[data.weTalkPerList[j].records.length - 1])),
                                                                content = record.content,
                                                                messageType = record.messageType,
                                                                curHour = getMyHour().h,
                                                                curMin = getMyHour().m,
                                                                user = "我：";
                                                            // 判断内容的类型
                                                            if (messageType == 1) {
                                                                content = disposeText(record);
                                                                // 截取第一个<br>之前的内容
                                                                if (content) {
                                                                    splitBr = content.indexOf("<br>");
                                                                    if (splitBr != -1) {
                                                                        content = content.substring(0, splitBr);
                                                                    }
                                                                }
                                                            }
                                                            else if (messageType == 2) {
                                                                content = "[图片]"
                                                            }
                                                            $(".weTalkChatItemList").children().each(function () {
                                                                if ($(this).attr("data-index") == j) {
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                                                                }
                                                            })
                                                        }
                                                    }
                                                });
                                                data.isHasThisFriend = true;
                                                break;
                                            }
                                        }
                                        // 转发的好友不在会话列表时，将它添加到会话列表中
                                        if (!(data.isHasThisFriend)) {
                                            addUserMethod(obj.targetId, 1, 0);
                                        }
                                        // 转发的人恰好为当前聊天的人
                                        if (data.friendId == item.value) {
                                            loadByFriendOne();
                                        }
                                    } else if (response == 2) {
                                        showTip("用户已将您拉黑")
                                    } else if (response == 0) {
                                        showTip("您发送的消息包含敏感词");
                                    }
                                });
                        }

                    })
                    // 初始化
                    $(".weTalkTransmitItemRight").prop("checked", false);
                    data.emojSrctransmitChoosedArr = [];
                    data.transmitChoosedArr = [];
                    data.flag = 0;
                    $(".weTalkTransmit").hide();
                }
                data.sendState = false;
                setTimeout(function () {
                    data.sendState = true;
                }, 5000)
            } else {
                showTip("请5秒以后再发送")
            }
        })
    };
    // 聊天交互（结束）

    // 拉黑
    function blockUserRequest(obj) {
        blockUser(data.friendId, data.token).then(res => {
            if (res.code == 1) {
                getSessionList();
                showTip("拉黑成功");
            }
        })
    }

    // 个人信息里的拉黑
    function blockUserRequestInfo(userId) {
        blockUser(userId, data.token).then(res => {
            if (res.code == 1) {
                $(".weTalkLhSuc").html("拉黑成功").show();
                $(".weTalkOtherInfo").children("#lhBtn").html("移出黑名单")
                $(".weTalkOtherInfo").children("#friendBtn").html(`加为好友`)
                setTimeout(function () {
                    $(".weTalkLhSuc").hide().html("");
                }, 3000)
            }
        })
    }

    // 个人信息里的取消拉黑
    function unblockRequestInfo(userId) {
        unblock(userId, data.token).then(res => {
            if (res.code == 1) {
                $(".weTalkLhSuc").html("取消拉黑成功").show();
                $(".weTalkOtherInfo").children("#lhBtn").html("加入黑名单")
                $(".weTalkOtherInfo").children("#friendBtn").html(`加为好友`)
                setTimeout(function () {
                    $(".weTalkLhSuc").hide().html("");
                }, 3000)
            }
        })
    }

    // 插入表情
    function _insertimg(str) {
        var selection = window.getSelection ? window.getSelection() : document.selection;
        var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        if (!window.getSelection) {
            $('#weTalkChatFrame').focus();
            range.pasteHTML(str);
            range.collapse(false);
            range.select();
        } else {
            $('#weTalkChatFrame').focus();
            range.collapse(false);
            var hasR = range.createContextualFragment(str);
            var hasR_lastChild = hasR.lastChild;

            while (hasR_lastChild && hasR_lastChild.nodeName.toLowerCase() == "br" && hasR_lastChild.previousSibling && hasR_lastChild.previousSibling.nodeName.toLowerCase() == "br") {
                var e = hasR_lastChild;
                hasR_lastChild = hasR_lastChild.previousSibling;
                hasR.removeChild(e)
            }
            range.insertNode(hasR);
            if (hasR_lastChild) {
                range.setEndAfter(hasR_lastChild);
                range.setStartAfter(hasR_lastChild)
            }
            selection.removeAllRanges();
            selection.addRange(range)
        }
    }

    // 打开移除对话框
    function openRemoveDiag() {
        $(".weTalkRemoveDiag").show()
        data.RemoveFood = $(this).parent().attr("data-associateId");
        data.removeIndex = $(this).parent().attr("data-index");
        data.removeFriendId = $(this).parent().attr("data-id");
        $(".weTalkRemoveDiagbtn1").off("click").on("click", function () {
            $(".weTalkRemoveDiag").hide()
        });
        $(".weTalkRemoveDiagbtn2").off("click").on("click", function () {
            removeUserRequest(data.RemoveFood, data.token);
        });
        event.stopPropagation();
    }

    function openRemoveDiagRoom() {
        $(".weTalkRemoveDiag").show()
        data.RemoveFood = $(this).parent().attr("data-id");
        data.removeIndex = $(this).parent().attr("data-index");
        data.removeWebsiteId = $(this).parent().attr("data-websitId");

        $(".weTalkRemoveDiagbtn1").off("click").on("click", function () {
            $(".weTalkRemoveDiag").hide()
        });
        $(".weTalkRemoveDiagbtn2").off("click").on("click", function () {
            removeRoomRequest(data.RemoveFood, data.token);
        });
        event.stopPropagation();
    }

    // 右键打开移除对话框

    // 私聊
    function yjopenRemoveDiag(obj) {
        $(".weTalkRemoveDiag").show()
        data.RemoveFood = obj.attr("data-associateId");
        data.removeIndex = obj.attr("data-index");
        data.removeFriendId = obj.attr("data-id");
        $(".weTalkRemoveDiagbtn1").off("click").on("click", function () {
            $(".weTalkRemoveDiag").hide()
        });
        $(".weTalkRemoveDiagbtn2").off("click").on("click", function () {
            removeUserRequest(data.RemoveFood, data.token);
        });
        event.stopPropagation();
    }

    // 群聊
    function yjopenRemoveQlDiag(obj) {
        $(".weTalkRemoveDiag").show()
        data.RemoveFood = obj.attr("data-id");
        data.removeIndex = obj.attr("data-index");
        $(".weTalkRemoveDiagbtn1").off("click").on("click", function () {
            $(".weTalkRemoveDiag").hide()
        });
        $(".weTalkRemoveDiagbtn2").off("click").on("click", function () {
            removeRoomRequest(data.RemoveFood, data.token);
        });
        event.stopPropagation();
    }


    // 打开移除对话框（结束）

    //不对图片进行压缩
    function directTurnIntoBase64(currentfile, callback) {
        var r = new FileReader();
        //转成base64
        r.onload = function () {
            imgBase64 = r.result;
            callback(imgBase64)
        }
        r.readAsDataURL(currentfile);//转成base64格式
    }

    //对图片进行压缩
    // 从尺寸+系数压缩 改成了系数压缩（可能会对头像压缩造成影响，头像压缩未考虑压缩文件大小问题）
    function compress(currentfile, callback) {
        console.log("file",currentfile)
        if (typeof (FileReader) === 'undefined') {
            console.log("当前浏览器内核不支持base64图片压缩")
            directTurnIntoBase64(currentfile, callback);
        } else {
            try {
                console.log("压缩了")
                // 获取图片的原始大小
                let picNatW, picNatH, picWeight;
                getImageInfo(URL.createObjectURL(currentfile), function (width, height) {
                    // 在这里面使用
                    picNatW = width;    //图片的原始宽度
                    picNatH = height;   //图片的原始高度
                    picWeight = data.picWeight;
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        let image = $(`<img/>`);
                        image.on('load', function () {
                            squareW = picNatW;
                            squareH = picNatH;
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
                            var data = canvas.toDataURL('image/jpeg', picWeight)
                            callback(data, picNatW, picNatH)
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

    // 压缩回调
    function check(imgBase64) {
        data.imgBase64 = imgBase64;
        data.upFile = convertBase64UrlToFile(data.imgBase64, (new Date()).valueOf() + '.png')
        if (data.upFile.size > data.maxSize) {
            data.picWeight -= 0.1;
            compress(data.upFile, check);
            return;
        } else {
            compress(data.currentfile, checkFin);
        }
    }

    function checkFin(imgBase64, picNatW, picNatH) {
        data.imgBase64 = imgBase64;
        data.upFile = convertBase64UrlToFile(data.imgBase64, (new Date()).valueOf() + '.png')
        data.squareH = squareH;
        data.squareW = squareW;
        // $("#weTalkYsPic").attr({ "src": data.imgBase64 })
        // imgResize(600, picNatW, picNatH)
        // $("#weTalkYsPic").width(squareW);
        // $("#weTalkYsPic").height(squareH);
        // $(".weTalkYsPicContent").css("visibility", "visible")
        // $(".weTalkFunCover").hide();
        uploadFile(2, data.upFile);
    }

    // 头像压缩回调函数
    function checkAva(imgBase64) {
        data.imgBase64 = imgBase64;
        $(".weTalkavatarPreviewImg").attr({ "src": data.imgBase64 })
        // $(".weTalkavatarPreview").show();
        // $(".weTalkAvatarCjView").show();
        $(".weTalkAvatarCjView").show();


        // data.upAvatarFile = convertBase64UrlToFile(data.imgBase64, (new Date()).valueOf() + '.png')
        var options = {
            aspectRatio: 1, // 纵横比
            viewMode: 2,
            preview: ".weTalkavatarPreviewCj", // 预览图的class名
        };
        // $(".weTalkavatarPreviewCj").show();
        $('.weTalkavatarPreview').children('.weTalkavatarPreviewImg')
            .cropper("destroy")
            .attr("src", imgBase64)
            .cropper(options);
    }

    // 获取图片的原始尺寸
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

    function imgResize(max, width, height) {
        // 在这里面使用
        picNatW = width;    //图片的原始宽度
        picNatH = height;   //图片的原始高度
        if (picNatW > picNatH) {
            if (picNatH > max || picNatW > max) {
                squareW = max;
                squareH = picNatH / picNatW * squareW
            } else {
                squareW = picNatW
                squareH = picNatH
            }
        } else if(picNatH >= picNatW){
            // console.log("高大于宽")
            if (picNatW > max || picNatH > max) {
                squareH = max;
                squareW = picNatW / picNatH * squareH;
            }
            else{
                squareW = picNatW
                squareH = picNatH
            }
        }
    }

    // 将base64转化为图片
    function convertBase64UrlToFile(urlData, filename) {
        var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime })
    }


    // 发送图片/头像上传
    function uploadFile(type, upFile) {
        let params = new FormData();
        params.append("file", upFile, upFile.name);
        upload(type, params, data.token).then(res => {
            if (res.code == 1) {
                $('#weTalkSendPic').val('');
                // 发送图片
                if (type == 2) {
                    // 5秒以后才可以发送消息
                    data.sendState = false;
                    setTimeout(function () {
                        data.sendState = true;
                    }, 5000)
                    // 图片路径
                    data.filePath = res.message;
                    if (data.isPublic == 0) {
                        // 如果是私聊，自己发的消息需要处理
                        data.socket.emit('PRIVATE',
                            {
                                targetId: data.friendId,
                                senderId: data.id,
                                messageType: 2,
                                content: data.filePath
                            }, function (response) {
                                if (response == 1) {
                                    let obj = {
                                        targetId: data.friendId,
                                        senderId: data.id,
                                        messageType: 2,
                                        content: data.filePath
                                    };
                                    obj.content = disposeText(obj);
                                    for (let j = 0; j < data.weTalkPerList.length; j++) {
                                        if (obj.targetId == data.weTalkPerList[j].userId) {
                                            data.weTalkPerList[j].records.push(obj);
                                            // 加载最后一条聊天记录
                                            let content = "[图片]",
                                                curHour = getMyHour().h,
                                                curMin = getMyHour().m,
                                                user;
                                            if (obj.senderId == data.id) {
                                                user = "我：";
                                            } else {
                                                user = ""
                                            }
                                            $(".weTalkChatItemList").children().each(function () {
                                                if ($(this).attr("data-index") == j) {
                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                                                    $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                                                }
                                            })
                                            // data.isHasThisFriend = true;
                                            break;
                                        }
                                    }
                                    // obj.content = disposeText(obj);
                                    loadByFriendOne();
                                    obj = {};
                                }
                            });
                    } else {
                        let avatar;
                        if (data.avatar == null) {
                            avatar = "";
                        } else {
                            avatar = data.avatar;
                        }
                        data.socket.emit('PUBLIC',
                            {
                                targetId: data.roomId,
                                senderId: data.id,
                                messageType: 2,
                                content: data.filePath,
                                senderNickname: data.nickname,
                                avatar: avatar,
                                sex: data.sex,
                                vip: data.vip ? 1 : 0
                            })
                    }
                    // $('.weTalkYsPic').hide();
                    $(".weTalkYsPicContent").css("visibility", "hidden")
                    $(".weTalkFunCover").hide();
                    showTip("发送成功")
                } else if (type == 1) {
                    // 头像上传
                    data.avatarPath = JSON.parse(JSON.stringify(res)).message.replace(/\\/g, "/");
                    updateAvatar(res.message, data.roomId, data.token).then(res1 => {
                        if (res1.code == 1) {
                            showTip("修改成功");
                            info(data.token).then(res2 => {
                                data.avatar = res2.data.avatar;
                                $(".weTalkPersonalInfoContent").children(".weTalkChangeAvatar").children(".weTalkCurAvater").attr("src", data.cdn + data.avatar.replace(/\\/g, "/")).show();
                                $(".weTalkPersonalInfoContent").children(".weTalkChangeAvatar").children(".weTalkDeInfoAvatar").hide();
                                $(".weTalkAvatarImg").attr("src", data.cdn + data.avatar.replace(/\\/g, "/")).show();
                                $(".weTalkDefaultAvatar").hide();
                                // console.log($(".weTalkPersonalInfoContent").children(".weTalkChangeAvatar").children(".weTalkCurAvater").attr("src"), $(".weTalkAvatarImg").attr("src"))
                            })
                        }
                    })
                }
            } else {
                if (type == 2) {
                        showTip("发送失败")
                } else {
                    if (type == 1) {
                        showTip("更改失败")
                    }
                }
            }
        })
    }


    // 移入
    function showRemoveUser() {
        if ($(this).attr("data-ischoosed") == "a") {
            $(this).css({ "background": "#EDE7FF" })
            $(this).children('.weTalkNewsRecords').hide();
            $(this).children('.weTalkRemoveUser1').show()
        }
        $(this).siblings().each(function () {
            if ($(this).attr("data-ischoosed") == "a") {
                $(this).css({ background: "#fff" });
            }
        })
    }

    // 移出
    function hideRemoveUser() {
        if ($(this).attr("data-ischoosed") == "a") {
            $(this).css({ "background": "#fff" })
            if (data.weTalkPerList[$(this).attr("data-index")].UnReadNum != 0) {
                $(this).children('.weTalkNewsRecords').show();
            }
            // }
            $(this).children('.weTalkRemoveUser1').hide();
        }
    }

    // 点击私人用户
    // 左键
    function showChoosedUser() {
        let user = $(this);
        let userId = $(this).attr("data-id");
        let userIndex = $(this).attr("data-index")
        let username = $(this).attr("data-name");
        let associateId = $(this).attr("data-associateId");
        // 判断是否需要重新加载
        if (data.friendId == userId) {
            return;
        }
        launchPersonalChat(user, userId, userIndex, username, associateId);
    }

    // 好友添加到会话列表时，会话列表已存在，此时设置此人为选中状态
    function setSessionItem(obj) {
        obj.attr("data-ischoosed", "b");
        obj.css({ background: "#e5ddff" });
        // $(this).children('.weTalkRemoveUser2').hide();
        obj.children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();
        obj.children(".weTalkYjOptions").hide();

        obj.siblings().attr("data-ischoosed", "a");
        obj.siblings().children(".weTalkYjOptions").hide();
        obj.siblings().css({ background: "#fff" });
        // $(this).siblings().children('.weTalkRemoveUser2').hide();
        obj.siblings().children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();

        if (data.weTalkPerList[data.friendIndex].UnReadNum > 0) {
            // console.log("查看新消息时，告知后端已读")
            obj.children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
            obj.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
            // obj.children(".weTalkNewsRecords").html("");
            data.weTalkPerList[data.friendIndex].UnReadNum = 0;
            // 告诉客户端已读
            data.socket.emit('SYSTEM', {
                type: 1,
                targetUserId: data.friendId
            })
        }
    }


    // 点击群聊(暂时弃用)
    // function showChoosedRoom() {
    //     data.isPublic = 1;
    //     data.webId = $(this).attr("data-id");
    //     data.websiteIndex = $(this).attr("data-index");
    //     if (data.haveSend == false) {
    //         console.log("在切换群聊时已经告知后端了")
    //         clearTimeout(data.sendTimer);
    //         data.socket.emit('SYSTEM', {
    //             type: 1,
    //             targetUserId: data.friendId
    //         })
    //         data.haveSend = true;
    //     }
    //     // 初始化未读消息
    //     // $(this).children(".weTalkNewsRecords").html("");
    //     $(this).children(".weTalkNewsRecords").hide();
    //     data.weTalkPerList[data.websiteIndex].UnReadNum = 0;

    //     $(this).attr("data-ischoosed", "b");
    //     $(this).css({ background: "#e5ddff" });
    //     // $(this).children('.weTalkRemoveUser2').hide();
    //     $(this).children('.weTalkRemoveUser1').hide();
    //     $(this).children(".weTalkYjOptions").hide();


    //     $(this).siblings().attr("data-ischoosed", "a");
    //     $(this).siblings().children(".weTalkYjOptions").hide();
    //     $(this).siblings().css({ background: "#fff" });
    //     // $(this).siblings().children('.weTalkRemoveUser2').hide();
    //     $(this).siblings().children('.weTalkRemoveUser1').hide();
    //     // 加载用户列表
    //     $(".weTalkUsers").show();
    //     // 切换聊天室并加载聊天记录
    //     if (data.websiteId == $(this).attr("data-websiteId")) {
    //         // 隐藏
    //         $(".weTalkRightItem").hide();
    //         $(".weTalkRightMain").show();
    //         $(".weTalkUsers").show();
    //         $(".weTalkChatMain").html("");
    //         for (let i = 0; i < data.weTalkPerList.length; i++) {
    //             if (data.weTalkPerList[i].isUsers == false) {
    //                 if (data.weTalkPerList[i].records) {
    //                     data.weTalkPerList[i].records.forEach((item, index) => {
    //                         if (item.messageType == 1 || item.messageType == 2) {
    //                             if (item.messageType == 2) {
    //                                 item.img = item.content;
    //                             }
    //                             item.content = disposeText(item)
    //                         }
    //                         item.nickname = item.senderNickname;
    //                         loadRecords(item, index);
    //                         recordsPoolOpe();
    //                     })
    //                 }
    //             }
    //         }
    //         return;
    //     }
    //     data.websiteId = $(this).attr("data-websiteId");
    //     changeRoomRequest(data.websiteId, false)
    // }


    // 用户设置
    function setUserInfo() {
        if ($(".weTalkUserSet").css("display") == "none") {
            $(".weTalkUserSet").css({ "display": "block" })
        } else {
            $(".weTalkUserSet").css({ "display": "none" })
        }
    }

    // 获取用户会话列表
    function getSessionList() {
        getChatlist(data.token).then(res => {
            if (res.code == 1) {
                let users = res.data.users;
                let websites = res.data.websites;
                users.forEach(item => {
                    item.isUsers = true;
                    item.UnReadNum = item.unread;
                })
                websites.forEach(item => {
                    item.isUsers = false;
                    item.UnReadNum = 0;
                })
                // console.log("websites", websites)
                let weTalkPerList = users.concat(websites);
                if (weTalkPerList.length > 0) {
                    weTalkPerList.forEach(item => {
                        if (!(item.sex)) {
                            item.sex == 0;
                        }
                        item.load = false;
                        item.records = [];
                        item.addFriendType = 1;
                        if (item.nickname) {
                            item.avatarDefault = item.nickname.substring(0, 1);
                        } else {
                            item.avatarDefault = "W";
                        }
                    })
                    data.weTalkPerList = weTalkPerList;
                    // 重新渲染私聊列表
                    showPersonalList();
                }
            }
        })
    };

    // 获取在线用户列表和数量
    function getOnlineUsersRequest() {
        getOnlineUsers(data.roomId, data.token).then(res => {
            if (res.code == 1) {
                data.weTalkUsersItemList = res.data.roomOnlineUser;
                data.weTalkUsersNum = res.data.roomOnlineUserNum;
                data.chatPublicPeople = [];
                data.weTalkUsersItemList.forEach((item, index) => {
                    // 添加用户数组中去
                    if (item.id != data.id) {
                        data.chatPublicPeople.push(item.nickname);
                    }
                    // 初始化
                    if (!(item.sex)) {
                        item.sex = 0;
                    }
                    if (item.nickname) {
                        item.avatarDefault = item.nickname.substring(0, 1);
                    } else {
                        item.avatarDefault = "We";
                    }
                    item.addFriendType = 1;
                    // 自己始终处于第一个
                    if (item.id == data.id) {
                        let obj = data.weTalkUsersItemList[index]
                        data.weTalkUsersItemList[index] = data.weTalkUsersItemList[0];
                        data.weTalkUsersItemList[0] = obj;
                    }
                })
                // 加载@
                loadAt();
                // 加载当前聊天室用户列表
                seeUserList();
            }
        })
    }

    // 渲染用户列表
    function seeUserList() {
        $(".weTalkUsersItemList").html("");
        for (let i = 0; i < data.weTalkUsersItemList.length; i++) {
            let weTalkUsersItem = $(`
                          <div class="weTalkUsersItem">
                              <div class="weTalkChatItemAvatar">
                                  <img class="weTalkBoy"></img>
                                  <div class="weTalkItemDeAvatar">${data.weTalkUsersItemList[i].avatarDefault}</div>
                                  <img class="weTalkUserAvatar">
                              </div>
                              <div class="weTalkItemNick weTalkTextDis">${data.weTalkUsersItemList[i].nickname}</div>
                              <div class="weTalkItemNickVip weTalkTextDis">${data.weTalkUsersItemList[i].nickname}</div>
                          </div>
                        `)
            // console.log("vip", data.weTalkUsersItemList[i].vip)
            if (data.weTalkUsersItemList[i].vip) {
                // console.log("是vip")
                weTalkUsersItem.children(".weTalkItemNick").hide();
                weTalkUsersItem.children(".weTalkItemNickVip").show();
            } else {
                // console.log("不是vip")
                weTalkUsersItem.children(".weTalkItemNick").show();
                weTalkUsersItem.children(".weTalkItemNickVip").hide();
            }

            if (data.weTalkUsersItemList[i].sex == 1) {
                weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": './images/boy.png' })
            } else if (data.weTalkUsersItemList[i].sex == 2) {
                weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": './images/girl.png' })
            } else {
                weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").hide();
            }

            if (data.weTalkUsersItemList[i].avatar) {
                weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").hide();
                weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").attr("src", data.cdn + data.weTalkUsersItemList[i].avatar.replace(/\\/g, "/")).show();
            } else {
                weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").show();
                weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").hide();
            }

            weTalkUsersItem.attr({ "data_sex": data.weTalkUsersItemList[i].sex });
            weTalkUsersItem.attr({ "data_index": i });
            weTalkUsersItem.attr({ "data_id": data.weTalkUsersItemList[i].id });
            weTalkUsersItem.appendTo($(".weTalkUsersItemList"));
        }
        $(".weTalkOnlineCount").html(`在线人数：${data.weTalkUsersNum}人`)
        // 给用户列表的每个对象添加点击事件
        addUsersToPer();

    };

    // 渲染会话列表
    function showPersonalList() {
        let weTalkChatItem;
        $(".weTalkChatItemList").html("");
        for (let j = 0; j < data.weTalkPerList.length; j++) {
            if (data.weTalkPerList[j].isUsers) {
                // 用户
                weTalkChatItem = $(
                    `
                                        <div class="weTalkChatItem">
                                            <div class="weTalkChatItemOne">
                                                <div class="weTalkChatItemAvatar">
                                                    <img class="weTalkBoy"></img>
                                                    <div class="weTalkItemDeAvatar">${data.weTalkPerList[j].avatarDefault}</div>
                                                    <img class="weTalkUserAvatar">
                                                </div>
                                                <div class="weTalkItemRecordView">
                                                    <div class="weTalkItemNick weTalkTextDis">${data.weTalkPerList[j].nickname}</div>
                                                    <div class="weTalkItemNickVip weTalkTextDis">${data.weTalkPerList[j].nickname}</div>
                                                    <div class="weTalkItemRecord">
                                                        <div class="weTalkItemRecordUser"></div>
                                                        <div class="weTalkItemRecordContent weTalkTextDis"></div>
                                                    </div>
                                                </div>
                                                <div class="weTalkNewsRecords">${data.weTalkPerList[j].UnReadNum}</div>
                                                <div class="weTalkNewsRecordsjd">${data.weTalkPerList[j].UnReadNum}</div>
                                                <div class="weTalkNewsTime"></div>
                                                <img class="weTalkRemoveUser1 weTalkRemoveUser" src="./images/close.png" />
                                            </div>
                                            <div class="weTalkYjOptions">
                                                <div class="weTalkYjOptionsItem">加为好友</div>
                                                <div class="weTalkYjOptionsItem">移除会话</div>
                                                <div class="weTalkYjOptionsItem">加入黑名单</div>
                                            </div>
                                        </div>
                                      `
                );

                if (data.weTalkPerList[j].avatar) {
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").hide();
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").attr("src", data.cdn + data.weTalkPerList[j].avatar.replace(/\\/g, '/')).show();
                } else {
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").show();
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").hide();
                }

                if (data.weTalkPerList[j].UnReadNum == 0) {
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                } else {
                    if (data.weTalkPerList[j].ispassive) {
                        weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecords").css("display", "block");
                        weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                    } else {
                        weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").show();
                    }
                }

                if (data.weTalkPerList[j].vip == "1") {
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemNick").hide();
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemNickVip").show();
                } else {
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemNick").show();
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemNickVip").hide();
                }

                if (data.weTalkPerList[j].sex == "1") {
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": './images/boy.png' })
                } else if (data.weTalkPerList[j].sex == "2") {
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": './images/girl.png' })
                } else {
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkBoy").hide();
                }

                // 加载最后一条聊天记录
                // console.log("records", data.weTalkPerList[j], data.weTalkPerList[j].records)
                if (data.weTalkPerList[j].records && data.weTalkPerList[j].records.length > 0) {
                    let record = data.weTalkPerList[j].records[data.weTalkPerList[j].records.length - 1],
                        content = record.content,
                        messageType = record.messageType,
                        user;

                    // 判断内容的类型
                    if (messageType == 2) {
                        content = "[图片]"
                    } else if (messageType == 4) {
                        content = "[骰子]"
                    } else if (messageType == 5) {
                        content = "[硬币]"
                    } else if (messageType == 6) {
                        content = "[石头剪子布]"
                    }

                    if (record.senderId == data.id) {
                        user = "我：";
                    } else {
                        user = ""
                    }
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                    weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                }

                // 初始化自定义属性
                weTalkChatItem.attr("data-ischoosed", "a");
                weTalkChatItem.attr("data-index", j);
                weTalkChatItem.attr("data-id", data.weTalkPerList[j].userId)
                weTalkChatItem.attr("data-associateId", data.weTalkPerList[j].id)
                weTalkChatItem.attr("data-name", data.weTalkPerList[j].nickname)


                // 点击触发事件
                // 左键点击
                weTalkChatItem.off("click").on("click", showChoosedUser);
                weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkRemoveUser1").off("click").on("click", openRemoveDiag)
                // weTalkChatItem.children(".weTalkRemoveUser2").off("click").on("click", openRemoveDiag)


                // 右键点击
                weTalkChatItem.off("contextmenu").on("contextmenu", function (ev) {
                    if ($(this).children(".weTalkYjOptions").css("display") == "none") {
                        let that = $(this);
                        data.friendId = $(this).attr("data-id");
                        data.friendIndex = $(this).attr("data-index");
                        console.log("data.friendId", data.friendId)

                        friendAndBlock(data.friendId, data.token).then(res => {
                            if (res.data.isFriend) {
                                $(this).children(".weTalkYjOptions").children(".weTalkYjOptionsItem:first").hide();
                            } else {
                                $(this).children(".weTalkYjOptions").children(".weTalkYjOptionsItem:first").show();
                            }
                            $(this).attr("data-ischoosed", "b");
                            $(this).css({ background: "#e5ddff" });
                            // $(this).children('.weTalkRemoveUser2').hide();
                            $(this).children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();
                            $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                            $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").html("");
                            data.weTalkPerList[data.friendIndex].UnReadNum = 0;

                            $(this).siblings().attr("data-ischoosed", "a");
                            $(this).siblings().css({ background: "#fff" });
                            // $(this).siblings().children('.weTalkRemoveUser2').hide();
                            $(this).siblings().children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();
                            let optionsView = $(this).children(".weTalkYjOptions").show();
                            $(this).siblings().children(".weTalkYjOptions").hide();
                            // 移入
                            optionsView.children(".weTalkYjOptionsItem").each(function () {
                                $(this).off("mouseenter").on("mouseenter", function () {
                                    $(this).css({ "color": "#944eea", "background": "#ede7ff" })
                                    $(this).siblings().css({ "color": "#666666", "background": "#fff" })
                                })
                            })
                            optionsView.children(".weTalkYjOptionsItem").off("mouseleave").on("mouseleave", function () {
                                $(this).css({ "color": "#666666", "background": "#fff" })
                            })
                            optionsView.off("click").on("click", function (e) {
                                if (e.button == 0) {
                                    switch (e.target.innerHTML) {
                                        case "加为好友":
                                            addFriendRequest($(this));
                                            break;
                                        case "移除会话":
                                            $(this).hide();
                                            yjopenRemoveDiag(that);
                                            break;
                                        case "加入黑名单":
                                            $(this).hide();
                                            blockUserRequest(that)
                                            break;
                                    }
                                }
                                e.preventDefault()
                                e.stopPropagation()
                            })
                            optionsView.off("contextmenu").on("contextmenu", function (eve) {
                                eve.preventDefault()
                                eve.stopPropagation()
                            })
                            optionsView.off("mouseleave").on("mouseleave", function (even) {
                                optionsView.hide();
                                even.preventDefault()
                                even.stopPropagation()
                            })
                        })

                    } else {
                        $(this).children(".weTalkYjOptions").hide();
                    }
                    ev.preventDefault()
                    ev.stopPropagation()
                });


                // 移入移出触发事件
                weTalkChatItem.on("mouseenter", showRemoveUser)
                weTalkChatItem.on("mouseleave", hideRemoveUser)

                if (data.weTalkPerList[j].addFriendType == 2) {
                    // 输入框为私人
                    data.isPublic = 0;
                    // 销毁@
                    $("#weTalkChatFrame").atwho('destroy');
                    // 隐藏
                    $(".weTalkRightItem").hide();
                    $(".weTalkRightMain").show();
                    $(".weTalkChatMainHeadP").show();
                    // 初始化
                    data.friendId = weTalkChatItem.attr("data-id");
                    data.friendIndex = weTalkChatItem.attr("data-index")
                    // 加载聊天框头部
                    $(".weTalkChatMainHeadNameP").html(weTalkChatItem.attr("data-name"))
                    $(".weTalkChatMainHeadP").attr("data-id", weTalkChatItem.attr("data-associateId"));
                    friendAndBlock(data.friendId, data.token).then(res => {
                        if (res.data.isFriend) {
                            // console.log("是好友")
                            $(".weTalkChatMainHeadEventP").html("解除好友").off("click").on("click", function () {
                                removeFriendRequestByChat(data.friendId);
                            });
                        } else {
                            // console.log("不是好友")
                            $(".weTalkChatMainHeadEventP").html("添加好友").off("click").on("click", function () {
                                addFriendRequestByChat(data.friendId);
                            });

                        }
                    })
                    // 默认选中状态
                    weTalkChatItem.attr("data-ischoosed", "b");
                    data.weTalkPerList[j].addFriendType = 1;
                    weTalkChatItem.css({ background: "#e5ddff" });
                    // 清空未读标识
                    if (data.weTalkPerList[data.friendIndex].UnReadNum > 0) {
                        console.log("查看新消息时，告知后端已读")
                        weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                        weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                        // weTalkChatItem.children(".weTalkNewsRecords").html("");
                        data.weTalkPerList[data.friendIndex].UnReadNum = 0;
                        // 告诉客户端已读
                        data.socket.emit('SYSTEM', {
                            type: 1,
                            targetUserId: data.friendId
                        })
                    }
                    // weTalkChatItem.children(".weTalkChatItemOne").children('.weTalkRemoveUser2').hide();
                    weTalkChatItem.children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();

                    weTalkChatItem.siblings().attr("data-ischoosed", "a");
                    weTalkChatItem.siblings().css({ background: "#fff" });
                    // weTalkChatItem.siblings().children(".weTalkChatItemOne").children('.weTalkRemoveUser2').hide();
                    weTalkChatItem.siblings().children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();

                    // 加载聊天记录
                    loadByFriend(data.friendId, j);
                }
                weTalkChatItem.appendTo($(".weTalkChatItemList"))
            }
            // 群聊（暂时弃用）
            // else if (data.weTalkPerList[j].isUsers == false) {
            //     weTalkChatItem = $(`
            //         <div class="weTalkChatItem">
            //             <div class="weTalkChatItemAvatar">
            //                 <img class="weTalkChatItemAvatarGroup" src="./images/roomChat.png">
            //             </div>
            //             <div class="weTalkItemNick weTalkTextDis">${data.weTalkPerList[j].title}聊天室</div>
            //             <div class="weTalkNewsRecords">${data.weTalkPerList[j].UnReadNum}</div>
            //             <img class="weTalkRemoveUser1 weTalkRemoveUser" src="./images/close.png" />
            //             <div class="weTalkYjOptions">
            //                 <div class="weTalkYjOptionsItem">加入收藏</div>
            //                 <div class="weTalkYjOptionsItem">移除会话</div>
            //             </div>
            //         </div>
            //     `);

            //     if (data.weTalkPerList[j].UnReadNum == 0) {
            //         weTalkChatItem.children(".weTalkNewsRecords").hide();
            //     }

            //     // 初始化自定义属性
            //     weTalkChatItem.attr("data-ischoosed", "a");
            //     weTalkChatItem.attr("data-index", j);
            //     weTalkChatItem.attr("data-id", data.weTalkPerList[j].id)
            //     weTalkChatItem.attr("data-websiteId", data.weTalkPerList[j].websiteId)


            //     // 点击触发事件

            //     // 左键
            //     weTalkChatItem.off("click").on("click", showChoosedRoom);
            //     weTalkChatItem.children(".weTalkRemoveUser1").off("click").on("click", openRemoveDiagRoom)


            //     // 右键
            //     weTalkChatItem.off("contextmenu").on("contextmenu", function (ev) {
            //         if ($(this).children(".weTalkYjOptions").css("display") == "none") {
            //             let that = $(this);
            //             data.websiteId = $(this).attr("data-websiteId");
            //             data.friendIndex = $(this).attr("data-index");

            //             isFavorite(data.websiteId, data.token).then(res => {
            //                 if (res.data) {
            //                     $(this).children(".weTalkYjOptions").children(".weTalkYjOptionsItem:first").hide();
            //                 }
            //                 $(this).attr("data-ischoosed", "b");
            //                 $(this).css({ background: "#e5ddff" });
            //                 // $(this).children('.weTalkRemoveUser2').hide();
            //                 $(this).children('.weTalkRemoveUser1').hide();
            //                 $(this).children(".weTalkNewsRecords").hide();
            //                 $(this).children(".weTalkNewsRecords").html("");
            //                 data.weTalkPerList[data.friendIndex].UnReadNum = 0;

            //                 $(this).siblings().attr("data-ischoosed", "a");
            //                 $(this).siblings().css({ background: "#fff" });
            //                 // $(this).siblings().children('.weTalkRemoveUser2').hide();
            //                 $(this).siblings().children('.weTalkRemoveUser1').hide();
            //                 let optionsView = $(this).children(".weTalkYjOptions").show();
            //                 $(this).siblings().children(".weTalkYjOptions").hide();
            //                 // 移入
            //                 optionsView.children(".weTalkYjOptionsItem").each(function () {
            //                     $(this).off("mouseenter").on("mouseenter", function () {
            //                         $(this).css({ "color": "#944eea", "background": "#ede7ff" })
            //                         $(this).siblings().css({ "color": "#666666", "background": "#fff" })
            //                     })
            //                 })
            //                 optionsView.children(".weTalkYjOptionsItem").off("mouseleave").on("mouseleave", function () {
            //                     $(this).css({ "color": "#666666", "background": "#fff" })
            //                 })
            //                 optionsView.off("click").on("click", function (e) {
            //                     if (e.button == 0) {
            //                         switch (e.target.innerHTML) {
            //                             case "加入收藏":
            //                                 addFavoriteRequest($(this));
            //                                 break;
            //                             case "移除会话":
            //                                 $(this).hide();
            //                                 yjopenRemoveQlDiag(that);
            //                                 break;
            //                         }
            //                     }
            //                     e.preventDefault()
            //                     e.stopPropagation()
            //                 })
            //                 optionsView.off("mouseleave").on("mouseleave", function (even) {
            //                     optionsView.hide();
            //                     e.preventDefault()
            //                     e.stopPropagation()
            //                 })

            //             })
            //             optionsView.off("contextmenu").on("contextmenu", function (eve) {
            //                 eve.preventDefault()
            //                 eve.stopPropagation()
            //             })

            //         } else {
            //             $(this).children(".weTalkYjOptions").hide();
            //         }
            //         ev.preventDefault()
            //         ev.stopPropagation()
            //     });

            //     // 移入移出触发事件
            //     weTalkChatItem.on("mouseenter", showRemoveUser)
            //     weTalkChatItem.on("mouseleave", hideRemoveUser)

            //     if (data.weTalkPerList[j].addFriendType == 2) {
            //         // 默认选中状态
            //         data.websiteId = $(this).attr("data-websiteId");
            //         data.friendIndex = $(this).attr("data-index");
            //         weTalkChatItem.attr("data-ischoosed", "b");
            //         data.weTalkPerList[j].addFriendType = 1;
            //         weTalkChatItem.css({ background: "#e5ddff" });
            //         weTalkChatItem.children(".weTalkNewsRecords").hide();
            //         // weTalkChatItem.children('.weTalkRemoveUser2').hide();
            //         weTalkChatItem.children('.weTalkRemoveUser1').hide();

            //         weTalkChatItem.siblings().attr("data-ischoosed", "a");
            //         weTalkChatItem.siblings().css({ background: "#fff" });
            //         // weTalkChatItem.siblings().children('.weTalkRemoveUser2').hide();
            //         weTalkChatItem.siblings().children('.weTalkRemoveUser1').hide();
            //         // 加载聊天记录
            //         changeRoomRequest(data.websiteId, false)
            //     }

            //     weTalkChatItem.appendTo($(".weTalkChatItemList"))
            // }

        }
    };

    // 加载站内信
    function loadSystemNews() {
        getInboxMessageList(data.systemCurrent, data.systemSize, data.token).then(res => {
            if (res.code == 1) {
                data.systemNews = res.data.records;
                if (data.systemNews.length == 0) {
                    $(".weTalkSystemNewsViewContent").html(`
                        <div class="emptyInBoxMessage">
                            <img class="emptyInBoxMessageImg" src="./images/empty.jpg">
                            <div class="emptyInBoxMessageText">暂无内容</div>
                        </div>
                    `)
                    return;
                }
                $(".weTalkSystemNewsViewContent").html("")
                let systemItem, delIcon;
                data.systemNews.forEach((item, index) => {
                    systemItem = $(`
              <div class="weTalkSystemNewsViewItem">
                <div class="weTalkSystemUnread"></div>
                <div class="weTalkSystemNewsViewItemOne">
                  <div class="weTalkSystemNewsViewFont">${item.title}</div>
                  <div class="weTalkSystemNewsViewOpe">
                    <div class="weTalkSystemNewsViewTime">${item.createTime.substring(0, 10)}</div>
                    <div class="weTalkSystemNewsViewDel weTalkPointer">
                      <img class="weTalkViewDelIcon" src="./images/del.png">
                    </div>
                  </div>
                </div>
                <div class="weTalkSystemNewsViewItemTwo"></div>
              </div>
                `)

                    // 添加自定义属性
                    // console.log("item.state", item.state)
                    if (item.state == 0) {
                        systemItem.children(".weTalkSystemUnread").css({ "display": "block" })
                        data.systemUnreadNum += 1;
                    }
                    // 点击加载站内信内容
                    if (item.content != "") {
                        systemItem.off("click").on("click", function () {
                            if (systemItem.children(".weTalkSystemNewsViewItemTwo").css("display") == "none") {
                                systemItem.children(".weTalkSystemNewsViewItemTwo").show();
                                systemItem.children(".weTalkSystemNewsViewItemTwo").html(`${item.content}`)
                                if (item.state == 0) {
                                    readInboxMessage(item.id, data.token).then(res => {
                                        if (res.code == 1) {
                                            loadSystemNews();
                                            info().then(res => {
                                                if (res.code == 1) {
                                                    data.unreadInboxMsg = res.data.unreadInboxMsg;
                                                }
                                            })
                                        }
                                    })
                                }
                            } else {
                                systemItem.children(".weTalkSystemNewsViewItemTwo").hide();
                                systemItem.children(".weTalkSystemNewsViewItemTwo").html(``)
                            }
                        })
                        if (!(/^【/.test(item.content))) {
                            systemItem.children(".weTalkSystemNewsViewItemTwo").css({ "margin-left": "5px" })
                        }
                    } else {

                    }
                    delIcon = systemItem.children(".weTalkSystemNewsViewItemOne").children(".weTalkSystemNewsViewOpe").children(".weTalkSystemNewsViewDel");
                    delIcon.children("img").attr({ "src": "./images/del.png" })
                    delIcon.off("click").on("click", function () {
                        deleteInboxMessage(data.systemNews[index].id, data.token).then(res => {
                            if (res.code == 1) {
                                loadSystemNews();
                            }
                        })
                    })
                    $(".weTalkSystemNewsViewContent").html("");
                    systemItem.appendTo(".weTalkSystemNewsViewContent")
                })
            }
        });

    };



    // 点击用户列表将用户添加到私聊列表中
    function addUsersToPer() {
        $(".weTalkUsersItemList")
            .children()
            .each(function () {
                $(this).off("click").on("click", function (e) {
                    let userId = $(this).attr("data_id")
                    // console.log("获取他人信息", "userId", userId, "data.id", data.id)
                    if (userId == data.id) {
                        return;
                    }
                    let ev = e || event
                    let clickI = $(this).attr("data_index");
                    ev.stopPropagation()
                    ev.preventDefault()
                    // 渲染他人信息页
                    showOtherInfo(userId);
                })
            });
    }



    // 判断浏览器类型
    function browserType() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = false;
        if (userAgent.indexOf('Edge') > -1) {
            return "Edge";
        }
        if (userAgent.indexOf('.NET') > -1) {
            return "IE";
        }
        if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            isOpera = true;
            return "Opera"
        }; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }; //判断是否IE浏览器
    }

    // 窗口可拖动(暂时弃用)
    function dragMyWeTalk() {
        let Drag = $(".weTalkChatRoom");
        let DragIcon = $(".weTalkHead");
        DragIcon.on("mousedown", function (event) {
            var ev = event || window.event;
            if (ev.button == 0) {
                var disX = ev.clientX - Drag[0].offsetLeft;
                var disY = ev.clientY - Drag[0].offsetTop;
                $(document).on("mousemove", function (event) {
                    var ev = event || window.event;
                    ev.preventDefault();
                    ev.stopPropagation();
                    let DragLeft = ev.clientX - disX;
                    let DragTop = ev.clientY - disY;
                    if (DragLeft < Drag.width() / 2) {
                        DragLeft = Drag.width() / 2;
                    }
                    else if (DragLeft > document.documentElement.scrollWidth - Drag.width() / 2) {
                        DragLeft = document.documentElement.scrollWidth - Drag.width() / 2;
                    }
                    if (DragTop < Drag.height() / 2) {
                        DragTop = Drag.height() / 2;
                    }
                    else if (DragTop > document.documentElement.clientHeight - Drag.height() / 2) {
                        DragTop = document.documentElement.clientHeight - Drag.height() / 2;
                    }
                    DragIcon.css({ "cursor": "move" })
                    Drag.css({ "left": DragLeft + "px", "top": DragTop + "px" })
                })
            }
            $(document).on("mouseup", function () {
                $(document).off("mousemove")
                DragIcon.css({ "cursor": "default" })
            })
            ev.preventDefault();
            ev.stopPropagation();
        })

    }

    // 窗口宽度可拉动(暂时弃用)
    function zdyWeTalkWidth() {
        let weTalkMain = $(".weTalkMain");
        let weTalkTz = $(".weTalkTz")
        weTalkTz.on("mousedown", function (event) {
            let ev = event || window.event;
            let startX = ev.clientX - weTalkMain[0].offsetWidth;
            $(document).on("mousemove", function (e) {
                let ee = e || window.e;
                let wid = ee.clientX - startX;
                if (wid < 744) {
                    wid = 744;
                }
                if (wid > 1000) {
                    wid = 1000;
                }
                weTalkMain.width(wid)
                weTalkTz.css({ "cursor": "e-resize" })

            })
            //鼠标松开清空所有事件
            $(document).on("mouseup", function () {
                $(document).off("mousemove")
            });
            ev.preventDefault();
            ev.stopPropagation();
        })
    }

    // 游戏事件
    function sendGame() {
        // 只有尊贵的vip才可以使用这样伟大的功能
        if (data.vip) {
            if (data.sendState) {
                switch ($(this).attr("class")) {
                    case "weTalkChatFace1":
                        data.gameType = 4;
                        break;
                    case "weTalkChatFace2":
                        data.gameType = 6;
                        break;
                    case "weTalkChatFace3":
                        data.gameType = 5;
                        break;
                }
                if (data.isPublic == 1) {
                    specialMessage(data.gameType, data.roomId, "", data.token).then(res => {
                        if (res.code == 1) {
                            data.sendState = false;
                            setTimeout(function () {
                                data.sendState = true;
                            }, 1000)
                        }
                    })
                } else {
                    specialMessage(data.gameType, "", data.friendId, data.token).then(res => {
                        if (res.code == 1) {
                            data.slYxMsg = res.data;
                            data.weTalkPerList[data.friendIndex].records.push(data.slYxMsg)
                            for (let j = 0; j < data.weTalkPerList.length; j++) {
                                if (data.friendId == data.weTalkPerList[j].userId) {
                                    // 加载最后一条聊天记录
                                    let content,
                                        user = "我：",
                                        curHour = getMyHour().h,
                                        curMin = getMyHour().m;
                                    if (data.gameType == 4) {
                                        content = "[骰子]"
                                    } else if (data.gameType == 5) {
                                        content = "[硬币]"
                                    } else if (data.gameType == 6) {
                                        content = "[石头剪子布]"
                                    }

                                    $(".weTalkChatItemList").children().each(function () {
                                        if ($(this).attr("data-index") == j) {
                                            $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                                            $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                                            $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                                        }
                                    })
                                    // console.log("私聊发的聊天记录", data.weTalkPerList[j].records)
                                    // data.isHasThisFriend = true;
                                    break;
                                }
                            }
                            loadByFriendOne();
                        }
                    })
                }
            } else {
                showTip("请5秒以后再发送")
            }
        } else {
            showTip("您还不是VIP用户，不能使用该功能。")
        }
    }



    // 处理返回后的消息
    function disposeText(msg) {
        if (msg) {
            if (!(msg.content)) {
                return;
            }
            switch (msg.messageType) {
                // 系统消息
                case 0:
                    break;
                // 文本
                // 将[img]index[img]转化为<img src="./...">,将\n转化为<br>
                case 1:
                    return msg.content.replace(/\[emoj\]/g, "<img src='./images/face/").replace(/\[\/emoj\]/g, ".png'>").replace(/\\n/g, "<br>");
                // }
                // 图片
                case 2:
                    return `<img class="weTalkRecordsImg" src="${data.cdn}${msg.content.replace(/\\/g, "/")}">`;
                // 表情
                case 3:
                    break;
                // 骰子
                case 4:
                    break;
                // 石头剪子布
                case 5:
                    break;
                // 抛硬币
                case 6:
                    break;
            }
        }
    }


    // 监听键盘回车事件
    function listenKeyBoard() {
        $("#weTalkChatFrame").off("keydown").on("keydown", function (e) {
            // console.log("聊天框回车事件")
            if ($(".searchChatroom").css("display") == "none") {
                // console.log("回车总进了吧", $(".atwho-view").css("display"))
                // console.log("如果搜索框消失才监听聊天框回车")
                var ev = e || window.event; //兼容
                if (ev.keyCode === 13 && ev.ctrlKey) {
                    if (browserType() == "IE" || browserType() == "Edge") {
                        $(".weTalkChatFrame").append("<div></div>");
                    }
                    else if (browserType() == "FF") {
                        $(".weTalkChatFrame").append("<br/><br/>");
                    } else {
                        $(".weTalkChatFrame").append("<div><br/></div>");
                    }
                    //设置输入焦点
                    var o = $('.weTalkChatFrame')[0].lastChild;
                    var textbox = $('.weTalkChatFrame')[0];
                    // 获取当前光标位置
                    var sel = window.getSelection ? window.getSelection() : document.selection;
                    // 根据当前光标位置创建范围区域
                    var range = sel.createRange ? sel.createRange() : sel.getRangeAt(0);
                    // 选择textbox子节点（<div><br></div>）
                    range.selectNodeContents(textbox);
                    // 折叠节点，把范围的结束点设置为与开始点相同的值
                    // range.collapse(false);
                    // 把该范围的结束点设置为紧邻指定节点的节点之后。
                    range.setEndAfter(o);
                    // 把该范围的开始点设置为紧邻指定节点的节点之后。
                    range.setStartAfter(o);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    ev.preventDefault();
                    return false;
                }
                if (ev.keyCode === 13 && !(ev.ctrlKey) && ($(".atwho-view").css("display") == "none" || $(".atwho-view").css("display") == undefined)) {
                    // console.log("你不会这里没进吧")
                    if (data.sendState) {
                        weTalkMsg = $(".weTalkChatFrame").html();
                        if (weTalkMsg == "" || weTalkMsg == undefined) {
                            // console.log("是空的么")
                            ev.preventDefault();
                            return false;
                        }
                        // console.log("weTalkMsg", weTalkMsg)
                        if ($(`<span>${weTalkMsg}</span>`).children("span").attr("class") == "atwho-inserted") {
                            // console.log("跟at有关吗")
                            let text = $(`<span>${weTalkMsg}</span>`);
                            text.children("span").each(function () {
                                $(this).remove();
                            });
                            text = text.html().replace(/&nbsp;/g, "");
                            $(`<span>${weTalkMsg}</span>`).children("span").each(function () {
                                text = text + "[at]" + $(this).html().replace(/&nbsp;/g, "") + "[/at]"
                            })
                            weTalkMsg = text;
                            // console.log("text", text)
                        }
                        weTalkMsg = weTalkMsg
                            .replace(/<br>/g, "")
                            .replace(/<div>/g, "\\n")
                            .replace(/<\/div>/g, "");
                        // console.log("weTalkMsg", weTalkMsg)
                        if (!(data.isLoadRecords)) {
                            let vip;
                            if (data.vip) {
                                vip = 1
                            } else {
                                vip = 0;
                            }
                            if (data.isPublic == 0) {
                                //     console.log("发送的私人消息", {
                                //     targetId: data.friendId,
                                //         senderId: data.id,
                                //             messageType: 1,
                                //                 content: weTalkMsg
                                // })
                                data.socket.emit('PRIVATE',
                                    {
                                        targetId: data.friendId,
                                        senderId: data.id,
                                        messageType: 1,
                                        content: weTalkMsg
                                    },
                                    function (response) {
                                        // 处理自己发的私聊消息
                                        if (response == 1) {
                                            let obj = {
                                                targetId: data.friendId,
                                                senderId: data.id,
                                                messageType: 1,
                                                content: weTalkMsg
                                            };
                                            obj.content = disposeText(obj);
                                            for (let j = 0; j < data.weTalkPerList.length; j++) {
                                                if (obj.targetId == data.weTalkPerList[j].userId) {
                                                    data.weTalkPerList[j].records.push(obj);
                                                    // 加载最后一条聊天记录
                                                    let content = obj.content,
                                                        curHour = getMyHour().h,
                                                        curMin = getMyHour().m,
                                                        user;
                                                    // 截取第一个<br>之前的内容
                                                    if (content) {
                                                        splitBr = content.indexOf("<br>");
                                                        if (splitBr != -1) {
                                                            content = content.substring(0, splitBr);
                                                        }
                                                    }
                                                    if (obj.senderId == data.id) {
                                                        user = "我：";
                                                    } else {
                                                        user = ""
                                                    }
                                                    $(".weTalkChatItemList").children().each(function () {
                                                        if ($(this).attr("data-index") == j) {
                                                            $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                                                            $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                                                            $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                                                        }
                                                    })
                                                    // console.log("私聊发的聊天记录", data.weTalkPerList[j].records)
                                                    // data.isHasThisFriend = true;
                                                    break;
                                                }
                                            }
                                            // console.log("content", obj.content)
                                            // 渲染聊天框
                                            loadByFriendOne();
                                        } else if (response == 0) {
                                            console.log(response)
                                            showTip("您发送的消息包含敏感词");
                                        } else if (response == 2) {
                                            showTip("该用户已将您拉黑")
                                        }
                                    });
                            } else {
                                let avatar;
                                if (data.avatar == null || data.avatar == undefined) {
                                    avatar = "";
                                } else {
                                    avatar = data.avatar;
                                }
                                // console.log("data.sex", data.sex)
                                data.socket.emit('PUBLIC',
                                    {
                                        targetId: data.roomId,
                                        senderId: data.id,
                                        messageType: 1,
                                        content: weTalkMsg,
                                        senderNickname: data.nickname,
                                        avatar: avatar,
                                        sex: data.sex,
                                        vip: vip
                                    },
                                    function (response) {
                                        // console.log("response", response)
                                        if (response == 0) {
                                            showTip("发送异常")
                                        } else if (response == 1) {
                                            // showTip("发送包含敏感词")
                                            // console.log("发送正常")
                                        }
                                    });
                            }
                        }
                        $(".weTalkChatFrame").html('');
                        data.sendState = false;
                        setTimeout(function () {
                            data.sendState = true;
                        }, 1000)
                        ev.preventDefault();
                        return false;
                    }
                    showTip("请5秒以后再发送")
                    ev.preventDefault();
                    return false;
                }
            }
        });
    };


    // 获取私聊聊天记录
    function getPrivateLogRequest(targetId, token, myindex) {
        getPrivateLog(targetId, token).then(res => {
            data.weTalkPerList[myindex].records = res.data;
            // 加载最后一条聊天记录
            if (data.weTalkPerList[myindex].records && data.weTalkPerList[myindex].records.length > 0) {
                let record = JSON.parse(JSON.stringify(data.weTalkPerList[myindex].records[data.weTalkPerList[myindex].records.length - 1])),
                    content = record.content,
                    messageType = record.messageType,
                    curHour = new Date(record.timestamp * 1).getHours() < 10 ? "0" + new Date(record.timestamp * 1).getHours() : new Date(record.timestamp * 1).getHours(),
                    curMin = new Date(record.timestamp * 1).getMinutes() < 10 ? "0" + new Date(record.timestamp * 1).getMinutes() : new Date(record.timestamp * 1).getMinutes(),
                    user;
                // 判断内容的类型
                if (messageType == 1) {
                    content = disposeText(record);
                }
                else if (messageType == 2) {
                    content = "[图片]"
                } else if (messageType == 4) {
                    content = "[骰子]"
                } else if (messageType == 5) {
                    content = "[硬币]"
                } else if (messageType == 6) {
                    content = "[石头剪子布]"
                }

                if (record.senderId == data.id) {
                    user = "我：";
                } else {
                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                        if (record.senderId == data.weTalkPerList[i].userId) {
                            // user = data.weTalkPerList[i].nickname;
                            user = "";
                            break;
                        }
                    }
                }
                $(".weTalkChatItemList").children().each(function () {
                    if ($(this).attr("data-index") == myindex) {
                        $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                        $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                        $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                    }
                })
            }
            data.weTalkPerList[myindex].records.forEach((item, index) => {
                item.addFriendType = 2;

                if (item.messageType == 1 || item.messageType == 2) {
                    item.content = disposeText(item)
                }

                if (item.messageType == 2) {
                    item.img = item.content;
                }

                if (item.senderId == data.id) {
                    item.nickname = data.nickname;
                    item.avatar = data.avatar;
                    item.sex = data.sex;
                    item.vip = data.vip;
                    item.avatarDefault = data.nickname.substring(0, 1)
                } else {
                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                        if (item.senderId == data.weTalkPerList[i].userId) {
                            item.nickname = data.weTalkPerList[i].nickname;
                            item.avatar = data.weTalkPerList[i].avatar;
                            item.sex = data.weTalkPerList[i].sex;
                            item.vip = data.weTalkPerList[i].vip;
                            item.avatarDefault = data.weTalkPerList[i].nickname.substring(0, 1)
                            break;
                        }
                    }
                }

                // loadRecords(item, index);
                loadRecordFin(item, index, false)
            })
            // 加载交互
            // recordsPoolOpe();
            $('.weTalkChatMain').children(".weTalkLoadRecord").css({ "visibility": "hidden" })
            data.isLoadRecords = false;
        })

    }

    // 在会话列表渲染默认聊天室最后一条聊天记录
    function showDePublicLastRecord(obj, isLoad) {
        // console.log("obj", obj);
        if (obj) {
            let record = JSON.parse(JSON.stringify(obj)),
                content,
                messageType = record.messageType,
                splitBr;
            // 判断内容的类型
            if (messageType == 1) {
                content = disposeText(record);
                content = content.replace(/\[at\]/, `<a>`).replace(/\[\/at\]/, `</a>`);
                if (isLoad == false) {
                    $(`<span>${content}</span>`).children("a").each(function () {
                        // console.log("某个@", $(this)[0], $(this).html().substring(1))
                        if ($(this).html().substring(1) == data.nickname) {
                            $(".weTalkAtWo").show();
                        } else {
                            $(".weTalkAtWo").hide();
                        }
                    })
                }
            }
            else if (messageType == 2) {
                content = "[图片]"
            } else if (messageType == 4) {
                content = "[骰子]"
            } else if (messageType == 5) {
                content = "[硬币]"
            } else if (messageType == 6) {
                content = "[石头剪子布]"
            }
            // 当前时间
            let curHour = new Date(record.timestamp * 1).getHours() < 10 ? "0" + new Date(record.timestamp * 1).getHours() : new Date(record.timestamp * 1).getHours(),
                curMin = new Date(record.timestamp * 1).getMinutes() < 10 ? "0" + new Date(record.timestamp * 1).getMinutes() : new Date(record.timestamp * 1).getMinutes();
            $(".weTalkPublicChannnellTime").html(curHour + ":" + curMin)
            // 当前用户
            $(".weTalkPublicChannnellUser").html(record.senderNickname + ":")
            // 当前内容
            // 截取第一个<br>之前的内容
            if (content) {
                splitBr = content.indexOf("<br>");
                if (splitBr != -1) {
                    content = content.substring(0, splitBr);
                }
            }
            $(".weTalkPublicChannnellRecord").html(`${content}`)
            // console.log("聊天室最后一条消息", content)
        } else {
            $(".weTalkPublicChannnellTime").html("")
            $(".weTalkPublicChannnellUser").html("")
            $(".weTalkPublicChannnellRecord").html("")
        }
    }

    // 获取聊天室聊天记录
    function getPublicLogRequset(roomId, token, isDefault) {
        getPublicLog(roomId, token).then(res => {
            if (res.code == 1) {
                if (isDefault) {
                    data.chatPublicRecords = res.data;
                    // console.log("聊天室聊天记录", data.chatPublicRecords)
                    // 获取最后一条聊天记录
                    data.chatPublicLastRecord = data.chatPublicRecords[data.chatPublicRecords.length - 1];
                    showDePublicLastRecord(data.chatPublicLastRecord, true);
                    // 获取最后一条聊天记录 end
                    if (data.chatPublicRecords) {
                        $(".weTalkChatMain").html("");
                        // console.log(data.chatPublicRecords)
                        data.chatPublicRecords.forEach((item, index) => {
                            if (item.messageType == 1 || item.messageType == 2) {
                                if (item.messageType == 2) {
                                    item.img = item.content;
                                }
                                item.content = disposeText(item)
                            }
                            item.nickname = item.senderNickname;
                            // loadRecords(item, index);
                            loadRecordFin(item, index, false)
                        })
                    }
                    // 加载交互
                    // recordsPoolOpe();
                    $(".weTalkLoadRecord").css({ "visibility": "hidden" })
                    data.isLoadRecords = false;

                    // console.log("websiteId", data.websiteId, "friend", data.friendId)
                }
                //  else {
                //     console.log("加载群聊聊天记录")
                //     $(".weTalkChatMain").html("");
                //     for (let i = 0; i < data.weTalkPerList.length; i++) {
                //         if (data.weTalkPerList[i].isUsers == false) {
                //             if (data.websiteId == data.weTalkPerList[i].websiteId) {
                //                 data.weTalkPerList[i].records = res.data;
                //                 if (data.weTalkPerList[i].records) {
                //                     data.weTalkPerList[i].records.forEach((item, index) => {
                //                         if (item.messageType == 1 || item.messageType == 2) {
                //                             if (item.messageType == 2) {
                //                                 item.img = item.content;
                //                             }
                //                             item.content = disposeText(item)
                //                         }
                //                         item.nickname = item.senderNickname;
                //                         loadRecords(item, index);
                //                         recordsPoolOpe();
                //                     })
                //                 }
                //                 // console.log("群聊聊天记录", data.weTalkPerList[i].records)
                //                 break;
                //             }

                //         }
                //     }
                //     $(".weTalkLoadRecord").css({ "visibility": "hidden" })
                //     data.isLoadRecords = false;
                // }

            } else {
                showTip("加载聊天室记录错误" + "错误码" + res.code)
            }
        })
    }

    // // 从用户列表添加到聊天列表
    // function addUserRequest(friendId, clickI) {
    //     addUser(friendId, data.token).then(res => {
    //         if (res.code == 1) {
    //             let isHas = false;
    //             for (let i = 0; i < data.weTalkPerList.length; i++) {
    //                 if (friendId == data.weTalkPerList[i].userId) {
    //                     isHas = true;
    //                     $(".weTalkAddRepeatly").show();
    //                     window.setTimeout(function () {
    //                         $(".weTalkAddRepeatly").hide();
    //                     }, 3000)
    //                     break;
    //                 }
    //             }
    //             if (!isHas) {
    //                 showTip("添加成功");
    //                 $(".weTalkUsersOpe").hide();
    //                 let obj = JSON.parse(JSON.stringify(data.weTalkUsersItemList[clickI]));
    //                 obj.addFriendType = 2;
    //                 obj.records = [];
    //                 obj.userId = data.weTalkUsersItemList[clickI].id;
    //                 obj.id = res.data.id;
    //                 obj.sex = res.data.sex;
    //                 obj.vip = res.data.vip;
    //                 obj.load = false;
    //                 obj.UnReadNum = 0;
    //                 obj.isUsers = true;
    //                 obj.nickname = res.data.nickname;
    //                 obj.avatarDefault = res.data.nickname.substring(0, 1);
    //                 data.weTalkPerList.unshift(obj);
    //                 obj = {};
    //                 showPersonalList();
    //             }
    //         }
    //     })
    // }

    // 从私聊列表移除
    function removeUserRequest(associateId, token) {
        removeUser(associateId, token).then(res => {
            if (res.code == 1) {
                if (data.haveSend == false) {
                    console.log("在切换用户时已经告知后端了")
                    clearTimeout(data.sendTimer);
                    data.socket.emit('SYSTEM', {
                        type: 1,
                        targetUserId: data.friendId
                    })
                    data.haveSend = true;
                }
                $(".weTalkRemove").show();
                window.setTimeout(function () {
                    $(".weTalkRemove").hide();
                }, 3000)
                console.log("id比较", $(".weTalkChatMainHeadP").attr("data-id"), data.removeFriendId)
                if ($(".weTalkChatMainHeadP").attr("data-id") == associateId) {
                    $(".weTalkChatMain").html("");
                    $(".weTalkRightItem").hide();
                    $("weTalkInitial").show();
                }
                data.weTalkPerList.splice(data.removeIndex, 1)
                // 判断添加到会话列表的依据之一
                data.isHasThisFriend = false;
                data.friendId = "";
                data.friendIndex = "";
                // 重新渲染私聊列表
                showPersonalList();
                $(".weTalkRemoveDiag").hide()
            }
        })
    }

    function removeRoomRequest(id, token) {
        removeUser(id, token).then(res => {
            if (res.code == 1) {
                $(".weTalkRemove").show();
                window.setTimeout(function () {
                    $(".weTalkRemove").hide();
                }, 3000)
                if (data.websiteId == data.removeWebsiteId) {
                    $(".weTalkChatMain").html("");
                    $(".weTalkRightItem").hide();
                    $("weTalkInitial").show();
                }
                data.weTalkPerList.splice(data.removeIndex, 1)
                data.friendId = "";
                data.friendIndex = "";
                // 重新渲染私聊列表
                showPersonalList();
                $(".weTalkRemoveDiag").hide()
            }
        })
    }

    // 购买会员
    function buyVipPaymentRequest() {
        if (data.memberId) {
            // console.log("积分数量", data.membercPrice, data.point)
            if (data.point - data.membercPrice > 0) {
                // console.log("可以购买")
                buyVipPayment(data.memberId, data.token).then(res => {
                    if (res.code == 1) {
                        showTip("购买成功")
                        $(".weTalkStartMember").hide();
                        info(data.token).then(res => {
                            if (res.code == 1) {
                                // 积分余额
                                $(".weTalkPointVal").html(`
                                    ${data.point - data.membercPrice}
                                `)
                                data.vip = res.data.vip;
                                $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoVip").show();
                                $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoLow").show();
                                $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkKthy").hide();

                                $(".weTalkNickVip").html(`${data.nickname}`).show();
                                $(".weTalkNick").hide();
                                if ($(".weTalkChangeMethod").length > 0) {
                                    $(".weTalkChangeMethod").remove();
                                }
                                $(`
                                <label class="weTalkChangeMethod weTalkPointer" for="weTalkChangeMethodInput">更改头像</label>
                                <input id="weTalkChangeMethodInput" type="file">
                              `).insertAfter($(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar"));
                            }
                        })
                    }
                })
            } else {
                showTip("积分不足");
            }
        } else {
            showTip("请先选择有效期")
        }
    }

    // 获取签到信息
    function getSignInfoRe() {
        getSignInfo(data.token).then(res => {
            if (res.code == 1) {
                data.weTalkSignDays = res.data.signDays - 1;
                data.weTalkSignPoints = res.data.points;
                if ($(".weTalkSignDays").children().length > 0) {
                    $(".weTalkSignDays").html(``);
                }
                $(".weTalkSignInView").css({ "background-image": `url('./images/sView.png') ` })
                for (let j = 0; j < data.weTalkSignDays; j++) {
                    let weTalkASign = $(`
              <div class="weTalkSignDay">
                <div class="weTalkSignImg">+${data.weTalkSignPoints[j]}</div>
                <div class="weTalkSignFont">第${data.weTalkSignArr[j]}天</div>
              </div>
          `)
                    weTalkASign.children(".weTalkSignImg").css({ "background-image": `url('./images/s00.png')` })
                    weTalkASign.children(".weTalkSignFont").css({ "margin-top": "7px" })
                    weTalkASign.appendTo($(".weTalkSignDays"))
                }
                for (let i = data.weTalkSignDays; i < 7; i++) {
                    let weTalkSign = $(`
                  <div class="weTalkSignDay">
                    <div class="weTalkSignDiyImg">+${data.weTalkSignPoints[i]}</div>
                    <div class="weTalkSignFont">第${data.weTalkSignArr[i]}天</div>
                  </div>
              `)
                    weTalkSign.children(".weTalkSignFont").css({ "margin-top": "7px" })
                    weTalkSign.children(".weTalkSignDiyImg").css({ "margin-top": "14px" })
                    weTalkSign.appendTo($(".weTalkSignDays"))
                }
                if (!(res.data.hasSignToday)) {
                    $(".weTalkGetQdRevenue").attr({ "src": './images/getJf.png' });
                    $(".weTalkGetQdRevenue").off("click").on("click", function () {
                        signIn(data.token).then(res1 => {
                            if (res1.code == 1) {
                                $(".weTalkSignSuc").show();
                                setTimeout(function () {
                                    $(".weTalkSignSuc").hide();
                                }, 3000)
                                data.point = res1.data;
                                $(".weTalkPointVal").html(`
                                            ${data.point}
                                        `)
                                getSignInfoRe();
                            }
                        })
                    })
                } else {
                    $(".weTalkGetQdRevenue").attr({ "src": './images/sure.png' });
                    $(".weTalkGetQdRevenue").off("click").on("click", function () {
                        $(".weTalkSignInView").hide();
                        $(".weTalkFunCover").hide();
                    })
                }
            }
        })
    }

    function registerRe() {
        register(data.weTalkReg, data.weTalkAccount, data.weTalkAccountPswd, data.weTalkRegSex, data.curDomain, data.token).then(res => {
            if (res.code == 1) {
                // 清空输入框
                $("#weTalkReg").val("");
                $("#weTalkAccount").val("");
                $("#weTalkAccountPswd").val("");
                localStorage.setItem("token", res.message);
                // $(".weTalkRegSuc").show();
                // alert("注册成功");
                showGlobalTip("注册成功");
                $("#weTalkRegBtn").css("pointer-events", "none");
                $("#weTalkLogBtn").css("pointer-events", "none");
                startChatRoom();
                $(".weTalkRegSuc").hide();
                $(".weTalkRegView").hide();
                $(".weTalkWeb").hide();
                setTimeout(function () {
                    $("#weTalkRegBtn").css("pointer-events", "auto");
                    $("#weTalkLogBtn").css("pointer-events", "auto");
                }, 3000)
            } else if (res.code == 10004) {
                $(".weTalkRegUserIsHas").show();
                $("#weTalkAccount").val("");
                $("#weTalkAccountPswd").val("");
                setTimeout(function () {
                    $(".weTalkRegUserIsHas").hide();
                }, 3000)
            } else {
                $(".weTalkError").show();
                $("#weTalkReg").val("");
                $("#weTalkAccount").val("");
                $("#weTalkAccountPswd").val("");
                setTimeout(function () {
                    $(".weTalkError").hide();
                }, 3000)
            }
        })
    }

    // 切换聊天室
    function changeRoomRequest(websiteId, isDefault) {
        data.isPublic = 1;
        // console.log("websiteId", websiteId, "friendId", data.friendId)
        // 初始化
        $(".weTalkPublicChannnellNum").hide();
        data.chatPublicNum = 0;
        $(".weTalkChatItem").css({ background: "#fff" });
        // $(".weTalkChatItem").children('.weTalkRemoveUser2').hide();
        $(".weTalkChatItem").children('.weTalkRemoveUser1').hide();
        $(".weTalkChatItem").attr("data-ischoosed", "a")
        // 需要打开的聊天窗口不是当前窗口
        if (websiteId != data.friendId) {
            $(".weTalkChatMain").html(`
            <div class="weTalkLoadRecord">
              <img class="weTalkLoadAni" src="./images/loading.png"/>
              <div class="weTalkLoadingTip">内容加载中，请稍等...</div>
            </div>
            `);
            $(".weTalkLoadRecord").css({ "visibility": "visible" })
            data.isLoadRecords = true;
            $(".weTalkRightItem").hide();
            $(".weTalkRightMain").show();
            $(".weTalkUsers").show();
            var _websiteId = data.websiteId ? data.websiteId : data.webDesiteId;
            // 需要打开的聊天室不是当前聊天室(切换房间)
            if (_websiteId != websiteId) {
                $('.weTalkFunCover').show();
                $(".weTalkSwitchChatRoomTip").show().attr("data-websiteId", websiteId);
                console.log("切换房间")
            } else {
                // 需要打开的聊天窗口是当前窗口
                // 第一次点击默认聊天室
                if (data.websiteId == null) {
                    // $(".weTalkChatMain").html("");
                    // console.log("第一次点击默认聊天室")
                    data.websiteId = data.webDesiteId;
                    $(".weTalkChatMainHead").show();
                    // 加载聊天室头
                    buildRoomHead();
                    data.friendId = data.websiteId;
                    getPublicLogRequset(data.roomId, data.token, true);
                    getOnlineUsersRequest();
                } else {
                    // 读本地数据加载聊天室记录
                    loadDeRoomRecords()
                }
            }
        }
    }

    // 加载登录页面
    function loadLoginView() {
        if (data.isOpenLoginViewFirst) {
            if ($(".weTalkLogView").length > 0) {
                $(".weTalkLogView").remove();
            }
            if ($(".weTalkRegResetPswdV").length > 0) {
                $(".weTalkRegResetPswdV").remove();
            }
            if ($(".weTalkRegView").length > 0) {
                $(".weTalkRegView").remove();
            }

            let weTalkLogView = $(`
          <div class="weTalkLogView" id="weTalkLogView">
            <div class="weTalkFj">您已被封禁</div>
            <div class="weTalkUserNameEmpty">用户名不得为空</div>
            <div class="weTalkUserPswdEmpty">密码不得为空</div>
            <div class="weTalkLogLSuc">登录成功</div>
            <div class="weTalkSwitchFail">用户名或密码不正确</div>
            <div class="weTalkYlogin">用户已登录</div>
            <div class="weTalkLogHead">
                <img class="weTalklogLogo" src="./images/WeTalk.png"/>
                <div class="weTalkLogTilte" style="margin-left:25px;">WeTalk</div>
            </div>
            <div class="weTalkRegItem">
              <div class="weTalkRegTitle">帐号：</div>
              <input id="weTalkUsername" class="weTalkRegInput" type="text" placeholder="请输入用户名或电子邮箱"/>
            </div>
            <div class="weTalkRegItem">
              <div class="weTalkRegTitle">密码：</div>
              <input id="weTalkUserPswd" class="weTalkRegInput" type="password" placeholder="请输入密码"/>
            </div>
            <div class="weTalkRegItem">
                <div class="weTalkBlock"></div>
                <div class="weTalkRegBtns weTalkPointer" id="weTalkLogLBtn">登录</div>
            </div>
            <div class="weTalkRegItem">
                <div class="weTalkBlock"></div>
                <div class="weTalkAccountOpe">
                    <div class="weTalkRegAcc weTalkPointer">注册帐号</div>
                    <div class="weTalkRegResetPswd weTalkPointer">重置密码</div>
                </div>
            </div>
          </div>
          `).appendTo("body")

            // 绑定回车登录
            $(document).off("keyup").on("keyup", function (event) {
                if ($(".weTalkLogView").css("display") == "block") {
                    // console.log("登录界面", $(".weTalkLogView").css("display"))
                    if (event.which === 13) {
                        // console.log("回车登录");
                        loginByAccountRequest();
                    }
                }
            })

            $(`
                <div class="weTalkWeb">https://www.wetalk.icu</div>
            `).off("click").on("click", function () {
                window.open("https://www.wetalk.icu", "_blank");
            }).appendTo("body");

            $("#weTalkLogLBtn").css({ "background": " #944eea", "color": "#fff", "border": "0" })



            // 监听输入框
            $("#weTalkUsername").on("input propertychange", function () {
                data.weTalkUsername = $("#weTalkUsername").val();
            });

            $("#weTalkUserPswd").on("input propertychange", function () {
                data.weTalkUserPswd = $("#weTalkUserPswd").val();
            });

            let fgPswd = $(`
                <div class="weTalkRegResetPswdV">
                    <div class="weTalkFGEmailEmpty">邮箱不能为空</div>
                    <div class="weTalkFGEmailUncorrect"></div>
                    <div class="weTalkLogHead">
                        <img class="weTalklogLogo" src="./images/WeTalk.png"/>
                        <div class="weTalkLogTilte" style="margin-left:25px;">WeTalk</div>
                    </div>
                    <input class="weTalkRegInput" id="weTalkRegResetPswdmail" placeholder="请输入电子邮箱">
                    <div class="weTalkResetTip">如需重设密码，请输入已绑定的邮箱地址，我们将向该邮箱
                    地址发送电子邮件。</div>
                    <div class="weTalkSubmitReset">确认</div>
                    <div class="weTalkSwitchOpe">
                        <div class="weTalkSwitchLogin">账号登录</div>
                        <div class="weTalkSwitchRegister">账号注册</div>
                    </div>
                </div>
            `)
            fgPswd.appendTo("body");

            // 忘记密码
            $(".weTalkRegResetPswd").click(function () {
                $(".weTalkRegResetPswdV").show();
                $(".weTalkLogView").hide();
            });

            $("#weTalkRegResetPswdmail").on("input propertychange", function () {
                data.weTalkFGmail = $("#weTalkRegResetPswdmail").val();
            });

            $(".weTalkSubmitReset").click(function () {
                forgetPasswordRequest();
            });

            // 忘记密码切换登录
            $(".weTalkSwitchLogin").off("click").on("click", function () {
                $(".weTalkLogView").show();
                $(".weTalkRegResetPswdV").hide();
            })

            // 忘记密码切换注册
            $(".weTalkSwitchRegister").off("click").on("click", function () {
                $(".weTalkRegView").show();
                $(".weTalkRegResetPswdV").hide();
                $(".weTalkWeb").hide();
            })


            // 登录
            $("#weTalkLogLBtn").off("click").on("click", function () {
                loginByAccountRequest();
            })

            // 切换注册
            $(".weTalkRegAcc").off("click").on("click", function () {
                // 自动读取一个昵称
                getRandNickname().then(res => {
                    $("#weTalkReg").val(`${res.message}`)
                    data.weTalkReg = res.message;
                })
                weTalkLogView.hide();
                weTalkregView.show();
                $(".weTalkWeb").hide();
            })


            // 注册
            if ($(".weTalkRegView").length > 0) {
                $(".weTalkRegView").remove();
            }
            let weTalkregView = $(`
            <div class="weTalkRegView">
            <div class="weTalkRegSuc">注册成功</div>
            <div class="weTalkRegUserIsHas">用户已存在</div>
            <div class="weTalkRegCommon"></div>
            <div class="weTalkLogHead">
                <img class="weTalklogLogo" src="./images/WeTalk.png"/>
                <div class="weTalkLogTilte" style="margin-left:25px;">WeTalk</div>
            </div>
            <div class="weTalkRegItem" id="weTalkRegNickV">
              <div class="weTalkBlock" style="width:70px"></div>
              <div class="weTalkRegTitle">昵称：</div>
              <input id="weTalkReg" class="weTalkRegInput" type="text" />
              <div class="weTalkChangeNick weTalkPointer">
                换一个<img class="weTalkChangeImg"/>
              </div>
            </div>
            <div class="weTalkRegItem">
              <div class="weTalkRegTitle">帐号：</div>
              <input id="weTalkAccount" class="weTalkRegInput" type="text" placeholder="请输入用户名(5-20个字符)"/>
            </div>
            <div class="weTalkRegItem">
            <div class="weTalkRegTitle">密码：</div>
            <input id="weTalkAccountPswd" class="weTalkRegInput" type="password" placeholder="请输入密码(5-20个字符)"/>
          </div>
            <div class="weTalkRegItem">
              <div class="weTalkRegTitle">性别：</div>
              <input
                class="weTalkRegRa"
                type="radio"
                name="regSex"
                value="1"
                id="regSex1"
              />
              <label class="weTalkRegLa" for="regSex1">男</label>
      
              <input
                class="weTalkRegRa"
                type="radio"
                name="regSex"
                value="2"
                id="regSex2"
              />
              <label class="weTalkRegLa" for="regSex2">女</label>

              <div class="weTalkBlock" style="width:256px;"></div>
            </div>
            <div class="weTalkRegItemc">
              <div class="weTalkBlock"></div>
              <input type="checkbox" id="weTalkUserDeal" />
              <span for="weTalkUserDeal">
                <span class="weTalkDealFont">我已阅读并同意</span>
                <span class="weTalkDealFont weTalkPurpleF weTalkPointer" id="weTalkUserXy">《WeTalk用户协议》</span>
                <span class="weTalkDealFont weTalkPurpleF weTalkPointer" id="weTalkZc">《WeTalk隐私政策》</span>
              </span>
            </div>
            <div class="weTalkRegItem">
                <div class="weTalkBlock"></div>
                <div class="weTalkRegBtns weTalkPointer" id="weTalkRegBtn">提交注册</div>
            </div>
            <div class="weTalkRegItem" style="margin-top:10px;">
                <div class="weTalkBlock"></div>
                <div class="weTalkRegBtns weTalkPointer" id="weTalkLogBtn">登录</div>
            </div>
          </div>
          `).appendTo("body");

            // 自动读取一个昵称
            // getRandNickname().then(res => {
            //     $("#weTalkReg").val(`${res.message}`)
            //     data.weTalkReg = res.message;
            // })
            weTalkregView.children("#weTalkRegNickV").children(".weTalkChangeNick").children("img").attr({ "src": './images/refresh.png' })

            // 监听输入框
            $("#weTalkReg").on("input propertychange", function () {
                data.weTalkReg = $("#weTalkReg").val();
            });

            $("#weTalkAccount").on("input propertychange", function () {
                data.weTalkAccount = $("#weTalkAccount").val();
            });

            $("#weTalkAccountPswd").on("input propertychange", function () {
                data.weTalkAccountPswd = $("#weTalkAccountPswd").val();
            });

            // 监听单选框
            $("input[type=radio][name=regSex]").on("change", function () {
                data.weTalkRegSex = this.value;
            });
            // 默认性别
            $('input:radio[name="regSex"][value="1"]').prop('checked', true);
            data.weTalkRegSex = 1;


            // 换一个昵称
            $(".weTalkChangeNick").on("click", function () {
                getRandNickname().then(res => {
                    $("#weTalkReg").val(`${res.message}`)
                    data.weTalkReg = res.message;
                })
            })
            // 注册
            $('#weTalkRegBtn').on("click", function () {
                if (data.weTalkReg == null || data.weTalkReg.length == 0) {
                    $(".weTalkRegCommon").html(`昵称不能为空`).show();
                    setTimeout(function () {
                        $(".weTalkRegCommon").hide();
                    }, 3000)
                    return;
                }
                if (strlen(data.weTalkReg) < 4 || strlen(data.weTalkReg) > 14) {
                    $(".weTalkRegCommon").html(`昵称长度：最少4个字符，最多14个字符（中文算2个）`).show();
                    setTimeout(function () {
                        $(".weTalkRegCommon").hide();
                    }, 3000)
                    return;
                }
                // ）
                if (data.weTalkAccount == null || data.weTalkAccount.length == 0) {
                    $(".weTalkRegCommon").html(`帐号不能为空`).show();
                    setTimeout(function () {
                        $(".weTalkRegCommon").hide();
                    }, 3000)
                    return;
                }
                if (data.weTalkAccountPswd == null || data.weTalkAccountPswd.length == 0) {
                    $(".weTalkRegCommon").html(`密码不能为空`).show();
                    setTimeout(function () {
                        $(".weTalkRegCommon").hide();
                    }, 3000);
                    return;
                }
                if (data.weTalkRegSex == null || data.weTalkRegSex.length == 0) {
                    $(".weTalkRegCommon").html(`请选择性别`).show();
                    setTimeout(function () {
                        $(".weTalkRegCommon").hide();
                    }, 3000);
                    return;
                }
                if (!(/^[A-Za-z0-9]+$/.test(data.weTalkAccountPswd)) && data.data.weTalkAccountPswd.length > 5 && data.data.weTalkAccountPswd < 21) {
                    $(".weTalkRegCommon").html(`密码不能包含特殊字符`).show();
                    setTimeout(function () {
                        $(".weTalkRegCommon").hide();
                    }, 3000);
                    return;
                }
                if (!(/^[a-zA-Z][a-zA-Z0-9_]{4,19}$/.test(data.weTalkAccount))) {
                    $(".weTalkRegCommon").html(`账号和密码长度：5-20个字符，数字和字母`).show();
                    setTimeout(function () {
                        $(".weTalkRegCommon").hide();
                    }, 3000);
                    return;
                }
                if (!($("#weTalkUserDeal").prop('checked'))) {
                    $(".weTalkRegCommon").html(`请勾选我已阅读并同意《WeTalk用户协议》 《WeTalk隐私政策》`).show();
                    setTimeout(function () {
                        $(".weTalkRegCommon").hide();
                    }, 3000);
                    return;
                }
                registerRe();
            })

            // 切换登录
            $('#weTalkLogBtn').off("click").on("click", function () {
                weTalkLogView.show();
                weTalkregView.hide();
                $(".weTalkWeb").show();
            })
            data.isOpenLoginViewFirst = false;
            $(".weTalkLogView").show();
        } else {
            if ($(".weTalkLogView").css("display") == "none") {
                $(".weTalkLogView").show();
            } else {
                $(".weTalkLogView").hide();
                $(".weTalkLogView").hide();
            }
        }
        // 协议和政策
        $("#weTalkUserXy").on("click", function () {
            window.open("https://www.wetalk.icu/userAgreement.html", "_blank");
        })

        $("#weTalkZc").on("click", function () {
            window.open("https://www.wetalk.icu/privacyPolicy.html", "_blank");
        })
    }

    // 禁用/恢复登录按钮
    function forbiddenBtn() {
        $("#weTalkLogLBtn").css("pointer-events", "none");
        $(".weTalkRegAcc").css("pointer-events", "none");
        $(".weTalkRegResetPswd").css("pointer-events", "none");

    }

    function recoverBtn() {
        $("#weTalkLogLBtn").css("pointer-events", "auto");
        $(".weTalkRegAcc").css("pointer-events", "auto");
        $(".weTalkRegResetPswd").css("pointer-events", "auto");
    }

    // 显示提示
    function showTip(val) {
        if($(".weTalkCommonTip").css("display") == "none"){
            $(".weTalkCommonTip").html(`${val}`).show();
            setTimeout(function () {
                $(".weTalkCommonTip").hide().html("");
            }, 3000)
        }else{
            $(".weTalkCommonTip").html(`${val}`)
        }
    }

    // 转发切换会话
    function zfSwitchSession() {
        // console.log("默认添加会话")
        $(".weTalkZfSwitchSession").css("color", "#944EEA");
        $(".weTalkZfSwitchFriend").css("color", "#333");
        // 获取转发人列表
        $(".weTalkTransmitList").html("");
        data.weTalkPerList.forEach((item, index) => {
            if (item.isUsers) {
                let weTalkTransmitItem = $(`
                <div class="weTalkTransmitItem">
                    <div class="weTalkTransmitItemLeft">
                      <div class="weTalkTransmitItemLeftAvatar">
                        <img class="weTalkTransmitAvatarImg" />
                        <div class="weTalkTransmitDefaultAvatar">${item.nickname.substring(0, 1)}</div>
                        <img class="weTalkTransmitSexImg"/>
                      </div>
                        <div class="weTalkTransmitItemLeftTitle">${item.nickname}</div>
                          </div>
                        <input type="checkbox" name="weTalkTransmitObj" value="${item.userId}" class="weTalkTransmitItemRight weTalkPointer"/>
                  </div>
                `).appendTo($(".weTalkTransmitList"))

                if (item.avatar) {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitAvatarImg").attr("src", `${data.cdn}${item.avatar.replace(/\\/g, "/")}`).show();
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitDefaultAvatar").hide();
                } else {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitDefaultAvatar").show();
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitAvatarImg").hide().attr("src", "");
                }

                if (item.sex == 1) {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitSexImg").attr("src", "./images/man.png")
                } else if (item.sex == 2) {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitSexImg").attr("src", "./images/woman.png")
                } else {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitSexImg").hide().attr("src", "")
                }
            }
        })
        $(".weTalkTransmitList").append(`
            <div class="weTalkTransmitItem">
                <div class="weTalkTransmitItemLeft">
                <img class="weTalkTransmitItemLeftAvatar" src="./images/title.png">
                <div class="weTalkTransmitItemLeftTitle">${data.websiteTitle}</div>
                </div>
                <input type="checkbox" name="weTalkTransmitObjP" value="${data.roomId}" class="weTalkTransmitItemRight weTalkPointer"></input>
            </div>
                    `)
    }

    // 转发切换好友
    function zfSwitchFriend() {
        let nick;
        $(".weTalkZfSwitchFriend").css("color", "#944EEA");
        $(".weTalkZfSwitchSession").css("color", "#333");
        // 获取转发人列表
        $(".weTalkTransmitList").html("");
        getFriends(data.token).then(res => {
            data.weTalkFriendList = res.data;
            data.weTalkFriendList.forEach((item, index) => {
                if (item.nickname) {
                    nick = item.nickname.substring(0, 1);
                } else {
                    nick = "W";
                }
                let weTalkTransmitItem = $(`
                    <div class="weTalkTransmitItem">
                        <div class="weTalkTransmitItemLeft">
                          <div class="weTalkTransmitItemLeftAvatar">
                            <img class="weTalkTransmitAvatarImg" />
                            <div class="weTalkTransmitDefaultAvatar">${nick}</div>
                            <img class="weTalkTransmitSexImg"/>
                          </div>
                            <div class="weTalkTransmitItemLeftTitle">${item.nickname}</div>
                              </div>
                            <input type="checkbox" name="weTalkTransmitObj" value="${item.friendUserId}" class="weTalkTransmitItemRight weTalkPointer"/>
                      </div>
                    `).appendTo($(".weTalkTransmitList"))

                if (item.friendNote != null) {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftTitle").html(`${item.friendNote}`)
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitDefaultAvatar").html(`${item.friendNote}`)
                }

                if (item.avatar) {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitAvatarImg").attr("src", `${data.cdn}${item.avatar.replace(/\\/g, "/")}`).show();
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitDefaultAvatar").hide();
                } else {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitDefaultAvatar").show();
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitAvatarImg").hide().attr("src", "");
                }

                if (item.sex == 1) {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitSexImg").attr("src", "./images/man.png")
                } else if (item.sex == 2) {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitSexImg").attr("src", "./images/woman.png")
                } else {
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitSexImg").hide().attr("src", "")
                }
            })

        })
    }

    // 获取当前的小时和分钟数
    function getMyHour() {
        var h, m;
        h = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
        m = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
        return { h: h, m: m };
    }

    // 取消收藏
    function removeFavoriteRequest(websiteId, token) {
        let webid;
        favorite(data.token).then(res => {
            data.favouriteRooms = res.data;
            for (let i = 0; i < data.favouriteRooms.length; i++) {
                if (data.favouriteRooms[i].websiteId == websiteId) {
                    webid = data.favouriteRooms[i].id;
                    break;
                }
            }
            removeFavorite(webid, token).then(res => {
                if (res.code == 1) {
                    showTip("取消收藏成功")
                    $(".weTalkChatMainHeadEvent").html("加入收藏").off("click").on("click", function () {
                        addFavoriteRequest(data.websiteId, data.token);
                    })
                }
            })
        })

    }

    // 个人信息发起私聊
    function overPersonalSL() {
        // 判断元素是否重复，如不重复将该用户加载到私聊列表
        let isHas = false;
        // 根据聊天记录类型添加用户到私聊列表
        for (let i = 0; i < data.weTalkPerList.length; i++) {
            if (res.data.id == data.weTalkPerList[i].userId) {
                // 销毁@
                $("#weTalkChatFrame").atwho('destroy');
                $(".weTalkRightItem").hide();
                $(".weTalkRightMain").show();
                $(".weTalkChatMain").html("");
                isHas = true;
                data.friendIndex = i;
                data.friendId = data.weTalkPerList[i].userId;
                $(".weTalkChatItemList").children().each(function () {
                    if ($(this).attr("data-id") == data.friendId) {
                        setSessionItem($(this));
                    }
                })
                loadByFriend(data.weTalkPerList[i].userId, i);
                $(".weTalkOtherInfo").hide();
                $(".weTalkOverCover").hide();
                break;
            }
        }
        if (!isHas) {
            addUserMethod(res.data.id, 2, 0);
            thatzf.hide();
            $(".weTalkOverCover").hide();
        }
    }

    // 他人信息
    function showOtherInfo(userId) {
        // console.log("渲染他人信息")
        // 保存当前他人信息的userId；
        data.otherUserId = userId;
        // 加载他人信息页面
        otherUserInfo(userId, data.token).then(res => {
            // 昵称
            data.otherInfo.children(".weTalkOtherNick").html("昵称：" + res.data.nickname);
            // 个人签名
            data.otherInfo.children(".weTalkOtherPerSign").html();
            // 默认头像
            data.otherInfo.children(".weTalkOtherAvatar").children(".weTalkOtherDefaultAvatar").html(res.data.nickname.substring(0, 1))
            // 更改过的头像
            if (res.data.avatar) {
                $(".weTalkOtherAvatarImg").attr("src", `${data.cdn}${res.data.avatar.replace(/\\/g, "/")}`).show();
                $(".weTalkOtherDefaultAvatar").hide();
            } else {
                $(".weTalkOtherAvatarImg").hide();
                $(".weTalkOtherDefaultAvatar").show();
            }
            // 性别
            if (res.data.sex == 1) {
                data.otherInfo.children(".weTalkOtherAvatar").children(".weTalkOtherSexImg").attr({ "src": './images/boy.png' })
            } else if (res.data.sex == 2) {
                data.otherInfo.children(".weTalkOtherAvatar").children(".weTalkOtherSexImg").attr({ "src": './images/girl.png' })
            } else {
                data.otherInfo.children(".weTalkOtherAvatar").hide()
            }
            // 备注
            if (res.data.friendNote) {
                // console.log("有备注")
                data.otherInfo.children(".weTalkOtherBz").html(`备注：${res.data.friendNote}`).show()
            } else {
                // console.log("无备注")
                data.otherInfo.children(".weTalkOtherBz").hide();
            }
            // Ta 在看url
            $(".weTalkOtherTzkContent").off("click").on("click", function () {
                window.open(res.data.url);
            })
            // Ta在看
            if (res.data.title) {
                data.otherInfo.children(".weTalkOtherTzk").children(".weTalkOtherTzkContent").html(`${res.data.title}`);
            } else {
                data.otherInfo.children(".weTalkOtherTzk").children(".weTalkOtherTzkContent").html(`暂无`);
            }
            // 个人签名
            if (res.data.signature == null || res.data.signature == "") {
                data.otherInfo.children(".weTalkOtherPerSign").html(`这个人很懒，什么都没留下`);
            } else {
                data.otherInfo.children(".weTalkOtherPerSign").html(`${res.data.signature}`);
            }
            // 按钮
            friendAndBlock(userId, data.token).then(res1 => {
                if (res1.data.isFriend) {
                    $("#friendBtn").html(`解除好友`)
                } else {
                    $("#friendBtn").html(`加为好友`)
                }

                if (res1.data.isBlock) {
                    $("#lhBtn").html(`移出黑名单`)
                } else {
                    $("#lhBtn").html(`加入黑名单`)
                }
                // 激活他人信息页面
                $(".weTalkOverCover").show();
                data.otherInfo.show();
            })
        })
    }

    // 私聊
    function launchPersonalChat(user, userId, userIndex, username, associateId) {
        // 输入框为私人
        data.isPublic = 0;
        // 销毁@
        $("#weTalkChatFrame").atwho('destroy');
        // 隐藏
        $(".weTalkRightItem").hide();
        $(".weTalkRightMain").show();
        $(".weTalkChatMainHeadP").show().attr("data-id", associateId);
        // 点击时告知后端已读
        if (data.haveSend == false) {
            console.log("在切换用户时已经告知后端了")
            clearTimeout(data.sendTimer);
            data.socket.emit('SYSTEM', {
                type: 1,
                targetUserId: data.friendId
            })
            data.haveSend = true;
        }
        // 初始化
        data.friendId = userId;
        data.friendIndex = userIndex;
        // 加载聊天框头部
        $(".weTalkChatMainHeadNameP").html(username);
        friendAndBlock(data.friendId, data.token).then(res => {
            if (res.data.isFriend) {
                // console.log("是好友")
                $(".weTalkChatMainHeadEventP").html("解除好友").off("click").on("click", function () {
                    removeFriendRequestByChat(data.friendId);
                });
            } else {
                // console.log("不是好友")
                $(".weTalkChatMainHeadEventP").html("添加好友").off("click").on("click", function () {
                    addFriendRequestByChat(data.friendId);
                });

            }
        })
        // 默认选中状态
        setSessionItem(user);
        // 加载聊天记录
        loadByFriend(data.friendId, userIndex);
    }

    // 渲染聊天室记录
    function showPublicRecords(roomId) {
        if (data.haveSend == false) {
            console.log("在切换默认聊天室时已经告知后端了")
            clearTimeout(data.sendTimer);
            data.socket.emit('SYSTEM', {
                type: 1,
                targetUserId: data.friendId
            })
            data.haveSend = true;
        }
        // 隐藏
        $(".weTalkRightItem").hide();
        $(".weTalkRightMain").show();
        $(".weTalkUsers").show();
        $(".weTalkChatMainHead").show();
        // 加载聊天框头
        buildRoomHead();
        // 渲染聊天记录
        getPublicLogRequset(roomId, data.token, true);
        // 渲染在线用户列表
        getOnlineUsersRequest();
    }

    // 打印
    function l(...obj) {
        console.log(obj);
    }

    // 加载会话列表的私聊聊天内容
    function loadSessionContent(record, index) {
        // console.log("加载了")
        if (record) {
            let content = record.content,
                messageType = record.messageType,
                curHour = new Date(record.timestamp * 1).getHours() < 10 ? "0" + new Date(record.timestamp * 1).getHours() : new Date(record.timestamp * 1).getHours(),
                curMin = new Date(record.timestamp * 1).getMinutes() < 10 ? "0" + new Date(record.timestamp * 1).getMinutes() : new Date(record.timestamp * 1).getMinutes(),
                user;
            // 判断内容的类型
            if (messageType == 1) {
                content = disposeText(record);
            }
            else if (messageType == 2) {
                content = "[图片]"
            } else if (messageType == 4) {
                content = "[骰子]"
            } else if (messageType == 5) {
                content = "[硬币]"
            } else if (messageType == 6) {
                content = "[石头剪子布]"
            }
            if (content) {
                splitBr = content.indexOf("<br>");
                if (splitBr != -1) {
                    content = content.substring(0, splitBr);
                }
            }
            if (record.senderId == data.id) {
                user = "我：";
            } else {
                for (let i = 0; i < data.weTalkPerList.length; i++) {
                    if (record.senderId == data.weTalkPerList[i].userId) {
                        // user = data.weTalkPerList[i].nickname;
                        user = "";
                        break;
                    }
                }
            }
            $(".weTalkChatItemList").children().each(function () {
                if ($(this).attr("data-index") == index) {
                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                    // console.log($(this).children(".weTalkChatItemOne").children(".weTalkNewsTime")[0], $(this).children(".weTalkChatItemOne")[0])
                    $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                }
            })
        }

    }

    // 幸运抽奖
    function lottery() {
        data.friendId = "发现";
        data.isPublic = 0;
        loadJS('./js/lottery.js', function () {
            choujiangInit();
        });
    }

    // 碎片兑换
    function fragExChange() {
        data.friendId = "发现";
        data.isPublic = 0;
        loadJS('./js/chip/server.js', function () { })
        loadCSS('./css/frag.css')
        loadJS('./js/chip/frag.js', function () {
            fragInit();
        })
    }

    // 加载聊天记录（合并）
    function loadRecordFin(item, index, isSocketIo) {
        // sockeio加载时需要判断滚动条的位置
        if (isSocketIo && item.messageType != 2) {
            // 滚动条位于最底部
            if (scrollBottom($(".weTalkChatMain"))) {
                data.canScroll = true;
            }
        }
        if (item.nickname) {
            item.avatarDefault = item.nickname.substring(0, 1);
        }
        if (item.senderId != data.id) {
            let otherChatRecord = $(`
                  <div class="weTalkChatOther">
                      <div class="weTalkChatOtherAvatarArr">
                        <div class="weTalkDefaultAvatar">${item.avatarDefault}</div>
                        <img class="weTalkChatOtherAvatar">
                      </div>
                      <div class="weTalkChatOtherRight">
                        <div class="weTalkChatOtherRightTransmit weTalkPointer">转发</div>
                        <div class="weTalkChatOtherInfo">
                          <img class="weTalkChatOtherSex">
                          <div class="weTalkChatFont">${item.nickname}</div>
                          <div class="weTalkChatMemberFont">${item.nickname}</div>
                        </div>
                        <div class="weTalkChatOtherContent"></div>
                      </div>
                    </div>
                  `)

            if (item.avatar) {
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkChatOtherAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkDefaultAvatar").css("display", "none");
            } else {
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkChatOtherAvatar").hide();
                otherChatRecord.children(".weTalkChatOtherAvatarArr").children(".weTalkDefaultAvatar").css("display", "block");
            }



            let weTalkChatOtherContent = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherContent")
            switch (item.messageType) {
                case 1:
                    if (isSocketIo) {
                        if (item.at) {
                            otherChatRecord.attr("data-at", item.at)
                        }
                        weTalkChatOtherContent.html("").append(item.content)
                        weTalkChatOtherContent.children("img").each(function () {
                            $(this).attr({ "class": "weTalkDisEmoj" })
                        })
                        weTalkChatOtherContent.children("span").children("img").each(function () {
                            $(this).attr({ "class": "weTalkDisEmoj" })
                        })
                    } else {
                        if (item.content instanceof jQuery) {
                            // console.log("是jquery对象")
                            weTalkChatOtherContent.html("").append(item.content);
                            otherChatRecord.attr("data-at", true)
                        } else {
                            if (/\[at\]/g.test(item.content)) {
                                item.content = item.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                                otherChatRecord.attr("data-at", true)
                            }
                            weTalkChatOtherContent.html("").append(item.content);
                            weTalkChatOtherContent.children("img").each(function () {
                                $(this).attr({ "class": "weTalkDisEmoj" })
                            })
                            weTalkChatOtherContent.children("span").children("img").each(function () {
                                $(this).attr({ "class": "weTalkDisEmoj" })
                            })
                        }
                    }
                    break;
                case 2:
                    weTalkChatOtherContent.attr("class", "weTalkChatOtherContent weTalkPointer");
                    weTalkChatOtherContent.css("background", "#fff")
                    weTalkChatOtherContent.html(`${item.content}`).hide();
                    if (isSocketIo) {
                        otherChatRecord.attr({ "data_img": item.img });
                    }

                    getImageInfo(weTalkChatOtherContent.children(".weTalkRecordsImg").attr("src"), function (width, height) {
                        imgResize(200, width, height);
                        weTalkChatOtherContent.children(".weTalkRecordsImg").width(squareW)
                        weTalkChatOtherContent.children(".weTalkRecordsImg").height(squareH)
                        weTalkChatOtherContent.show();
                        if (isSocketIo) {
                            if (scrollBottom($(".weTalkChatMain"))) {
                                data.canScroll = true;
                            }
                            otherChatRecord.appendTo($(".weTalkChatMain"));
                            if (data.canScroll) {
                                $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                            }
                        } else {
                            $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                        }

                        // 点击图片放大
                        weTalkChatOtherContent.off("click").on("click", function () {
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-width", $(window).width() - 80)
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-height", $(window).height() - 80)
                            $(".weTalkImgPreview").show().children(".weTalkImgPreviewImg").attr("src", weTalkChatOtherContent.children(".weTalkRecordsImg").attr("src"));
                            $(".weTalkOverCover").show();
                        })
                    })
                    break;
                case 4:
                    weTalkChatOtherContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/timg.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 6:
                    weTalkChatOtherContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/paoyingbi.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 5:
                    weTalkChatOtherContent.html(`
                  <img class="weTalkGameGif">
                  <img class="weTalkGameRes">
                `)
                    weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": "./images/hd/shitoujiandaobu.gif" })
                    weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png` })
                    weTalkChatOtherContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatOtherContent.children(".weTalkGameGif").hide();
                        weTalkChatOtherContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
            }
            // 添加自定义属性
            otherChatRecord.attr({ "data_nickname": item.nickname })
            otherChatRecord.attr({ "data_index": index })
            otherChatRecord.attr({ "data_vip": item.vip })
            otherChatRecord.attr({ "data_userId": item.senderId })
            otherChatRecord.attr({ "data_avatar": item.avatar })
            if (isSocketIo) {
                otherChatRecord.attr({ "data_isSocketIo": true })
            }
            weTalkChatOtherContent.attr({ "data_messageType": item.messageType })


            let otherChatRecordInfo = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherInfo");

            if (item.vip == 1 || item.vip == true) {
                otherChatRecordInfo.children(".weTalkChatFont").hide()
                otherChatRecordInfo.children(".weTalkChatMemberFont").css({ "display": "block" });
            }

            if (item.sex == 1) {
                otherChatRecord.attr({ "data_sex": 1 })
                otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": './images/boy.png' })
            } else if (item.sex == 2) {
                otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": './images/girl.png' })
            } else if (item.sex == undefined || item.sex == 0) {
                otherChatRecordInfo.children(".weTalkChatOtherSex").hide();
            }

            if (isSocketIo) {
                if (item.messageType != 2) {
                    otherChatRecord.appendTo($(".weTalkChatMain"));
                }
            } else {
                otherChatRecord.appendTo($(".weTalkChatMain"));
            }
        } else {
            let myChatRecord = $(`
                    <div class="weTalkChatSelf">
                            <div class="weTalkChatSelfLeft">
                              <div class="weTalkChatSelfLeftTransmit weTalkPointer">转发</div>
                              <div class="weTalkChatSelfInfo">
                                <div class="weTalkChatSelfInfoLeft"></div>
                                <div class="weTalkChatSelfInfoRight">
                                    <img class="weTalkChatSelfSex" src="./images/boy.png" alt="">
                                    <span class="weTalkChatFont">${data.nickname}</span>
                                    <span class="weTalkChatMemberFont">${data.nickname}</span>
                                </div>
                              </div>
                              <div class="weTalkChatSelfContent">${item.content}</div>
                            </div>
                            <img class="weTalkChatSelfAvatar">
                            <div class="weTalkDefaultAvatar">${item.avatarDefault}</div>
                    </div>
                  `)

            if (!(item.avatar)) {
                myChatRecord.children(".weTalkChatSelfAvatar").hide();
                myChatRecord.children(".weTalkDefaultAvatar").css("display", "block");
            } else {
                myChatRecord.children(".weTalkChatSelfAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
                myChatRecord.children(".weTalkDefaultAvatar").css("display", "none");
            }


            let weTalkChatSelfContent = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent")
            switch (item.messageType) {
                case 1:
                    if (isSocketIo) {
                        if (item.at) {
                            myChatRecord.attr("data-at", item.at)
                        }
                        // console.log("测试", item.content, /\[at\]/g.test(item.content))
                        if (/\[at\]/g.test(item.content)) {
                            item.content = item.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                        }
                    } else {
                        if (/\[at\]/g.test(item.content)) {
                            myChatRecord.attr("data-at", true)

                            item.content = item.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                        }
                    }
                    weTalkChatSelfContent.html("").append(item.content)
                    weTalkChatSelfContent.children("img").each(function () {
                        $(this).attr({ "class": "weTalkDisEmoj" })
                    })
                    weTalkChatSelfContent.children("span").children("img").each(function () {
                        $(this).attr({ "class": "weTalkDisEmoj" })
                    })
                    break;
                case 2:
                    weTalkChatSelfContent.html(`${item.content}`).hide();
                    weTalkChatSelfContent.attr("class", "weTalkChatSelfContent weTalkPointer");
                    weTalkChatSelfContent.css("background", "#fff")
                    if (isSocketIo) {
                        myChatRecord.attr({ "data_img": item.img });
                    }

                    getImageInfo(weTalkChatSelfContent.children(".weTalkRecordsImg").attr("src"), function (width, height) {
                        // 在这里面使用
                        imgResize(200, width, height);
                        weTalkChatSelfContent.children(".weTalkRecordsImg").width(squareW)
                        weTalkChatSelfContent.children(".weTalkRecordsImg").height(squareH)
                        weTalkChatSelfContent.show();
                        if (isSocketIo) {
                            if (scrollBottom($(".weTalkChatMain"))) {
                                data.canScroll = true;
                            }
                            myChatRecord.appendTo($(".weTalkChatMain"));
                            if (data.canScroll) {
                                $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                            }
                            // recordPoolOpe();
                        } else {
                            $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                        }

                        // 点击图片放大
                        weTalkChatSelfContent.off("click").on("click", function () {
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-width", $(window).width() - 80)
                            $(".weTalkImgPreview").children(".weTalkImgPreviewImg").css("max-height", $(window).height() - 80)
                            $(".weTalkImgPreview").show().children(".weTalkImgPreviewImg").attr("src", weTalkChatSelfContent.children(".weTalkRecordsImg").attr("src"));
                            $(".weTalkOverCover").show();
                        })
                    })
                    break;
                case 4:
                    weTalkChatSelfContent.html(`
                        <img class="weTalkGameGif">
                        <img class="weTalkGameRes">
                      `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/timg.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 6:
                    weTalkChatSelfContent.html(`
              <img class="weTalkGameGif">
              <img class="weTalkGameRes">
            `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/paoyingbi.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
                case 5:
                    weTalkChatSelfContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                    weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": "./images/hd/shitoujiandaobu.gif" })
                    weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": `./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png` })
                    weTalkChatSelfContent.css("background", "#fff")
                    setTimeout(function () {
                        weTalkChatSelfContent.children(".weTalkGameGif").hide();
                        weTalkChatSelfContent.children(".weTalkGameRes").show();
                    }, 1000)
                    break;
            }
            // 添加自定义属性
            weTalkChatSelfContent.attr({ "data_messageType": item.messageType })
            myChatRecord.attr({ "data_vip": item.vip })
            myChatRecord.attr({ "data_index": index })
            if (isSocketIo) {
                myChatRecord.attr({ "data_isSocketIo": true })
            }

            let myChatRecordInfo = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfInfo");

            if (item.vip == 1 || item.vip == true) {
                // console.log("我是vip")
                myChatRecordInfo.children(".weTalkChatSelfInfoRight").children(".weTalkChatFont").hide()
                myChatRecordInfo.children(".weTalkChatSelfInfoRight").children(".weTalkChatMemberFont").css({ "display": "inline-block" });
            }

            if (item.sex == 1) {
                myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": './images/boy.png' })
            } else if (item.sex == 2) {
                myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": './images/girl.png' })
            } else if (item.sex == 0 || item.sex == undefined) {
                myChatRecordInfo.children(".weTalkChatSelfSex").hide();
            }

            if (isSocketIo) {
                if (item.messageType != 2) {
                    myChatRecord.appendTo($(".weTalkChatMain"));
                }
            } else {
                myChatRecord.appendTo($(".weTalkChatMain"));
            }
        }
        // sockeio加载时根据上面判断的滚动条位置决定滚动条是否需要处于底部
        if (isSocketIo) {
            if (data.canScroll && item.messageType != 2) {
                // console.log("有没有进这个滚动条行进至最后")
                $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                data.canScroll = false;
            }
        } else {
            $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
        }
    }

    // 聊天记录绑定事件(合并)
    function recordPoolOpeFin() {
        // 左键事件
        $(document).on("click", ".weTalkChatOtherAvatarArr", function (e) {
            let userId = $(this).parent().attr("data_userId");
            // console.log("点击头像")
            e.stopPropagation()
            e.preventDefault()
            showOtherInfo(userId);
        })
        // 右键事件
        // 转发他人的话
        $(document).on("contextmenu", ".weTalkChatOther", function (e) {
            let isSocketIo = false;
            if ($(this).attr("data_isSocketIo")) {
                isSocketIo = $(this).attr("data_isSocketIo");
            }
            // 获取需要转发的对话
            data.transmitSetence = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").html();
            data.messageType = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").attr("data_messageType");
            // 获取需要转发的对话
            data.transmitSetence = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").html();
            data.messageType = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").attr("data_messageType");
            if (data.messageType == 1) {
                if (isSocketIo) {
                    if ($(this).attr("data-at")) {
                        if ($(data.transmitSetence).children("a").length > 0) {
                            return;
                        }
                    }
                } else {
                    if (data.isPublic == 1) {
                        // console.log("dataAt", $(this).attr("data-at"))
                        if ($(this).attr("data-at")) {
                            if (data.transmitSetence instanceof jQuery) {
                                // console.log("jQuery对象")
                                if (data.transmitSetence.children("a").length > 0) {
                                    return;
                                }
                            }
                            if ($(`<span>${data.transmitSetence}</span>`).children("a").length > 0) {
                                // console.log("需要包span")
                                return;
                            }
                        }
                    }
                }

                if ($(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").children("img").length > 0) {
                    let emoj = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").children("img");
                    emoj.each(function () {
                        data.emojzfArr.push($(this).attr("src").substring(emoj.attr("src").indexOf(".png") - 2, $(this).attr("src").indexOf(".png")));
                    })
                }
            }
            if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                return;
            }
            if (data.messageType == 2) {
                data.transferImg = $(this).attr("data_index");
            }
            // 获取转发按钮节点
            let thatzf = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
            let thatjb = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport");
            e.preventDefault()
            if (thatzf.css("display") != "none") {
                thatzf.hide();
                thatjb.hide();
            } else {
                thatzf.show();
                thatjb.show();
                $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
                $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport").hide();
                $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
            }
            // 点击转发按钮事件
            let transmitBtn = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
            transmitBtn.off("click").on("click", function () {
                // console.log("点击转发事件");
                // 默认添加会话
                zfSwitchSession();
                // 切换会话
                $(".weTalkZfSwitchSession").off("click").on("click", zfSwitchSession);
                // 切换好友
                $(".weTalkZfSwitchFriend").off("click").on("click", zfSwitchFriend)
                $(".weTalkTransmit").show();
                transmitBtn.hide();
                transmitBtn.siblings(".weTalkChatOtherRightReport").hide()
            })
            e.preventDefault();
        })

        // 转发自己的话
        $(document).on("contextmenu", ".weTalkChatSelf", function (e) {
            let isSocketIo = false;
            if ($(this).attr("data_isSocketIo")) {
                isSocketIo = $(this).attr("data_isSocketIo");
            }
            // console.log("需要转发的话", data.transmitSetence, data.messageType)
            // 获取需要转发的对话
            data.transmitSetence = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").html();
            data.messageType = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").attr("data_messageType");
            if (data.messageType == 1) {
                // console.log("转发的话", data.transmitSetence)
                if (isSocketIo) {
                    if ($(this).attr("data-at")) {
                        if ($(data.transmitSetence).children("a").length > 0) {
                            // console.log("没进去么")
                            return;
                        }
                    }
                } else {
                    if (data.isPublic == 1) {
                        if ($(this).attr("data-at")) {
                            if ($(`<span>${data.transmitSetence}</span>`).children("a").length > 0) {
                                return;
                            }
                            if ($(data.transmitSetence).children("a").length > 0) {
                                return;
                            }
                            if (data.transmitSetence instanceof jQuery) {
                                if (data.transmitSetence.children("a").length > 0) {
                                    return;
                                }
                            }
                        }
                    }
                }

                if ($(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").children("img").length > 0) {
                    let emoj = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").children("img");
                    emoj.each(function () {
                        data.emojzfArr.push($(this).attr("src").substring(emoj.attr("src").indexOf(".png") - 2, $(this).attr("src").indexOf(".png")));
                    })
                }
            }

            if (data.messageType == 2) {
                // console.log("赋值时", $(this)[0], $(this).attr("data_img"))
                data.transferImg = $(this).attr("data_index");
            }

            if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                return;
            }

            // 获取转发按钮节点
            let thatzf = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
            if (thatzf.css("display") != "none") {
                thatzf.hide();
            } else {
                thatzf.show();
                $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
            }
            // 点击转发按钮事件
            let transmitBtn = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
            transmitBtn.off("click").on("click", function () {
                // console.log("点击转发事件");
                // 默认添加会话
                zfSwitchSession();
                // 切换会话
                $(".weTalkZfSwitchSession").off("click").on("click", zfSwitchSession);
                // 切换好友
                $(".weTalkZfSwitchFriend").off("click").on("click", zfSwitchFriend)
                $(".weTalkTransmit").show();
                transmitBtn.hide();
            })
            e.preventDefault()
        })

        // 取消并隐藏转发列表
        $(document).on("click", ".weTalkTransmitbtn1", function () {
            $(".weTalkTransmitItemRight").prop("checked", false)
            $(".weTalkTransmit").hide();
        })
        // 确定并获取已选中的转发人
        $(document).on("click", ".weTalkTransmitbtn2", function () {
            if (data.sendState) {
                let obj = {};
                $("input[type=checkbox][name=weTalkTransmitObj]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 0;
                        obj.value = $(this).val();
                        data.transmitChoosedArr.push(obj)
                        obj = {};
                        data.flag += 1;
                    }
                });
                $("input[type=checkbox][name=weTalkTransmitObjP]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 1;
                        obj.value = $(this).val();
                        data.transmitChoosedArr.push(obj)
                        obj = {};
                        data.flag += 1;
                    }
                });
                if (data.flag == 0) {
                    showTip("至少要选中一个！");
                    return;
                } else {
                    data.transmitChoosedArr.forEach((item, index) => {
                        let vip;
                        if (data.vip) {
                            vip = 1
                        } else {
                            vip = 0;
                        }
                        let transmitSetence;
                        if (data.messageType == 1) {
                            transmitSetence = data.transmitSetence
                            data.emojzfArr.forEach(item => {
                                transmitSetence = transmitSetence.replace(/<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/, `[emoj]${item}[/emoj]`);
                            })
                            // console.log("表情", transmitSetence)
                            data.emojzfArr = [];
                        }
                        if (data.messageType == 2) {
                            if (data.isPublic == 1) {
                                transmitSetence = $(`${data.chatPublicRecords[data.transferImg].content}`).attr("src").replace(data.cdn, "");
                            } else {
                                for (let i = 0; i < data.weTalkPerList.length; i++) {
                                    // console.log("id", data.friendId, data.weTalkPerList[i].userId)
                                    if (data.friendId == data.weTalkPerList[i].userId) {
                                        // console.log("id相等", $(`${data.weTalkPerList[i].records[data.transferImg].content}`))
                                        transmitSetence = $(`${data.weTalkPerList[i].records[data.transferImg].content}`).attr("src").replace(data.cdn, "");
                                        break;
                                    }
                                }
                            }
                        }

                        if (item.type == 1) {
                            let avatar;
                            if (data.avatar == null) {
                                avatar = "";
                            } else {
                                avatar = data.avatar;
                            }
                            data.socket.emit('PUBLIC',
                                {
                                    targetId: item.value,
                                    senderId: data.id,
                                    messageType: parseInt(data.messageType),
                                    content: transmitSetence,
                                    senderNickname: data.nickname,
                                    avatar: avatar,
                                    sex: data.sex,
                                    vip: vip
                                },
                                function (response) {
                                    console.log("response", response)
                                    if (response != 1) {
                                        console.log("发送异常")
                                        $(".weTalkChatMgc").show();
                                        setTimeout(function () {
                                            $(".weTalkChatMgc").hide();
                                        }, 3000)
                                    }
                                });
                        } else {
                            // console.log("私聊转发", {
                            //     targetId: item.value,
                            //     senderId: data.id,
                            //     messageType: parseInt(data.messageType),
                            //     content: transmitSetence
                            // })
                            data.socket.emit('PRIVATE',
                                {
                                    targetId: item.value,
                                    senderId: data.id,
                                    messageType: parseInt(data.messageType),
                                    content: transmitSetence
                                },
                                function (response) {
                                    // 处理自己发的私聊消息
                                    if (response == 1) {
                                        let obj = {
                                            targetId: item.value,
                                            senderId: data.id,
                                            messageType: parseInt(data.messageType),
                                            content: transmitSetence
                                        };
                                        obj.content = disposeText(obj);
                                        for (let j = 0; j < data.weTalkPerList.length; j++) {
                                            if (obj.targetId == data.weTalkPerList[j].userId) {
                                                data.weTalkPerList[j].records.push(obj);
                                                $(".weTalkChatItemList").children().each(function () {
                                                    if ($(this).attr("data-index") == j) {
                                                        // 转发默认为与该用户消息已读
                                                        data.socket.emit('SYSTEM', {
                                                            type: 1,
                                                            targetUserId: data.friendId
                                                        })
                                                        data.haveSend = true;
                                                        $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                                                        $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                                                        data.weTalkPerList[j].UnReadNum = 0;

                                                        if (data.weTalkPerList[j].records && data.weTalkPerList[j].records.length > 0) {
                                                            let record = JSON.parse(JSON.stringify(data.weTalkPerList[j].records[data.weTalkPerList[j].records.length - 1])),
                                                                content = record.content,
                                                                messageType = record.messageType,
                                                                curHour = getMyHour().h,
                                                                curMin = getMyHour().m,
                                                                user = "我：";
                                                            // 判断内容的类型
                                                            if (messageType == 1) {
                                                                content = disposeText(record);
                                                                // 截取第一个<br>之前的内容
                                                                if (content) {
                                                                    splitBr = content.indexOf("<br>");
                                                                    if (splitBr != -1) {
                                                                        content = content.substring(0, splitBr);
                                                                    }
                                                                }
                                                            }
                                                            else if (messageType == 2) {
                                                                content = "[图片]"
                                                            }
                                                            $(".weTalkChatItemList").children().each(function () {
                                                                if ($(this).attr("data-index") == j) {
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                                                                    $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                                                                }
                                                            })
                                                        }
                                                    }
                                                });
                                                data.isHasThisFriend = true;
                                                break;
                                            }
                                        }

                                        if (!(data.isHasThisFriend)) {
                                            addUserMethod(obj.targetId, 1, 0);
                                        }

                                        if (data.friendId == item.value) {
                                            loadByFriendOne();
                                        }
                                    } else if (response == 2) {
                                        showTip("用户已将您拉黑")
                                    } else if (response == 0) {
                                        showTip("您发送的消息包含敏感词");
                                    }
                                });
                        }

                    })
                    // 初始化
                    $(".weTalkTransmitItemRight").prop("checked", false);
                    data.emojSrctransmitChoosedArr = [];
                    data.transmitChoosedArr = [];
                    data.flag = 0;
                    $(".weTalkTransmit").hide();
                }
                data.sendState = false;
                setTimeout(function () {
                    data.sendState = true;
                }, 5000)
            } else {
                // console.log("为什么会进5秒以后再发送")
                showTip("请5秒以后再发送")
            }
        })
    }

    // 加载聊天室头
    function buildRoomHead() {
        $(".weTalkChatMainHeadName").html(data.websiteTitle + "聊天室>>");
        $(".weTalkPublicChannnellTitle").html(`${data.websiteTitle}聊天室`);
        isFavorite(data.websiteId, data.token).then(res => {
            if (res.code == 1) {
                if (res.data) {
                    $(".weTalkChatMainHeadEvent").html("取消收藏").off("click").on("click", function () {
                        removeFavoriteRequest(data.websiteId, data.token)
                    })
                } else {
                    $(".weTalkChatMainHeadEvent").html("加入收藏").off("click").on("click", function () {
                        addFavoriteRequest(data.websiteId, data.token)
                    })
                }
            }
        })
    }

    // 会话消息提醒
    function sessionTip() {
        if ($("#weTalkSession").css("display") == "none") {
            $(".sessionPoint").show();
        }
    }

    // 图片处理
    function picDispose(file) {
        directTurnIntoBase64(file, function (imgBase64) {
            data.imgBase64 = imgBase64;
            data.upFile = convertBase64UrlToFile(data.imgBase64, (new Date()).valueOf())
            getImageInfo(URL.createObjectURL(file), function (width, height) {
                // 在这里面使用
                picNatW = width;    //图片的原始宽度
                picNatH = height;   //图片的原始高度
                imgResize(500, picNatW, picNatH)
                console.log("squareH",squareH,"squareW",squareW)
                $("#weTalkYsPic").attr({ "src": data.imgBase64 })
                data.squareH = squareH;
                data.squareW = squareW;
                $("#weTalkYsPic").width(squareW);
                $("#weTalkYsPic").height(squareH);
                // $(".weTalkYsPic").show();
                $(".weTalkYsPicContent").css("visibility", "visible")
            })
        });
    }

    // 之后点击时加载聊天室(读取本地聊天记录)
    function loadDeRoomRecords(){
        if (data.chatPublicRecords) {
            // 之后点击聊天室,不用调接口
            console.log("之后点击聊天室")
            // 加载@
            loadAt();
            // 加载聊天记录
            loadPublicRecords();
            data.friendId = data.websiteId;
            getAtInfo();
            $(".weTalkLoadRecord").css({ "visibility": "hidden" })
            data.isLoadRecords = false;
            // console.log("websiteId", data.websiteId, "friend", data.friendId)
        }
    }

    // 加载@
    function loadAt(){
        $("#weTalkChatFrame").atwho('destroy');
        $("#weTalkChatFrame").atwho({
            at: "@",
            data: data.chatPublicPeople,
            limit: data.chatPublicPeople.length,
            startWithSpace: false, //是否以空格开始
        });
        $(".atwho-view-ul").off("keydown").on("keydown", function () {
            return false;
        })
    }




    // grp star
    function Gstar() {
        document.oncontextmenu = function (e) {
            e.preventDefault();
        };
        // console.log(1)
        let nav = document.getElementById('nav');
        // console.log(nav)
        let oNav = document.getElementsByClassName('star');
        let container = document.getElementById('leftContainer');
        // console.log(container)
        let oDiv = document.getElementsByClassName('tab');
        let one = document.getElementsByClassName('one');
        let two = document.getElementsByClassName('two');
        for (var i = 0; i < oNav.length; i++) {
            oNav[i].index = i;
            // console.log(oNav[i].index)
            oNav[i].onclick = function () {
                for (var i = 0; i < oNav.length; i++) {
                    oNav[i].id = '';
                    oDiv[i].style.display = "none";
                    one[i].style.display = "block";
                    two[i].style.display = "none";
                }
                this.id = 'act';
                // console.log("this", this)
                if ($(this).children().children("span").length > 0) {
                    $(".sessionPoint").hide();
                }
                oDiv[this.index].style.display = "block"
                one[this.index].style.display = "none"
                two[this.index].style.display = "block"
            }
            for (var m = 1; m < oNav.length; m++) {
                oNav[m].id = '';
                oDiv[m].style.display = "none";
                two[m].style.display = "none"
                one[m].style.display = "block"
            }
        }

        $("#friendList").on("click", getFriendList);
        $("#groupChat").on("click", getGroupChat);
        $("#collect").on("click", getGroupChat);
        $("#recommend").on("click", getRecommend);
        $("#amendNameCancel").on("click", amendNameCancel);
        $("#amendNameSub").on("click", amendNameSub);
        $("#discover").on("click", discover)
        $("#searchChatroomFind").on("click", searchChatroomFind)
        $("#turnOverLeft").on("click", turnOverLeft)
        $("#turnOverRinght").on("click", turnOverRinght)
        $("#shareRoomHint").on("click", shareRoomHint)
        $("#privateChatHint").on("click", privateChatHint)
        $("input[name='theme']").on("click", changeTheme)
        $(".helpOption").on("mouseenter", showHelpOption)
        $(".helpOption").on("mouseleave", hideHelpOption)
        $("#setTheme").on("click", setTheme)
        $("#closeSetTheme").on("click", closeSetTheme)
        $(".activityTwo").on("click", activityTwo)
        $(".activityOne").on("click", lottery)
    };
    //好友列表
    function getFriendList() {
        let token = data.token
        $("#friend").empty()
        getFriends(token).then((res) => {
            // console.log(res)
            let list = res.data
            let friend = [];
            if (list.length == 0) {
                $(
                    `
                    <div id="empty">
                        <img src="./images/empty.jpg" >
                        <p>您还没有添加好友</p>
                    </div>
                    `
                ).appendTo(
                    $("#friend"))
            } else {
                for (let i = 0; i < list.length; i++) {
                    let item = list[i];
                    if (item.friendNote) {
                        item.nickname = item.friendNote
                    }

                    let reg = /^[A-Za-z]+$/;
                    if (!item.nickname) {
                        continue;
                    }
                    let firstLetter = pinyinUtil.getFirstLetter(item.nickname.charAt(0))
                    item.firstLetter = reg.test(firstLetter) ? firstLetter : '8';
                    let hasFound = false;
                    for (let j = 0; j < friend.length; j++) {
                        let d = friend[j];
                        if (d.firstLetter.toUpperCase() == item.firstLetter.toUpperCase()) {
                            friend.splice(j, 0, item);
                            hasFound = true;
                            break;
                        }
                    }
                    if (!hasFound) {
                        friend.push(item);
                    }
                }
                friend.sort(function (a, b) {
                    let first = a.firstLetter.toUpperCase().charCodeAt(0);
                    // 非字母
                    if (first < 65) {
                        first += 100;
                    }
                    let second = b.firstLetter.toUpperCase().charCodeAt(0);
                    if (second < 65) {
                        second += 100;
                    }
                    return first - second;
                })
                for (let i = 0; i < friend.length; i++) {
                    let weTalkChatItem;
                    let user = friend[i];
                    var groupUL = "group_" + user.firstLetter.toUpperCase();
                    if ($('#' + groupUL).length == 0) {
                        var groupName = user.firstLetter.toUpperCase() == '8' ? '#' : user.firstLetter.toUpperCase();
                        $("#friend").append('<div class="fridenTitle">' + groupName + '</div>')
                        $("#friend").append('<ul id="' + groupUL + '"></ul>')
                        // console.log("groupUL=" + groupUL);
                    }
                    // 首字母大写插入到后面
                    if (user.firstLetter == user.firstLetter.toUpperCase()) {
                        // $('#'+groupUL).append('<li>'+user.name+'</li>');
                        weTalkChatItem = $(
                            `<li class="weTalkChatItem">
                            <div class="weTalkChatItemAvatar">
                                <img class="weTalkBoy"></img>
                                <div class="weTalkItemDeAvatar">${user.nickname.charAt(0)}</div>
                                <img class="weTalkUserAvatar">
                            </div>
                            <p class="weTalkItemNick weTalkTextDis">${user.nickname}</p>
                            <div class="weTalkFirendRight">
                                <p id="friendSendMessage">发消息</p>
                                <p id="amendName">修改备注</p>
                                <p id="removeFriend">解除好友</p>
                                <p id="addBlacklist">加入黑名单</p>
                            </div>
                        </li>`
                        ).appendTo($('#' + groupUL));

                    } else {
                        // $('#'+groupUL).prepend('<li>'+user.name+'</li>');
                        weTalkChatItem = $(
                            `<li class="weTalkChatItem">
                            <div class="weTalkChatItemAvatar">
                              <img class="weTalkBoy"></img>
                              <div class="weTalkItemDeAvatar">${user.nickname.charAt(0)}</div>
                              <img class="weTalkUserAvatar">
                            </div>
                            <p class="weTalkItemNick weTalkTextDis">${user.nickname}</p>
                            <div class="weTalkFirendRight">
                                  <p id="friendSendMessage">发消息</p>
                                  <p id="amendName">修改备注</p>
                                  <p id="removeFriend">解除好友</p>
                                  <p id="addBlacklist">加入黑名单</p>
                            </div>
                        </li>`
                        ).prependTo($('#' + groupUL));

                    }
                    if (user.sex == 2) {
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({
                            "src": './images/girl.png'
                        })
                    } else {
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({
                            "src": './images/boy.png'
                        })
                    }
                    if (user.friendNote) {
                        weTalkChatItem.attr("data-name", "1");
                    } else {
                        weTalkChatItem.attr("data-name", "2");
                    }
                    weTalkChatItem.attr("data-id", user.id)
                    weTalkChatItem.attr("data-friendUserId", user.friendUserId)

                    if (user.avatar) {

                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").hide();
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").attr({
                            "src": data.cdn + user.avatar
                        }).show();
                    } else {
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").show();
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").hide();
                    }
                    if (user.vip == 1) {
                        weTalkChatItem.children(".weTalkItemNick").css("color", "red");
                    }
                    weTalkChatItem.off("contextmenu").on("contextmenu", showFriendUser);
                    weTalkChatItem.on("mouseleave", hideFriendUser)
                    weTalkChatItem.children(".weTalkFirendRight").children("#amendName").on("click", amendName);
                    weTalkChatItem.children(".weTalkFirendRight").children("#removeFriend").on("click", RemoveFriend);
                    weTalkChatItem.children(".weTalkFirendRight").children("#addBlacklist").on("click", addBlacklist);
                    weTalkChatItem.children(".weTalkFirendRight").children("#friendSendMessage").on("click", friendSendMessage);
                    weTalkChatItem.on("click", rightFriendSendMessage)
                }
            }
        })
    }
    //好友发送信息
    function friendSendMessage(event) {
        addUserMethod($(this).parent().parent().attr("data-friendUserId"), 2, 0)
        // console.log($(this).parent().parent().attr("data-friendUserId"))
        event.stopPropagation();
    }
    function rightFriendSendMessage() {
        addUserMethod($(this).attr("data-friendUserId"), 2, 0)

        // console.log($(this).attr("data-friendUserId"))
    }
    //聊天室
    function getGroupChat() {
        let weTalkChatroomItem
        $("#collectlist").empty()
        $("#collect").css({
            "color": "#944EEA",
            "border-bottom": "4px solid #944EEA",
        })
        $("#recommend").css({
            "color": "#999999",
            "border-bottom": "none",
        })
        $("#collectlist").css({
            "display": "block"
        })
        $("#recommendDetails").css({
            "display": "none"
        })
        favorite(data.token).then((res) => {
            // console.log(res)
            let list = res.data
            if (list.length == 0) {
                $(
                    `
                    <div id="collectempty">
                        <img src="./images/empty.jpg" >
                        <p>您还没有收藏聊天室</p>
                    </div>
                    `
                ).appendTo(
                    $("#collectlist"))
            } else {
                for (let i = 0; i < list.length; i++) {
                    weTalkChatroomItem = $(
                        `
                    <li>
                        <img src="./images/title.png" >
                        <p>${list[i].title}聊天室</p>
                        <div class="weTalkChatroomRight">
                            <p id="chatRoomSendMessage">发消息</p>
                            <p id="cancelCollection">取消收藏</p>
                        </div>
                    </li>
                    `
                    ).appendTo($("#collectlist"))
                    weTalkChatroomItem.off("contextmenu").on("contextmenu", showChatroom);
                    weTalkChatroomItem.off("mouseleave").on("mouseleave", hideChatroom)
                    weTalkChatroomItem.children(".weTalkChatroomRight").children("#cancelCollection").on("click", cancelCollection);
                    weTalkChatroomItem.children(".weTalkChatroomRight").children("#chatRoomSendMessage").off("click").on("click", chatRoomSendMessage);
                    weTalkChatroomItem.attr("data-id", list[i].id)
                    weTalkChatroomItem.attr("data-websiteId", list[i].websiteId)
                    weTalkChatroomItem.off("click").on("click", leftChatRoomSendMessage)
                }
            }

        })
    }

    //群聊发送消息
    function chatRoomSendMessage(event) {
        event.stopPropagation();
        event.preventDefault();
        // console.log("选择添加的群聊Id", $(this).parent().parent().attr("data-websiteId"))
        // addQlMethod($(this).parent().parent().attr("data-websiteId"), 2);
        changeRoomRequest($(this).parent().parent().attr("data-websiteId"), true)

    }
    function leftChatRoomSendMessage(event) {
        event.stopPropagation();
        event.preventDefault();
        // addQlMethod($(this).attr("data-websiteId"), 2);
        changeRoomRequest($(this).attr("data-websiteId"), true)
        // console.log("选择添加的群聊Id", $(this).attr("data-websiteId"))
    }
    //推荐聊天室
    function getRecommend() {
        $("#recommendDetails").empty()
        $("#recommend").css({
            "color": "#944EEA",
            "border-bottom": "4px solid #944EEA",
        })
        $("#collect").css({
            "color": "#999999",
            "border-bottom": "none",
        })
        $("#recommendDetails").css({
            "display": "block"
        })
        $("#collectlist").css({
            "display": "none"
        })
        dailyRecommend(data.token).then((res) => {
            console.log(res)
            let details = res.data
            data.dailyRecommendWebid = details.id
            $(
                `
            <div class="dailyUpdate">
                <img id ="dailyUpdatePic" src="${data.cdn + details.icon}" >
                <p class="dailyUpdateTitle">${details.title}</p>
                <p class="dailyUpdateOnline">在线人数：${details.onlineUserNum}</p>
                <button type="button" id="dailyRecommendBtn">进入聊天室</button>
                <div id="dailyUpdateIntro">
                 ${details.intro}
                </div>
            </div>
            `
            ).appendTo($("#recommendDetails"))
            if (!details.icon) {
                $("#dailyUpdatePic").hide()
            }
            if (!details.intro) {
                $("#dailyUpdateIntro").hide()
            }
            $("#dailyRecommendBtn").on("click", dailyRecommendBtn);
        })
    }
    function dailyRecommendBtn() {
        // console.log(data.dailyRecommendWebid)
        changeRoomRequest(data.dailyRecommendWebid, true);
    }
    //右键显示好友选项
    function showFriendUser() {
        // console.log($(this).attr("data-name"))
        // console.log($(this).attr("data-id"))
        if ($(this).children(".weTalkFirendRight").css("display") == "none") {
            // console.log($(this).parent().siblings().children(".weTalkFirendRight"))
            $('.weTalkFirendRight').css({
                "display": "none"
            })
            $(this).children(".weTalkFirendRight").css({
                "display": "block"
            })
        } else if ($(this).children(".weTalkFirendRight").css("display") == "block") {
            $(this).children(".weTalkFirendRight").css({
                "display": "none"
            })
        }
    }
    //移出隐藏好友选项
    function hideFriendUser() {
        if ($(this).children(".weTalkFirendRight").css("display") == "block") {
            $(this).children(".weTalkFirendRight").css({
                "display": "none"
            })
        }

    }
    //修改昵称
    function amendName(event) {
        console.log(1)
        event.stopPropagation();
        data.noteId = $(this).parent().parent().attr("data-id")
        console.log(data.noteId)
        $(".amendName").css({ "display": "block" })
        console.log($(".amendName").css("display"))

    }
    function amendNameSub() {
        let id = data.noteId
        // console.log(id)
        let noteName = $('#amendInput').val();
        console.log(id, noteName)
        friendNote(id, noteName, data.token).then((res) => {
            console.log(res)
            if (res.code == 1) {
                $(".weTalkAmendName").show();
                setTimeout(function () {
                    $(".weTalkAmendName").hide();
                    $(".amendName").hide();
                }, 1500)
                getFriendList()
            } else {
                showTip(res.code)
            }
        })
    }
    function amendNameCancel() {
        $(".amendName").css({ "display": "none" })
        data.noteId = ""
        $('#amendInput').val("")
    }
    //删除好友
    function RemoveFriend(event) {
        event.stopPropagation()
        // console.log($(this).parent().parent().attr("data-id"))
        let id = $(this).parent().parent().attr("data-id")
        removeFriend(id, data.token).then((res) => {
            console.log(res)
            if (res.code == 1) {
                $(".weTalkRemoveFriend").show();
                setTimeout(function () {
                    $(".weTalkRemoveFriend").hide();
                }, 3000)
                getFriendList()
            } else {
                showTip(res.code)
            }
        })
    }
    //加入黑名单
    function addBlacklist(event) {
        event.stopPropagation()
        let id = $(this).parent().parent().attr("data-friendUserId")
        console.log(id)
        blockUser(id, data.token).then((res) => {
            console.log(res)
            if (res.code == 1) {
                $(".weTalkaddBlacklist").show();
                setTimeout(function () {
                    $(".weTalkaddBlacklist").hide();
                }, 3000)
                getFriendList()

            } else {
                showTip(res.code)
            }
        })
    }
    //展示聊天室选项
    function showChatroom() {
        if ($(this).children(".weTalkChatroomRight").css("display") == "none") {
            // console.log($(this).parent().siblings().children(".weTalkChatroomRight"))
            $('.weTalkChatroomRight').css({
                "display": "none"
            })
            $(this).children(".weTalkChatroomRight").css({
                "display": "block"
            })
        } else if ($(this).children(".weTalkChatroomRight").css("display") == "block") {
            $(this).children(".weTalkChatroomRight").css({
                "display": "none"
            })
        }
    }
    //划出取消聊天室选项
    function hideChatroom() {
        if ($(this).children(".weTalkChatroomRight").css("display") == "block") {
            $(this).children(".weTalkChatroomRight").css({
                "display": "none"
            })
        }
    }
    //取消聊天室收藏
    function cancelCollection(event) {
        event.stopPropagation();
        event.preventDefault();
        // console.log($(this).parent().parent().attr("data-id"))
        let id = $(this).parent().parent().attr("data-id")
        removeFavorite(id, data.token).then((res) => {
            if (res.code == 1) {
                $(".weTalkcancelCollection").show();
                setTimeout(function () {
                    $(".weTalkcancelCollection").hide();
                }, 3000)
                getGroupChat()

            } else {
                showTip(res.code)
            }
        })
    }
    //搜索聊天室
    function discover() {
        $("#lifeRecommendDetails").empty()
        $("#playRecommendDetails").empty()
        $("#musicRecommendDetails").empty()
        $("#newsRecommendDetails").empty()
        $("#recommendWeb").empty()
        SearchKeywords()
        GetHotWebsite()
        $(".weTalkRightItem").hide();
        $(".searchChatroom").show()
        $("#hotRecommend").show()
        $(".searchChatroomResult").hide()
        $(".weTalkUsers").hide()
        $(".weTalkRightMain").hide()
        $(".weTalkInitial").hide()
    }
    //搜索关键词
    function SearchKeywords() {
        searchKeywords(data.token).then((res) => {
            console.log(res)
            let list = res.data
            for (let i = 0; i < list.length; i++) {
                recommendWeb = $(
                    `
                   <p><span class="recommendWebTitle">${list[i]}</span></p>
                `
                ).appendTo($("#recommendWeb"))
                recommendWeb.on("click", searchInputDetails)
                recommendWeb.attr("dataDetails", list[i])
                // console.log( recommendWeb.children().children(".recommendWebTitle"))
            }

        })
    }
    //点击关键词
    function searchInputDetails() {
        let details = $(this).attr("dataDetails")
        data.searchChatroomInput = details
        $("#searchChatroomInput").val(details)
        searchChatroomFind()
    }
    //热门推荐
    function GetHotWebsite() {
        getHotWebsite(data.token).then((res) => {
            console.log(res)
            let list = res.data
            let lifeList = []
            let playList = []
            let musicList = []
            let newsList = []
            for (let i = 0; i < list.length; i++) {
                if (list[i].name == "新闻资讯") {
                    newsList = list[i].website
                    console.log(newsList)
                } else if (list[i].name == "生活娱乐") {
                    lifeList = list[i].website
                    console.log(lifeList)
                } else if (list[i].name == "视频音乐") {
                    musicList = list[i].website
                    console.log(musicList)
                } else if (list[i].name == "游戏小说") {
                    playList = list[i].website
                    console.log(playList)
                }
            }
            for (let i = 0; i < lifeList.length; i++) {
                lifeRecommendDetails = $(
                    `
                    <li>
                    <p class="lifeListTitle">${lifeList[i].title}</p>
                    <img src="./images/09.png" alt="" class="lifeListPic" id="hotAdd">
                    </li>
                    `
                ).appendTo($("#lifeRecommendDetails"))
                lifeRecommendDetails.on("mouseover", showlifeRecommendDetails)
                lifeRecommendDetails.on("mouseleave", hidelifeRecommendDetails)
                lifeRecommendDetails.attr("websiteId", lifeList[i].id)
                lifeRecommendDetails.children("#hotAdd").on("click", hotAdd)
            }

            for (let i = 0; i < playList.length; i++) {
                console.log(playList[i].id)
                playRecommendDetails = $(
                    `
                    <li>
                    <p class="lifeListTitle">${playList[i].title}</p>
                    <img src="./images/09.png" alt="" class="playListPic" id="hotAdd">
                    </li>
                    `
                ).appendTo($("#playRecommendDetails"))
                playRecommendDetails.on("mouseover", showplayRecommendDetails)
                playRecommendDetails.on("mouseleave", hideplayRecommendDetails)
                playRecommendDetails.attr("websiteId", playList[i].id)
                playRecommendDetails.children("#hotAdd").on("click", hotAdd)
            }
            for (let i = 0; i < musicList.length; i++) {
                musicRecommendDetails = $(
                    `
                    <li>
                    <p class="musicListTitle">${musicList[i].title}</p>
                    <img src="./images/09.png" alt="" class="musicListPic" id="hotAdd">
                    </li>
                    `
                ).appendTo($("#musicRecommendDetails"))
                musicRecommendDetails.on("mouseover", showmusicRecommendDetails)
                musicRecommendDetails.on("mouseleave", hidemusicRecommendDetails)
                musicRecommendDetails.attr("websiteId", musicList[i].id)
                musicRecommendDetails.children("#hotAdd").on("click", hotAdd)
            }
            for (let i = 0; i < newsList.length; i++) {
                newsRecommendDetails = $(
                    `
                    <li>
                    <p class="newsListTitle">${newsList[i].title}</p>
                    <img src="./images/09.png" alt="" class="newsListPic" id="hotAdd">
                    </li>
                    `
                ).appendTo($("#newsRecommendDetails"))
                newsRecommendDetails.on("mouseover", shownewsRecommendDetails)
                newsRecommendDetails.on("mouseleave", hidenewsRecommendDetails)
                newsRecommendDetails.attr("websiteId", newsList[i].id)
                newsRecommendDetails.children("#hotAdd").on("click", hotAdd)
            }
        })
    }
    //热门推荐点击收藏
    function hotAdd() {
        let websiteId = $(this).parent().attr("websiteId")
        addFavorite(websiteId, data.token).then((res) => {
            console.log(res)
            if (res.code == 1) {
                showTip("收藏成功")
                getGroupChat()
            } else if (res.code == 40004) {
                showTip("已经收藏过该聊天室")
            } else {
                showTip(res.code)
            }
        })
    }
    //热门推荐划过效果
    function showlifeRecommendDetails() {
        $(this).children(".lifeListTitle").css({
            "color": "#FF5A00"
        })
        $(this).children(".lifeListPic").attr('src', "./images/01.png");
    }
    function hidelifeRecommendDetails() {
        $(this).children(".lifeListTitle").css({
            "color": "#FFFFFF"
        })
        $(this).children(".lifeListPic").attr('src', "./images/09.png");
    }
    function showplayRecommendDetails() {
        $(this).children(".playListTitle").css({
            "color": "#FF5A00"
        })
        $(this).children(".playListPic").attr('src', "./images/0204.png");
    }
    function hideplayRecommendDetails() {
        $(this).children(".playListTitle").css({
            "color": "#FFFFFF"
        })
        $(this).children(".playListPic").attr('src', "./images/09.png");
    }
    function showmusicRecommendDetails() {
        $(this).children(".musicListTitle").css({
            "color": "#FFC259"
        })
        $(this).children(".musicListPic").attr('src', "./images/03.png");
    }
    function hidemusicRecommendDetails() {
        $(this).children(".musicListTitle").css({
            "color": "#FFFFFF"
        })
        $(this).children(".musicListPic").attr('src', "./images/09.png");
    }
    function shownewsRecommendDetails() {
        $(this).children(".newsListTitle").css({
            "color": "#fff559"
        })
        $(this).children(".newsListPic").attr('src', "./images/0204.png");
    }
    function hidenewsRecommendDetails() {
        $(this).children(".newsListTitle").css({
            "color": "#FFFFFF"
        })
        $(this).children(".newsListPic").attr('src', "./images/09.png");
    }
    //搜索聊天室
    function searchChatroomFind() {
        $("#searchChatroomResultDetils").empty()
        let param = $("#searchChatroomInput").val()
        data.param = param
        console.log($("#searchChatroomInput").val())
        if (data.param == "") {
            $(".searchChatroomHint").show();
            setTimeout(function () {
                $(".searchChatroomHint").hide();
            }, 3000)
        } else {
            search(data.curren, 4, data.param, data.token).then((res) => {
                console.log(res)
                if (res.code == 1) {
                    $("#hotRecommend").hide()
                    $(".searchChatroomResult").show()
                    data.pages = res.data.pages
                    let page = res.data.current
                    data.page = page
                    console.log(data.pages)
                    console.log(data.page)
                    if (page == data.pages && page == 1) {
                    } else if (page < data.pages && page == 1) {
                        $("#turnOverRinght").attr("src", "images/right02.png")
                    } else if (page == data.pages && data.pages > 1) {
                        $("#turnOverLeft").attr("src", "images/left02.png")
                    } else if (page < data.pages && page > 1) {
                        $("#turnOverLeft").attr("src", "images/left02.png")
                        $("#turnOverRinght").attr("src", "images/right02.png")
                    }

                    let list = res.data.records
                    if (list.length == 0) {
                        $("#searchChatroomResultDetils").hide()
                        $("#searchChatroomResultNone").show()
                    } else {
                        $("#searchChatroomResultNone").hide()
                        $("#searchChatroomResultDetils").show()

                        for (let i = 0; i < list.length; i++) {
                            searchChatroomResultDetils = $(
                                `
                            <li>
                            <p>${list[i].title} ——<span>在线人数（${list[i].onlineUserNum}）</span></p>
                            <button type="button" id="collectChatroomResultDetils">收藏</button>
                            </li>
                            `
                            ).appendTo($("#searchChatroomResultDetils"))
                            searchChatroomResultDetils.children("#collectChatroomResultDetils").on("click", collectChatroomResultDetils)
                            searchChatroomResultDetils.attr("websiteId", list[i].id)
                        }
                    }
                }
            })
        }
    }
    //回车搜索聊天室
    $(document).keyup(function (event) {
        // console.log(1)
        if ($(".searchChatroom").css("display") == "block") {
            if (event.keyCode == 13) {
                searchChatroomFind()
            }
        }
    });
    //点击收藏收藏聊天室
    function collectChatroomResultDetils() {
        console.log($(this).parent().attr("websiteId"))
        let websiteId = $(this).parent().attr("websiteId")
        addFavorite(websiteId, data.token).then((res) => {
            console.log(res)
            if (res.code == 1) {
                showTip("收藏成功")
                getGroupChat()
            } else if (res.code == 40004) {
                showTip("已经收藏过该聊天室")
            } else {
                showTip(res.code)
            }
        })
    }
    //翻页
    function turnOverRinght() {
        // console.log(2)
        console.log(data.pages)
        if (data.page < data.pages) {
            data.curren++
            if (data.curren > data.pages) {
                data.curren == data.pages
            }
            searchChatroomFind()
        }
    }
    function turnOverLeft() {

        if (data.page > 1) {
            data.curren--
            if (data.curren < 1) {
                data.curren == 1
            }
            searchChatroomFind()
        }

    }

    //功能设置
    function showHelpOption() {
        $("#helpOptionDetails").show()
    }
    function hideHelpOption() {
        $("#helpOptionDetails").hide()
    }
    //初始化功能设置
    function setTheme() {
        $(".weTalkFunCover").show();
        // console.log(1)
        $(".setTheme").css({
            "display": "block"
        })
        // console.log(data.bodyBgType)
        // console.log(data.privateChatHint)
        // console.log(data.shareRoomHint)
        if (data.privateChatHint == 1) {
            $('#privateChatHint').attr('checked', true)
        }
        if (data.shareRoomHint == 1) {
            $('#shareRoomHint').attr('checked', true)
        }
        let sex = data.bodyBgType
        $('input:radio[name="theme"][value="' + sex + '"]').prop('checked', true);
    }
    //改变背景
    function changeTheme() {
        console.log($(this).val())
        let type = $(this).val()
        bodyBg(type)
        let storage = window.localStorage
        storage['themeType'] = type
        console.log(storage.themeType)
    }
    //关闭功能设置
    function closeSetTheme() {
        $(".weTalkFunCover").hide();
        $(".setTheme").css({
            "display": "none"
        })
    }
    //私聊音乐
    function privateChatHint() {
        let storage = window.localStorage
        if ($(this).is(":checked")) {
            storage['privateChatHint'] = 1
        } else {
            storage['privateChatHint'] = 2
        }
    }
    //聊天室音乐
    function shareRoomHint() {
        let storage = window.localStorage
        if ($(this).is(":checked")) {
            // console.log(1)
            storage['shareRoomHint'] = 1
        } else {
            storage['shareRoomHint'] = 2
        }
    }

    //设置body颜色
    function bodyBg(type) {
        if (type == 0) {
            $("body").css({
                "background": "#fff",
            })
        } else if (type == 1) {
            $("body").css({
                "background": "#D8E1A3",
            })
        } else if (type == 2) {
            $("body").css({
                "background": "#E1B5A3",
            })
        } else if (type == 3) {
            $("body").css({
                "background": "#A3C3E1",
            })
        } else if (type == 4) {
            $("body").css({
                "background": "#B2A3E1",
            })
        } else if (type == 5) {
            $("body").css({
                "background": "#282828",
            })
        } else if (type == 6) {
            $("body").css({
                "background": "url(images/bodybg/bg1.png) center center /cover no-repeat"
            })
        } else if (type == 7) {
            $("body").css({
                "background": "url(images/bodybg/bg2.png) center center /cover no-repeat"
            })
        } else if (type == 8) {
            $("body").css({
                "background": "url(images/bodybg/bg3.png) center center /cover no-repeat"
            })
        } else if (type == 9) {
            $("body").css({
                "background": "url(images/bodybg/bg4.png) center center /cover no-repeat"
            })
        } else if (type == 10) {
            $("body").css({
                "background": "url(images/bodybg/bg5.png) center center /cover no-repeat"
            })
        }
    }
    //播放音乐
    // audio.play()

    //@ sourceURL=driftBottle.js

    //漂流瓶
    function activityTwo() {
        data.friendId = "发现";
        data.isPublic = "发现";
        $(".weTalkRightItem").hide()
        let oneJs = "https://webapi.amap.com/maps?v=1.4.15&key=a56620b1b0ce81cba0140eed46a4ac86&plugin=AMap.PolyEditor"
        let twoJs = "https://a.amap.com/jsapi_demos/static/demo-center/js/demoutils.js"
        // let threeJs='./driftBottle/+driftBottle+.js'
        let fileName = "driftBottle"
        loadJS('./js/driftBottle/' + fileName + '.js', function () {
            bottleJs()
        })
        loadJS(oneJs, function () { });
        loadJS(twoJs, function () { });
        // loadCSS(oneCss);
        // loadJS(threeJs);
        console.log($("#driftBottleIndex"))

    }
    //# sourceURL=dynamicScript.js
    // 启动聊天框
    function startChatRoom(res) {
        // serverUrl();
        // 先判断有没有token，没有token就去通过账号登录
        if (localStorage.getItem("token")) {
            // console.log("有token")
            // 如果有token就判断是否是第一次打开聊天框
            $(".weTalkIconTip").hide();
            // 获取当前的url
            // if (data.isFirstStart) {
            // console.log("第一次登录")
            data.token = localStorage.getItem("token")
            // 已经通过账号登录 
            if (data.isLoginByAccount) {
                // console.log("通过账号登录");
                initialInfo(res);
            } else {
                // console.log("chrome", /^chrome-extension/.test(window.location.href))
                if (/^chrome-extension/.test(window.location.href)) {
                    data.curDomain = window.location.href;
                    data.curDomain = data.curDomain.substring(data.curDomain.indexOf("?domain=") + 8, data.curDomain.indexOf("?title="));
                    data.curTitle = window.location.href;
                    data.curTitle = decodeURI(data.curTitle.substring(data.curTitle.indexOf("?title=") + 7));
                } else {
                    data.curDomain = window.location.href;
                    data.curTitle = document.title;
                }
                // 尚未通过账号登录
                // console.log("通过token登录")
                loginReuqest();
            }
            // data.unReadTipNum = 0;
            // data.isFirstStart = false;
            // } 
            // else {
            //     if ($(".weTalkChatRoom").css("display") == "none") {
            //         $(".weTalkChatRoom").css({ "display": "block" })
            //         $(".weTalkCover").css({ "display": "block" })
            //         // 阻止滚动条滚动
            //         $("body").css({ "overflow-y": "auto" })
            //     } else {
            //         $(".weTalkChatRoom").css({ "display": "none" })
            //         $(".weTalkCover").css({ "display": "none" })
            //         // 恢复滚动条滚动
            //         $("body").css({ "overflow-y": "" })
            //     }
            // }
        } else {
            // 登录
            // console.log("window.location.href", window.location.href)
            // console.log("chrome", /^chrome-extension/.test(window.location.href))
            if (/^chrome-extension/.test(window.location.href)) {
                data.curDomain = window.location.href;
                data.curDomain = data.curDomain.substring(data.curDomain.indexOf("?domain=") + 8, data.curDomain.indexOf("?title="));
                data.curTitle = window.location.href;
                data.curTitle = decodeURI(data.curTitle.substring(data.curTitle.indexOf("?title=") + 7));
            }
            else {
                data.curDomain = window.location.href;
                data.curTitle = document.title;
            }
            loadLoginView();
        }
    };
    // grp end
    // 全局方法结束
    //动态加载
    function loadJS(url, callback) {
        var scripts = $("script[src='" + url + "']");
        if (scripts.length > 0) {
            console.log(callback)
            callback();
            return;
        }
        var script = document.createElement('script'),
            fn = callback || function () { };
        script.type = 'text/javascript';
        //IE
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    script.onreadystatechange = null;
                    fn();
                }
            };
        } else {
            //其他浏览器
            script.onload = function () {
                fn();
            };
        }
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
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
    // 启动
    startChatRoom();

})