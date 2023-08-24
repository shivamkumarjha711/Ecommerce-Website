import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String       // img hai ya document hai ye yaha store hota hai
    },
    shipping: {
        type: Boolean       // Boolean hum order ka status show kara sakte hai
    }
}, {timestamps: true});

export default mongoose.model('product', productSchema)