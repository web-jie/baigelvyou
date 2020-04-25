export const state = ()=> {
  return {
    // 历史查询
    searchList: [],
    // 侧边栏组件的数据
    flightDate: {
      seat_infos: {}
    }

  }
}
// 同步修改state数据
export const mutations = {
  setSearchList(state,data){
    state.searchList.unshift(data)
    if(state.searchList.length > 5){
      state.searchList.length = 5
    }
  },
  // 存储选中的机票的详细信息
  setFlightData(state,data){
    state.flightDate = data
  }
}