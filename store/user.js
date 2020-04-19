// 储存数据的地方
export const state = {

  // 登录成功后接口返回的用户数据, 里面包含了token和用户的详细信息
  userInfo: {}
}
// 修改state中的数据 export const mutations = {}是固定的格式
// store的数据不能直接修改，必须要使用mutations来修改
export const mutations = {
  // 声明一个函数，函数名可以随便起
  // 该函数有两个参数，第一个参数是上面state(固定的), 第二个参数是传入的参数(不固定)
  setuserInfo(state, data) {
    // 随意的修改state的属性
    state.userInfo = data
  }
}

export const actions = {
  login(store,data) {
    // 如果表单验证通过的话执行这个代码
   return this.$axios({
      url: "/accounts/login",
      method: "post",
      data,
    }).then(res => {
      const { data } = res
      // 通过store.commit调用mutations的方法
      store.commit('setuserInfo', data)
      return data
    })
  }
} 