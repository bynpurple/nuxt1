export const state = () => ({
  darkYn: false,
  menuName: 'System Name'
})

export const mutations = {
  setDarkYn (state) { state.darkYn = !state.darkYn },
  setMenuName (state, value) { state.menuName = value }
}

export const getters = {
  getDarkYn: state => state.darkYn,
  getMenuName: state => state.menuName
}

export const actions = {

}
