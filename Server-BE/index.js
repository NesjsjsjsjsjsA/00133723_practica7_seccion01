import express, { json } from 'express';
const app = express();
app.use(json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Estamos al aire en http://localhost:${PORT}`)
})

app.get('/status',(request, response) => {
    const status = {
        "Status": "Running",
        "Stus2": "Im milk one service"
    };

    response.send(status);

})
