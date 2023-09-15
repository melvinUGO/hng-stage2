const Person = require("../model/Person");

const createPerson = async (req, res) => {
  const { name } = req.body;
  if (name) {
    const person = await Person.create({ name });
    return res.status(201).json(person);
  } else {
    res.status(400).json({ message: "provide name" });
  }
};

const getPerson = async (req, res) => {
  const { user_id: _id } = req.params;

  const person = await Person.findById({ _id });

  if (person) {
    return res.status(200).json(person);
  } else {
    res.status(404).json({ message: `id: ${_id} is not in the data base` });
  }
};

const updatePerson = async (req, res) => {
  const { user_id: _id } = req.params;

  const person = await Person.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });

  if (person) {
    return res.status(200).json(person);
  } else {
    res.status(404).json({ message: `id: ${_id} is not in the data base` });
  }
};

const deletePerson = async (req, res) => {
  const { user_id: _id } = req.params;

  const person = await Person.findByIdAndDelete(_id);

  if (person) {
    return res.status(200).json(person);
  } else {
    res.status(404).json({ message: `id: ${_id} is not in the data base` });
  }
};

module.exports = { createPerson, getPerson, updatePerson, deletePerson };
