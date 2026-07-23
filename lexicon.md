Message: An abstract trigger for logic, consisting of a [header] and [contents]
 - Action: Direct signal to be listened to by a specific procedure
 - Reaction: General signal to be listened to by any procedure

Procedure: State maching driven by signals
- Routine: Part of the routine that computes
- Transition: Part of the routine that transitions the state
- Method: Functions that take content and spits out content

Entity: Access
- Archetype: Pattern for Entity
Component: Data
- Schema: Pattern for component

TODO
- [ ] Tablet
- [ ] Mobile
- [ ] Controller
  - [ ] Make the background into a game

Workflows
- [ ] Namespaces
  - [ ] Hierarchical
  - [ ] Only points at `schema`
- [ ] Names
  - [ ] `source` to `schema`
  - [ ] `as` option for `schema`
  - [ ] `message`/`event` vs `action`/`reaction` vs `routine`/`transition`
- [ ] Query Editor
  - [ ] Archetypes are queries
- [ ] Schema Editor
- [ ] Data Revision Review
- [ ] Expectations
  - [ ] Theorems
- [ ] Code Revision Review
- [ ] HTTP Client
  - [ ] File Serialization as POST
- [ ] Component / Table
- [ ] Secret Management
- [ ]

TODO
- [ ] Change `parent` to `entity`in `/source/fields`
- [ ] Add `serial_number`, `id`, `source` and `transaction` as default fields
