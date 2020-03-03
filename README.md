Steps to reproduce:

1. Install node version `13.9.0`
1. Run `docker-compose up --build`
2. Go to http://localhost:8091
3. Create CouchDB with login `admin` and password `123456`
4. run `node index.js`

What I'm getting when `bucket.insert` or `bucket.get` are not commented out:

```
insert err [CouchbaseError: The remote host closed the connection] {
  message: 'The remote host closed the connection',
  code: 45
}
insert res null
```
