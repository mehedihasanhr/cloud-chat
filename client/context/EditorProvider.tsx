import * as React from "react";

const EditorCtx = React.createContext(null);


const EditorProvider = ({ children } : { children: React.ReactNode}) => {



  
  return(
    <EditorCtx.Provider value={null}>
      {children}
    </EditorCtx.Provider>
  )
}

export default EditorProvider

