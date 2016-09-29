$(function() {
    var router = new Router({
        container: '#container',
        enterTimeout: 0,
        leaveTimeout: 0
    });

    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURI(r[2]); return null; //返回参数值
    }

    // list
    var list = {
        url: '/list',
        className: 'list',
        render: function () {
            return $('#tpl_list').html();
        },
        bind :function(){
            var indexofMyVal = window.location.href.indexOf('#/');
            var _myUrl = window.location.href.substr(0,indexofMyVal+2);
            if(getUrlParam('mytype')=="list"){
                //window.location.href=_myUrl+'list';
            }else{
                //$(".info-title .btn_add").trigger("click");
                router.setDefault('/info');
            }
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