import React,{createContext,useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

const [orders,setOrders] = useState([]);

return(

<AppContext.Provider value={{orders,setOrders}}>

{children}

</AppContext.Provider>

);

};