import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';


// configure env
dotenv.config();

// rest object
const app = express();

// database config
connectDB()

// middlewares
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>")
});

// PORT
const PORT = process.env.PORT || 5000;

// run listen
app.listen(PORT, () => {
    console.log(`Server Running on Mode ${process.env.DEV_MODE} & on Port ${PORT}`.bgCyan.white);
});