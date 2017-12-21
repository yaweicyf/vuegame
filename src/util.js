export default{
  install(Vue,options)
  {
    Vue.prototype.apiDomain = function () {
      return "http://zyawei.sc2yun.com/game/";
    }
  }
}