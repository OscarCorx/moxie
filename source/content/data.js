const SCHEMA = [
  {
    id: "/source_index",
    source: "/index",
    field: "source",
  },
  {
    id: "/primary_source_index",
    source: "/index",
    field: "primary_source",
  },
  {
    id: "/pimary_source_subscription",
    source: "/subscription",
    reaction: "/outlined",
    reaction_field: "source",
    index_id: "/primary_source_index",
    index_field: "/",
  },
];
