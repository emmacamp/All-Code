import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskCards from '../TaskCard'
import Create from '../CreateTask'
import Home from '../Home'
const app = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route
                        path="home"
                        element={<Home />}
                    />
                </Route>
                <Route path="/tasks" element={<TaskCards />} />
                <Route path="/tasks/create" element={<Create />} />
            </Routes>
        </BrowserRouter>

    )


}


export default app;