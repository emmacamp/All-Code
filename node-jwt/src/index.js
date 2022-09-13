import app from "./app";
import db from "./database";
const port = app.get("port");
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
