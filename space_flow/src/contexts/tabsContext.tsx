import { createContext, useState } from "react";

type flow={name:string,id:string,flow:any}

type TabsContextType={
    tabIndex:number;
    setTabIndex:(index:number)=>void;
    flows:Array<flow>
    removeFlow:(index:number)=>void;
    addFlow:(newFlow:flow)=>void;
}

const TabsContextInitialValue = {
    tabIndex : 0,
    setTabIndex:(index:number)=>{},
    flows:[],
    removeFlow:(index:number)=>{},
    addFlow:(newFlow:flow)=>{}

}

export const TabsContext = createContext<TabsContextType>(TabsContextInitialValue)

export function TabsProvider({children}){
    const [tabIndex,setTabIndex] = useState(0)
    const [flows,setFlows] = useState<Array<flow>>([])
    function removeFlow(index:number){
        let newFlows = flows
        newFlows.splice(index)
        setFlows(newFlows)
    }
    function addFlow(newFlow:flow){
        setFlows([...flows,newFlow])
    }

    return(
        <TabsContext.Provider value={{tabIndex,setTabIndex,flows,removeFlow,addFlow}}>
            {children}
        </TabsContext.Provider>
    )
}