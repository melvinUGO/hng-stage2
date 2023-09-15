const express = require("express");
const {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controller/person");
const route = express.Router();

route.route("/").post(createPerson);
route
  .route("/:user_id")
  .get(getPerson)
  .patch(updatePerson)
  .delete(deletePerson);

module.exports = route;
