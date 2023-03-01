import React from "react"; 
import CounterThree from "./components/reducer/CounterThree";

const App = () => {
  return (
    <div>
      <CounterThree />
    </div>
  )
}



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
