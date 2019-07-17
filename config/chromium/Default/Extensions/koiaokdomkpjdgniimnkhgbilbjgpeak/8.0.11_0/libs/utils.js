Array.prototype.unique = function () {
	var ko = {};
	this.forEach(function (item) {
		ko[item] = 1;
	});
	return Object.keys(ko);
};

Array.prototype.remove = function (item) {
	this.splice(this.indexOf(item), 1);
};

Array.prototype.contains = function (item) {
	return (this.indexOf(item) != -1);
};

function map(map, obj) {
	obj = obj || this;
	$.each(map, function (k, v) {
		obj[k] = obj[v];
	});
}

function clone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function now() {
    return Math.floor((new Date()).getTime() / 1000);
}

function addScript(template) {
    var s = document.createElement("script");
    if (template.src) {
        s.src = template.src;
    }
    if (template.textContent) {
        s.textContent = template.textContent;
    }
    document.documentElement.appendChild(s);
}

function buildScript(parts) {
	let script = '';
	for (let part of parts) {
		switch (part.type || typeof part.data) {
			case 'function':
				if (part.exec) {
					script += "(" + part.data.toString() + ")(); \n"
				} else {
					script += part.data.toString() + "; \n"
				}
				break;
			case 'object':
				script += `let ${part.name} = ` + JSON.stringify(part.data) + "; \n"
				break;
			case 'string':
				script += `let ${part.name} = '` + part.data + "'; \n"
				break;
			case 'number':
			default:
				script += `let ${part.name} = ` + part.data + "; \n"
				break;
		}
	}

	return script;
}

function saveAsBlob(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function (e) {
        if (this.status == 200) {
            var url = URL.createObjectURL(this.response);
            callback(url);
        }
    };
    xhr.send();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
