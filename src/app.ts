import express, {Request, Response} from 'express';
import cors from "cors";
import dotenv from 'dotenv'; 
dotenv.config(); // Load environment variables from .env file 

const app = express();
app.use(cors());
app.use(express.json());

console.log(__dirname+'/.env');
console.log(process.env.PORT, process.env.MONGODB_URI);

const port = process.env.PORT || 3000;


// heartbeat
app.get('/heartbeat', (req: Request, res: Response) => {
  res.status(200).json({message: 'Its working!'})
});


// routes
import router from './routes/users.routes'

app.use("/api/v1/users", router);


// database
import connectDatabase from "./models/database"
connectDatabase();

// Start server

app.listen(port, () => {
  console.log('App is listing on PORT: ' + port);
});