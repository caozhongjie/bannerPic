$(function () {
    // 点击 banner 下面的按钮
    $('.feature ol li,.banner ol li').click(function (event) {
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.feature ul li').eq(index).stop().fadeIn(500).siblings().fadeOut(0);
        $('.banner ul li').eq(index).stop().fadeIn(500).siblings().fadeOut(0);
        num = index;
    });
    // banner轮播
    var num = 0;
    var timer;

    function banner_toggle() {
        num++;
        if (num > 3) {
            num = 0;
        }
        $('.feature ol li').eq(num).addClass('current').siblings().removeClass('current');
        $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
        $('.feature ul li').eq(num).stop().fadeIn(500).siblings().fadeOut(0);
        $('.banner ul li').eq(num).stop().fadeIn(500).siblings().fadeOut(0);
        // $('.feature ul li').eq(num).stop().siblings().fadeOut(0);
        // $('.feature ul li').eq(num).stop().fadeIn(500);
        //   $('.banner ul li').eq(num).stop().siblings().fadeOut(0);
        //   $('.banner ul li').eq(num).stop().fadeIn(500);
    }

    timer = setInterval(banner_toggle, 3000);
    $('.feature,.banner').mouseenter(function (event) {
        clearInterval(timer);
    }).mouseleave(function (event) {
        clearInterval(timer);
        timer = setInterval(banner_toggle, 3000);
    });
    // banner轮播 结束

    // 展示产品的 轮播
    var geshu = $(".wrapper .image-list ul li").length;
    var json0 = {"width":368, "height":554, "left":'50%', "top":58};
    var json1 = {"width":368, "height":554, "left":'50%', "top":58};
    var json2 = {"width":460, "height":645, "left":'50%', "top":0};
    var json3 = {"width":368, "height":554, "left":'50%', "top":58};
    var json4 = {"width":368, "height":554, "left":'50%', "top":58};

    var nowimg = 0;
    var lock = false;
    var animateTime = 0;
    var timer1;

    // 定时器
    timer1 = setInterval(rightButFunc, 2000);
    $(".wrapper").mouseenter(function(){
        clearInterval(timer1);
    }).mouseleave(function(){
        clearInterval(timer1);
        timer1 = setInterval(rightButFunc, 2000);
    });

    // 右按钮
    $(".right-but").click(rightButFunc);
    function rightButFunc(){
        if(!$(".image-list ul li").is(":animated") || lock){
            if(nowimg < geshu - 1){
                nowimg++;
            }else{
                nowimg = 0;
            }
            // 先交换位置
            $(".image-list .no1").animate(json0,animateTime);
            $(".image-list .no2").animate(json1,animateTime);
            $(".image-list .no3").animate(json2,animateTime);
            $(".image-list .no4").animate(json3,animateTime);
            $(".image-list .no0").animate(json4,animateTime);
            // $(".image-list .no0").css(json4);

            // 再交换身份
            // 先要备忘一下，原有的no6
            var myno4 = $(".no4");
            $(".no0").attr("class","waiting");
            $(".no1").attr("class","no0");
            $(".no2").attr("class","no1");
            $(".no3").attr("class","no2");
            $(".no4").attr("class","no3");
            if(myno4.next().length != 0){
                // 如果myno6后面有东西，那么就让这个东西的类名为mo6
                myno4.next().attr("class","no4");
            }else{
                $(".image-list ul li").eq(0).attr("class","no4");
            }
            // $(".no4").css(json4);
            $(".no4").animate(json4,animateTime);
        }
    }

    // 左按钮
    $(".left-but").click(leftButFunc);
    function leftButFunc(){
        if(!$(".image-list ul li").is(":animated") || lock){
            if(nowimg > 0){
                nowimg --;
            }else{
                nowimg = geshu - 1;
            }
            // 先交换位置
            $(".image-list .no0").animate(json1,animateTime);
            $(".image-list .no1").animate(json2,animateTime);
            $(".image-list .no2").animate(json3,animateTime);
            $(".image-list .no3").animate(json4,animateTime);
            $(".image-list .no4").animate(json0,animateTime);
            // $(".image-list .no4").css(json0);

            // 再交换身份
            //先要备忘一下，原有的no6
            var myno0 = $(".no0");
            $(".no4").attr("class","waiting");
            $(".no3").attr("class","no4");
            $(".no2").attr("class","no3");
            $(".no1").attr("class","no2");
            $(".no0").attr("class","no1");
            if(myno0.prev().length != 0){
                // 如果myno6后面有东西，那么就让这个东西的类名为mo6
                myno0.prev().attr("class","no0");
            }else{
                $(".image-list ul li:last").attr("class","no0");
            }
            // $(".no0").css(json0);
            $(".no0").animate(json0,animateTime);
        }
    }
});