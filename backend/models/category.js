const mongoose = require('mongoose');
const joi = require('joi');

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    summary: {
        type: String
    },
    description: {
        type: String
    },
    parentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    status: {
        type: Boolean,
        default: true
    },
    thumbnail: {
        type: String,
    },
    coverImage: {
        type: String,
    }
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

const validate = (data) => {
    const schema = joi.object({
        name: joi.string().min(1).max(250).required().label('Name'),
        slug: joi.string().min(1).max(250).required().label('Slug'),
        parentCategoryId: joi.string().label('Parent category id'),
        summary: joi.string().min(1).max(500).label('Summary'),
        description: joi.string().min(1).max(1000).label('Description'),
        status: joi.boolean().label('Status')
    });
    return schema.validate(data);
}

module.exports = { Category, validate };