/**
 * Created by mamta-prashant on 9/18/15.
 */

var fs = require("fs");

var errorResponse = {
    error: {
        message: "Could not fetch data",
        code:909
    },
    data:null
};

var successResponse = {
    error:null,
    data: []
};

function genreListModule(req,res) {
    console.log("Inside genreListModule");
    fs.readdir("DataFiles/", function(err,data){
        if (err) {
            console.log("Error in handler module - genreListModule");
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResponse.error = err;
            res.end(JSON.stringify(errorResponse) + "\n");
            return;
        }
        else {
            var directories = [];
            (function iterator(index){
                if (index == data.length){
                    res.writeHead(200, {"Content-Type": "application/json"});
                    successResponse.data = directories;
                    //console.log(directories);
                    res.end(JSON.stringify(successResponse) + "\n");
                    return;
                }
                else{
                    fs.stat("DataFiles/" + data[index], function(error,stats){
                        if (stats.isDirectory()){
                            var obj = {name: data[index]};
                            directories.push(obj);
                        }
                        iterator(index + 1);
                    })
                }
            })(0);
        }
    })
};

function moviesListModule(req,res) {
    console.log("Inside moviesListModule");
    var genreName = req.params.gname;
    fs.readdir("DataFiles/" + genreName, function(err,data) {
        if (err) {
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResponse.error = err;
            res.end(JSON.stringify(errorResponse) + "\n");
            return;
        }
        else {
            var path = "DataFiles/" + genreName + "/";
            var files = [];
            (function iterator(index){
                if (index == data.length){
                    res.writeHead(200, {"Content-Type": "application/json"});
                    successResponse.data = files;
                    //console.log(files);
                    res.end(JSON.stringify(successResponse) + "\n");
                    return;
                }
                else {
                    fs.stat(path + data[index], function(err,stats){
                        if (stats.isFile()) {
                            var file = path + data[index];
                            var content = fs.readFileSync(file);
                            var jsonData = JSON.parse(content);
                            var obj = jsonData;
                            files.push(obj);
                        }
                        iterator(index+1);
                    })
                }
            })(0);
        }
    })
};

module.exports.genreListModule = genreListModule;
module.exports.moviesListModule = moviesListModule;
