import { TaskCard } from "./Task"
import task from './task.css'
import Nav from './Nav'

const TaskCards = () => {

    return (
        <>
            <Nav section='Tasks' />
            <div className="task-cards">
                <TaskCard
                    user='Aaron'
                    title='Welcome'
                    ready={false}
                />
                <TaskCard
                    ready={true}
                    user='Carlos' />
            </div>
        </>
    )
}

export default TaskCards;