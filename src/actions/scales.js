export function loadRandomScale() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_SCALE' });
    return fetch(`http://localhost:3001/recipes/${randomNum}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(drink => dispatch({ type: 'LOAD_SCALE', payload:drink }));
  };
}
