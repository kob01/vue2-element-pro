
/**
 * 深拷贝 支持循环引用和symbol类型数据
 *
 * @param {*} source 源值
 * @param {*} [map=new WeakMap()] 存引用自身的变量
 * @return {*} 深拷贝后的值
 */
export function cloneDeep(source, map = new WeakMap()) {
  if (typeof source !== 'object' || source === null) {
    return source
  }
  if (map.has(source)) {
    return map.get(source)
  }
  const target = Array.isArray(source) ? [] : {}
  map.set(source, target)
  Object.keys(source).forEach(key => {
    const val = source[key]
    if (typeof val === 'object' && val !== null) {
      target[key] = cloneDeep(val, map)
    } else {
      target[key] = val
    }
  })
  return target
}
