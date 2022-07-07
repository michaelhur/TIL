import * as express from "express";

const app: express.Express = express();
const port: number = 3000;

app.get('/test', (req: express.Request, res: express.Response) => {
    res.send({
        name: "허준혁",
        age: 31,
        friends: []})
})

app.post('/test', (req: express.Request, res: express.Response) => {
    res.send({
        person: "Mike"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})