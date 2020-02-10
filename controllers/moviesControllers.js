const db = require("../connection/index");

module.exports = {
  getMovie: (req, res) => {
    let sql = `select * from movies`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addMovie: (req, res) => {
    console.log("tes");
    let { nama, tahun, description } = req.body;
    let sql = `insert into movies values (0,'${nama}',${tahun},'${description}')`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  deleteMovie: (req, res) => {
    let { id } = req.body;
    let sql = `delete from movies where id=${id}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  updateMovie: (req, res) => {
    console.log("tes");
    let { id, nama, tahun, description } = req.body;
    let sql = `update movies set nama='${nama}', tahun=${tahun}, description='${description}' where id=${id}`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  }
};
