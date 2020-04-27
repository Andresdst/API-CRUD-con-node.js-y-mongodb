const Place = require("../models/Place");

function index(req, res) {
  //control de paginacion solicitar como http://localhost:3000/places?page=1
  Place.paginate({}, { page: req.query.page || 1, limit: 8, sort: { _id: -1 } })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
}

function create(req, res) {
  Place.create({
    title: req.body.title,
    description: req.body.description,
    acceptsCreditCard: req.body.acceptsCreditCard,
    openHour: req.body.openHour,
    closeHour: req.body.closeHour,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function showOne(req, res) {
  Place.findById(req.params.id)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
}

function update(req, res) {
  let attributes = [
    "title",
    "description",
    "acceptsCreditCard",
    "openHour",
    "closeHour",
  ];
  let placeParams = {};
  attributes.forEach((attr) => {
    if (Object.prototype.hasOwnProperty.call(req.body, attr))
      placeParams[attr] = req.body[attr];
  });
  Place.findByIdAndUpdate(req.params.id, placeParams, { new: true })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function destroy(req, res) {
  Place.findByIdAndRemove(req.params.id)
    .then((doc) => {
      res.json({});
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  index: index,
  create: create,
  show: showOne,
  update: update,
  destroy: destroy,
  //metodos del ORM:metodos definidos en el controlador
};
