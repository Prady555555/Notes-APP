const mongoose = require("mongoose");
mongoose.set("strictQuery",false);

const connectDb = async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGOB_URI);
    console.log(`Database connected : ${conn.connection.host}`)
  } catch (error) {
    console.log(error); 
  } 
}

module.exports = connectDb ;