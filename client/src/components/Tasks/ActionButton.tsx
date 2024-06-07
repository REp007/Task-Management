import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "../ui/button";
import TaskEdit from './TaskEdit';
import { Task } from "@/types/type";
interface PropsState {
    task_id: Task;
}

const ActionButton = ({ task }: PropsState) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button>
                        Action
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Resolve</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        {/* <TaskEdit task={task} /> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default ActionButton