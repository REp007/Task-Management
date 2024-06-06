import TaskList from "@/components/Tasks/TaskList";
const TaskComp = () => {
    return (
        <>
            <header>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Tasks List
                </h1>
            </header>
            <section>
                <div className="list-Tasks md:px-[150px] lg:px-[300px] ">
                    <TaskList />
                </div>
            </section>
        </>
    )
}

export default TaskComp;