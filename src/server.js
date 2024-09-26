import express from 'express';
import cors from 'cors';
import foodRouter from "./routers/food.router.js";
import UserRouter from "./routers/user.router.js";

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
})
);

app.use('/api/foods', foodRouter);
app.use('/api/users', UserRouter);


const PORT = 5000;
app.listen(PORT,()=>{
    console.log('listening on port ' + PORT);
})