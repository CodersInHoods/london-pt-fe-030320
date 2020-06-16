const initialState = {
  counter: 0,
  key: "none",
};

const ACTION_TYPES = {
  COUNT_UP: "count up please",
  COUNT_DOWN: "count down please",
  KEY_PRESSED: "a key was pressed",
};

const counter = (state = initialState.counter, action) => {
  if (action.type === ACTION_TYPES.COUNT_UP) {
    return state + 1;
  } else if (action.type === ACTION_TYPES.COUNT_DOWN) {
    return state - 1;
  }

  return state;
};

const key = (state = initialState.key, action) => {
  if (action.type === ACTION_TYPES.KEY_PRESSED) {
    return action.payload.key;
  }

  return state;
};

// const reducer = (state = initialState, action) => {
//   if (action.type === ACTION_TYPES.COUNT_UP) {
//     state.counter++;
//   } else if (action.type === ACTION_TYPES.COUNT_DOWN) {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   } else if (action.type === ACTION_TYPES.KEY_PRESSED) {
//     state.key = action.payload.key;
//   }

//   return { ...state };
// };

const combinedReducers = Redux.combineReducers({
  counter,
  key,
});

// const actions = []

// actions.push(action)

// fetch("errors", {
//     method: "POST",
//     body: JSON.stringify(actions)
// })

const store = Redux.createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


window.ReduxStore = store;

const counterEl = document.querySelector("#counter-value");
const keyEl = document.querySelector("#key-value");
const upButton = document.querySelector("#up");
const downButton = document.querySelector("#down");

upButton.onclick = () => store.dispatch({ type: ACTION_TYPES.COUNT_UP });
downButton.onclick = () => store.dispatch({ type: ACTION_TYPES.COUNT_DOWN });

document.onkeydown = (event) =>
  store.dispatch({
    type: ACTION_TYPES.KEY_PRESSED,
    payload: { key: event.key },
  });

store.subscribe(() => {
  const state = store.getState();
  counterEl.innerText = state.counter;
  keyEl.innerText = state.key;
});


{/* <Counter counter={state.value} incremen={} reset={} />

<Counter /> */}