import userRouter from '../components/user/view';

export default app => {
    app.use('/users', userRouter);
}