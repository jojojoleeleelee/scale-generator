export default (
    state = [], action) => {
  
    switch(action.type){
      case "START_LOADING_SCALE":
        return Object.assign({}, state, {loading: true})
      case "LOAD_SCALE":
        return action.scale
      case "LOAD_ALL_SCALES":
        return action.scales
      default:
        return state
    }
  }