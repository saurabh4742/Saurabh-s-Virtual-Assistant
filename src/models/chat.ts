import mongoose, { Schema, Model } from "mongoose";

// Check if the model has already been compiled
let CurrentMessage: Model<any>;
let ConversationContext: Model<any>;

try {
    CurrentMessage = mongoose.model('CurrentMessage');
    ConversationContext = mongoose.model('ConversationContext');
} catch (error) {
    // Define the model if it hasn't been compiled yet
    CurrentMessage = mongoose.model('CurrentMessage', new Schema({
        scid:{type:String,required: true},
        history: [{
            role: { type: String, required: true },
            parts: { type: String, required: true }
        }]
    }));

    ConversationContext = mongoose.model('ConversationContext', new Schema({
        scid:{type:String,required: true},
        lastconversations: [{
            prompt: { type: String, required: true },
            responseText: { type: String, required: true }
        }]
    }));
}

export { CurrentMessage, ConversationContext };
