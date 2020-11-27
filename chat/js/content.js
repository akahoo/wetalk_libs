
jQuery.noConflict();                //将变量$的控制权让渡给prototype.js
(function ($) {                        //定义匿名函数并设置形参为$
  $(function () {                    //匿名函数内部的$均为jQuery
    $(function () {
      // 全局变量
      let data = {
        curDomain: null,
        curTitle: null,
      }
      console.log("域名", /\.gov\.cn$/.test(window.location.host), window.location.host)

      if (/\.gov\.cn$/.test(window.location.host)) {
        return;
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
        let msg = { curDomain: window.location.href, curTitle: document.title }
        console.log('msg', msg)
        if (typeof chrome.app.isInstalled !== "undefined") {
          chrome.runtime.sendMessage(msg)
        }

      }
    });
  });
})(jQuery);
