// 确认是否是指定类型的实例。
var __instanceof = function (instance, type) {
    'use strict'
    if (typeof type === 'string') {
        type = eval(type);
    }
    if (typeof type !== 'function') {
        return false;
    }
    var x1 = instance instanceof type;
    if (x1) {
        return true;
    }
    var x2 = false;
    if (instance !== null && instance !== undefined) {
        var current = instance.constructor;
        if (current === type) {
            return true;
        }
        var __instproto__ = instance;
        var __typesource = type.toString();
        if (current && current.toString() === __typesource) {
            return true;
        }
        do {
            __instproto__ = __instproto__.__proto__;
            if (__instproto__) {
                x2 = __instproto__.constructor === type;
                if (x2) {
                    return true;
                }
                x2 = __typesource === __instproto__.constructor.toString();
                if (x2) {
                    return true;
                }
            }
        } while (__instproto__);
    }
    return x1 || x2;
}