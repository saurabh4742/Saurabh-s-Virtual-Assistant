import mongoose, { Schema, Model } from "mongoose";
let Key: Model<any>;
try {
    Key = mongoose.model('key');
} catch (error) {
    Key = mongoose.model('key', new Schema({
        SECURITY_KEY: { type: String, required: true }
        
    }));
}
export default Key;
