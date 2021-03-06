import express from "express";
import dotenv from "dotenv";
import * as routes from "./routes";

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

routes.register(app);

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

