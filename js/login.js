/**
 * Created by Administrator on 2016/12/6.
 */
$(function(){
    $("input[name='lx']").change(function(){
        $(".js-show").toggleClass("disNone-important");
    })
    $("#js-login").click(function(){
        window.location.href= "./index.html";
    });
});