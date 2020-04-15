$.get(
	"https://raw.githubusercontent.com/lucasnr/frontend-intern-challenge/master/Assets/urls.json",
	function (data) {
		const links = JSON.parse(data);
		onSuccess(links);
	}
);

function onSuccess(links) {
	const list = $("#top-5-list");

	const sorted = links.sort(function (a, b) {
		return a.hits > b.hits ? -1 : 1;
	});

	const top5 = sorted.slice(0, 5).map(function (link) {
		link.hits = new Intl.NumberFormat("pt-BR").format(link.hits);
		return link;
	});

	top5.forEach(function (link) {
		const item = $("<li>");

		const anchor = $("<a>");
		anchor.attr("target", "_blank");
		anchor.attr("href", link.url);
		anchor.text(link.shortUrl);

		const span = $("<span>");
		span.text(link.hits);
		span.addClass("top-5__item__amount");

		item.append(anchor);
		item.append(span);
		list.append(item);
	});
}
