const { validationResult } = require('express-validator');

exports.registro = async (req, res, next) => {
    const errors = validationResult(req)
}