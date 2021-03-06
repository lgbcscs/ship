/**
 * Created by Administrator on 2016/9/25.
 */
$(function() {
    var router = new Router({
        container: '#container',
        enterTimeout: 0,
        leaveTimeout: 0
    });

    function setUrl (type,domObj,currentClass,infoSize){
        var _length = currentClass.length;
        if(type == "back"){
            var _number = parseInt(currentClass.substring(5,_length))-1;
            if(currentClass =="item_1"){
                domObj.attr({"href":"#/item_1"});
            }else{
                domObj.attr({"href":"#/item_"+_number});
            }
        }else{
            var _number = parseInt(currentClass.substring(5,_length))+1;
            if(_number==(infoSize+1)){
                domObj.attr({"href":"#/item_"+infoSize});
            }else{
                domObj.attr({"href":"#/item_"+_number});
            }
        }
        //if(currentClass =="item_1"){
        //    domObj.attr({"href":"#/item_1"});
        //}else if(currentClass =="item_100"){
        //    domObj.attr({"href":"#/item_100"});
        //}else{
        //    domObj.attr({"href":"#/item_"+_number});
        //}
    }

    //关于每一个检查项选择结果的操作的事件绑定
    function itemOptionSet (){
        var _that = $("input[name='zc']");
        _that.prop("checked",false);
        _that.change(function(){
            if($(this).val()=="N"){
                $(".ng-info").show();
            }else{
                $(".ng-info").hide();
            }
        });
        $(".btn_show_detail").click(function(){
            $(this).closest(".check-info-detail").find(".item-detail-info").slideToggle("slow");
        });
    }

    // default
    var item_1 = {
        url: '/item_1',
        className: 'item_1',
        render: function () {
            return $('#tpl_1').html();
        },
        bind: function () {
            $("#go_back").click(function(){
                var currentItem = $("#container >div").attr("class");
                var _this = $(this);
                setUrl("back",_this,currentItem,2);
            });
            $("#go_to").click(function(){
                var currentItem = $("#container >div").attr("class");
                var _this = $(this);
                setUrl("goto",_this,currentItem,2);
            });
            itemOptionSet();
        }
    };

    var item_2 = {
        url: '/item_2',
        className: 'item_2',
        render: function () {
            return $('#tpl_2').html();
        },
        bind: function () {
            console.info($("#container >div").attr("class"));
            $("#go_back").click(function(){
                var currentItem = $("#container >div").attr("class");
                var _this = $(this);
                setUrl("back",_this,currentItem,1);
            });
            $("#go_to").click(function(){
                var currentItem = $("#container >div").attr("class");
                var _this = $(this);
                setUrl("goto",_this,currentItem,3);
            });
            itemOptionSet();
        }
    };
    var item_3 = {
        url: '/item_3',
        className: 'item_3',
        render: function () {
            return $('#tpl_3').html();
        },
        bind: function () {
            console.info($("#container >div").attr("class"));
            $("#go_back").click(function(){
                var currentItem = $("#container >div").attr("class");
                var _this = $(this);
                setUrl("back",_this,currentItem,2);
            });
            $("#go_to").click(function(){
                var currentItem = $("#container >div").attr("class");
                var _this = $(this);
                setUrl("goto",_this,currentItem,3);
            });
            itemOptionSet();
        }
    };


    $(".bookList-dl dt .weui_cell").click(function(){
        var mask = $('#mask');
        var weuiActionsheet = $('#weui_actionsheet');
        weuiActionsheet.addClass('weui_actionsheet_toggle');
        hideActionSheet(weuiActionsheet, mask);
    });

    //快速定位的js
    $('#showActionSheet').click(function () {
        var mask = $('#mask');
        var weuiActionsheet = $('#weui_actionsheet');
        weuiActionsheet.addClass('weui_actionsheet_toggle');
        mask.show()
            .focus()//加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
            .addClass('weui_fade_toggle').one('click', function () {
            hideActionSheet(weuiActionsheet, mask);
        });
        $('#actionsheet_cancel').one('click', function () {
            hideActionSheet(weuiActionsheet, mask);
        });
        mask.unbind('transitionend').unbind('webkitTransitionEnd');

    });
    function hideActionSheet(weuiActionsheet, mask) {
        weuiActionsheet.removeClass('weui_actionsheet_toggle');
        mask.removeClass('weui_fade_toggle');
        mask.on('transitionend', function () {
            mask.hide();
        }).on('webkitTransitionEnd', function () {
            mask.hide();
        })
    }
    router.push(item_1)
        .push(item_2)
        .push(item_3)
        .setDefault('/item_1')
        .init();
});