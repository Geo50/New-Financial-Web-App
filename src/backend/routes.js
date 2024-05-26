import express from 'express';

const router = express.Router();
const FINNHUB_API_KEY = 'cp6pip1r01qm8p9l66l0cp6pip1r01qm8p9l66lg';

// Define your routes
router.get('/finnhub-data', async (req, res) => {
    try {
        // Get the category query parameter from the request
        const { category } = req.query;

        // Validate the category parameter
        if (!category || !['general', 'business', 'forex'].includes(category)) {
            return res.status(400).json({ error: 'Invalid or missing category parameter' });
        }

        // Fetch news based on the category
        const response = await fetch(`https://finnhub.io/api/v1/news?category=${category}&token=${FINNHUB_API_KEY}`);
        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from Finnhub' });
    }
})

export default router;
