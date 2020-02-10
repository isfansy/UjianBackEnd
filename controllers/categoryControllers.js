const db = require("../connection/index");

module.exports = {
  getCategory: (req, res) => {
    let sql = `select * from categories`;
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addCategory: (req, res) => {
    let { nama } = req.body;
    let sqlCheck = `select * from categories where nama = '${nama}'`;
    let sql = `insert into categories values (0,'${nama}')`;
    try {
      db.query(sqlCheck, (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
          res.send(`Kategori "${nama}" sudah terdaftar`);
        } else {
          db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
          });
        }
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  deleteCategory: (req, res) => {
    let { id } = req.body;
    let sql = `delete from categories where id=${id}`;
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  updateCategory: (req, res) => {
    console.log("tes");
    let { id, nama } = req.body;
    let sql = `update categories set nama='${nama}' where id=${id}`;
    db.query(sql, data, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
