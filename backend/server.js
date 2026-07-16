import express from 'express';
const PORT =3000;
import nodeRouter from './routes/nodeRoutes.js';

const app = express();

app.use("/api/nodes",nodeRouter);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})