/**
 * Created by Administrator on 2016/12/31.
 */
$(function(){
    $(document).on("click",".js-close-modal,.ui_mask", function () {
        $(this).closest(".ui_dialog_confirm").hide();
    })
});