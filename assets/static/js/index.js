const VIDEO_PATH='videos/Eps/';
// const MOVIE_PATH='videos/Filmes/'
const VIDEO_TAG_ID='video_view';
const VIDEO_NAME_TAG_ID='video_card_name';

async function getEpisodesList(){
	const response = await fetch('http://192.168.3.30:3000/Eps');
	const data = await response.json();
	return data.listEpisode[0];
}

function generateEpisodeList(episodeList=[''],elementId='',elementIn='',path=''){
	let get_list_ul=document.getElementById(elementId);

	for(let index=0;index<episodeList.length;index++){
		let elementTag=document.createElement(elementIn);
		elementTag.innerHTML=episodeList[index];
		elementTag.setAttribute('onclick', `setVideoPath('${path}' , '${episodeList[index]}');`);
		elementTag.setAttribute('title', episodeList[index]);
		get_list_ul.appendChild(elementTag);
	}
	setVideoPath(VIDEO_PATH,episodeList[0]);
}

function setVideoName(video=''){
	const videoType=video.split('.')[0];
	let get_video_source=document.querySelector(`#${VIDEO_NAME_TAG_ID}>p`);
	get_video_source.innerHTML=videoType;
}

function setVideoPath(path='',video=''){
	const newPath=path+video;
	const videoType=video.split('.');
	let get_video_source=document.getElementById(VIDEO_TAG_ID);
	get_video_source.setAttribute('src',newPath);
	get_video_source.setAttribute('type',`video/${videoType[1]}`);
	setVideoName(video);
}

function videoWindowResize(){
	const windowHeight=window.innerHeight;
	const windowWidth=window.innerWidth;
	let get_video_tag=document.getElementById(VIDEO_TAG_ID);

	if (windowHeight<windowWidth){
		get_video_tag.style.setProperty('height','95vh','important');
		get_video_tag.style.setProperty('width','auto','important');
	}else{
		get_video_tag.style.setProperty('height','auto','important');
		get_video_tag.style.setProperty('width','100vw','important');
	}

}

videoWindowResize();

getEpisodesList().then(promiseEpsList => generateEpisodeList(promiseEpsList,'list_videos','li',VIDEO_PATH));

document.getElementById(VIDEO_TAG_ID).addEventListener('play', function() {
	console.log('O vídeo está sendo reproduzido.');
	document.getElementById(VIDEO_NAME_TAG_ID).style.display = 'none';
});

document.getElementById(VIDEO_TAG_ID).addEventListener('pause', function() {
	console.log('O vídeo foi pausado.');
	document.getElementById(VIDEO_NAME_TAG_ID).style.display = 'block';
});
