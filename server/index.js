const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))

const PORT = process.env.PORT || 8080

app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start the server:', err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});