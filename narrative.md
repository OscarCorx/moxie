### External API
An [org]anization creates a [product].
This is encoded in the URL domain.  This reflects the infrastructure nature of the choice.
  - org.product.com
  - product.org.com
  - tennant.product.org.com

A product is made up of a number of [feature]s.
Each is comprosed of an [application], a [verb], and an [entity].
This is encoded in the URL path.
  - product.org.com/application/verb/entity
The parameters of the function call are keyword arguments as the URL query params.
The first query param is always i=<>, representing the idempotency key.

### Permissions
Permissions are used on top of physical and virtual barriers.
[Permission] is access to an individual [action].
A group of [permission]s for a given [application] is called a [role].
Users can have one [role] per [application].  Indivdual [permissions] are used to augment.

A copy of an [application] is a [project].
A [project] inherits [role]s and [permission]s.  It can define internal [action]s to have more.

Attribute based [permission]s can also be applied.

## Flow
An initial [action] is a [command]. A [reaction] is an [event].
A [query] subscribes to an [event].  A [query] produces [command]s.
When an [event] is [emitted], all subscribed [queries] are run.
The resulting [commands] are enacted.  In reaction, [events] are meitted.
