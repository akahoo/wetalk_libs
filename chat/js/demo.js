function recordPoolOpe() {
    // 右键转发他人的话,左键私聊、举报、拉黑
    let weTalkChatOther = $(".weTalkChatMain").children(".weTalkChatOther").last();
    let weTalkChatSelf = $(".weTalkChatMain").children(".weTalkChatSelf").last();
    recordPoolOpeFin(weTalkChatOther, weTalkChatSelf, true);
};

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
            showTip("请5秒以后再发送")
        }
    })
}

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