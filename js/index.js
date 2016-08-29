/**
 * Created by Administrator on 2016/8/29.
 */
$(function(){
    var router = new Router({
        container: '#container',
        enterTimeout: 250,
        leaveTimeout: 250
    });

    // grid
    var login = {
        url: '/',
        className: 'login',
        render: function () {
            return $('#tpl_login').html();
        }
    };

    router.push(login)
        .setDefault('/')
        .init();
});