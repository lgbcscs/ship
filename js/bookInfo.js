/**
 * Created by Administrator on 2016/9/25.
 */
$(function() {
    var router = new Router({
        container: '#container',
        enterTimeout: 0,
        leaveTimeout: 0
    });

    // first
    var first = {
        url: '/first',
        className: 'first',
        render: function () {
            return $('#tpl_first').html();
        },
        bind: function () {
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

                function hideActionSheet(weuiActionsheet, mask) {
                    weuiActionsheet.removeClass('weui_actionsheet_toggle');
                    mask.removeClass('weui_fade_toggle');
                    mask.on('transitionend', function () {
                        mask.hide();
                    }).on('webkitTransitionEnd', function () {
                        mask.hide();
                    })
                }
            });
            // $('#container').on('click', '#showActionSheet', function () {
            //     alert(132);
            //     var mask = $('#mask');
            //     var weuiActionsheet = $('#weui_actionsheet');
            //     weuiActionsheet.addClass('weui_actionsheet_toggle');
            //     mask.show()
            //         .focus()//加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
            //         .addClass('weui_fade_toggle').one('click', function () {
            //         hideActionSheet(weuiActionsheet, mask);
            //     });
            //     $('#actionsheet_cancel').one('click', function () {
            //         hideActionSheet(weuiActionsheet, mask);
            //     });
            //     mask.unbind('transitionend').unbind('webkitTransitionEnd');
            //
            //     function hideActionSheet(weuiActionsheet, mask) {
            //         weuiActionsheet.removeClass('weui_actionsheet_toggle');
            //         mask.removeClass('weui_fade_toggle');
            //         mask.on('transitionend', function () {
            //             mask.hide();
            //         }).on('webkitTransitionEnd', function () {
            //             mask.hide();
            //         })
            //     }
            // });
        }
    };

    router.push(first)
        .setDefault('/first')
        .init();
});