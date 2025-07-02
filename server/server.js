const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 5000;

app.listen(8000, '0.0.0.0', () => {
    console.log("Server running on port 8000");
});
