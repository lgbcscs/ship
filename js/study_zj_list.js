/**
 * Created by Administrator on 2017/1/2.
 */
$(function () {
    $("#js-show-select").click(function(){
        $('.ui_mask_transition').show().addClass('ui_fade_toggle');
        $("#js-zj-select .ui_actionsheet").addClass('ui_actionsheet_toggle');
    });
    $(".btn-cancel-actionsheet").click(function () {
        $('.ui_mask_transition').hide().removeClass('ui_fade_toggle');
        $(".ui_actionsheet").removeClass('ui_actionsheet_toggle');
    });
});