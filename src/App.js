import React from "react"; 
import ComponentA from "./components/context/ComponentA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      <UserContext.Provider value={'ritul'}>
        <ChannelContext.Provider value={'react learning'}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
