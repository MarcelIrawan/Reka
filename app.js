const express = require ('express')
const morgan = require ('morgan')
const mongoose = require ('mongoose')
const cron = require ('node-cron')
const label = require('./api/routes/label');

// user : reka123
// pass : D1FjzWjRxSaPhwxp

const app = express();

//connect to database
mongoose.connect('mongodb+srv://reka123:D1FjzWjRxSaPhwxp@rekalabel-sturz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected')
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.use('/label', label)

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            msg: error.message
        }
    });
});

// scheduling every minute
cron.schedule('* * * * *', () => {
    console.log('running every minute');
});

// port usage for localhost
app.listen(process.env.PORT || 3000, () => {
    console.log('Listening to port 3000');
})

