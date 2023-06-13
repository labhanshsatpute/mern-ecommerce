const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
    },
    slug: {
        type: String,
        required: true,
    },
    summary: {
        type: Text,
    },
    description: {
        type: Text,
    },
    parentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ParentCategory",
        required: true,
    },
    childategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChildCategory"
    },
    tags: {
        type: [String],
    },
    highlights: {
        type: [String],
    },
    specifications: {
        type: Array,
    },
    sizes: {
        type: [String]
    },
    metaTitle: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
    },
    metaKeywords: {
        type: [String],
    },
    originalPrice: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
    },
    status: {
        type: Boolean,
        default: true
    },
    availability: {
        type: String,
        enum: ['IN_STOCK','OUT_OF_STOCK']
    },
    thumbnail: {
        type: String,
    },
    media: {
        type: [{
            path: String,
            type: String,
        }],
    }

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;