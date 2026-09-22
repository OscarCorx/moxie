/misenplace
  - /deck
  - /controls
  - /bindings
  - /primary_design
  - /secondary_design
/deck
  - /cards
    - /index:int
    - /card:card
  - /navigation
    - /focus:card
    - /exit:deck
/card
  - /deck
  - /faces
    - /index:int
    - /face:face
  - /navigation
    - /focus:face
/face
  - /card
  - /inert
    - /index:int
    - /entry:entry
  - /primary
    - /index:int
    - /entry:entry
  - /secondary
    - /index:int
    - /entry:entry
  - /template
    - /entry:
    - /entry_template:
  - /navigation
    - /primary_focus:boolean
    - /secondary_focus:boolean

/entry/textarea
  - /entry/textarea/template
  - /entry/textarea/data

/css
  - /css/keyword
/style
  - /style/element
/design
  - /design/theme
  - /design/position
  - /design/space
  - /design/style
    - /style:style
