import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

enum CountActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
}

interface ICountPayload {
  firstCount: number;
  secondCount: number;
}

interface ICountAction {
  type: CountActionType;
  payload?: ICountPayload;
}

const countReducer = (
  state: ICountPayload,
  action: ICountAction
): ICountPayload => {
  switch (action.type) {
    case CountActionType.INCREMENT:
      return {
        ...state,
        firstCount: state.firstCount + (action.payload?.firstCount ?? 0),
        secondCount: state.secondCount + (action.payload?.secondCount ?? 0),
      };
    case CountActionType.DECREMENT:
      return {
        ...state,
        firstCount: state.firstCount - (action.payload?.firstCount ?? 0),
        secondCount: state.secondCount - (action.payload?.secondCount ?? 0),
      };

    case CountActionType.RESET:
      return {
        ...state,
        firstCount: 0,
        secondCount: 0,
      };

    default:
      return state;
  }
};

function App() {
  const [counts, countsDispatch] = useReducer(countReducer, {
    firstCount: 0,
    secondCount: 0,
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            countsDispatch({
              type: CountActionType.INCREMENT,
              payload: { firstCount: 2, secondCount: 3 },
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            countsDispatch({
              type: CountActionType.DECREMENT,
              payload: { firstCount: 1, secondCount: 2 },
            })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            countsDispatch({
              type: CountActionType.RESET,
            })
          }
        >
          Reset
        </button>

        <p>
          increment by 2 and decrement by 1 count is <b>{counts.firstCount}</b>
          <br></br>
          increment by 3 and decrement by 2 count is <b>{counts.secondCount}</b>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
