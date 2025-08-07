const express = require('express');
const cors = require('cors');

const connectDB = require('./config/database');
connectDB();  

const app = express();

const PORT = 3000;

//enable CORS for all routes
app.use(cors());
//enable json parsing for all routes
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Init to backend');
});


// route the customers api
const customersRoute = require('./routes/customers');

// use the route
app.use('/api/customers', customersRoute);




app.listen(PORT, (error) => {
  if(!error) {
    console.log(`Server is successfully listening at port: ${PORT}`);
  } else { 
    console.error("An error ocurred:", error)
  }

});