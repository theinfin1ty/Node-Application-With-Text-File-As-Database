const fs = require('fs');
const path = 'data/employee.txt';

module.exports.getAllEmployees = (req, res) => {
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
}

module.exports.createEmployee = (req, res) => {
    const content = req.body;
    const employee = JSON.stringify(content);
    fs.writeFile(path, employee + ',\n', { flag: 'a+' }, (err) => {
        if(err) {
            return res.send("An error occured while saving file");
        }
        res.send("Employee record saved!");
    }); 
}

module.exports.findEmployeeById = (req, res) => {
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
            res.send(`Employee ID: ${id} doesn't exist`);
        });
    }
    else{
        res.send("No Employee Record not Found");
    }
}