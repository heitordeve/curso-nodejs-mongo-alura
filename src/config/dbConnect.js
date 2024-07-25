import mongoose from "mongoose";

async function ConectBaseDados(){
    mongoose.connect(process.env.DB_URL);
    return mongoose.connection;
};

export default ConectBaseDados;
