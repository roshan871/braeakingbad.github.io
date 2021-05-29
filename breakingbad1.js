
const $form = document.querySelector("form");
const $title = document.querySelector(".searched-characters");
const $result = document.querySelector(".result")
const $button = document.querySelector(".button");

function formSubmitted(event){
    event.preventDefault();
    const searchExpression = $button;
    $title.innerHTML = $button;
    $result.innerHTML = "";
    fetch(
        `https://breakingbadapi.com/api/characters=${searchExpression}`
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
    
 
 
 
 
 