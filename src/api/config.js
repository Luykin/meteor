'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
var env = exports.env = 'qzone'
var PREFIX_URL = exports.PREFIX_URL = 'https://' + env + '.melonblock.com/fans'
// var UAID = exports.UAID = 360002
var UAID = exports.UAID = 60110
var CHANNEL = exports.CHANNEL = '新60109'
var APPNAME = exports.APPNAME = '微信星空网页版'
var QINIU_PREFIX = exports.QINIU_PREFIX = '-wx_xk' + env + CHANNEL // 七牛云储存前缀，防误删
var SUCCESS_CODE = exports.SUCCESS_CODE = 200
var TRADE_TYPE = exports.TRADE_TYPE = 'MWEB' // h5交易类型

var getIdentification = exports.getIdentification = function () {
  if (UAID < 60110) {
    return UAID;
  }
  return CHANNEL;
}
