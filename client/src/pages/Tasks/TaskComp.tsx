import TaskList from "@/components/Tasks/TaskList";
import AddTask from '@/components/Tasks/AddTask';
const TaskComp = () => {
    return (
        <>
            <header>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Tasks List
                </h1>
                <div className="flex flex-row p-[20px] mt-[10px] gap-20">
                    <div className="p">
                        <div className="text-lg font-semibold">You want to added an Task ?</div>
                    </div>
                    <AddTask />
                </div>
            </header>

            <section
            className="mt-5"
            >
                <div className="list-Tasks md:px-[150px] lg:px-[300px] ">
                    <TaskList />
                </div>
            </section>
        </>
    )
}

export default TaskComp;