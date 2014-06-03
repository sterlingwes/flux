# Flux

Modularized version of Facebook's "Flux" client side data flow concept.

Full credit to the Facebook team, notably Bill Fisher and Jing Chen.

More info:
*   [http://facebook.github.io/react/docs/flux-overview.html](http://facebook.github.io/react/docs/flux-overview.html)
*   [http://facebook.github.io/react/blog/2014/05/06/flux.html](http://facebook.github.io/react/blog/2014/05/06/flux.html)

All code from Facebook is under the **Apache 2** license.

# Components

The main module exports the following methods:

## .register(name)

Register an action.

*   name (string) - unique identifier for the action

## .call(name[, payload]) `method`

Invoke an action.

*   name (string) - name of a registered action
*   payload (any) - value to pass

## .Dispatcher

### .Dispatcher.register(callback)

Call to register a handler for invoked actions.

*   callback (function) - the only argument is the payload, of which the `action` attribute contains an `actionType` which matches the names defined with the primary `register` method, above.