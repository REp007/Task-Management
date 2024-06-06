import { useContext } from "react";

import { ContextApp } from "@/context/ContextComp";
import type { InitState } from "@/context/ContextComp";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { join } from "path";

const TaskList = () => {
    const Tasks = useContext<InitState>(ContextApp);
    console.log(Tasks);

    return (
        <Table>
            <TableCaption>A list of Tasks</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight">Status</TableHead>
                    <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight">Title</TableHead>
                    <TableHead className="scroll-m-20 text-2xl font-semibold tracking-tight text-right">Accent</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Tasks.tasks.map(task => (
                    <TableRow key={task.id}>
                        <TableCell>
                            <Input
                                className="w-4"
                                type="checkbox"
                                
                                checked={task.is_resolved}
                            />
                        </TableCell>
                        <TableCell className="scroll-m-20 text-xl font-semibold tracking-tight">
                            {`${task.title.split('')[0].toUpperCase()}${task.title.split('').slice(1).join('').toLocaleLowerCase()}`}
                        </TableCell>
                        <TableCell className="text-right">
                            <Button>
                                Acions
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}

export default TaskList