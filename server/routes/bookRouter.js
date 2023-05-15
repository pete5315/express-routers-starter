let express = require('express');
let router = express.Router();
let bookList = [];

router.post('/', (req,res) => {
    console.log(req.body);
    bookList.push(req.body);
    res.send({message: 'Successfully added the book!'});
})

router.get('/', (req,res) => {
    res.send(bookList);
})

module.exports = router;