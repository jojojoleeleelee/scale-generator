var scale = require('music-scale')

export function loadRandomScale() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_SCALE' });
    return scale.get('A major')
      
      // .then(scale => dispatch({ type: 'LOAD_SCALE', payload:scale }));
  };
}
