# Building the Server Instance

All iles are located in the `Server` folder.


## `createInstance()`

This function returns a Server instance using the basic server implementation defined in @reposyd/serice-core and is used for creating either a single instance or a cluster instance.

All entities defined in the metamodel must be registered within the `createInstance()` function.


```` typescript
...
const server = new Server(options)

...
```

## `startInstance()`



