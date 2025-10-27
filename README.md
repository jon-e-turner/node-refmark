# RefMark

JavaScript benchmarking suite designed to acquire two or more git refs, build them, then execute the requested tests. Uses 0x under the hood.

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

## Set-up

1. Configure the refs to use
   1. By default, will order results from oldest to newest by last modified
   1. Will be configurable
1. Set the build options, e.g. `npm run build` or `pnpm run typecheck && pnpm run compile`
1. Configure the benchmark tests
1. ???
1. Profit (maybe?)
