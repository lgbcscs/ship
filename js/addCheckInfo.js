$(function() {
    var router = new Router({
        container: '#container',
        enterTimeout: 0,
        leaveTimeout: 0
    });

    // list
    var list = {
        url: '/list',
        className: 'list',
        render: function () {
            return $('#tpl_list').html();
        }
    };

    // info
    var info = {
        url: '/info',
        className: 'info',
        render: function () {
            return $('#tpl_info').html();
        },
        bind:function(){
            $(".layout-header").show().find(".page-title").text("新增检查项");
            $('#container').on('click', '#addCountry', function () {
                $('#modal-addCountry').show().on('click', '.weui_btn_dialog', function () {
                    $('#modal-addCountry').off('click').hide();
                });
            }).on('click', '#addPort', function () {
                $('#modal-addPort').show().on('click', '.weui_btn_dialog', function () {
                    $('#modal-addPort').off('click').hide();
                });
            })
        }
    };


    router.push(list)
        .push(info)
        .setDefault('/list')
        .init();
});