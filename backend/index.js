const express = require('express');
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors({
    origin: '*', 
    credentials: true,
    optionSuccessStatus: 200
}))
app.get('/api', ((req, res) => {
    const sdk = require('api')('@yelp-developers/v1.0#2vqu0dboldn2hxnb');
    sdk.auth(`Bearer ${process.env.YELP_KEY}`);
    sdk.v3_business_search({
        latitude: '28.609912440669067',
        longitude: '-81.20822820254895',
        sort_by: 'best_match',
        term: req.query.term,
        radius: '10000',
        limit: '20'
    })
  .then(({ data }) => res.json(data))
  .catch(err => console.error(err));
}))

app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`);
})