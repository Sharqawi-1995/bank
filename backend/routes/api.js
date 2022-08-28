const express = require("express");
const router = express.Router();
const Transaction = require("../model/transaction");

router.get("/transactions", function (req, res) {
  Transaction.find({}, function (err, transactions) {
    res.send(transactions);
  });
});

router.post("/transaction", function (req, res) {
  let transaction = new Transaction({
    amount: req.body.amount,
    category: req.body.category,
    vendor: req.body.vendor,
  });
  transaction.save();
  res.end();
});

router.delete("/transaction/:id", (req, res) => {
  const transactionID = req.params.id;
  Transaction.findOneAndDelete({ _id: transactionID }, function (err, t) {
    res.end();
  });
});

router.get("/categorys", function (req, res) {
  Transaction.aggregate(
    [{ $group: { _id: "$category", sum: { $sum: "$amount" } } }],
    function (err, categorys) {
      res.send(categorys);
    }
  );
});

module.exports = router;
