const jsonfile = require('jsonfile');
const uuid = require('uuid');
const path = './package.json';

jsonfile.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  data.version = `${ data.version }-SNAPSHOT-${ uuid.v4().substring(0,4) }`;
  console.log(data);
  jsonfile.writeFile(path, data, { spaces: 2 })
    .then(() => {
        console.log(`Updated ${ path } with SNAPSHOT version.`);
    })
});