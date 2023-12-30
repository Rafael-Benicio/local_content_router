const VIDEO_PATH='videos/Eps/'
const MOVIE_PATH='videos/Filmes/'
const VIDEO_TAG_ID='video_view'

async function getEpisodesList(){
     let response = await fetch('http://192.168.3.30:3000/Eps');
     let data = await response.json();
     let listOfEpisodes=data.listEpisode[0]
     return listOfEpisodes
}

function generateEpisodeList(episodeList=[''],elementId='',elementIn='',path=''){
     let get_list_ul=document.getElementById(elementId)

     for(let index=0;index<episodeList.length;index++){
          let elementTag=document.createElement(elementIn)
          elementTag.innerHTML=episodeList[index]
          elementTag.setAttribute("onclick", `setVideoPath('${path}' , '${episodeList[index]}');`);
          elementTag.setAttribute("title", episodeList[index]);
          get_list_ul.appendChild(elementTag)
     }
     setVideoPath(VIDEO_PATH,episodeList[0])
}

function setVideoPath(path='',video=''){
     const newPath=path+video
     const videoType=video.split('.')
     let get_video_source=document.getElementById(VIDEO_TAG_ID)
     get_video_source.setAttribute('src',newPath)
     get_video_source.setAttribute('type',`video/${videoType[1]}`)
}

getEpisodesList().then(promiseEpsList => generateEpisodeList(promiseEpsList,'list_videos','li',VIDEO_PATH))

