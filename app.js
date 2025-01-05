import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';s
config();

const app = express();
app.use(cors({
  origin: '*',
}));
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
})
app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
})
