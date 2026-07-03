Signal: An abstract trigger for logic, consisting of a header and contents
 - Event: General signal to be listened to by any procedure
 - Message: Direct signal to be listened to by a specific procedure

Procedure: State maching driven by signals
- Routine: A function taking in the model, signal, and procedure
  - Action: Part of the routine that computes
  - Reaction: Part of the routine that transitions the state
- Method: Functions that take content and spits out content

Entity: Access
- Archetype: Pattern for Entity
Component: Data
- Schema: Pattern for component
