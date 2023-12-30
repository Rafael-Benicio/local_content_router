async function getEpisodesList(){
     let response = await fetch('http://192.168.3.30:3000/Eps');
     let data = await response.json();
     let listOfEpisodes=data.listEpisode[0]
     return listOfEpisodes
}

function generateEpisodeList(epList,elementId,elementIn){
     let get_list_ul=document.getElementById(elementId)

     for(let index=0;index<epList.length;index++){
          let li_ele=document.createElement(elementIn)
          li_ele.innerHTML=epList[index]
          get_list_ul.appendChild(li_ele)
     }
}

getEpisodesList().then(promiseEpsList => generateEpisodeList(promiseEpsList,'list_videos','li'))

