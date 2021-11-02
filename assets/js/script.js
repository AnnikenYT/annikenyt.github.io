let ageEl = document.getElementById("age");

setInterval(() => {
	let time = dayjs().diff(dayjs.unix(1118119990), "year", true);
	ageEl.innerText = time.toString().substring(0, 11);
}, 50);
