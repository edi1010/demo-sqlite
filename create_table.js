const sqlite = require("sqlite3");

let sql = "";

const db = new sqlite.Database("./data.db", sqlite.OPEN_READWRITE, (error) => {
  if (error) {
    console.error(error);
  }
});

sql = `
    create table if not exists categories(
        id integer primary key autoincrement,
        name varchar(100) not null
    )
`;

/* ejecutar */
db.run(sql, (error) => {
  if (error) {
    console.error(error);
  }
});
