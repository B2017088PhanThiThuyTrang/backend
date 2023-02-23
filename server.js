const app = require("./app");
const config = require("./app/config");

const PORT = config.app.port;

app.listen(POST, () => {
    console.log(`Server is running on port${PORT}.`);
});

module.exports = app;