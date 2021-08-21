import mongoose from 'mongoose';

const connection = {};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(`mongodb://yoniivan:pico1288@mongo:27017/?authSource=admin`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;