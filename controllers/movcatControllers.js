const db = require("../connection/index");

module.exports = {
  getMovcat: (req, res) => {
    let sql = `select movies.id as idmovie, movies.nama as namamovie, categories.id as idcategory, categories.nama as namacategory
        from movies 
        join movcat on movies.id=movcat.idmovie
        join categories on categories.id=movcat.idcategory;`;
    db.query(sql, (err, result) => {
      if (err) res.status(500).send(err);
      res.status(200).send(result);
    });
  },
  addMovcat: (req, res) => {
    let { idcategory, idmovie } = req.body;
    let sqlCheck = `select movies.nama as namamovie, categories.nama as namacategory
        from movies 
        join movcat on movies.id=movcat.idmovie
        join categories on categories.id=movcat.idcategory where idmovie=${idmovie} and idcategory=${idcategory}`;
    let sql = `insert into movcat values (${idmovie},${idcategory})`;

    try {
      db.query(sqlCheck, (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
          res.send(
            `Movie berjudul : "${result[0].namamovie}" sudah termasuk ke dalam kategori "${result[0].namacategory}"`
          );
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
  deleteMovcat: (req, res) => {
    let { idmovie, idcategory } = req.body;
    let sql = `delete from movcat where idmovie=${idmovie} and idcategory=${idcategory}`;
    try {
      db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
};
