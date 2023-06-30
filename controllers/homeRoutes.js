const router = require('express').Router();
const { User, Messages } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    // retrieve the logged-in user's information
    const userId = req.session.user_id;
    const user = await User.findByPk(userId);
    const name = user.name;

    res.render('homepage', {
      users,
      name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



router.get('/createlogin', async (req, res) => {
  res.render('createlogin')
})

router.get('/messageboard', async (req, res) => {
  try {
    const dbMessagesData = await Messages.findAll({
      include:[
        {
          model: User,
          attributes: [
              'id',
              'name'
          ]
        }
      ]

    })
    console.log(dbMessagesData)
  
    const newMessages = dbMessagesData.map((messages)=>
    messages.get({ plain: true })
    );
    const content = newMessages.content
    // res.status(200).json(messagesData);
    res.render('messageboard', { newMessages,
    loggedIn: req.session.loggedIn,
    content
  });
} catch (err) {
  console.log(err)
    res.status(500).json(err);
// }

}
})



module.exports = router;