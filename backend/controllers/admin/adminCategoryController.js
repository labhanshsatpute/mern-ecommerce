const joi = require('joi');
const { Category, validate } = require('../../models/category');
const { existsSync, unlinkSync } = require('fs');

const handleCreateCategory = async (req, res) => {
    try {
        
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status: false,
                message: error.details[0].message
            });
        }

        const slugExist = await Category.findOne({ slug: req.body.slug });
        if (slugExist) {
            return res.status(400).send({
                status: false,
                message: "Slug already used"
            });
        }

        const category = await new Category({ ...req.body }).save();

        return res.status(201).send({
            status: true,
            message: "Category successfully created",
            data: category
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
}

const handleUploadCategoryImages = async (req, res) => {

    const validate = (data) => {
        const schema = joi.object({
            id: joi.string().required().label('ID')
        });
        return schema.validate(data);    
    }
    
    try {

        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status: false,
                message: error.details[0].message
            });
        }
        
        const category = await Category.findById(req.body.id);
        if (!category) {
            return res.status(400).send({
                status: false,
                message: "Category not found for required id"
            });
        }

        if (req.files.thumbnail) {
            if (category.thumbnail) {
                if (existsSync(category.thumbnail)) unlinkSync(category.thumbnail);
            }
            await Category.findByIdAndUpdate(category._id,{
                thumbnail: req.files.thumbnail[0].path
            }, { new: true });
        }

        if (req.files.coverImage) {
            if (category.coverImage) {
                if (existsSync(category.coverImage)) unlinkSync(category.coverImage);
            }
            await Category.findByIdAndUpdate(category._id,{
                coverImage: req.files.coverImage[0].path
            }, { new: true });
        }

        const updatedCategory = await Category.findById(category._id);

        return res.status(200).send({
            status: true,
            message: "Category updated",
            data: updatedCategory
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
}

const handleUpdateCategory = async (req, res) => {

    const validate = (data) => {
        const schema = joi.object({
            id: joi.string().required().label("Id"),
            name: joi.string().min(1).max(250).required().label('Name'),
            slug: joi.string().min(1).max(250).required().label('Slug'),
            parentCategoryId: joi.string().label('Parent category id'),
            summary: joi.string().min(1).max(500).label('Summary'),
            description: joi.string().min(1).max(1000).label('Description')
        });
        return schema.validate(data);
    }

    try {
        
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status: false,
                message: error.details[0].message
            });
        }

        const categoryExist = await Category.findById(req.body.id);
        if (!categoryExist) {
            return res.status(400).send({
                status: false,
                message: "Category not found for required id"
            });
        }

        if (req.body.parentCategoryId) {
            const parentCategoryExist = await Category.findById(req.body.parentCategoryId);
            if (!parentCategoryExist) {
                return res.status(400).send({
                    status: false,
                    message: "Parent category not found for required parent category id"
                });
            }
        }

        const slugExist = await Category.findOne({ slug: req.body.slug, _id: { $ne: req.body.id } });
        if (slugExist) {
            return res.status(400).send({
                status: false,
                message: "Slug already used"
            });
        }

        const category = await Category.findByIdAndUpdate(req.body.id,{ ...req.body }, { new: true });

        return res.status(200).send({
            status: true,
            message: "Category successfully updated",
            data: category
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
}

const handleDeleteCategory = async (req, res) => {

    try {

        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).send({
                status: false,
                message: "Category not found for required id"
            });
        }

        if (category.thumbnail) {
            if (existsSync(category.thumbnail)) unlinkSync(category.thumbnail);
        }

        if (category.coverImage) {
            if (existsSync(category.coverImage)) unlinkSync(category.coverImage);
        }
        
        await Category.findByIdAndRemove(req.params.id);

        return res.status(200).send({
            status: true,
            message: "Category successfully deleted"
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
}

const handleGetAllCategory = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: 'desc' });
        return res.status(200).send({
            status: true,
            data: categories
        });
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
}
const handleGetParticularCategory = async (req, res) => {
    try {

        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).send({
                status: false,
                message: "Category not found for required id"
            });
        }

        return res.status(200).send({
            status: true,
            data: category
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        });
    }
}

module.exports = { 
    handleCreateCategory,
    handleUploadCategoryImages,
    handleUpdateCategory,
    handleDeleteCategory,
    handleGetAllCategory,
    handleGetParticularCategory
}