import express from 'express';
import router from './routes.js';
import cors from 'cors'; // To handle cross-origin requests

const app = express();
const PORT = 3000;
app.use(cors()); // Enable CORS
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/finnhub-data`);
});
