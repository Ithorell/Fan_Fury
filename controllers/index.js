const router = require('express').router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');



router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;