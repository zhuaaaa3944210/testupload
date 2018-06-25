// 会员头部侧栏的控制
$(".mune_icon").on("tap",function(){
    // toggleClass()点击时对类名进行切换
    $(".sideMenu2").toggleClass("on");
})
// 轮播
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',  
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    parallax: true,
    speed: 600,
});
var cliH;
function getH(){
    return document.body.clientHeight;
}
cliH=getH();
var last_page=document.querySelectorAll(".swiper-slide")[2];
 // 当滑动到第一页的时候，左箭头消失
var first_page=document.querySelectorAll(".swiper-slide")[0];
var sec_page=document.querySelectorAll(".swiper-slide")[1];
first_page.addEventListener("touchend",function(){
    $(".swiper-button-prev").css({"display":"none"});
},false)
sec_page.addEventListener("touchstart",function(){
    $(".swiper-button-prev").css({"display":"block"});
},false)

$(".swiper-button-prev").css({"display":"none"});
var lastmembtn=document.querySelector("membtn");
// var last_page=div.querySelectorAll("div")[3];
// console.log(last_page);
last_page.addEventListener("touchend",function(){
    $(".swiper-button-next").css({"display":"none"});
    // $(function(){
    //     var btn=$("<img src='img/membtn.png' alt='' id='testBtn'>");
    //     $(".swiper-wrapper").append(btn);
    //     btn.css({"position":"absolute","left":"17.85rem","bottom":"0.20rem","display":"block"});
//     var aa=$(window).height();
//     console.log(aa);
//    $('.scroll_down').bind('tap', function() {
//        $('html,body').stop().animate({
//            'scrollTop': aa
//        }, 300);
//    });
    // });
    // 出现动的按钮，点击跳转到小程序页面
    // lastmembtn.bind("tap",function(){
    //     location.href="imstruction.html";
    // }) 
},false);




