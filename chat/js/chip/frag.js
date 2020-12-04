function fragInit() {
  // console.log("碎片兑换");
  // 全局变量
  let fragd = {
    token: localStorage.getItem("token"),
    cdn: localStorage.getItem("cdn"),
    // 轮播(图)
    imgCount: null,
    index: 1,
    intervalId: null,
    buttonSpan: null,
    moveDisTance: 710,
    marqueeArr: [],
    // 轮播(广播)
    rDistance: 420,
    rIntervalId: null,

    //  奖品
    awardArr: [],
    // 详情
    difficult: null,
    standard: null,
    startTime: null,
    endTime: null,
    fragName: null,
    fragId: null,
    fragUrl: null,

    // 广播
    radioArr: [
      { username: "蚂蚁线", pieceName: "奖品1" },
      { username: "嘛嘛嘛", pieceName: "奖品1" },
      { username: "仙仙仙", pieceName: "奖品1" }],
  };

  // 全局变量结束

  // html
  $(".weTalkFragExChange").remove();
  $(".weTalkFragItemDetails").remove();
  $(`
    <div class="weTalkFragExChange weTalkRightItem">
    <div class="weTalkFragTip"></div>
    <!-- 帮助 -->
    <img class="weTalkFragHelp" src="./images/chip/help.png" />
    <div class="weTalkFragHelpContainer">
      <img class="weTalkFragHelpClose" src="./images/closePersonalInfo.png" />
      <div class="weTalkFragHelpTitle">帮助</div>
      <div class="weTalkFragHelpContent">
        <div class="weTalkFragHelpContentTitle">关于活动</div>
        <div class="weTalkFragHelpContentOne">
          <span>
            “集碎片，赢奖品”是WeTalk组织的一项运营推广活动，用户通过参与和使用平台相关功能，可以随机获得一定的奖品碎片，
          </span>
          <span>
            当集齐某一个奖品的所有碎片后，即可兑换相应的实物奖品。平台会通过电商平台下单 ，将奖品直接邮寄给兑奖用户
          </span>
        </div>
        <div class="weTalkFragHelpContentTitle" style="margin-top:25px">如何获得碎片？</div>
        <div class="weTalkFragHelpContentTwo">
          <div>
            1、日常<span>登录</span>和使用<span>签到</span>功能、
            <span>参与聊天</span>和<span>聊天室活动</span> ，有机会获得
            <span>奖品碎片</span>；
          </div>
          <div>
            2、参与<span>《天天抽奖》</span>
            活动，每天参加免费抽奖，有机会获得奖品碎片；
          </div>
          <div>
            3、在<span>《漂流瓶》</span>
            中，扔瓶子和捡瓶子动作，均有机会获得奖品碎片。同时，当你的瓶子获得其他用户的点赞或者留言互动时，也有机会可以获得奖品碎片。互动越多，获得碎片的概率越大。
          </div>
        </div>
        <div class="weTalkFragHelpContentThree">
          我们鼓励用户参与WeTalk的运营活动，亦本着公平公开的基本原则，维护运营活动长期健康的运行对于利用系统漏洞刷取相关奖励的，有权做出处罚和拒绝兑换。同时，保留活动的最终解释权。
        </div>
        <div class="weTalkFragHelpConfirm">确定</div>
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="weTalkFragCover"></div>
    <!-- 广播 -->
    <div class="weTalkFragRadio">
      <div class="weTalkFragRadioContainer"></div>
    </div>
    <!-- 内容 -->
    <div class="weTalkFragContainer">
      <div class="weTalkFragMarquee">
        <div class="weTalkFragMarqueeList"></div>
        <img class="weTalkFragMarqueeLast" src="./images/chip/lastPage.png" />
        <img class="weTalkFragMarqueeNext" src="./images/chip/nextPage.png" />
      </div>
      <div class="weTalkFragList"></div>
    </div>
  </div>
  <div class="weTalkFragItemDetails weTalkRightItem">
  <div class="weTalkFragTipDetails"></div>
  <div class="weTalkFragDetailsCover"></div>
    <div class="weTalkFragItemDetailsOne">
      <div class="weTalkFragItemDetailsOneInfo">
        <div class="weTalkFragItemDetailsTitle"></div>
        <div class="weTalkFragItemDetailsStars"></div>
      </div>
      <div class="weTalkFragItemDetailsBack">
        <img src="./images/chip/back.png" />
        <span>返回主页</span>
      </div>
    </div>
    <div class="weTalkFragItemDetailsTwo">
      <span>有效期：</span>
      <span></span>
    </div>
    <div class="weTalkFragItemDetailsBlock"></div>
    <div class="weTalkFragItemDetailsContent">
      <div class="weTalkFragItemDetailsCheck">
          <img src="./images/chip/close.png" class="weTalkFragItemDetailsCheckClose"></img>
          <img src="./images/chip/award.png" class="weTalkFragItemDetailsAwardImg"></img>
          <img src="./images/chip/checkAward.png" class="weTalkFragItemDetailsCheckBtn"></img>
      </div>
      <div class="weTalkFragItemDetailsCheckCover"></div>
      <div class="weTalkFragItemDetailsContentLeft">
        <div class="weTalkFragItemDetailsContentLeftContainer"></div>
      </div>
      <div class="weTalkFragItemDetailsContentRight">
          <div class="weTalkFragItemExchangeBtn">立即兑换</div>
          <div class="weTalkFragRule">
              <div class="weTalkFragRuleTitle">规则说明：</div>
              <div class="weTalkFragRuleItem">
                  1、在活动有效期间，集齐当前奖品的所有碎片，即可兑换实物奖品；
              </div>
              <div class="weTalkFragRuleItem">
                  2、兑换过程<span>完全免费</span>，无需用户承担任何费用；
              </div>
              <div class="weTalkFragRuleItem">
                  3、点击“查看奖品”可以了解奖品详细信息，先睹为快；
              </div>
              <div class="weTalkFragRuleItem">
                  4、兑奖成功后，平台将通过电商平台安排发货，直邮给兑奖用户。
              </div>
          </div>
      </div>
    </div>
    <!-- 奖品兑换界面 -->
    <div class="weTalkFragExchangeView">
        <div class="weTalkFragExchangeViewTitle">奖品兑换</div>
        <img class="weTalkFragExchangeViewClose" src="./images/closePersonalInfo.png">
        <div class="weTalkFragReceiverName">
          <div class="weTalkFragReceiverFont">收货人姓名</div>
          <input type="text" class="weTalkFragNameInput" placeholder="请输入你的姓名">
        </div>
        <div class="weTalkFragReceiverPhone">
          <div class="weTalkFragReceiverFont">收货人电话</div>
          <input type="text" class="weTalkFragPhoneInput" placeholder="请输入联系方式"></div>
        <div class="weTalkFragReceiverAddress">
          <div class="weTalkFragReceiverFont" style="margin:5px 32px 0 0;">详细地址</div>
          <textarea class="weTalkFragAddressInput" placeholder="请输入详细地址"></textarea>
        </div>
        <div class="weTalkFragExchangeViewTip">注：为确保奖品可以顺利兑换，请完整的填写收货信息。</div>
        <div class="weTalkFragExchangeViewBtns">
            <div class="weTalkFragExchangeViewBtn1">取消</div>
            <div class="weTalkFragExchangeViewBtn2">确定</div>
        </div>
    </div>
    <!-- 兑换失败提示 -->
    <div class="weTalkFragExchangeFail">
      <img class="weTalkFragExchangeFailClose" src="./images/closePersonalInfo.png">
      <div class="weTalkFragExchangeFailTitle">提示</div>
      <div class="weTalkFragExchangeFailContent">您还没有集齐所有奖品碎片，还要继续加油哦！</div>
      <div class="weTalkFragExchangeFailBtn">确定</div>
    </div>
    <!-- 兑换成功界面 -->
    <div class="weTalkFragExchangeSuc">
    <img class="weTalkFragExchangeSucClose" src="./images/closePersonalInfo.png">
      <div class="weTalkFragExchangeSucContainer">
        <div class="weTalkFragExchangeSucTitle">兑换成功</div>
        <img class="weTalkFragExchangeSucImg" src="./images/chip/suc.png">
        <div class="weTalkFragExchangeSucInfo">
          奖品兑换成功！兑换凭证为：<span></span>
        </div>
        <div class="weTalkFragExchangeSucTip" src="./images/chip/suc.png">
          <div class="weTalkFragExchangeSucTipLeft">
            <div> 我们将尽快安排发货事宜，为保证领奖顺利，请添加客服</div>
            <div>微信，保持必要的沟通</div>
            <div>
              Wetalk官方客服 账号ID：wetalkicu
            </div>
          </div>
          <img class="weTalkFragExchangeSucTipRight" src="./images/chip/erweima.JPG">
        </div>
      </div>
    </div>
  </div>
    `).appendTo($(".weTalkRight"))

  // 初始化
  $(".weTalkRightItem").hide();
  $(".weTalkFragExChange").show();
  // 自动播放
  autoNextPic();
  // 渲染轮播图并绑定事件
  showMaquree();
  maqureeItemFun();
  // 渲染奖品列表并绑定事件
  showAwardList();
  awardItemFun();
  // 帮助绑定事件
  fragHelp();
  closeHelpView();
  // 绑定详情页事件
  bindDetailsEve();
  // 读取获奖广播
  loadRadios();



  // 全局方法
  // 问号点击事件
  function fragHelp() {
    $(document).on("click", ".weTalkFragHelp", function () {
      $(".weTalkFragCover").show();
      $(".weTalkFragHelpContainer").show();
    });
  }
  // 关闭帮助
  function closeHelpView() {
    $(document).on("click", ".weTalkFragHelpClose", function () {
      $(".weTalkFragCover").hide();
      $(".weTalkFragHelpContainer").hide();
    });
    $(document).on("click", ".weTalkFragHelpConfirm", function () {
      $(".weTalkFragCover").hide();
      $(".weTalkFragHelpContainer").hide();
    });
  }

  // 渲染轮播图
  function showMaquree() {
    listCarousel(fragd.token).then(res => {
      if (res.code == 1) {
        fragd.marqueeArr = res.data;
        fragd.imgCount = fragd.marqueeArr.length;
        $(".weTalkFragMarqueeList").html("");
        fragd.marqueeArr.forEach((item) => {
          let weTalkFragMarqueeItem = $(`
                  <img class="weTalkFragMarqueeItem"/>
                    `);
          // 渲染图片
          weTalkFragMarqueeItem.attr("src", fragd.cdn + "/" + item.image);
          // 自定义属性
          weTalkFragMarqueeItem.attr("data-url", item.url);
          weTalkFragMarqueeItem.attr("data-id", item.id);
          if (item.methodName != " ") {
            weTalkFragMarqueeItem.addClass(item.methodName);
          }
          weTalkFragMarqueeItem.appendTo($(".weTalkFragMarqueeList"));
        });
      }
    })
  }



  // 轮播功能(轮播图)
  function nextPic(next) {
    var targetLeft = 0;
    if (next) {
      //  往后走
      //   console.log("往后走");
      if (fragd.index == fragd.imgCount) {
        // console.log("到最后一张，直接跳到第一张");
        //  到最后一张，直接跳到第一张
        targetLeft = 0;
        fragd.index = 1;
      } else {
        fragd.index++;
        targetLeft = -fragd.moveDisTance * (fragd.index - 1);
      }
    } else {
      //  往前走
      //   console.log("往前走");
      if (fragd.index == 1) {
        // console.log("在第一张，直接跳到最后一张");
        //  在第一张，直接跳到最后一张
        fragd.index = fragd.imgCount;
        targetLeft = -fragd.moveDisTance * (fragd.imgCount - 1);
      } else {
        fragd.index--;
        targetLeft = -fragd.moveDisTance * (fragd.index - 1);
      }
    }
    $(".weTalkFragMarqueeList").animate({ left: targetLeft + "px" }, 300);
  }


  // 自动轮播(图片)
  function autoNextPic() {
    fragd.intervalId = setInterval(() => {
      nextPic(true);
    }, 5000);
  }


  // 读取获奖广播
  function loadRadios() {
    allExchangeLog(fragd.token).then(res => {
      if (res.code == 1) {
        fragd.radioArr = res.data;
        $(".weTalkFragRadioContainer").html("");
        if (fragd.radioArr && fragd.radioArr.length > 0) {
          $(".weTalkFragRadio").css("display", "block");
          fragd.radioArr.forEach(item => {
            $(".weTalkFragRadioContainer").append(`<div class="weTalkFragRadioItem">恭喜${item.username}获得${item.pieceName}</div>`)
          })
          if (fragd.radioArr.length > 1) {
            // 自动轮播广播
            autoNextRadio();
          }
        }
      }
    })
  }

  // 文字自动滚动
  function nextRadio() {
    $(".weTalkFragRadioContainer").animate({ top: "-28px" }, 1000, function () {
      $(this).css({ top: "0" });
      let item = $(".weTalkFragRadioContainer").children().first().clone();
      $(this).children().last().after(item);
      $(this).children().first().remove();
    });
  }

  function autoNextRadio() {
    setInterval(nextRadio, 5000);
  }



  //  轮播图绑定事件
  function maqureeItemFun() {
    // 点击加载页面
    $(document).on("click", ".weTalkFragMarqueeItem", function (e) {
      console.log("轮播图url", $(this).attr("data-url"));
      if ($(this).attr("data-url") != "" && $(this).attr("data-url") != null) {
        window.open($(this).attr("data-url"));
      }
      e.preventDefault();
    });
    $(document).on("click", ".marqueeMethod", function (e) {
      goDetails($(this).attr("data-id"));
      e.preventDefault();
    })

    // 上一张图片
    $(document).on("click", ".weTalkFragMarqueeLast", function () {
      nextPic(false);
    });
    // 下一张图片
    $(document).on("click", ".weTalkFragMarqueeNext", function () {
      nextPic(true);
    });
    //  当鼠标移入 停止轮播
    $(document).on("mouseenter", ".weTalkFragMarquee", function () {
      clearInterval(fragd.intervalId);
    });
    //  当鼠标移出，开始轮播
    $(document).on("mouseleave", ".weTalkFragMarquee", function () {
      autoNextPic();
    });
  }

  // 渲染星星
  function showStars(starArr, difficult) {
    starArr.html("")
    for (let j = 0; j < difficult; j++) {
      $(`
          <img class="weTalkFragStar" src="./images/chip/star2.png" />

          `).appendTo(starArr);
    }
    for (let k = 0; k < 5 - difficult; k++) {
      $(`
          <img class="weTalkFragStar" src="./images/chip/star1.png" />

          `).appendTo(starArr);
    }
  }

  // 渲染奖品列表
  function showAwardList() {
    console.log("渲染奖品列表")
    getAwards(fragd.token).then(res => {
      if (res.code == 1) {
        fragd.awardArr = res.data;
        $(".weTalkFragList").html("");
        for (let i = 0; i < fragd.awardArr.length; i++) {
          let weTalkFragItem = $(`
                  <div class="weTalkFragItem">
                    <img class="weTalkFragItemImg"/>
                    <div class="weTalkFragItemTitle">${fragd.awardArr[i].name}</div>
                    <div class="weTalkFragItemTwo">
                        <div class="weTalkFragStarArr"></div>
                        <div class="weTalkFragItemBtn">查看</div>
                    </div>
                  </div>
              `);

          // 渲染图片
          weTalkFragItem.children(".weTalkFragItemImg").attr("src", fragd.cdn + fragd.awardArr[i].image)

          // 自定义属性
          // id
          weTalkFragItem
            .children(".weTalkFragItemTwo")
            .children(".weTalkFragItemBtn")
            .attr("data-id", fragd.awardArr[i].id);

          weTalkFragItem
            .children(".weTalkFragItemImg")
            .attr("data-id", fragd.awardArr[i].id);
          let starArr = weTalkFragItem
            .children(".weTalkFragItemTwo")
            .children(".weTalkFragStarArr");
          let difficult = fragd.awardArr[i].difficult;
          // 难度
          showStars(starArr, difficult)
          weTalkFragItem.appendTo($(".weTalkFragList"));
        }
        // 解决flex space-between的问题
        for (i = 0; i < 3; i++) {
          $(`<div class="weTalkFragItemBlock"></div>`).appendTo($(".weTalkFragList"))
        }
      }
    })

  }

  // 奖品列表事件
  function awardItemFun() {
    $(document).on("click", ".weTalkFragItemBtn", function () {
      // console.log("奖品id", $(this).attr("data-id"));
      goDetails($(this).attr("data-id"));
    });
    $(document).on("click", ".weTalkFragItemImg", function () {
      // console.log("奖品id", $(this).attr("data-id"));
      goDetails($(this).attr("data-id"));
    });
  }

  // 打开详情页
  function goDetails(id) {
    // 获取当前奖品的信息
    $(".weTalkFragItemDetailsContentLeftContainer").html("")
    for (let k = 0; k < fragd.awardArr.length; k++) {
      if (fragd.awardArr[k].id == id) {
        fragd.difficult = fragd.awardArr[k].difficult;
        fragd.standard = fragd.awardArr[k].standard * 1 + 1;
        fragd.startTime = fragd.awardArr[k].startTime;
        fragd.endTime = fragd.awardArr[k].endTime;
        fragd.fragName = fragd.awardArr[k].name;
        fragd.fragId = fragd.awardArr[k].id;
        fragd.fragUrl = fragd.awardArr[k].url;
        break;
      }
    }
    // 渲染详情页
    $(".weTalkFragItemDetailsTitle").html(fragd.fragName);
    // 渲染星星
    let starsArr = $(".weTalkFragItemDetailsStars");
    showStars(starsArr, fragd.difficult);
    // 有效期
    $(".weTalkFragItemDetailsTwo").children("span").last().html(fragd.startTime + "&nbsp;至&nbsp;" + fragd.endTime);
    $(".weTalkFragExChange").hide();
    $(".weTalkFragItemDetails").show();
    // 渲染查看奖品
    $(".weTalkFragItemDetailsCheck").show();
    // 渲染拼图
    getAwardsDetail(id, fragd.token).then(res => {
      let arr = new Array(fragd.standard * fragd.standard).fill(0);
      if (res.code == 1) {
        if (res.data && res.data.length > 0) {
          // 持有个数
          $(`<div class="weTalkFragItemHadNum">持有：${res.data.length}</div>`).appendTo(".weTalkFragItemDetailsContentLeftContainer")

          // 构造数组
          res.data.forEach(item => {
            arr.splice(item.sequence - 1, 1, item)
          })
          // console.log("arr", arr)
          let bulge, top, left, num = 0;
          switch (fragd.standard) {
            case 2:
              bulge = 36;
              break;
            case 3:
              bulge = 24;
              break;
            case 4:
              bulge = 18;
              break;
          }
          console.log("arr", arr)
          let wid = $(".weTalkFragItemDetailsContentLeftContainer").width() / fragd.standard;
          for (let i = 1; i <= fragd.standard; i++) {
            for (let j = 1; j <= fragd.standard; j++) {
              if (arr[num] != 0) {
                top = i == 2 ? top = (i - 1) * wid - bulge : (i - 1) * wid;
                left = j == 3 ? (j - 1) * wid - bulge : (j - 1) * wid;
                $(`
          <img class="fragItem" src="${fragd.cdn}${arr[num].image}">
          `).css({
                  "left": left,
                  "top": top,
                }).appendTo(".weTalkFragItemDetailsContentLeftContainer")
              }
              num++;
            }
          }
        }
      }
    })

  }




  // 绑定详情页事件
  function bindDetailsEve() {
    // 回到主页
    $(document).on("click", ".weTalkFragItemDetailsBack", goBackIndex)
    // 关闭查看奖品界面
    $(document).on("click", ".weTalkFragItemDetailsCheckClose", closeCheckView)
    // 查看奖品
    $(document).on("click", ".weTalkFragItemDetailsCheckBtn", checkAward)
    // 立即兑换
    $(document).on("click", ".weTalkFragItemExchangeBtn", exchangeAward)
    // 取消兑换/关闭兑换界面
    $(document).on("click", ".weTalkFragExchangeViewBtn1", cancelExchange)
    $(document).on("click", ".weTalkFragExchangeViewClose", cancelExchange)
    // 确认兑换
    $(document).on("click", ".weTalkFragExchangeViewBtn2", confirmExchange)
    // 关闭兑换成功页面
    $(document).on("click", ".weTalkFragExchangeSucClose", closeEchangeSuc)
    // 关闭兑换失败页面
    $(document).on("click", ".weTalkFragExchangeFailClose", closeExchangeFail)
    $(document).on("click", ".weTalkFragExchangeFailBtn", closeExchangeFail)
  }

  // 回到主页
  function goBackIndex() {
    $(".weTalkFragExChange").show();
    $(".weTalkFragItemDetails").hide();
  }

  // 查看奖品
  function checkAward() {
    // console.log("url", fragd.fragUrl)
    window.open(fragd.fragUrl);
  }

  // 关闭查看奖品界面
  function closeCheckView() {
    $(".weTalkFragItemDetailsCheck").hide();
    $(".weTalkFragItemDetailsCheckCover").hide();
  }

  // 立即兑换
  function exchangeAward() {
    // 查看兑奖资格
    exchangeStatus(fragd.fragId, fragd.token).then(res => {
      if (res.code == 1) {
        $(".weTalkFragExchangeView").show();
        // $(".weTalkFragExchangeFail").show();

      } else if (res.code == 44444) {
        // $(".weTalkFragExchangeView").show();
        $(".weTalkFragExchangeFail").show();
      }
      $(".weTalkFragDetailsCover").show();
    })

  }

  // 取消兑换
  function cancelExchange() {
    $(".weTalkFragExchangeView").hide();
    $(".weTalkFragDetailsCover").hide();
  }

  // 确定兑换
  function confirmExchange() {
    if ($(".weTalkFragPhoneInput").val().length == 0) {
      showFragTip("手机号码不能为空");
      return;
    }
    if ($(".weTalkFragNameInput").val().length == 0) {
      showFragTip("姓名不能为空");
      return;
    }
    if ($(".weTalkFragAddressInput").val().length == 0) {
      showFragTip("地址不能为空");
      return;
    }
    exchange(fragd.fragId, $(".weTalkFragNameInput").val(), $(".weTalkFragPhoneInput").val(), $(".weTalkFragAddressInput").val(), fragd.token).then(res => {
      if (res.code == 1) {
        $(".weTalkFragExchangeSucInfo").children("span").html(res.message);
        $(".weTalkFragExchangeView").hide();
        $(".weTalkFragExchangeSuc").show();
      } else if (res.code == 44444) {
        $(".weTalkFragExchangeView").hide();
        $(".weTalkFragExchangeFail").show();
      }
    })
  }

  // 关闭兑换失败页面
  function closeExchangeFail() {
    $(".weTalkFragExchangeFail").hide();
    $(".weTalkFragDetailsCover").hide();
  }

  // 关闭兑换成功页面
  function closeEchangeSuc() {
    $(".weTalkFragExchangeSuc").hide();
    $(".weTalkFragDetailsCover").hide();
  }

  // 温馨提示
  function showFragTip(obj) {
    $(".weTalkFragTipDetails").html(obj).show();
    setTimeout(function () {
      $(".weTalkFragTipDetails").hide();
    }, 3000)
  }
}
