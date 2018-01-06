import * as express from "express";

const app = express();

app.get("*", function (req, res) {
    res.send("OK!!");
});

export default app;
