const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      `mongodb://localhost/api`
    );
    console.log(`mongodb successfully connect`);
  } catch (err) {
    console.error(err); 
    return false;
  }
};
module.exports = connectDB;



