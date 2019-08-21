const recordController = require('./controllers/recordController'),
    express = require('express');


module.exports = function (app) {
    const apiRoutes = express.Router();

    apiRoutes.post('/getRecords', recordController.getRecords);
    app.use('/',apiRoutes);

};