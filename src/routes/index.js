const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'API em Express está funcionando!',
        version: '1.0.0'
    });
});

module.exports = router;