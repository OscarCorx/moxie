class View extends Actor {
	renderTemplate(context, templateId, stateId) {
		let text = templateRegistry[templateId];
		let matches;
		let elements;

		/* Set values */
		console.log('CONTEXT', context);
		matches = text.match(/{{([a-z0-9]+)}}/g) || [];
		for ( const match of matches ) {
			const value = context[match.slice(2, -2)] || '';
			text = text.replace(match, value);
		}

		const parser = new DOMParser();
		const xmlDoc = parser.parseFromString(text,'text/xml');
		xmlDoc.firstChild.setAttribute('id', templateId);

		/* Check for errors */
		const error = xmlDoc.getElementsByTagName('parsererror');
		if (error.length > 0) {
			console.log('there was an error', error);
			return;
		}

		/* Apply templates */
		elements = xmlDoc.getElementsByTagName('template');
		for (let i=elements.length-1; i>-1; i--) {
			const element = elements[i];
			const key = element.attributes.key.value;
			let templateNode = document.getElementById(key);
			if (!templateNode) {
				if (element.parentNode.tagName === 'tbody' || element.parentNode.tagName === 'table') {
				  templateNode = document.createElement('tr');
				} else {
				  templateNode = document.createElement('div');
				}
				templateNode.setAttribute('id', key);
			}
			element.replaceWith(templateNode);
		}
		const nodeId = stateId || templateId;
		const node = document.getElementById(nodeId);
		while (node.firstChild) {
			node.removeChild(node.lastChild);
		}
		
		let htmlDoc;
		let newNode;
  const s = new XMLSerializer().serializeToString(xmlDoc).replace(/xmlns="[^"]+"/g, '');
		if (s.startsWith('<tr')) {
		  htmlDoc = parser.parseFromString(`<table><tbody>${s}</tbody></table>`,'text/html');
			newNode = htmlDoc.getElementsByTagName('tbody')[0].firstChild;
		} else {
		  htmlDoc = parser.parseFromString(s,'text/html');
			newNode = htmlDoc.getElementsByTagName('body')[0].firstChild;
		}

		node.replaceWith(newNode);
	}
  constructor() {
		super();
		this.on('complete-list', (message) => {
		  renderTemplate(message.content, message.content.templateId);
			return [];
		});
		this.on('state-list', (message) => {
		  renderTemplate(message.content, 'list', 'workbench');
			return [];
		});
		this.on('state-entry', (message) => {
		  renderTemplate(message.content, 'entry', 'workbench');
			return [];
		});
		this.on('state-card', (message) => {
		  renderTemplate(message.content, 'card', 'workbench');
			return [];
		});
	}


}