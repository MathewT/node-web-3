# node-web-3

## Build

```bash
docker build -t mthomas/node-web-3 .
```

## Run

```bash
docker run -p 8080:8080  -v "$(pwd)"/dist:/usr/src/app/public   -v "$(pwd)"/src:/usr/src/app/src  mthomas/node-web-3
```