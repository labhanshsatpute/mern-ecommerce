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

const handleUpdateCategoryImages = async (req, res) => {

    try {
        
        const category = await Category.findById(req.params.id);
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

    try {
        
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status: false,
                message: error.details[0].message
            });
        }

        const categoryExist = await Category.findById(req.params.id);
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

        const slugExist = await Category.findOne({ slug: req.body.slug, _id: { $ne: req.params.id } });
        if (slugExist) {
            return res.status(400).send({
                status: false,
                message: "Slug already used"
            });
        }

        const category = await Category.findByIdAndUpdate(req.params.id,{ ...req.body }, { new: true });

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

const handleUpdateCategoryStatus = async (req, res) => {

    try {

        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).send({
                status: false,
                message: "Category not found for required id"
            });
        }

        const updatedCategory = await Category.findByIdAndUpdate(category._id,{
            status: !category.status
        }, { new: true });

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

module.exports = { 
    handleCreateCategory,
    handleUpdateCategoryImages,
    handleUpdateCategory,
    handleDeleteCategory,
    handleGetAllCategory,
    handleGetParticularCategory,
    handleUpdateCategoryStatus
}