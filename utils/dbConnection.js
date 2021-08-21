import mongoose from 'mongoose';
import settings from '../next.config';

const connection = {};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(`mongodb://${settings.env.MONGO_USER}:${settings.env.MONGO_PASSWORD}@${settings.env.MONGO_URI}:${settings.env.MONGO_IP}/?authSource=admin`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;