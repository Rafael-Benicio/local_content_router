const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const os = require('os');
const networkCardIP = os.networkInterfaces().wlo1[0].address;
const novoConteudo = `const IpAplication="${networkCardIP}:3000";`;

fs.writeFile(__dirname+'/assets/static/js/vars.js', novoConteudo, (err) => {
	if (err) {
		console.error('Erro ao escrever no arquivo:', err);
		return;
	}
	console.log('Ip definido com sucesso!');
});

app.get('/Eps', (req, res) => {
	fs.readdir('./assets/videos/Eps/', (err, files) => {
		if (err) {
			console.error(err);
			return;
		}
		res.status(200).json({listEpisode:Array(files)});
	});
});

app.listen(port,networkCardIP);
console.log('Server started at http://'+networkCardIP+':' + port);