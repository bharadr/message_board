var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages}, );
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  let userName = req.body.userName;
  let messageText = req.body.messageText;
  messages.push({text: messageText, user: userName, added: new Date()});
  res.redirect('/');
});



module.exports = router;
