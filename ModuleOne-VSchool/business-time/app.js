function buttonPrices() {
    window.open('http://127.0.0.1:5500/business-time/prices.html');
}

function faqButton() {
    window.open('http://127.0.0.1:5500/business-time/faqs.html');
}
function contactButton() {
    window.open('http://127.0.0.1:5500/business-time/contact.html');
}
function aboutUsButton() {
    window.open('http://127.0.0.1:5500/business-time/about-us.html');
}



var unirest = require("unirest");

var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

req.query({
	"callback": "test",
	"id": "2172797",
	"units": "%22metric%22 or %22imperial%22",
	"mode": "xml%2C html",
	"q": "London%2Cuk"
});

req.headers({
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "762e580579mshf6d000c37b55cd7p1c0265jsn3fae4cc6382d",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});