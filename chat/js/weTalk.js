$(function () {
    // 全局变量
    let data = {
        // 聊天室聊天记录
        chatPublicRecords: [],
        chatPublicPeople: [],
        chatPublicNum: 0,
        chatPublicLastRecord: null,

        // 是否通过插件登录
        loginByPulgin: false,

        // 站内信
        systemNews: [],
        systemCurrent: 1,
        systemSize: 1000,

        // 移除元素
        RemoveFood: null,
        removeIndex: null,
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
        lastLogin: null,

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
        transmitType: null,


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

        // 撤回的频道类别
        recallType:null,

        // 公告
        announce: null,
        announceDate: null,

        // 广播
        broadCastArr: [],
        isBroading: false,

        // 录音
        recorder: null,
        recordRes: null,
        recordDuration: null,

        // 聊天记录分页
        // 聊天室记录分页
        Pcurrent: 1,
        Ppages: null,
        Psize: null,
        // 私人记录分页
        Scurrent: 1,
        Spages: null,
        Ssize: null,
        // 小组记录分页
        Gcurrent: 1,
        Gpages: null,
        Gsize: null,

        // 要删除的动态的id
        momentId: null,

        // 小组
        // 小组动态
        groupMoment: [],
        // 我的动态
        myMoment: [],
        // 我的动态
        teamMoment: [],
        // 判断显示小组动态还是显示我的动态 1 我的 2 小组 
        isShowMomentType: 1,
        // 待审核列表
        waitTest: [],
        // 审核列表分页
        Wcurrent: 1,
        Wpages: null,
        // 我的动态分页
        myMomentCur: 1,
        // 小组动态分页
        grMomentCur: 1,
        // 小组分页
        teamMomentCur: 1,
        // 发布动态时选择的分组id
        choosedGroupId: null,
        // 当前小组管理员id
        adminId: null,
        // 小组成员列表
        groupmembers: [],
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
        provinceList: [],

        //创建小组
        grounpWebsiteid: "",
        grounpFileName: "",

        //加入小组
        jionGrounpState: "",
        jionGrounpId: "",

        //搜索
        searchType: 1,

        //动态上传图片
        issueDynamicFile: "",
        issueDynamicPic: [],
        issueDynamicPicList: [],
        dynamicUploadImgList: [],

        //查看动态图片
        lookDynamicImgList: [],

        //发送动态评论
        sendBlogId: "",

        //小组分页
        bloglistPublicType: 1,

        //解散小组
        dissolveTeamId: "",

        //收藏的聊天室
        collectShareRoomList: "",
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
            // console.log("滚动条处于最底部")
            return true;
        } else {
            // console.log("滚动条不在最底部")
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
                            <div class="weTalkBroadContainer">
                                <img class="weTalkBroadImg" src="./images/broadCast.png">
                                <div class="weTalkBroadContent"></div>
                            </div>
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
                                    <div class="weTalkPublicSwitch">
                                        <div class="weTalkPublicSwitchTitle">聊天室</div>
                                        <div class="weTalkPublicSwitchBtn">
                                            <span>切换</span>
                                            <img src="./images/switchRoomIcon.png" />
                                        </div>
                                    </div>
                                    <div class="weTalkPublicChannelSecond" data-ischoosed="a">
                                        <img class="weTalkPublicChannnellAvatar" src="./images/title.png">
                                        <div class="weTalkPublicChannelSecondRight">
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
                                    </div>

                                    <div class="roomGrayLine"></div>
                                  </div>
                                  <div class="weTalkChatItemList"></div>
                              </div>
                          </section>
                          <section class="tab" id="friend"></section>
                          <section class="tab">
                              <div class="GroupChat">
                                  <div class="GroupChatTiltle">
                                      <div>
                                          <p id="collect" >聊天室</p>
                                          <p id="recommend">小组</p>
                                      </div>
                                      <p id="discover">
                                        <img src="./images/scsousuo.png" alt="">
                                      </p>
                                  </div>
                                  <div id="chatRoomContent">
                                    <div>
                                        <p class="chatRoomContentTitle">每日推荐</p>
                                        <div class="dailyRecommend">
                                            <div>
                                                <img id ="dailyRecommendImg" src="" >
                                                <div>
                                                    <p id="dailyRecommendTitle"></p>
                                                    <p class="dailyRecommendOnline">在线人数：<span class="dailyUpdateOnline"></span></p>
                                                </div>
                                            </div>
                                            <p id="dailyRecommendText"></p>
                                            <p class="dailyRecommendFooter"><button type="button" id="dailyRecommendBtn">进入聊天室</button></p>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="chatRoomContentTitle">我的收藏</p>
                                        <ul id="collectlist">
                                            
                                        </ul>
                                    </div>
                                  </div>
                                  <div id="groupList">
                                    <div>
                                        <div class="groupListTitle" id="foundMyGroup">
                                            <p>我的小组</p>
                                            <p>+创建</p>
                                        </div>
                                        <ul id="adminTeam">
                                            
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="groupListTitle" id="quickJoinGroup">
                                            <p>加入的小组</p>
                                            <p>快速加入</p>
                                        </div>	
                                        <ul id="commonTeam">
                                        </ul>
                                    </div>
                                  </div>
                                </div>
                          </section>
                          <section class="tab">
                              <div class="activity">
                                  <ul>
                                      <li class="activityOne">
                                          <img src="images/2choujiang.png" class="choujiang">
                                          <p class="oneText">天天抽奖</p>
                                      </li>
                                      <li class="activityTwo">
                                          <img src="images/2piaoliuping.png" class="piaoliuping">
                                          <p class="twoText">漂流瓶</p>
                                      </li>
                                  </ul>
                                  <ul>

                                      <li class="activityFour"><img src="images/2initFrag.png" class="duihuan">
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
                                      <img src="images/1huihua.png" class="one" style="display: none;">
                                      <img src="images/2huihua.png" class="two">
                                      <img src="images/huihua-h.png" class="three" style="display: none;">
                                      <span class="sessionPoint"></span>
                                      会话
                                  </div>
                              </li>
                              <li class="star">
                                  <div  id="friendList">
                                      <img src="./images/1haoyou.png" class="one">
                                      <img src="./images/2haoyou.png" class="two">
                                      <img src="./images/haoyou-h.png" class="three" style="display: none;">
                                      好友

                                  </div>
                              </li>
                              <li class="star">
                                  <div  id="groupChat">
                                      <img src="./images/1qunliao.png" class="one">
                                      <img src="./images/2qunliao.png" class="two">
                                      <img src="./images/qunliao-h.png" class="three" style="display: none;">
                                      群聊
                                  </div>
                              </li>
                              <li class="star">
                                  <img src="./images/1huodong.png" class="one">
                                  <img src="./images/2huodong.png" class="two">
                                  <img src="./images/huodong-h.png" class="three" style="display: none;">
                                  发现
                              </li>
                          </ul>
                      </nav>
                  </div>
                        <div class="weTalkRight">
                            <!-- 蒙版 -->
                            <div class="weTalkRightmMasking"></div>
                            <!-- 提示 -->
                            <div class="dissolveTeam">
                                <p class="dissolveTeamTitle">提示</p>
                                <p class="dissolveTeamText">您确定要解散小组么？</p>
                                <p class="dissolveTeamBtn">
                                    <button type="button" class="dissolveTeamCancel">取消</button>
                                    <button type="button" class="dissolveTeamSub">确定</button>
                                </p>
                            </div>
                            <!-- 写评论 -->
                            <div class="groupSendComment">
                                <img src="./images/closePersonalInfo.png" class="closeGroupSendComment">
                                <p class="groupSendCommentTitle">写评论</p>
                                <div class="groupSendCommentIpt" contenteditable="true"></div>
                                <p class="groupSendCommentBtn"><button type="button" id="sendGroupComment">提交</button></p>
                                <ul class="groupSendCommentContent">
                                </ul>
                            </div>
                            <!-- 查看动态图片 -->
                            <div class="lookDynamicConditionImg">
                                <img src="./images/closeLook.png" class="closeLookDynamicConditionImg">
                                <div class="swiper-container gallery-top">
                                    <ul class="swiper-wrapper">
                                    </ul>
                               
                                </div>
                                <div class="swiper-container gallery-thumbs">
                                    <ul class="swiper-wrapper">
                                    </ul>
                                </div>
                            </div>
                            <!-- 搜索结果 -->
                            <div class="searchGroupResult weTalkRightItem">
                                <p class="searchGroupResultTop">
                                    <span>搜索结果</span>
                                    <span id="searchGroupResultGoBack">
                                        &lt返回
                                    </span>
                                </p>
                                <ul class="searchGroupResultCenter">
                                </ul>
                                <p class="searchGroupResultFooter">
                                    <img src="../images/zuo1.png" >
                                    <img src="../images/you1.png" >
                                </p>
                            </div>
                            <!-- 加入理由 -->
                            <div class="joinReason">
                                <div class="joinReasonHint"></div>
                                <p class="joinReasonTitle">申请加入</p>
                                <input type="text" placeholder="请输入申请加入的理由" class="joinReasonInp"/>
                                <p >
                                    <button type="button" class="joinReasonCancel">取消</button>
                                    <button type="button" class="joinReasonSub">发送</button>
                                </p>
                            </div>
                             <!-- 快速加入 -->
                            <div class="quickJoin">
                                <img src="./images/closePersonalInfo.png" class="closeQuickJoin">
                                <div class="quickJoinHint"></div>
                                <p class="quickJoinTitle">
                                    快速加入
                                </p>
                                <p>
                                    <input type="text" placeholder="请输入6位数小组ID" class="quickJoinIpt"/>
                                    <button type="button" class="quickJoinBtn">查找</button>
                                </p>
                                <div class="quickJoinDetails">
                                    <div class="quickJoinDetailsStart">
                                        <img src="images/ssempty.png" >
                                    </div>
                                </div>
                            </div>
                             <!-- 搜索id -->
                            <div class="searchWebsiteId">
                                <div class="searchWebsiteIdHint"></div>
                                <img src="./images/closePersonalInfo.png" class="closeSearchWebsiteId">
                                <p class="searchWebsiteIdTitle">选择所属聊天室</p>
                                <p><input type="text" id="searchWebsiteIdInp" placeholder="请输入聊天室名称"/> <button type="button" id="searchWebsiteIdSearch">查找</button></p>
                                <ul class="searchWebsiteIdResult">
                                    <li class="searchWebsiteIdResultStart">
                                        <img src="images/ssempty.png" >
                                    </li>
                                </ul>
                                <p class="searchWebsiteIdText">设置小组的所属聊天室，吸引更多同好哦~</p>
                                <p class="searchWebsiteIdFooter"><button type="button" class="searchWebsiteIdGo">下一步</button></p>
                            </div>
                            <!-- 创建小组 -->
                            <div class="establishGroup">
                                <div class="establishGroupHint"></div>
                                <p class="establishGroupTitle">创建小组</p>
                                <p class="establishGroupIpt"><span>名称:</span> <input type="text" maxlength="6" placeholder="请输入小组名字" id="establishGroupIptName"/></p>
                                <p class="establishGroupIpt"><span>简介:</span> <input type="text" maxlength="15" placeholder="汇聚兴趣相投的人，群组聊天、爱好分享。" id="establishGroupIptIntro"/></p>
                                <div class="establishGroupUploadOut">
                                    <span>图标:</span>
                                    <div class="establishGroupUploadDiv">
                                        <label for="establishGroupUpload" class="establishGroupUpload">
                                            <span>+</span>
                                        </label>
                                        <input type="file" id="establishGroupUpload" class="weTalkSendPic" />
                                        <div class="establishGroupPic">
                                        </div>
                                   </div>
                                </div>
                                <p>
                                    <span>加入条件：</span>
                                    <span>
                                        <input type="radio" name="reviewState"  value="0" checked="checked" /> 公开
                                        <input type="radio" name="reviewState"  value="1" /> 需要审核
                                    </span>
                                </p>
                                <p class="establishGroupNum"><span>人数上限：20人</span></p>
                                <div class="establishGroupAllBtn">
                                    <p>
                                        <button type="button" class="establishGroupCancel">取消</button>
                                        <button type="button" class="establishGroupSub">创建</button>
                                    </p>
                                </div>
                            </div>
                            <!-- 创建成功 -->
                            <div class="establishGroupSucceed">
                                <p class="establishGroupSucceedTitle">小组创建成功</p>
                                <div class="establishGroupSucceedDetails">
                                    <p>你可能需要了解：</p>
                                    <p>1、聊天、发表动态，有助于提高小组活跃度;</p>
                                    <p>2、组长随时可以修改小组名称、图标等信息；</p>
                                    <p>3、组长可以对组员进行管理，对申请加入进行审核；</p>
                                    <p>4、通过小组ID可以方便的邀请加入。</p>
                                </div>
                                <p class="establishGroupSucceedFooter"><button type="button" id="closeEstablishGroupSucceed">知道了</button></p>
                            </div>
                            <!-- 发布动态 -->
                            <div class="issueDynamic">
                                <div class="issueDynamicHint">请输入动态内容</div>
                                <p class="issueDynamicTitle">发布动态</p>
                                <textarea class="shurukuang" maxlength="1000" placeholder="请输入动态内容（不超过1000字）"></textarea>
                                <div class="shangchuan">
                                    <ul class="shoWissueDynamic">
                                    </ul>
                                    <div class="issueDynamicUploadOut">
                                    <label for="issueDynamicUpload" class="issueDynamicUpload">
                                    <span>+</span>
                                    </label>
                                    <input type="file" id="issueDynamicUpload" class="weTalkSendPic" />
                                    </div>
                                </div>
                                <div>
                                    <input type="checkbox" class="issueDynamic-checkbox" checked />
                                    <span>同时发布到广场</span>
                                </div>
                                <div class="issueDynamicAllBtn">
                                    <p>
                                        <button type="button" class="issueDynamicCancel">取消</button>
                                        <button type="button" class="issueDynamicSub">提交</button>
                                    </p>
                                </div>
                            </div>
                            <!-- 广场动态 -->
                            <div id="quareDynamicCondition" class="weTalkRightItem">
                                <div class="quareDynamicConditionTop">
                                    <p class="quareDynamicConditionTopLeft"><img src="../images/guangchang.png"><span>广场动态</span></p>
                                    <div>
                                         <p class="quareDynamicConditionTopRightLeft"><img src="../images/xiaozu1.png"><span>小组动态</span></p> 
                                         <p class="quareDynamicConditionTopRight"><img src="../images/dongtai.png"><span>我的动态</span></p>
                                    </div>
                                </div>
                                <div class="quareDynamicConditionBottom">
                                    <ul class="quareDynamicConditionBottomLeft">
                                   
                                    </ul>
                                    <div class="quareDynamicConditionBottomRinght">
                                        <div class="hotGroup">
                                            <p class="hotGroupTitle">热门小组</p>
                                            <ul class="hotGroupListOut">
                                            </ul>
                                            <div class="hotGroupBottom">
                                                <p>
                                                    <img src="../images/gengxin.png">
                                                    <span>换一组</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="writeQuareDynamicCondition">
                                                <img src="../images/comment.png">
                                            </p>
                                            <p class="quareDynamicConditionGotop"><img src="../images/draw-down.png"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                              <label for="weTalkSendPic" class="weTalkSendPicFor" title="发送图片">
                                <img src="./images/htmal5icon1.png" class="weTalkChatToolPic" alt="" />
                              </label>
                              <input type="file" id="weTalkSendPic" class="weTalkSendPic" />
                              <img src="./images/biaoqing1.png" class="weTalkChatFace" alt="" title="发送表情"/>
                              <img src="./images/touzi1.png" class="weTalkChatFace1" alt="" title="掷骰子"/>
                              <img src="./images/paoyingbi.png" class="weTalkChatFace2" alt="" title="抛硬币"/>
                              <img src="./images/jiandaoshou-1.png" class="weTalkChatFace3" alt="" title="划拳"/>
                              <img src="./images/yuyin2.png" class="weTalkChatFace4" alt="" title="发送语音"/>
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
                          <!-- 动态选择弹出框 -->
                          <div class="selectGroupIssue">
                            <p class="selectGroupIssueTitle">选择发布小组</p>
                            <ul class="selectGroupIssueUl"></ul>
                            <div class="selectGroupIssueAllBtn">
                                <p>
                                    <button type="button" class="selectGroupIssueCancel">取消</button>
                                    <button type="button" class="selectGroupIssueSub">确定</button>
                                </p>
                            </div>
                        </div>

                          <!-- 修改小组名称 -->
                          <div class="weTalkEditGroupTitleView">
                            <div class="weTalkEditTitle">名称修改</div>
                            <input class="weTalEditTitleInput" data-word="15" data-name="名称"/>
                            <div class="weTalkEditTitleBtns">
                                <div class="weTalkBtnqx weTalkBtn1 weTalkEditTitleBtn1">取消</div>
                                <div class="weTalkBtnqd weTalkBtn2 weTalkEditTitleBtn2">确认</div>
                            </div>
                          </div>
                          <!-- 编写小组公告 -->
                          <div class="weTalkEditAnnounceView">
                            <div class="weTalkEditAnnounceTitle">公告修改</div>
                            <textarea class="weTalkEditAnnounceInput"></textarea>
                            <div class="weTalkEditAnnounceBtns">
                                <div class="weTalkEditAnnounceBtn1 weTalkBtnqx weTalkBtn1">取消</div>
                                <div class="weTalkEditAnnounceBtn2 weTalkBtnqd weTalkBtn2">确定</div>
                            </div>
                          </div>
                          <!-- 小组待审核 -->
                          <div class="weTalkWaitingTest weTalkRightItem">
                            <div class="weTalkWaitingTestHt">
                                <div class="weTalkWaitingTestTitle weTalkGroupFont1">审核列表</div>
                                <div class="weTalkWaitingTestBack"><返回</div>
                            </div>
                            <div class="weTalkWaitingTestList"></div>
                            <div class="weTalkWaitingTestPage">
                                <img class="weTalkWaitingTestLastPage" src="./images/zuo1.png"/>
                                <img class="weTalkWaitingTestNextPage" src="./images/you1.png"/>
                            </div>
                          </div>
                          <!-- 小组动态 -->
                          <div class="myDynamicCondition weTalkRightItem">
                            <div class="opeMomentTip">
                                <div class="weTalkTitle">是否要删除该条动态</div>
                                <div class="weTalkOpeMomentBtns">
                                    <div class="weTalkOpeMomentBtn1 weTalkBtnqx weTalkBtn1">取消</div>
                                    <div class="weTalkOpeMomentBtn2 weTalkBtnqd weTalkBtn2">确定</div>
                                </div>
                            </div>
                            <div class="myDynamicConditionTop">
                                <p class="myDynamicConditionTopLeft"><img src="./images/guangchang.png"><span>我的动态</span></p>
                                <p class="myDynamicConditionTopRight">&lt返回广场</p>
                            </div>
                            <div class="myDynamicConditionBottom">
                              <ul class="myDynamicConditionLeft"></ul>
                              <div class="myDynamicConditionRight">
                                  <p class="writeMyDynamicCondition">
                                      <img src="./images/comment.png">
                                  </p>
                                  <p class="myDynamicConditionGotop"><img src="./images/draw-down.png"></p>
                              </div>
                            </div>
                          </div>
                          <!-- 小组管理 -->
                          <div class="weTalkGroupManageView weTalkRightItem">
                            <div class="weTalkdelGroupUserConfirmTip">
                                <div class="weTalkTitle weTalkBindBorder">提示</div>
                                <div class="weTalkdelGroupUserTip">确定要移除当前成员吗？</div>
                                <div class="weTalkdelGroupUserConfirmTipBtns">
                                    <div class="weTalkBtn1 weTalkBtnqx weTalkdelGroupUserConfirmTipBtn1">取消</div>
                                    <div class="weTalkBtn2 weTalkBtnqd weTalkdelGroupUserConfirmTipBtn2">确定</div>
                                </div>
                            </div>
                            <div class="weTalkGroupMTitle">
                                <div class="weTalkGroupMTitleLeft">
                                    <div class="weTalkGroupMTitleLeftF">B站生活区</div>
                                    <img class="weTalkGroupMTitleLeftEdit" src="./images/xiugai.png" alt="">
                                    <div class="weTalkGroupMTitleLeftL">ID:837412</div>
                                </div>
                                <div class="weTalkGroupMTitleRight">
                                    <div class="weTalkGroupMTitleRightF">待审核</div>
                                    <div class="weTalkGroupMTitleRightL"></div>
                                </div>
                            </div>
                            <div class="weTalkGroupMavatar">
                                <img class="weTalkGroupMavatarImg"/>
                                <label class="weTalkGroupMavatarCover" for="setGroupAvatar">
                                    <img src="./images/gRefresh.png" style="width:20px;height:20px;"/>
                                    <div>更换图片</div>
                                </label>
                                <input id="setGroupAvatar" type="file"/>
                            </div>
                            <div class="weTalkGroupIntro">
                                <div class="weTalkGroupIntroL">
                                    <div class="weTalkGroupFont1">简介：</div>
                                    <div class="weTalkGroupIntroContent">i want to kill my ugly heart.</div>
                                    <img class="weTalkGroupIntroEdit" src="./images/xiugai.png">
                                </div>
                                <div class="weTalkGroupIntroR">13/15</div>
                            </div>
                            <div class="weTalkGroupAddStyle">
                                <div class="weTalkGroupFont1">加入小组</div>
                                <div class="weTalkGroupAddStyle1">
                                    <div class="weTalkGroupRadio"></div>
                                    <div class="weTalkGroupRadioName">公开</div>
                                </div>
                                <div class="weTalkGroupAddStyle2">
                                    <div class="weTalkGroupRadio"></div>
                                    <div class="weTalkGroupRadioName">需要审核</div>
                                </div>
                            </div>
                            <div class="weTalkGroupMemberList">
                                <div class="weTalkGroupFont1">成员列表</div>
                                <div class="weTalkGroupMemberListR"></div>
                            </div>
                            <div class="weTalkGroupMemberLists"></div>
                          </div>
                          <!-- 小组聊天框头部 --!>
                          <div class="weTalkGroupHead weTalkRightItem">
                            <div class="weTalkGroupHeadLeft">
                                <div class="weTalkGroupName">
                                    B站生活区  
                                </div>
                                <div class="weTalkGroupId">
                                    ID256356
                                </div>
                            </div>
                            <div class="weTalkGroupOpe">
                                <div class="weTalkGroupChat">
                                    <img src="./images/1liaotian.png">
                                    <div class="weTalkGroupChatBtn">聊天</div>
                                    <div class="weTalkGroupShu">|</div>
                                </div>
                                <div class="weTalkGroupMoment">
                                    <img src="./images/1dongtailan.png">
                                    <div class="weTalkGroupMomentBtn">动态</div>
                                </div>
                                <div class="weTalkGroupManage">
                                    <div class="weTalkGroupShu">|</div>
                                    <img src="./images/1guanli.png">
                                    <div class="weTalkGroupManageBtn">管理</div>
                                </div>
                              </div>
                            </div>
                          <!-- 小组成员及公告 -->
                          <div class="weTalkGroupUsers weTalkRightItem">
                            <div class="weTalkGroupAnnounce">
                               <div class="weTalkGroupAnnounceTitle">
                                  <div>【公告】</div>
                                  <img src="./images/xiugai.png" class="weTalkGroupAnnounceEdit">
                               </div>
                               <div class="weTalkGroupAnnounceContent"></div>
                             </div>
                             <div class="weTalkGroupMembers">
                                <div class="weTalkGroupMembersNum">成员：5/10</div>
                                <div class="weTalkGroupMembersList"></div>
                             </div>
                            </div>
                          <!-- 搜索群聊 -->
                          <div class="weTalkUsers weTalkRightItem">
                            <div class="weTalkOnlineCount"></div>
                            <div class="weTalkUsersItemList"></div>
                          </div>
                          <div class="searchChatroom weTalkRightItem">
                            <div class="searchChatroomTitle">
                                <p class="searchChatroomTitleRoom">聊天室</p>
                                <span></span>
                                <p class="searchChatroomTitleGroup">小组</p>
                            </div>
                            <div class="searchChatroomSearch">
                              <p>关键词：</p>
                              <input
                                type="text"
                                placeholder="请输入网站名称或者网址"
                                id="searchChatroomInput"
                                autocomplete="off"
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
                        <div class="weTalkPersonalInfoTitle">个人信息</div>
                        <img
                        src="./images/closePersonalInfo.png"
                        class="weTalkPersonalInfoClose weTalkPointer"
                        />
                    </div>
                    <!-- 头像裁切 -->
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
                        <span>&nbsp|&nbsp</span>
                        <span class="weTalkZfSwitchGroup">小组</span>
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
                    <!-- 公告 -->
                    <div class="weTalkAnnounce">
                      <div class="weTalkTitle weTalkBindBorder">系统公告</div>
                      <img src="./images/closePersonalInfo.png" class="weTalkAnnounceCha weTalkPointer"></img>
                      <div class="weTalkAnnounceDate"></div>
                      <div class="weTalkAnnounceContent"></div>
                      <div class="weTalkAnnounceBtn weTalkBtn2">确定</div>
                    </div>
                    <!-- 录音· -->
                    <div class="weTalkRadio">
                        <div class="weTalkRadioContent">
                            <div class="weTalkRadioImgContainer">
                                <img class="weTalkRadioImg" src="./images/yuyin3.png" alt="">
                            </div>
                            <div class="weTalkRadioAnimate"></div>
                            <div class="weTalkRadioingTip"></div>
                        </div>
                        <div class="weTalkRadioTip">提示：第一次使用时，请授权WeTalk使用麦克风。</div>
                        <div class="weTalkBtn1 weTalkRadioPreBtn">取消</div>
                        <div class="weTalkRadioToolKe">
                            <img src="./images/yuyin4.png" class="weTalkRadioToolKeImg1" />
                            <div class="weTalkRadioToolKeOne">
                                <img src="./images/purpler.png" class="weTalkRadioToolKeImg2" />
                                <span class="weTalkRadioDuration"></span>
                            </div>
                            <audio class="weTalkRadioTool"></audio>
                        </div>
                        <div class="weTalkRadiobtns">
                            <div class="weTalkBtn1 weTalkRadiobtn1">取消</div>
                            <div class="weTalkBtn2 weTalkRadiobtn2">发送</div>
                        </div>
                    </div>
                    <!-- 功能透明遮罩层 -->
                    <div class="weTalkFunCover">
                        
                    </div>
                    <!-- 功能深色遮罩层 -->
                    <div class="weTalkDarkCover">
                        
                    </div>
                    <!-- 切换遮罩层 -->
                    <div class="weTalkSwitchChatRoomTip">
                       <div class="weTalkTitle">是否切换聊天室</div>
                       <div class="weTalkSwitchRoomTipBtns">
                        <div class="weTalkSwitchRoomTipBtn1 weTalkBtn1">取消</div>
                        <div class="weTalkSwitchRoomTipBtn2 weTalkBtn2">确定</div>
                       </div>
                    </div>
                  </div>
                        `
        )
        weTalkChatRoom.appendTo("body");


        $(".weTalkRightMain").hide();
        $(".weTalkUsers").hide();
        $(".weTalkInitial").show();

        // 图片预览
        $(".weTalkYsPicContent").remove();
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

        // 向上滚动加载更多聊天记录
        $(".weTalkChatMain")[0].onscroll = function () {
            // console.log("scrollTop",$(this)[0].scrollTop)
            let scrollTop = $(this)[0].scrollTop;
            if (scrollTop == 0) {
                // console.log("加载新的聊天记录")
                if (data.isPublic == 1) {
                    // 加载聊天室记录
                    if (data.Pcurrent < data.Ppages) {
                        data.Pcurrent += 1;
                    } else {
                        if (data.Ppages > 1) {
                            showTip("没有更多消息了")
                        }
                        return;
                    }
                    getPublicLogRequset(data.roomId, data.token, false)
                } else if (data.isPublic == 0) {
                    // 加载私聊记录
                    if (data.Scurrent < data.Spages) {
                        data.Scurrent += 1;
                    } else {
                        // if(data.weTalkPerList[data.friendIndex].pages && data.weTalkPerList[data.friendIndex].pages > 1){
                        if ($(this)[0].scrollHeight > $(this)[0].clientHeight) {
                            showTip("没有更多消息了");
                        }
                        return;
                    }
                    getPrivateLogRequest(data.friendId, data.friendIndex, false);
                } else if (data.isPublic == 2) {
                    // 加载私聊记录
                    if (data.Gcurrent < data.Gpages) {
                        data.Gcurrent += 1;
                    } else {
                        // if(data.weTalkPerList[data.friendIndex].pages && data.weTalkPerList[data.friendIndex].pages > 1){
                        if ($(this)[0].scrollHeight > $(this)[0].clientHeight) {
                            showTip("没有更多消息了");
                        }
                        return;
                    }
                    getGroupRecordsRequest(data.friendId, data.friendIndex, false);
                }
            }
        };

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
        $(".weTalkChatRoom").on("click", ".weTalkSwitchRoomTipBtn1", function () {
            $('.weTalkSwitchChatRoomTip').hide();
            $(".weTalkFunCover").hide();
            // data.isLoadRecords = false;
            // if (data.websiteId == null) {
            //     changeRoomRequest(data.webDesiteId);
            // } else {
            //     // 不是第一次加载默认聊天室
            //     loadDeRoomRecords();
            // }
        })

        $(".weTalkChatRoom").on("click", ".weTalkSwitchRoomTipBtn2", function () {
            loadChatRoomInitial();
            let websiteId = $(".weTalkSwitchChatRoomTip").attr("data-websiteId");
            changeRoom(websiteId, data.roomId, data.token).then(res => {
                if (res.code == 1) {
                    data.aid = 0;
                    data.atArr = [];
                    // 获取聊天室名称
                    data.websiteTitle = res.data.title;
                    data.roomId = res.data.id;
                    data.websiteId = websiteId;
                    data.friendId = websiteId;
                    data.isAtDone = false;
                    $(".weTalkPublicChannnellLastRecords").children(".weTalkAtWo").hide();
                    showPublicRecords(data.roomId)
                    $(".weTalkFunCover").hide();
                    $(".weTalkSwitchRoomView").remove();
                    $(".weTalkSwitchChatRoomTip").hide().attr("data-websiteId", "");
                    // console.log("websiteId", data.websiteId, "friend", data.friendId)
                    $(".weTalkLoadRecord").css({ "visibility": "visible" })
                    data.isLoadRecords = true;
                } else {
                    // 失败仍执行回调
                    switchRoomCallBack();
                }
            }).catch(error => {
                // 失败仍执行回调
                switchRoomCallBack();
            })
        })


        // 私聊会话方法
        $(".weTalkChatRoom").on("click", ".weTalkChatItem", showChoosedUser);
        $(".weTalkChatRoom").on("mouseenter", ".weTalkChatItem", showRemoveUser);
        $(".weTalkChatRoom").on("mouseleave", ".weTalkChatItem", hideRemoveUser);
        $(".weTalkChatRoom").on("contextmenu", ".weTalkChatItem", sessionItemYoujian);
        $(".weTalkChatRoom").on("click", ".weTalkSessionRemove", openRemoveDiag);

        // 小组会话方法
        $(".weTalkChatItemList").on("click", ".weTalkGroupItem", showChoosedGroup)
        $(".weTalkChatItemList").on("mouseenter", ".weTalkGroupItem", showRemoveGroup);
        $(".weTalkChatItemList").on("mouseleave", ".weTalkGroupItem", hideRemoveGroup);
        $(".weTalkChatItemList").on("contextmenu", ".weTalkGroupItem", sessionItemYoujian);

        // 小组聊天/动态/管理点击事件
        $(".weTalkGroupHead").on("click", ".weTalkGroupChatBtn", showGroupChat)
        $(".weTalkGroupHead").on("click", ".weTalkGroupMomentBtn", showGroupMoment)
        $(".weTalkGroupHead").on("click", ".weTalkGroupManageBtn", showGroupManage)

        // 小组聊天/动态/管理 移入/移出事件
        // $(".weTalkGroupHead").on("mouseenter",".weTalkGroupChatBtn",function(){
            // $(".weTalkGroupChat").children("img").attr("src","./images/2liaotian.png");
        //     $(this).css("color","#944eea");
        // })
        // $(".weTalkGroupHead").on("mouseleave",".weTalkGroupChatBtn",function(){
        //     $(".weTalkGroupChat").children("img").attr("src","./images/1liaotian.png");
        //     $(this).css("color","#999999");
        // })

        // $(".weTalkGroupHead").on("mouseenter",".weTalkGroupMomentBtn",function(){
        //     $(".weTalkGroupChat").children("img").attr("src","./images/2dongtai.png");
        //     $(this).css("color","#944eea");
        // })
        // $(".weTalkGroupHead").on("mouseleave",".weTalkGroupMomentBtn",function(){
        //     $(".weTalkGroupChat").children("img").attr("src","./images/1dongtai.png");
        //     $(this).css("color","#999999");
        // })

        // $(".weTalkGroupHead").on("mouseenter",".weTalkGroupManageBtn",function(){
        //     $(".weTalkGroupChat").children("img").attr("src","./images/2guanli.png");
        //     $(this).css("color","#944eea");
        // })
        // $(".weTalkGroupHead").on("mouseleave",".weTalkGroupManageBtn",function(){
        //     $(".weTalkGroupChat").children("img").attr("src","./images/1guanli.png");
        //     $(this).css("color","#999999");
        // })

        // 小组名称修改
        $(".weTalkGroupManageView").on("click", ".weTalkGroupMTitleLeftEdit", editGroupTitle)
        $(".weTalkEditGroupTitleView").on("input propertychange", ".weTalEditTitleInput", limitInputWords)
        $(".weTalkEditGroupTitleView").on("click", ".weTalkEditTitleBtn1", cancelEditGroupTitle)
        $(".weTalkEditGroupTitleView").on("click", ".weTalkEditTitleBtn2", confirmEditGroupTitle)

        // 小组公告编写
        $(".weTalkGroupUsers").on("click", ".weTalkGroupAnnounceEdit", editGroupAnnounce)
        $(".weTalkEditAnnounceView").on("click", ".weTalkEditAnnounceBtn1", cancelEditAnnounce)
        $(".weTalkEditAnnounceView").on("click", ".weTalkEditAnnounceBtn2", confirmEditAnnounce)
        // 小组待审核主页
        $(".weTalkGroupManageView").on("click", ".weTalkGroupMTitleRight", showTestRes)
        // 返回待审核页面
        $(".weTalkWaitingTest").on("click", ".weTalkWaitingTestBack", hideTestRes)
        // 分页移出/移入
        $(".weTalkWaitingTest").on("mouseenter", ".weTalkWaitingTestLastPage", function () {
            $(this).attr("src", "./images/zuo2.png")
        })
        $(".weTalkWaitingTest").on("mouseenter", ".weTalkWaitingTestNextPage", function () {
            $(this).attr("src", "./images/you2.png")
        })
        $(".weTalkWaitingTest").on("mouseleave", ".weTalkWaitingTestLastPage", function () {
            $(this).attr("src", "./images/zuo1.png")
        })
        $(".weTalkWaitingTest").on("mouseleave", ".weTalkWaitingTestNextPage", function () {
            $(this).attr("src", "./images/you1.png")
        })
        // 待审核列表下一页/上一页
        $(".weTalkWaitingTest").on("click", ".weTalkWaitingTestLastPage", waitLastPage)
        $(".weTalkWaitingTest").on("click", ".weTalkWaitingTestLastPage", waitNextPage)

        // 同意/拒绝用户加入小组
        $(".weTalkWaitingTestList").on("click", ".weTalkWaitingTestBtn1", agreeOdisUserToAdd)
        $(".weTalkWaitingTestList").on("click", ".weTalkWaitingTestBtn2", agreeOdisUserToAdd)

        // 小组管理方法
        $(".weTalkGroupManageView").on("change", "#setGroupAvatar", setAvatar)
        // 小组简介编写
        $(".weTalkGroupManageView").on("click", ".weTalkGroupIntroEdit", editGroupIntro)
        // 加入小组方式
        $(".weTalkGroupManageView").on("click", ".weTalkGroupAddStyle1", addGroupStyle)
        $(".weTalkGroupManageView").on("click", ".weTalkGroupAddStyle2", addGroupStyle)
        // 监听小组公告的字数
        $('.weTalkChatRoom').on('input propertychange', '.weTalkEditAnnounceInput', limitInputWords);
        // 移入图片时显示更换图片
        $(".weTalkGroupManageView").on("mouseenter",".weTalkGroupMavatar",function(){
            $(".weTalkGroupMavatarCover").css("display","flex");
        })
        $(".weTalkGroupManageView").on("mouseleave",".weTalkGroupMavatar",function(){
            $(".weTalkGroupMavatarCover").css("display","none");
        })
        // 删除某个小组成员
        $(".weTalkGroupManageView").on("mouseenter", ".weTalkGroupMemberItem", showDelMember)
        $(".weTalkGroupManageView").on("mouseleave", ".weTalkGroupMemberItem", delDelMember)
        $(".weTalkGroupManageView").on("click", ".weTalkGroupMemberItemDel", delgroupMember)
        $(".weTalkGroupManageView").on("click", ".weTalkdelGroupUserConfirmTipBtn1", cancelDelgroupMember)
        $(".weTalkGroupManageView").on("click", ".weTalkdelGroupUserConfirmTipBtn2", confirmDelgroupMember)
        // 获取某个小组成员的信息
        $(".weTalkGroupUsers").on("click", ".weTalkGroupUserItem", showGroupUserInfo)
        // 小组动态方法
        // 打开某动态评论view
        $(".myDynamicCondition").on("click", ".myDynamicConditionDetailsComment", showCommentView)
        // 点赞
        // $(".myDynamicCondition").on("click", ".myDynamicConditionDetailsZan", clickNice)
        // 发布动态时选择小组
        $(".selectGroupIssue").on("click", ".selectGroupIssueCancel", selectGroupIssueCancel)
        $(".selectGroupIssue").on("click", ".selectGroupIssueSub", selectGroupIssueSub)

        // 管理某动态
        $(".myDynamicCondition").on("click", ".weTalkManageMoment", manageAMoment)
        $(".myDynamicCondition").on("mouseleave", ".weTalkManageMomentView", function () {
            $(this).hide();
        })
        $(".myDynamicCondition").on("click", ".weTalkManageMomentViewItem", manageAMomentItem)
        // 删除某动态
        $(".opeMomentTip").on("click", ".weTalkOpeMomentBtn1", canceldeleteBlog)
        $(".opeMomentTip").on("click", ".weTalkOpeMomentBtn2", deleteBlogMethod)
        // 我的/小组创建新动态
        $(".myDynamicCondition").on("click", ".writeMyDynamicCondition", creatOneMoment)
        // 查看我的动态
        $("#quareDynamicCondition").on("click", ".quareDynamicConditionTopRight", showMyMoment)
        //
        $("#quareDynamicCondition").on("click", ".quareDynamicConditionTopRightLeft", getGroupInfoRequest)
        // 在查看我的动态页面返回广场
        $(".myDynamicCondition").on("click", ".myDynamicConditionTopRight", backToSquare)
        // 动态页面回到顶部
        $(".myDynamicCondition").on("click", ".myDynamicConditionGotop", backMomentTop)

        // 加为好友/解除好友
        $(".weTalkOtherInfo").on("click", "#friendBtn", function () {
            if ($("#friendBtn").html() == "加为好友") {
                if ($("#lhBtn").html() == "移出黑名单") {
                    $(".weTalkLhSuc").html("该用户已被您拉黑").show();
                    setTimeout(function () {
                        $(".weTalkLhSuc").hide().html("")
                    }, 3000)
                } else {
                    addFriendFin(data.otherUserId, 2);
                }
            } else if ($("#friendBtn").html() == "解除好友") {
                removeFriendFin(data.otherUserId, 2);
            }
        })

        // 聊天记录绑定事件初始化
        recordPoolOpeFin();

        // 碎片兑换
        $(".activity").on("click", ".activityFour", fragExChange);
        $(".activity").on("mouseenter", ".activityFour", function () {
            $(".duihuan").css("background", "#FFBA00");
            $(".duihuan").attr("src", "./images/1initFrag.png")
        });
        $(".activity").on("mouseleave", ".activityFour", function () {
            $(".duihuan").css("background", "#fff");
            $(".duihuan").attr("src", "./images/2initFrag.png")
        });
        $(".activity").on("mouseenter", ".activityOne", function () {
            $(".choujiang").css("background", "#FF6000");
            $(".choujiang").attr("src", "./images/1choujiang.png")
        });
        $(".activity").on("mouseleave", ".activityOne", function () {
            $(".choujiang").css("background", "#fff");
            $(".choujiang").attr("src", "./images/2choujiang.png")
        });
        $(".activity").on("mouseenter", ".activityTwo", function () {
            $(".piaoliuping").css("background", "#00BAFF");
            $(".piaoliuping").attr("src", "./images/1piaoliuping.png")
        });
        $(".activity").on("mouseleave", ".activityTwo", function () {
            $(".piaoliuping").css("background", "#fff");
            $(".piaoliuping").attr("src", "./images/2piaoliuping.png")
        });

        // 设置个人头像
        $(document).on("change", "#weTalkChangeMethodInput", setAvatar)
        $(".weTalkChatRoom").on("click", ".weTalkavatarBtn1", function () {
            $(".weTalkAvatarCjView").hide()
            $("#weTalkChangeMethodInput").val("");
            $("#setGroupAvatar").val("");
            $("#establishGroupUpload").val("");
            $(".weTalkPersonalInfoCover").hide();
            $(".weTalkFunCover").hide()
        })
        $(".weTalkChatRoom").on("click", ".weTalkavatarBtn2", function () {
            if ($(".establishGroup ").css("display") == "none") {
                showTip("正在修改...")
            }
            if ($(".weTalkGroupManageView").css("display") == "block") {
                $(".weTalkGroupMavatarCover").css("pointer-events", "none")
            }
            let imgUrl = $('.weTalkavatarPreview').children('.weTalkavatarPreviewImg').cropper("getCroppedCanvas", {
                width: 128, // 裁剪后的长宽
                height: 128,
            }).toDataURL('image/png');
            data.upFile = convertBase64UrlToFile(imgUrl, (new Date()).valueOf())
            aliUpload(1);
            $(".weTalkAvatarCjView").hide()
            $("#weTalkChangeMethodInput").val("");
            $(".weTalkPersonalInfoCover").hide();
            $(".weTalkFunCover").hide()
        })

        // 加入黑名单/移除黑名单
        $(".weTalkOtherInfo").on("click", "#lhBtn", function () {
            if ($("#lhBtn").html() == "加入黑名单") {
                blockUserRequestInfo(data.otherUserId);
            } else {
                unblockRequestInfo(data.otherUserId);
            }
        })

        // 发起私聊
        $(".weTalkOtherInfo").on("click", "#chatBtn", function () {
            if ($("#lhBtn").html() == "移出黑名单") {
                $(".weTalkLhSuc").html("该用户已被您拉黑").show();
                setTimeout(function () {
                    $(".weTalkLhSuc").hide().html("")
                }, 3000)
            } else {
                addUserMethod(data.otherUserId, 2, 0);
                // 关闭他人信息页
                data.otherInfo.hide();
                $(".weTalkOverCover").hide();
            }
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

        // 功能icon变色
        $(document).on("mouseenter", ".weTalkChatToolPic", function () {
            $(this).attr("src", "./images/htmal5icon2.png")
        })
        $(document).on("mouseleave", ".weTalkChatToolPic", function () {
            $(this).attr("src", "./images/htmal5icon1.png")
        })
        $(document).on("mouseenter", ".weTalkChatFace", function () {
            $(this).attr("src", "./images/biaoqing2.png")
        })
        $(document).on("mouseleave", ".weTalkChatFace", function () {
            $(this).attr("src", "./images/biaoqing1.png")
        })

        $(document).on("mouseenter", ".weTalkChatFace1", function () {
            $(this).attr("src", "./images/touzi2.png")
        })
        $(document).on("mouseleave", ".weTalkChatFace1", function () {
            $(this).attr("src", "./images/touzi1.png")
        })
        $(document).on("mouseenter", ".weTalkChatFace2", function () {
            $(this).attr("src", "./images/paoyingbi2.png")
        })
        $(document).on("mouseleave", ".weTalkChatFace2", function () {
            $(this).attr("src", "./images/paoyingbi1.png")
        })

        $(document).on("mouseenter", ".weTalkChatFace3", function () {
            $(this).attr("src", "./images/jiandaoshou-2.png")
        })
        $(document).on("mouseleave", ".weTalkChatFace3", function () {
            $(this).attr("src", "./images/jiandaoshou-1.png")
        })

        $(document).on("mouseenter", ".weTalkChatFace4", function () {
            $(this).attr("src", "./images/yuyin1.png")
        })
        $(document).on("mouseleave", ".weTalkChatFace4", function () {
            $(this).attr("src", "./images/yuyin2.png")
        })

        // 取消右键默认事件
        $(".weTalkChatRoom").on("contextmenu", function (e) {
            e.preventDefault()
        })


        // 语音事件
        $(document).on("click", ".weTalkChatFace4", sendRadio)

        $(document).on("mousedown", ".weTalkRadioImg", startRecord)
        $(document).on("mouseup", ".weTalkRadioImg", endRecord)

        $(document).on("click", ".weTalkRadioToolKeOne", palyRecord)

        $(document).on("click", ".weTalkRadiobtn1", function () {
            $(".weTalkRadio").hide();
            $(".weTalkRadiobtns").hide();
            $(".weTalkRadioPreBtn").show();
        })

        $(document).on("click", ".weTalkRadioPreBtn", function () {
            $(".weTalkRadio").hide();
            $(".weTalkRadiobtns").hide();
            $(".weTalkRadioPreBtn").show();
        })

        $(document).on("click", ".weTalkRadiobtn2", function () {
            if ($(".weTalkRadioToolKe").css("display") != "none") {
                if (data.sendState) {
                    showTip("正在发送...")
                    $(".weTalkRadio").hide();
                    aliUpload(5);
                } else {
                    showGlobalTip("请" + localStorage.getItem("speakInterval") + "秒以后再发送")
                }
            } else {
                showTip("请先录音");
            }
        })

        $(document).on("click", ".weTalkRecordItem", function () {
            let radio = $(this).children(".weTalkAudioItem")[0];
            console.log("paused状态", radio.paused)
            if (radio.paused) {
                // console.log("播放")
                // 点击播放时先暂停所有中audio
                $(".weTalkAudioItem").each(function () {
                    // console.log("this", $(this)[0])
                    $(this)[0].pause();
                    // console.log("data-self", $(this).parent()[0])
                    // if ($(this).parent().attr("data-self") == "true") {
                    // console.log("进自己")
                    // 自己
                    // $(this).next(".weTalkRecordItemImg").attr("src", "./images/whiter.png")
                    // } else {
                    // console.log("进他人")
                    // 他人
                    $(this).next(".weTalkRecordItemImg").attr("src", "./images/blackr.png")
                    // }
                })
                // if ($(this).attr("data-self") == "true") {
                //     console.log("进自己")
                //     $(this).children(".weTalkRecordItemImg").attr("src", "./images/whiter.gif")
                // } else {
                //     console.log("进他人")
                $(this).children(".weTalkRecordItemImg").attr("src", "./images/blackr.gif")
                // }
                radio.play();
            } else {
                // console.log("暂停")
                // if ($(this).attr("data-self") == "true") {
                //     $(this).children(".weTalkRecordItemImg").attr("src", "./images/whiter.png")
                // } else {
                $(this).children(".weTalkRecordItemImg").attr("src", "./images/blackr.png")
                // }
                radio.pause();
            }
        })


        // 语音播放完成时
        $(".weTalkRadioTool")[0].onended = function () {
            $(".weTalkRadioToolKeImg2").attr("src", "./images/purpler.png")
        }

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
                $(".weTalkYsPicContent").css("visibility", "hidden")
                $(".weTalkFunCover").hide();
                if (data.upFile.size > data.maxSize) {
                    //调用函数,对图片进行压缩
                    compress(data.upFile, check)
                    $(".weTalkYsPicContent").css("visibility", "hidden")
                    return;
                }
                // uploadFile(2, data.upFile);
                aliUpload(2)
            } else {
                showGlobalTip("请" + localStorage.getItem("speakInterval") + "秒以后再发送")
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
                data.avatar = res.data.avatar;
                if (!(data.avatar)) {
                    $(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar").show();
                    $(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkCurAvater").hide();
                } else {
                    $(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkCurAvater").attr({ "src": `${data.cdn}${data.avatar.replace(/\\/g, "/")}` })
                    $(".weTalkPersonalInfoContent").children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar").hide();
                }
                // 渲染积分
                $(".weTalkPointVal").html(`
                    ${res.data.point}
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
            console.log("server", data.server)
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
            $(".weTalkFunCover").hide();
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
                    $(".weTalkFunCover").hide();
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
        $(".weTalkPublicChannelSecond").on("click", function () {
            var _websiteId = data.websiteId ? data.websiteId : data.webDesiteId;
            changeRoomRequest(_websiteId, true)
        });

        // 移入/移出公共频道
        $(".weTalkPublicChannelSecond").on("mouseenter", function () {
            $(this).css("background", "rgb(237, 231, 255)")
        })

        $(".weTalkPublicChannelSecond").on("mouseleave", function () {
            if ($(this).attr("data-ischoosed") == "a") {
                $(this).css("background", "#fff")
            } else {
                $(this).css("background", "rgb(229, 221, 255)")
            }
        })

        // 显示切换公共频道界面
        $(".weTalkPublicSwitchBtn").on("click", showSwitchCurRoom)

        // 切换公共频道事件
        $(".weTalkChatRoom").on("click", ".weTalkSwitchRoomViewBtn1", searchCurRoom)
        $(".weTalkChatRoom").on("click", ".weTalkSwitchRoomViewBtn2", switchRoomBy)
        $(".weTalkChatRoom").on("click", ".weTalkSwitchRoomViewClose", function () {
            $(".weTalkSwitchRoomView").remove();
            $(".weTalkFunCover").hide();
        })

        $(".weTalkChatRoom").on("click", ".weTalkSwitchRoomViewSearchResItem", function () {
            let other = $(this).siblings().children(".weTalkSwitchRoomViewSearchResRadio");
            other.css({ "background": "#fff", "border": "1px solid #944eea" });
            $(this).siblings().attr("data-choosed", "a");
            $(this).children(".weTalkSwitchRoomViewSearchResRadio").css({ "background": "#944eea" });
            $(this).attr("data-choosed", "b");
        })

        // 退出登录
        $("#weTalkExit").on("click", function () {
            if (data.haveSend == false) {
                if ($(this).attr("data-ischoosed") == "b" && $(this).attr("data-teamId")) {
                    data.socket.emit('SYSTEM', {
                        type: 2,
                        teamId: data.friendId
                    })
                    data.haveSend = true;
                    clearTimeout(data.sendTimer);
                } else {
                    data.socket.emit('SYSTEM', {
                        type: 1,
                        targetUserId: data.friendId
                    })
                    data.haveSend = true;
                    clearTimeout(data.sendTimer);
                }
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
            $(".weTalkOtherInfo").remove();
            $("#weTalkChatFrame").off("keydown");
            loadLoginView();
        })

        // 聊天框复制上传
        document.querySelector('.weTalkChatFrame').addEventListener("paste", function (event) {
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
                                        // let paste = clipboardData.getData("text/html");
                                        // paste = paste.replace(/<[^<>]+>/g, "");
                                        // var div = document.createElement("span");
                                        // div.innerHTML = paste;
                                        // selection.getRangeAt(0).insertNode(div);
                                        // 只获取文本
                                        let paste = clipboardData.getData("text");
                                        const selection = window.getSelection();
                                        if (!selection.rangeCount) return false;
                                        // 创建文本节点
                                        var text = document.createTextNode(paste);
                                        selection.getRangeAt(0).insertNode(text);
                                        let range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
                                        range.collapse(false);
                                    }
                                }
                            }
                        } else if (len == 3) {
                            let paste = clipboardData.getData("text/plain");
                            const selection = window.getSelection();
                            if (!selection.rangeCount) return false;
                            // var div = document.createElement("span");
                            // div.innerHTML = paste;
                            var text = document.createTextNode(paste);
                            selection.getRangeAt(0).insertNode(text);
                            let range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
                            range.collapse(false);
                        }
                        //阻止默认行为即不让剪贴板内容在div中显示出来
                        event.preventDefault();
                    }
                }
            }
        });

        document.querySelector('.shurukuang').addEventListener("paste",function(event){
            if (event.clipboardData || event.originalEvent) {
                var clipboardData = event.clipboardData || event.originalEvent.clipboardData;
                var items = clipboardData.items,
                len = items.length;
                if(len == 2){
                    let isText = false;
                    for (var i = 0; i < len; i++) {
                        if(items[i].type.indexOf("image") == -1 && !isText){
                                isText = true;
                                let paste = clipboardData.getData("text");
                                const selection = window.getSelection();
                                if (!selection.rangeCount) return false;
                                // 创建文本节点
                                var text = document.createTextNode(paste);
                                selection.getRangeAt(0).insertNode(text);
                                let range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
                                range.collapse(false);
                                break;
                        }
                }
                }else if(len == 3){
                    let paste = clipboardData.getData("text");
                    const selection = window.getSelection();
                    if (!selection.rangeCount) return false;
                    // 创建文本节点
                    var text = document.createTextNode(paste);
                    selection.getRangeAt(0).insertNode(text);
                    let range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
                    range.collapse(false);
                }
            }
            event.preventDefault();
        })

        // 拖拽上传图片
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


        // 站内信点击事件
        $(document).on("click", ".weTalkSystemNewsViewItem", function () {
            if ($(this).children(".weTalkSystemNewsViewItemTwo").css("display") == "none") {
                $(this).children(".weTalkSystemNewsViewItemTwo").show();
                if ($(this).attr("data-state") == 0) {
                    readInboxMessage($(this).attr("data-id"), data.token).then(res => {
                        if (res.code == 1) {
                            $(this).children(".weTalkSystemUnread").css({ "display": "none" })
                            data.unreadInboxMsg -= 1;
                            $(".weTalkSystemNewsNum").html(`${data.unreadInboxMsg}`)
                            if (data.unreadInboxMsg == 0) {
                                $(".weTalkSystemNewsNum").css({ "visibility": "hidden" })
                                $(".weTalkAvatarTip").hide();
                            }
                        }
                    })
                }
            } else {
                $(this).children(".weTalkSystemNewsViewItemTwo").hide();
            }
        })

        $(document).on("click", ".weTalkSystemNewsViewDel", function (e) {
            e.stopPropagation();
            deleteInboxMessage($(this).parent().parent().parent().attr("data-id"), data.token).then(res => {
                if (res.code == 1) {
                    showTip("删除成功")
                    loadSystemNews();
                }
            })
        })



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
        // console.log("vip", res.data.vip)
        localStorage.setItem("vip", res.data.vip);
        data.nickname = res.data.nickname;
        localStorage.setItem("nickname", data.nickname)
        data.unreadInboxMsg = res.data.unreadInboxMsg;
        data.avatar = res.data.avatar;
        data.ad = res.data.ad;
        data.lastLogin = res.data.lastLogin;
        data.announce = res.data.announcement;
        data.announceDate = res.data.announcementTime;
        data.cdn = localStorage.getItem("cdn");
        data.server = localStorage.getItem("server");


        localStorage.setItem("point", res.data.point)
        data.email = res.data.email;
        data.username = res.data.username;


        if (res.data.signature) {
            data.signature = res.data.signature;
        } else {
            data.signature = "";
        }

        localStorage.setItem("token", data.token);
        Gstar();



        // 判断是否为新用户
        if (data.lastLogin == null) {
            $(`
                <div class="weTalkBeginer">
                    <img class="beginerAward" src="./images/beginer_award.png">
                    <div class="beginerAwardDes">奖品碎片*1</div>
                    <img class="getBeginerAward" src="./images/beginGet.png">
                </div>
            `).appendTo($(".weTalkChatRoom"))
            $(".weTalkDarkCover").show();
        }

        // 新用户点击领取
        $(document).on("click", ".getBeginerAward", function () {
            $(".weTalkBeginer").hide();
            $(".weTalkDarkCover").hide();
        })

        // 公告
        // if (data.announce && data.announce != null) {
        //     $(".weTalkAnnounce").show();
        //     $(".weTalkFunCover").show();
        //     $(".weTalkAnnounceContent").html(data.announce);
        //     $(".weTalkAnnounceDate").html("发布日期：" + data.announceDate)
        // }
        // $(document).on("click", ".weTalkAnnounceBtn", function () {
        //     $(".weTalkAnnounce").hide();
        //     $(".weTalkFunCover").hide();
        // })

        // $(document).on("click", ".weTalkAnnounceCha", function () {
        //     $(".weTalkAnnounce").hide();
        //     $(".weTalkFunCover").hide();
        // })


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
        if (localStorage.getItem("vip") == "true") {
            // console.log("是vip")
            $(".weTalkNickVip").html(`${data.nickname}`);
            $(".weTalkNick").hide()
        } else {
            // console.log("不是vip")
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
            // 撤回类别
            data.recallType = 1;
            console.log("pubmsg", pubmsg)
            // 收到消息是否有铃声(当聊天音效开启且不是我自己发的且我正处于聊天室中时才会生效)
            if (window.localStorage.getItem('shareRoomHint') == 1 && pubmsg.senderId != data.id && data.websiteId != null) {
                data.audio.play();
            }

            // 聊天室未读消息条数
            if (data.isPublic != 1 && data.websiteId != null) {
                // 会话消息提醒
                sessionTip();
                data.chatPublicNum = data.chatPublicNum + 1
                $(".weTalkPublicChannnellNum").html(`${data.chatPublicNum}`).show();
            }
            // 如果在聊天室收到消息
            data.chatPublicLastRecord = pubmsg;

            // 在会话中加载聊天室的最后一条消息
            if (data.websiteId != null) {
                // 收到撤回消息时执行
                if (pubmsg.recall && pubmsg.recall == 1) {
                    for (let i = 0; i < data.chatPublicRecords.length - 1; i++) {
                        if (data.chatPublicRecords[i].id == pubmsg.id) {
                            pubmsg.senderNickname = data.chatPublicRecords[i].senderNickname;
                            // 判断撤回的是不是最新的消息，如果是，就去加载会话框的最新消息
                            if (i == 0) {
                                showDePublicLastRecord(pubmsg, false);
                                break;
                            } else {
                                // 如果不是就不管它
                                break;
                            }
                        }
                    }
                } else {
                    // 收到普通消息时执行
                    showDePublicLastRecord(pubmsg, false);
                }
            }

            // 聊天室未读消息条数
            for (let j = 0; j < data.weTalkPerList.length; j++) {
                if (data.weTalkPerList[j].isUsers == false) {
                    if (data.weTalkPerList[j].websiteId == data.websiteId && data.isPublic == 0) {
                        // console.log("未读消息加载")
                        data.weTalkPerList[j].UnReadNum += 1;
                        // 渲染会话列表
                        $(".weTalkChatItemList").children().each(function () {
                            if ($(this).attr("data-index") == j) {
                                $(this).children(".weTalkNewsRecords").html(`${data.weTalkPerList[j].UnReadNum}`).show();
                            }
                        });
                        break;
                    }
                }
            }

            // 撤回消息
            if (pubmsg.recall && pubmsg.recall == 1) {
                recallMsgCallback(pubmsg.id, false)
                return;
            }
            if (pubmsg.messageType == 1 || pubmsg.messageType == 2 || pubmsg.messageType == 3) {
                // if (pubmsg.messageType == 2) {
                //     pubmsg.img = pubmsg.content;
                // }
                pubmsg.avatarDefault = pubmsg.senderNickname.substring(0, 1)
                pubmsg.content = disposeText(pubmsg)
                if (/\[at\]/g.test(pubmsg.content)) {
                    pubmsg.at = true;
                }
                // 只处理其他人发出的@
                if (pubmsg.id != data.id) {
                    if (/\[at\]/g.test(pubmsg.content)) {
                        let atIcon;
                        // 处理[at][/at]为<a></a>
                        pubmsg.content = pubmsg.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                        // console.log("content", pubmsg.content)
                        // 判断别人@的人是不是你
                        atIcon = $(`<span>${pubmsg.content}</span>`);
                        atIcon.children("a").each(function () {
                            // 判断是否已经有人@你了，如果已经有人@你了，就不再重复记录
                            if (data.isAtDone) {
                                return;
                            }
                            let that = $(this);
                            // @的人是你
                            if ($(this).html().substring(1) == data.nickname) {
                                that.attr('id', "at")
                                // 你已经被@了，如果再次收到@将不再记录
                                data.isAtDone = true;
                                // 通过插件登录时href
                                if (data.loginByPulgin) {
                                    var href = "#at"
                                } else {
                                    // 通过网页登录时href
                                    var href = "https://www.wetalk.icu/chat/#at"
                                }
                                let atYou = $(`
                                                <a class="weTalkAtTip" href="${href}">
                                                    <img class="weTalkAtAvatar">
                                                    <div class="weTalkAtYouD">${pubmsg.avatarDefault}</div>
                                                    <div class="weTalkAtYou">有人@我</div>
                                                </a>
                                            `)

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
                                    // 点击以后可再次被@
                                    data.isAtDone = false;
                                    $(".weTalkPublicChannnellLastRecords").children(".weTalkAtWo").hide();
                                    data.atArr = [];
                                    setTimeout(function () {
                                        atYou.remove();
                                        $("#at").removeAttr("id");
                                    })
                                })
                                data.atArr.push(atYou)
                                if (data.isPublic == 1) {
                                    atYou.appendTo(".weTalkChatMain");
                                }
                            }
                        })
                        // console.log("atIcon",atIcon.html())
                        // pubmsg.content = atIcon[0];
                        pubmsg.content = atIcon.html();
                    }
                }
            }


            data.chatPublicRecords.unshift(pubmsg);

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
            // 撤回类别
            data.recallType = 0;
            if (window.localStorage.getItem('privateChatHint') == 1) {
                data.audio.play();
            }
            console.log("primsg", primsg)

            // 初始化参数
            primsg.addFriendType = 2;
            if (primsg.isPublic == undefined) {
                primsg.isPublic = 0;
            }
            if (primsg.recall == 1) {
                recallMsgCallback(primsg.id,false,primsg.senderId)
            }

            // 判断接收类型
            if (primsg.messageType == 1 || primsg.messageType == 2 || primsg.messageType == 3) {
                primsg.content = disposeText(primsg);
            }

            // 判断会话中是否已有该用户，如果已有
            let isHas = false;
            for (let j = 0; j < data.weTalkPerList.length; j++) {
                if (primsg.senderId == data.weTalkPerList[j].userId) {
                    let obj = JSON.parse(JSON.stringify(primsg));
                    obj.nickname = data.weTalkPerList[j].nickname;
                    data.weTalkPerList[j].records.unshift(obj);
                    // 如果有人发消息，把此人提到会话列表最前面
                    putSessionToFirst(j);
                    // 如果当前打开的聊天框不是与该用户的聊天框
                    if (primsg.senderId != data.friendId) {
                        // 会话消息提醒
                        sessionTip();
                        // console.log("不是与该用户的聊天框")
                        data.weTalkPerList[0].UnReadNum = parseInt(data.weTalkPerList[0].UnReadNum) + 1;
                        $(".weTalkChatItemList").children().each(function () {
                            if ($(this).attr("data-index") == 0) {
                                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").html(`${data.weTalkPerList[0].UnReadNum}`).show();
                                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                            }
                        })
                    } else {
                        // $(".weTalkChatItemList").children().each(function () {
                        //     if ($(this).attr("data-index") == 0) {
                        //         $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                        //         $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                        //     }
                        // })
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
                    isHas = true
                    break;
                }
            }

            // 判断会话中是否已有该用户，如果没有
            if (!isHas) {
                if (primsg.senderId != data.id) {
                    // 添加该用户
                    data.passiveChatContent = JSON.parse(JSON.stringify(primsg));
                    addUserMethod(primsg.senderId, 1, 1)
                }
            }


            $(".weTalkChatItemList").children().each(function () {
                if ($(this).attr("data-index") == 0) {
                    if (data.weTalkPerList[0].records && data.weTalkPerList[0].records.length > 0) {
                        let record = JSON.parse(JSON.stringify(data.weTalkPerList[0].records[0]))
                        loadSessionContent(record, 0, "收到消息");
                    }
                }
            });
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
            if (sysmsg.type == 6) {
                // 如果正在播放广播的时候收到了新的广播，先存到数组里去
                data.broadCastArr.push(sysmsg.content);
                // 如果没有播放广播，那么就从数组中拿出第一条播放
                if (!data.isBroading) {
                    broadCastMaq(data.broadCastArr[0]);
                }
            }
        })
        data.socket.on('TEAM', function (teammsg) {
            // 撤回类别
            data.recallType = 2;
            console.log("teammsg", teammsg)
            // 收到消息是否有铃声
            if (window.localStorage.getItem('shareRoomHint') == 1 && teammsg.senderId != data.id) {
                data.audio.play();
            }
            // 判断接收类型
            chuliRoomRecords(teammsg);

            // 收到撤回消息时执行
            if (teammsg.recall == 1) {
                    recallMsgCallback(teammsg.id, false,teammsg.targetId)
            }
            let teamId;
            // 数组
            for (let i = 0; i < data.weTalkPerList.length; i++) {
                if (data.weTalkPerList[i].isUsers == false) {
                    // 找到对应小组
                    if (data.weTalkPerList[i].teamId == teammsg.targetId) {
                        if (/\[at\]/g.test(teammsg.content)) {
                            teammsg.at = true;
                        }
                        // 只处理其他人发出的@
                        if (teammsg.senderId != data.id) {
                            if (/\[at\]/g.test(teammsg.content)) {
                                let atIcon;
                                // 处理[at][/at]为<a></a>
                                teammsg.content = teammsg.content.replace(/\[at\]/g, `<a>`).replace(/\[\/at\]/g, `</a>`);
                                // console.log("content", teammsg.content)
                                // 判断别人@的人是不是你
                                atIcon = $(`<span>${teammsg.content}</span>`);
                                atIcon.children("a").each(function () {
                                    // 判断是否已经有人@你了，如果已经有人@你了，就不再重复记录
                                    if (data.weTalkPerList[i].GisAtDone) {
                                        return;
                                    }
                                    teamId = data.weTalkPerList[i].teamId;
                                    let that = $(this);
                                    // @的人是你
                                    if ($(this).html().substring(1) == data.nickname) {
                                        that.attr('id', "at" + i)
                                        // 你已经被@了，如果再次收到@将不再记录
                                        data.weTalkPerList[i].GisAtDone = true;
                                        // 通过插件登录时href
                                        if (data.loginByPulgin) {
                                            var href = "#at" + i;
                                        } else {
                                            // 通过网页登录时href
                                            var href = "https://www.wetalk.icu/chat/#at" + i;
                                        }
                                        let atYou = $(`
                                                        <a class="weTalkAtTip" href="${href}">
                                                            <img class="weTalkAtAvatar">
                                                            <div class="weTalkAtYouD">${teammsg.nickname.substring(0, 1)}</div>
                                                            <div class="weTalkAtYou">有人@我</div>
                                                        </a>
                                                    `)
                                        let avatar;
                                        if (teammsg.avatar) {
                                            avatar = data.cdn + teammsg.avatar.replace(/\\/g, "/")
                                            atYou.children(".weTalkAtAvatar").attr("src", avatar).show();
                                            atYou.children(".weTalkAtYouD").hide();
                                        } else {
                                            atYou.children(".weTalkAtAvatar").hide().attr("");
                                            atYou.children(".weTalkAtYouD").show();
                                        }
                                        atYou.off("click").on("click", function () {
                                            for (let l = 0; l < data.weTalkPerList.length; l++) {
                                                if (data.weTalkPerList[l].teamId == teamId) {
                                                    // 点击以后可再次被@
                                                    data.weTalkPerList[l].GisAtDone = false;
                                                    data.weTalkPerList[l].GisAtArr = [];
                                                    break;
                                                }
                                            }
                                            $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                                                if ($(this).attr("data-teamId") == teamId) {
                                                    $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkAtWo").hide();
                                                }
                                            })
                                            // 这个异步必须得有
                                            setTimeout(function () {
                                                atYou.remove();
                                                $("#at" + i).removeAttr("id");
                                            })
                                        })
                                        data.weTalkPerList[i].GisAtArr.push(atYou)
                                        if (data.isPublic == 2 && $(".weTalkGroupHead").attr("data-id") == teammsg.targetId) {
                                            atYou.appendTo(".weTalkChatMain");
                                        }
                                    }
                                })
                                teammsg.content = atIcon.html();
                            }
                        }
                        data.weTalkPerList[i].records.unshift(teammsg);
                        // 将此小组提到会话列表最前面
                        putSessionToFirst(i);
                        // 在当前窗口
                        if (data.isPublic == 2 && data.friendId == teammsg.targetId) {
                            data.haveSend = false;
                            loadGroupRecordOne();
                            if (data.sendTimer != null) {
                                clearTimeout(data.sendTimer);
                            }
                            data.sendTimer = setTimeout(function () {
                                // console.log("已告知后端")
                                data.socket.emit('SYSTEM', {
                                    type: 2,
                                    teamId: data.friendId
                                })
                                data.haveSend = true;
                            }, 15000)
                        } else {
                            // 不在当前窗口
                            // 会话消息提醒
                            sessionTip();
                            data.weTalkPerList[0].UnReadNum = parseInt(data.weTalkPerList[0].UnReadNum) + 1;
                            $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                                if ($(this).attr("data-index") == 0) {
                                    $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").html(`${data.weTalkPerList[0].UnReadNum}`).show();
                                    $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                                }
                            })
                        }
                        break;
                    }
                }
            }

            // 不在当前窗口 只加载最后一条消息
            $(".weTalkChatItemList").children().each(function () {
                if ($(this).attr("data-index") == 0) {
                    if (data.weTalkPerList[0].records && data.weTalkPerList[0].records.length > 0) {
                        let record = JSON.parse(JSON.stringify(data.weTalkPerList[0].records[0]))
                        loadSessionContent(record, 0, "收到消息");
                        // dom 删除会话列表
                        $(".weTalkChatItemList").children(".weTalkGroupItem").eq(0).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").children("a").removeAttr("id")
                    }
                }
            });

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
              <textarea class="weTalkUserPerSignText" data-word="30" data-name="个人签名" placeholder="还没有设置个性签名哦"></textarea>
            </div>
          </div>
          <div class="weTalkBtn2 weTalkMemberBtn weTalkPointer">确定</div>
        </div>
          `)

        if ($(".weTalkPersonalInfoContent").length > 0) {
            $(".weTalkPersonalInfoContent").remove();
        }

        // 监听个签的字数
        $('.weTalkChatRoom').on('input propertychange', '.weTalkUserPerSignText', limitInputWords);

        // 取消个人签名回车
        $('.weTalkPersonalInfo').on('keydown', '.weTalkUserPerSignText', function (e) {
            // var ev = e || window.event; //兼容
            if (e.keyCode == 13) {
                e.preventDefault();
                return false;
            }
        })



        // 性别
        $(`<div class="weTalkPersonalInfoGender">
          <div class="weTalkPersonalInfoLow">${data.sex == 1 ? "男" : "女"}</div>
          </div>`).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserSex"))

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
            if ($(".weTalkUserPerSignText").val() == data.signature) {
                if (
                    $(".weTalkUpdateNick").css("display") == "none"
                    && $(".weTalkXgPswd").css("display") == "none"
                    && $(".weTalkBindMail").css("display") == "none") {
                    $(".weTalkPersonalInfo").hide();
                    $(".weTalkFunCover").hide();
                }
            } else {
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
          ${localStorage.getItem("point")}
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

        // vip（如果为vip）"
        if (localStorage.getItem("vip") == "true") {
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
        }).catch(error => {
            console.log("error", error)
            showGlobalTip("登录失败");
            localStorage.setItem("token", "");
            startChatRoom();
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
                    localStorage.setItem("token", "");
                    $(".weTalkSwitchFail").show();
                    $("#weTalkUserPswd").val("");
                    forbiddenBtn();
                    data.isLogining = false;
                    setTimeout(function () {
                        recoverBtn();
                        $(".weTalkSwitchFail").hide();
                    }, 3000)
                } else if (res.code == 10008) {
                    localStorage.setItem("token", "");
                    $(".weTalkFj").show();
                    forbiddenBtn();
                    data.isLogining = false;
                    setTimeout(function () {
                        $(".weTalkFj").hide();
                        recoverBtn();
                    }, 3000)
                } else if (res.code == 10010) {
                    localStorage.setItem("token", "");
                    $(".weTalkYlogin").show();
                    forbiddenBtn();
                    data.isLogining = false;
                    setTimeout(function () {
                        recoverBtn();
                        $(".weTalkYlogin").hide();
                    }, 3000)
                }
            }).catch(error => {
                forbiddenBtn();
                localStorage.setItem("token", "");
                data.isLogining = false;
                setTimeout(function () {
                    recoverBtn();
                }, 3000)
            })

        }

    }


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
                        if (localStorage.getItem("vip") == "true") {
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

    // 添加小组到会话
    function addGroupMethod(teamId) {
        // 判断是否需要重新加载
        if (data.friendId == teamId) {
            // console.log("不需要加载");
            return;
        }
        // 输入框为小组
        data.isPublic = 2;
        // 判断会话列表是否存在该小组
        let isHas = false;
        // 判断会话列表是否已经存在该小组,有就直接加载
        for (let i = 0; i < data.weTalkPerList.length; i++) {
            if (data.weTalkPerList[i].isUsers == false) {
                if (teamId == data.weTalkPerList[i].teamId) {
                    let team = data.weTalkPerList[i];
                    $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                        if ($(this).attr("data-teamId") == teamId) {
                            // console.log('team',team,teamId, team.external_id, i, team.notice, team.user_num, team.max_user_num, team.title, team.admin_id, $(this))
                            launchGroupChat(teamId, team.external_id, i, team.notice, team.user_num, team.max_user_num, team.title, team.admin_id, $(this));
                        }
                    })
                    isHas = true;
                    break;
                }
            }
        }
        // 如果会话列表里不存在该小组，就将该小组添加到会话列表
        if (!isHas) {
            addGroupToSession(teamId, data.token).then(res => {
                if (res.code == 1) {
                    let team = res.data;
                    team.isUsers = false;
                    team.records = [];
                    team.load = false;
                    team.GisAtDone = false;
                    team.GisAtArr = [];
                    team.addFriendType = 1;
                    // 统一数据
                    team.external_id = team.externalId;
                    team.user_num = team.userNum;
                    team.max_user_num = team.maxUserNum;
                    team.admin_id = team.adminId;
                    if (team.unread == null) {
                        team.unread = 0;
                    }
                    team.UnReadNum = team.unread;
                    // 数组
                    data.weTalkPerList.unshift(team);
                    // dom
                    showOneGroup(team, 0, false);
                    $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                        if ($(this).attr("data-teamId") == teamId) {
                            launchGroupChat(teamId, team.externalId, 0, team.notice, team.userNum, team.maxUserNum, team.title, team.adminId, $(this));
                        }
                    })
                }
            })
        }
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
            if (data.weTalkPerList[i].isUsers == true) {
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
                    launchPersonalChat(user, userId, userIndex, username, associateId, false);
                    isHas = true;
                    break;
                }
            }
        }
        // console.log("isHas", isHas)
        // 如果会话列表里不存在该用户，就将该用户添加到会话列表中
        if (!isHas) {
            // console.log("加入会话列表")
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
                    obj.Scurrent = 1;
                    // 是否主动添加
                    if (isPassive == 0) {
                        obj.UnReadNum = 0;
                    } else {
                        obj.UnReadNum = 1;
                        obj.ispassive = true;
                    }
                    data.weTalkPerList.unshift(obj);
                    showOnePer(obj, 0, false);
                    // $(".weTalkChatItemList").children(".weTalkChatItem").each(function () {
                    //     if ($(this).attr("data-id") == senderId) {
                    //         if(obj.ispassive == true){
                    //             launchPersonalChat($(this), senderId, 0, obj.nickname, $(this).attr("data-associateid"),true);
                    //         }else{
                    //             launchPersonalChat($(this), senderId, 0, obj.nickname, $(this).attr("data-associateid"),false);
                    //         }
                    //     }
                    // })
                    // loadSessionContent(data.passiveChatContent, 0, "收到消息");
                    obj = {};
                } else if (res.code == 10007) {
                    showTip("用户已将您拉黑")
                }
            })
        }
    };

    // 个人信息/聊天框删除好友
    function removeFriendFin(id, type) {
        // console.log("id", id)
        if (type == 2) {
            $("#friendBtn").css("pointer-events", "none")
        }
        let removeId, isHas = false, index = -1;
        for (let i = 0; i < data.weTalkFriendList.length; i++) {
            if (data.weTalkFriendList[i].friendUserId == id) {
                removeId = data.weTalkFriendList[i].id;
                // console.log("removeId", removeId)
                isHas = true;
                index = i;
                break;
            }
        }
        if (isHas) {
            removeFriend(removeId, data.token).then(res => {
                if (res.code == 1) {
                    if (type == 2) {
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
                                addFriendFin(data.friendId, 1);
                            })
                        }
                        setTimeout(function () {
                            $(".weTalkLhSuc").hide().html("");
                        }, 3000)
                        $("#friendBtn").css("pointer-events", "auto")
                    }
                    if (type == 1) {
                        showTip("删除成功");
                        $(".weTalkChatMainHeadEventP").html("添加好友").off("click").on("click", function () {
                            addFriendFin(data.friendId, 1);
                        });
                    }
                    data.weTalkFriendList.splice(index, 1);
                    isHas = false;
                    index = -1;
                }
            })
        } else {
            if (type == 2) {
                $(".weTalkLhSuc").html("该用户不在您好友列表中").show();
                setTimeout(function () {
                    $(".weTalkLhSuc").hide().html("");

                }, 3000)
                $("#friendBtn").css("pointer-events", "auto");
            } else if (type == 1) {
                showTip("该用户不在您好友列表中");
            }
        }

    }

    // 聊天框/个人信息/会话加好友
    function addFriendFin(id, type, that) {
        if (type == 2) {
            $("#friendBtn").css("pointer-events", "none");
        }
        addFriend(id, data.token).then(res => {
            if (res.code == 1) {
                // 从个人信息里加为好友
                if (type == 2 || type == 3) {
                    if (type == 2) {
                        $(".weTalkLhSuc").html("添加成功").show();
                        $(".weTalkOtherInfo").children("#friendBtn").html("解除好友")
                        setTimeout(function () {
                            $(".weTalkLhSuc").hide().html("");
                        }, 3000)
                        $("#friendBtn").css("pointer-events", "auto")
                    }
                    if (type == 3) {
                        that.hide();
                        showTip("添加成功")
                    }
                    // 聊天头部加为好友或者解除好友的状态
                    let associateId;
                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                        if (data.weTalkPerList[i].userId == data.friendId) {
                            associateId = data.weTalkPerList[i].id;
                            break;
                        }
                    }
                    if ($(".weTalkChatMainHeadP").attr("data-id") == associateId) {
                        $(".weTalkChatMainHeadEventP").html("解除好友").off("click").on("click", function () {
                            removeFriendFin(data.friendId, 1);
                        })
                    }
                } else if (type == 1) {
                    // 从聊天框头部加为好友
                    showTip("添加成功");
                    $(".weTalkChatMainHeadEventP").html("解除好友").off("click").on("click", function () {
                        removeFriendFin(data.friendId, 1);
                    });
                }
                let obj = JSON.parse(JSON.stringify(res.data));
                obj.friendUserId = obj.userId;
                data.weTalkFriendList.push(obj);
            } else if (res.code == 10007) {
                if (type == 2) {
                    $(".weTalkLhSuc").html("用户已将您拉黑").show();
                    setTimeout(function () {
                        $(".weTalkLhSuc").hide().html("");
                    }, 3000)
                    $("#friendBtn").css("pointer-events", "auto")
                } else if (type == 1 || type == 3) {
                    showTip("用户已将您拉黑")
                }
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

    function loadByFriendOne() {
        data.isPublic = 0;
        let item = data.weTalkPerList[data.friendIndex].records[0];
        let index = 0;
        loadSessionData(item, false);
        loadRecordFin(item, index, true);
    }

    function loadGroupRecordOne() {
        data.isPublic = 2;
        let item = data.weTalkPerList[data.friendIndex].records[0];
        let index = 0;
        loadRecordFin(item, index, true);
    }

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
                    loadRecordFin(item, index, false)
                })
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
        let item = data.chatPublicRecords[0];
        let index = 0;
        item.addFriendType = 2;
        item.nickname = item.senderNickname;
        // 渲染聊天框
        loadRecordFin(item, index, true)
    }
    // 加载单条聊天室记录(结束)

    // 获取@信息 聊天室
    function getAtInfo() {
        $(".weTalkAtTip").each(function () {
            $(this).remove();
        })
        // 判断是否已经有人@你了，如果已经有人@你了，就不再重复记录
        if (data.isAtDone) {
            // $(".weTalkAtTip").each(function () {
            //     $(this).remove();
            // })
            data.atArr.forEach(item => {
                item.appendTo(".weTalkChatMain");
                item.off("click").on("click", function () {
                    data.isAtDone = false;
                    $(".weTalkPublicChannnellLastRecords").children(".weTalkAtWo").hide();
                    data.atArr = [];
                    setTimeout(function () {
                        item.remove();
                        $("#at").removeAttr("id");
                    })
                })
            })
        }
    }

    // 获取@信息 小组
    function getAtInfoG() {
        $(".weTalkAtTip").each(function () {
            $(this).remove();
        })
        // 判断是否已经有人@你了，如果已经有人@你了，就不再重复记录
        if (data.weTalkPerList[data.friendIndex].GisAtDone) {

            $(".weTalkAtTip").each(function () {
                $(this).remove();
            })
            data.weTalkPerList[data.friendIndex].GisAtArr.forEach(item => {
                item.appendTo(".weTalkChatMain");
                item.off("click").on("click", function () {
                    data.weTalkPerList[data.friendIndex].GisAtDone = false;
                    $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                        if ($(this).attr("data-teamId") == data.friendId) {
                            $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkAtWo").hide();
                        }
                    })
                    data.weTalkPerList[data.friendIndex].GisAtArr = [];
                    setTimeout(function () {
                        item.remove();
                        $("#at").removeAttr("id");
                    })
                })
            })
        }
    }

    // 收到消息时，从会话列表将此会话提至最前面
    function putSessionToFirst(index) {
        // 数组
        let copy = JSON.parse(JSON.stringify(data.weTalkPerList[index]));
        copy.GisAtArr = data.weTalkPerList[index].GisAtArr;
        data.weTalkPerList.splice(index, 1);
        data.weTalkPerList.unshift(copy);
        // console.log("arr 4095行 提到最前面",data.weTalkPerList[0].GisAtArr)
        // dom
        let copyEle = $(".weTalkChatItemList").children().eq(index).clone();
        $(".weTalkChatItemList").children().eq(index).remove();
        $(".weTalkChatItemList").prepend(copyEle);
        let k = 0;
        $(".weTalkChatItemList").children().each(function () {
            $(this).attr("data-index", k);
            k++;
        })
        data.friendIndex = 0;
    }

    // 加载私聊/小组聊天记录 isUser = true代表私聊记录，否则代表小组聊天记录
    function loadByFriend(id, index, isUser) {
        // 第一次加载调接口
        if (!(data.weTalkPerList[index].load)) {
            $(".weTalkChatMain").html(`
          <div class="weTalkLoadRecord">
            <img class="weTalkLoadAni" src="./images/loading.png"/>
            <div class="weTalkLoadingTip">内容加载中，请稍等...</div>
          </div>
          `);
            $(".weTalkLoadRecord").css({ "visibility": "visible" })
            data.isLoadRecords = true;
            if (isUser == true) {
                // 调接口拿私聊聊天记录
                data.Scurrent = data.weTalkPerList[index].Scurrent;
                getPrivateLogRequest(id, index, true);
            } else {
                // 调接口拿小组聊天记录
                data.Gcurrent = data.weTalkPerList[index].Gcurrent;
                getGroupRecordsRequest(data.friendId, index, true);
            }
            data.weTalkPerList[index].load = true;
        } else {
            // 之后读取本地
            if (data.weTalkPerList[index].records) {
                $(".weTalkChatMain").html("");
                if (data.weTalkPerList[index].records.length > 0) {
                    data.weTalkPerList[index].records.forEach((item, dex) => {
                        if (isUser == true) {
                            // 处理私聊会话数据
                            loadSessionData(item, false);
                        }
                        // 根据会话数据渲染
                        loadRecordFin(item, dex, false)
                    })
                    if (isUser == false) {
                        // 加载@信息
                        getAtInfoG();
                    }
                }
            }
        }
    }
    // 点击某用户时加载与该用户聊天记录（结束）

    // 拉黑
    function blockUserRequest() {
        blockUser(data.friendId, data.token).then(res => {
            if (res.code == 1) {
                // 数组
                for (let i = 0; i < data.weTalkPerList.length; i++) {
                    if (data.weTalkPerList[i] == data.friendId) {
                        data.weTalkPerList.splice(i, 1);
                        break;
                    }
                }
                // dom
                $(".weTalkChatItemList").children(".weTalkChatItem").each(function () {
                    if ($(this).attr("data-id") == data.friendId) {
                        $(this).remove();
                    }
                })
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
        $(".weTalkRemoveDiagbtn1").off("click").on("click", function () {
            $(".weTalkRemoveDiag").hide()
        });
        $(".weTalkRemoveDiagbtn2").off("click").on("click", function () {
            removeUserRequest(data.RemoveFood, data.token);
        });
        event.stopPropagation();
    }

    // 右键打开移除对话框

    // 私聊
    function yjopenRemoveDiag(obj, isUser) {
        $(".weTalkRemoveDiag").show()
        if (isUser == true) {
            data.RemoveFood = obj.attr("data-associateId");
        } else {
            data.RemoveFood = obj.attr("data-id");
        }
        data.removeIndex = obj.attr("data-index");
        $(".weTalkRemoveDiagbtn1").off("click").on("click", function () {
            $(".weTalkRemoveDiag").hide()
        });
        $(".weTalkRemoveDiagbtn2").off("click").on("click", function () {
            if (isUser == true) {
                removeUserRequest(data.RemoveFood, data.token, true);
            } else {
                removeUserRequest(data.RemoveFood, data.token, false);
            }
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
        console.log("file", currentfile)
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

    function checkFin(imgBase64) {
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
        // uploadFile(2, data.upFile);
        aliUpload(2);
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
        } else if (picNatH >= picNatW) {
            // console.log("高大于宽")
            if (picNatW > max || picNatH > max) {
                squareH = max;
                squareW = picNatW / picNatH * squareH;
            }
            else {
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
        launchPersonalChat(user, userId, userIndex, username, associateId, false);
    }

    // 移入/移出小组
    function showRemoveGroup() {
        if ($(this).attr("data-ischoosed") == "a") {
            $(this).css({ "background": "#EDE7FF" })
            $(this).children('.weTalkNewsRecords').hide();
        }
        $(this).siblings().each(function () {
            if ($(this).attr("data-ischoosed") == "a") {
                $(this).css({ background: "#fff" });
            }
        })
    }

    function hideRemoveGroup() {
        if ($(this).attr("data-ischoosed") == "a") {
            $(this).css({ "background": "#fff" })
            if (data.weTalkPerList[$(this).attr("data-index")].UnReadNum != 0) {
                $(this).children('.weTalkNewsRecords').show();
            }
        }
    }

    // 点击小组
    function showChoosedGroup() {
        data.isPublic = 2;
        let teamId = $(this).attr("data-teamId");
        let externalId = $(this).attr("data-externalId");
        let index = $(this).attr("data-index");
        let notice = $(this).attr("data-notice");
        let userNum = $(this).attr("data-userNum");
        let maxUserNum = $(this).attr("data-maxUserNum");
        let title = $(this).attr("data-title")
        let adminId = $(this).attr("data-adminId");
        // 判断是否需要重新加载，如果id相等就不需要再次加载
        if (data.friendId == teamId) {
            console.log("不需要加载");
            return;
        }
        launchGroupChat(teamId, externalId, index, notice, userNum, maxUserNum, title, adminId, $(this));
    }

    // 默认选中状态
    function setSessionItem(obj, isUser) {
        $(".weTalkPublicChannelSecond").attr("data-ischoosed", "a")
        $(".weTalkPublicChannelSecond").css("background", "#fff")
        obj.attr("data-ischoosed", "b");
        obj.css({ background: "#e5ddff" });
        // $(this).children('.weTalkRemoveUser2').hide();
        obj.children(".weTafkChatItemOne").children('.weTalkRemoveUser1').hide();
        obj.children(".weTalkYjOptions").hide();

        obj.siblings().attr("data-ischoosed", "a");
        obj.siblings().children(".weTalkYjOptions").hide();
        obj.siblings().css({ background: "#fff" });
        // $(this).siblings().children('.weTalkRemoveUser2').hide();
        obj.siblings().children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();
        // console.log("item",data.weTalkPerList[data.friendIndex])
        if (data.weTalkPerList[data.friendIndex].UnReadNum > 0) {
            // console.log("查看新消息时，告知后端已读")
            obj.children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
            obj.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
            // obj.children(".weTalkNewsRecords").html("");
            data.weTalkPerList[data.friendIndex].UnReadNum = 0;
            // 告诉客户端已读
            let targetUserId;
            if (isUser == true) {
                targetUserId = data.friendId;
                console.log("userId", targetUserId)
                data.socket.emit('SYSTEM', {
                    type: 1,
                    targetUserId: targetUserId
                })
            } else {
                data.socket.emit('SYSTEM', {
                    type: 2,
                    teamId: data.friendId
                })
            }

        }
    }

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
                // 私聊
                let others = res.data.others;
                others.forEach(item => {
                    // 用户
                    if(item.listType == 1){
                        item.isUsers = true;
                        item.userId = item.targetUserId;
                        item.Scurrent = 1;
                        if (!(item.sex)) {
                            item.sex == 0;
                        }
                        if (item.nickname) {
                            item.avatarDefault = item.nickname.substring(0, 1);
                        } else {
                            item.avatarDefault = "W";
                        }
                    }else if(item.listType == 2){
                        // 小组
                        item.isUsers = false;
                        item.Gcurrent = 1;
                        item.GisAtDone = false;
                        item.GisAtArr = [];
                    }
                    // 公共部分
                    item.records = [];
                    item.load = false;
                    item.addFriendType = 1;
                    if (item.unread == null) {
                        item.unread = 0;
                    }
                    item.UnReadNum = item.unread;
                })
                data.weTalkPerList = others;
                // 重新渲染私聊列表
                showPersonalList();
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
                        item.avatarDefault = "W";
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
        $(".weTalkChatItemList").html("");
        for (let j = 0; j < data.weTalkPerList.length; j++) {
            // 渲染私人用户
            if (data.weTalkPerList[j].isUsers == true) {
                showOnePer(data.weTalkPerList[j], j, true);
            } else {
                // 渲染小组
                showOneGroup(data.weTalkPerList[j], j, true)
            }
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
                    systemItem.attr("data-id", item.id)
                    systemItem.attr("data-state", item.state)
                    if (item.state == 0) {
                        systemItem.children(".weTalkSystemUnread").css({ "display": "block" })
                    }
                    // 点击加载站内信内容
                    if (item.content != "") {
                        systemItem.children(".weTalkSystemNewsViewItemTwo").html(`${item.content}`)
                        // systemItem.off("click").on("click", function () {
                        //     if (systemItem.children(".weTalkSystemNewsViewItemTwo").css("display") == "none") {
                        //         systemItem.children(".weTalkSystemNewsViewItemTwo").show();
                        //         if (item.state == 0) {
                        //             readInboxMessage(item.id, data.token).then(res => {
                        //                 if (res.code == 1) {
                        //                     systemItem.children(".weTalkSystemUnread").css({ "display": "none" })
                        //                     data.unreadInboxMsg -= 1;
                        //                     $(".weTalkSystemNewsNum").html(`${data.unreadInboxMsg}`)
                        //                     if (data.unreadInboxMsg == 0) {
                        //                         $(".weTalkSystemNewsNum").css({ "visibility": "hidden" })
                        //                         $(".weTalkAvatarTip").hide();
                        //                     }
                        //                 }
                        //             })
                        //         }
                        //     } else {
                        //         systemItem.children(".weTalkSystemNewsViewItemTwo").hide();
                        //     }
                        // })

                        if (!(/^【/.test(item.content))) {
                            systemItem.children(".weTalkSystemNewsViewItemTwo").css({ "margin-left": "5px" })
                        }
                    }
                    delIcon = systemItem.children(".weTalkSystemNewsViewItemOne").children(".weTalkSystemNewsViewOpe").children(".weTalkSystemNewsViewDel");
                    delIcon.children("img").attr({ "src": "./images/del.png" })
                    // delIcon.off("click").on("click", function () {
                    //     deleteInboxMessage(data.systemNews[index].id, data.token).then(res => {
                    //         if (res.code == 1) {
                    //             loadSystemNews();
                    //         }
                    //     })
                    // })
                    systemItem.appendTo(".weTalkSystemNewsViewContent")
                })
            }
        });

    };

    // 点击聊天室列表用户触发事件
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

    // 点击小组列表用户触发事件
    function showGroupUserInfo() {
        let id = $(this).attr("data-id");
        showOtherInfo(id);
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

    // 游戏事件
    function sendGame() {
        // 只有尊贵的vip才可以使用这样伟大的功能
        if (localStorage.getItem("vip") == "true") {
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
                    specialMessage(data.gameType, data.roomId, 2, data.token).then(res => {
                        if (res.code == 1) {
                            setSpeakInterVal();
                        }
                    })
                } else if (data.isPublic == 0) {
                    specialMessage(data.gameType, data.friendId, 1, data.token).then(res => {
                        if (res.code == 1) {
                            setSpeakInterVal();
                            data.slYxMsg = res.data;
                            data.slYxMsg.recall = 0;
                            data.slYxMsg.sendTime = new Date().getTime();
                            data.weTalkPerList[data.friendIndex].records.unshift(data.slYxMsg)
                            for (let j = 0; j < data.weTalkPerList.length; j++) {
                                if (data.friendId == data.weTalkPerList[j].userId) {
                                    // 加载最后一条聊天记录
                                    loadSessionContent(data.slYxMsg, j, "游戏")
                                    break;
                                }
                            }
                            loadByFriendOne();
                        }
                    })
                } else if (data.isPublic == 2) {
                    specialMessage(data.gameType, data.friendId, 3, data.token).then(res => {
                        if (res.code == 1) {
                            setSpeakInterVal();
                        }
                    })
                }
            } else {
                showTip("请" + localStorage.getItem("speakInterval") + "秒以后再发送")
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
                // 语音
                case 3:
                    return `<audio class="weTalkAudioItem" src="${data.cdn}${msg.content.replace(/\\/g, "/")}" style="display:none"></audio>`
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
                            if (localStorage.getItem("vip") == "true") {
                                vip = 1
                            } else {
                                vip = 0;
                            }
                            if (data.isPublic == 0) {
                                data.socket.emit('PRIVATE',
                                    {
                                        targetId: data.friendId,
                                        senderId: data.id,
                                        messageType: 1,
                                        content: weTalkMsg
                                    },
                                    function (response) {
                                        // 处理自己发的私聊消息
                                        if (response.state == 1) {
                                            let obj = {
                                                targetId: data.friendId,
                                                senderId: data.id,
                                                messageType: 1,
                                                content: weTalkMsg,
                                                id: response.messageId,
                                                recall: 0,
                                            };
                                            for (let j = 0; j < data.weTalkPerList.length; j++) {
                                                if (obj.targetId == data.weTalkPerList[j].userId) {
                                                    data.weTalkPerList[j].records.unshift(obj);
                                                    let record = JSON.parse(JSON.stringify(obj));
                                                    loadSessionContent(record, j, "私聊")
                                                    break;
                                                }
                                            }
                                            // 渲染聊天框
                                            obj.content = disposeText(obj);
                                            loadByFriendOne();
                                        }
                                        sendMsgCallBack(response);
                                    });
                            } else if (data.isPublic == 1) {
                                let avatar;
                                if (data.avatar == null || data.avatar == undefined) {
                                    avatar = "";
                                } else {
                                    avatar = data.avatar;
                                }
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
                                        sendMsgCallBack(response);
                                    });
                            } else if (data.isPublic == 2) {
                                let avatar;
                                if (data.avatar == null || data.avatar == undefined) {
                                    avatar = "";
                                } else {
                                    avatar = data.avatar;
                                }
                                // console.log("teamId", data.friendId)
                                data.socket.emit('TEAM', {
                                    targetId: data.friendId,
                                    senderId: data.id,
                                    messageType: 1,
                                    content: weTalkMsg,
                                    senderNickname: data.nickname,
                                    avatar: avatar,
                                    sex: data.sex,
                                    vip: vip
                                }, function (response) {
                                    // console.log("response", response)
                                    sendMsgCallBack(response);
                                });
                            }
                        }
                        $(".weTalkChatFrame").html('');
                        setSpeakInterVal();
                        ev.preventDefault();
                        return false;
                    }
                    showTip("请" + localStorage.getItem("speakInterval") + "秒以后再发送")
                    ev.preventDefault();
                    return false;
                }
            }
        });
        $("#weTalkChatFrame").off("keyup").on("keyup",function(e){
            // console.log($(this).html().length);
            if($(this).html().length > 251){
                $(this).html($(this).html().trim().substr(0, 250));
                $(this).blur();
                showTip("输入文字个数不能超过250");
            }
        })
    };

    // 获取私聊聊天记录 myindex 索引 isdefault == true 加载第一页
    function getPrivateLogRequest(targetId, myindex, isDefault) {
        getPrivateLog(targetId, data.Scurrent, data.token).then(res => {
            data.Spages = res.data.pages;
            data.Ssize = res.data.size;
            data.weTalkPerList[myindex].pages = res.data.pages;
            let records = res.data.records;

            // 加载第一页的聊天记录
            if (isDefault == true) {
                data.weTalkPerList[myindex].records = records;
                
                // 处理数据+渲染
                data.weTalkPerList[myindex].records.forEach((item, index) => {
                    loadSessionData(item, true)
                    loadRecordFin(item, index, false)
                })
                // 加载最后一条聊天记录
                if (data.weTalkPerList[myindex].records && data.weTalkPerList[myindex].records.length > 0) {
                    let record = JSON.parse(JSON.stringify(data.weTalkPerList[myindex].records[0]));
                    loadSessionContent(record, myindex, "调接口");
                }
            } else {
                // 加载更多页数的聊天信息
                data.weTalkPerList[myindex].records = data.weTalkPerList[myindex].records.concat(records)
                loadRoomMsgMore(records, 0);
            }
            $('.weTalkChatMain').children(".weTalkLoadRecord").css({ "visibility": "hidden" })
            data.isLoadRecords = false;
            $('.weTalkChatMain').children(".weTalkLoadRecord").remove();
        })

    }


    // 在会话列表渲染默认聊天室最后一条聊天记录 isload == true指的是指加载聊天记录
    function showDePublicLastRecord(obj, isLoad) {
        // console.log("obj", obj);
        if (obj) {
            let record = JSON.parse(JSON.stringify(obj)),
                content,
                messageType = record.messageType,
                splitBr;
            // 是否撤回了消息
            if (record.recall == 1) {
                if (record.recallTime) {
                    curHour = record.recallTime.substring(11, 13)
                    curMin = record.recallTime.substring(14, 16)
                }
                if (record.sendTime) {
                    curHour = record.sendTime.substring(11, 13)
                    curMin = record.sendTime.substring(14, 16)
                }
                $(".weTalkPublicChannnellUser").html("")
                if (record.senderId == data.id) {
                    content = "你撤回了一条消息"
                } else {
                    content = record.senderNickname + "撤回了一条消息"
                }
            } else {
                if (record.sendTime) {
                    curHour = record.sendTime.substring(11, 13)
                    curMin = record.sendTime.substring(14, 16)
                } else {
                    curHour = "未知"
                    curMin = "未知"
                }
                $(".weTalkPublicChannnellUser").html(record.senderNickname + ":")
                // 判断内容的类型
                if (messageType == 1) {
                    if (record.content) {
                        content = disposeText(record);
                        content = content.replace(/\[at\]/, `<a>`).replace(/\[\/at\]/, `</a>`);
                    }
                    if (isLoad == false) {
                        $(`<span>${content}</span>`).children("a").each(function () {
                            if ($(this).html().substring(1) == data.nickname) {
                                $(".weTalkPublicChannnellLastRecords").children(".weTalkAtWo").show();
                            } else {
                                $(".weTalkPublicChannnellLastRecords").children(".weTalkAtWo").hide();
                            }
                        })
                    }
                } else if (messageType == 2) {
                    content = "[图片]"
                } else if (messageType == 3) {
                    content = "[语音]"
                }
                else if (messageType == 4) {
                    content = "[骰子]"
                } else if (messageType == 6) {
                    content = "[硬币]"
                } else if (messageType == 5) {
                    content = "[石头剪子布]"
                }
                // 当前内容
                // 截取第一个<br>之前的内容
                if (content) {
                    splitBr = content.indexOf("<br>");
                    if (splitBr != -1) {
                        content = content.substring(0, splitBr);
                    }
                }
            }
            $(".weTalkPublicChannnellTime").html(curHour + ":" + curMin)
            $(".weTalkPublicChannnellRecord").html(`${content}`)
        } else {
            $(".weTalkPublicChannnellTime").html("")
            $(".weTalkPublicChannnellUser").html("")
            $(".weTalkPublicChannnellRecord").html("")
        }
    }

    // 获取聊天室聊天记录
    function getPublicLogRequset(roomId, token, isDefault) {
        getPublicLog(roomId, data.Pcurrent, token).then(res => {
            if (res.code == 1) {
                data.Ppages = res.data.pages;
                data.Psize = res.data.size;
                if (isDefault) {
                    // 如果是第一次加载该聊天室，加载的为最近的消息
                    data.chatPublicRecords = res.data.records;
                    // 获取最后一条聊天记录
                    data.chatPublicLastRecord = data.chatPublicRecords[0];
                    showDePublicLastRecord(data.chatPublicLastRecord, true);
                    if (data.chatPublicRecords) {
                        $(".weTalkChatMain").html("");
                        data.chatPublicRecords.forEach((item, index) => {
                            chuliRoomRecords(item);
                            loadRecordFin(item, index, false)
                        })
                    }
                } else {
                    data.chatPublicRecords = data.chatPublicRecords.concat(res.data.records)
                    // 继续加载更多的消息
                    loadRoomMsgMore(res.data.records, 1);
                }
                $(".weTalkLoadRecord").css({ "visibility": "hidden" })
                data.isLoadRecords = false;
                $(".weTalkLoadRecord").remove();
            } else {
                showTip("加载聊天室记录错误" + "错误码" + res.code)
            }
        })
    }

    // 从私聊列表移除
    function removeUserRequest(associateId, token, isUser) {
        removeUser(associateId, token).then(res => {
            if (res.code == 1) {
                if (data.haveSend == false) {
                    // console.log("在切换用户时已经告知后端了")
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
                if (isUser == true) {
                    if ($(".weTalkChatMainHeadP").attr("data-id") == associateId) {
                        $(".weTalkChatMain").html("");
                        $(".weTalkRightItem").hide();
                        $(".weTalkInitial").show();
                        $(".weTalkChatMainHeadP").attr("data-id", "")
                    }
                } else {
                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                        if (associateId == data.weTalkPerList[i].id) {
                            if (data.weTalkPerList[i].teamId == $(".weTalkGroupHead").attr("data-id")) {
                                $(".weTalkChatMain").html("");
                                $(".weTalkRightItem").hide();
                                $(".weTalkInitial").show();
                                $(".weTalkGroupHead").attr("data-id", "")
                            }
                            break;
                        }
                    }
                }

                data.weTalkPerList.splice(data.removeIndex, 1)
                // 判断添加到会话列表的依据之一
                data.friendId = "";
                data.friendIndex = "";
                // 重新渲染私聊列表,能不重新渲染就别重新渲染
                if (isUser == true) {
                    $(".weTalkChatItemList").children(".weTalkChatItem").each(function () {
                        let id = $(this).attr("data-associateId") ? $(this).attr("data-associateId") : "";
                        if (id && id == associateId) {
                            $(this).remove();
                        }
                    })
                } else {
                    $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                        let id = $(this).attr("data-id") ? $(this).attr("data-id") : "";
                        if (id && id == associateId) {
                            $(this).remove();
                        }
                    })
                }
                // 会话列表index重新加载
                reloadIndex();
                $(".weTalkRemoveDiag").hide()
                showTip("移除成功")
            } else {
                showTip("移除失败，" + res.code + "，" + res.message)
            }
        })
    }


    // 购买会员
    function buyVipPaymentRequest() {
        if (data.memberId) {
            if (localStorage.getItem("point") - data.membercPrice > 0) {
                // console.log("可以购买")
                buyVipPayment(data.memberId, data.token).then(res => {
                    if (res.code == 1) {
                        showTip("购买成功")
                        $(".weTalkStartMember").hide();
                        info(data.token).then(res => {
                            if (res.code == 1) {
                                // 积分余额
                                let point = localStorage.getItem("point") - data.membercPrice;
                                localStorage.setItem("point", point)
                                $(".weTalkPointVal").html(`
                                    ${point}
                                `)
                                localStorage.setItem("vip", res.data.vip)
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
                                localStorage.setItem("point", res1.data)
                                $(".weTalkPointVal").html(`
                                            ${localStorage.getItem("point")}
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

    // 注册
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


    // 显示切换公共频道界面
    function showSwitchCurRoom() {
        $(".weTalkSwitchRoomView").remove();
        $(".weTalkFunCover").show();
        let weTalkSwitchRoomView = $(`
                <!-- 切换聊天室界面 -->
                <div class="weTalkSwitchRoomView">
                    <img class="weTalkSwitchRoomViewClose weTalkPointer" src="./images/closePersonalInfo.png"/>
                    <div class="weTalkSwitchRoomViewTitle">切换聊天室</div>
                    <div class="weTalkSwitchRoomViewSearch">
                        <input type="text" / class="weTalkSwitchRoomViewSearchInput" placeholder="请输入聊天室名称">
                        <div class="weTalkBtn2 weTalkBtnqd weTalkSwitchRoomViewBtn1">查找</div>
                    </div>
                    <div class="weTalkSwitchRoomViewSearchRes"></div>
                    <div class="weTalkBtn2 weTalkBtnqd weTalkSwitchRoomViewBtn2">切换</div>
                </div>
            `)
        // 渲染当前收藏的聊天室
        favorite(data.token).then(res => {
            if (res.code == 1) {
                weTalkSwitchRoomView.appendTo(".weTalkChatRoom");
                let list = res.data;
                showRoomSearchRes(list);
                // 回车调用查找
                $('.weTalkSwitchRoomView').off("keydown").on("keydown",function(e){
                    var ev = e || window.event; //兼容
                    if(ev.keyCode == 13){
                        searchCurRoom();
                    }
                });
            }
        })

    }

    // 渲染聊天室查找结果
    function showRoomSearchRes(list) {
        list.forEach(item => {
            let obj = $(`
                    <div class="weTalkSwitchRoomViewSearchResItem">
                        <div class="weTalkSwitchRoomViewSearchResItemLeft">
                            <img class="weTalkSwitchRoomViewSearchResImg" src="./images/title.png"/>
                            <div class="weTalkSwitchRoomViewSearchResTitle">${item.title}</div>
                        </div>
                        <div class="weTalkSwitchRoomViewSearchResRadio"></div>
                    </div>
                `)
            // 自定义属性
            obj.attr("data-websiteId", item.websiteId ? item.websiteId : item.id);
            obj.attr("data-title", item.title);
            obj.attr("data-choosed", "a");
            obj.appendTo(".weTalkSwitchRoomViewSearchRes");
        })
    }

    // 查找聊天室
    function searchCurRoom() {
        let val = $(".weTalkSwitchRoomViewSearchInput").val();
        if (val) {
            search(1, 10000, val, data.token).then(res => {
                if (res.code == 1) {
                    $(".weTalkSwitchRoomViewSearchRes").html("");
                    let list = res.data.records;
                    if (list && list.length > 0) {
                        showRoomSearchRes(list);
                    } else {
                        // 搜索结果为空时
                        $(".weTalkSwitchRoomViewSearchResEmpty").remove();
                        $(`
                            <div class="weTalkSwitchRoomViewSearchResEmpty">
                                <img src="./images/ssempty.png"/>
                                <div class="weTalkSwitchRoomViewSearchResEmptyTitle">没有搜索到内容哦</div>
                            </div>
                        `).appendTo(".weTalkSwitchRoomViewSearchRes");
                    }
                } else {
                    showTkTip($(".weTalkSwitchRoomView"), "查找失败" + res.code + res.message);
                }
            })
        } else {
            showTkTip($(".weTalkSwitchRoomView"), "请输入搜索的内容");
        }
    }

    // 切换聊天室
    function switchRoomBy() {
        let webId, webTitle;
        $(".weTalkSwitchRoomViewSearchRes").children().each(function () {
            if ($(this).attr("data-choosed") == "b") {
                webId = $(this).attr("data-websiteId");
                webTitle = $(this).attr("data-title");
            }
        })
        changeRoomRequest(webId, webTitle);
    }

    // 切换聊天室
    function changeRoomRequest(websiteId, title) {
        data.isPublic = 1;
        data.Pcurrent = 1;
        // 初始化
        $(".weTalkPublicChannnellNum").hide();
        data.chatPublicNum = 0;
        $(".weTalkPublicChannelSecond").css("background", "rgb(229, 221, 255)")
        $(".weTalkPublicChannelSecond").attr("data-ischoosed", "b")

        $(".weTalkChatItem").css({ background: "#fff" });
        $(".weTalkGroupItem").css({ background: "#fff" });
        // $(".weTalkChatItem").children('.weTalkRemoveUser2').hide();
        $(".weTalkChatItem").children('.weTalkRemoveUser1').hide();
        $(".weTalkChatItem").attr("data-ischoosed", "a")
        $(".weTalkGroupItem").attr("data-ischoosed", "a")
        // 需要打开的聊天窗口不是当前窗口
        if (websiteId != data.friendId) {
            var _websiteId = data.websiteId ? data.websiteId : data.webDesiteId;
            // 需要打开的聊天室不是当前聊天室(切换房间)
            if (_websiteId != websiteId) {
                $('.weTalkFunCover').show();
                $(".weTalkSwitchChatRoomTip").show().attr("data-websiteId", websiteId)
                    .children(".weTalkTitle").html("当前在" + $(".weTalkPublicChannnellTitle").html() + "是否切换到" + title + "聊天室");
                // console.log("切换房间")
            } else {
                loadChatRoomInitial();
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
                <div class="weTalkRegBtns weTalkPointer weTalkBtn2" id="weTalkLogLBtn">登录</div>
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
                <div class="weTalkRegBtns weTalkPointer weTalkBtn2" id="weTalkRegBtn">提交注册</div>
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
                if (!(/^[A-Za-z0-9]+$/.test(data.weTalkAccountPswd)) && data.weTalkAccountPswd.length > 5 && data.weTalkAccountPswd < 21) {
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
        if ($(".weTalkCommonTip").css("display") == "none") {
            $(".weTalkCommonTip").html(`${val}`).show();
            setTimeout(function () {
                $(".weTalkCommonTip").hide().html("");
            }, 3000)
        } else {
            $(".weTalkCommonTip").html(`${val}`)
        }
    }

    // 转发事件
    function transmitEve() {
        // 默认添加会话
        zfSwitchSession();
        // 切换会话
        $(".weTalkZfSwitchSession").off("click").on("click", zfSwitchSession);
        // 切换好友
        $(".weTalkZfSwitchFriend").off("click").on("click", zfSwitchFriend)
        // 切换小组
        $(".weTalkZfSwitchGroup").off("click").on("click", zfSwitchGroup)
        $(".weTalkTransmit").show();
    }

    // 转发切换会话
    function zfSwitchSession() {
        // console.log("默认添加会话")
        $(".weTalkZfSwitchSession").css("color", "#944EEA");
        $(".weTalkZfSwitchFriend").css("color", "#333");
        $(".weTalkZfSwitchGroup").css("color", "#333");
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
        $(".weTalkZfSwitchGroup").css("color", "#333");
        // 获取转发人列表
        $(".weTalkTransmitList").html("");
        getFriends(data.token).then(res => {
            if (res.data == [] || res.data.length == 0) {
                $(".weTalkTransmitList").html(`
                    <div class="weTalkTransmitListEmpty">
                        <img class="" src="./images/ssempty.png" />
                        <div>您还没有添加好友</div>
                    </div>
                `);
            } else {
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
            }
        })
    }

    // 转发切换小组
    function zfSwitchGroup() {
        $(".weTalkZfSwitchFriend").css("color", "#333");
        $(".weTalkZfSwitchSession").css("color", "#333");
        $(".weTalkZfSwitchGroup").css("color", "#944EEA");
        // 获取转发人列表
        $(".weTalkTransmitList").html("");
        // 调接口拿数据
        listMyTeam(data.token).then(res => {
            if (res.code == 1) {
                let list = res.data.adminTeam.concat(res.data.commonTeam);
                if (list == [] || list.length == 0) {
                    $(".weTalkTransmitList").html(`
                        <div class="weTalkTransmitListEmpty">
                            <img class="" src="./images/ssempty.png" />
                            <div>您还没有添加小组</div>
                        </div>
                    `);
                }
                list.forEach(item => {
                    let weTalkTransmitItem = $(`
                    <div class="weTalkTransmitItem">
                        <div class="weTalkTransmitItemLeft">
                          <div class="weTalkTransmitItemLeftAvatar">
                            <img class="weTalkTransmitAvatarImg" />
                          </div>
                            <div class="weTalkTransmitItemLeftTitle">${item.title}</div>
                              </div>
                            <input type="checkbox" name="weTalkTransmitObjG" value="${item.id}" class="weTalkTransmitItemRight weTalkPointer"/>
                      </div>
                    `).appendTo($(".weTalkTransmitList"))
                    // 头像
                    weTalkTransmitItem.children(".weTalkTransmitItemLeft").children(".weTalkTransmitItemLeftAvatar").children(".weTalkTransmitAvatarImg").attr("src", data.cdn + item.icon);
                })
            }
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
    function launchPersonalChat(user, userId, userIndex, username, associateId, isPassive) {
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
            tellLastRead();
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
                    removeFriendFin(data.friendId, 1);
                });
            } else {
                // console.log("不是好友")
                $(".weTalkChatMainHeadEventP").html("添加好友").off("click").on("click", function () {
                    addFriendFin(data.friendId, 1);
                });

            }
        })
        if (isPassive == false) {
            // 默认选中状态
            setSessionItem(user, true);
            // 加载聊天记录
            loadByFriend(data.friendId, userIndex, true);
        }
    }

    // 小组
    function launchGroupChat(teamId, externalId, index, notice, userNum, maxUserNum, title, adminId, dom) {
        // 隐藏右边区域并显示小组内容
        $(".weTalkRightItem").hide();
        $(".weTalkRightMain").show();
        $(".weTalkGroupHead").css({ "display": "flex", "width": "589px" }).attr("data-id", teamId);

        $(".weTalkGroupUsers").show();
        // 点击时告知后端已读
        if (data.haveSend == false) {
            tellLastRead();
        }
        // 根据teamId查找对应的字段
        // 记录当前点击的小组id以及小组在小组列表中的索引
        data.friendId = teamId;
        data.friendIndex = index;
        // 加载小组头部
        $(".weTalkGroupName").html(title)
        $(".weTalkGroupId").html("ID:" + externalId)
        data.adminId = adminId;

        if (data.id == adminId) {
            $(".weTalkGroupManage").css("display", "flex");
            $(".weTalkGroupAnnounceTitle").children("img").show();
        } else {
            $(".weTalkGroupManage").hide();
            $(".weTalkGroupAnnounceTitle").children("img").hide();
        }
        // 加载公告栏
        if (notice) {
            $(".weTalkGroupAnnounceContent").html(notice)
        } else {
            $(".weTalkGroupAnnounceContent").html("暂无公告");
        }

        // 小组聊天按钮变为紫色
        $(".weTalkGroupChat").children("img").attr("src","./images/2liaotian.png");
        $(".weTalkGroupChatBtn").css("color","#944eea")
        $(".weTalkGroupMoment").children("img").attr("src","./images/1dongtailan.png");
        $(".weTalkGroupMomentBtn").css("color","#999");
        $(".weTalkGroupManage").children("img").attr("src","./images/1guanli.png");
        $(".weTalkGroupManageBtn").css("color","#999")

        // 加载成员列表
        $(".weTalkGroupMembersNum").html("成员：" + `${userNum}/${maxUserNum}`)
        $(".weTalkGroupMembersList").html("")
        getGroupInfo(teamId, data.token).then(res => {
            if (res.code == 1) {
                // 加载成员信息
                let arr = [];
                data.groupMembers = res.data.users;
                $(".weTalkGroupMembersList").html("");
                for (let j = 0; j < data.groupMembers.length; j++) {
                    loadGroupMember(data.groupMembers[j], j)
                    // @列表中不应该出现自己
                    if (data.groupMembers[j].id != data.id) {
                        arr.push(data.groupMembers[j].nickname)
                    }
                }
                // @功能
                $("#weTalkChatFrame").atwho('destroy');
                $("#weTalkChatFrame").atwho({
                    at: "@",
                    data: arr,
                    limit: arr.length,
                    startWithSpace: false, //是否以空格开始
                });
                $(".atwho-view-ul").off("keydown").on("keydown", function () {
                    return false;
                })
            }
        })

        // 默认选中状态
        setSessionItem(dom, false);
        // 加载聊天记录
        loadByFriend(teamId, index, false)
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
    function loadSessionContent(record, index, type) {
        // console.log("加载了")
        if (record) {
            let messageType = record.messageType,
                content,
                curHour,
                curMin,
                user;
            // 是否撤回了消息
            if (record.recall == 1) {
                // 处理时间
                if (record.recallTime) {
                    curHour = record.recallTime.substring(11, 13)
                    curMin = record.recallTime.substring(14, 16)
                }

                if (typeof (record.sendTime) == "string") {

                } else {
                    record.sendTime = "";
                    curHour = undefined;
                }
                if (record.sendTime) {
                    curHour = record.sendTime.substring(11, 13)
                    curMin = record.sendTime.substring(14, 16)
                }
                if (curHour == undefined) {
                    curHour = getMyHour().h;
                    curMin = getMyHour().m;
                }
                $(".weTalkItemRecordUser").html("")
                if (record.senderId == data.id) {
                    content = "你撤回了一条消息"
                } else {
                    content = record.nickname + "撤回了一条消息"
                }
            } else {
                if (type == "收到消息" || type == "调接口") {
                    // curHour = new Date(record.sendTime * 1).getHours() < 10 ? "0" + new Date(record.sendTime * 1).getHours() : new Date(record.sendTime * 1).getHours();
                    // curMin = new Date(record.sendTime * 1).getMinutes() < 10 ? "0" + new Date(record.sendTime * 1).getMinutes() : new Date(record.sendTime * 1).getMinutes();
                    if (record.sendTime) {
                        curHour = record.sendTime.substring(11, 13)
                        curMin = record.sendTime.substring(14, 16)
                    } else {
                        curHour = "未知"
                        curMin = "未知"
                    }

                }
                if (type == "转发" || type == "发图片" || type == "私聊" || type == "游戏" || type == "发语音") {
                    curHour = getMyHour().h;
                    curMin = getMyHour().m;
                    user = "我：";
                }
                // 判断内容的类型
                if (messageType == 1) {
                    if (record.content) {
                        content = disposeText(record);
                        content = content.replace(/\[at\]/, `<a>`).replace(/\[\/at\]/, `</a>`);
                    }

                    if (type == "收到消息") {
                        if ($(`<span>${content}</span>`).children("a").length > 0) {
                            $(`<span>${content}</span>`).children("a").each(function () {
                                if ($(this).html().substring(1) == data.nickname) {
                                    $(".weTalkChatItemList").children().eq(0).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkAtWo").show();
                                }
                            })
                        }
                    }
                }
                else if (messageType == 2) {
                    content = "[图片]"
                } else if (messageType == 3) {
                    content = "[语音]"
                }
                else if (messageType == 4) {
                    content = "[骰子]"
                } else if (messageType == 6) {
                    content = "[硬币]"
                } else if (messageType == 5) {
                    content = "[石头剪子布]"
                }
                if (content) {
                    splitBr = content.indexOf("<br>");
                    if (splitBr != -1) {
                        content = content.substring(0, splitBr);
                    }
                }
                if (record.senderId && record.senderId == data.id) {
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
            }

            if (record.recall == 1 && type == "收到消息") {

            } else {
                $(".weTalkChatItemList").children().each(function () {
                    if ($(this).attr("data-index") == index) {
                        $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(user)
                        $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(content)
                        // console.log("content",$(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent")[0])
                        // console.log($(this).children(".weTalkChatItemOne").children(".weTalkNewsTime")[0], $(this).children(".weTalkChatItemOne")[0])
                        $(this).children(".weTalkChatItemOne").children(".weTalkNewsTime").html(curHour + ":" + curMin)
                    }
                })
            }
        }

    }

    // 幸运抽奖
    function lottery() {
        data.friendId = "发现";
        data.isPublic = 0;
        // removejscssfile('lottery.js', 'js')
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
        if (isSocketIo) {
            if (item.messageType != 2) {
                // 滚动条位于最底部
                if (scrollBottom($(".weTalkChatMain"))) {
                    data.canScroll = true;
                }
            }
            let k = $(".weTalkChatMain").children().length + 1;
            $(".weTalkChatMain").children().each(function () {
                k--;
                $(this).attr("data_index", k)
            })
        }

        if (item.nickname) {
            item.avatarDefault = item.nickname.substring(0, 1);
        }

        if (item.senderId != data.id) {
            if (item.recall == 1) {
                $(`
                    <div class="weTalkChatOther">
                        <div class="weTalkRecallView">${item.nickname}撤回了一条消息</div>
                    </div>
                `).prependTo(".weTalkChatMain")
                return;
            }
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
                        // console.log("socketio@",item.content)
                        // socketio收到的@消息是<a></a>
                        if (item.at) {
                            otherChatRecord.attr("data-at", item.at)
                        }
                        weTalkChatOtherContent.html("").append(item.content)
                        weTalkChatOtherContent.children("img").each(function () {
                            $(this).attr({ "class": "weTalkDisEmoj" })
                        })
                        // weTalkChatOtherContent.children("span").children("img").each(function () {
                        //     $(this).attr({ "class": "weTalkDisEmoj" })
                        // })
                    } else {
                        // console.log("再次点击房间",item.content)
                        if (item.content instanceof jQuery) {
                            weTalkChatOtherContent.html("").append(item.content);
                            otherChatRecord.attr("data-at", true)
                        } else {
                            // 第一次读接口将所有[at][/at]都变为<a></a>
                            // 后面再次点击改房间所有的@都为<a></a>
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
                    otherChatRecord.css("user-select", "none");
                    weTalkChatOtherContent.attr("class", "weTalkChatOtherContent weTalkPointer");
                    weTalkChatOtherContent.css("background", "#fff")
                    weTalkChatOtherContent.html(`${item.content}`).hide();
                    // if (isSocketIo) {
                    //     otherChatRecord.attr({ "data_img": item.img });
                    // }

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
                            // if(!isloadMore){
                            //     $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                            // }
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
                case 3:
                    // 语音
                    let src = $(item.content).attr("src");
                    let duration = src.substring(src.indexOf("?duration") + 10);
                    weTalkChatOtherContent.html(`
                        <div class="weTalkRecordItem">
                            ${item.content}
                            <img class="weTalkRecordItemImg" src="./images/blackr.png">
                            <span class="weTalkRecordDuration">${duration}"</span>
                        </div>
                    `)
                    weTalkChatOtherContent.attr("data-duration", duration)
                    weTalkChatOtherContent.children(".weTalkRecordItem").children("audio").attr("src", src.substring(0, src.indexOf("?duration")))
                    weTalkChatOtherContent.children(".weTalkRecordItem").attr("data-self", false)
                    weTalkChatOtherContent.children(".weTalkRecordItem").children(".weTalkAudioItem")[0]
                        .removeEventListener("ended", switchPng)
                    weTalkChatOtherContent.children(".weTalkRecordItem").children(".weTalkAudioItem")[0]
                        .addEventListener("ended", switchPng)
                    break;
                case 4:
                    // 骰子
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
            // otherChatRecord.attr({ "data_vip": item.vip })
            otherChatRecord.attr({ "data_userId": item.senderId })
            otherChatRecord.attr({ "data_avatar": item.avatar })
            otherChatRecord.attr({ "data_index": index })

            weTalkChatOtherContent.attr({ "data_messageType": item.messageType })


            let otherChatRecordInfo = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherInfo");

            let vipExpireDate = new Date(item.vipExpireDate).getTime() * 1;
            if (vipExpireDate > new Date().getTime() * 1) {
                item.vip = 1;
            }

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
                otherChatRecord.prependTo($(".weTalkChatMain"));
            }
        } else {
            if (item.recall == 1) {
                $(`
                    <div class="weTalkChatSelf">
                        <div class="weTalkRecallView">你撤回了一条消息</div>
                    </div>
                `).prependTo(".weTalkChatMain")
                return;
            }
            let myChatRecord = $(`
                    <div class="weTalkChatSelf">
                            <div class="weTalkChatSelfLeft">
                              <div class="weTalkChatSelfLeftTransmit weTalkPointer">转发</div>
                              <div class="weTalkChatSelfLeftRecall weTalkPointer">撤回</div>
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

            // 添加自定义属性
            let weTalkChatSelfContent = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent")
            weTalkChatSelfContent.attr({ "data_messageType": item.messageType })

            if (item.sendTime) {
                var sendTime = item.sendTime;
            } else {
                var sendTime = undefined;
            }
            myChatRecord.children(".weTalkChatSelfLeft")
                .children(".weTalkChatSelfLeftRecall")
                .attr("data_recordid", item.id)
                .attr("data_time", sendTime)
            myChatRecord.attr({ "data_index": index })

            // myChatRecord.attr({ "data_vip": item.vip })

            switch (item.messageType) {
                case 1:
                    // 自己的@只是把[at][/at]变为<a></a>
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
                    myChatRecord.css("user-select", "none");
                    weTalkChatSelfContent.html(`${item.content}`).hide();
                    weTalkChatSelfContent.attr("class", "weTalkChatSelfContent weTalkPointer");
                    weTalkChatSelfContent.css("background", "#fff")

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
                        } else {
                            // if(!isloadMore){
                            //     $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                            // }
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
                case 3:
                    // 语音
                    let src = $(item.content).attr("src");
                    let duration = src.substring(src.indexOf("?duration") + 10);
                    weTalkChatSelfContent.html(`
                        <div class="weTalkRecordItem">
                            ${item.content}
                            <img class="weTalkRecordItemImg" src="./images/blackr.png">
                            <span class="weTalkRecordDuration">${duration}"</span>
                        </div>
                    `)
                    weTalkChatSelfContent.attr("data-duration", duration)
                    weTalkChatSelfContent.children(".weTalkRecordItem").children("audio").attr("src", src.substring(0, src.indexOf("?duration")))
                    weTalkChatSelfContent.children(".weTalkRecordItem").attr("data-self", true)
                    weTalkChatSelfContent.children(".weTalkRecordItem").children(".weTalkAudioItem")[0]
                        .removeEventListener("ended", switchPng)
                    weTalkChatSelfContent.children(".weTalkRecordItem").children(".weTalkAudioItem")[0]
                        .addEventListener("ended", switchPng)
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


            let myChatRecordInfo = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfInfo");

            let vipExpireDate = new Date(item.vipExpireDate).getTime() * 1;
            if (vipExpireDate > new Date().getTime() * 1) {
                item.vip = 1;
            }

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

            // 加到聊天框
            if (isSocketIo) {
                if (item.messageType != 2) {
                    myChatRecord.appendTo($(".weTalkChatMain"));
                }
            } else {
                myChatRecord.prependTo($(".weTalkChatMain"));
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
        $(".weTalkChatRoom").on("click", ".weTalkChatOtherAvatarArr", function (e) {
            let userId = $(this).parent().attr("data_userId");
            e.stopPropagation()
            e.preventDefault()
            showOtherInfo(userId);
        })
        // 右键事件
        // 转发他人的话
        $(".weTalkChatRoom").on("contextmenu", ".weTalkChatOther", function (e) {
            data.transmitType = 0;
            // 获取需要转发的对话
            data.transmitSetence = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").html();
            data.messageType = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").attr("data_messageType");
            if (data.messageType == 1) {
                if ($(this).attr("data-at")) {
                    // data.transmitSetence = data.transmitSetence.replace(/<a>/g,"[at]").replace(/<a id="at">/g,"[at]").replace(/<\/a>/g,"[/at]");
                    data.transmitSetence = data.transmitSetence.replace(/<a>/g, "").replace(/<a id="at">/g, "").replace(/<\/a>/g, "");
                    data.transmitType = 1;
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
            if (data.messageType == 3) {
                let src = $(data.transmitSetence).children("audio").attr("src");
                let duration = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").attr("data-duration");
                data.transmitSetence = src.substring(src.indexOf("chat/")) + "?duration=" + duration + '"';
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
            }
            // 点击转发按钮事件
            let transmitBtn = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
            transmitBtn.off("click").on("click", function () {
                transmitEve();
                transmitBtn.hide();
                transmitBtn.siblings(".weTalkChatOtherRightReport").hide()
            })
            e.preventDefault();
        })

        // 转发自己的话
        $(".weTalkChatRoom").on("contextmenu", ".weTalkChatSelf", function (e) {
            data.transmitType = 0;
            // console.log("需要转发的话", data.transmitSetence, data.messageType)
            // 获取需要转发的对话
            data.transmitSetence = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").html();
            data.messageType = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").attr("data_messageType");
            if (data.messageType == 1) {
                // console.log("socket转发的@自己消息",data.transmitSetence)
                if ($(this).attr("data-at")) {
                    data.transmitType = 1;
                    // data.transmitSetence = data.transmitSetence.replace(/<a>/g,"[at]").replace(/<a id="at">/g,"[at]").replace(/<\/a>/g,"[/at]");
                    data.transmitSetence = data.transmitSetence.replace(/<a>/g, "").replace(/<a id="at">/g, "").replace(/<\/a>/g, "");
                }
                if ($(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").children("img").length > 0) {
                    let emoj = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").children("img");
                    emoj.each(function () {
                        data.emojzfArr.push($(this).attr("src").substring(emoj.attr("src").indexOf(".png") - 2, $(this).attr("src").indexOf(".png")));
                    })
                }
            }

            if (data.messageType == 2) {
                data.transferImg = $(this).attr("data_index");
            }
            if (data.messageType == 3) {
                let src = $(data.transmitSetence).children("audio").attr("src");
                let duration = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").attr("data-duration");
                data.transmitSetence = src.substring(src.indexOf("chat/")) + "?duration=" + duration + '"';
            }
            // 不用return是为了让撤回游戏的功能生效
            if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {

            } else {
                // 获取转发按钮节点
                let thatzf = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
                if (thatzf.css("display") != "none") {
                    thatzf.hide();
                } else {
                    thatzf.show();
                    $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                    $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
                }
            }
            // 点击转发按钮事件
            let transmitBtn = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
            let thatch = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftRecall");
            transmitBtn.off("click").on("click", function () {
                // console.log("点击转发事件");
                transmitEve();
                transmitBtn.hide();
                thatch.hide();
            })
            e.preventDefault()

            // 撤回自己的话
            if (thatch.css("display") != "none") {
                thatch.hide();
            } else {
                thatch.show();
                $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftRecall").hide();
                // $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
            }
            thatch.off("click").on("click", function () {
                // console.log("时间",(new Date().getTime() - $(this).attr("data_time")) / 1000)
                if ((new Date().getTime() - $(this).attr("data_time")) / 1000 > 120) {
                    showTip("超过2分钟的消息无法撤回");
                    return;
                }
                let recordId = $(this).attr("data_recordid");
                transmitBtn.hide();
                thatch.hide();
                recallMsg(recordId);
            })
        })

        // 取消并隐藏转发列表
        $(".weTalkChatRoom").on("click", ".weTalkTransmitbtn1", function () {
            $(".weTalkTransmitItemRight").prop("checked", false)
            $(".weTalkTransmit").hide();
        })
        // 确定并获取已选中的转发人
        $(".weTalkChatRoom").on("click", ".weTalkTransmitbtn2", function () {
            if (data.sendState) {
                let obj = {};
                // 聊天室
                $("input[type=checkbox][name=weTalkTransmitObj]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 0;
                        obj.value = $(this).val();
                        data.transmitChoosedArr.push(obj)
                        obj = {};
                        data.flag += 1;
                    }
                });
                // 好友
                $("input[type=checkbox][name=weTalkTransmitObjP]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 1;
                        obj.value = $(this).val();
                        data.transmitChoosedArr.push(obj)
                        obj = {};
                        data.flag += 1;
                    }
                });
                // 小组
                $("input[type=checkbox][name=weTalkTransmitObjG]").each(function () {
                    if ($(this).prop("checked")) {
                        obj.type = 2;
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
                        if (localStorage.getItem("vip") == "true") {
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
                            data.transmitSetence = transmitSetence;
                            data.emojzfArr = [];
                        }
                        if (data.messageType == 2) {
                            if (data.isPublic == 1) {
                                transmitSetence = $(`${data.chatPublicRecords[data.transferImg].content}`).attr("src").replace(data.cdn, "");
                            } else {
                                for (let i = 0; i < data.weTalkPerList.length; i++) {
                                    if (data.friendId == data.weTalkPerList[i].userId || data.friendId == data.weTalkPerList[i].teamId) {
                                        transmitSetence = $(`${data.weTalkPerList[i].records[data.transferImg].content}`).attr("src").replace(data.cdn, "");
                                        break;
                                    }
                                }
                            }
                        }
                        if (data.messageType == 3) {
                            transmitSetence = data.transmitSetence;
                        }

                        // 聊天室
                        if (item.type == 1) {
                            let avatar;
                            if (data.avatar == null) {
                                avatar = "";
                            } else {
                                avatar = data.avatar;
                            }
                            if (data.messageType == 1) {
                                transmitSetence = data.transmitSetence;
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
                                    if (response.state != 1) {
                                        console.log("发送异常")
                                        $(".weTalkChatMgc").show();
                                        setTimeout(function () {
                                            $(".weTalkChatMgc").hide();
                                        }, 3000)
                                    }
                                });
                        } else if (item.type == 0) {
                            // 私聊
                            if (data.transmitType == 1) {
                                showTip("@消息无法转发给其他用户")
                                return;
                            }
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
                                    if (response.state == 1) {
                                        let obj = {
                                            targetId: item.value,
                                            senderId: data.id,
                                            messageType: parseInt(data.messageType),
                                            content: transmitSetence,
                                            id: response.messageId
                                        };
                                        obj.content = disposeText(obj);
                                        let isHas = false;
                                        for (let j = 0; j < data.weTalkPerList.length; j++) {
                                            if (obj.targetId == data.weTalkPerList[j].userId) {
                                                transmitRecall(obj, j, 1);
                                                isHas = true;
                                                break;
                                            }
                                        }

                                        if (!isHas) {
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
                        } else if (item.type == 2) {
                            let avatar;
                            if (data.avatar == null) {
                                avatar = "";
                            } else {
                                avatar = data.avatar;
                            }
                            if (data.messageType == 1) {
                                transmitSetence = data.transmitSetence;
                            }
                            if (data.transmitType == 1) {
                                showTip("@消息无法转发给其他用户")
                                return;
                            }
                            data.socket.emit('TEAM', {
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
                                    if (response.state != 1) {
                                        console.log("发送异常")
                                        $(".weTalkChatMgc").show();
                                        setTimeout(function () {
                                            $(".weTalkChatMgc").hide();
                                        }, 3000)
                                    } else if (response.state == 1) {
                                        let obj =
                                        {
                                            targetId: item.value,
                                            senderId: data.id,
                                            messageType: parseInt(data.messageType),
                                            content: transmitSetence,
                                            senderNickname: data.nickname,
                                            avatar: avatar,
                                            sex: data.sex,
                                            vip: vip
                                        }

                                        obj.content = disposeText(obj);
                                        let isHas = false, index;
                                        for (let j = 0; j < data.weTalkPerList.length; j++) {
                                            if (obj.targetId == data.weTalkPerList[j].teamId) {
                                                isHas = true;
                                                index = j;
                                                break;
                                            }
                                        }
                                        // 如果该小组不在会话列表里 主动添加
                                        if (!isHas) {
                                            addGroupMethod(item.value);
                                            transmitRecall(obj, index, 2);
                                        }
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
                setSpeakInterVal();
            } else {
                showTip("请" + localStorage.getItem("speakInterval") + "秒以后再发送")
            }
        })
    }

    // 转发回调 type == 1私聊 type == 2小组
    function transmitRecall(obj, j, type) {
        if (type == 1) {
            data.weTalkPerList[j].records.unshift(obj);
        }
        $(".weTalkChatItemList").children().each(function () {
            if ($(this).attr("data-index") == j) {
                // 转发默认为与该用户消息已读
                if (type == 1) {
                    data.socket.emit('SYSTEM', {
                        type: 1,
                        targetUserId: data.friendId
                    })
                } else if (type == 2) {
                    data.socket.emit('SYSTEM', {
                        type: 2,
                        teamId: data.friendId
                    })
                }
                data.haveSend = true;
                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
                data.weTalkPerList[j].UnReadNum = 0;
                console.log("data.weTalkPerList[j]", data.weTalkPerList[j])
                if (data.weTalkPerList[j].records && data.weTalkPerList[j].records.length > 0) {
                    let record = JSON.parse(JSON.stringify(data.weTalkPerList[j].records[0])),
                        index = j;
                    loadSessionContent(record, index, '转发');
                }
            }
        });
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
                // console.log("squareH", squareH, "squareW", squareW)
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
    function loadDeRoomRecords() {
        if (data.chatPublicRecords) {
            // loadChatRoomInitial();
            // 之后点击聊天室,不用调接口
            // console.log("之后点击聊天室")
            // 加载@功能
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
    function loadAt() {
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

    // 说话间隔
    function setSpeakInterVal() {
        data.sendState = false;
        setTimeout(function () {
            data.sendState = true;
        }, localStorage.getItem("speakInterval") * 1000)
    }

    // 登录方式
    function loginType() {
        // 插件
        if (/^chrome-extension/.test(window.location.href)) {
            data.loginByPulgin = true;
            data.curDomain = window.location.href;
            data.curDomain = data.curDomain.substring(data.curDomain.indexOf("?domain=") + 8, data.curDomain.indexOf("?title="));
            data.curTitle = window.location.href;
            data.curTitle = decodeURI(data.curTitle.substring(data.curTitle.indexOf("?title=") + 7));
        } else {
            data.loginByPulgin = false;
            // 网页版
            let href = window.location.href;
            // 带参数
            if (href.indexOf("?from=") != -1) {
            	var link = href.substring(href.indexOf("?from="));
            	if(!link.startsWith("http")){
            		link= "http://"+link;
            	}
            	data.curDomain = link || window.location.href;
                data.curTitle = link || document.title;
            } else {
                // 不带参数
                data.curDomain = window.location.href;
                data.curTitle = document.title;
            }
			
        }
    }

    // 发语音
    function sendRadio() {
        if (localStorage.getItem("vip") == "true") {
            $(".weTalkRadioingTip").html("请按住话筒图标进行录音")
            $(".weTalkRadio").show();
            $(".weTalkRadioContent").show();
            $(".weTalkRadioTip").show();
            $(".weTalkRadioToolKe").hide();
        } else {
            showTip("您还不是VIP用户，不能使用该功能。");
        }

    }

    function startRecord() {
        HZRecorder.get(function (rec) {
            data.recorder = rec;
            data.recorder.start();
        });
        $(".weTalkRadioAnimate").show();
        $(".weTalkRadioingTip").html("正在录音中...")
        $(".weTalkRadiobtn1").css({ "background": "e2e2e2", "color": "#999" });
        $(".weTalkRadiobtn2").css({ "background": "#999" });
        $(".weTalkRadioAnimate").css("animation", "myrecord 2s infinite")
    }

    function endRecord() {
        data.recorder.stop();
        data.upFile = data.recorder.getBlob();
        $(".weTalkRadioTool").attr("src", URL.createObjectURL(data.upFile));
        $(".weTalkRadioTool").off("canplay").on("canplay", function () {
            console.log("duration", $(this)[0].duration)
            if ($(this)[0].duration < 1 || $(this)[0].duration == "Infinity") {
                $(".weTalkRadioingTip").html("录音时间不能低于1秒...")
                $(".weTalkRadioAnimate").css("animationPlayState", "paused")
                $(".weTalkRadioAnimate").hide();
            } else {
                $(".weTalkRadiobtns").css("display", "flex");
                $(".weTalkRadioPreBtn").hide();
                $(".weTalkRadioTip").hide();
                $(".weTalkRadiobtn1").css({ "background": "#ede7ff", "color": "#8E4AE0" });
                $(".weTalkRadiobtn2").css({ "background": "#8E4BE0" });
                $(".weTalkRadioDuration").html($(this)[0].duration.toFixed(1) + ' "');
                data.recordDuration = $(this)[0].duration.toFixed(1) + ' "';
                $(".weTalkRadioContent").hide();
                $(".weTalkRadioToolKe").show();
                $(".weTalkRadioAnimate").css("animationPlayState", "paused")
            }
        })


    }

    function palyRecord() {
        let audioPlayer = $('.weTalkRadioTool')[0]
        if (audioPlayer.paused) {
            console.log("播放")
            $(".weTalkRadioToolKeImg2").attr("src", "./images/purpler.gif")
            audioPlayer.play();
        } else {
            console.log("暂停")
            $(".weTalkRadioToolKeImg2").attr("src", "./images/purpler.png")
            audioPlayer.pause();
        }
    }

    function switchPng() {
        // if ($(this).parent().attr("data-self") == "true") {
        // $(this).next(".weTalkRecordItemImg").attr("src", "./images/whiter.png")
        // } else {
        $(this).next(".weTalkRecordItemImg").attr("src", "./images/blackr.png")
        // }
    }

    // 阿里云上传
    function aliUpload(type) {
        preUpload(type, data.token).then(res => {
            if (res.code == 1) {
                var result = res.data;
                var params = new FormData();
                let fileName = result.dir + "/" + result.filename + "." + data.upFile.type.split("/")[1];
                params.append("name", result.filename);
                params.append("key", fileName);
                params.append("success_action_status", "200");
                params.append("OSSAccessKeyId", result.accessid);
                params.append("policy", result.policy);
                params.append("signature", result.signature);
                params.append("file", data.upFile, result.filename);
                // 上传至ali
                jQuery.ajax({
                    type: "post",
                    url: result.host,
                    data: params,
                    processData: false,
                    contentType: false,
                    success: function () {
                        if (type == 2) {
                            $('#weTalkSendPic').val('');
                            // 5秒以后才可以发送消息
                            setSpeakInterVal();
                            // 图片路径
                            if (data.isPublic == 0) {
                                // 私聊
                                // 如果是私聊，自己发的消息需要处理
                                data.socket.emit('PRIVATE',
                                    {
                                        targetId: data.friendId,
                                        senderId: data.id,
                                        messageType: 2,
                                        content: fileName
                                    }, function (response) {
                                        if (response.state == 1) {
                                            let obj = {
                                                targetId: data.friendId,
                                                senderId: data.id,
                                                messageType: 2,
                                                content: fileName,
                                                id: response.messageId,
                                                recall: 0,
                                            };
                                            obj.content = disposeText(obj);
                                            for (let j = 0; j < data.weTalkPerList.length; j++) {
                                                if (obj.targetId == data.weTalkPerList[j].userId) {
                                                    data.weTalkPerList[j].records.unshift(obj);
                                                    let record = JSON.parse(JSON.stringify(obj));
                                                    loadSessionContent(record, j, "发图片")
                                                    break;
                                                }
                                            }
                                            loadByFriendOne();
                                            obj = {};
                                        }
                                    });
                            } else if (data.isPublic == 1) {
                                // 聊天室
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
                                        content: fileName,
                                        senderNickname: data.nickname,
                                        avatar: avatar,
                                        sex: data.sex,
                                        vip: localStorage.getItem("vip") == "true" ? 1 : 0
                                    }, function (response) {
                                        sendMsgCallBack(response);
                                    })
                            } else if (data.isPublic == 2) {
                                // 小组
                                let avatar;
                                if (data.avatar == null) {
                                    avatar = "";
                                } else {
                                    avatar = data.avatar;
                                }
                                data.socket.emit('TEAM',
                                    {
                                        targetId: data.friendId,
                                        senderId: data.id,
                                        messageType: 2,
                                        content: fileName,
                                        senderNickname: data.nickname,
                                        avatar: avatar,
                                        sex: data.sex,
                                        vip: localStorage.getItem("vip") == "true" ? 1 : 0
                                    }, function (response) {
                                        sendMsgCallBack(response);
                                    })
                            }
                            // $('.weTalkYsPic').hide();
                            showTip("发送成功")
                        } else if (type == 1) {
                            $('#weTalkSendPic').val('');
                            $('#setGroupAvatar').val('');
                            // 小组头像上传
                            if ($(".weTalkGroupManageView ").css("display") == "block") {
                                editGroupInfo(data.friendId, "", "", fileName, "", "", data.token).then(res => {
                                    if (res.code == 1) {
                                        $(".weTalkGroupMavatarCover").css("pointer-events", "auto")
                                        // 数组
                                        for (let i = 0; i < data.weTalkPerList.length; i++) {
                                            if (data.weTalkPerList[i].isUsers == false) {
                                                if (data.weTalkPerList[i].teamId == data.friendId) {
                                                    data.weTalkPerList[i].avatar = fileName;
                                                    break;
                                                }
                                            }
                                        }
                                        // dom
                                        $(".weTalkGroupMavatarImg").attr("src", data.cdn + fileName);
                                        $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                                            if ($(this).attr("data-teamId") == data.friendId) {
                                                $(this).children(".weTalkChatItemOne").children(".weTalkGroupItemAvatar").
                                                    children(".weTalkGroupItemAvatarImg").attr("src", data.cdn + fileName);
                                            }
                                        })
                                    }
                                })
                            } else if ($(".establishGroup ").css("display") == "block") {
                                $(".establishGroupPic").empty()
                                console.log(fileName)
                                data.grounpFileName = fileName
                                $(".establishGroupUpload").hide()
                                bottleLocalityPic = $(
                                    `<div id="showEstablishGroupPic">
                                     <img src="${data.cdn + fileName}" >
                                     <div id="showEstablishGroupPicMasking"></div>
                                     <div class="changeShowEstablishGroup">
                                        <label for="establishGroupUpload" id="changeShowEstablishGroupPic">
                                            <img src="images/groupgengxin.png">
                                            <p>更换图片</p>
                                        </label>
                                     </div>
                                    </div>
                            `).appendTo($(".establishGroupPic"))
                                $(".establishGroupPic").show()
                            } else {
                                // 个人头像上传
                                updateAvatar(fileName, data.roomId, data.token).then(res1 => {
                                    if (res1.code == 1) {
                                        showTip("修改成功");
                                        info(data.token).then(res2 => {
                                            data.avatar = fileName;
                                            $(".weTalkPersonalInfoContent").children(".weTalkChangeAvatar").children(".weTalkCurAvater").attr("src", data.cdn + fileName).show();
                                            $(".weTalkPersonalInfoContent").children(".weTalkChangeAvatar").children(".weTalkDeInfoAvatar").hide();
                                            $(".weTalkAvatarImg").attr("src", data.cdn + fileName).show();
                                            $(".weTalkDefaultAvatar").hide();
                                            // 修改聊天室用户列表头像
                                            $(".weTalkUsersItemList").children().first().children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").attr("src", data.cdn + fileName);
                                            data.weTalkUsersItemList[0].avatar = fileName;
                                        })
                                    }
                                }).catch(error => {
                                    showTip("修改头像失败")
                                })
                            }
                        } else if (type == 5) {
                            // 5秒以后才可以发送消息
                            setSpeakInterVal();
                            if (data.isPublic == 0) {
                                // 如果是私聊，自己发的消息需要处理
                                data.socket.emit('PRIVATE',
                                    {
                                        targetId: data.friendId,
                                        senderId: data.id,
                                        messageType: 3,
                                        content: fileName + "?duration=" + data.recordDuration.substring(0, data.recordDuration.length - 1)
                                    }, function (response) {
                                        if (response.state == 1) {
                                            let obj = {
                                                targetId: data.friendId,
                                                senderId: data.id,
                                                messageType: 3,
                                                content: fileName + "?duration=" + data.recordDuration.substring(0, data.recordDuration.length - 1),
                                                id: response.messageId,
                                                recall: 0,
                                            };
                                            obj.content = disposeText(obj);
                                            for (let j = 0; j < data.weTalkPerList.length; j++) {
                                                if (obj.targetId == data.weTalkPerList[j].userId) {
                                                    data.weTalkPerList[j].records.unshift(obj);
                                                    let record = JSON.parse(JSON.stringify(obj));
                                                    loadSessionContent(record, j, "发语音")
                                                    break;
                                                }
                                            }
                                            loadByFriendOne();
                                            obj = {};
                                        }
                                        sendMsgCallBack(response);
                                    });
                            } else if (data.isPublic == 1) {
                                // console.log("聊天室语音")
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
                                        messageType: 3,
                                        content: fileName + "?duration=" + data.recordDuration.substring(0, data.recordDuration.length - 1),
                                        senderNickname: data.nickname,
                                        avatar: avatar,
                                        sex: data.sex,
                                        vip: localStorage.getItem("vip") == "true" ? 1 : 0
                                    }, function (response) {
                                        sendMsgCallBack(response);
                                    })

                            } else if (data.isPublic == 2) {
                                // 小组
                                let avatar;
                                if (data.avatar == null) {
                                    avatar = "";
                                } else {
                                    avatar = data.avatar;
                                }
                                data.socket.emit('TEAM',
                                    {
                                        targetId: data.friendId,
                                        senderId: data.id,
                                        messageType: 3,
                                        content: fileName + "?duration=" + data.recordDuration.substring(0, data.recordDuration.length - 1),
                                        senderNickname: data.nickname,
                                        avatar: avatar,
                                        sex: data.sex,
                                        vip: localStorage.getItem("vip") == "true" ? 1 : 0
                                    }, function (response) {
                                        sendMsgCallBack(response);
                                    })
                            }
                            showTip("发送成功");
                        }
                    },
                    fail: function () {
                        $('#weTalkSendPic').val('');
                        showTip("上传失败");
                    },
                    statusCode: {
                        500: function () {
                            $('#weTalkSendPic').val('');
                            showTip("上传失败");
                        },
                        400: function () {
                            $('#weTalkSendPic').val('');
                            showTip("上传失败");
                        }
                    }
                })
            } else {
                showTip("上传失败");
                $('#weTalkSendPic').val('');
            }
        })

    }

    // 广播
    function broadCastMaq(content) {
        // 播放时将变量置为true不让后面的广播播放
        data.isBroading = true
        $(".weTalkBroadContent").html("【广播】：" + content)
        $(".weTalkBroadcast").show();
        let distance = $(".weTalkBroadcast").width();
        let boradInterval = setInterval(function () {
            distance--;
            $(".weTalkBroadContainer").css({ "left": distance + "px" })
            // 播放完毕
            if (distance == 0) {
                // 清空计时器
                clearInterval(boradInterval);
                $(".weTalkBroadcast").hide();
                // 删除数组中播放过的广播
                data.broadCastArr.splice(0, 1);
                // 判断数组中是否还有未播放的广播，有就重新调用该函数播放广播，没有就将变量置为false
                if (data.broadCastArr.length > 0) {
                    broadCastMaq(data.broadCastArr[0]);
                } else {
                    data.isBroading = false;
                }
            }
        }, 20);
    }

    // 切换聊天室回调
    function switchRoomCallBack() {
        showTip("切换失败")
        data.isAtDone = false;
        $(".weTalkPublicChannnellLastRecords").children(".weTalkAtWo").hide();
        // 重新加载默认聊天室
        showPublicRecords(data.roomId)
        $(".weTalkFunCover").hide();
        $(".weTalkSwitchChatRoomTip").hide().attr("data-websiteId", data.webDesiteId);
        $(".weTalkLoadRecord").css({ "visibility": "visible" })
        data.isLoadRecords = true;
    }

    // 发送消息回调
    function sendMsgCallBack(response) {
        if (response.state == 0) {
            showTip("系统禁止发言");
        }
    }

    // 聊天室加载更多的消息
    function loadRoomMsgMore(arr, isPublic) {
        let lastScrollheight = $(".weTalkChatMain")[0].scrollHeight, page, size;
        arr.forEach((item, index) => {
            if (isPublic == 1) {
                // 聊天室
                chuliRoomRecords(item);
                page = data.Pcurrent - 1;
                size = data.Psize;
            } else if (isPublic == 0) {
                // 私人
                loadSessionData(item, true)
                page = data.Scurrent - 1;
                size = data.Ssize;
            } else if (isPublic == 3) {
                // 小组
                chuliRoomRecords(item);
                page = data.Gcurrent - 1;
                size = data.Gsize;
            }
            // 加载更多消息
            loadRecordFin(item, index + page * size, false)
        })
        $(".weTalkChatMain")[0].scrollTop = $(".weTalkChatMain")[0].scrollHeight - lastScrollheight
    }

    // 处理拿到的聊天室消息
    function chuliRoomRecords(item) {
        if (item.messageType == 1 || item.messageType == 2 || item.messageType == 3) {
            item.content = disposeText(item)
        }
        item.nickname = item.senderNickname;
    }


    // 撤回消息
    function recallMsg(id) {
        let type;
        if (data.isPublic == 1) {
            type = 2;
        } else if (data.isPublic == 0) {
            type = 1;
        } else if (data.isPublic == 2) {
            type = 3;
        }
        recall(type, id, data.token).then(res => {
            if (res.code == 1) {
                if (data.isPublic == 0) {
                    data.recallType = 0;
                    recallMsgCallback(id, true);
                }
                showTip("撤回成功");
            } else if (res.code == 44444) {
                showTip("消息无法撤回")
            }
        })
        // .catch(error=>{
        //     showTip("撤回消息失败，错误码：" + error);
        // })
    }

    // 撤销回调
    function recallMsgCallback(id, isSelf,targetId) {
        if (isSelf == true) {
            var nickname = "你"
        } else {
            nickname = "";
        }
        console.log("recallType",data.recallType)
        if (data.recallType == 1) {
            for (let i = 0; i < data.chatPublicRecords.length - 1; i++) {
                if (data.chatPublicRecords[i].id == id) {
                    // 处理数组
                    data.chatPublicRecords[i].recall = 1;
                    // 处理dom
                    let dom = $(".weTalkChatMain").children("div").eq($(".weTalkChatMain").children("div").length - i - 1);
                    if (data.id != data.chatPublicRecords[i].senderId) {
                        nickname = data.chatPublicRecords[i].senderNickname;
                    } else {
                        nickname = "你";
                    }
                    dom.html(`
                        <div class="weTalkRecallView">${nickname}撤回了一条消息</div>
                    `)
                    // console.log("dom",$(".weTalkChatMain").children().eq($(".weTalkChatMain").children("div").length - i - 1)[0])
                    break;
                }
            }
        } else if (data.recallType == 0) {
            // console.log("是私聊")
            for (let j = 0; j < data.weTalkPerList.length; j++) {
                console.log("id",data.weTalkPerList[j].userId,targetId)
                if (data.weTalkPerList[j].userId == targetId) {
                    // console.log("找到对应的私聊对象了")
                    for (let k = 0; k < data.weTalkPerList[j].records.length; k++) {
                        console.log("id",data.weTalkPerList[j].records[k].id,id)
                        if (data.weTalkPerList[j].records[k].id == id) {
                            // console.log("找到对应的私聊对象的聊天记录了")
                            // 处理数组
                            data.weTalkPerList[j].records[k].recall = 1;
                            // 处理dom
                            let dom = $(".weTalkChatMain").children("div").eq($(".weTalkChatMain").children("div").length - k - 1);
                            if (nickname == "") {
                                if (data.id != data.weTalkPerList[j].records[k].senderId) {
                                    nickname = data.weTalkPerList[j].records[k].nickname;
                                } else {
                                    nickname = "你";
                                }
                            }
                            dom.html(`
                                <div class="weTalkRecallView">${nickname}撤回了一条消息</div>
                            `)
                            // 如果撤回的是最新的消息，那么就更新会话列表
                            if (k == 0) {
                                loadSessionContent(data.weTalkPerList[j].records[k], j)
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        } else if (data.recallType == 2) {
            console.log("尽着了吗")
            for (let j = 0; j < data.weTalkPerList.length; j++) {
                if (data.weTalkPerList[j].teamId == targetId) {
                    // console.log("找到对应的私聊对象了")
                    for (let k = 0; k < data.weTalkPerList[j].records.length; k++) {
                        if (data.weTalkPerList[j].records[k].id == id) {
                            // console.log("找到对应的私聊对象的聊天记录了")
                            // 处理数组
                            data.weTalkPerList[j].records[k].recall = 1;
                            // 处理dom
                            let dom = $(".weTalkChatMain").children("div").eq($(".weTalkChatMain").children("div").length - k - 1);
                            if (nickname == "") {
                                if (data.id != data.weTalkPerList[j].records[k].senderId) {
                                    nickname = data.weTalkPerList[j].records[k].nickname;
                                } else {
                                    nickname = "你";
                                }
                            }
                            dom.html(`
                                <div class="weTalkRecallView">${nickname}撤回了一条消息</div>
                            `)
                            // 如果撤回的是最新的消息，那么就更新会话列表
                            if (k == 0) {
                                loadSessionContent(data.weTalkPerList[j].records[k], j)
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        }
    }

    // 加载小组成员
    function loadGroupMember(item, index) {
        let weTalkGroupMember = $(`
        <div class="weTalkGroupUserItem">
            <div class="weTalkGroupItemAvatar">
                <img class="weTalkBoy"></img>
                <div class="weTalkGroupItemDeAvatar">${item.nickname.substring(0, 1)}</div>
                <img class="weTalkGroupItemAvatarImg">
            </div>
            <div class="weTalkGroupItemNick weTalkTextDis">${item.nickname}</div>
            <div class="weTalkGroupItemNickVip weTalkTextDis">${item.nickname}</div>
        </div>
        `)

        // 定义自定义属性
        weTalkGroupMember.attr("data-id", item.id)

        if (item.avatar) {
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkGroupItemAvatarImg").attr("src", data.cdn + item.avatar.replace(/\\/g, "/")).show();
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkGroupItemDeAvatar").hide();
        } else {
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkGroupItemAvatarImg").hide().attr("src", "");
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkGroupItemDeAvatar").show();
        }

        if (item.vip == 1) {
            weTalkGroupMember.children(".weTalkGroupItemNickVip").show();
            weTalkGroupMember.children(".weTalkGroupItemNick").hide();
        } else {
            weTalkGroupMember.children(".weTalkGroupItemNickVip").hide();
            weTalkGroupMember.children(".weTalkGroupItemNick").show();
        }

        if (item.sex == 1) {
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkBoy").attr("src", "./images/boy.png")
        } else if (item.sex == 2) {
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkBoy").attr("src", "./images/girl.png")
        } else {
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkBoy").hide();
        }

        if (item.online == 1) {
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkGroupItemAvatarImg").removeClass("grayPic")
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkGroupItemDeAvatar").removeClass("grayPic")
        } else if (item.online == 0) {
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkGroupItemAvatarImg").addClass("grayPic")
            weTalkGroupMember.children(".weTalkGroupItemAvatar").children(".weTalkGroupItemDeAvatar").addClass("grayPic")
        }

        weTalkGroupMember.appendTo(".weTalkGroupMembersList")
    }

    // 渲染单条会话 isAppend == true 将此会话插入到dom最后，否则插入到dom最前面
    function showOnePer(item, index, isAppend) {
        weTalkChatItem = $(
            `
                                <div class="weTalkChatItem">
                                    <div class="weTalkChatItemOne">
                                        <div class="weTalkChatItemAvatar">
                                            <img class="weTalkBoy"></img>
                                            <div class="weTalkItemDeAvatar">${item.avatarDefault}</div>
                                            <img class="weTalkUserAvatar">
                                        </div>
                                        <div class="weTalkItemRecordView">
                                            <div class="weTalkItemNick weTalkTextDis">${item.nickname}</div>
                                            <div class="weTalkItemNickVip weTalkTextDis">${item.nickname}</div>
                                            <div class="weTalkItemRecord">
                                                <div class="weTalkItemRecordUser"></div>
                                                <div class="weTalkItemRecordContent weTalkTextDis"></div>
                                            </div>
                                        </div>
                                        <div class="weTalkNewsRecords">${item.UnReadNum}</div>
                                        <div class="weTalkNewsRecordsjd">${item.UnReadNum}</div>
                                        <div class="weTalkNewsTime"></div>
                                        <img class="weTalkRemoveUser1 weTalkRemoveUser weTalkSessionRemove" src="./images/close.png" />
                                    </div>
                                    <div class="weTalkYjOptions">
                                        <div class="weTalkYjOptionsItem">加为好友</div>
                                        <div class="weTalkYjOptionsItem">移除会话</div>
                                        <div class="weTalkYjOptionsItem">加入黑名单</div>
                                    </div>
                                </div>
                              `
        );

        if (item.avatar) {
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").hide();
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
        } else {
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").show();
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").hide();
        }

        // 离线时的未读消息
        if (item.UnReadNum == 0) {
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
        } 
        else if(item.UnReadNum > 0){
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecords").css("display", "block");
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
            // }
            // （离线状态时）某用户给你发消息时，好友列表中没有该用户，被动添加到会话列表。
            // if (item.ispassive) {
            //     weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecords").css("display", "block");
            //     weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
            // } else {
            //     weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").show();
            // }
        }

        // 处理最后一条消息
        if(item.lastMsg){
            item.lastMsg = chuliLastMsg(item.lastMsg,item.messageType);
        }

        // 渲染最后一条消息
        if(item.recall == 1){
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html("撤回了一条消息");
            if(item.isMySend == 1){
                weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html("我");
            }else if(item.isMySend == 0){
                weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(item.senderName);
            }
        }else if(item.recall == 0){
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(item.lastMsg);
            if(item.isMySend == 1){
                weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html("我：");
            }else if(item.isMySend == 0){
                weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html();
            }
        }
        // if(item.isMySend == 1){
        //     if(item.recall == 1){
        //         weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html("我");
        //     }else if(item.recall == 0){
        //         weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html("我：");
        //     }
        // }else if(item.isMySend == 0){
        //     if(item.recall == 1){
        //         weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(item.senderName);
        //     }else if(item.recall == 0){
        //         weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html();
        //     }


        if (item.vip == "1") {
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemNick").hide();
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemNickVip").show();
        } else {
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemNick").show();
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemNickVip").hide();
        }

        if (item.sex == "1") {
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": './images/boy.png' })
        } else if (item.sex == "2") {
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": './images/girl.png' })
        } else {
            weTalkChatItem.children(".weTalkChatItemOne").children(".weTalkChatItemAvatar").children(".weTalkBoy").hide();
        }
        // 初始化自定义属性
        weTalkChatItem.attr("data-ischoosed", "a");
        weTalkChatItem.attr("data-id", item.userId)
        weTalkChatItem.attr("data-associateId", item.id)
        weTalkChatItem.attr("data-name", item.nickname)

        if (item.addFriendType == 2) {
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
            data.friendIndex = index;
            // 加载聊天框头部
            $(".weTalkChatMainHeadNameP").html(weTalkChatItem.attr("data-name"))
            $(".weTalkChatMainHeadP").attr("data-id", weTalkChatItem.attr("data-associateId"));
            friendAndBlock(data.friendId, data.token).then(res => {
                if (res.data.isFriend) {
                    // console.log("是好友")
                    $(".weTalkChatMainHeadEventP").html("解除好友").off("click").on("click", function () {
                        removeFriendFin(data.friendId, 1);
                    });
                } else {
                    // console.log("不是好友")
                    $(".weTalkChatMainHeadEventP").html("添加好友").off("click").on("click", function () {
                        addFriendFin(data.friendId, 1);
                    });

                }
            })
            // 默认选中状态
            weTalkChatItem.attr("data-ischoosed", "b");
            item.addFriendType = 1;
            weTalkChatItem.css({ background: "#e5ddff" });

            // 清空未读标识
            if (data.weTalkPerList[data.friendIndex] && data.weTalkPerList[data.friendIndex].UnReadNum > 0) {
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
            $(".weTalkPublicChannelSecond").attr("data-ischoosed", "a")
            $(".weTalkPublicChannelSecond").css("background", "#fff")
            // weTalkChatItem.children(".weTalkChatItemOne").children('.weTalkRemoveUser2').hide();
            weTalkChatItem.children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();

            weTalkChatItem.siblings().attr("data-ischoosed", "a");
            $(".weTalkGroupItem").attr("data-ischoosed", "a");
            $(".weTalkGroupItem").css({ background: "#fff" });
            weTalkChatItem.siblings().css({ background: "#fff" });
            // weTalkChatItem.siblings().children(".weTalkChatItemOne").children('.weTalkRemoveUser2').hide();
            weTalkChatItem.siblings().children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();

            // 加载聊天记录
            loadByFriend(data.friendId, index, true);
        }
        if (isAppend == true) {
            weTalkChatItem.appendTo($(".weTalkChatItemList"))
        } else {
            weTalkChatItem.prependTo($(".weTalkChatItemList"))
        }

        // 会话列表index重新加载
        reloadIndex();

        // 加载最后一条聊天记录
        if (item.records && item.records.length > 0) {
            let record = JSON.parse(JSON.stringify(item.records[0]))
            loadSessionContent(record, index, "调接口");
        }
    }

    // 渲染单个小组会话
    function showOneGroup(item, index, isAppend) {
        let weTalkGroupItem = $(`
            <div class="weTalkGroupItem">
                <div class="weTalkChatItemOne">
                    <div class="weTalkGroupItemAvatar">
                        <div class="weTalkGroupItemDeAvatar">${item.title.substring(0, 1)}</div>
                        <img class="weTalkGroupItemAvatarImg">
                    </div>
                    <div class="weTalkItemRecordView">
                        <div class="weTalkGroupItemNick weTalkTextDis">${item.title}</div>
                        <div class="weTalkItemRecord">
                            <div class="weTalkAtWo">[有人@我]</div>
                            <div class="weTalkItemRecordUser"></div>
                            <div class="weTalkItemRecordContent weTalkTextDis"></div>
                        </div>
                    </div>
                    <div class="weTalkNewsRecords">${item.UnReadNum}</div>
                    <div class="weTalkNewsRecordsjd">${item.UnReadNum}</div>
                    <div class="weTalkNewsTime"></div>
                </div>
                <div class="weTalkYjOptions">
                    <div class="weTalkYjOptionsItem">移除会话</div>
                </div>
        </div>
        `)

        // 自定义属性
        if (isAppend == false) {
            weTalkGroupItem.attr("data-id", item.chatListId);
            weTalkGroupItem.attr("data-externalId", item.externalId)
            weTalkGroupItem.attr("data-userNum", item.userNum)
            weTalkGroupItem.attr("data-maxUserNum", item.maxUserNum)
            weTalkGroupItem.attr("data-adminId", item.adminId)
        } else {
            weTalkGroupItem.attr("data-id", item.id);
            weTalkGroupItem.attr("data-externalId", item.external_id)
            weTalkGroupItem.attr("data-userNum", item.user_num)
            weTalkGroupItem.attr("data-maxUserNum", item.max_user_num)
            weTalkGroupItem.attr("data-adminId", item.admin_id)
        }
        weTalkGroupItem.attr("data-teamId", item.teamId);
        weTalkGroupItem.attr("data-ischoosed", "a")
        weTalkGroupItem.attr("data-intro", item.intro)
        weTalkGroupItem.attr("data-notice", item.notice)
        weTalkGroupItem.attr("data-title", item.title)

        if (item.icon) {
            weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkGroupItemAvatar").children(".weTalkGroupItemAvatarImg").attr('src', data.cdn + item.icon).show();
            weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkGroupItemAvatar").children(".weTalkGroupItemDeAvatar").hide();
        } else {
            weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkGroupItemAvatar").children(".weTalkGroupItemAvatarImg").hide().attr('src', "");
            weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkGroupItemAvatar").children(".weTalkGroupItemDeAvatar").show();
        }

        // 处理最后一条消息
        if(item.lastMsg){
            item.lastMsg = chuliLastMsg(item.lastMsg,item.messageType);
            // 渲染最后一条消息
            if(item.recall == 1){
                weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(item.senderName)
                weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html("撤回了一条消息");
            }else if(item.recall == 0){
                weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordUser").html(item.senderName + "：")
                weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkItemRecord").children(".weTalkItemRecordContent").html(item.lastMsg);
            }
        }

        // 离线时的未读消息
        if (item.UnReadNum == 0) {
            weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
            weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").hide();
        } else if(item.UnReadNum > 0){
            weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
            weTalkGroupItem.children(".weTalkChatItemOne").children(".weTalkNewsRecordsjd").show();
        }

        

        if (isAppend == true) {
            weTalkGroupItem.appendTo(".weTalkChatItemList")
        } else {
            weTalkGroupItem.prependTo(".weTalkChatItemList")
        }

        // data-index重新赋值
        reloadIndex();

        // 加载最后一条聊天记录
        if (item.records && item.records.length > 0) {
            let record = JSON.parse(JSON.stringify(item.records[0]))
            loadSessionContent(record, index, "调接口");
        }
    }

    // 会话列表index重新加载
    function reloadIndex() {
        let k = 0;
        $(".weTalkChatItemList").children().each(function () {
            $(this).attr("data-index", k);
            k++;
        })
    }

    // 会话列表右键事件
    function sessionItemYoujian(ev) {
        if ($(this).children(".weTalkYjOptions").css("display") == "none") {
            // 小组和私聊公共的部分
            // 点击时的样式变化
            let optionsView = $(this).children(".weTalkYjOptions")
            $(this).attr("data-ischoosed", "b");
            $(this).css({ background: "#e5ddff" });
            // $(this).children('.weTalkRemoveUser2').hide();
            $(this).siblings().attr("data-ischoosed", "a");
            $(this).siblings().css({ background: "#fff" });
            // $(this).siblings().children('.weTalkRemoveUser2').hide();
            $(this).siblings().children(".weTalkYjOptions").hide();
            // 点击时的属性变化
            data.friendIndex = $(this).attr("data-index");
            data.weTalkPerList[data.friendIndex].UnReadNum = 0;
            // 移入
            optionsView.children(".weTalkYjOptionsItem").each(function () {
                $(this).off("mouseenter").on("mouseenter", function () {
                    $(this).css({ "color": "#944eea", "background": "#ede7ff" })
                    $(this).siblings().css({ "color": "#666666", "background": "#fff" })
                })
            })
            // 移出
            optionsView.children(".weTalkYjOptionsItem").off("mouseleave").on("mouseleave", function () {
                $(this).css({ "color": "#666666", "background": "#fff" })
            })
            // 取消右键弹出框右键默认事件和冒泡
            optionsView.off("contextmenu").on("contextmenu", function (eve) {
                eve.preventDefault()
                eve.stopPropagation()
            })
            // 移除弹出框时，弹出框消失
            optionsView.off("mouseleave").on("mouseleave", function (even) {
                optionsView.hide();
                even.preventDefault()
                even.stopPropagation()
            })
            // 右键私聊用户时的弹框
            if ($(this).is(".weTalkChatItem")) {
                let that = $(this);
                data.friendId = $(this).attr("data-id");
                // 判断右键的用户是否被拉黑/是否为好友
                friendAndBlock(data.friendId, data.token).then(res => {
                    if (res.data.isFriend) {
                        $(this).children(".weTalkYjOptions").children(".weTalkYjOptionsItem:first").hide();
                    } else {
                        $(this).children(".weTalkYjOptions").children(".weTalkYjOptionsItem:first").show();
                    }
                    optionsView.show();
                })
                // 点击时的样式变化
                $(this).children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();
                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").hide();
                $(this).children(".weTalkChatItemOne").children(".weTalkNewsRecords").html("");
                $(this).siblings().children(".weTalkChatItemOne").children('.weTalkRemoveUser1').hide();
                // 点击事件
                optionsView.off("click").on("click", function (e) {
                    if (e.button == 0) {
                        switch (e.target.innerHTML) {
                            case "加为好友":
                                addFriendFin(data.friendId, 3, $(this));
                                break;
                            case "移除会话":
                                $(this).hide();
                                yjopenRemoveDiag(that, true);
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
            }
            // 右键小组时的弹框
            if ($(this).is(".weTalkGroupItem")) {
                let that = $(this);
                optionsView.show();
                // 点击事件
                optionsView.off("click").on("click", function (e) {
                    if (e.button == 0) {
                        switch (e.target.innerHTML) {
                            case "移除会话":
                                $(this).hide();
                                yjopenRemoveDiag(that, false)
                                break;
                        }
                    }
                    e.preventDefault()
                    e.stopPropagation()
                })
            }
        } else {
            $(this).children(".weTalkYjOptions").hide();
        }
        ev.preventDefault()
        ev.stopPropagation()
    }

    // 处理会话数据 isLoad = true 代表第一次加载
    function loadSessionData(item, isLoad) {
        item.addFriendType = 2;
        if (isLoad == true) {
            if (item.messageType == 1 || item.messageType == 2 || item.messageType == 3) {
                item.content = disposeText(item)
            }
        }
        // 自己
        if (item.senderId == data.id) {
            item.nickname = data.nickname;
            item.avatar = data.avatar;
            item.sex = data.sex;
            item.vip = localStorage.getItem("vip") == "true" ? true : false;
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
    }

    // 小组聊天
    function showGroupChat() {
        // 如果聊天窗口未打开，就打开聊天窗口，否则就什么都不做
        if ($(".weTalkRightMain").css("display") == "none") {
            $(".weTalkGroupChat").children("img").attr("src","./images/2liaotian.png");
            $(this).css("color","#944eea");
            $(".weTalkGroupManage").children("img").attr("src","./images/1guanli.png");
            $(".weTalkGroupManageBtn").css("color","#999");
            $(".weTalkGroupMoment").children("img").attr("src","./images/1dongtailan.png");
            $(".weTalkGroupMomentBtn").css("color","#999")

            
            $(".weTalkRightItem").hide();
            $(".weTalkRightMain").show();
            $(".weTalkGroupHead").css({ "display": "flex", "width": "597px" });
            $(".weTalkGroupUsers").show();
            // 渲染聊天记录
            // getGroupRecordsRequest();
        }
    }

    // 获取小组聊天记录
    function getGroupRecordsRequest(teamId, index, isDefault) {
        getGroupRecords(teamId, data.Gcurrent, data.token).then(res => {
            if (res.code == 1) {
                data.Gpages = res.data.pages;
                data.Gsize = res.data.size;
                data.weTalkPerList[index].pages = res.data.pages;
                // 加载第一页的聊天记录
                if (isDefault == true) {
                    let records = res.data.records;
                    records.forEach(item => {
                        item.nickname = item.senderNickname;
                    })
                    data.weTalkPerList[index].records = res.data.records;
                    // 加载最后一条聊天记录
                    if (data.weTalkPerList[index].records && data.weTalkPerList[index].records.length > 0) {
                        let record = JSON.parse(JSON.stringify(data.weTalkPerList[index].records[0]));
                        loadSessionContent(record, index, "调接口");
                    }
                    // 处理数据+渲染
                    data.weTalkPerList[index].records.forEach((item, index) => {
                        chuliRoomRecords(item, true)
                        loadRecordFin(item, index, false)
                    })
                } else {
                    // 加载更多页数的聊天信息
                    data.weTalkPerList[index].records = data.weTalkPerList[index].records.concat(res.data.records)
                    loadRoomMsgMore(res.data.records, 3);
                }
                $('.weTalkChatMain').children(".weTalkLoadRecord").css({ "visibility": "hidden" })
                data.isLoadRecords = false;
                $('.weTalkChatMain').children(".weTalkLoadRecord").remove();
            }
        })
    }

    // 小组动态
    function showGroupMoment() {
        $(".weTalkGroupMoment").children("img").attr("src","./images/2dongtailan.png");
        $(this).css("color","#944eea");
        $(".weTalkGroupManage").children("img").attr("src","./images/1guanli.png");
        $(".weTalkGroupManageBtn").css("color","#999")
        $(".weTalkGroupChat").children("img").attr("src","./images/1liaotian.png");
        $(".weTalkGroupChatBtn").css("color","#999")
        data.isShowMomentType = 2;
        // 调接口
        getGroupMoment();
        $(".weTalkRightItem").hide();
        $(".weTalkGroupHead").css({ "display": "flex", "width": "750px" })
        $('.myDynamicConditionTop').hide();
    }

    // 我的动态
    function showMyMoment() {
        data.isShowMomentType = 1;
        // 调接口
        getGroupMoment();
        $(".weTalkRightItem").hide();
        $('.myDynamicConditionTop').show();
        $(".myDynamicConditionTopLeft").children("img").attr("./images/guangchang.png")
        $(".myDynamicConditionTopLeft").children("span").html("我的动态");
    }

    // 获取小组信息
    function getGroupInfoRequest() {
        console.log(1)
        data.isShowMomentType = 3;
        getGroupMoment();
        $(".weTalkRightItem").hide();
        $('.myDynamicConditionTop').show();
        $(".myDynamicConditionTopLeft").children("span").html("小组动态");
        $(".myDynamicConditionTopLeft").children("img").attr("src", "./images/xiaozu.png");
    }

    // 小组管理
    function showGroupManage() {
        // 如果小组管理页面未打开，就打开它，否则什么都不做
        if ($(".weTalkGroupManageView").css("display") == "none") {
            $(".weTalkGroupManage").children("img").attr("src","./images/2guanli.png");
            $(this).css("color","#944eea");
            $(".weTalkGroupMoment").children("img").attr("src","./images/1dongtailan.png");
            $(".weTalkGroupMomentBtn").css("color","#999")
            $(".weTalkGroupChat").children("img").attr("src","./images/1liaotian.png");
            $(".weTalkGroupChatBtn").css("color","#999")

            // 获取小组信息
            getGroupInfo(data.friendId, data.token).then(res => {
                if (res.code == 1) {
                    $(".weTalkGroupMTitleLeftF").html(res.data.teamInfo.title);
                    $('.weTalkGroupMavatarImg').attr("src", data.cdn + res.data.teamInfo.icon);
                    $(".weTalkGroupIntroContent").html(res.data.teamInfo.intro)
                    $(".weTalkGroupMTitleLeftL").html(res.data.teamInfo.externalId);
                    $(".weTalkGroupMemberListR").html(`${res.data.teamInfo.userNum}/${res.data.teamInfo.maxUserNum}`)
                    if (res.data.teamInfo.reviewState == 0) {
                        // 公开
                        $(".weTalkGroupAddStyle1").children(".weTalkGroupRadio").css({ "background": "#944EEA" });
                        $(".weTalkGroupAddStyle2").children(".weTalkGroupRadio").css({ "background": "#fff", color: "#944EEA" });
                    } else if (res.data.teamInfo.reviewState == 1) {
                        //  需要审核
                        $(".weTalkGroupAddStyle2").children(".weTalkGroupRadio").css({ "background": "#944EEA" });
                        $(".weTalkGroupAddStyle1").children(".weTalkGroupRadio").css({ "background": "#fff", color: "#944EEA" });
                    }
                    $(".weTalkRightItem").hide();
                    $(".weTalkGroupManageView").show();
                    $(".weTalkGroupHead").css({ "display": "flex", "width": "750px" });
                    // 渲染小组管理页的成员列表
                    data.groupMembers = res.data.users;
                    showGroupMembers();
                    // 获取待审核的人
                    // 页码初始化
                    data.Wcurrent = 1;
                    listReview(data.friendId, data.Wcurrent, 10, data.token).then(res => {
                        if (res.code == 1) {
                            data.waitTest = res.data.records;
                            data.Wpages = res.data.pages;
                            if (data.waitTest && data.waitTest.length > 0) {
                                $(".weTalkGroupMTitleRight").show();
                                $(".weTalkGroupMTitleRightL").html(data.waitTest.length)
                            } else {
                                $(".weTalkGroupMTitleRight").hide();
                            }
                        }
                    })
                } else {
                    showTip("获取失败" + res.code);
                }
            }).catch(error => {
                showTip("获取失败" + error)
            })
        }
    }

    // 编写小组名称
    function editGroupTitle() {
        $(".weTalkEditGroupTitleView").show();
        $(".weTalkFunCover").show();
        $(".weTalEditTitleInput").val($(".weTalkGroupMTitleLeftF").html());
    }

    // 取消修改小组名称
    function cancelEditGroupTitle() {
        $(".weTalkEditGroupTitleView").hide();
        $(".weTalkFunCover").hide();
    }

    // 确认修改小组名称
    function confirmEditGroupTitle() {
        $(".weTalkEditGroupTitleView").hide();
        $(".weTalkFunCover").hide();
        let val = $(".weTalEditTitleInput").val();
        // 调接口
        editGroupInfo(data.friendId, val, "", "", "", "", data.token).then(res => {
            if (res.code == 1) {
                showTip("更改成功")
                // 数组
                for (let i = 0; i < data.weTalkPerList.length; i++) {
                    if (data.weTalkPerList[i].teamId == data.friendId) {
                        data.weTalkPerList[i].title = val;
                        break;
                    }
                }
                // dom
                $(".weTalkGroupMTitleLeftF").html(val);
                $(".weTalkGroupName").html(val);
                $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                    if ($(this).attr("data-teamId") == data.friendId) {
                        $(this).attr("data-title", val);
                        $(this).children(".weTalkChatItemOne").children(".weTalkItemRecordView").children(".weTalkGroupItemNick").html(val);
                    }
                })
            } else {
                showTip("更改失败" + res.code)
            }
        })
        // .catch(error => {
        //     showTip("更改失败" + error)
        // });
        $(".weTalEditTitleInput").val("")
    }

    // 编写小组公告
    function editGroupAnnounce() {
        $(".weTalkEditAnnounceTitle").html("公告修改")
        $(".weTalkEditAnnounceInput").attr({ "data-word": 30, "data-name": "公告" })
        $(".weTalkEditAnnounceView").show();
        $(".weTalkFunCover").show();
        $(".weTalkEditAnnounceInput").val($(".weTalkGroupAnnounceContent").html());
    }


    // 编写小组简介
    function editGroupIntro() {
        $(".weTalkEditAnnounceTitle").html("简介修改")
        $(".weTalkEditAnnounceInput").attr({ "data-word": 30, "data-name": "简介" })
        $(".weTalkEditAnnounceView").show();
        $(".weTalkFunCover").show();
        $(".weTalkEditAnnounceInput").val($(".weTalkGroupIntroContent").html());
    }

    // 编写小组公告/简介取消
    function cancelEditAnnounce() {
        $(".weTalkEditAnnounceView").hide();
        $(".weTalkFunCover").hide();
    }

    // 编写小组公告/简介确定
    function confirmEditAnnounce() {
        $(".weTalkEditAnnounceView").hide();
        $(".weTalkFunCover").hide();
        let val = $(".weTalkEditAnnounceInput").val();
        // 调接口
        if ($(".weTalkGroupManageView").css("display") == "none") {
            // 编写公告
            editGroupInfo(data.friendId, "", "", "", val, "", data.token).then(res => {
                if (res.code == 1) {
                    showTip("更改成功");
                    $(".weTalkGroupAnnounceContent").html(val);
                    $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                        if ($(this).attr("data-teamId") == data.friendId) {
                            $(this).attr("data-notice", val);
                        }
                    })
                } else {
                    showTip("更改失败" + res.code);
                }
            }).catch(error => {
                showTip("更改失败" + error);
            })
        } else {
            // 编写简介
            editGroupInfo(data.friendId, "", val, "", "", "", data.token).then(res => {
                if (res.code == 1) {
                    showTip("更改成功");
                    $(".weTalkGroupIntroContent").html(val);
                    $(".weTalkChatItemList").children(".weTalkGroupItem").each(function () {
                        if ($(this).attr("data-teamId") == data.friendId) {
                            $(this).attr("data-intro", val);
                        }
                    })
                } else {
                    showTip("更改失败");
                }
            }).catch(error => {
                showTip("更改失败" + error);
            });
        }
        $(".weTalkEditAnnounceInput").val("")
    }
    // 加入小组方式
    function addGroupStyle() {
        if ($(this).children(".weTalkGroupRadioName").html() == "公开") {
            editGroupInfo(data.friendId, "", "", "", "", "0", data.token).then(res => {
                if (res.code == 1) {
                    showTip("更改成功")
                    $(this).children(".weTalkGroupRadio").css({ "background": "#944EEA" });
                    $(this).siblings().children(".weTalkGroupRadio").css({ "background": "#fff" });
                }
            });
        } else if ($(this).children(".weTalkGroupRadioName").html() == "需要审核") {
            editGroupInfo(data.friendId, "", "", "", "", "1", data.token).then(res => {
                if (res.code == 1) {
                    showTip("更改成功")
                    $(this).children(".weTalkGroupRadio").css({ "background": "#944EEA" });
                    $(this).siblings().children(".weTalkGroupRadio").css({ "background": "#fff" });
                }
            })
        }
    }

    // 渲染小组管理页的成员列表
    function showGroupMembers() {
        $(".weTalkGroupMemberLists").html("");
        data.groupMembers.forEach(item => {
            let weTalkGroupMemberItem = $(`
            <div class="weTalkGroupMemberItem">
                <img class="weTalkGroupMemberItemDel" src="./images/del1.png" />
                <img class="weTalkGroupMemberItemAvatar" />
                <div class="weTalkGroupMemberItemDeAvatar">${item.nickname.substring(0, 1)}</div>
                <div class="weTalkGroupMemberItemUname">${item.nickname}</div>
                <div class="weTalkGroupMemberItemUnameVip">${item.nickname}</div>
                <img class="weTalkGroupMemberItemSex"/>
            </div>
            `)

            if (item.avatar) {
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, "/")).show();
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemDeAvatar").hide();
            } else {
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemAvatar").hide().attr("src", "");
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemDeAvatar").show();
            }

            if (item.sex == 1) {
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemSex").attr("src", "./images/boy.png")
            } else if (item.sex == 2) {
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemSex").attr("src", "./images/girl.png")
            } else {
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemSex").hide();
            }

            if (item.vip == 1) {
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemUname").hide();
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemUnameVip").show();
            } else {
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemUname").show();
                weTalkGroupMemberItem.children(".weTalkGroupMemberItemUnameVip").hide();
            }

            // 自定义属性
            weTalkGroupMemberItem.attr("data-id", item.id);
            // 插入列表
            weTalkGroupMemberItem.appendTo(".weTalkGroupMemberLists");
        })
    }

    // 移入管理页面小组成员头像出现移除按钮
    function showDelMember() {
        $(this).children(".weTalkGroupMemberItemDel").show();
    }

    // 移出管理页面小组成员头像隐藏移除按钮
    function delDelMember() {
        $(this).children(".weTalkGroupMemberItemDel").hide();
    }

    // 移除某个小组成员
    function delgroupMember() {
        let id = $(this).parent().attr("data-id");
        $(".weTalkdelGroupUserConfirmTip").attr("data-id", id).show();
    }

    function cancelDelgroupMember() {
        $(".weTalkdelGroupUserConfirmTip").hide();
    }

    function confirmDelgroupMember() {
        let id = $(".weTalkdelGroupUserConfirmTip").attr("data-id");
        // 找到小组
        for (let j = 0; j < data.groupMembers.length; j++) {
            // 找到用户
            if (data.groupMembers[j].id == id) {
                // 调接口
                removeTeamUser(data.friendId, id, data.token).then(res => {
                    if (res.code == 1) {
                        showTip("删除成功")
                        // 删除该用户
                        data.groupMembers.splice(j, 1);
                        // 重新渲染
                        showGroupMembers();
                    } else if (res.code == 44444) {
                        showTkTip($(".weTalkGroupManageView"), res.message);
                    }
                });

            }
        }
        $(".weTalkdelGroupUserConfirmTip").hide();
    }

    // 小组待审核
    function showTestRes() {
        if ($(".weTalkWaitingTest").css("display") == "none") {
            // 渲染
            betestList();
            $(".weTalkRightItem").hide();
            $(".weTalkWaitingTest").show();
            $(".weTalkGroupHead").css({ "display": "flex", "width": "750px" });
        }
    }

    function hideTestRes() {
        showGroupManage();
        $(".weTalkRightItem").hide();
        $(".weTalkGroupHead").css({ "display": "flex", "width": "750px" });
        $(".weTalkGroupManageView").show();
    }

    // 获取审核列表数据
    function listReviewRequest(id) {
        listReview(id, data.Wcurrent, 10, data.token).then(res => {
            if (res.code == 1) {
                data.waitTest = res.data.records;
            }
        })
    }
    // 审核列表渲染
    function betestList() {
        $(".weTalkWaitingTestList").html("");
        data.waitTest.forEach(item => {
            let weTalkWaitingTestItem = $(`
            <div class="weTalkWaitingTestItem">
                <div class="weTalkWaitingTestItemL">
                    <img class="weTalkWaitingTestItemImg"/>
                    <div class="weTalkWaitingTestItemDeImg">${item.nickname.substring(0, 1)}</div>
                    <div class="weTalkWaitingTestItemInfo">
                        <div class="weTalkWaitingTestItemInfo1">
                            <div class="weTalkWaitingTestItemInfo1Name">${item.nickname}</div>
                            <div class="weTalkWaitingTestItemInfo1VipName">${item.nickname}</div>
                            <div class="weTalkWaitingTestItemInfoRequest">申请加入小组</div>
                        </div>
                        <div class="weTalkWaitingTestItemInfo2">
                            附言：${item.reason}
                        </div>
                    </div>
                    <img class="weTalkWaitingTestItemSex" src="./images/boy.png"/>
                </div>
                <div class="weTalkWaitingTestBtns">
                    <div class="weTalkBtn1 weTalkBtnqx weTalkWaitingTestBtn1">拒绝</div>
                    <div class="weTalkBtn2 weTalkBtnqd weTalkWaitingTestBtn2">通过</div>
                </div>
            </div>
        `);

            if (item.avatar) {
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemImg").attr("src", data.cdn + item.avatar).show();
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemDeImg").hide();
            } else {
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemImg").hide().attr("src", "");
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemDeImg").show();
            }

            if (item.sex == 1) {
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemSex").attr("src", "./images/boy.png")
            } else if (item.sex == 2) {
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemSex").attr("src", "./images/girl.png")
            }

            if (item.vip == 1) {
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemInfo").children(".weTalkWaitingTestItemInfo1").children(".weTalkWaitingTestItemInfo1Name").hide();
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemInfo").children(".weTalkWaitingTestItemInfo1").children(".weTalkWaitingTestItemInfo1VipName").show();
            } else {
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemInfo").children(".weTalkWaitingTestItemInfo1").children(".weTalkWaitingTestItemInfo1Name").show();
                weTalkWaitingTestItem.children(".weTalkWaitingTestItemL").children(".weTalkWaitingTestItemInfo").children(".weTalkWaitingTestItemInfo1").children(".weTalkWaitingTestItemInfo1VipName").hide();
            }
            // 自定义属性
            weTalkWaitingTestItem.attr("data-id", item.id)
            // dom
            weTalkWaitingTestItem.appendTo(".weTalkWaitingTestList");
        })

    }

    // 审核列表下一页/上一页
    function waitNextPage() {
        if (data.Wpages > data.Wcurrent) {
            data.Wcurrent++;
            listReviewRequest(id);
        } else {
            showTkTip($("."));
        }

    }

    function waitLastPage() {
        if (data.data.Wcurrent > 1) {
            data.Wcurrent--;
            listReviewRequest(id);
        } else {
            showTkTip($("."));
        }
    }

    // 同意/拒绝用户加入小组
    function agreeOdisUserToAdd() {
        let id = $(this).parent().parent().attr("data-id");
        for (let i = 0; i < data.waitTest.length; i++) {
            if (data.waitTest[i].id = id) {
                if ($(this).html() == "拒绝") {
                    review(id, 2, data.token).then(res => {
                        if (res.code == 1) {
                            // 数组
                            data.waitTest.splice(i, 1);
                            // dom
                            $(this).parent().parent().remove();
                        }
                    })
                } else {
                    review(id, 1, data.token).then(res => {
                        if (res.code == 1) {
                            // 数组
                            data.waitTest.splice(i, 1);
                            // dom
                            $(this).parent().parent().remove();
                        }
                    })
                }
                break;
            }
        }
    }

    // 获取小组/我的动态
    function getGroupMoment() {
        // 小组动态
        if (data.isShowMomentType == 2) {
            bloglistTeam(data.token, data.friendId, 1, 10).then(res => {
                if (res.code == 1) {
                    data.groupMoment = res.data.records;
                    // 渲染
                    groupOmymoment();
                }
            })
        } else if (data.isShowMomentType == 1) {
            // 我的动态
            bloglistMine(data.token, data.myMomentCur, 10,).then(res => {
                if (res.code = 1) {
                    data.myMoment = res.data.records;
                    // 渲染
                    groupOmymoment();
                }
            })
        } else if (data.isShowMomentType == 3) {
            listPartakeTeam(data.token, data.teamMomentCur, 10).then(res => {
                if (res.code = 1) {
                    console.log(res)
                    data.teamMoment = res.data.records;
                    // 渲染
                    groupOmymoment();
                }
            })
        }

    }

    // 在查看我的动态页面返回广场
    function backToSquare() {
        getRecommend();
    }

    // 小组/我的动态渲染
    function groupOmymoment() {
        let list;
        $(".myDynamicConditionLeft").html("")
        if (data.isShowMomentType == 2) {
            // 小组动态
            list = data.groupMoment;
            $(".myDynamicCondition").css("padding", "55px 20px 0").show();
        } else if (data.isShowMomentType == 1) {
            // 我的动态
            list = data.myMoment;
            $(".myDynamicCondition").css("padding", "15px 20px 0").show();
        } else if (data.isShowMomentType == 3) {
            list = data.teamMoment;
            console.log(list)
            $(".myDynamicCondition").css("padding", "15px 20px 0").show();
        }
        if (list && list.length > 0) {
            list.forEach((item) => {
                let myDynamicConditionLeftItem = $(`
                    <li class="myDynamicConditionLeftItem">
                        <div class="myDynamicConditionDetailsTop">
                            <p>
                                <span id="myDynamicConditionDetailsHead">
                                    <img class="myDynamicConditionDetailsHeadImg" />
                                    <span class="myDynamicConditionDetailsHeadDe">${item.nickname.substring(0, 1)}</span>
                                    <img class="myDynamicConditionDetailsHeadSex"/>
                                </span>
                                <span id="myDynamicConditionDetailsName">${item.nickname}</span>
                                <span id="myDynamicConditionDetailsNickName">${item.nickname}</span>
                                <span class="myDynamicConditionDetailsTopIcon"></span>
                            </p>
                            <p class="myDynamicConditionDetailsTopRight">
                                <span class="myDynamicConditionDetailsTopFrom">来自${item.team_title}</span>
                                <span class="weTalkManageMoment">管理</span>
                            </p>
                            <div class="weTalkManageMomentView">
                                <div class="weTalkManageMomentViewItem">置顶</div>
                                <div class="weTalkManageMomentViewItem">删除动态</div>
                                <div class="weTalkManageMomentViewItem">修改动态</div>
                            </div>
                        </div>
                        <p class="myDynamicConditionDetailsText">${item.content}</p>
                        <div class="myDynamicConditionDetailsImg">
                            <div class="myDynamicConditionDetailsImgOne">
                                <img src="" class="myDynamicConditionDetailsImg1">
                            </div>   
                            <div class="myDynamicConditionDetailsImgTwo">
                                <img src="" class="myDynamicConditionDetailsImg2">
                            </div>   
                            <div class="myDynamicConditionDetailsImgThree">
                                <img src="" class="myDynamicConditionDetailsImg3">
                            </div>   
                            <div class="myDynamicConditionDetailsImgFour">
                                <img src="" class="myDynamicConditionDetailsImg4">
                            </div>     
                            <div class="myDynamicConditionDetailsImgFive">
                                <img src="" class="myDynamicConditionDetailsImg5">
                            </div>                                   
                            <div class="myDynamicConditionDetailsImgSix">
                                <img src="" class="myDynamicConditionDetailsImg6">
                                <p class="myDynamicConditionDetailsMasking"></p>
                                <p class="myDynamicConditionDetailsNum">+<span id="myDynamicConditionDetailsNum"></span></p>
                            </div>
                        </div>
                        <div class="myDynamicConditionDetailsBootom">
                            <p>发表于：<span>${item.create_time}</span></p>
                            <div class="myDynamicConditionDetailsBootomRight">
                                <p class="myDynamicConditionDetailsComment">
                                    <img class="myDynamicConditionDetailsCommentImg" src="./images/xiaoxi.png">
                                    <span>${item.comment_count}</span>
                                </p>
                                <p class="myDynamicConditionDetailsZan">
                                    <img class="myDynamicConditionDetailsZanImg" src="./images/zan%20(1).png">
                                    <img class="myDynamicConditionDetailsZanImg1" src="./images/zan.png">
                                    <span>${item.like_count}</span>
                                </p>
                            </div>
                        </div>
                    </li>
                `);

                // 自定义属性
                myDynamicConditionLeftItem.attr("data-id", item.id);
                myDynamicConditionLeftItem.attr("data-top", item.is_top);
                myDynamicConditionLeftItem.attr("listPublicDetails", JSON.stringify(item));
                myDynamicConditionLeftItem.attr("blogId", item.id);

                // 是否置顶
                let myp = myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children("p").first();
                if (item.is_top == 1) {
                    myp.children(".myDynamicConditionDetailsTopIcon").html("置顶").show().
                        parent().parent().children(".weTalkManageMomentView").children(".weTalkManageMomentViewItem").first().html("取消置顶");
                } else {
                    myp.children(".myDynamicConditionDetailsTopIcon").hide();
                }

                // 是否有头像
                if (item.avatar) {
                    myp.children("#myDynamicConditionDetailsHead").children(".myDynamicConditionDetailsHeadImg").attr("src", data.cdn + item.avatar.replace(/\\/g, "/")).show();
                    myp.children("#myDynamicConditionDetailsHead").children(".myDynamicConditionDetailsHeadDe").hide();
                } else {
                    myp.children("#myDynamicConditionDetailsHead").children(".myDynamicConditionDetailsHeadImg").hide().attr("src", "");
                    myp.children("#myDynamicConditionDetailsHead").children(".myDynamicConditionDetailsHeadDe").show();
                }

                // 性别
                if (item.sex == 1) {
                    myp.children("#myDynamicConditionDetailsHead").children(".myDynamicConditionDetailsHeadSex").attr("src", "./images/boy.png")
                } else if (item.sex == 2) {
                    myp.children("#myDynamicConditionDetailsHead").children(".myDynamicConditionDetailsHeadSex").attr("src", "./images/girl.png")
                }

                // vip
                if (item.vip == 1) {
                    myp.children("#myDynamicConditionDetailsName").hide();
                    myp.children("#myDynamicConditionDetailsNickName").show();
                } else {
                    myp.children("#myDynamicConditionDetailsName").show();
                    myp.children("#myDynamicConditionDetailsNickName").hide();
                }

                // 图
                if (item.img1) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgOne").show()
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgOne").attr("style", "display: flex;")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children().children(".myDynamicConditionDetailsImg1").attr("src", data.cdn + item.img1)
                }
                if (item.img2) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgTwo").show()
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgTwo").attr("style", "display: flex;")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children().children(".myDynamicConditionDetailsImg2").attr("src", data.cdn + item.img2)
                }
                if (item.img3) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgThree").show()
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgThree").attr("style", "display: flex;")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children().children(".myDynamicConditionDetailsImg3").attr("src", data.cdn + item.img3)
                }
                if (item.img4) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgFour").show()
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgFour").attr("style", "display: flex;")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children().children(".myDynamicConditionDetailsImg4").attr("src", data.cdn + item.img4)
                }
                if (item.img5) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgFive").show()
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgFive").attr("style", "display: flex;")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children().children(".myDynamicConditionDetailsImg5").attr("src", data.cdn + item.img5)
                }
                if (item.img6) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").show()
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").attr("style", "display: flex;")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children().children(".myDynamicConditionDetailsImg6").attr("src", data.cdn + item.img6)
                }
                if (item.img7) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsMasking").css("display", "block")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsNum").children("#myDynamicConditionDetailsNum").text("1")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsNum").css("display", "block")
                }
                if (item.img8) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsMasking").css("display", "block")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsNum").children("#myDynamicConditionDetailsNum").text("2")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsNum").css("display", "block")
                }
                if (item.img9) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsMasking").css("display", "block")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsNum").children("#myDynamicConditionDetailsNum").text("3")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children(".myDynamicConditionDetailsImgSix").children(".myDynamicConditionDetailsNum").css("display", "block")
                }
                // 点击事件
                myDynamicConditionLeftItem.children(".myDynamicConditionDetailsImg").children().on("click", lookDynamicImg)
                if (item.is_like == 0) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsBootom").children(".myDynamicConditionDetailsBootomRight").children().children(".myDynamicConditionDetailsZanImg").css("display", "block")
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsBootom").children(".myDynamicConditionDetailsBootomRight").children().children(".myDynamicConditionDetailsZanImg").on("click", function () {
                        bloglike(data.token, item.id).then((res) => {
                            if (res.code == 1) {
                                $(this).hide()
                                $(this).next().show()
                                $(this).next().next().text(item.like_count * 1 + 1)
                            }
                        })
                    })
                } else if (item.is_like == 1) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsBootom").children(".myDynamicConditionDetailsBootomRight").children().children(".myDynamicConditionDetailsZanImg1").css("display", "block")
                }

                // 评论
                myDynamicConditionLeftItem.children(".myDynamicConditionDetailsBootom").children(".myDynamicConditionDetailsBootomRight").children(".myDynamicConditionDetailsComment").on("click", lookquareDynamicConditionComment)


                // 我的动态界面加载的动态一定有管理权限
                if (data.isShowMomentType == 1) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children(".myDynamicConditionDetailsTopRight").children(".weTalkManageMoment").show();
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children(".weTalkManageMomentView").children(".weTalkManageMomentViewItem").first().hide();
                } else if (data.isShowMomentType == 2) {
                    // 小组动态界面加载的动态 是否有管理权限 要么是admin，要么是自己的动态
                    if (item.user_id == data.id) {
                        // 如果是自己的动态且不是管理员
                        myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children(".myDynamicConditionDetailsTopRight").children(".weTalkManageMoment").show();
                        if (data.adminId != data.id) {
                            myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children(".weTalkManageMomentView").children(".weTalkManageMomentViewItem").first().hide();
                        }
                    } else if (data.adminId == data.id) {
                        // 如果是管理员
                        myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children(".myDynamicConditionDetailsTopRight").children(".weTalkManageMoment").show();
                        myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children(".weTalkManageMomentView").children(".weTalkManageMomentViewItem").last().hide();
                    } else {
                        // 你是小平民？
                        myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children(".myDynamicConditionDetailsTopRight").children(".weTalkManageMoment").hide();
                    }
                } else {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children(".myDynamicConditionDetailsTopRight").children(".weTalkManageMoment").hide();
                }
                if (data.isShowMomentType == 2) {
                    myDynamicConditionLeftItem.children(".myDynamicConditionDetailsTop").children("p").children(".myDynamicConditionDetailsTopFrom").hide();
                }
                myDynamicConditionLeftItem.appendTo(".myDynamicConditionLeft")
            })

        } else {
            $(".myDynamicConditionLeft").html(`
                <div class="myDynamicConditionLeftEmpty">
                    <img src="./images/empty.jpg"/>
                    <div>暂无动态内容，赶快发表第一篇吧~</div>
                </div>
            `)
            $(".myDynamicConditionLeftEmpty").css("display", "flex")
        }
    }

    // 小组/我的动态点赞
    function clickNice() {
        // 更新数组
        let id = $(this).parent().parent().parent().attr("data-id");
        for (let i = 0; i < data.groupMoment.length; i++) {
            if (data.groupMoment[i].id == id) {
                data.groupMoment[i].zan += 1;
                // 渲染dom
                $(this).children("span").html(data.groupMoment[i].zan);
                break;
            }
        }

    }
    // 小组/我的动态打开评论view
    function showCommentView() {
        // 更新数组
        let id = $(this).parent().parent().parent().attr("data-id"), comment;
        for (let i = 0; i < data.groupMoment.length; i++) {
            if (data.groupMoment[i].id == id) {
                comment = data.groupMoment[i].comment;
                break;
            }
        }
        // 渲染dom
    }

    // 显示管理某动态弹框
    function manageAMoment() {
        if ($(this).parent().next().css("display") == "none") {
            $(this).parent().next().show();
        } else {
            $(this).parent().next().hide();
        }
    }

    // 点击管理某动态弹框的某项
    function manageAMomentItem() {
        let val = $(this).html();
        switch (val) {
            case "取消置顶":
                editTop($(this).parent().parent().parent().attr("data-id"), 0, data.token).then(res => {
                    if (res.code == 1) {
                        showTkTip($(".myDynamicCondition"), "取消置顶成功");
                        // 重新渲染页面
                        showGroupMoment();
                        $(this).html("置顶")
                    }
                })
                break;
            case "置顶":
                editTop($(this).parent().parent().parent().attr("data-id"), 1, data.token).then(res => {
                    if (res.code == 1) {
                        showTkTip($(".myDynamicCondition"), "置顶成功");
                        // 重新渲染页面
                        showGroupMoment();
                        $(this).html("取消置顶")
                    }
                })
                break;
            case "删除动态":
                $('.opeMomentTip').children(".weTalkTitle").html("是否要删除该条动态");
                $('.opeMomentTip').show();
                $(".weTalkFunCover").show();
                data.momentId = $(this).parent().parent().parent().attr("data-id");
                break;
            case "修改动态":
                data.momentId = $(this).parent().parent().parent().attr("data-id");
                $(".issueDynamic").show()
                    .children(".issueDynamicAllBtn").children("p").children(".issueDynamicSub").html("确定");
                // 动态内容
                $(".shurukuang").html($(this).parent().parent().next().val());
                break;
        }
        // 关闭当前弹框
        $(this).parent().hide();
    }

    // 取消删除动态
    function canceldeleteBlog() {
        $(".opeMomentTip").hide();
        $(".weTalkFunCover").hide();
    }

    // 确定删除动态
    function deleteBlogMethod() {
        deleteBlog(data.momentId, data.token).then(res => {
            if (res.code == 1) {
                showTip("删除成功");
                // dom
                $(".myDynamicConditionLeft").children(".myDynamicConditionLeftItem").each(function () {
                    if ($(this).attr("data-id") == data.momentId) {
                        $(this).remove();
                    }
                    if ($(".myDynamicConditionLeft").children(".myDynamicConditionLeftItem").length == 0) {
                        $(".myDynamicConditionLeftEmpty").show();
                    }
                })
            } else {
                showTip("删除失败" + res.code);
            }
        }).catch(error => {
            showTip("删除失败" + error);
        })
        $(".opeMomentTip").hide();
        $(".weTalkFunCover").hide();
    }

    // 我的/小组创建新动态
    function creatOneMoment() {
        // 创建小组动态
        if ($(".myDynamicCondition").css("display") == "block" && data.isShowMomentType == 2) {
            $(".issueDynamic").show();
        } else {
            // 创建我的动态
            showChoosedGroupView();
        }
    }

    // 动态页面回到顶部
    function backMomentTop() {
        $(".myDynamicConditionLeft").scrollTop(0);

    }

    // 发布动态时弹框
    function showChoosedGroupView() {
        $(".selectGroupIssueUl").html("");
        // isLoad == true代表正在请求，如果正在请求，那么不会再次请求
        $(".selectGroupIssue").show();
        $(".weTalkFunCover").show();
        listMyTeam(data.token).then(res => {
            if (res.code == 1) {
                let list = res.data.adminTeam.concat(res.data.commonTeam);
                list.forEach(item => {
                    let selectGroup = $(`
                        <li class="selectGroup">
                            <p>
                                <img class="img" />
                                <span>${item.title}</span>
                            </p>
                            <input type="radio" name="choosedGroup" value="${item.id}"/>
                        </li>
                    `).appendTo(".selectGroupIssueUl");
                    selectGroup.children("p").children("img").attr("src", data.cdn + item.icon);
                    selectGroup.on("click", function () {
                        $(this).children("input").prop("checked", true)
                    })
                })
            } else {
                showTip("请求失败" + res.code)
            }
        })
    }

    // 发布动态时取消选择小组
    function selectGroupIssueCancel() {
        $(".selectGroupIssue").hide();
        $(".weTalkFunCover").hide();
    }

    // 发布动态时确定选择小组
    function selectGroupIssueSub() {
        if ($('input:radio[name="choosedGroup"]:checked').val() != undefined) {
            data.choosedGroupId = $('input:radio[name="choosedGroup"]:checked').val();
            $(".issueDynamic").show();
            $(".selectGroupIssue").hide();
            $(".weTalkFunCover").hide();
            $(".issueDynamicUpload").show()
        } else {
            showTkTip($(".selectGroupIssue"), "请选择小组")
        }
    }

    // tip
    function showTkTip(obj, val) {
        let tip = $(`
            <div class="weTalkTkTip">${val}</div>
        `).appendTo(obj).show();
        setTimeout(function () {
            tip.remove();
        }, 3000)
    }


    // 设置头像
    function setAvatar() {
        // 设置个人头像时，打开个人信息的遮罩层
        if ($(".weTalkPersonalInfo").css("display") == "block") {
            $(".weTalkPersonalInfoCover").show();
        }
        else if ($(".weTalkGroupManageView").css("display") == "block") {
            // 设置小组头像时，加全局遮罩
            $(".weTalkFunCover").show();
        }
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
            });
        }
    }

    // 处理最后一条消息
    function chuliLastMsg(msg,type){
        console.log("msg",msg)
        if(type == 1){
            return msg.replace(/\[emoj\]/g, "<img src='./images/face/").replace(/\[\/emoj\]/g, ".png'>").replace(/\\n/g, "<br>");
        }else if(type == 2){
            return "图片";
        }else if(type == 3){
            return "语音";
        }else if(type == 4){
            return "骰子";
        }else if(type == 5){
            return "剪刀石头布";
        }else if(type == 6){
            return "硬币";
        }
    }

    // 切换用户或小组时告知后端前一个已读
    function tellLastRead() {
        $(".weTalkChatItemList").children().each(function () {
            if ($(this).attr("data-ischoosed") == "b" && $(this).attr("data-teamId")) {
                console.log("小组消息已读")
                data.socket.emit('SYSTEM', {
                    type: 2,
                    teamId: data.friendId
                })
                data.haveSend = true;
                clearTimeout(data.sendTimer);
            }
            if ($(this).attr("data-ischoosed") == "b" && !$(this).attr("data-teamId")) {
                console.log("私聊消息已读")
                data.socket.emit('SYSTEM', {
                    type: 1,
                    targetUserId: data.friendId
                })
                data.haveSend = true;
                clearTimeout(data.sendTimer);
            }
        })
    }

    // input个数限制
    function limitInputWords() {
        let curLength = $(this).val().trim().length,
            name = $(this).attr("data-name"),
            word = $(this).attr("data-word") * 1;
        if (curLength > word) {
            $(this).val($(this).val().trim().substr(0, word))
            showTip(name + "字数不能超过" + word)
        }
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
        let three = document.getElementsByClassName('three');
        for (var i = 0; i < oNav.length; i++) {
            oNav[i].index = i;
            // console.log(oNav[i].index)
            oNav[i].onclick = function () {
                for (var i = 0; i < oNav.length; i++) {
                    oNav[i].id = '';
                    oDiv[i].style.display = "none";
                    one[i].style.display = "block";
                    two[i].style.display = "none";
                    three[i].style.display = "none";
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
            $(oNav[i]).on("mouseenter", function () {
                if ($(this).attr("id") == "act") {
                } else {
                    one[this.index].style.display = "none"
                    three[this.index].style.display = "block"
                }
            })
            $(oNav[i]).on("mouseleave", function () {
                if ($(this).attr("id") == "act") {
                } else {
                    three[this.index].style.display = "none";
                    one[this.index].style.display = "block"
                }
            })
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
        $(".writeQuareDynamicCondition").on("click", function () {
            // $(".issueDynamic").show()
            showChoosedGroupView();
        })
        $(".issueDynamicCancel").on("click", function () {
            $(".issueDynamic").hide()
            $(".shurukuang").val("")
            $(".shoWissueDynamic").empty()
            data.dynamicUploadImgList = []
            data.issueDynamicPic = []
            data.issueDynamicPicList = []
        })
        $(".issueDynamicSub").on("click", issueDynamicSub)
        $(".quareDynamicConditionGotop").on("click", function () {
            $(".quareDynamicConditionBottomLeft").scrollTop(0);
        })
        $("#foundMyGroup").on("click", function () {
            $(".searchWebsiteId").show()
            favorite(data.token).then((res) => {
                console.log(res)
                let list = res.data
                if (list.length > 0) {
                    $(".searchWebsiteIdResult").empty()
                    for (let i = 0; i < list.length; i++) {
                        resultList = $(
                            `
                            <li class="searchWebsiteIdDetails">
                                <p>
                                    <img src="./images/roomChat.png"> 
                                    <span>${list[i].title}</span>
                                </p>
                                <input type="radio" name="searchWebsiteType" value="${list[i].id}" />
                            </li>
                            `
                        ).prependTo($(".searchWebsiteIdResult"))
                        resultList.on("click", function () {
                            $(this).children("input").prop("checked", true)
                        })
                    }
                }
            })
            $(document).off("keyup").on("keyup", ".searchWebsiteId", function (event) {
                // console.log(1)
                if ($(".searchWebsiteId").css("display") == "block") {
                    if (event.keyCode == 13) {
                        searchWebsiteIdSearch()
                    }
                }
            })
        })
        $("#searchWebsiteIdSearch").on("click", searchWebsiteIdSearch)
        $(".searchWebsiteIdGo").on("click", function () {
            // console.log($('input:radio[name="searchWebsiteType"]:checked').val())
            data.grounpWebsiteid = $('input:radio[name="searchWebsiteType"]:checked').val()
            console.log(data.grounpWebsiteid)
            if (data.grounpWebsiteid == undefined) {
                $(".searchWebsiteIdHint").text("请选择所属聊天室")
                $(".searchWebsiteIdHint").show();
                setTimeout(function () {
                    $(".searchWebsiteIdHint").hide();
                }, 3000)
            } else {
                $(".searchWebsiteId").hide()
                $("#searchWebsiteIdInp").val("")
                $(".searchWebsiteIdResult").empty()
                $(`
                <li class="searchWebsiteIdResultStart">
                    <img src="images/ssempty.png" >
                </li>
                `).appendTo($(".searchWebsiteIdResult"))
                $(".establishGroup").show()
            }
        })
        $(".closeSearchWebsiteId").on("click", function () {
            $(".searchWebsiteId").hide()
            data.grounpWebsiteid = ""
            $("#searchWebsiteIdInp").val("")
            $(".searchWebsiteIdResult").empty()
            $(`
            <li class="searchWebsiteIdResultStart">
                    <img src="images/ssempty.png" >
            </li>
            `).appendTo($(".searchWebsiteIdResult"))
        })

        $("#establishGroupUpload").on("change", setAvatar)
        $(".establishGroupSub").on("click", establishGroupSub)
        $(".establishGroupCancel").on("click", function () {
            $("#establishGroupIptName").val("")
            $("#establishGroupIptIntro").val("")
            $(".establishGroupPic").hide()
            $(".establishGroupUpload").show()
            data.grounpWebsiteid = ""
            // $('input:radio[name="reviewState"]:checked').val("0")
            data.grounpFileName = ""
            $(".establishGroup").hide()
        })
        $("#closeEstablishGroupSucceed").on("click", function () {
            console.log(1)
            $(".establishGroupSucceed").hide()
        })
        $("#quickJoinGroup").on("click", function () {
            $(".quickJoin").show()
        })
        $(".closeQuickJoin").on("click", function () {
            $(".quickJoin").hide()
            $(".quickJoinIpt").val("")
            $(".quickJoinDetails").empty()
            $(`
            <div class="quickJoinDetailsStart">
                <img src="images/ssempty.png" >
            </div>
            `).appendTo($(".quickJoinDetails"))
        })
        $(".quickJoinBtn").on("click", quickJionSearch)
        $(".joinReasonCancel").on("click", function () {
            $(".joinReason").hide()
            $(".joinReasonInp").val("")
        })
        $(".joinReasonSub").on("click", function () {
            if ($(".joinReasonInp").val() == "") {
                showTkTip($(".joinReason"), "请输入加入理由")
            } else {
                joinTeam(data.token, data.jionGrounpId, $(".joinReasonInp").val()).then((res) => {
                    console.log(res)
                    if (res.code == 1) {
                        showTkTip($(".joinReason"), "申请成功")
                    } else if (res.code == 44444) {
                        showTkTip($(".joinReason"), "您已经加入该小组")
                    }
                })
            }

        })
        $("#searchGroupResultGoBack").on("click", function () {
            $(".searchGroupResult").hide()
        })
        $(".searchChatroomTitleRoom").on("click", function () {
            data.searchType = 1
            $(".searchChatroomTitleGroup").css({
                "color": "#333333",
            })
            $(".searchChatroomTitleRoom").css({
                "color": "#8E4BE0",
            })
        })
        $(".searchChatroomTitleGroup").on("click", function () {
            data.searchType = 2
            $(".searchChatroomTitleRoom").css({
                "color": "#333333",
            })
            $(".searchChatroomTitleGroup").css({
                "color": "#8E4BE0",
            })
        })
        $("#changeShowEstablishGroupPic").on("change", setAvatar)
        $("#issueDynamicUpload").on("change", function (event) {

            // console.log( $('.shangchuan'))
            // console.log($('.shangchuan')[0].scrollWidth)
            // console.log(event.currentTarget.files)
            data.issueDynamicFile = event.currentTarget.files[0]
            $("#issueDynamicUpload").val("")
            let filePath = data.issueDynamicFile.name;
            // let imgBase64 = ''; //存储图片的base64
            let fileFormat = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
            if (!fileFormat.match(/.png|.jpg|.jpeg|.bmp/)) {
                showTkTip($(".issueDynamic"), "格式错误,只能上传图片")
                return;
            }
            data.maxSize = 1 * 1000 * 1024;
            if (data.issueDynamicFile.size > data.maxSize) {
                // console.log(data.throwDriftBottleFile)
                compress(data.issueDynamicFile, check)
                $('.shangchuan').scrollLeft($('.shangchuan')[0].scrollWidth);
            } else {
                directTurnIntoBase64(data.issueDynamicFile, function (imgBase64) {
                    data.issueDynamicPic.push(imgBase64)
                    data.issueDynamicPicList.push(convertBase64UrlToFile(imgBase64, (new Date()).valueOf()))
                    shwoissueDynamicPic()
                    if (data.issueDynamicPicList.length == 9) {
                        $(".issueDynamicUpload").hide()
                    } else if (data.issueDynamicPicList.length < 9) {
                        $(".issueDynamicUpload").show()
                    }
                    $('.shangchuan').scrollLeft($('.shangchuan')[0].scrollWidth);
                });

            }
        })
        $(".closeLookDynamicConditionImg").on("click", function () {
            $(".lookDynamicConditionImg").hide()
            $(".weTalkRightmMasking").hide()
            $(".swiper-button-white").remove()
            data.lookDynamicImgList = []
        })
        $(".closeGroupSendComment").on("click", function () {
            $(".groupSendComment").hide()
            $(".groupSendCommentIpt").html("")
            $(".groupSendCommentContent").empty()
            $(".quareDynamicConditionBottomLeft").empty()
            if ($(".myDynamicCondition").css("display") == "block") {
                if (data.isShowMomentType == 2) {
                    showGroupMoment();
                } else if (data.isShowMomentType == 1) {
                    showMyMoment();
                } else {
                    getGroupInfoRequest()
                }
            } else {
                getbloglistPublic()
            }
        })
        $("#sendGroupComment").on("click", sendGroupComment)
        $(".hotGroupBottom").on("click", function () {
            getHeatList()
        })
        $(".dissolveTeamSub").on("click", function () {
            console.log(1)
            dissolveTeam(data.token, data.dissolveTeamId).then((res) => {
                console.log(res)
                if (res.code == 1) {
                    $(".dissolveTeam").hide()
                    showTip("解散小组成功")
                    getMyGrounp()
                }
            })
        })
        $(".dissolveTeamCancel").on("click", function () {
            $(".dissolveTeam").hide()
        })
        $(".quareDynamicConditionTopRightLeft").on("mouseover", function () {
            $(this).children("img").attr("src","../images/xiaozu2.png")
            $(this).children("span").css("color","#944EEA")
        });
        $(".quareDynamicConditionTopRightLeft").on("mouseleave", function () {
            $(this).children("img").attr("src","../images/xiaozu1.png")
            $(this).children("span").css("color","#666666")
        })
        $(".quareDynamicConditionTopRight").on("mouseover", function () {
            $(this).children("img").attr("src","../images/dongtai1.png")
            $(this).children("span").css("color","#944EEA")
        });
        $(".quareDynamicConditionTopRight").on("mouseleave", function () {
            $(this).children("img").attr("src","../images/dongtai.png")
            $(this).children("span").css("color","#666666")
        })
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
    function rightFriendSendMessage(event) {
        addUserMethod($(this).attr("data-friendUserId"), 2, 0)
        event.stopPropagation();

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
        $("#chatRoomContent").css({
            "display": "block"
        })
        $("#groupList").css({
            "display": "none"
        })
        dailyRecommend(data.token).then((res) => {
            // console.log(res)
            let details = res.data
            data.dailyRecommendWebid = details.id
            $("#dailyRecommendTitle").text(details.title)
            $(".dailyUpdateOnline").text(details.onlineUserNum)
            $("#dailyRecommendText").text(details.intro)
            $("#dailyRecommendImg").attr("src", data.cdn + details.icon)
            // 添加自定义属性
            $("#dailyRecommendBtn").attr("data-title", details.title);
            if (!details.intro) {
                $("#dailyRecommendText").hide()
            }
            $("#dailyRecommendBtn").on("click", dailyRecommendBtn);
        })
        favorite(data.token).then((res) => {
            let list = res.data
            // console.log(list)
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
                        <li class="myCollectChatRoom">
                            <img src="./images/roomChat.png"> 
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
                    weTalkChatroomItem.attr("data-title", list[i].title)
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
        changeRoomRequest($(this).parent().parent().attr("data-websiteId"), $(this).parent().parent().attr("data-title"))
    }
    function leftChatRoomSendMessage(event) {
        event.stopPropagation();
        event.preventDefault();
        // addQlMethod($(this).attr("data-websiteId"), 2);
        changeRoomRequest($(this).attr("data-websiteId"), $(this).attr("data-title"))
        // console.log("选择添加的群聊Id", $(this).attr("data-websiteId"))
    }

    function dailyRecommendBtn() {
        // console.log(data.dailyRecommendWebid)
        changeRoomRequest(data.dailyRecommendWebid, $(this).attr("data-title"));
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
        data.friendId = "发现";
        data.isPublic = 0;
        //回车搜索聊天室
        $(document).off("keyup").on("keyup", ".searchChatroom", function (event) {
            // console.log(1)
            if ($(".searchChatroom").css("display") == "block") {
                if (event.keyCode == 13) {
                    searchChatroomFind()
                }
            }
        });
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
                lifeRecommendDetails.attr("title", lifeList[i].title)
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
                playRecommendDetails.attr("title", playList[i].title)
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
                musicRecommendDetails.attr("title", musicList[i].title)
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
                newsRecommendDetails.attr("title", newsList[i].title)
                newsRecommendDetails.children("#hotAdd").on("click", hotAdd)
            }
        })
    }
    //热门推荐点击收藏
    function hotAdd() {
        let title = $(this).parent().attr("title")
        $("#searchChatroomInput").val(title)
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
        if (data.param == "") {
            $(".searchChatroomHint").show();
            setTimeout(function () {
                $(".searchChatroomHint").hide();
            }, 3000)
        } else {
            if (data.searchType == 1) {
                search(data.curren, 4, data.param, data.token).then((res) => {
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
                                    <p>${list[i].title} ——<span>在线人数（${list[i].onlineUserNum}）</span> <span>小组（${list[i].teamNum}）</span></p>
                                    <div>
                                        <button type="button" id="collectChatroomResultDetils">加入收藏</button>
                                        <button type="button" id="searchLookGroup">查看小组</button>
                                    </div>
                                </li>
                                `
                                ).appendTo($("#searchChatroomResultDetils"))
                                searchChatroomResultDetils.children().children("#collectChatroomResultDetils").on("click", collectChatroomResultDetils)
                                searchChatroomResultDetils.children().children("#searchLookGroup").on("click", searchLookGroup)
                                searchChatroomResultDetils.attr("websiteId", list[i].id)
                            }
                        }
                    }
                })
            } else if (data.searchType == 2) {
                $(".searchGroupResultCenter").empty()
                $(".searchGroupResult").show()
                console.log(2)
                searchTeam(data.token, 1, 6, data.param).then((res) => {
                    console.log(res)
                    let list = res.data.records
                    if (list.length == 0) {
                        $(`
                        <li class="searchGroupDetailsEmpty">
                            <div>
                                <img src="images/ssempty.png" >
                                <p>没有搜索到内容哦</p>
                            </div>
                        </li>
                        `).appendTo($(".searchGroupResultCenter"))
                    } else {
                        for (let i = 0; i < list.length; i++) {
                            searchList = $(
                                `
                    <li class="searchGroupDetails">
                        <p class="searchGroupDetailsTitle">${list[i].title}</p>
                        <div class="searchGroupDetailsContent">
                            <div class="searchGroupDetailsContentTop">
                                <img src="${data.cdn + list[i].icon}" class="searchGroupDetailsImg">
                                <div>
                                    <p id="searchGroupDetailsText">${list[i].intro}</p>
                                    <p class="searchGroupDetailsTwo">来自：<span>${list[i].websiteTitle}</span></p>
                                </div>
                            </div>
                            <div class="searchGroupDetailsBottom">
                                <p class="searchGroupDetailsBottomLeft"><img src="../images/qun.png"><span>${list[i].user_num}/${list[i].max_user_num}</span></p>
                                <p><button type="button" id="searchGroupDetailsBtn">+加入</button></p>
                            </div>
                        </div>
                    </li>
                        `
                            ).appendTo($(".searchGroupResultCenter"))
                            searchList.attr("team-id", list[i].id)
                            searchList.attr("reviewState-type", list[i].review_state)
                            searchList.children(".searchGroupDetailsContent").children(".searchGroupDetailsBottom").children().children("#searchGroupDetailsBtn").on("click", searchGroupDetailsBtn)
                        }
                    }
                })
            }

        }
    }

    //点击收藏收藏聊天室
    function collectChatroomResultDetils() {
        console.log($(this).parent().attr("websiteId"))
        let websiteId = $(this).parent().parent().attr("websiteId")
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
        data.isPublic = 0;
        $(".weTalkRightItem").hide()
        let fileName = "driftBottle"
        loadJS('./js/driftBottle/' + fileName + '.js', function () {
            bottleJs()
        })
        let fileName2 = "echarts"
        loadJS('./js/' + fileName2 + '.js', function () {
            let fileName1 = "china"
            loadJS('./js/' + fileName1 + '.js', function () { })
        })

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
                loginType();
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
            loginType();
            loadLoginView();
        }
    };

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

    // 聊天室加载初始化
    function loadChatRoomInitial() {
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
    }
    //小组
    function getRecommend() {
        data.friendId = "小组";
        // $("#recommendDetails").empty()
        $(".weTalkRightItem").hide()
        $("#quareDynamicCondition").show()
        $("#recommend").css({
            "color": "#944EEA",
            "border-bottom": "4px solid #944EEA",
        })
        $("#collect").css({
            "color": "#999999",
            "border-bottom": "none",
        })
        $("#groupList").css({
            "display": "block"
        })
        $("#chatRoomContent").css({
            "display": "none"
        })
        $(".quareDynamicConditionBottomLeft").empty()
        getbloglistPublic()
        getMyGrounp()
        getHeatList()
    }

    function getHeatList() {
        $(".hotGroupListOut").empty()
        heatTeam(data.token).then((res) => {
            console.log(res)
            let list = res.data
            for (let i = 0; i < list.length; i++) {
                heatList = $(`
                <li class="hotGroupList">
                    <img src="${data.cdn + list[i].icon}"/>
                    <span class="hotGroupListText">${list[i].title}</span>
                    <div class="hotGroupDetails">
                        <p class="hotGroupDetailsTitle">${list[i].title}</p>
                        <div class="hotGroupDetailsContent">
                            <div class="hotGroupDetailsContentTop">
                                <img src="${data.cdn + list[i].icon}" class="hotGroupDetailsImg">
                                <div>
                                    <p id="hotGroupDetailsText">${list[i].intro}</p>
                                    <p class="hotGroupDetailsTwo">来自：<span>${list[i].websiteTitle}</span></p>
                                </div>
                            </div>
                            <div class="hotGroupDetailsBottom">
                                <p class="hotGroupDetailsBottomLeft"><img src="../images/qun.png"><span>${list[i].user_num}/${list[i].max_user_num}</span></p>
                                <p><button type="button" id="hotGroupDetailsBtn">+加入</button></p>
                            </div>
                        </div>
                    </div>
                </li>
                
                `).appendTo(".hotGroupListOut")
                heatList.attr("jionGrounpState", list[i].review_state)
                heatList.attr("jionGrounpId", list[i].id)
                heatList.off("contextmenu").on("mouseover", function () {
                    $(this).children(".hotGroupDetails").show()
                });
                heatList.off("mouseleave").on("mouseleave", function () {
                    $(this).children(".hotGroupDetails").hide()
                })
                heatList.children(".hotGroupDetails").children(".hotGroupDetailsContent").children(".hotGroupDetailsBottom").children().children("#hotGroupDetailsBtn").on("click", function () {
                    let jionGrounpId = $(this).parent().parent().parent().parent().parent().attr("jionGrounpId")
                    data.jionGrounpId = jionGrounpId
                    let jionGrounpState = $(this).parent().parent().parent().parent().parent().attr("jionGrounpState")
                    if (jionGrounpState == 0) {
                        joinTeam(data.token, data.jionGrounpId, "").then((res) => {
                            console.log(res)
                            if (res.code == 1) {
                                getMyGrounp()
                                showTip("加入成功")
                            } else if (res.code == 44444) {
                                showTip("您已加入该小组")
                            }
                        })
                    } else if (jionGrounpState == 1) {
                        $(".joinReason").show()
                    }
                })
            }
        })
    }
    function getbloglistPublic() {
        console.log(1)
        bloglistPublic(data.token, data.bloglistPublicType, 50).then((res) => {
            let listPublic
            console.log(res)
            let list = res.data.records
            if (list.length == 0) {
                $(".quareDynamicConditionBottomLeft").heml(
                    $(`
                        <div class="listPublicEmpty">
                        <div>
                            <img src="./images/empty.jpg"/>
                            <p>暂无动态内容，赶快发表第一篇吧~</p>
                        </div>
                        </div>
                   `)
                )
            } else {
                for (let i = 0; i < list.length; i++) {
                    list[i].create_time = list[i].create_time.substring(0, 10)
                    listPublic = $(
                        `
                  <li>
                    <div class="quareDynamicConditionDetailsTop">
                        <div>
                            <div class="groupAvatar">
                                <img class="groupBoy"></img>
                                <div class="groupItemDeAvatar">${list[i].nickname.charAt(0)}</div>
                                <img id="quareDynamicConditionDetailsHead"/>
                            </div>
                            <span id="quareDynamicConditionDetailsName">${list[i].nickname}</span>
                        </div>
                        <p class="">
                            来自：<span>${list[i].team_title}</span>
                        </p>
                    </div>
                    <p class="quareDynamicConditionDetailsText">
                        ${list[i].content}
                    </p>
                    <div class="quareDynamicConditionDetailsImg">
                        <div class="quareDynamicConditionDetailsImgOne">
                            <img src="" class="quareDynamicConditionDetailsImg1">
                        </div>   
                        <div class="quareDynamicConditionDetailsImgTwo">
                            <img src="" class="quareDynamicConditionDetailsImg2">
                        </div>   
                        <div class="quareDynamicConditionDetailsImgThree">
                            <img src="" class="quareDynamicConditionDetailsImg3">
                        </div>   
                        <div class="quareDynamicConditionDetailsImgFour">
                            <img src="" class="quareDynamicConditionDetailsImg4">
                        </div>                    
                        <div class="quareDynamicConditionDetailsImgFive">
                            <img src="" class="quareDynamicConditionDetailsImg5">
                            <p class="quareDynamicConditionDetailsMasking"></p>
                            <p class="quareDynamicConditionDetailsNum">+<span id="quareDynamicConditionDetailsNum"></span></p>
                        </div>
                    </div>
                    <div class="quareDynamicConditionDetailsBootom">
                        <p>发表于：<span>${list[i].create_time}</span></p>
                        <div class="quareDynamicConditionDetailsBootomRight">
                            <p class="quareDynamicConditionDetailsComment"><img src="../images/xiaoxi.png"><span>${list[i].comment_count}</span></p>
                            <p>
                                <img src="../images/zan%20(1).png" id="quareDynamicConditionLike">
                                <img src="../images/zan.png" id="quareDynamicConditionAlreadyLike">
                                <span class="quareDynamicConditionNum">${list[i].like_count}</span>
                            </p>
                        </div>
                    </div>
                </li>
                `
                    ).appendTo($(".quareDynamicConditionBottomLeft"))
                    if (list[i].avatar) {
                        listPublic.children(".quareDynamicConditionDetailsTop").children().children(".groupAvatar").children(".groupItemDeAvatar").hide();
                        listPublic.children(".quareDynamicConditionDetailsTop").children().children(".groupAvatar").children("#quareDynamicConditionDetailsHead").attr({
                            "src": data.cdn + list[i].avatar
                        }).show();
                    } else {
                        listPublic.children(".quareDynamicConditionDetailsTop").children().children(".groupAvatar").children(".groupItemDeAvatar").show();
                        listPublic.children(".quareDynamicConditionDetailsTop").children().children(".groupAvatar").children("#quareDynamicConditionDetailsHead").hide();
                    }
                    if (list[i].vip == 1) {
                        listPublic.children(".quareDynamicConditionDetailsTop").children().children("#quareDynamicConditionDetailsName").css("color", "red");
                    }
                    if (list[i].sex == 2) {
                        listPublic.children(".quareDynamicConditionDetailsTop").children().children(".groupAvatar").children(".groupBoy").attr({
                            "src": './images/girl.png'
                        }).show();
                    } else {
                        listPublic.children(".quareDynamicConditionDetailsTop").children().children(".groupAvatar").children(".groupBoy").attr({
                            "src": './images/boy.png'
                        }).show();
                    }
                    if (list[i].img1) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgOne").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgOne").attr("style", "display: flex;")
                        listPublic.children(".quareDynamicConditionDetailsImg").children().children(".quareDynamicConditionDetailsImg1").attr("src", data.cdn + list[i].img1)
                    }
                    if (list[i].img2) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgTwo").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgTwo").attr("style", "display: flex;")
                        listPublic.children(".quareDynamicConditionDetailsImg").children().children(".quareDynamicConditionDetailsImg2").attr("src", data.cdn + list[i].img2)
                    }
                    if (list[i].img3) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgThree").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgThree").attr("style", "display: flex;")
                        listPublic.children(".quareDynamicConditionDetailsImg").children().children(".quareDynamicConditionDetailsImg3").attr("src", data.cdn + list[i].img3)
                    }
                    if (list[i].img4) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFour").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFour").attr("style", "display: flex;")
                        listPublic.children(".quareDynamicConditionDetailsImg").children().children(".quareDynamicConditionDetailsImg4").attr("src", data.cdn + list[i].img4)
                    }
                    if (list[i].img5) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").attr("style", "display: flex;")
                        listPublic.children(".quareDynamicConditionDetailsImg").children().children(".quareDynamicConditionDetailsImg5").attr("src", data.cdn + list[i].img5)
                    }
                    if (list[i].img6) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsMasking").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsNum").children("#quareDynamicConditionDetailsNum").text("1")
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsNum").show()
                    }
                    if (list[i].img7) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsMasking").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsNum").children("#quareDynamicConditionDetailsNum").text("2")
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsNum").show()
                    }
                    if (list[i].img8) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsMasking").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsNum").children("#quareDynamicConditionDetailsNum").text("3")
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsNum").show()
                    }
                    if (list[i].img9) {
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsMasking").show()
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsNum").children("#quareDynamicConditionDetailsNum").text("4")
                        listPublic.children(".quareDynamicConditionDetailsImg").children(".quareDynamicConditionDetailsImgFive").children(".quareDynamicConditionDetailsNum").show()
                    }
                    if (list[i].is_like == 0) {
                        listPublic.children(".quareDynamicConditionDetailsBootom").children(".quareDynamicConditionDetailsBootomRight").children().children("#quareDynamicConditionLike").show()
                        listPublic.children(".quareDynamicConditionDetailsBootom").children(".quareDynamicConditionDetailsBootomRight").children().children("#quareDynamicConditionLike").on("click", function () {
                            bloglike(data.token, list[i].id).then((res) => {
                                console.log(res)
                                if (res.code == 1) {
                                    $(this).hide()
                                    $(this).next().show()
                                    $(this).next().next().text(parseInt($(this).next().next().text()) + 1)
                                }
                            })
                        })
                    } else if (list[i].is_like == 1) {
                        listPublic.children(".quareDynamicConditionDetailsBootom").children(".quareDynamicConditionDetailsBootomRight").children().children("#quareDynamicConditionAlreadyLike").show()
                    }
                    listPublic.attr("listPublicDetails", JSON.stringify(list[i]))
                    listPublic.attr("blogId", list[i].id)
                    listPublic.children(".quareDynamicConditionDetailsImg").children().on("click", lookDynamicImg)
                    listPublic.children(".quareDynamicConditionDetailsBootom").children(".quareDynamicConditionDetailsBootomRight").children(".quareDynamicConditionDetailsComment").on("click", lookquareDynamicConditionComment)
                }

            }
            let pages = res.data.pages
            let current = res.data.current
            if (pages > current) {
                $(`
                <li id="quareDynamicConditionBottomLeftFooter">
                    加载更多
                </li>
                `).appendTo($(".quareDynamicConditionBottomLeft"))
            }
            if (pages == current) {
                $("#quareDynamicConditionBottomLeftFooter").remove();
            }
            $("#quareDynamicConditionBottomLeftFooter").on("click", function () {
                data.bloglistPublicType = data.bloglistPublicType + 1
                getbloglistPublic()
            })
        })
    }
    function lookDynamicImg() {
        data.lookDynamicImgList = []
        $(".swiper-wrapper").empty()
        let obj = JSON.parse($(this).parent().parent().attr("listPublicDetails"))
        if (obj.img1) {
            data.lookDynamicImgList.push(obj.img1)
        }
        if (obj.img2) {
            data.lookDynamicImgList.push(obj.img2)
        }
        if (obj.img3) {
            data.lookDynamicImgList.push(obj.img3)
        }
        if (obj.img4) {
            data.lookDynamicImgList.push(obj.img4)
        }
        if (obj.img5) {
            data.lookDynamicImgList.push(obj.img5)
        }
        if (obj.img6) {
            data.lookDynamicImgList.push(obj.img6)
        }
        if (obj.img7) {
            data.lookDynamicImgList.push(obj.img7)
        }
        if (obj.img8) {
            data.lookDynamicImgList.push(obj.img8)
        }
        if (obj.img9) {
            data.lookDynamicImgList.push(obj.img9)
        }
        let list = data.lookDynamicImgList
        for (let i = 0; i < list.length; i++) {
            $(`
              <li class="swiper-slide"><img src="${data.cdn + list[i]}"></img></li>
            `).appendTo($(".swiper-wrapper"))
        }
        $(`
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
       `).appendTo($(".gallery-top"))
        $(".weTalkRightmMasking").show()
        $(".lookDynamicConditionImg").show()
        let galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 9,
            slidesPerView: 9,
            freeMode: true,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
        });
        let galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
    }

    function getMyGrounp() {
        $("#adminTeam").empty()
        $("#commonTeam").empty()
        listMyTeam(data.token).then((res) => {
            let adminTeamList = res.data.adminTeam
            let commonTeamList = res.data.commonTeam
            if (adminTeamList.length == 0) {
                $(`
                <li class="teamListEmpty">
                    <img src="./images/empty.jpg" >
                    <p>您还没有创建过小组</p>
                </div>
                </li>
                `).appendTo($("#adminTeam"))
            } else {
                for (let i = 0; i < adminTeamList.length; i++) {
                    adminTeam = $(
                        `
                    <li class="groupListContent">
                        <img src="${data.cdn + adminTeamList[i].icon}" class="groupListContentImg">
                        <p>${adminTeamList[i].title}</p>
                        <div class="weTalkChatroomRight">
                            <p id="goGroup">进入小组</p>
                            <p id="dissolveGroup">解散小组</p>
                        </div>
                    </li>
                    `
                    ).prependTo($("#adminTeam"))
                    // console.log(adminTeamList[i].id)
                    adminTeam.attr("data-id", adminTeamList[i].id)
                    adminTeam.off("click").on("click", getadminTeam)
                    adminTeam.off("contextmenu").on("contextmenu", function () {
                        if ($(this).children(".weTalkChatroomRight").css("display") == "none") {
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
                    });
                }

                adminTeam.off("mouseleave").on("mouseleave", function () {
                    if ($(this).children(".weTalkChatroomRight").css("display") == "block") {
                        $(this).children(".weTalkChatroomRight").css({
                            "display": "none"
                        })
                    }
                })
                adminTeam.children(".weTalkChatroomRight").children("#goGroup").off("click").on("click", function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    addGroupMethod($(this).parent().parent().attr("data-id"))
                });
                adminTeam.children(".weTalkChatroomRight").children("#dissolveGroup").on("click", function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    data.dissolveTeamId = $(this).parent().parent().attr("data-id")
                    $(".dissolveTeam").show()

                });
            }
            if (commonTeamList.length == 0) {
                $(`
                <li class="teamListEmpty">
                    <img src="./images/empty.jpg" >
                    <p>您还没有加入过小组</p>
                </div>
                </li>
                `).appendTo($("#commonTeam"))
            } else {
                for (let i = 0; i < commonTeamList.length; i++) {
                    // console.log(adminTeamList[i])
                    commonTeam = $(
                        `
                <li class="groupListContent">
                    <img src="${data.cdn + commonTeamList[i].icon}" class="groupListContentImg">
                    <p>${commonTeamList[i].title}</p>
                    <div class="weTalkChatroomRight">
                        <p id="goGroup">进入小组</p>
                        <p id="quitGroup">退出小组</p>
                    </div>
                </li>
                `
                    ).prependTo($("#commonTeam"))
                    console.log(commonTeamList[i].id)
                    commonTeam.attr("commontData-id", commonTeamList[i].id)
                    commonTeam.off("click").on("click", getcommonTeam)
                    commonTeam.off("contextmenu").on("contextmenu", function () {
                        if ($(this).children(".weTalkChatroomRight").css("display") == "none") {
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
                    });
                    commonTeam.off("mouseleave").on("mouseleave", function () {
                        if ($(this).children(".weTalkChatroomRight").css("display") == "block") {
                            $(this).children(".weTalkChatroomRight").css({
                                "display": "none"
                            })
                        }
                    })
                    commonTeam.children(".weTalkChatroomRight").children("#goGroup").off("click").on("click", function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        addGroupMethod($(this).parent().parent().attr("commontData-id"))
                    });
                    commonTeam.children(".weTalkChatroomRight").children("#quitGroup").on("click", function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        let id = $(this).parent().parent().attr("commontData-id")
                        quitGroup(data.token, id).then((res) => {
                            if (res.code == 1) {
                                showTip("退出小组成功")
                                getMyGrounp()
                            }
                        })
                    });
                }
            }
        })
    }
    function lookquareDynamicConditionComment() {
        let blogId = $(this).parent().parent().parent().attr("blogId")
        data.sendBlogId = blogId
        $(".groupSendComment").show()
        getBlogListComment(blogId)
    }
    function getBlogListComment(blogId) {
        blogListComment(data.token, blogId, 1, 30).then((res) => {
            let list = res.data.records
            console.log(list)
            if (list.length > 0) {
                for (let i = 0; i < list.length; i++) {
                    list[i].create_time = list[i].create_time.substring(0, 10)
                    groupSendCommentDetails = $(`
                    <li class="groupSendCommentDetails">
                        <div class="groupSendCommentDetailsTop">
                            <div>
                                <div class="groupAvatar">
                                    <img class="groupBoy"></img>
                                    <div class="groupItemDeAvatar">${list[i].nickname.charAt(0)}</div>
                                    <img class="groupUserAvatar">
                                </div>
                                <span class="groupSendCommentDetailsName">${list[i].nickname}</span>
                            </div>
                            <p>${list[i].create_time}</p>
                        </div>
                        <p>${list[i].content}</p>
                    </li>
                    `).appendTo($(".groupSendCommentContent"))
                    if (list[i].avatar) {
                        groupSendCommentDetails.children(".groupSendCommentDetailsTop").children().children(".groupAvatar").children(".groupItemDeAvatar").hide();
                        groupSendCommentDetails.children(".groupSendCommentDetailsTop").children().children(".groupAvatar").children(".groupUserAvatar").attr({
                            "src": data.cdn + list[i].avatar
                        }).show();
                    } else {
                        groupSendCommentDetails.children(".groupSendCommentDetailsTop").children().children(".groupAvatar").children(".groupItemDeAvatar").show();
                        groupSendCommentDetails.children(".groupSendCommentDetailsTop").children().children(".groupAvatar").children(".groupUserAvatar").hide();
                    }
                    if (list[i].vip == 1) {
                        groupSendCommentDetails.children(".groupSendCommentDetailsTop").children().children(".groupSendCommentDetailsName").css("color", "red");
                    }
                }

            }

        })
    }
    function sendGroupComment() {
        let content = $(".groupSendCommentIpt").html()
        if (content == "") {
            showTkTip($(".groupSendComment"), "请输入评论内容")
        } else {
            blogpostComment(data.token, data.sendBlogId, content).then((res) => {
                console.log(res)
                if (res.code == 1) {
                    $(".groupSendCommentIpt").html('')
                    showTkTip($(".groupSendComment"), "评论成功")
                    $(".groupSendCommentContent").empty()
                    getBlogListComment(data.sendBlogId)
                }
            })
        }
    }
    function getadminTeam() {
        // console.log($(this).attr("data-id"))
        console.log(1)
        addGroupMethod($(this).attr("data-id"));
        // console.log("teamId", $(this).attr("data-id"))
    }
    function getcommonTeam() {
        // console.log($(this).attr("commontData-id"))
        addGroupMethod($(this).attr("commontData-id"));

    }
    function searchWebsiteIdSearch() {
        let param = $("#searchWebsiteIdInp").val()
        if (param == "") {
            $(".searchWebsiteIdHint").text("请输入要搜索的聊天室")
            $(".searchWebsiteIdHint").show();
            setTimeout(function () {
                $(".searchWebsiteIdHint").hide();
            }, 3000)
        } else {
            $(".searchWebsiteIdResult").empty()
            search(1, 100, param, data.token).then((res) => {
                console.log(res)
                let list = res.data.records
                if (list.length == 0) {
                    $(`
                <li class="searchWebsiteIdResultEmpty">
                    <div>
                        <img src="images/ssempty.png" >
                        <p>没有搜索到内容哦</p>
                    </div>
                </li>
                    `).prependTo($(".searchWebsiteIdResult"))
                } else {
                    let resultList
                    for (let i = 0; i < list.length; i++) {
                        console.log(list[i])
                        resultList = $(
                            `
                        <li class="searchWebsiteIdDetails">
                            <p>
                                <img src="./images/roomChat.png"> 
                                <span>${list[i].title}</span>
                            </p>
                            <input type="radio" name="searchWebsiteType" value="${list[i].id}" />
                        </li>
                        `
                        ).prependTo($(".searchWebsiteIdResult"))
                        resultList.on("click", function () {
                            $(this).children("input").prop("checked", true)
                        })
                    }
                }
            })
        }
    }
    async function issueDynamicSub() {
        let content = $(".shurukuang").val()
        let isPublic = ""
        if ($('.issueDynamic-checkbox')[0].checked) {
            isPublic = 1
        } else {
            isPublic = 0
        }
        console.log(content)
        if (content == "") {
            $(".issueDynamicHint").show();
            setTimeout(function () {
                $(".issueDynamicHint").hide();
            }, 3000)
        } else {
            await dynamicUpload()
            let teamId;
            if ($(".myDynamicCondition").css("display") == "block" && data.isShowMomentType == 2) {
                teamId = data.friendId;
            } else {
                teamId = data.choosedGroupId;
            }
            if ($(this).html() == "提交") {
                console.log(data.dynamicUploadImgList)
                blogpostBlog(data.token, teamId, content, data.dynamicUploadImgList.join(','), isPublic).then((res) => {
                    console.log(res)
                    if (res.code == 1) {
                        $(".issueDynamic").hide()
                        $(".shoWissueDynamic").empty()
                        data.issueDynamicPic = []
                        data.dynamicUploadImgList = []
                        data.issueDynamicPicList = []
                        console.log(data.dynamicUploadImgList)
                        // 打开的是我的动态页面
                        if ($(".myDynamicCondition").css("display") == "block" && data.isShowMomentType == 1) {
                            showMyMoment();
                        } else if ($("#quareDynamicCondition").css("display") == "block") {
                            // 广场页面
                            $(".quareDynamicConditionBottomLeft").empty()
                            getbloglistPublic();

                        } else {
                            // 小组页面
                            if (data.isShowMomentType == 3) {
                                console.log(3)
                                getGroupInfoRequest()
                            } else if (data.isShowMomentType == 2) {
                                showGroupMoment();
                            } else {
                                showMyMoment();
                            }

                        }
                        $(".shurukuang").val("")
                    }
                })
            } else if ($(this).html() == "确定") {
                updateBlog(data.momentId, content, data.dynamicUploadImgList.join(','), isPublic, data.token).then(res => {
                    if (res.code == 1) {
                        $(".issueDynamic").hide()
                        $(".shoWissueDynamic").empty()
                        data.issueDynamicPic = []
                        data.dynamicUploadImgList = []
                        data.issueDynamicPicList = []
                        // 打开的是我的动态页面
                        if ($(".myDynamicCondition").css("display") == "block" && data.isShowMomentType == 1) {
                            showMyMoment();
                        } else if ($("#quareDynamicCondition").css("display") == "block") {
                            // 广场页面
                            $(".quareDynamicConditionBottomLeft").empty()
                            getbloglistPublic();
                        } else {
                            // 小组页面
                            showGroupMoment();
                        }
                        $(".shurukuang").val("")
                        showTkTip($(".myDynamicCondition"), "更新成功")
                    } else {
                        showTkTip($(".myDynamicCondition"), `更新失败${res.code}`)
                    }
                })
            }
        }

    }
    function establishGroupSub() {
        let websiteId = data.grounpWebsiteid
        let tiitle = $("#establishGroupIptName").val()
        let intro = $("#establishGroupIptIntro").val()
        let icon = data.grounpFileName
        let reviewState = $('input:radio[name="reviewState"]:checked').val()
        if (tiitle == "") {
            $(".establishGroupHint").text("请输入小组名称")
            $(".establishGroupHint").show();
            setTimeout(function () {
                $(".establishGroupHint").hide();
            }, 3000)
        } else if (intro == "") {
            $(".establishGroupHint").text("请输入小组简介")
            $(".establishGroupHint").show();
            setTimeout(function () {
                $(".establishGroupHint").hide();
            }, 3000)
        } else if (icon == "") {
            $(".establishGroupHint").text("请上传小组头像")
            $(".establishGroupHint").show();
            setTimeout(function () {
                $(".establishGroupHint").hide();
            }, 3000)
        } else {
            addTeam(data.token, websiteId, tiitle, intro, icon, reviewState).then((res) => {
                console.log(res)
                if (res.code == 1) {
                    $("#establishGroupIptName").val("")
                    $("#establishGroupIptIntro").val("")
                    data.grounpWebsiteid = ""
                    // $('input:radio[name="reviewState"]:checked').val("0")
                    data.grounpFileName = ""
                    $(".establishGroup").hide()
                    $(".establishGroupPic").hide()
                    $(".establishGroupUpload").show()
                    getMyGrounp()
                    $(".establishGroupSucceed").show()
                }
            })
        }
    }

    function quickJionSearch() {
        $(".quickJoinDetails").empty()
        let externalId = $(".quickJoinIpt").val()
        console.log(externalId)
        quickGetTeam(data.token, externalId).then((res) => {
            console.log(res)
            if (res.code == 40404) {
                $(`
                <div class="quickJoinDetailsEmpty">
                    <div>
                        <img src="images/ssempty.png" >
                        <p>没有搜索到内容哦</p>
                    </div>
                </div>
                `).appendTo($(".quickJoinDetails"))
            } else if (res.code == 1) {
                let details = res.data
                data.jionGrounpId = details.id
                data.jionGrounpState = details.review_state
                console.log(details)
                $(`
                <div class="quickSearchGroupDetails">
                    <p class="quickSearchGroupDetailsTitle">${details.title}</p>
                    <div class="quickSearchGroupDetailsContent">
                        <div class="quickSearchGroupDetailsContentTop">
                            <img src="${data.cdn + details.icon}" class="quickSearchGroupDetailsImg">
                            <div>
                                <p id="quickSearchGroupDetailsText">${details.intro}</p>
                                <p class="quickSearchGroupDetailsTwo">来自：<span>${details.websiteTitle}</span></p>
                            </div>
                        </div>
                        <div class="quickSearchGroupDetailsBottom">
                            <p class="quickSearchGroupDetailsBottomLeft"><img src="../images/qun.png"><span>${details.user_num}/${details.max_user_num}</span></p>
                            <p><button type="button" id="quickSearchGroupDetailsBtn">+加入</button></p>
                        </div>
                    </div>
                </div>
                `).appendTo($(".quickJoinDetails"))
                $("#quickSearchGroupDetailsBtn").on("click", quickJionGroup)

            }
        })
    }
    function quickJionGroup() {
        console.log(data.jionGrounpId)
        console.log(data.jionGrounpState)
        if (data.jionGrounpState == 0) {
            joinTeam(data.token, data.jionGrounpId, "").then((res) => {
                console.log(res)
                if (res.code == 1) {
                    getMyGrounp()
                    $(".quickJoin").hide()
                    $(".quickJoinHint").text("加入成功")
                    $(".quickJoinHint").show();
                    setTimeout(function () {
                        $(".quickJoinHint").hide();
                    }, 3000)
                } else if (res.code == 44444) {
                    $(".quickJoinHint").text("您已加入该小组")
                    $(".quickJoinHint").show();
                    setTimeout(function () {
                        $(".quickJoinHint").hide();
                    }, 3000)
                }
            })
        } else if (data.jionGrounpState == 1) {
            $(".joinReason").show()
        }
    }
    function searchLookGroup() {
        $(".searchGroupResultCenter").empty()
        let websiteId = $(this).parent().parent().attr("websiteId")
        console.log(websiteId)
        $(".searchGroupResult").show()
        listByWebsiteTeam(data.token, 1, 6, websiteId).then((res) => {
            console.log(res)
            let list = res.data.records
            if (list.length == 0) {
                $(`
                <li class="searchGroupDetailsEmpty">
                    <div>
                        <img src="images/ssempty.png" >
                        <p>没有搜索到内容哦</p>
                    </div>
                </li>
                `).appendTo($(".searchGroupResultCenter"))
            } else {
                for (let i = 0; i < list.length; i++) {
                    searchList = $(
                        `
                    <li class="searchGroupDetails">
                        <p class="searchGroupDetailsTitle">${list[i].title}</p>
                        <div class="searchGroupDetailsContent">
                            <div class="searchGroupDetailsContentTop">
                                <img src="${data.cdn + list[i].icon}" class="searchGroupDetailsImg">
                                <div>
                                    <p id="searchGroupDetailsText">${list[i].intro}</p>
                                    <p class="searchGroupDetailsTwo">来自：<span>${list[i].websiteTitle}</span></p>
                                </div>
                            </div>
                            <div class="searchGroupDetailsBottom">
                                <p class="searchGroupDetailsBottomLeft"><img src="../images/qun.png"><span>${list[i].user_num}/${list[i].max_user_num}</span></p>
                                <p><button type="button" id="searchGroupDetailsBtn">+加入</button></p>
                            </div>
                        </div>
                    </li>
                        `
                    ).appendTo($(".searchGroupResultCenter"))
                    searchList.attr("team-id", list[i].id)
                    searchList.attr("reviewState-type", list[i].review_state)
                    searchList.children(".searchGroupDetailsContent").children(".searchGroupDetailsBottom").children().children("#searchGroupDetailsBtn").on("click", searchGroupDetailsBtn)
                }
            }
        })
    }
    function searchGroupDetailsBtn() {
        console.log($(this).parent().parent().parent().parent().attr("team-id"))
        console.log($(this).parent().parent().parent().parent().attr("reviewState-type"))
        let reviewStateType = $(this).parent().parent().parent().parent().attr("reviewState-type")
        let teamId = $(this).parent().parent().parent().parent().attr("team-id")
        if (reviewStateType == 0) {
            joinTeam(data.token, teamId, "").then((res) => {
                console.log(res)
                if (res.code == 1) {
                    getMyGrounp()
                    showTkTip($(".searchGroupResult"), "加入成功")
                } else if (res.code == 44444) {
                    showTkTip($(".searchGroupResult"), "您已加入该小组")
                }
            })
        } else if (reviewStateType == 1) {
            console.log(1)
            data.jionGrounpId = teamId
            $(".joinReason").show()
        }
    }
    function shwoissueDynamicPic() {
        $(".shoWissueDynamic").empty()
        let list = data.issueDynamicPic
        for (let i = 0; i < list.length; i++) {
            issueDynamicPic = $(
                `<li id="showBottleLocalityPic">
              <img src="${list[i]}" class="issueDynamicPic">
              <div id="issueDynamicPicMasking"></div>
              <img src="images/driftbottle/10.png" id="removeIssueDynamicPic">
             </li>
        `).appendTo($(".shoWissueDynamic"))
            issueDynamicPic.on("mouseover", showChangeIssueDynamicPic)
            issueDynamicPic.on("mouseleave", hideChangeIssueDynamicPic)
            issueDynamicPic.children("#removeIssueDynamicPic").on("click", removeIssueDynamicPic)
            issueDynamicPic.attr("index", i)
        }
    }
    function showChangeIssueDynamicPic() {
        $(this).children("#issueDynamicPicMasking").show()
        $(this).children("#removeIssueDynamicPic").show()
    }
    function hideChangeIssueDynamicPic() {
        $(this).children("#issueDynamicPicMasking").hide()
        $(this).children("#removeIssueDynamicPic").hide()
    }

    function removeIssueDynamicPic() {
        data.issueDynamicPic.splice($(this).parent().attr("index"), 1)
        shwoissueDynamicPic()
        data.issueDynamicPicList.splice($(this).parent().attr("index"), 1)
        console.log(data.issueDynamicPicList.length)
        if (data.issueDynamicPicList.length == 9) {
            $(".issueDynamicUpload").hide()
        }
        if (data.issueDynamicPicList.length < 9) {
            $(".issueDynamicUpload").show()
        }
    }
    async function dynamicUpload() {
        //本地拉取的三张图片在一个数组
        let list = data.issueDynamicPicList
        for (let i = 0; i < list.length; i++) {
            let params = new FormData();
            params.append("file", list[i], list[i].name);
            //遍历本地图片数组依次请求上传的服务器
            // await upload(4, params, data.token).then((res) => {
            //     if (res.code == 1) {
            //         //存储到服务器服务器返回值然后把每个返回值存到另一个数组
            //         data.bottleUploadImgList.push(res.message)
            //     }
            // })
            await preUpload(4, data.token).then((res) => {
                var result = res.data;
                var params = new FormData();
                let fileName = result.dir + "/" + result.filename + "." + list[i].type.split("/")[1];
                params.append("name", result.filename);
                params.append("key", fileName);
                params.append("success_action_status", "200");
                params.append("OSSAccessKeyId", result.accessid);
                params.append("policy", result.policy);
                params.append("signature", result.signature);
                params.append("file", list[i], result.filename);
                jQuery.ajax({
                    type: "post",
                    url: result.host,
                    data: params,
                    processData: false,
                    contentType: false,
                    async: false,
                    success: function () {
                        data.dynamicUploadImgList.push(fileName)
                    },
                    fail: function (error) {
                    }
                })
            })
        }
    }
    // function quareDynamicConditionLike(){
    //     console.log(1)
    // }
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
    // 启动
    startChatRoom();

})