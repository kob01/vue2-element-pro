const { toString } = Object.prototype

export const isFunction = (fn) => toString.call(fn) === '[object Function]'

export const isObject = (obj) => toString.call(obj) === '[object Object]'

export const isArray = (arr) => toString.call(arr) === '[object Array]'
