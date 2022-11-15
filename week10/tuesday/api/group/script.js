const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b1b9bac1f0mshe0fe3806bf1ac1ep105d52jsn0a047f6101c5',
		'X-RapidAPI-Host': 'youtube-to-mp4.p.rapidapi.com'
	}
};

fetch('https://youtube-to-mp4.p.rapidapi.com/url=&title?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIfNB5RTxnhI&title=Call%20of%20Duty%20%3A%20Modern%20Warfare%202%20Remastered%20-%20All%20Weapon%20Reload%20Animations%20in%204%20Minutes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    // https://www.youtube.com/watch?v=oRdxUFDoQe0