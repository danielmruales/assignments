const express = require('expresss');
const app = express(); 



app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})