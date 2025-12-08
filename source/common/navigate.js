class Navigate extends Actor {
  event = "/navigated";

  enter(m) {
    this.publisher.publish(
      "/entered",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  exit(m) {
    this.publisher.publish(
      "/exited",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  forward(m) {
    this.publisher.publish(
      "/forwared",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  back(m) {
    this.publisher.publish(
      "/backed",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  next(m) {
    this.publisher.publish(
      "/nexted",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  previous(m) {
    this.publisher.publish(
      "/previoused",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  flip(m) {
    this.publisher.publish(
      "/flipped",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  reverse(m) {
    this.publisher.publish(
      "/reversed",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  draw(m) {
    this.publisher.publish(
      "/drawn",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
  replace(m) {
    this.publisher.publish(
      "/replaced",
      this.registry.card.id,
      m[0].id,
      m[0].init_id,
    );
  }
}
