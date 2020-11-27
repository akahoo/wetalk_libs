
jQuery.noConflict();                //将变量$的控制权让渡给prototype.js
(function ($) {                        //定义匿名函数并设置形参为$
    $(function () {                    //匿名函数内部的$均为jQuery
        // 全局变量
        let data = {
            curDomain: null,
            curTitle: null,
            ifFirstOpen: true,
        }

        let weTalkStart = $(`
        <div class="weTalkIconContainer">
          <img class="weTalkIcon">
          <div class="weTalkIconTip">0</div>
        </div>
      `)
        weTalkStart.children(".weTalkIcon").attr({ "src": chrome.extension.getURL('./images/logo1.png') });
        weTalkStart.children('.weTalkIconTip').hide();
        weTalkStart.on("click", startChatRoom).appendTo("body");

        // 发送消息给后台，让后台开启服务
        function startChatRoom() {
            if (data.ifFirstOpen) {
                let msg = { curDomain: window.location.href, curTitle: document.title }
                chrome.runtime.sendMessage(msg);
            } else {

            }
        }
    });
})(jQuery);