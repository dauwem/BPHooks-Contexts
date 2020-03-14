import React, { useState } from 'react';

export const MyContext = React.createContext();

export function MyProvider(props) {
  const [value, setValue] = useState('Day');

  return(
    <MyContext.Provider value={{
      state: value,
      changePeriod:() => setValue(value === 'Day' ? 'Night' : 'Day')
    }}>
      { props.children }
    </MyContext.Provider>
  );
}

//export default { MyContext, MyProvider };