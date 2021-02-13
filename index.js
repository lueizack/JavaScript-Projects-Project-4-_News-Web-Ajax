console.log('Hey..!,This is index.js');
//a0e7b82dc3cc4e118a838f94fb33b193

//Initialize the NEWS API parameters
let source = 'in';
let apiKey = 'a0e7b82dc3cc4e118a838f94fb33b193';

//Grabbing the news Container from index.html by Id.
newsAccordion = document.getElementById('newsAccordion');

//Create an AJAX GET request
const xhr = new XMLHttpRequest();

xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";

        articles.forEach (function(element,index) {
            //console.log(element,index);
            let news =`<div class="card">
                        <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index+1}: </b> <span class="badge badge-secondary">${element["title"]}</span> 
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href ="${element["url"]}" target = "_blank"> Read more here </a> </div>
                            </div>
                        </div> `
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send();

