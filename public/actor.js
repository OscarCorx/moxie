function getId() {
	return Math.floor(Math.random() * 1000000000);
}

class Actor {
	static queue = [];
	addMetadata(message, priorId, metadata) {
		if (!this.id) this.id = getId();

		return Object.assign(message.metadata, {
				'id': getId(),
				'priorId': priorId || 'START',
				'actor': this.id,
				'timestamp': Date.now(),
			  'timeout': 0,
		}, metadata);
	}

	emit(message, priorId) {
		this.addMetadata(message, priorId);
		Actor.queue.push(message);
		document.dispatchEvent(new CustomEvent(message.metadata.kind, {detail: message}));
	}

	echo(kind, newKind) {
		if (!this.id) this.id = getId();
		const action = (message) => {
			emit(message, message.metadata.id, { kind: newKind });
		};
		return action;
	}

	on(kind, action) {	  
		document.addEventListener(kind, (event) => {
			setTimeout(() => {
				action(event.detail).forEach((result) => {
					this.emit(result, event.detail.metadata.id);
				});
			}, event.detail.metadata.timeout);
		});
	}
	id = getId();
}