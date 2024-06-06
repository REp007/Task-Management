import { useContext } from "react";

import { ContextApp } from "@/context/ContextComp";
import type {InitState} from "@/context/ContextComp";


const TaskList = () => {
    const Tasks =  useContext<InitState>(ContextApp);
    console.log(Tasks);
    
    return (
        <div>TaskList</div>
    )
}

export default TaskList