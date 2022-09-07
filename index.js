var zuop = [
    {
        id: "js",
        path: "./士力架/Javascript/九宫格抽奖.html",
        img: "./士力架/img/js/九宫格抽奖.gif",
        describe: "九宫格抽奖",
    },

    {
        id: "css",
        path: "./士力架/CSS3/视差效果.html",
        img: "./士力架/img/css3/视差.gif",
        describe: "视差效果",
    },

    {
        id: "css",
        path: "./士力架/CSS3/Circle.html",
        img: "./士力架/img/css3/loadingCirle.gif",
        describe: "loadingCircle",
    },
    {
        id: "css",
        path: "./士力架/CSS3/loading.html",
        img: "./士力架/img/css3/loading.gif",
        describe: "loading",
    },


    {
        id: "jqajax",
        path: "./士力架/Jquery&ajax/jQ无缝轮播图.html",
        img: "./士力架/Jquery&ajax/imgs/轮播图.png",
        describe: "无缝轮播图",
    },
    {
        id: "jqajax",
        path: "./士力架/Jquery&ajax/三级联动.html",
        img: "./士力架/Jquery&ajax/imgs/三级联动.png",
        describe: "三级联动",
    },
    {
        id: "jqajax",
        path: "./士力架/Jquery&ajax/b站漫画.html",
        img: "./士力架/Jquery&ajax/imgs/b站.png",
        describe: "b站漫画",
    },
    {
        id: "js",
        path: "./士力架/Javascript/b站.html",
        img: "./士力架/Javascript/img/b站精灵图.gif",
        describe: "b站精灵图",
    },
    {
        id: "js",
        path: "./士力架/Javascript/小米商城轮播图.html",
        img: "./士力架/Javascript/img/小米.png",
        describe: "小米商城轮播图",
    },


    {
        id: "js",
        path: "./士力架/Javascript/手风琴.html",
        img: "./士力架/Javascript/img/手风琴.png",
        describe: "手风琴",
    },
    {
        id: "bootstrap",
        path: "./士力架/BootStrap/儿童/儿童.html",
        img: "./士力架/BootStrap/儿童/imgs/儿童.png",
        describe: "关于儿童",
    },
    {
        id: "bootstrap",
        path: "./士力架/BootStrap/整形美容/整形美容.html",
        img: "./士力架/BootStrap/整形美容/images/整形.png",
        describe: "整形美容",
    },
    {
        id: "hfive",
        path: "./士力架/HTML5/复古music播放器.html",
        img: "./士力架/img/html5/复古/复古.gif",
        describe: "复古音乐播放器",
    },
    {
        id: "hfive",
        path: "./士力架/HTML5/图表.html",
        img: "./士力架/img/html5/图表/图表.png",
        describe: "图表",
    },
    {
        id: "html",
        path: "./士力架/HTML&CSS/整形.html",
        img: "",
        describe: "整形",
    },
    {
        id: "html",
        path: "./士力架/HTML&CSS/关于儿童.html",
        img: "",
        describe: "关于儿童",
    },
    {
        id: "html",
        path: "./士力架/HTML&CSS/携程.html",
        img: "./士力架/HTML&CSS/image/Images/携程.png",
        describe: "携程",
    },
    {
        id: "html",
        path: "./士力架/HTML&CSS/360.html",
        img: "./士力架/HTML&CSS/img/360.png",
        describe: "仿360浏览器",
    },

]

$(".menu li").click(function () {
    // console.log(typeof $(this).attr("id"));
    $(".showWork").html(" ")
    // $(this).attr("id")
    var _this = $(this).attr("id")
    if (_this == "all") {
        all12()
    }
    zuop.map(function (obj) {
        // console.log(obj.id);
        if (obj.id === _this) {
            $(".zuop .showWork").append(`
        <div class="he"><a href="${obj.path}"><img src="${obj.img}" alt=""><p>${obj.describe}</p></a></div>
        `)
        }
    })
})

function all12() {
    zuop.map(function (obj) {
        $(".zuop .showWork").append(`
    <div class="he"><a href="${obj.path}"><img src="${obj.img}" alt=""><p>${obj.describe}</p></a></div>
    `)
    })
}
all12()

