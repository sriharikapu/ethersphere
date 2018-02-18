import mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
  lat: any;
  lng: any;
  message: string;
}

const MessageSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  message: String
});

export default mongoose.model<IMessage>('Message', MessageSchema);
