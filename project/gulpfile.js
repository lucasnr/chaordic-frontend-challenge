const { src, dest, series, parallel } = require("gulp"),
	clean = require("gulp-clean"),
	htmlmin = require("gulp-htmlmin"),
	htmlReplace = require("gulp-html-replace"),
	concat = require("gulp-concat"),
	minify = require("gulp-minify");

function cleanDist() {
	return src("dist/", { read: false, allowEmpty: true }).pipe(clean());
}

function copyDist() {
	return src(["src/**/*", "!src/assets/sass/**", "!src/assets/js/**"]).pipe(
		dest("dist/")
	);
}

function minifyJs() {
	return src("src/**/*.js")
		.pipe(
			minify({
				ext: {
					min: ".js",
				},
				noSource: true,
			})
		)
		.pipe(concat("all.js"))
		.pipe(dest("dist/assets/js/"));
}

function buildHtml() {
	return src("src/**/*.html")
		.pipe(
			htmlReplace({
				js: "assets/js/all.js",
			})
		)
		.pipe(dest("dist/"));
}

function minifyHtml() {
	return src("dist/**/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest("dist/"));
}

exports.default = series(
	cleanDist,
	copyDist,
	parallel(minifyJs, buildHtml),
	minifyHtml
);
