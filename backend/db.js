// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://revathi:Hannabaker15@cluster0.zhwqn0w.mongodb.net/southsizzle?retryWrites=true&w=majority';

// const mongoDB = async() => {
//   await mongoose.connect(mongoURI, {useNewUrlParser: true },async(err,result)=>{
//     if(err)console.log("---",err)
//     else{
// console.log("connected");
// const fetched_data = await mongoose.connection.db.collection("food_items")
// fetched_data.find({}).toArray( function (err,data){
//     if(err) console.log(err);
//     else console.log(data)

// })
// }
//   });
    
    
// };

// module.exports = mongoDB;

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://revathi:Hannabaker15@cluster0.zhwqn0w.mongodb.net/southsizzle?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoDB;

 