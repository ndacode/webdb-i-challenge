const express = require("express");

const Accounts = require("./accountModel");

const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("hi");
  Accounts.find()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving accounts."
      });
    });
});

router.post("/", (req, res) => {
  const { name, budget } = req.body;
  if (!name || !budget) {
    res.status(400).json({
      error: "Please provide a name and budget for the account."
    });
  }
  Accounts.insert(req.body)
    .then(account => {
      res.status(201).json(account);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error while saving the account to the database."
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({
      error: "The account with the specified ID does not exist."
    });
  }

  Accounts.remove(req.params.id)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({
        error: "The accound could not be removed."
      });
    });
});
router.put("/:id", (req, res) => {
  const { name, budget } = req.body;
  const id = req.params.id;

  if (!id[0]) {
    res.status(404).json({
      error: "Please provide a name and budget for the account."
    });
  }
  Accounts.update(req.params.id, req.body)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.status(500).json({
        error: "The account information could not be modified."
      });
    });
});

module.exports = router;
