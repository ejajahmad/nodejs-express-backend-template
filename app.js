import express from 'express';
import fs from 'fs';
import UserRoutes from './src/routes/User.route.js';
import { configDotenv } from 'dotenv';

configDotenv();
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use("/v1/User", UserRoutes);

app.get('/', (req, res) => {
    const welcome_template = fs.readFileSync('./src/templates/welcome-page.html', 'utf8');
    console.log(`The server is running on port ${port}`);
    res.send(welcome_template);
}
)


app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})