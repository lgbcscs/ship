/**
 * Created by Administrator on 2016/8/29.
 */
$(function(){
    var router = new Router({
        container: '#container',
        enterTimeout: 0,
        leaveTimeout: 0
    });

    // login
    var login = {
        url: '/',
        className: 'login',
        render: function () {
            return $('#tpl_login').html();
        }
    };

    // index
    var indexPage = {
        url: '/index',
        className: 'indexPage',
        render: function () {
            return $('#tpl_index').html();
        }
    };

    router.push(login)
        .push(indexPage)
        .setDefault('/')
        .init();
});