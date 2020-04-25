export const state = () => {
  return {
    // 历史查询
    searchList: [],
    // 侧边栏组件的数据
    flightData: {
      seat_infos: {}
    },
    // 总价格
    allPrice: 0,
    // 人数
    people: 0

  }
}
// 同步修改state数据
export const mutations = {
  setSearchList(state, data) {
    state.searchList.unshift(data)
    if (state.searchList.length > 5) {
      state.searchList.length = 5
    }
  },
  // 存储选中的机票的详细信息
  setFlightData(state, data) {
    state.flightData = data
  },
  // 计算总价格
  setAllPrice(state, data) {
    state.allPrice = data
  },
  // 计算人数
  setPeople(state,data){
    state.people = data
  }
}