# RefMark

JavaScript benchmarking suite designed to acquire two or more git refs, build them, then execute the requested tests. Uses 0x under the hood. Mostly a prototype for [refmark](https://github.com/jon-e-turner/refmark).

## Command Structure

```bash
refmark
├─ config
│  ├─ list
│  ├─ load
│  ├─ init
│  ├─ save
│  └─ set
│     ├─ auth
│     ├─ baseUrl
│     ├─ benchmark
│     ├─ followRedirects
│     ├─ proxy
│     ├─ resultOrder
│     ├─ setup
│     └─ teardown
├─ foo
├─ run
│  ├─ benchmark
│  ├─ setup
│  ├─ teardown
│  └─ validate
└─ help
```

## MVP

1. Pull a ref from GitHub
   1. Public, so no auth yet
      1. Use jon-e-turner/jon-e-turner
   1. Shallow fetch of the ref into memory
   1. Parse the object
1. Command line arguments required
   1. Base URI
   1. Ref

## Set-up

1. Configure the refs to use
   1. By default, will order results from oldest to newest by last modified
   1. Will be configurable
1. Set the build options, e.g. `npm run build` or `pnpm run typecheck && pnpm run compile`
1. Configure the benchmark tests
1. ???
1. Profit (maybe?)

## Future Work

- Register a GitHub app
  - Set up for both user authentication (interactive CLI) and for app authentication (CI/CD tool)
