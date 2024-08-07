import mongoose from 'mongoose';

const connectDatabase = async () => {
  await mongoose.connect('mongodb://localhost:27017/todo', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
};

export default connectDatabase;