### External API
An [org]anization creates a [product].
A [tennant] is a combination of both.
This is encoded in the URL domain.  This reflects the infrastructure nature of the choice.
  - org.product.com
  - product.org.com
  - tennant.product.org.com

A product is made up of a number of [feature]s.
Each is comprosed of an [application], a [action], and an [entity].
This is encoded in the URL path.
  - product.org.com/application/action/entity

An [application] and an [action] is a system, as entity can be inferred from id
  - /application/action

The parameters of the function call are keyword arguments as the URL query params.
Full keys are used, as protobuff is used when wanting to be space efficient
  - idempotency_key=
  - project_id=
  - entity_id=

### Access
[Access] applies to physical and virtual barriers.  It is applied on the [tennant] level.
It is boolean and specific to the user.

[Permission] is access to an individual [feature].
A group of [permission]s for a given [application] is called a [role].
Users can have one [role] per [application].  Indivdual [permissions] are used to augment.

A copy of an [application] is a [project].
A [project] inherits [role]s and [permission]s.
It can define internal [features]s and have associated [permissions] and [roles].

A [rule] is access to an API.
This can be internal / external: HTTP request, data, writing to the screen.
An ACL for block / allow lists can be used for specific [rules]

## Flow
Code flows through [reactions].
A [command] results in an [event]; an [event] results in a [query]; a [query] results in a [command].
A [query] reads and sends data.
A [command] alters data based on sent data.
An [event] alters state.
