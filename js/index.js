/**
 * Created by Administrator on 2016/8/29.
 */
$(function(){
    //进入系统设置
    $("#js-goToSystemSet").click(function(){
        $("#modal-systemSetKey").show();
    });
    $("#js-checkOut").click(function(){
        location.href="./setting.html";
    });
    //$('#container').on('click', '#addCountry', function () {
    //    $('#modal-addCountry').show().on('click', '.weui_btn_dialog', function () {
    //        $('#modal-addCountry').off('click').hide();
    //    });
    //}).on('click', '#addPort', function () {
    //    $('#modal-addPort').show().on('click', '.weui_btn_dialog', function () {
    //        $('#modal-addPort').off('click').hide();
    //    });
    //})
});