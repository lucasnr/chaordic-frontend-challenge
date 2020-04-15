const list = document.querySelector("#top-5-list");

fetch(
	"https://raw.githubusercontent.com/lucasnr/frontend-intern-challenge/master/Assets/urls.json"
)
	.then(function (response) {
		return response.json();
	})
	.then(function (shortedLinks) {
		const sorted = shortedLinks.sort(function (a, b) {
			return a.hits > b.hits ? -1 : 1;
		});

		const top5 = sorted.slice(0, 5).map(function (link) {
			return {
				...link,
				hits: new Intl.NumberFormat("pt-BR").format(link.hits),
			};
		});

		top5.forEach(function (link) {
			const item = document.createElement("li");

			const anchor = document.createElement("a");
			anchor.setAttribute("target", "_blank");
			anchor.setAttribute("href", link.url);
			anchor.innerText = link.shortUrl;

			const span = document.createElement("span");
			span.innerText = link.hits;
			span.classList.add("top-5__item__amount");

			item.appendChild(anchor);
			item.appendChild(span);
			list.appendChild(item);
		});
	});
