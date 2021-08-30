import React, { useState } from "react";

export const DisplayContext = React.createContext();

export const DisplayProvider = (props) => {
  const [display, setDisplay] = useState({
    content: "none",
  });

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {props.children}
    </DisplayContext.Provider>
  );
};
