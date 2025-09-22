/* requerir el paquete */
const sqlite = require("sqlite3");

/* conectarnos a la bd */
const db = new sqlite.Database("./data.db", sqlite.OPEN_READWRITE, (error) => {
  if (error) {
    console.error(error);
  }
});
