console.log('我运行了没有？')

// // 添加全局过滤器
// Vue.filter('dateFormat', function(value, spe) {
// let date = new Date(value)
// let year = date.getFullYear()
// let month = date.getMonth() + 1
// let day = date.getDate()
// return `${year}${spe}${month}${spe}${day}+++`
// })

// 导出
// 导出默认成员，默认成员的导出只能导出一个，一个文件中只能写一个export default
// export default {}
// export default []

// 导出某个成员--可以导出多
// export function dateFormat(){}
export const dateFormat = function(value, spe='/') {
  let date = new Date(value)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return `${year}${spe}${month}${spe}${day}`
}

export const timeFormat = function(value, spe) {
  let date = new Date(value)
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return `${hour}${spe}${minute}${spe}${second}`
}
