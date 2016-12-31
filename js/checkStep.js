/**
 * Created by Administrator on 2016/12/31.
 */
$(function(){
    $("#js-toggle-detail").click(function () {
        $(this).closest(".partInfo").find(".item-detail-info").slideToggle();
    });
})