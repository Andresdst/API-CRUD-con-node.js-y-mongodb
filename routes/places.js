const express = require("express");
const Place = require("../models/Place");

let router = express.Router();

const placesCtrl = require("../controllers/PlacesCtrl");

router.route("/").get(placesCtrl.index).post(placesCtrl.create);

router
  .route("/:id")
  .get(placesCtrl.show)
  .put(placesCtrl.update)
  .delete(placesCtrl.destroy);

module.exports = router;
/*
app.post("/places", (req, res) => {
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
});

app.get("/places", (req, res) => {
  Place.find({})
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/places/:id", (req, res) => {
  Place.findById(req.params.id)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/places/:id", (req, res) => {

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
});

app.delete("/places/:id", (req, res) => {
  Place.findByIdAndRemove(req.params.id)
    .then((doc) => {
      res.json({});
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});
*/
