window.addEventListener('load',hide_preloader)

function hide_preloader(){
    document.getElementById("preloader").style.display="none";
    document.getElementById("nav").style.position="fixed";
}


let sort_by = "publishedAt";
let language = "en";
let topics = ['football','phones','cars','politics'];

const daily_news = {
    api_key : "5845f0e0005141c9a6626b736ab3660e",
    fetch_daily_news : function(topic){
        fetch("https://newsapi.org/v2/everything?q="+topic+"&sortBy="+sort_by+"&language="+language+"&apiKey="+this.api_key)
        .then((info)=>info.json())
        .then((info)=>this.display_daily(info))
    }, 
    display_daily : function(info){
         const daily_news_wrapper = document.querySelector('.daily_news');
         const first_post = document.getElementById('first_post');
         const second_post = document.getElementById('second_post');
         const third_post = document.getElementById('third_post');
         const fourth_post = document.getElementById('fourth_post');

        const daily_post_wrapper = document.createElement('div');
        daily_post_wrapper.classList.add('dailypost_wrapper');
        const daily_img_wrapper = document.createElement('div');
        const daily_img = document.createElement('img');
        daily_img.classList.add('dailyimg');
        daily_img.src = info.articles[0].urlToImage;
        const dailypost_text = document.createElement('div');
        dailypost_text.classList.add('dailypost_text');
        const author = document.createElement('p');
        author.innerText = "Author : "+info.articles[0].author;
        const title = document.createElement('p');
        title.innerText = info.articles[0].title;
        const description = document.createElement('p');
        description.innerText = info.articles[0].description;
        const content = document.createElement('p');
        content.innerText = info.articles[0].content;
        const publishedAt = document.createElement('p');
        publishedAt.innerText = "Published At : "+info.articles[0].publishedAt;
        publishedAt.classList.add('publishedAt');

        //appending
        daily_news_wrapper.appendChild(daily_post_wrapper);
        daily_post_wrapper.appendChild(daily_img_wrapper);
        daily_post_wrapper.appendChild(dailypost_text);
        daily_img_wrapper.appendChild(daily_img);
        dailypost_text.appendChild(author);
        dailypost_text.appendChild(title);
        dailypost_text.appendChild(description);
        dailypost_text.appendChild(content);
        dailypost_text.appendChild(publishedAt);
    }
}

for (let topic = 0 ; topic<topics.length; topic++){
    daily_news.fetch_daily_news(topics[topic]);
}
//////////////////////////////////////////////

const searched_news = {
    api_key :"5845f0e0005141c9a6626b736ab3660e",
    fetch_searched_news : function(topic){
        fetch("https://newsapi.org/v2/everything?q="+topic+"&sortBy="+sort_by+"&language="+language+"&apiKey="+this.api_key)
        .then((data)=>data.json())
        .then((data)=>this.display_searched_news(data))
    },
    display_searched_news : function(data){
        let results = data.totalResults;
        const daily_news_wrapper = document.querySelector('.daily_news');
        daily_news_wrapper.style.display = "none";
        if (results>20){
            results = 20;
            console.log(results);} 
            console.log(results);
            const news_wrapper = document.querySelector('.searched_news')
            news_wrapper.innerHTML = "";
        for(let j=0; j<results; j++){
            const new_wrapper = document.createElement('div');
            new_wrapper.classList.add('dailypost_wrapper');
            const searched_img = document.createElement('img');
            searched_img.classList.add('searched_img');
            searched_img.src = data.articles[j].urlToImage;
            const searched_text = document.createElement('div');
            searched_text.classList.add('dailypost_text');
            const searched_author = document.createElement('p');
            searched_author.innerText = "Author : " + data.articles[j].author;
            const searched_title = document.createElement('p');
            searched_title.innerText = data.articles[j].title;
            const searched_description = document.createElement('p');
            searched_description.innerText = data.articles[j].description;
            const searched_content = document.createElement('p');
            searched_content.innerText = data.articles[j].content;
            const searched_publishedAt = document.createElement('p');
            searched_publishedAt.innerText = "Published At : "+data.articles[j].publishedAt;
            searched_publishedAt.classList.add('publishedAt');

            //appending
            news_wrapper.appendChild(new_wrapper);
            new_wrapper.appendChild(searched_img);
            new_wrapper.appendChild(searched_text);
            searched_text.appendChild(searched_author);
            searched_text.appendChild(searched_title);
            searched_text.appendChild(searched_description);
            searched_text.appendChild(searched_content);
            searched_text.appendChild(searched_publishedAt);
        }

}
}

let search_input = document.getElementById('search_box');
let search_btn = document.getElementById('search_btn');

document.addEventListener('keydown',(event)=>{
    if (event.key=='Enter' && search_input.value!=""){
        searched_news.fetch_searched_news(String(search_input.value));
    }
} )

search_btn.addEventListener('click',()=>{
    if (search_input.value!=""){
        searched_news.fetch_searched_news(String(search_input.value));
    }
})