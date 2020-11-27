
jQuery.noConflict();                //将变量$的控制权让渡给prototype.js
(function ($) {                        //定义匿名函数并设置形参为$
    $(function () {                    //匿名函数内部的$均为jQuery
        $(function () {
            // 判断当前网站是否开通（接口）

            let weTalkStart = $(`
        <div class="weTalkIconContainer">
          <img class="weTalkIcon">
          <div class="weTalkIconTip">0</div>
        </div>
      `)
            weTalkStart.children(".weTalkIcon").attr({ "src": chrome.extension.getURL('./images/logo1.png') });
            weTalkStart.children('.weTalkIconTip').hide();
            weTalkStart.on("click", startChatRoom).appendTo("body");

            // 加载接口
            // loadjs(chrome.extension.getURL('./js/server.js'), {
            //   success: function () {
            //     console.log("加载成功")
            //   },
            //   async: false
            // });


            // 全局变量
            let data = {
                // 聊天室聊天记录
                chatPublicRecords: [],
                // 站内信
                systemNews: [],
                systemCurrent: 1,
                systemSize: 1000,

                // 移除元素
                RemoveFood: null,
                removeIndex: null,
                removeFriendId: null,

                // 聊天室用户列表
                weTalkUsersItemList: [],
                weTalkUsersNum: null,
                // 私聊用户列表
                weTalkPerList: [],
                // 读取聊天记录类别
                isPublic: 1,
                // weTalk是否第一次加载
                isFirstStart: true,
                // 当前域名
                curDomain: null,
                // 当前网页标题
                curTitle: null,


                // 登录后获取的信息
                roomId: null,
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
                point: null,
                email: null,

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


                // 转发
                messageType: null,
                flag: 0,

                // 是否第一次加载聊天室
                publicLoad: false,

                // 私聊列表中是否有新消息的id
                isHasThisFriend: false,

                // 未读消息总条数(socketIo)
                unReadTipNum: 0,

                // 判断当前页面是否有效
                isValid: true,

                // 图片名
                fileName: null,
                upFile: null,
                imgBase64: null,
                currentfile: null,
                maxSize: null,
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

                // 好友列表
                friendList: []
            }

            // 全局方法

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
                        $(".weTalkBindSuc").show();
                        setTimeout(function () {
                            $(".weTalkBindSuc").hide();
                            $(".weTalkBindMail").hide();
                        }, 3000)
                        data.email = data.weTalkMailVal;
                        $(".weTalkPersonalInfoContentRight").children("#weTalkUserMail").html(`
              <div class="weTalkPersonalInfoHigh">邮箱：</div>
              <div class="weTalkPersonalInfoLow">${data.email}</div>
            `)
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

            // 初始化
            function initialInfo(res) {
                // 判断是否在新标签发送消息
                chrome.runtime.onMessage.addListener(function (request) {
                    if (request) {
                        data.isValid = false;
                    }
                });

                // 初始化
                let weTalkChatRoom = $(
                    `
                    <div class="weTalkChatRoom">
                    <!-- 主体 -->
                    <div class="weTalkChatRoomContent">
                      <div class="weTalkMain">
                        <div class="weTalkSendFrequently">请5秒后再发送</div>
                        <div class="weTalkAddRepeatly">请勿重复添加</div>
                        <div class="weTalkAddSuc">添加成功</div>
                        <div class="weTalkRemove">移除成功</div>
                        <div class="weTalkSendFail">发送失败</div>
                        <div class="weTalkFeedSuc">反馈成功</div>
                        <div class="weTalkHead">
                          <div class="weTalkLogoArr">
                          <img class="weTalkLogo" src="./images/logo.png"/>
                          <img class="weTalkLogo1" src="./images/xzTa.png">
                          </div>
                            <div class="weTalkAvatarCon">
                              <img class="weTalkSignIn weTalkPointer">
                              <div class="weTalkAvatar">
                                  <img src="./images/man.png" class="weTalkMan" id="weTalkAvatarSex"></img>
                                  <img class="weTalkAvatarImg">
                                  <div class="weTalkDefaultAvatar"></div>
                                  <div class="weTalkAvatarTip"></div>
                              </div>
                              <div class="weTalkNick weTalkTextDis"></div>
                              <div class="weTalkNickVip weTalkTextDis"></div>
                              <img src="./images/xiala1.png" class="weTalkXiala"></img>
                              <div class="weTalkUserSet">
                                  <div id="weTalkOpenPersonalInfo" class="weTalkSetFont">个人信息</div>
                                  <div class="weTalkSetFontArr">
                                    <div id="weTalkSystemNews">站内信</div>
                                    <div class="weTalkSystemNewsNum"></div>
                                  </div>
                                  <div id="weTalkExit" class="weTalkSetFont">退出登录</div>
                                  <div id="weTalkInviteP" class="weTalkSetFont">邀请好友</div>
                                  <div id="weTalkFeedBack" class="weTalkSetFont">用户反馈</div>
                                  <div id="weTalkHelp" class="weTalkSetFont">关于我们</div>
                              </div>
                              <img src="./images/close.png" class="weTalkClose">
                            </div>
                          </div>
                          <div class="weTalkContent">
                            <div class="weTalkLeft">
                                <div class="weTalkChatList">
                                    <div class="weTalkPublicChannnell">公共频道</div>
                                    <div class="weTalkChatItemList"></div>
                                </div>
                                <div class="weTalkAd">
                                    <img class="weTalkCloseAd" src="./images/closeAd.png" alt="">
                                    <img class="weTalkAdImg" src="./images/logo2.png" alt="">
                                </div>
                            </div>
                            <div class="weTalkRight">
                                <div class="weTalkUsersOpe"></div>
                                <div class="weTalkZlShrink">
                                  <img class="weTalkZlIcon" src="./images/zuolab.png">
                                </div>
                                <div class="weTalkChatMain">
                                  <div class="weTalkLoadRecord">
                                    <img class="weTalkLoadAni"/>
                                    <div class="weTalkLoadingTip">内容加载中，请稍等...</div>
                                  </div>
                                  <div class="weTalkNotMember">您不是vip，不能发起私聊</div>
                                </div>
                                <div class="weTalkChatTool">
                                    <div class="weTalkChatFacePackage"></div>
                                    <label for="weTalkSendPic" class="weTalkSendPicFor">
                                      <img src="./images/pic.png" class="weTalkChatToolPic" alt="">
                                    </label>
                                    <input type="file" id="weTalkSendPic" class="weTalkSendPic">
                                    <img src="./images/face.png" class="weTalkChatFace" alt="">
                                    <img src="./images/touzi2.png" class="weTalkChatFace1" alt="">
                                    <img src="./images/paoyingbi.png"  class="weTalkChatFace2" alt="">
                                    <img src="./images/jiandaoshou-.png" class="weTalkChatFace3" alt="">
                                    <div class="weTalkOnlineCount">
                                      <span></span>
                                      <img class="weTalkYoula" src="./images/xiala.png" alt="">
                                    </div>
                                </div>
                                <div contenteditable="true" id="weTalkChatFrame" class="weTalkChatFrame"></div>
                            </div>
                          </div>
                          <!-- 拖拽 -->
                    <div class="weTalkTz"></div>
                      </div>
                      <div class="weTalkUsers">
                        <div class="weTalkUsersHead">用户列表</div>
                        <div class="weTalkUsersItemList"></div>
                      </div>
                    </div>
                    <!-- 个人信息 -->
                    <div class="weTalkPersonalInfo">
                    <div class="weTalkavatarPreview">
                      <img class="weTalkavatarPreviewImg" />
                      <div class="weTalkavatarBtns">
                        <div class="weTalkavatarBtn1">取消</div>
                        <div class="weTalkavatarBtn2">确认</div>
                      </div>
                    </div>
                    <div class="weTalkCjRes">
                      <img/>
                    </div>
                    <div class="weTalkavatarPreviewCj"></div>
                    <div class="weTalkCommonTip"></div>
                    <div class="weTalkCommonTipTop"></div>
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
                        <div class="weTalkUpYzmBtn1">取消</div>
                        <div class="weTalkUpYzmBtn2">确认</div>
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
                        <div class="weTalkSendyzm">发送</div>
                      </div>
                      <div class="weTalkBindMailTip">注：验证码将会发送到您的邮箱，请及时查收</div>
                    </div>
                    <div class="weTalkBindMailBtns">
                      <div class="weTalkBindMailBtn1">取消</div>
                      <div class="weTalkBindMailBtn2">确认</div>
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
                      <div class="weTalkXGcg">修改成功,请重新登录</div>
                      <div class="weTalkXgCotent">
                        <div class="weTalkXgItem">
                          <div class="weTalkOriPswd">原密码</div>
                          <input id="weTalkOriPswd" class="weTalkOriPswdInput" type="password" />
                        </div>
                        <div class="weTalkXgItem">
                          <div class="weTalkNewPswd">新密码</div>
                          <input id="weTalkNewPswd" class="weTalkOriPswdInput" type="password" />
                        </div>
                        <div class="weTalkXgItem">
                          <div class="weTalkQrNewPswd">确认新密码</div>
                          <input id="weTalkQrNewPswd" class="weTalkOriPswdInput" type="password" />
                        </div>
                      </div>
                      <div class="weTalkXgbtns">
                        <div class="weTalkXgbtn1">取消</div>
                        <div class="weTalkXgbtn2">确认</div>
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
                      <div class="weTalkStartMemberAlert">请先选择有效期</div>
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
                                <div class="weTalkSubTitle weTalkMT15">发送图片</div>
                              </div>
                              <div class="weTalkMemberWelfareImg">
                                <img id="weTalkMember3" src="./images/member3.png" alt="" />
                                <div class="weTalkSubTitle weTalkMT15">昵称特效</div>
                              </div>
                              <div class="weTalkMemberWelfareImg">
                                <img id="weTalkMember4" src="./images/member4.png" alt="" />
                                <div class="weTalkSubTitle weTalkMT15">发起私聊</div>
                              </div>
                            </div>
                          </div>
          
                      <div class="weTalkStartMemberItem">
                        <div class="weTalkStartMemberSubTitle">帐&emsp;&emsp;号:</div>
                        <div class="weTalkStartMemberMail"></div>
                      </div>
                      <div class="weTalkStartMemberbtns">
                        <div class="weTalkStartMemberbtn1">取消</div>
                        <div class="weTalkStartMemberbtn2">确认</div>
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
                        <div class="weTalkUpdateNickbtn1">取消</div>
                        <div class="weTalkUpdateNickbtn2">确认</div>
                      </div>
                    </div>
                    <!-- 关于我们 -->
                    <div class="weTalkAboutUs">
                      <div class="weTalkTitle weTalkBindBorder">关于我们</div>
                      <img src="./images/closePersonalInfo.png" class="weTalkAboutUsCha weTalkPointer"></img>
                      <div class="weTalkAboutIntro">每天，都有无数个人和你一样，逛淘宝、刷论坛、看视频在茫茫人海中，我们为您找到那个兴趣相投的人</div>
                      <div class="weTalkJoinUs">
                        <span class="weTalkJoinUsQQ">合作QQ：</span>
                        <span class="weTalkJoinUsQQVal">1686696824</span>
                      </div>
                      <a href="https://wetalk.icu" target="_blank" class="weTalkOfficial">https://wetalk.icu</a>
                    </div>
                    <!-- 转发 -->
                    <div class="weTalkTransmit">
                      <div class="weTalkTitle weTalkBindBorder">转发</div>
                      <div class="weTalkTransmitList">
              
                      </div>
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
                          <span>7天VIP权限</span>
                          ，邀请人数不设上限，赶快让更 多朋友加入吧！  </div>
                        <div class="weTalkInviteA">邀请链接</div>
                        <div class="weTalkInviteGray">
                          <!-- <div>这里有个很好玩的聊天软件，可以认识很多志同道合的人，你也来玩玩？</div>
                          <div>https://www.wetalk.icu/invite?code=ABCDEDF</div> -->
                          <div class="weTalkInviteGrayInner">
                            这里有个很好玩的聊天软件，可以认识很多志同道合的人，你也来玩玩？https://www.wetalk.icu/invite?code=ABCDEDF
                          </div>
                        </div>
                        <div id="weTalkInviteGrayText" contenteditable="true"></div>
                        <div class="weTalkInviteBtn weTalkPointer">复制</div>
                        <div class="weTalkCopySuc">复制成功</div>
                      </div>
                    </div>
                    <!-- 用户反馈 -->
                    <div class="weTalkFeedBack">
                      <div class="weTalkTitle weTalkBindBorder">用户反馈</div>
                      <img src="./images/closePersonalInfo.png" class="weTalkFeedBackCha weTalkPointer"></img>
                      <div class="weTalkFeedBackContent">
                        <div class="weTalkFeedBackTitle weTalkFeedBackT2">选择分类</div>
                        <div class="weTalkFeedBackRadio">
                          <input type="radio" name="feedBack" value="1" id="feedBack1">
                          <label for="feedBack1" class="weTalkFeedBackLabel weTalkFeedBackTitle weTalkPointer">意见建议</label>
              
                          <input type="radio" name="feedBack" value="2" id="feedBack2">
                          <label for="feedBack2" class="weTalkFeedBackLabel weTalkFeedBackTitle weTalkPointer">投诉</label>
              
                          <input type="radio" name="feedBack" value="3" id="feedBack3">
                          <label for="feedBack3" class="weTalkFeedBackLabel weTalkFeedBackTitle weTalkPointer">其他</label>
                        </div>
                        <div class="weTalkMobile weTalkFeedBackTitle">联系方式</div>
                        <input type="text" class="weTalkFeedBackMobileInput" id="weTalkMobile">
                        <div class="weTalkFeedBackText weTalkFeedBackTitle">内容</div>
                        <textarea name="feedBackText" class="weTalkFeedTextArea" id="weTalkFeedBackText"></textarea>
                      </div>
                      <div class="weTalkFeedBackbtns">
                        <div class="weTalkFeedBackbtn1">取消</div>
                        <div class="weTalkFeedBackbtn2">确认</div>
                      </div>
                    </div>
                    <!-- 站内信 -->
                    <div class="weTalkSystemNewsView">
                      <div class="weTalkTitle weTalkBindBorder">站内信</div>
                      <img
                      src="./images/closePersonalInfo.png"
                      class="weTalkSystemNewsViewClose weTalkPointer"
                    />
                      <div class="weTalkSystemNewsViewContent"></div>
                    </div>
                    <!-- 签到 -->
                    <div class="weTalkSignInView">
                      <div class="weTalkSignSuc">签到成功</div>
                      <div class="weTalkAsign">已签到</div>
                      <div class="weTalkSignDays">
          
                      </div>
                      <img class="weTalkGetQdRevenue weTalkPointer"/>
                    </div>
                    <!-- 压缩后图片 -->
                    <div class="weTalkYsPic">
                      <div class="weTalkSendPicSuc">发送成功</div>
                      <div class="weTalkSendPicFail">发送失败</div>
                      <img id="weTalkYsPic">
                      <div class="weTalkYsPickbtns">
                      <div class="weTalkYsPicbtn1">取消</div>
                      <div class="weTalkYsPicbtn2">确认</div>
                    </div>
                    </div>
                  </div>
                        `
                )
                weTalkChatRoom.appendTo("body");

                // 激活拖动
                dragMyWeTalk();
                zdyWeTalkWidth();

                // 取消右键默认事件
                $(".weTalkChatRoom").on("contextmenu", function (e) {
                    e.preventDefault()
                })

                // 发送游戏
                $(".weTalkChatFace1").on("click", sendGame)
                $(".weTalkChatFace2").on("click", sendGame)
                $(".weTalkChatFace3").on("click", sendGame)

                $(".weTalkCloseAd").on("click", closeAd)
                $(".weTalkClose").on("click", closeChatRoom)
                $(".weTalkXiala").on("click", setUserInfo)
                $(".weTalkYoula").on("click", showUserList);
                $(".weTalkZlShrink").on("click", hidePersonalList)

                // 点击公共频道
                $(".weTalkPublicChannnell").click(function () {
                    $(".weTalkChatItem").css({ background: "#ede7ff" });
                    $(".weTalkChatItem").children('.weTalkRemoveUser2').hide();
                    $(".weTalkChatItem").children('.weTalkRemoveUser1').hide();
                    $(".weTalkChatItem")
                        .children(".weTalkItemNick")
                        .css({ color: "#904ce4" });
                    data.friendId = data.roomId;
                    // 加载聊天记录
                    loadPublicRecords();
                });

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
                    $(this).attr({ "src": chrome.extension.getURL(`./images/face/${faceI}.png`) })
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
                    let imgBase64 = ''; //存储图片的base64
                    let fileFormat = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
                    if (!fileFormat.match(/.png|.jpg|.jpeg|.bmp/)) {
                        alert('上传错误,文件格式必须为：png/jpg/jpeg/bmp');
                        return;
                    }
                    data.maxSize = 1 * 100 * 1024;
                    if (data.currentfile.size > data.maxSize) {
                        //调用函数,对图片进行压缩
                        compress(data.currentfile, check)
                    } else {
                        directTurnIntoBase64(data.currentfile, function (imgBase64) {
                            data.imgBase64 = imgBase64;
                            $("#weTalkYsPic").attr({ "src": data.imgBase64 })
                            $(".weTalkYsPic").show();

                            data.upFile = convertBase64UrlToFile(data.imgBase64, (new Date()).valueOf())
                        });
                    }
                })

                $(".weTalkYsPicbtn2").on("click", function () {
                    uploadFile(2, data.upFile);
                })

                $(".weTalkYsPicbtn1").on("click", function () {
                    $('.weTalkYsPic').hide();
                    $('#weTalkSendPic').val('');
                })

                // 单选 设置默认值
                let sex = "男";
                let memberMonth = "1";
                let feedBackType = "1";
                $("input[type=radio][name=sex][value=1]").prop("checked", true)
                $("input[type=radio][name=member][value=1]").prop("checked", true)
                $("input[type=radio][name=feedBack][value=1]").prop("checked", true)

                // 监听单选框
                $("input[type=radio][name=member]").change(function () {
                    if (this.value == "1") {
                        memberMonth = "1";
                    } else if (this.value == "2") {
                        memberMonth = "2";
                    } else {
                        memberMonth = "3";
                    }
                });

                $("input[type=radio][name=feedBack]").change(function () {
                    if (this.value == "1") {
                        feedBackType = "1";
                    } else if (this.value == "2") {
                        feedBackType = "2";
                    } else {
                        feedBackType = "3";
                    }
                });

                // 点击空白处关闭下拉框和表情框

                let weTalkUserSet = $(".weTalkUserSet");
                let weTalkXiala = $(".weTalkXiala");
                let weTalkChatFace = $(".weTalkChatFace");
                let weTalkChatFacePackage = $(".weTalkChatFacePackage");
                $(document).click(function (e) {
                    if (
                        !weTalkUserSet.is(e.target) &&
                        !weTalkXiala.is(e.target)
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

                // 关闭个人信息
                $(".weTalkPersonalInfoClose").click(function () {
                    $(".weTalkPersonalInfo").hide();
                })

                // 显示个人信息
                $("#weTalkOpenPersonalInfo").click(function () {
                    // 获取用户信息接口 页面渲染
                    $(".weTalkPersonalInfo").show();
                    $(".weTalkUserSet").hide();
                })

                // 发送验证码
                $(".weTalkSendyzm").click(function () {
                    if (!(data.weTalkMailVal)) {
                        $(".weTalkwxTip1").html("邮箱不得为空").show();
                        setTimeout(function () {
                            $(".weTalkwxTip1").hide();
                        }, 3000)
                        return;
                    }
                    $(".weTalkUpYzm").show();
                    $(".weTalkUpYzmImg").attr({ "src": `http://192.168.0.129:8090/user/getBindEmailVerifyCode?userId=${data.id}&&t=${new Date().getTime()}` })
                })

                // 验证码
                $(".weTalkUpYzmBtn1").click(function () {
                    $(".weTalkUpYzm").hide();

                })

                $(".weTalkUpYzmBtn2").click(function () {
                    sendEmailBindCode(data.weTalkMailVal, data.weTalkUpYzm, data.token).then(res => {
                        if (res.code == 1) {
                            $(".weTalkUpYzm").hide();
                            $(".weTalkYzTip").html(`验证成功`).show();
                            $(".weTalkSendyzm").hide();
                            setTimeout(() => {
                                $(".weTalkYzTip").hide();
                            }, 3000);
                        } else {
                            $(".weTalkYzTip").html(`验证失败`).show();
                            $(".weTalkUpYzmImg").attr({ "src": `http://192.168.0.129:8090/user/getBindEmailVerifyCode?userId=${data.id}&&t=${new Date().getTime()}` })
                            setTimeout(() => {
                                $(".weTalkYzTip").hide();
                            }, 3000);
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
                    $(".weTalkUserSet").hide();
                    $(".weTalkAboutUs").show();
                    getAboutUsRequest();
                });

                $(".weTalkAboutUsCha").click(function () {
                    $(".weTalkAboutUs").hide();
                })

                // 邀请好友 遮罩层
                $("#weTalkInviteP").click(function () {
                    $(".weTalkUserSet").hide();
                    $(".weTalkInviteFriend").show();
                })

                $(".weTalkInviteFriendCha").click(function () {
                    $(".weTalkInviteFriend").hide();
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

                // 用户反馈 遮罩层
                $("#weTalkFeedBack").click(function () {
                    $(".weTalkUserSet").hide();
                    $(".weTalkFeedBack").show();
                })

                $(".weTalkFeedBackCha").click(function () {
                    $(".weTalkFeedBack").hide();
                })

                $(".weTalkFeedBackbtn1").click(function () {
                    // 清空输入内容
                    // $("#weTalkMobile").val() = "";
                    $(".weTalkFeedBack").hide();
                });

                $(".weTalkFeedBackbtn2").click(function () {
                    $(".weTalkFeedBack").hide();
                    submitFeedback(feedBackType, weTalkMobile, weTalkFeedBackText, data.token).then(res => {
                        if (res.code == 1) {
                            $(".weTalkFeedSuc").show();
                            setTimeout(() => {
                                $(".weTalkFeedSuc").hide();
                            }, 3000);
                            // 清空意见
                            $("#weTalkMobile").val("");
                            $("#weTalkFeedBackText").val("");
                        }
                    })
                });

                // 站内信
                $(".weTalkSetFontArr").click(function () {
                    $(".weTalkUserSet").hide();
                    $(".weTalkSystemNewsView").show();
                    loadSystemNews();
                })

                $(".weTalkSystemNewsViewClose").click(function () {
                    $(".weTalkSystemNewsView").hide();
                })

                // 退出登录
                $("#weTalkExit").off("click").on("click", function () {
                    localStorage.setItem("token", "");
                    data.isFirstStart = true;
                    data.isOpenLoginViewFirst = true;
                    data.isLoginByAccount = false;
                    $(".weTalkChatRoom").hide();
                    $(".weTalkChatRoom").remove();
                    $(".weTalkRegView").remove();
                    $(".weTalkLogView").remove();
                })

                document.querySelector('#weTalkChatFrame').addEventListener("paste", function (event) {
                    console.log(1);
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
                            if (len == 1) {
                                if (items[0].type == "image/png") {
                                    console.log("截图png", items[0]);
                                } else {
                                    let paste = clipboardData.getData("text/plain");
                                    const selection = window.getSelection();
                                    if (!selection.rangeCount) return false;
                                    var div = document.createElement("span");
                                    div.innerHTML = paste;
                                    selection.getRangeAt(0).insertNode(div);
                                }
                            } else if (len == 2) {
                                let isImage = false;
                                for (var i = 0; i < len; i++) {
                                    if (items[i].type.indexOf("image") !== -1) {
                                        blob = items[i].getAsFile();
                                        var reader = new FileReader();
                                        reader.onload = function (event) {
                                            var base64_str = event.target.result; //获得图片base64字符串
                                            data.upFile = convertBase64UrlToFile(base64_str, new Date().getTime());
                                            //调用函数,对图片进行压缩
                                            compress(data.upFile, check)
                                        };
                                        reader.readAsDataURL(blob);
                                        isImage = true;
                                    } else {
                                        if (!isImage) {
                                            let paste = clipboardData.getData("text/html");
                                            paste = paste.replace(/<[^<>]+>/g, "");

                                            const selection = window.getSelection();
                                            if (!selection.rangeCount) return false;
                                            var div = document.createElement("span");
                                            div.innerHTML = paste;
                                            selection.getRangeAt(0).insertNode(div);
                                            // break;
                                        }
                                    }
                                }
                            }
                            //阻止默认行为即不让剪贴板内容在div中显示出来
                            event.preventDefault();
                        }
                    }
                });

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



                // 用户反馈
                let weTalkMobile;
                let weTalkFeedBackText;
                $("#weTalkMobile").on("input propertychange", function () {
                    weTalkMobile = $("#weTalkMobile").val();
                });

                $("#weTalkFeedBackText").on("input propertychange", function () {
                    weTalkFeedBackText = $("#weTalkFeedBackText").val();
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
                })

                // 引用图片
                $(".weTalkLogo").attr({ "src": chrome.extension.getURL('./images/logo.png') })
                $(".weTalkMan").attr({ "src": chrome.extension.getURL('./images/man.png') })
                $(".weTalkXiala").attr({ "src": chrome.extension.getURL('./images/xiala1.png') })
                $(".weTalkClose").attr({ "src": chrome.extension.getURL('./images/close.png') })
                $(".weTalkBoy").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                $(".weTalkAdImg").attr({ "src": chrome.extension.getURL('./images/logo2.png') })
                $(".weTalkCloseAd").attr({ "src": chrome.extension.getURL('./images/closeAd.png') })
                $(".weTalkChatToolPic").attr({ "src": chrome.extension.getURL('./images/pic.png') })
                $(".weTalkChatFace").attr({ "src": chrome.extension.getURL('./images/face.png') })
                $(".weTalkYoula").attr({ "src": chrome.extension.getURL('./images/xiala.png') })
                $(".weTalkPersonalInfoClose").attr({ "src": chrome.extension.getURL('./images/closePersonalInfo.png') })
                $(".weTalkChatOtherSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                $(".weTalkChatSelfSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                $(".weTalkMemberYoula").attr({ "src": chrome.extension.getURL('./images/youlab.png') })
                $(".weTalkRemoveUser2").attr({ "src": chrome.extension.getURL('./images/closeCho.png') })
                $(".weTalkRemoveUser1").attr({ "src": chrome.extension.getURL('./images/close.png') })
                $(".weTalkAboutUsCha").attr({ "src": chrome.extension.getURL('./images/closePersonalInfo.png') })
                $(".weTalkStartMemberPayCha").attr({ "src": chrome.extension.getURL('./images/closePersonalInfo.png') })
                $(".weTalkInviteFriendCha").attr({ "src": chrome.extension.getURL('./images/closePersonalInfo.png') })
                $(".weTalkFeedBackCha").attr({ "src": chrome.extension.getURL('./images/closePersonalInfo.png') })
                $(".weTalkLogo1").attr({ "src": chrome.extension.getURL('./images/xzTa.png') })
                $(".weTalkChatFace1").attr({ "src": chrome.extension.getURL('./images/touzi2.png') })
                $(".weTalkChatFace2").attr({ "src": chrome.extension.getURL('./images/paoyingbi.png') })
                $(".weTalkChatFace3").attr({ "src": chrome.extension.getURL('./images/jiandaoshou-.png') })
                $(".weTalkSystemNewsViewClose").attr({ "src": chrome.extension.getURL('./images/closePersonalInfo.png') })
                $(".weTalkZlIcon").attr({ "src": chrome.extension.getURL('./images/zuolab.png') })
                $(".weTalkLoadAni").attr({ "src": chrome.extension.getURL('./images/loading.png') })
                $("#weTalkMember1").attr({ "src": chrome.extension.getURL('./images/member1.png') })
                $("#weTalkMember2").attr({ "src": chrome.extension.getURL('./images/member2.png') })
                $("#weTalkMember3").attr({ "src": chrome.extension.getURL('./images/member3.png') })
                $("#weTalkMember4").attr({ "src": chrome.extension.getURL('./images/member4.png') })
                $(".weTalkSignIn").attr({ "src": chrome.extension.getURL('./images/signIcon.png') })


                // 初始化全局变量
                data.chatPublicRecords = [];
                data.weTalkUsersItemList = [];
                data.weTalkUsersNum = null;
                data.isPublic = 1;
                data.weTalkPerList = [];
                data.publicLoad = false;
                data.isValid = true;
                data.slYxMsg = null;

                data.roomId = res.data.roomId;
                data.friendId = res.data.roomId;
                data.id = res.data.id;
                data.token = res.data.token;
                data.isNicknameSet = res.data.isNicknameSet;
                data.sex = res.data.sex;
                // data.vip = res.data.vip;
                data.vip = true;
                data.nickname = res.data.nickname;
                data.unreadInboxMsg = res.data.unreadInboxMsg;
                data.avatar = res.data.avatar;
                data.unreadInboxMsg = res.data.unreadInboxMsg;
                data.ad = res.data.ad;
                data.cdn = res.data.cdn;
                data.point = res.data.point;
                data.email = res.data.email;
                data.username = res.data.username;

                localStorage.setItem("token", data.token);

                // 获取消息未读条数
                getUnreadMessageCountRequest()

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
                    $(".weTalkAvatar").children("#weTalkAvatarSex").attr({ "src": chrome.extension.getURL("./images/man.png") })
                } else {
                    $(".weTalkAvatar").children("#weTalkAvatarSex").attr({ "src": chrome.extension.getURL("./images/woman.png") })
                }
                // 获取私聊列表
                getFriendList();
                // 获取用户列表和数量
                getOnlineUsersRequest();
                // 监听键盘事件
                listenKeyBoard();
                // 加载聊天室聊天记录
                loadPublicRecords();

                // 建立长连接
                data.portName = new Date().getTime().toString();
                data.port = chrome.runtime.connect({ name: data.portName });
                data.port.onMessage.addListener(function (msg) {
                    // console.log("初始消息", msg)
                    if ($(".weTalkChatRoom").css("display") == "none") {
                        $(".weTalkIconTip").show();
                        data.unReadTipNum += 1;
                        $(".weTalkIconTip").html(`${data.unReadTipNum}`);
                    }
                    if (msg.sysmsg) {
                        console.log("msg.sysmsg", msg.sysmsg)
                        if (msg.sysmsg.portName == data.portName) {
                            if (msg.sysmsg.id != data.id && msg.sysmsg.type == 1) {
                                let isHas = false;
                                for (let j = 0; j < data.weTalkUsersItemList.length; j++) {
                                    if (data.weTalkUsersItemList[j].id == msg.sysmsg.id) {
                                        isHas = true;
                                    }
                                }
                                if (!isHas) {
                                    let obj = {};
                                    obj.nickname = msg.sysmsg.nickname;
                                    obj.id = msg.sysmsg.id;
                                    if (!(msg.sysmsg.sex)) {
                                        obj.sex = 0;
                                    } else {
                                        obj.sex = msg.sysmsg.sex;
                                    }
                                    obj.addFriendType = 1;
                                    if (msg.sysmsg.avatar) {
                                        obj.avatar = data.cdn + msg.sysmsg.avatar;
                                    }
                                    if (obj.nickname) {
                                        obj.avatarDefault = obj.nickname.substring(0, 1)
                                    }
                                    data.weTalkUsersItemList.push(obj);
                                    obj = {};
                                    data.weTalkUsersNum += 1;
                                    seeUserList();
                                }
                            }
                            if (msg.sysmsg.id != data.id && msg.sysmsg.type == 2) {
                                for (let j = 0; j < data.weTalkUsersItemList.length; j++) {
                                    if (data.weTalkUsersItemList[j].id == msg.sysmsg.id) {
                                        data.weTalkUsersItemList.splice(j, 1);
                                        data.weTalkUsersNum -= 1;
                                        seeUserList();
                                    }
                                }
                            }
                        }
                    } else if (msg.mymsg) {
                        disMsg = msg.mymsg;
                        if (disMsg.portName == data.portName) {
                            if (disMsg.isPublic == 0) {
                                // 发送私聊
                                // 处理游戏消息
                                if (disMsg.isSelf == 1) {
                                    disMsg.addFriendType = 2;
                                    // 处理返回后的消息
                                    if (disMsg.messageType == 1 || disMsg.messageType == 2) {
                                        disMsg.content = disposeText(disMsg);
                                    }
                                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                                        if (disMsg.targetId == data.weTalkPerList[i].friendUserId) {
                                            data.weTalkPerList[i].records.push(disMsg);
                                            data.isHasThisFriend = true;
                                            break;
                                        }
                                    }
                                    // 添加消息到私聊消息数组中
                                    // 渲染聊天框
                                    if (disMsg.targetId == data.friendId) {
                                        loadByFriendOne();
                                    }
                                }
                                // 接受私聊
                                else {
                                    disMsg.addFriendType = 2;
                                    // 处理返回后的消息
                                    if (disMsg.messageType == 1 || disMsg.messageType == 2) {
                                        disMsg.content = disposeText(disMsg);
                                    }
                                    console.log("disMsg", disMsg)
                                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                                        if (disMsg.senderId == data.weTalkPerList[i].friendUserId) {
                                            let obj = JSON.parse(JSON.stringify(disMsg));
                                            obj.nickname = data.weTalkPerList[i].nickname;
                                            data.weTalkPerList[i].records.push(obj);
                                            if (disMsg.senderId != data.friendId) {
                                                data.weTalkPerList[i].UnReadNum += 1;
                                                showPersonalList();
                                            }
                                            data.isHasThisFriend = true;
                                            break;
                                        }
                                    }
                                    if (data.isHasThisFriend == false) {
                                        // 添加该用户
                                        addUserMethod(disMsg.senderId, 1, disMsg.senderNickname, 1)
                                        // let isHas = false;
                                        // for (let i = 0; i < data.weTalkPerList.length; i++) {
                                        //   if (disMsg.senderId == data.weTalkPerList[i].friendUserId) {
                                        //     isHas = true;
                                        //     $(".weTalkAddRepeatly").show();
                                        //     window.setTimeout(function () {
                                        //       $(".weTalkAddRepeatly").hide();
                                        //     }, 3000)
                                        //     break;
                                        //   }
                                        // }
                                        // if (!isHas) {
                                        //   let obj = {};
                                        //   obj.addFriendType = 1;
                                        //   obj.records = [];
                                        //   obj.load = false;
                                        //   obj.friendUserId = disMsg.senderId;
                                        //   obj.UnReadNum = 1;
                                        //   otherInfo(disMsg.senderId, data.token).then(res => {
                                        //     if (res.code == 1) {
                                        //       obj.nickname = res.data.nickname;
                                        //       obj.avatarDefault = res.data.nickname.substring(0, 1);
                                        //       obj.vip = res.data.vip;
                                        //       obj.sex = res.data.sex;
                                        //       data.weTalkPerList.unshift(obj);
                                        //       obj = {};
                                        //       showPersonalList();
                                        //     }
                                        //   });
                                        // }
                                    } else {
                                        data.isHasThisFrined = false;
                                    }
                                    // 渲染聊天框
                                    if (disMsg.senderId == data.friendId) {
                                        loadByFriendOne();
                                    }
                                }
                            }
                            else if (disMsg.isPublic == 1) {
                                console.log("disMsgP", disMsg)
                                if (disMsg.suc == 0) {
                                    $(".weTalkSendFail").show();
                                    setTimeout(() => {
                                        $(".weTalkSendFail").hide();
                                    }, 3000);
                                } else {
                                    if (disMsg.messageType == 1 || disMsg.messageType == 2) {
                                        disMsg.content = disposeText(disMsg);
                                    }
                                    data.chatPublicRecords.push(disMsg)
                                    if (data.friendId == data.roomId) {
                                        loadPublicRecord();
                                    }
                                }
                            }
                        }
                    }
                })
                data.port.postMessage({ socketIo: true, roomId: data.roomId, id: data.id, token: data.token, portName: data.portName })
                let avatarNick;
                if (data.nickname) {
                    avatarNick = data.nickname.substring(0, 1);
                } else {
                    avatarNick = "0";
                }
                var userInfo = $(`
        <div class="weTalkPersonalInfoContent">
          <div class="weTalkAvatarSuc">更改成功</div>
          <div class="weTalkAvatarFail">更改失败</div>
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
              <textarea class="weTalkUserPerSignText"></textarea>
            </div>
          </div>
          <div class="weTalkMemberBtn weTalkPointer">确定</div>
        </div>
          `)





                if ($(".weTalkPersonalInfoContent").length > 0) {
                    $(".weTalkPersonalInfoContent").remove();
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

                userInfo.children(".weTalkMemberBtn").click(function () {
                    $(".weTalkPersonalInfo").hide();
                })


                // 渲染积分
                $(".weTalkPointVal").html(`
          ${data.point}
        `)

                // 修改昵称
                let updateNick = $(`
              <div class="weTalkPersonalInfoJhNick weTalkPersonalInfoJh">
                <div class="weTalkPersonalInfoLow">${data.nickname}</div>
                <div class="weTalkPersonalInfoVip">
                  ${data.nickname}
                </div>
                <div id="weTalkUpdateNick"  class="weTalkML5 weTalkPointer">
                  <img class="weTalkUpdateNickImg">
                </div>
                <div class="weTalkKthy weTalkPointer">开通会员</div>
              </div>
            `).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkNick"))
                updateNick.children("#weTalkUpdateNick").children(".weTalkUpdateNickImg").attr({ "src": chrome.extension.getURL('./images/pencil.png') })
                updateNick.children("#weTalkUpdateNick").on("click", function () {
                    $(".weTalkUpdateNick").show();
                })

                let weTalkUpdateNick;
                $(".weTalkUpdateNickInput").on("input propertychange", function () {
                    weTalkUpdateNick = $(".weTalkUpdateNickInput").val();

                });
                $(".weTalkUpdateNickbtn1").click(function () {
                    $(".weTalkUpdateNick").hide();
                })

                $(".weTalkUpdateNickbtn2").click(function () {
                    if (strlen(weTalkUpdateNick) < 5) {
                        $(".weTalkCommonTipTop").html("用户名长度必须大于5").show();
                        window.setTimeout(function () {
                            $(".weTalkCommonTipTop").hide();
                        }, 3000)
                    } else {
                        setUserNickRequest(weTalkUpdateNick, data.roomId, data.token);
                        $(".weTalkUpdateNick").hide();
                    }
                })


                // vip（如果为vip可以修改头像）
                if (data.vip) {
                    $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoVip").show();
                    $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoLow").hide();
                    $("#weTalkNick").children(".weTalkPersonalInfoLow").hide();
                    $("#weTalkNick").children(".weTalkPersonalInfoVip").show();

                    $(`
            <label class="weTalkChangeMethod weTalkPointer" for="weTalkChangeMethodInput">更改头像</label>
            <input id="weTalkChangeMethodInput" type="file">
          `).insertAfter(userInfo.children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar"));

                    // 更改头像
                    $("#weTalkChangeMethodInput").on("change", function () {
                        data.upAvatar = event.currentTarget.files[0];
                        // 判断图片的后缀名是否符合
                        let filePath = data.upAvatar.name;
                        let imgBase64 = ''; //存储图片的base64
                        let fileFormat = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
                        if (!fileFormat.match(/.png|.jpg|.jpeg|.bmp/)) {
                            alert('上传错误,文件格式必须为：png/jpg/jpeg/bmp');
                            return;
                        }
                        data.maxSize = 1 * 100 * 1024;
                        if (data.upAvatar.size > data.maxSize) {
                            console.log("压缩")
                            //调用函数,对图片进行压缩
                            compress(data.upAvatar, checkAva)
                        } else {
                            directTurnIntoBase64(data.upAvatar, function (imgBase64) {
                                data.imgBase64 = imgBase64;
                                $(".weTalkavatarPreviewImg").attr({ "src": data.imgBase64 })
                                $(".weTalkavatarPreview").show();
                                var options = {
                                    aspectRatio: 1, // 纵横比
                                    viewMode: 2,
                                    preview: ".weTalkavatarPreviewCj", // 预览图的class名
                                };
                                $('.weTalkavatarPreview').children('.weTalkavatarPreviewImg')
                                    .cropper("destroy")
                                    .attr("src", imgBase64)
                                    .cropper(options);
                                $(".weTalkavatarPreviewCj").show();
                            });
                        }

                    });

                    $(".weTalkavatarBtn1").on("click", function () {
                        $(".weTalkavatarPreview").hide()
                        $('.weTalkavatarPreviewCj').hide();
                        $("#weTalkChangeMethodInput").val("");
                    })

                    $(".weTalkavatarBtn2").on("click", function () {
                        let imgUrl = $('.weTalkavatarPreview').children('.weTalkavatarPreviewImg').cropper("getCroppedCanvas", {
                            width: 128, // 裁剪后的长宽
                            height: 128,
                        }).toDataURL('image/png');
                        // $(".weTalkCjRes").children("img").attr("src", imgUrl);
                        // $(".weTalkCjRes").show();
                        data.upAvatarFile = convertBase64UrlToFile(imgUrl, (new Date()).valueOf())
                        uploadFile(1, data.upAvatarFile);
                        $('.weTalkavatarPreview').hide();
                        $('.weTalkavatarPreviewCj').hide();
                        $("#weTalkChangeMethodInput").val("");
                    })
                } else {
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
                                if (data.email == null) {
                                    $(".weTalkStartMemberMail").html(`暂无`)
                                } else {
                                    $(".weTalkStartMemberMail").html(`${data.email}`)
                                }
                                // 配置会员价格信息
                                let memberPrice = $(`
                      <div class="weTalkPricePz">
                        <div class="weTalkStartMemberItem1 weTalkStartMemberItem">
                          <div class="weTalkStartMemberSubTitle">有&ensp;效&ensp;期:</div>
                        </div>
                        <div class="weTalkStartMemberItem2 weTalkStartMemberItem">
                          <div class="weTalkStartMemberSubTitle">价&emsp;&emsp;格:</div>
                          <div class="weTalkStartMemberPrice">0</div>
                          <div class="weTalkStartMemberUnit"></div>
                        </div>
                      </div>
                  `)

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
                                        memberPrice.children(".weTalkStartMemberItem2").children(".weTalkStartMemberPrice").html(`${data.membercPrice}`)
                                        data.memberId = $(this).attr("data-id");
                                    });
                                })
                                if (data.memberType == 1) {
                                    memberPrice.children(".weTalkStartMemberItem2").children(".weTalkStartMemberUnit").html(`元`);
                                } else {
                                    memberPrice.children(".weTalkStartMemberItem2").children(".weTalkStartMemberUnit").html(`积分`);
                                }
                                if ($(".weTalkStartMember").children(".weTalkPricePz")) {
                                    $(".weTalkStartMember").children(".weTalkPricePz").remove();
                                }
                                $(".weTalkStartMemberItem").after(memberPrice);
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
                    let bindMail = $(`
            <div class="weTalkMailTip">暂未绑定，将无法使用找回密码功能</div>
            <div class="weTalkBindAc weTalkPointer">马上绑定</div>
          `).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserMail"))

                    // 绑定邮箱
                    bindMail.off("click").on("click", function () {
                        $(".weTalkBindMail").show();
                        $(".weTalkSendyzm").show();
                    })

                    // 取消绑定邮箱
                    $(".weTalkBindMailBtn1").off("click").on("click", function () {
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
          <div class="weTalkBindAc weTalkPointer">修改密码</div>
        `).appendTo(userInfo.children(".weTalkPersonalInfoContentRight").children("#weTalkUserAccount"))

                updatePswd.off("click").on("click", function () {
                    $(".weTalkXgPswd").show();
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
                })

                $(".weTalkXgbtn2").off("click").on("click", function () {
                    changePassword(data.weTalkOriPswd, data.weTalkQrNewPswd, data.token).then(res => {
                        if (res.code == 1) {
                            $(".weTalkXGcg").show();
                            setTimeout(function () {
                                $(".weTalkXGcg").hide();
                                $(".weTalkXgPswd").hide();
                            }, 3000)
                            $("#weTalkNewPswd").val("")
                            $("#weTalkQrNewPswd").val("")
                            $("#weTalkOriPswd").val("")
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
                            $(".weTalkFj").show();
                            setTimeout(function () {
                                $(".weTalkFj").hide();
                            }, 3000)
                        }
                        // 登录失败的情况判断token无效，清空token让用户通过账号登录
                        localStorage.setItem("token", "");
                        startChatRoom();
                        data.isFirstStart = true;
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
                loginByAccount(data.weTalkUsername, data.weTalkUserPswd, data.curDomain, data.title).then(res => {
                    if (res.code == 1) {
                        $("#weTalkUsername").val("");
                        $("#weTalkUserPswd").val("");
                        $(".weTalkLogLSuc").show();
                        setTimeout(function () {
                            $(".weTalkLogLSuc").hide();
                            $(".weTalkLogView").hide();
                        }, 3000)
                        data.isLoginByAccount = true;
                        localStorage.setItem("token", res.data.token);
                        startChatRoom(res);
                    } else if (res.code == 10002) {
                        $(".weTalkSwitchFail").show();
                        $("#weTalkUserPswd").val("");
                        setTimeout(function () {
                            $(".weTalkSwitchFail").hide();
                        }, 3000)
                    } else if (res.code == 10008) {
                        $(".weTalkFj").show();
                        setTimeout(function () {
                            $(".weTalkFj").hide();
                        }, 3000)
                    }
                })
            }

            // 忘记密码
            function forgetPasswordRequest() {
                forgetPassword(data.weTalkFGmail, data.token).then(res => {
                    if (res.code == 1) {
                        $(".weTalkSubmitSuc").show();
                        setTimeout(function () {
                            $(".weTalkSubmitSuc").hide();
                            $(".weTalkFgPswd").hide();
                        }, 3000)
                    }
                })
            };

            // 获取关于我们
            function getAboutUsRequest() {
                getAboutUs(data.token).then(res => {
                    if (res.code == 1) {
                        // $(`
                        //   <div class="weTalkAboutUs">
                        //     <div class="weTalkTitle weTalkBindBorder">关于我们</div>
                        //     <img src="./images/closePersonalInfo.png" class="weTalkAboutUsCha weTalkPointer"></img>
                        //     <div class="weTalkAboutIntro">每天，都有无数个人和你一样，逛淘宝、刷论坛、看视频在茫茫人海中，我们为您找到那个兴趣相投的人</div>
                        //     <div class="weTalkJoinUs">
                        //       <span class="weTalkJoinUsQQ">合作QQ：</span>
                        //       <span class="weTalkJoinUsQQVal">1686696824</span>
                        //     </div>
                        //     <a href="https://wetalk.icu" target="_blank" class="weTalkOfficial">https://wetalk.icu</a>
                        //   </div>
                        // `)
                    }
                })
            }

            // 获取消息未读条数
            function getUnreadMessageCountRequest() {
                getUnreadMessageCount(data.token).then(res => {
                    if (res.code == 1) {

                    }
                })
            }

            // 修改昵称
            function setUserNickRequest(nickname, roomId, token) {
                setUserNick(nickname, roomId, token).then(res => {
                    if (res.code == 1) {
                        $(".weTalkCommonTip").html("修改成功").show();
                        window.setTimeout(function () {
                            $(".weTalkCommonTip").hide();
                        }, 3000)
                        info(data.token).then(res => {
                            if (res.code == 1) {
                                data.nickname = res.data.nickname;
                                data.isNicknameSet = res.data.isNicknameSet;
                                $(".weTalkNick").html(`${data.nickname}`);
                                $(".weTalkNickVip").html(`${data.nickname}`)
                                $(".weTalkPersonalInfoJhNick").html(`
                <div class="weTalkPersonalInfoLow">${data.nickname}</div>
                `)
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

            // 关闭聊天框
            function closeChatRoom() {
                $(".weTalkChatRoom").hide();
                $(".weTalkCover").hide();
                // 恢复滚动条滚动
                $("body").css({ "overflow-y": "" })
            }



            // 从聊天记录添加到聊天列表或被动添加到聊天列表
            function addUserMethod(senderId, addFriendType, nick, isPassive) {
                addUser(senderId, data.token).then(res => {
                    if (res.code == 1) {
                        let obj = {};
                        obj.addFriendType = addFriendType;
                        obj.records = [];
                        obj.load = false;
                        obj.id = res.data.id;
                        obj.friendUserId = res.data.userId;
                        obj.nickname = res.data.nickname;
                        obj.avatarDefault = res.data.nickname.substring(0, 1);
                        obj.sex = res.data.sex;
                        obj.vip = res.data.vip;
                        let isHas = false;
                        for (let i = 0; i < data.weTalkPerList.length; i++) {
                            if (senderId == data.weTalkPerList[i].friendUserId) {
                                isHas = true;
                                $(".weTalkAddRepeatly").show();
                                window.setTimeout(function () {
                                    $(".weTalkAddRepeatly").hide();
                                }, 3000)
                                break;
                            }
                        }
                        if (!isHas) {
                            // 是否主动添加
                            if (isPassive == 0) {
                                obj.UnReadNum = 0;
                            } else {
                                obj.UnReadNum = 1;
                            }
                            data.weTalkPerList.unshift(obj);
                            obj = {};
                            showPersonalList();
                        }
                    }
                })
            };
            // 加载某条聊天记录
            function loadRecord(item, index) {
                if (item.nickname) {
                    item.avatarDefault = item.nickname.substring(0, 1);
                }
                // 加载他人的聊天记录
                if (item.senderId != data.id) {
                    let otherChatRecord = $(`
                  <div class="weTalkChatOther">
                      <div class="weTalkDefaultAvatar">${item.avatarDefault}</div>
                      <img class="weTalkChatOtherAvatar">
                      <div class="weTalkChatOtherRight">
                        <div class="weTalkChatOtherRightTransmit weTalkPointer">转发</div>
                        <div class="weTalkChatOtherRightReport weTalkPointer">举报</div>
                        <div class="weTalkChatOtherInfo">
                          <img class="weTalkChatOtherSex">
                          <div class="weTalkChatFont">${item.nickname}</div>
                          <div class="weTalkChatMemberFont">${item.nickname}</div>
                        </div>
                        <div class="weTalkChatOtherContent"></div>
                      </div>
                    </div>
                  `)


                    if (!(item.avatar)) {
                        otherChatRecord.children(".weTalkChatOtherAvatar").hide();
                        otherChatRecord.children(".weTalkDefaultAvatar").css("display", "block")
                    } else {
                        otherChatRecord.children(".weTalkChatOtherAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
                        otherChatRecord.children(".weTalkDefaultAvatar").css("display", "none");
                    }



                    let weTalkChatOtherContent = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherContent")
                    switch (item.messageType) {
                        case 1:
                            weTalkChatOtherContent.html(`${item.content}`)
                            weTalkChatOtherContent.children("img").each(function () {
                                let src = $(this).attr("src");
                                $(this).attr({ "src": chrome.extension.getURL(src), "class": "weTalkDisEmoj" })
                            })
                            break;
                        case 2:
                            weTalkChatOtherContent.html(`${item.content}`)
                            break;
                        case 4:
                            weTalkChatOtherContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                            weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/timg.gif") })
                            weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content}.png`) })
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
                            weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/paoyingbi.gif") })
                            weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png`) })
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
                            weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/shitoujiandaobu.gif") })
                            weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png`) })
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

                    weTalkChatOtherContent.attr({ "data_messageType": item.messageType })

                    let otherChatRecordInfo = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherInfo");

                    if (item.vip == 1) {
                        otherChatRecordInfo.children(".weTalkChatFont").hide()
                        otherChatRecordInfo.children(".weTalkChatMemberFont").css({ "display": "block" });
                    }

                    if (item.sex == 1) {
                        otherChatRecord.attr({ "data_sex": 1 })
                        otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                    } else if (item.sex == 2) {
                        otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": chrome.extension.getURL('./images/girl.png') })
                    } else if (item.sex == undefined || item.sex == 0) {
                        otherChatRecordInfo.children(".weTalkChatOtherSex").hide();
                    }
                    otherChatRecord.appendTo($(".weTalkChatMain"));

                    // 加载自己的聊天记录
                } else {
                    let myChatRecord = $(`
                  <div class="weTalkChatSelf">
                            <div class="weTalkChatSelfLeft">
                              <div class="weTalkChatSelfLeftTransmit weTalkPointer">转发</div>
                              <div class="weTalkChatSelfInfo">
                                <img class="weTalkChatSelfSex" src="./images/boy.png" alt="">
                                <div class="weTalkChatFont">${data.nickname}</div>
                                <div class="weTalkChatMemberFont">${data.nickname}</div>
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
                            weTalkChatSelfContent.html(`${item.content}`)
                            weTalkChatSelfContent.children("img").each(function () {
                                let src = $(this).attr("src");
                                $(this).attr({ "src": chrome.extension.getURL(src), "class": "weTalkDisEmoj" })
                            })
                            break;
                        case 2:
                            weTalkChatSelfContent.html(`${item.content}`)
                            break;
                        case 4:
                            weTalkChatSelfContent.html(`
                        <img class="weTalkGameGif">
                        <img class="weTalkGameRes">
                      `)
                            weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/timg.gif") })
                            weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content}.png`) })
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
                            weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/paoyingbi.gif") })
                            weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png`) })
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
                            weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/shitoujiandaobu.gif") })
                            weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png`) })
                            setTimeout(function () {
                                weTalkChatSelfContent.children(".weTalkGameGif").hide();
                                weTalkChatSelfContent.children(".weTalkGameRes").show();
                            }, 1000)
                            break;
                    }
                    // 添加自定义属性
                    weTalkChatSelfContent.attr({ "data_messageType": item.messageType })
                    myChatRecord.attr({ "data_vip": item.vip })


                    let myChatRecordInfo = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfInfo");

                    if (item.vip == 1) {
                        myChatRecordInfo.children(".weTalkChatFont").hide()
                        myChatRecordInfo.children(".weTalkChatMemberFont").css({ "display": "block" });
                    }

                    if (item.sex == 1) {
                        myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                    } else if (item.sex == 2) {
                        myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": chrome.extension.getURL('./images/girl.png') })
                    } else if (item.sex == 0 || item.sex == undefined) {
                        myChatRecordInfo.children(".weTalkChatSelfSex").hide();
                    }
                    myChatRecord.appendTo($(".weTalkChatMain"));

                }


                $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
            }
            // 加载某条聊天记录的聊天交互
            function recordPoolOpe() {
                // 右键转发他人的话,左键私聊、举报、拉黑
                let weTalkChatOther = $(".weTalkChatMain").children(".weTalkChatOther").last();
                // 左键事件
                let that = weTalkChatOther;
                let thatzfSex = weTalkChatOther.attr("data_sex");
                let thatzfNick = weTalkChatOther.attr("data_nickname");
                let thatzfVip = weTalkChatOther.attr("data_vip");
                let thatzf = $(`
                    <div class="weTalkItemOpe weTalkPointer">
                      <div class="weTalkItemOpeOne">
                        <div class="weTalkItemOpeOneF">
                          <div class="weTalkItemOpeOneAvatar"></div>
                          <img class="weTalkItemOpeOneSex">
                          <div class="weTalkItemOpeOneNick">${thatzfNick}</div>
                        </div>
                      </div>
                      <div class="weTalkPerSign">
                        非官方认证平平无奇说废话的小天才,嚯嚯嚯嚯
                      </div>
                      <div class="weTalkHisLooking">
                        <div class="weTalkTzk">TA在看</div>
                        <div class="weTalkTzkWeb">
                          网易严选 儿童格纹长袖衬衫...
                        </div>
                      </div>
                    </div>
                  `);
                if (data.isPublic == 1) {
                    $(` 
                        <div class="weTalkUsersSl weTalkPointer">私聊</div>
                      `
                    ).appendTo(thatzf.children(".weTalkItemOpeOne"))
                } else {
                    $(` 
                        <div class="weTalkUsersSl weTalkPointer">拉黑</div>
                      `
                    ).appendTo(thatzf.children(".weTalkItemOpeOne"))
                }

                if (thatzfSex == 1) {
                    thatzf.children(".weTalkItemOpeOne").children(".weTalkItemOpeOneF").children(".weTalkItemOpeOneSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                } else {
                    thatzf.children(".weTalkItemOpeOne").children(".weTalkItemOpeOneF").children(".weTalkItemOpeOneSex").attr({ "src": chrome.extension.getURL('./images/girl.png') })
                }

                // 移出界面
                thatzf.off("mouseleave").on("mouseleave", function () {
                    thatzf.hide();
                })

                // 移入按钮
                thatzf.children(".weTalkItemOpeTow").children(".weTalkItemOpeTowBtn").off("click").on("click", function () {
                    let val = $(this).html();
                    switch (val) {

                        case "私聊":
                            if (data.vip) {
                                // 判断元素是否重复，如不重复将该用户加载到私聊列表
                                let isHas = false;
                                // 根据聊天记录类型添加用户到私聊列表
                                let chatPublicRecords = JSON.parse(JSON.stringify(data.chatPublicRecords))
                                if (data.isPublic == 1) {
                                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                                        if (chatPublicRecords[that.attr("data_index")].senderId == data.weTalkPerList[i].friendUserId) {
                                            isHas = true;
                                            break;
                                        }
                                    }
                                    if (!isHas) {
                                        addUserMethod(chatPublicRecords[that.attr("data_index")].senderId, 2, chatPublicRecords[that.attr("data_index")].senderNickname, 0);
                                        thatzf.hide();
                                    }
                                }
                            } else {
                                $(".weTalkNotMember").show();
                                setTimeout(function () {
                                    $(".weTalkNotMember").hide();
                                }, 3000)
                            }
                            break;
                        case "拉黑":
                            break;
                        case "举报":
                            break;
                        case "屏蔽":
                            break;
                    }
                });

                thatzf.appendTo(weTalkChatOther.children(".weTalkChatOtherRight"));

                weTalkChatOther.children(".weTalkChatOtherAvatar").off("click").on("click", function (e) {
                    if (e.target != $(".weTalkChatOtherRightTransmit")[0]) {
                        // 创建用户操作节点
                        thatzf.show();
                        thatzf.parent().parent().siblings().children(".weTalkChatOtherRight").children(".weTalkItemOpe").hide();
                        that.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide()
                        that.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport").hide()
                        $(".weTalkChatSelf").children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                    }
                })
                weTalkChatOther.children(".weTalkDefaultAvatar").off("click").on("click", function (e) {
                    if (e.target != $(".weTalkChatOtherRightTransmit")[0]) {
                        // 创建用户操作节点
                        thatzf.show();
                        thatzf.parent().parent().siblings().children(".weTalkChatOtherRight").children(".weTalkItemOpe").hide();
                        that.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide()
                        that.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport").hide()
                        $(".weTalkChatSelf").children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                    }
                })

                // 右键事件

                // 转发他人的话
                weTalkChatOther.off("contextmenu").on("contextmenu", function (e) {
                    // 获取需要转发的对话
                    data.transmitSetence = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").html();
                    data.messageType = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").attr("data_messageType");
                    if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                        return;
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
                        // 点击转发按钮事件
                        let transmitBtn = weTalkChatOther.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
                        transmitBtn.off("click").on("click", function () {
                            // 获取转发人列表
                            $(".weTalkTransmitList").html("");
                            data.weTalkPerList.forEach((item, index) => {
                                $(".weTalkTransmitList").append(`
                              <div class="weTalkTransmitItem">
                                <div class="weTalkTransmitItemLeft">
                                  <div class="weTalkTransmitItemLeftAvatar"></div>
                                    <div class="weTalkTransmitItemLeftTitle">${item.nickname}</div>
                                      </div>
                                    <input type="checkbox" name="weTalkTransmitObj" value="${item.id}" class="weTalkTransmitItemRight weTalkPointer"/>
                              </div>
                    `)

                            })
                            $(".weTalkTransmitList").append(`
            <div class="weTalkTransmitItem">
            <div class="weTalkTransmitItemLeft">
              <div class="weTalkTransmitItemLeftAvatar"></div>
              <div class="weTalkTransmitItemLeftTitle">聊天室</div>
            </div>
            <input type="checkbox" name="weTalkTransmitObjP" value="${data.roomId}" class="weTalkTransmitItemRight weTalkPointer"></input>
          </div>
            `)
                            $(".weTalkTransmit").show();
                            transmitBtn.hide();
                            transmitBtn.siblings(".weTalkChatOtherRightReport").hide()
                        })

                        $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide();
                        $(this).siblings().children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport").hide();
                    }
                })

                // 转发自己的话
                $(".weTalkChatSelf").each(function () {
                    // 右键事件
                    $(this).off("contextmenu").on("contextmenu", function (e) {
                        // 获取转发按钮节点
                        let thatzf = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
                        e.preventDefault()
                        if (thatzf.css("display") != "none") {
                            thatzf.hide();
                        } else {
                            thatzf.show();
                            // 获取需要转发的对话
                            data.transmitSetence = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").html();
                            data.messageType = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").attr("data_messageType");
                            if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                                return;
                            }
                            $(this).siblings().children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                        }
                        // 点击转发按钮事件
                        let transmitBtn = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
                        transmitBtn.off("click").on("click", function () {
                            // 获取转发人列表
                            $(".weTalkTransmitList").html("");
                            data.weTalkPerList.forEach((item, index) => {
                                $(".weTalkTransmitList").append(`
                                          <div class="weTalkTransmitItem">
                                            <div class="weTalkTransmitItemLeft">
                                              <div class="weTalkTransmitItemLeftAvatar"></div>
                                              <div class="weTalkTransmitItemLeftTitle">${item.nickname}</div>
                                            </div>
                                            <input type="checkbox" name="weTalkTransmitObj" value="${item.friendUserId}" class="weTalkTransmitItemRight weTalkPointer"></input>
                                          </div>
                                          `)
                            })
                            $(".weTalkTransmitList").append(`
              <div class="weTalkTransmitItem">
              <div class="weTalkTransmitItemLeft">
                <div class="weTalkTransmitItemLeftAvatar"></div>
                <div class="weTalkTransmitItemLeftTitle">聊天室</div>
              </div>
              <input type="checkbox" name="weTalkTransmitObjP" value="${data.roomId}" class="weTalkTransmitItemRight weTalkPointer"></input>
            </div>
              `)
                            $(".weTalkTransmit").show();
                            transmitBtn.hide();
                        })
                    })
                })

                // 取消并隐藏转发列表
                $(".weTalkTransmitbtn1").off("click").on("click", function () {
                    $(".weTalkTransmitItemRight").prop("checked", false)
                    $(".weTalkTransmit").hide();
                })
                // 确定并获取已选中的转发人
                $(".weTalkTransmitbtn2").off("click").on("click", function () {
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
                        return;
                    } else {
                        // 遍历数组发送消息
                        data.transmitChoosedArr.forEach((item, index) => {
                            if (data.messageType == 1) {
                                data.port.postMessage(
                                    {
                                        portName: data.portName,
                                        senderId: data.id,
                                        targetId: item.value,
                                        content: data.transmitSetence,
                                        isPublic: item.type,
                                        messageType: 1,
                                        senderNickname: data.nickname
                                    }
                                )
                            }
                        })
                        // 初始化
                        $(".weTalkTransmitItemRight").prop("checked", false);
                        data.emojSrctransmitChoosedArr = [];
                        data.transmitChoosedArr = [];
                        data.flag = 0;
                        $(".weTalkTransmit").hide();
                    }
                })
            };

            function loadByFriendOne() {
                data.isPublic = 0;
                let item = data.weTalkPerList[data.friendIndex].records[data.weTalkPerList[data.friendIndex].records.length - 1];
                let index = data.weTalkPerList[data.friendIndex].records.length - 1;
                item.addFriendType = 2;
                if (item.senderId == data.id) {
                    item.nickname = data.nickname;
                    item.avatar = data.avatar;
                    item.sex = data.sex;
                    item.vip = data.vip;
                    item.avatarDefault = data.nickname.substring(0, 1)
                } else {
                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                        if (item.senderId == data.weTalkPerList[i].friendUserId) {
                            item.nickname = data.weTalkPerList[i].nickname;
                            item.avatar = data.weTalkPerList[i].avatar;
                            item.sex = data.weTalkPerList[i].sex;
                            item.vip = data.weTalkPerList[i].vip;
                            item.avatarDefault = data.weTalkPerList[i].nickname.substring(0, 1)
                            break;
                        }
                    }
                }
                // if (item.messageType == 1 || item.messageType == 2) {
                //   item.content = disposeText(item)
                //   console.log("img", item.content)
                // }
                loadRecord(item, index);
                recordPoolOpe();
            }

            // 加载聊天记录
            function loadRecords(item, index) {
                if (item.nickname) {
                    item.avatarDefault = item.nickname.substring(0, 1);
                }

                if (item.senderId != data.id) {
                    let otherChatRecord = $(`
                  <div class="weTalkChatOther">
                      <div class="weTalkDefaultAvatar">${item.avatarDefault}</div>
                      <img class="weTalkChatOtherAvatar">
                      <div class="weTalkChatOtherRight">
                        <div class="weTalkChatOtherRightTransmit weTalkPointer">转发</div>
                        <div class="weTalkChatOtherRightReport weTalkPointer">举报</div>
                        <div class="weTalkChatOtherInfo">
                          <img class="weTalkChatOtherSex">
                          <div class="weTalkChatFont">${item.nickname}</div>
                          <div class="weTalkChatMemberFont">${item.nickname}</div>
                        </div>
                        <div class="weTalkChatOtherContent"></div>
                      </div>
                    </div>
                  `)

                    if (!(item.avatar)) {
                        otherChatRecord.children(".weTalkChatOtherAvatar").hide();
                        otherChatRecord.children(".weTalkDefaultAvatar").css("display", "block");
                    } else {
                        otherChatRecord.children(".weTalkChatOtherAvatar").attr("src", data.cdn + item.avatar.replace(/\\/g, '/')).show();
                        otherChatRecord.children(".weTalkDefaultAvatar").css("display", "none");
                    }



                    let weTalkChatOtherContent = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherContent")
                    switch (item.messageType) {
                        case 1:
                            weTalkChatOtherContent.html(`${item.content}`)
                            weTalkChatOtherContent.children("img").each(function () {
                                let src = $(this).attr("src");
                                $(this).attr({ "src": chrome.extension.getURL(src), "class": "weTalkDisEmoj" })
                            })
                            break;
                        case 2:
                            weTalkChatOtherContent.html(`${item.content}`)
                            break;
                        case 4:
                            weTalkChatOtherContent.html(`
                <img class="weTalkGameGif">
                <img class="weTalkGameRes">
              `)
                            weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/timg.gif") })
                            weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content}.png`) })
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
                            weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/paoyingbi.gif") })
                            weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png`) })
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
                            weTalkChatOtherContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/shitoujiandaobu.gif") })
                            weTalkChatOtherContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png`) })
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

                    weTalkChatOtherContent.attr({ "data_messageType": item.messageType })


                    let otherChatRecordInfo = otherChatRecord.children(".weTalkChatOtherRight").children(".weTalkChatOtherInfo");

                    if (item.vip == 1) {

                        otherChatRecord.children(".weTalkChatFont").hide()
                        otherChatRecord.children(".weTalkChatMemberFont").css({ "display": "block" });
                    }

                    if (item.sex == 1) {
                        otherChatRecord.attr({ "data_sex": 1 })
                        otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                    } else if (item.sex == 2) {
                        otherChatRecordInfo.children(".weTalkChatOtherSex").attr({ "src": chrome.extension.getURL('./images/girl.png') })
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
                                <img class="weTalkChatSelfSex" src="./images/boy.png" alt="">
                                <div class="weTalkChatFont">${data.nickname}</div>
                                <div class="weTalkChatMemberFont">${data.nickname}</div>
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
                            weTalkChatSelfContent.html(`${item.content}`)
                            weTalkChatSelfContent.children("img").each(function () {
                                let src = $(this).attr("src");
                                $(this).attr({ "src": chrome.extension.getURL(src), "class": "weTalkDisEmoj" })
                            })
                            break;
                        case 2:
                            weTalkChatSelfContent.html(`${item.content}`)
                            break;
                        case 4:
                            weTalkChatSelfContent.html(`
                        <img class="weTalkGameGif">
                        <img class="weTalkGameRes">
                      `)
                            weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/timg.gif") })
                            weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content}.png`) })
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
                            weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/paoyingbi.gif") })
                            weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content == 1 ? 'zheng' : 'fan'}.png`) })
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
                            weTalkChatSelfContent.children(".weTalkGameGif").attr({ "src": chrome.extension.getURL("./images/hd/shitoujiandaobu.gif") })
                            weTalkChatSelfContent.children(".weTalkGameRes").attr({ "src": chrome.extension.getURL(`./images/hd/${item.content == 1 ? 'jiandao' : item.content == 2 ? 'shitou' : 'bu'}.png`) })
                            setTimeout(function () {
                                weTalkChatSelfContent.children(".weTalkGameGif").hide();
                                weTalkChatSelfContent.children(".weTalkGameRes").show();
                            }, 1000)
                            break;
                    }
                    // 添加自定义属性
                    weTalkChatSelfContent.attr({ "data_messageType": item.messageType })
                    myChatRecord.attr({ "data_vip": item.vip })

                    let myChatRecordInfo = myChatRecord.children(".weTalkChatSelfLeft").children(".weTalkChatSelfInfo");

                    if (item.vip == 1) {
                        myChatRecordInfo.children(".weTalkChatFont").hide()
                        myChatRecordInfo.children(".weTalkChatMemberFont").css({ "display": "block" });
                    }

                    if (item.isMember == 1) {
                        myChatRecordInfo.children(".weTalkChatFont").hide()
                        myChatRecordInfo.children(".weTalkChatMemberFont").css({ "display": "block" });
                    }
                    if (item.sex == 1) {
                        myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                    } else if (item.sex == 2) {
                        myChatRecordInfo.children(".weTalkChatSelfSex").attr({ "src": chrome.extension.getURL('./images/girl.png') })
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
                data.isPublic = 1;
                if (!data.publicLoad) {
                    $(".weTalkLoadRecord").css({ "visibility": "visible" })
                    data.isLoadRecords = true;
                    getPublicLogRequset(data.roomId, data.token);
                    data.publicLoad = true;
                } else {
                    if (data.chatPublicRecords) {
                        $(".weTalkChatMain").html("");
                        if (data.chatPublicRecords.length > 0) {
                            data.chatPublicRecords.forEach((item, index) => {
                                // if (item.messageType == 1 || item.messageType == 2) {
                                //   item.content = disposeText(item)
                                // }
                                item.nickname = item.senderNickname;
                                loadRecords(item, index);
                            })
                            // 加载交互
                            recordsPoolOpe();
                        }

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
                item.addFriendType = 2;
                item.nickname = item.senderNickname;
                if (item.messageType == 1) {
                    item.content = disposeText(item)
                }
                loadRecord(item, index);
                recordPoolOpe();
            }
            // 加载单条聊天室记录(结束)

            // 点击某用户时加载与该用户聊天记录
            function loadByFriend(id, index) {
                data.isPublic = 0;
                if (!(data.weTalkPerList[index].load)) {
                    $(".weTalkChatMain").html(`
          <div class="weTalkLoadRecord">
            <img class="weTalkLoadAni"/>
            <div class="weTalkLoadingTip">内容加载中，请稍等...</div>
          </div>
          `).children('.weTalkLoadRecord').children('.weTalkLoadAni').attr({ "src": chrome.extension.getURL('./images/loading.png') });
                    $(".weTalkLoadRecord").css({ "visibility": "visible" })
                    data.isLoadRecords = true;
                    getPrivateLogRequest(id, data.token, index);
                    data.weTalkPerList[index].load = true;
                } else {
                    if (data.weTalkPerList[index].records) {
                        $(".weTalkChatMain").html("");
                        if (data.weTalkPerList[index].records.length > 0) {
                            data.weTalkPerList[index].records.forEach((item, dex) => {
                                item.addFriendType = 2;
                                if (item.senderId == data.id) {
                                    item.nickname = data.nickname;
                                    item.avatar = data.avatar;
                                    item.sex = data.sex;
                                    item.vip = data.vip;
                                    item.avatarDefault = data.nickname.substring(0, 1)
                                } else {
                                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                                        if (item.senderId == data.weTalkPerList[i].friendUserId) {
                                            item.nickname = data.weTalkPerList[i].nickname;
                                            item.avatar = data.weTalkPerList[i].avatar;
                                            item.sex = data.weTalkPerList[i].sex;
                                            item.vip = data.weTalkPerList[i].vip;
                                            item.avatarDefault = data.weTalkPerList[i].nickname.substring(0, 1)
                                            break;
                                        }
                                    }
                                }
                                // if (item.messageType == 1 || item.messageType == 2) {
                                //   item.content = disposeText(item)
                                // }
                                loadRecords(item, dex);
                            })
                            // 加载交互
                            recordsPoolOpe();
                        }
                    }
                }
                // $(".weTalkChatMain").html(``);
                // // 限制聊天框的消息条数为50
                // if (data.chatRecordsList.length > 50) {
                //   data.chatRecordsList.splice(0, data.chatRecordsList.length - 50)
                // }
            }
            // 点击某用户时加载与该用户聊天记录（结束）

            // 聊天交互
            function recordsPoolOpe() {
                // 右键转发他人的话,左键私聊、举报、拉黑
                $(".weTalkChatMain").children(".weTalkChatOther").each(function () {
                    // 左键事件
                    let that = $(this);
                    let thatzfSex = $(this).attr("data_sex");
                    let thatzfNick = $(this).attr("data_nickname");
                    let thatzfvip = $(this).attr("data_vip");

                    let thatzf = $(`
                    <div class="weTalkItemOpe weTalkPointer">
                      <div class="weTalkItemOpeOne">
                        <div class="weTalkItemOpeOneF">
                          <div class="weTalkItemOpeOneAvatar"></div>
                          <img class="weTalkItemOpeOneSex">
                          <div class="weTalkItemOpeOneNick">${thatzfNick}</div>
                        </div>
                      </div>
                      <div class="weTalkPerSign">
                        非官方认证平平无奇说废话的小天才,嚯嚯嚯嚯
                      </div>
                      <div class="weTalkHisLooking">
                        <div class="weTalkTzk">TA在看</div>
                        <div class="weTalkTzkWeb">
                          网易严选 儿童格纹长袖衬衫...
                        </div>
                      </div>
                    </div>
                  `);
                    if (data.isPublic == 1) {
                        $(`
                <div class="weTalkUsersSl weTalkPointer">私聊</div>
              `
                        ).appendTo(thatzf.children(".weTalkItemOpeOne"))
                    } else {
                        $(`
                <div class="weTalkUsersSl weTalkPointer">拉黑</div>
              `
                        ).appendTo(thatzf.children(".weTalkItemOpeOne"))
                    }

                    if (thatzfSex == 1) {
                        thatzf.children(".weTalkItemOpeOne").children(".weTalkItemOpeOneF").children(".weTalkItemOpeOneSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                    } else {
                        thatzf.children(".weTalkItemOpeOne").children(".weTalkItemOpeOneF").children(".weTalkItemOpeOneSex").attr({ "src": chrome.extension.getURL('./images/girl.png') })
                    }

                    // 移出界面
                    thatzf.off("mouseleave").on("mouseleave", function () {
                        thatzf.hide();
                    })

                    // 移入按钮
                    thatzf.children(".weTalkItemOpeOne").children(".weTalkUsersSl").off("click").on("click", function () {
                        let val = $(this).html();
                        switch (val) {
                            case "私聊":
                                // 判断元素是否重复，如不重复将该用户加载到私聊列表
                                let isHas = false;
                                // 根据聊天记录类型添加用户到私聊列表
                                let chatPublicRecords = JSON.parse(JSON.stringify(data.chatPublicRecords))
                                if (data.isPublic == 1) {
                                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                                        if (chatPublicRecords[that.attr("data_index")].senderId == data.weTalkPerList[i].friendUserId) {
                                            isHas = true;
                                            break;
                                        }
                                    }
                                    if (!isHas) {
                                        addUserMethod(chatPublicRecords[that.attr("data_index")].senderId, 2, chatPublicRecords[that.attr("data_index")].senderNickname, 0);
                                        thatzf.hide();
                                    }
                                }
                                break;
                            case "拉黑":
                                break;
                            case "举报":
                                break;
                            case "屏蔽":
                                break;
                        }
                    });

                    thatzf.appendTo($(this).children(".weTalkChatOtherRight"));

                    $(this).children(".weTalkChatOtherAvatar").off("click").on("click", function (e) {
                        if (e.target != $(".weTalkChatOtherRightTransmit")[0]) {
                            // 创建用户操作节点
                            thatzf.show();
                            thatzf.parent().parent().siblings().children(".weTalkChatOtherRight").children(".weTalkItemOpe").hide();
                            that.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide()
                            that.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport").hide()
                            $(".weTalkChatSelf").children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                        }
                    })

                    $(this).children(".weTalkDefaultAvatar").off("click").on("click", function (e) {
                        if (e.target != $(".weTalkChatOtherRightTransmit")[0]) {
                            // 创建用户操作节点
                            thatzf.show();
                            thatzf.parent().parent().siblings().children(".weTalkChatOtherRight").children(".weTalkItemOpe").hide();
                            that.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit").hide()
                            that.children(".weTalkChatOtherRight").children(".weTalkChatOtherRightReport").hide()
                            $(".weTalkChatSelf").children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit").hide();
                        }
                    })

                    // 右键事件
                    $(this).off("contextmenu").on("contextmenu", function (e) {
                        // 获取需要转发的对话
                        data.transmitSetence = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").html();
                        data.messageType = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherContent").attr("data_messageType");
                        if (data.messageType == 4 || data.messageType == 5 || data.messageType == 6) {
                            console.log(1);
                            return;
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
                        }
                    })

                    // 点击转发按钮事件
                    let transmitBtn = $(this).children(".weTalkChatOtherRight").children(".weTalkChatOtherRightTransmit");
                    transmitBtn.off("click").on("click", function () {
                        // 获取转发人列表
                        $(".weTalkTransmitList").html("");
                        data.weTalkPerList.forEach((item, index) => {
                            $(".weTalkTransmitList").append(`
                              <div class="weTalkTransmitItem">
                                <div class="weTalkTransmitItemLeft">
                                  <div class="weTalkTransmitItemLeftAvatar"></div>
                                    <div class="weTalkTransmitItemLeftTitle">${item.nickname}</div>
                                      </div>
                                    <input type="checkbox" name="weTalkTransmitObj" value="${item.friendUserId}" class="weTalkTransmitItemRight weTalkPointer"/>
                              </div>
                    `)

                        })
                        $(".weTalkTransmitList").append(`
            <div class="weTalkTransmitItem">
            <div class="weTalkTransmitItemLeft">
              <div class="weTalkTransmitItemLeftAvatar"></div>
              <div class="weTalkTransmitItemLeftTitle">聊天室</div>
            </div>
            <input type="checkbox" name="weTalkTransmitObjP" value="${data.roomId}" class="weTalkTransmitItemRight weTalkPointer"></input>
          </div>
            `)
                        $(".weTalkTransmit").show();
                        transmitBtn.hide();
                        transmitBtn.siblings(".weTalkChatOtherRightReport").hide()
                    })
                })

                // 转发自己的话
                $(".weTalkChatSelf").each(function (index) {
                    // 右键事件
                    $(this).off("contextmenu").on("contextmenu", function (e) {
                        // 获取需要转发的对话
                        data.transmitSetence = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").html();
                        data.messageType = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfContent").attr("data_messageType");

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
                        }
                        e.preventDefault()
                    })
                    // 点击转发按钮事件
                    let transmitBtn = $(this).children(".weTalkChatSelfLeft").children(".weTalkChatSelfLeftTransmit");
                    transmitBtn.off("click").on("click", function () {
                        // 获取转发人列表
                        $(".weTalkTransmitList").html("");
                        data.weTalkPerList.forEach((item, index) => {
                            $(".weTalkTransmitList").append(`
                                                    <div class="weTalkTransmitItem">
                                                      <div class="weTalkTransmitItemLeft">
                                                        <div class="weTalkTransmitItemLeftAvatar"></div>
                                                        <div class="weTalkTransmitItemLeftTitle">${item.nickname}</div>
                                                      </div>
                                                      <input type="checkbox" name="weTalkTransmitObj" value="${item.friendUserId}" class="weTalkTransmitItemRight weTalkPointer"></input>
                                                    </div>
                                                    `)

                        })
                        $(".weTalkTransmitList").append(`
                        <div class="weTalkTransmitItem">
                        <div class="weTalkTransmitItemLeft">
                          <div class="weTalkTransmitItemLeftAvatar"></div>
                          <div class="weTalkTransmitItemLeftTitle">聊天室</div>
                        </div>
                        <input type="checkbox" name="weTalkTransmitObjP" value="${data.roomId}" class="weTalkTransmitItemRight weTalkPointer"></input>
                      </div>
                        `)
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
                        alert("至少要选中一个！");
                        return;
                    } else {
                        // 遍历数组发送消息
                        data.transmitChoosedArr.forEach((item, index) => {
                            if (data.messageType == 1) {
                                data.port.postMessage(
                                    {
                                        portName: data.portName,
                                        senderId: data.id,
                                        targetId: item.value,
                                        content: data.transmitSetence,
                                        isPublic: item.type,
                                        messageType: 1,
                                        senderNickname: data.nickname
                                    }
                                )
                            }
                        })
                        // 初始化
                        $(".weTalkTransmitItemRight").prop("checked", false);
                        data.emojSrctransmitChoosedArr = [];
                        data.transmitChoosedArr = [];
                        data.flag = 0;
                        $(".weTalkTransmit").hide();
                    }
                })
            };


            // 聊天交互（结束）

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
            function compress(currentfile, callback) {
                if (typeof (FileReader) === 'undefined') {
                    console.log("当前浏览器内核不支持base64图片压缩")
                    directTurnIntoBase64(currentfile, callback);
                } else {
                    try {
                        // 获取图片的原始大小
                        let picNatW, picNatH;
                        getImageInfo(URL.createObjectURL(currentfile), function (width, height) {
                            // 在这里面使用
                            picNatW = width;
                            picNatH = height;
                            var reader = new FileReader();
                            reader.onload = function (event) {
                                let image = $(`<img/>`);
                                image.on('load', function () {
                                    var squareH = 217,//定义画布大小,也就是图片压缩之后的像素
                                        squareW = picNatW / picNatH * squareH,
                                        canvas = document.createElement('canvas'),
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

            // 压缩回调
            function check(imgBase64) {
                console.log(1);
                data.imgBase64 = imgBase64;
                data.upFile = convertBase64UrlToFile(data.imgBase64, (new Date()).valueOf() + '.png')
                $("#weTalkYsPic").attr({ "src": data.imgBase64 })
                $(".weTalkYsPic").show();
                // if (data.upFile.size > data.maxSize) {
                //   console.log(2);
                //   data.picWeight -= 0.05;
                //   compress(data.upFile, check)
                // } else {
                //   console.log(3);
                //   $("#weTalkYsPic").attr({ "src": data.imgBase64 })
                //   $(".weTalkYsPic").show();
                // }
            }

            function checkAva(imgBase64) {
                data.imgBase64 = imgBase64;
                $(".weTalkavatarPreviewImg").attr({ "src": data.imgBase64 })
                $(".weTalkavatarPreview").show();


                // data.upAvatarFile = convertBase64UrlToFile(data.imgBase64, (new Date()).valueOf() + '.png')
                var options = {
                    aspectRatio: 1, // 纵横比
                    viewMode: 2,
                    preview: ".weTalkavatarPreviewCj", // 预览图的class名
                };
                $(".weTalkavatarPreviewCj").show();
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

            // 将base64转化为图片
            function convertBase64UrlToFile(urlData, filename) {
                var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new File([u8arr], filename, { type: mime })
            }


            // 发送图片
            function uploadFile(type, upFile) {
                let params = new FormData();
                params.append("file", upFile, upFile.name);
                upload(type, params, data.token).then(res => {
                    if (res.code == 1) {
                        if (type == 2) {
                            data.filePath = res.message;
                            if (data.isPublic == 0) {
                                data.port.postMessage({ content: data.filePath, messageType: 2, portName: data.portName, isPublic: data.isPublic, targetId: data.friendId, senderId: data.id, senderNickname: data.nickname, avatar: data.avatar, sex: data.sex, vip: data.vip })
                            } else {
                                data.port.postMessage({ content: data.filePath, messageType: 2, portName: data.portName, isPublic: data.isPublic, targetId: data.roomId, senderId: data.id, senderNickname: data.nickname, avatar: data.avatar, sex: data.sex, vip: data.vip });
                            }
                            $(".weTalkSendPicSuc").show();
                            $(".weTalkYsPickbtns").hide();
                            setTimeout(function () {
                                $(".weTalkSendPicSuc").hide();
                                $('.weTalkYsPic').hide();
                                $("#weTalkSendPic").val('');
                                $(".weTalkYsPickbtns").show();
                            }, 3000)
                        } else if (type == 1) {
                            data.avatarPath = JSON.parse(JSON.stringify(res)).message.replace(/\\/g, "/");
                            updateAvatar(res.message, data, roomId, data.token).then(res1 => {
                                if (res1.code == 1) {
                                    $(".weTalkAvatarSuc").show();
                                    setTimeout(function () {
                                        $(".weTalkAvatarSuc").hide();
                                    }, 3000)
                                    info(data.token).then(res2 => {
                                        data.avatar = res2.data.avatar;
                                        $(".weTalkPersonalInfoContent").children(".weTalkChangeAvatar").children(".weTalkCurAvater").attr("src", data.cdn + data.avatar.replace(/\\/g, "/"))
                                        $(".weTalkAvatarImg").attr("src", data.cdn + data.avatar.replace(/\\/g, "/"))
                                    })
                                }
                            })
                        }
                    } else {
                        if (type == 2) {
                            $(".weTalkSendPicFail").show();
                            setTimeout(function () {
                                $(".weTalkSendPicFail").hide();
                            }, 3000)
                        } else {
                            if (type == 1) {
                                $(".weTalkAvatarFail").show();
                                setTimeout(function () {
                                    $(".weTalkAvatarFail").hide();
                                }, 3000)
                            }
                        }
                    }
                })
            }

            // 左拉收缩私聊列表
            function hidePersonalList() {
                if ($(".weTalkLeft").css("display") == 'none') {
                    $(".weTalkLeft").show();
                    $(".weTalkMain").width(850)
                    $('.weTalkZlShrink').children(".weTalkZlIcon").css({ "transform": "rotate(360deg)" })
                    // console.log($(".weTalkMain").width())
                } else {
                    $(".weTalkLeft").hide();
                    $(".weTalkMain").width(700)
                    $('.weTalkZlShrink').children(".weTalkZlIcon").css({ "transform": "rotate(180deg)" })
                }
                $('.weTalkZlShrink').children(".weTalkZlIcon").css({ "transition": "transform 0.5s" })
            }

            // 右拉显示用户列表
            function showUserList() {
                if ($(".weTalkUsers").css("display") == "none") {
                    $(".weTalkUsers").show()

                } else {
                    $(".weTalkUsers").css({ display: "none" });
                }
            }

            // 移入
            function showRemoveUser() {
                if ($(this).attr("data-ischoosed") == "a") {
                    $(this).css({ "background": "#E6DDFF" })
                    $(this).children('.weTalkNewsRecords').hide();
                    $(this).children('.weTalkRemoveUser1').show()
                }
                $(this).siblings().each(function () {
                    if ($(this).attr("data-ischoosed") == "a") {
                        $(this).css({ background: "#ede7ff" });
                    }
                })
            }

            // 移出
            function hideRemoveUser() {
                if ($(this).attr("data-ischoosed") == "a") {
                    $(this).css({ "background": "#ede7ff" })
                    if (data.weTalkPerList[$(this).attr("data-index")].UnReadNum != 0) {
                        $(this).children('.weTalkNewsRecords').show();
                    }
                    // }
                    $(this).children('.weTalkRemoveUser1').hide();
                }
            }

            // 点击私人用户
            function showChoosedUser() {
                data.friendId = $(this).attr("data-id");
                data.friendIndex = $(this).attr("data-index");
                $(this).attr("data-ischoosed", "b");
                // $(this).attr("data-chooseOnce", 1)
                $(this).css({ background: "#944EEA" });
                $(this).children(".weTalkItemNick").css({ color: "#fff" });
                $(this).children(".weTalkNewsRecords").hide();
                $(this).children(".weTalkNewsRecords").html("");
                data.weTalkPerList[data.friendIndex].UnReadNum = 0;
                $(this).children('.weTalkRemoveUser2').show()

                $(this).siblings().attr("data-ischoosed", "a");
                $(this).siblings().css({ background: "#ede7ff" });
                $(this).siblings().children('.weTalkRemoveUser2').hide();
                $(this).siblings().children('.weTalkRemoveUser1').hide();
                $(this)
                    .siblings()
                    .children(".weTalkItemNick")
                    .css({ color: "#944eea" });

                // 加载聊天记录
                loadByFriend(data.friendId, $(this).attr("data-index"));
            }

            // 用户设置
            function setUserInfo() {
                if ($(".weTalkUserSet").css("display") == "none") {
                    $(".weTalkUserSet").css({ "display": "block" })
                } else {
                    $(".weTalkUserSet").css({ "display": "none" })
                }
            }

            // VIP会员个人信息
            function MemberInfo() {
                $("#weTalkMemberRank").html(`
                  <div class="weTalkPersonalInfoHigh">用户等级</div>
                  <div class="weTalkPersonalInfoVIP">VIP会员</div>
                `)
                $(".weTalkMemberRight").hide();
                $("#weTalkUserSex").after(`
                          <div class="weTalkMemberHeaderContent">
                            <div class="weTalkPersonalInfoHigh">用户头像</div>
                            <div class="weTalkMemberHeader">
                              <img src="./images/avatar.jpg" class="weTalkMemberHeaderImg" />
                              <div class="weTalkPurpleMiniFont">更换头像</div>
                            </div>
                          </div>
                `)
            }

            // 获取用户私聊列表
            function getFriendList() {
                getFriends(data.token).then(res => {
                    if (res.code == 1) {
                        let weTalkPerList = res.data;
                        weTalkPerList.forEach(item => {
                            if (!(item.sex)) {
                                item.sex == 0;
                            }
                            item.load = false;
                            item.records = [];
                            item.addFriendType = 1;
                            item.UnReadNum = 0;
                            if (item.nickname) {
                                item.avatarDefault = item.nickname.substring(0, 1);
                            } else {
                                item.avatarDefault = "用";
                            }
                        })
                        data.weTalkPerList = weTalkPerList;
                        // 重新渲染私聊列表
                        showPersonalList();
                    }
                })
            };

            // 获取在线用户列表和数量
            function getOnlineUsersRequest() {
                getOnlineUsers(data.roomId).then(res => {
                    if (res.code == 1) {
                        data.weTalkUsersItemList = res.data.roomOnlineUser;
                        data.weTalkUsersNum = res.data.roomOnlineUserNum;
                        data.weTalkUsersItemList.forEach((item, index) => {
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
                    if (data.weTalkUsersItemList[i].vip) {
                        weTalkUsersItem.children(".weTalkItemNick").hide();
                        weTalkUsersItem.children(".weTalkItemNickVip").show();
                    } else {
                        weTalkUsersItem.children(".weTalkItemNick").show();
                        weTalkUsersItem.children(".weTalkItemNickVip").hide();
                    }

                    if (data.weTalkUsersItemList[i].sex == 1) {
                        weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                    } else if (data.weTalkUsersItemList[i].sex == 2) {
                        weTalkUsersItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": chrome.extension.getURL('./images/girl.png') })
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



                $(".weTalkOnlineCount").children("span").html(`在线人数：${data.weTalkUsersNum}人`)
                // 给用户列表的每个对象添加点击事件
                addUsersToPer();

            };

            // 渲染私聊列表
            function showPersonalList() {
                let weTalkChatItem;
                $(".weTalkChatItemList").html("");
                for (let j = 0; j < data.weTalkPerList.length; j++) {
                    weTalkChatItem = $(
                        `
                                    <div class="weTalkChatItem">
                                      <div class="weTalkChatItemAvatar">
                                        <img class="weTalkBoy"></img>
                                        <div class="weTalkItemDeAvatar">${data.weTalkPerList[j].avatarDefault}</div>
                                        <img class="weTalkUserAvatar">
                                      </div>
                                      <div class="weTalkItemNick weTalkTextDis">${data.weTalkPerList[j].nickname}</div>
                                      <div class="weTalkItemNickVip weTalkTextDis">${data.weTalkPerList[j].nickname}</div>
                                      <div class="weTalkNewsRecords">${data.weTalkPerList[j].UnReadNum}</div>
                                      <img class="weTalkRemoveUser1 weTalkRemoveUser" src="./images/close.png" />
                                      <img class="weTalkRemoveUser2 weTalkRemoveUser" src="./images/closeCho.png">
                                    </div>
                                  `
                    );

                    weTalkChatItem.children(".weTalkRemoveUser1").attr({ "src": chrome.extension.getURL('./images/close.png') });
                    weTalkChatItem.children(".weTalkRemoveUser2").attr({ "src": chrome.extension.getURL('./images/closeCho.png') });

                    if (data.weTalkPerList[j].avatar) {
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").hide();
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").attr("src", data.cdn + data.weTalkPerList[j].avatar.replace(/\\/g, '/')).show();
                    } else {
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkItemDeAvatar").show();
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkUserAvatar").hide();
                    }

                    if (data.weTalkPerList[j].UnReadNum == 0) {
                        weTalkChatItem.children(".weTalkNewsRecords").hide();
                    }
                    if (data.weTalkPerList[j].vip == "1") {
                        weTalkChatItem.children(".weTalkItemNick").hide();
                        weTalkChatItem.children(".weTalkItemNickVip").show();
                    } else {
                        weTalkChatItem.children(".weTalkItemNick").show();
                        weTalkChatItem.children(".weTalkItemNickVip").hide();
                    }

                    if (data.weTalkPerList[j].sex == "1") {
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                    } else if (data.weTalkPerList[j].sex == "0") {
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").attr({ "src": chrome.extension.getURL('./images/girl.png') })
                    } else {
                        weTalkChatItem.children(".weTalkChatItemAvatar").children(".weTalkBoy").hide();

                    }

                    // 初始化自定义属性
                    weTalkChatItem.attr("data-ischoosed", "a");
                    weTalkChatItem.attr("data-index", j);
                    weTalkChatItem.attr("data-id", data.weTalkPerList[j].friendUserId)
                    weTalkChatItem.attr("data-associateId", data.weTalkPerList[j].id)

                    // if (!(data.weTalkPerList[j].isRead)) {
                    //   weTalkChatItem.attr("data-chooseOnce", 0);
                    //   weTalkChatItem.children(".weTalkNewsRecords").show();
                    // } else {
                    //   weTalkChatItem.attr("data-chooseOnce", 1);
                    //   weTalkChatItem.children(".weTalkNewsRecords").hide();
                    // }

                    // 点击触发事件
                    weTalkChatItem.off("click").on("click", showChoosedUser);
                    weTalkChatItem.children(".weTalkRemoveUser1").off("click").on("click", openRemoveDiag)
                    weTalkChatItem.children(".weTalkRemoveUser2").off("click").on("click", openRemoveDiag)
                    $(".weTalkRemoveDiagbtn1").off("click").on("click", function () {
                        $(".weTalkRemoveDiag").hide()
                    });
                    $(".weTalkRemoveDiagbtn2").off("click").on("click", function () {
                        removeUserRequest(data.RemoveFood, data.token);
                    });

                    // 移入移出触发事件
                    weTalkChatItem.on("mouseenter", showRemoveUser)
                    weTalkChatItem.on("mouseleave", hideRemoveUser)
                    // console.log("addFriendType", data.weTalkPerList[j], data.weTalkPerList[j].addFriendType)
                    if (data.weTalkPerList[j].addFriendType == 2) {
                        // 默认选中状态
                        weTalkChatItem.attr("data-ischoosed", "b");
                        // weTalkChatItem.attr("data-chooseOnce", 1)
                        // data.weTalkPerList[j].isRead = true;
                        data.weTalkPerList[j].addFriendType = 1;
                        weTalkChatItem.css({ background: "#944EEA" });
                        weTalkChatItem.children(".weTalkItemNick").css({ color: "#fff" });
                        weTalkChatItem.children(".weTalkNewsRecords").hide();
                        // weTalkChatItem.children('.weTalkRemoveUser2').show()
                        weTalkChatItem.children('.weTalkRemoveUser2').css({ "display": "inline" });

                        weTalkChatItem.siblings().attr("data-ischoosed", "a");
                        weTalkChatItem.siblings().css({ background: "#ede7ff" });
                        weTalkChatItem.siblings().children('.weTalkRemoveUser2').hide();
                        weTalkChatItem.siblings().children('.weTalkRemoveUser1').hide();
                        weTalkChatItem
                            .siblings()
                            .children(".weTalkItemNick")
                            .css({ color: "#944eea" });
                        // 加载聊天记录
                        loadByFriend(data.friendId, j);
                    }
                    weTalkChatItem.appendTo($(".weTalkChatItemList"))
                }
            };

            // 加载站内信
            function loadSystemNews() {
                getInboxMessageList(data.systemCurrent, data.systemSize, data.token).then(res => {
                    if (res.code == 1) {
                        data.systemNews = res.data.records;
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
                            console.log("item.state", item.state)
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
                            delIcon.children("img").attr({ "src": chrome.extension.getURL("./images/del.png") })
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
                            let ev = e || event
                            let clickI = $(this).attr("data_index");
                            let sex = $(this).attr("data_sex");
                            let nickname = data.weTalkUsersItemList[clickI].nickname;
                            $(".weTalkUsersOpe").html(`
                <div class="weTalkUsersOpeOne">
                  <div class="weTalkUsersOpeOneF">
                    <div class="weTalkUsersOpeOneAvatar"></div>
                    <img class="weTalkUsersOpeOneSex">
                    <div class="weTalkUsersOpeOneNick">${nickname}</div>
                  </div>
                  <div class="weTalkUsersSl weTalkPointer">私聊</div>
                </div>
                <div class="weTalkPerSign">
                  非官方认证平平无奇说废话的小天才,嚯嚯嚯嚯
                </div>
                <div class="weTalkHisLooking">
                  <div class="weTalkTzk">TA在看</div>
                  <div class="weTalkTzkWeb">
                    网易严选 儿童格纹长袖衬衫...
                  </div>
                </div>
                  `);
                            if (sex == 1) {
                                $(".weTalkUsersOpe").children(".weTalkUsersOpeOne").children(".weTalkUsersOpeOneF").children(".weTalkUsersOpeOneSex").attr({ "src": chrome.extension.getURL('./images/boy.png') })
                            } else {
                                $(".weTalkUsersOpe").children(".weTalkUsersOpeOne").children(".weTalkUsersOpeOneF").children(".weTalkUsersOpeOneSex").attr({ "src": chrome.extension.getURL('./images/girl.png') })
                            }
                            $(".weTalkUsersOpe").children(".weTalkUsersOpeOne").children(".weTalkUsersSl").off("click").on("click", function () {
                                if (data.vip) {
                                    // 判断元素是否重复，如不重复将该用户加载到私聊列表
                                    let isHas = false;
                                    for (let i = 0; i < data.weTalkPerList.length; i++) {
                                        if (data.weTalkUsersItemList[clickI].id == data.weTalkPerList[i].friendUserId) {
                                            isHas = true;
                                            $(".weTalkAddRepeatly").show();
                                            window.setTimeout(function () {
                                                $(".weTalkAddRepeatly").hide();
                                            }, 3000)
                                            break;
                                        }
                                    }
                                    if (!isHas) {
                                        if (data.weTalkUsersItemList[clickI].id != data.id) {
                                            addUserRequest(data.weTalkUsersItemList[clickI].id, clickI);
                                        }
                                    }
                                } else {
                                    $(".weTalkNotMember").show();
                                    setTimeout(function () {
                                        $(".weTalkNotMember").hide();
                                    }, 3000)
                                }
                            })
                            $(".weTalkUsersOpe").css({ "top": `${ev.pageY - $(".weTalkUsersOpe").height() / 2 - ($(".weTalkChatRoom")[0].offsetTop - $(".weTalkChatRoom").height() / 2)}px` })
                            $(".weTalkUsersOpe").show();
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

            // 窗口可拖动
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
                            // else if (DragTop > document.documentElement.clientHeight - Drag.height() / 2) {
                            //   DragTop = document.documentElement.clientHeight - Drag.height() / 2;
                            // }
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

            // 窗口宽度可拉动
            function zdyWeTalkWidth() {
                let weTalkMain = $(".weTalkMain");
                let weTalkTz = $(".weTalkTz")
                weTalkTz.on("mousedown", function (event) {
                    let ev = event || window.event;
                    let startX = ev.clientX - weTalkMain[0].offsetWidth;
                    $(document).on("mousemove", function (e) {
                        let ee = e || window.e;
                        let wid = ee.clientX - startX;
                        if (wid < 594) {
                            wid = 594;
                        }
                        if (wid > 850) {
                            wid = 850;
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
                switch ($(this).attr("class")) {
                    case "weTalkChatFace1":
                        data.gameType = 4;
                        break;
                    case "weTalkChatFace2":
                        data.gameType = 5;
                        break;
                    case "weTalkChatFace3":
                        data.gameType = 6;
                        break;
                }
                if (data.friendId == data.roomId) {
                    specialMessage(data.gameType, data.roomId, "", data.token)
                } else {
                    specialMessage(data.gameType, "", data.friendId, data.token).then(res => {
                        data.slYxMsg = res.data;
                        data.weTalkPerList[data.friendIndex].records.push(data.slYxMsg)
                        loadByFriendOne();
                    })
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
                            return msg.content.replace(/\[emoj\]/g, "<img src='./images/face/").replace(/\[\/emoj\]/g, ".png'>").replace(/\\n/g, "<br>")
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
                $(document).off("keydown").on("keydown", function (e) {
                    var ev = e || window.event; //兼容
                    // console.log("evKeyCode",ev.keyCode);
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
                    if (ev.keyCode === 13 && !(ev.ctrlKey)) {
                        if (data.sendState) {
                            weTalkMsg = $(".weTalkChatFrame").html().replace(/<[^/]+>/g, "\\n")
                            // for (let i = 0; i < data.emojSrc.length; i++) {
                            //   weTalkMsg = weTalkMsg.replace(/<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/, `[emoj]${data.emojSrc[i]}[/emoj]`);
                            // }
                            // weTalkMsg = weTalkMsg.replace(/<\/+.+?>/g, "")
                            // 初始化表情列表
                            // data.emojSrc = [];
                            if (weTalkMsg == "") {
                                return false;
                            }
                            if (data.isValid) {
                                if (!(data.isLoadRecords)) {
                                    let vip;
                                    if (data.vip) {
                                        vip = 1
                                    } else {
                                        vip = 0;
                                    }
                                    if (data.isPublic == 0) {
                                        let avatar;
                                        if (data.avatar == null) {
                                            avatar = "";
                                        }
                                        data.port.postMessage({ content: weTalkMsg, messageType: 1, portName: data.portName, isPublic: data.isPublic, targetId: data.friendId, senderId: data.id, senderNickname: data.nickname, avatar: avatar, sex: data.sex, vip: vip });
                                    } else {
                                        let avatar;
                                        if (data.avatar == null) {
                                            avatar = "";
                                        }
                                        data.port.postMessage({ content: weTalkMsg, messageType: 1, portName: data.portName, isPublic: data.isPublic, targetId: data.roomId, senderId: data.id, senderNickname: data.nickname, avatar: avatar, sex: data.sex, vip: vip });
                                    }
                                }
                            }
                            $(".weTalkChatFrame").html('');
                            data.sendState = false;
                            setTimeout(function () {
                                data.sendState = true;
                            }, 5000)
                            // 让滚动条一直处于底部
                            $(".weTalkChatMain").scrollTop($(".weTalkChatMain")[0].scrollHeight);
                            ev.preventDefault();
                            return false;
                        } else {
                            ev.preventDefault();
                            $(".weTalkSendFrequently").show();
                            setTimeout(() => {
                                $(".weTalkSendFrequently").hide();
                            }, 2000);
                            return false;
                        }
                    }
                });
            };


            // 获取私聊聊天记录
            function getPrivateLogRequest(targetId, token, myindex) {
                console.log(data.weTalkPerList)
                getPrivateLog(targetId, token).then(res => {
                    data.weTalkPerList[myindex].records = res.data;
                    data.weTalkPerList[myindex].records.forEach((item, index) => {
                        item.addFriendType = 2;
                        console.log(item.senderId, data.id)
                        if (item.senderId == data.id) {
                            item.nickname = data.nickname;
                            item.avatar = data.avatar;
                            item.sex = data.sex;
                            item.vip = data.vip;
                            item.avatarDefault = data.nickname.substring(0, 1)
                        } else {
                            for (let i = 0; i < data.weTalkPerList.length; i++) {
                                if (item.senderId == data.weTalkPerList[i].friendUserId) {
                                    item.nickname = data.weTalkPerList[i].nickname;
                                    item.avatar = data.weTalkPerList[i].avatar;
                                    item.sex = data.weTalkPerList[i].sex;
                                    item.vip = data.weTalkPerList[i].vip;
                                    item.avatarDefault = data.weTalkPerList[i].nickname.substring(0, 1)
                                    break;
                                }
                            }
                        }

                        if (item.messageType == 1 || item.messageType == 2) {
                            item.content = disposeText(item)
                        }
                        loadRecords(item, index);
                    })
                    // 加载交互
                    recordsPoolOpe();
                    $('.weTalkChatMain').children(".weTalkLoadRecord").css({ "visibility": "hidden" })
                    data.isLoadRecords = false;
                })

            }

            // 获取聊天室聊天记录
            function getPublicLogRequset(roomId, token) {
                getPublicLog(roomId, token).then(res => {
                    if (res.code == 1) {
                        data.chatPublicRecords = res.data;
                        if (data.chatPublicRecords) {
                            $(".weTalkChatMain").html("");
                            data.chatPublicRecords.forEach((item, index) => {
                                if (item.messageType == 1 || item.messageType == 2) {
                                    item.content = disposeText(item)
                                }
                                item.nickname = item.senderNickname;
                                loadRecords(item, index);
                            })
                        }
                        // 加载交互
                        recordsPoolOpe();
                        $(".weTalkLoadRecord").css({ "visibility": "hidden" })
                        data.isLoadRecords = false;
                    }
                })
            }

            // 从用户列表添加到聊天列表
            function addUserRequest(friendId, clickI) {
                addUser(friendId, data.token).then(res => {
                    if (res.code == 1) {
                        let isHas = false;
                        for (let i = 0; i < data.weTalkPerList.length; i++) {
                            if (friendId == data.weTalkPerList[i].friendUserId) {
                                isHas = true;
                                $(".weTalkAddRepeatly").show();
                                window.setTimeout(function () {
                                    $(".weTalkAddRepeatly").hide();
                                }, 3000)
                                break;
                            }
                        }
                        if (!isHas) {
                            $(".weTalkAddSuc").show();
                            window.setTimeout(function () {
                                $(".weTalkAddSuc").hide();
                            }, 3000)
                            $(".weTalkUsersOpe").hide();
                            let obj = JSON.parse(JSON.stringify(data.weTalkUsersItemList[clickI]));
                            obj.records = [];
                            obj.friendUserId = data.weTalkUsersItemList[clickI].id;
                            obj.id = res.data;
                            obj.load = false;
                            obj.UnReadNum = 0;
                            data.weTalkPerList.unshift(obj);
                            obj = {};
                            showPersonalList();
                        }
                    }
                })
            }

            // 从私聊列表移除
            function removeUserRequest(associateId, token) {
                removeUser(associateId, token).then(res => {
                    if (res.code == 1) {
                        $(".weTalkRemove").show();
                        window.setTimeout(function () {
                            $(".weTalkRemove").hide();
                        }, 3000)
                        if (data.friendId == data.removeFriendId) {
                            $(".weTalkChatMain").html("");
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
                    if (data.point - data.memberPrice > 0) {
                        console.log("可以购买")
                    } else {
                        console.log("积分不足")
                    }
                    buyVipPayment(data.memberId, data.token).then(res => {
                        if (res.code == 1) {
                            $(".weTalkStartMember").hide();
                            info().then(res => {
                                if (res.code == 1) {
                                    data.vip = res.data.vip;
                                    $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoVip").show();
                                    $("#weTalkNick").children(".weTalkPersonalInfoJhNick").children(".weTalkPersonalInfoLow").hide();
                                    $("#weTalkNick").children(".weTalkPersonalInfoLow").hide();
                                    $("#weTalkNick").children(".weTalkPersonalInfoVip").show();
                                    $(`
                    <label class="weTalkChangeMethod weTalkPointer" for="weTalkChangeMethodInput">更改头像</label>
                    <input id="weTalkChangeMethodInput" type="file">
                  `).insertAfter(userInfo.children('.weTalkChangeAvatar').children(".weTalkDeInfoAvatar"));
                                }
                            })
                        }
                    })
                } else {
                    $(".weTalkStartMemberAlert").show();
                    setTimeout(function () {
                        $(".weTalkStartMemberAlert").hide();
                    }, 3000);
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
                        $(".weTalkSignInView").css({ "background-image": `url(${chrome.extension.getURL('./images/sView.png')}) ` })
                        for (let j = 0; j < data.weTalkSignDays; j++) {
                            let weTalkASign = $(`
              <div class="weTalkSignDay">
                <div class="weTalkSignImg">+${data.weTalkSignPoints[j]}</div>
                <div class="weTalkSignFont">第${data.weTalkSignArr[j]}天</div>
              </div>
          `)
                            weTalkASign.children(".weTalkSignImg").css({ "background-image": `url(${chrome.extension.getURL('./images/s00.png')}) ` })
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
                            weTalkSign.children(".weTalkSignFont").css({ "margin-top": "10px" })
                            weTalkSign.children(".weTalkSignDiyImg").css({ "margin-top": "10px" })
                            weTalkSign.appendTo($(".weTalkSignDays"))
                        }
                        hasSignIn(data.token).then(res1 => {
                            if (res1.code == 1) {
                                if (!(res1.data)) {
                                    $(".weTalkGetQdRevenue").attr({ "src": chrome.extension.getURL('./images/getJf.png') });
                                    $(".weTalkGetQdRevenue").off("click").on("click", function () {
                                        signIn(data.token).then(res1 => {
                                            if (res1.code == 1) {
                                                $(".weTalkSignSuc").show();
                                                setTimeout(function () {
                                                    $(".weTalkSignSuc").hide();
                                                }, 3000)
                                                getSignInfoRe();
                                                info(data.token).then(res => {
                                                    data.point = res.data.point;
                                                    $(".weTalkPointVal").html(`
                                  ${data.point}
                                `)
                                                })
                                            }
                                        })
                                    })
                                } else {
                                    $(".weTalkGetQdRevenue").attr({ "src": chrome.extension.getURL('./images/sure.png') });
                                    $(".weTalkGetQdRevenue").off("click").on("click", function () {
                                        $(".weTalkSignInView").hide();
                                    })
                                }
                            }
                        })
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
                        $("#weTalkReg").val("")
                        localStorage.setItem("token", res.message);
                        $(".weTalkRegSuc").show();
                        setTimeout(function () {
                            $(".weTalkRegSuc").hide();
                            $(".weTalkRegView").hide();
                            startChatRoom();
                        }, 3000)
                    }
                })
            }
            // 全局方法结束



            // 启动聊天框
            function startChatRoom(res) {
                // 先判断有没有token，没有token就去通过账号登录
                if (localStorage.getItem("token")) {
                    // 如果有token就判断是否是第一次打开聊天框
                    $(".weTalkIconTip").hide();
                    // 获取当前的url
                    if (data.isFirstStart) {
                        data.token = localStorage.getItem("token")
                        // 已经通过账号登录
                        if (data.isLoginByAccount) {
                            initialInfo(res);
                        } else {
                            data.curDomain = window.location.href;
                            data.curTitle = document.title;
                            // 尚未通过账号登录
                            loginReuqest();
                        }
                        data.unReadTipNum = 0;
                        data.isFirstStart = false;
                    } else {
                        if ($(".weTalkChatRoom").css("display") == "none") {
                            $(".weTalkChatRoom").css({ "display": "block" })
                            $(".weTalkCover").css({ "display": "block" })
                            // 阻止滚动条滚动
                            $("body").css({ "overflow-y": "auto" })
                        } else {
                            $(".weTalkChatRoom").css({ "display": "none" })
                            $(".weTalkCover").css({ "display": "none" })
                            // 恢复滚动条滚动
                            $("body").css({ "overflow-y": "" })
                        }
                    }
                } else {
                    // 登录
                    data.curDomain = window.location.href;
                    data.curTitle = document.title;
                    if (data.isOpenLoginViewFirst) {
                        let weTalkLogView = $(`
          <div class="weTalkLogView">
            <div class="weTalkFj">您已被封禁</div>
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
            <div class="weTalkLogLSuc">登录成功</div>
            <div class="weTalkSwitchFail">用户名或密码不正确</div>
            <div class="weTalkRegItem">
              <div class="weTalkRegTitle">帐号：</div>
              <input id="weTalkUsername" class="weTalkRegInput" type="text" placeholder="请输入用户名或电子邮箱"/>
            </div>
            <div class="weTalkRegItem">
              <div class="weTalkRegTitle">密码：</div>
              <input id="weTalkUserPswd" class="weTalkRegInput" type="password"/>
            </div>
            <div class="weTalkRegFgPswd weTalkPointer">忘记密码</div>
            <div class="weTalkRegBtns weTalkPointer" id="weTalkLogLBtn">登录</div>
            <div class="weTalkRegBtns weTalkPointer" id="weTalkRegLBtn">注册</div>
          </div>
          `).appendTo("body")

                        weTalkLogView.css({ "background": `url(${chrome.extension.getURL('./images/loginBj.png')})  no-repeat #fff` })
                        $("#weTalkLogLBtn").css({ "background": " #944eea", "color": "#fff", "border": "0" })
                        $("#weTalkRegLBtn").css({ "background": " #fff", "color": "#944eea", "border": "1px solid #944eea" })


                        // 监听输入框
                        $("#weTalkUsername").on("input propertychange", function () {
                            data.weTalkUsername = $("#weTalkUsername").val();
                        });

                        $("#weTalkUserPswd").on("input propertychange", function () {
                            data.weTalkUserPswd = $("#weTalkUserPswd").val();
                        });

                        // 忘记密码
                        $(".weTalkRegFgPswd").click(function () {
                            $(".weTalkFgPswd").show();
                        });

                        $(".weTalkFGbtn1").click(function () {
                            $(".weTalkFgPswd").hide();
                        });

                        $(".weTalkFGbtn2").click(function () {
                            forgetPasswordRequest();
                        });

                        $("#weTalkFGmail").on("input propertychange", function () {
                            data.weTalkFGmail = $("#weTalkFGmail").val();
                        });

                        // 登录
                        $("#weTalkLogLBtn").off("click").on("click", function () {
                            loginByAccountRequest();
                        })

                        // 切换注册
                        $("#weTalkRegLBtn").off("click").on("click", function () {
                            weTalkLogView.hide();
                            weTalkregView.show();
                        })

                        // 忘记密码
                        $(".weTalkRegFgPswd").off("click", function () {

                        })

                        // 注册
                        if ($(".weTalkRegView").length > 0) {
                            $(".weTalkRegView").remove();
                        }
                        let weTalkregView = $(`
            <div class="weTalkRegView">
            <div class="weTalkRegSuc">注册成功</div>
            <div class="weTalkRegCommon"></div>
            <div class="weTalkRegItem" id="weTalkRegNickV">
              <div class="weTalkRegTitle">昵称：</div>
              <input id="weTalkReg" class="weTalkRegInput" type="text" />
              <div class="weTalkChangeNick weTalkPointer">
                换一个<img class="weTalkChangeImg"/>
              </div>
            </div>
            <div class="weTalkRegItem">
              <div class="weTalkRegTitle">帐号：</div>
              <input id="weTalkAccount" class="weTalkRegInput" type="text" placeholder="请输入用户名或电子邮箱"/>
            </div>
            <div class="weTalkRegItem">
            <div class="weTalkRegTitle">密码：</div>
            <input id="weTalkAccountPswd" class="weTalkRegInput" type="password" placeholder="5-20个字符"/>
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
            </div>
            <div class="weTalkRegItemc">
              <input type="checkbox" id="weTalkUserDeal" />
              <span for="weTalkUserDeal">
                <span class="weTalkDealFont">我已阅读并同意</span>
                <span class="weTalkDealFont weTalkPurpleF weTalkPointer" id="weTalkUserXy">《WeTalk用户协议》</span>
                <span class="weTalkDealFont weTalkPurpleF weTalkPointer" id="weTalkZc">《WeTalk隐私政策》</span>
              </span>
            </div>
      
            <div class="weTalkRegBtns weTalkPointer" id="weTalkRegBtn">提交注册</div>
            <div class="weTalkRegBtns weTalkPointer" id="weTalkLogBtn">登录</div>
          </div>
          `).appendTo("body");
                        weTalkregView.css({ "background": `url(${chrome.extension.getURL('./images/loginBj.png')})  no-repeat #fff` })
                        weTalkregView.children("#weTalkRegNickV").children(".weTalkChangeNick").children("img").attr({ "src": chrome.extension.getURL('./images/refresh.png') })

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
                                $(".weTalkRegCommon").html(`请输入4到19位只含有数字字母的帐号`).show();
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
            };
        });
    });
})(jQuery);
