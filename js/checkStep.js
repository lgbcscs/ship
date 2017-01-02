/**
 * Created by Administrator on 2016/12/31.
 */
$(function(){
    $("#js-toggle-detail").click(function () {
        $(this).closest(".partInfo").find(".item-detail-info").slideToggle();
    });
    $(".raido-option-list input").change(function () {
        if($(this).val()=="N"){
            $(".ng-info").fadeIn();
        }else{
            $(".ng-info").fadeOut();
        }
    });
    $("#js-show-select").click(function () {
        $(".ico-up,.ui-select-list").fadeToggle();
    });
    $(".ui-select-list input").click(function(){
        $(".ico-up,.ui-select-list").fadeToggle();
        if($(this).val() =="zj"){
            $('.ui_mask_transition').show().addClass('ui_fade_toggle');
            $("#js-zj-select .ui_actionsheet").addClass('ui_actionsheet_toggle');
        }else{
            $("#js-wz-select .ui_actionsheet").addClass('ui_actionsheet_toggle');
        }
    });
    $(".btn-cancel-actionsheet").click(function () {
        $('.ui_mask_transition').hide().removeClass('ui_fade_toggle');
        $(".ui_actionsheet").removeClass('ui_actionsheet_toggle');
    });
});