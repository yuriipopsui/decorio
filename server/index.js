const app = require("./src/app");

const port = process.env.PORT || console.log('No port provided');
if(!port) {
  console.log('Failed to connect to the database:');
  return;
}

app.listen(port, () => console.log(`Server is running on port ${port}`));


