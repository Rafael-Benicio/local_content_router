async function createList(){
     let response = await fetch('http://localhost:3000/Eps');
     let data = await response.json();
     let d=data.listEpisode[0]
     cList(d)
}

function cList(x){
     let get_list_ul=document.getElementById('list_videos')
     
     for(let i=0;i<x.length;i++){
          let li_ele=document.createElement('li')
          li_ele.innerHTML=x[i]
          get_list_ul.appendChild(li_ele)
     }
}

createList()

