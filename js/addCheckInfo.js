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
        }
    };


    router.push(list)
        .push(info)
        .setDefault('/list')
        .init();
});