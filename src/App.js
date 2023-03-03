import React from "react"; 
import FocusInput from "./components/ref/FocusInput";

const App = () => {
  return (
    <div>
      <FocusInput />
    </div>
  )
}




// --------- Use This One for Reducer with Context Examples ------- //

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch(action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState)

//   return (
//     <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
//       <div>
//         Count: {count}
//         <br />
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   )
// }

// --------- Use This One for Reducer with Context Examples ------- //




// --------- Use This One for Context Examples ------- //

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// function App() {
//   return (
//     <div>
//       <UserContext.Provider value={'ritul'}>
//         <ChannelContext.Provider value={'react learning'}>
//           <ComponentA />
//         </ChannelContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// }

// --------- Use This One for Context Examples ------- //

export default App;
