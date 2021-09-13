const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();
const Name = require('./models/name');


const app = express();
app.use(cors());
app.use(express.json());
// app.use('/', router);



const PORT = 5000;

// on localhost
// const URL = 'mongodb://localhost:27017/mern'

// on docker container
const URL = 'mongodb://mongo:27017/mern'




// -------------------------------------
// connect to db
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => console.log('DB Connected! '));
// -------------------------------------






// -------------------------------------
// *** routes ***

// GET ALL
router.get('/home' , async (req, res) => {

    await Name.find({})
    .then( names => res.json(names))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

// POST NEW NAME
router.post('/create', (req,res) => {

    const newName = Name({
        name: req.body.name
    });

    newName.save()
    .then( () => res.json('New name has been created!'))
    .catch(err => res.status(400).json(`Error in 'post route': ${err}`))
})
// -------------------------------------

app.use('/', router);



app.listen(PORT, () => console.log(`SERVER is running on port ${PORT}`));
