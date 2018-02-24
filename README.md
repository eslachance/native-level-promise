# Native Level Promise
A proper, Class-based, Promisified, Node 8 Native wrapper around level.

## Installation

```
npm i native-level-promise
```

## Usage

Most native `Level` features should work the same in promisified versions. Here are a few examples: 

```js
const Level = require('native-level-promise');

db = new Level('./data/mydb');

db.put("test", "thing").then(() => console.log("Value inserted"));

db.del(key).then(() => console.log("Value deleted"));
```

Note that *streams* remain the same: 

```js
const stream = db.keyStream();
stream.on('data', (key) => {
  this.db.get(key, (err, value) => {
    if (err) console.log(err);
    // do something with value.
  });
});
stream.on('end', () => {
  console.log("Key Stream has ended");
});
```

And finally

```js
db.close().then(() => {
  console.log("DB has been closed!");
});
```

I feel I don't need to say this all works with `async/await` but I'll say it anyway because... because.