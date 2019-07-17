## Ganache fork bug: extcodesize

Reproduce:

```
$ npm install
$ ./node_modules/.bin/ganache-cli -p 9545 &
$ ./node_modules/.bin/ganache-cli -f 'http://localhost:9545'
```

In different terminal:

```
$ ./node_modules/.bin/truffle test
$ ./node_modules/.bin/truffle test --network ganache
```

### Expected result

Both tests pass

### Actual result

The first test passes, but the second run against the forked ganache instance fails
