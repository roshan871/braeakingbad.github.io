
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
          let imageHtmlList = [];
          for (let i of data) {
            const url = i.img;
            const name = i.name;
            const birthday = i.birthday;
            const status = i.status;
            const nickname = i.nickname;
            const occupation = i.occupation;
            imageHtmlList.push(`
            <div style="padding-left:267px">
            <div style="font-size:20px";>
            <p>Nickname: ${nickname}</p>
            <p>Birthday: ${birthday}</p>
            <p>Ocupation: ${occupation}</p>
            <p>Satus: ${status}</p>
            </div>
            <img src="${url}" style="height:400px; width:400px; border:5px solid aliceblue; border-radius: 10px;" alt="${name}" />
            </div>
            `);
          }
          const html = imageHtmlList.join("");
          $result.innerHTML =imageHtmlList;
        });
    }
    
    $form.addEventListener("submit", formSubmitted);
    
 
 
 
 
 //(let i of data) {
    //const url = i.img;
    //const name = i.name;        
    //const birthday = i.birthday;
    //const nickname = i.nickname;
    //const occupationList = i.occupation;
    //const 
    //imageHtmlList.push(`
        //<div style="background-image: url(${url})">
            //<h3>${name}</h3>
            //<p>Nickname: ${nickname}</p>
            //<p>Born on ${birthday}</p>
            //<p>Occupation(s): ${occupationList}</p>
        //</div>
//`);