const crudSubscriptions = [
  {
    source: "/procedure/subscription",
    procedure: "/crud",
    event: "/create",
    action: CRUD.create,
    reaction: HTML.load,
  },
  {
    source: "/procedure/subscription",
    procedure: "/crud",
    event: "/select",
    action: CRUD.select,
    reaction: HTML.load,
  },
  {
    source: "/procedure/subscription",
    procedure: "/crud",
    event: "/update",
    action: CRUD.update,
    reaction: HTML.load,
  },
];
crudSubscriptions.forEach((c) => PROCESS.model.set(c));
