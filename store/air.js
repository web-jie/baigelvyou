export const state = ()=> {
  return {
    // 历史查询
    searchList: []
  }
}
// 同步修改state数据
export const mutations = {
  setSearchList(state,data){
    state.searchList.unshift(data)
    if(state.searchList.length > 5){
      state.searchList.length = 5
    }
  }
}