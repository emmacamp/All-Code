import taskRouter from '../components/task/view';

export default app => {
    app.use('/task', taskRouter);
}
