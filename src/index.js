// Requiring module
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import paypalRouter from './routes/paypalRouter.js';


const app = express();
const PORT = process.env.PORT || 8000;

const URL = 'mongodb+srv://kuldeepsen:KKss1997@cluster0.v2fxl4e.mongodb.net/?retryWrites=true&w=majority';
// const URL = 'mongodb+srv://react1:YEWO4P4C8eEffOCm@cluster0.rxk8i.mongodb.net/Cluster0?retryWrites=true&w=majority';


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.use('/', paypalRouter);

app.use(express.static('public'));
app.use('/uploads', express.static('images'));



mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
}).catch((error) => {
    console.log(`Error${error}`);
});
