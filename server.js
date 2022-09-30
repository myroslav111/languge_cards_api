const app = require('./app');
/**
 *pik up mongoose
 */
const mongoose = require('mongoose');
/**
 * var from .env
 */
const { DB_HOST, PORT = 3000 } = process.env;

/**
 * connection function from mongoose if conection with db true we will start servers else exit with code 1
 */
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(`Server running. Use our API on port:${PORT}`);
    app.listen(PORT);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
