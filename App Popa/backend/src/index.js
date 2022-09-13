import app from "./app";
import { connectDB } from './db';
const PORT = app.get("port");


connectDB();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

