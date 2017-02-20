// Avoid `console` errors in browsers that lack a console.
//解决的主要问题就是用console调试的时候IE报错。这个问题我想大家都遇见过，调试代码忘记删除，
// 线上IE报错，导致js无法继续执行。加了这个，就可以避免掉这问题了
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
//引入js，必须将位置写全（src='vendor/list.js' 不可以）
document.write("<script src='js/vendor/list.js'></script>");
