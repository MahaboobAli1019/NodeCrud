const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
