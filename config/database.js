const mongoose = require("mongoose");

const dbName = "places_api";
/*
module.exports = {
  connect: () => mongoose.connect("mongodb://localhost/" + dbName),
  dbName: dbName, //puede ser un shorthand property : dbName,
  connection: () => {
    if (mongoose.connection) return mongoose.connection;
    return this.connect(); //conectarse de nuevo
  },
};
*/

module.exports = {
  connect: () => {
    mongoose.connect("mongodb://localhost:27017/" + dbName, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  },
  dbName: dbName,
  connection: () => {
    if (mongodb.connection) return mongoose.connection;
    return this.connect();
  },
};
