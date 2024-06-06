import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "../ui/button";

interface PropsState {
    task_id: string | undefined;
}

const ActionButton = ({ task_id }: PropsState) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button>
                        Action
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Description</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Resolve</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default ActionButton