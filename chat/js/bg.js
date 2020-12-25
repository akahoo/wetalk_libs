$(function () {
    let data = {
        wetalkWindowId: "",
        domain: "",
        isHas: false,
    }
    // 设置发消息给前台
    // function sendMessageToContentScript() {
    //     chrome.tabs.query({ active: false }, function (tabs) {
    //         console.log("tabs", tabs)
    //         if (tabs.length > 0) {
    //             for (let i = 0; i < tabs.length; i++) {
    //                 console.log("tabs[i].id", tabs[i].id)
    //                 chrome.tabs.sendMessage(tabs[i].id, "111")
    //             }
    //         }
    //     });
    // }

    // 监听前台发的消息
    chrome.runtime.onMessage.addListener(function (request) {
        console.log(request);
        console.log("id", data.wetalkWindowId)
        // 第一次收到消息
        if (data.wetalkWindowId == "") {
            // 创建新窗口页
            console.log("创建", request)
            data.domain = request.curDomain;
            chrome.windows.create({
                "url": chrome.extension.getURL('weTalk.html') + '?domain=' + request.curDomain + '?title=' + request.curTitle,
                "focused": true,
                "type": "panel",
                "height": 650,
                "width": 1050
            }, function (window) {
                if (window && window.id) {
                    data.wetalkWindowId = window.id;
                    //alert('create:'+wetalkWindowId);
                }
            });
        } else {
            console.log("后续打开")
            // 查看窗口是否被关闭
            chrome.windows.getAll(function (window) {
                console.log("判断id是否相同");
                data.isHas = false;
                for (var i = 0; i < window.length; i++) {
                    console.log(window[i].id, data.wetalkWindowId)
                    if (window[i].id == data.wetalkWindowId) {
                        data.isHas = true;
                        break;
                    }
                }
                // 如果已关闭
                if (!data.isHas) {
                    console.log(1);
                    // 如果切换聊天室
                    if (request.curDomain != data.domain) {
                        console.log(11)
                        // var r = confirm("是否要切换聊天室")
                        // if (r == true) {
                        // console.log("不移除")
                        data.domain = request.curDomain;
                        chrome.windows.create({
                            "url": chrome.extension.getURL('weTalk.html') + '?domain=' + request.curDomain + '?title=' + request.curTitle,
                            "focused": true,
                            "type": "panel",
                            "height": 650,
                            "width": 1050
                        }, function (window) {
                            if (window && window.id) {
                                data.wetalkWindowId = window.id;
                            }
                        });
                        // } else {
                        // return;
                        // }
                    } else {
                        console.log(12)
                        // 如果不切换聊天室
                        data.domain = request.curDomain;
                        chrome.windows.create({
                            "url": chrome.extension.getURL('weTalk.html') + '?domain=' + request.curDomain + '?title=' + request.curTitle,
                            "focused": true,
                            "type": "panel",
                            "height": 650,
                            "width": 1050
                        }, function (window) {
                            if (window && window.id) {
                                data.wetalkWindowId = window.id;
                            }
                        });
                    }
                    // 如果未关闭
                } else {
                    console.log(2)
                    if (request.curDomain != data.domain) {
                        console.log(21)
                        console.log("移除")
                        // var r = confirm("是否要切换聊天室")
                        // if (r == true) {
                        data.domain = request.curDomain;
                        chrome.windows.remove(data.wetalkWindowId)
                        chrome.windows.create({
                            "url": chrome.extension.getURL('weTalk.html') + '?domain=' + request.curDomain + '?title=' + request.curTitle,
                            "focused": true,
                            "type": "panel",
                            "height": 650,
                            "width": 1050
                        }, function (window) {
                            if (window && window.id) {
                                data.wetalkWindowId = window.id;
                            }
                        });
                        // } else {
                        // return;
                        // }
                    } else {
                        console.log(22)
                        chrome.windows.update(data.wetalkWindowId, { focused: true });
                    }
                }
            })
        }
    });














})

