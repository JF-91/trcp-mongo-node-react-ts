import app from "./app";
import { dbconnect } from "./db";


dbconnect()
app.listen(3000)
console.log('server run in http://localhost:3000');
