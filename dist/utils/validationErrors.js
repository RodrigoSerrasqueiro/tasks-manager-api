export const handleValidationError = (error, res) => {
    return res.status(400).json({
        message: 'Validation error.',
        errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
        }))
    });
};
