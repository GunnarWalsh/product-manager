const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
require("./config/mongoose.config");

app.use(cors())

app.use(express.json(), express.urlencoded({ extended: true }));

const productRoutes = require("./routes/product.routes");
productRoutes(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );
