
const $form = document.querySelector("form");
const $searchInput = document.querySelector(".select")
const $title = document.querySelector(".searched-characters");
const $result = document.querySelector(".result")

function formSubmitted(event){
     event.preventDefault();
     const searchExpression = $searchInput.value;
     $title.innerHTML = "Name: " +searchExpression;
     $searchInput.value = "";
     $result.innerHTML = "";
fetch(
        `https://www.breakingbadapi.com/api/characters?name=${searchExpression}`
      )
    .then((x) => x.json())
    .then((data) => {
      if(data.length !=1){
        $result.innerHTML = '<p class="empty">Wrong query!Please slect a character first</p>'
        return;
      }
       let imageHtmlList = [];
          for (let i of data) {
                 const url = i.img;
                 const name = i.name;
                 const birthday = i.birthday;
                 const status = i.status;
                 const nickname = i.nickname;
                 const occupation = i.occupation;
             imageHtmlList.push(`
               <div class="bad-js">
                  <p>Nickname: ${nickname}</p>
                  <p>Birthday: ${birthday}</p>
                  <p>Occupation: ${occupation}</p>
                  <p>Satus: ${status}</p>
               <img src="${url}" alt="${name}" />
               </div>
            `);
          }
          const html = imageHtmlList.join("");
          $result.innerHTML =imageHtmlList;
        });
    }
    
$form.addEventListener("submit", formSubmitted);
    
 
 
 
 
 