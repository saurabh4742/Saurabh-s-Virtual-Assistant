import mongoose, { Schema, Model } from "mongoose";

let BetaTester: Model<any>;

try {
    BetaTester = mongoose.model('betatester');
} catch (error) {
    BetaTester = mongoose.model('betatester', new Schema({
        KEY: { type: String, required: true }
    }));
}

export { BetaTester };
