const errorHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch(error) {
            const message = error.response.data.error;
            res.status(500).json({ error: message });
        }
    }
};

module.exports = errorHandler;