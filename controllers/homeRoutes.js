const router = require ('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// router.get ('/', async (req, res) => {
//     try {
//         res.render('profile', {
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        // attributes: { exclude: ['password'] },
        include: [{
          model: User,
          attributes:["name"]
        }]
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('login', {
        users,
        // logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;