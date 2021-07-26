const express = require('express');
const fs = require('fs');
const ExpressError = require('./utils/ExpressError');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = __dirname + '/data/employee.txt';

app.get('/employee', (req, res) => {
    if(fs.existsSync(path)) {
        fs.readFile(path, 'utf8', function(err, data) {
            var editedData = data.slice(0, -2);
            const contents = JSON.parse("[" + editedData + "]");
            res.send(contents);
        });
    }
    else{
        res.send("No Employee Record Found");
    }
});

app.post('/employee', (req, res) => {
    const content = req.body;
    const employee = JSON.stringify(content);
    fs.writeFile(path, employee + ',\n', { flag: 'a+' }, (err) => {
        if(err) {
            return res.send("An error occured while saving file").send(err);
        }
        res.send("Employee record saved!");
    }); 
});

app.get('/employee/:id', (req, res) => {
    const { id } = req.params;

    if(fs.existsSync(path)) {
        fs.readFile(path, 'utf8', function(err, data) {
            var editedData = data.slice(0, -2);
            const contents = JSON.parse("[" + editedData + "]");
            for(var i=0; i < contents.length; i++) {
                if(contents[i].ID == id) {
                    return res.send(contents[i]);
                }
            }
            res.send("Employee not found");
        });
    }
    else{
        res.send("No Employee Record Found");
    }
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found'), 404);
});

// Express server on port 3000
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});