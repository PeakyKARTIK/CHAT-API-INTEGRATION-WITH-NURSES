const express = require('express');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
app.use(express.json());

app.use('/api/chat', chatRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
