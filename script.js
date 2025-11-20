
const windowBtn = document.querySelector('.window');
const windowPageLoad = document.querySelector('.window-btn-click');
const shutDowmbtn = document.querySelector('.shut-down-btn');
const shutDowmPageLoad = document.querySelector('.shut-down-page-load');
const powerOnbtn = document.querySelector('.power-on');
const powerOnpage = document.querySelector('.power-on-page');
const PoweringOnPage = document.querySelector('.powering-on-page');
const btnClickColor = document.querySelectorAll('#btn-click');
let topZ = 10;


renderIcons()
async function renderIcons() {
    const data = await fetch(`appfolder/album.json`);
    const response = await data.json();


    let finalApp = '';
    response.forEach(resp => {
        const cleanName = resp.folder.replace('appfolder/', '');
        finalApp += `<div class="card" data-app="${cleanName}">
                    <img src="${resp.cover}" width="50px" height="50px">
                    <p>${resp.Name}</p>
                </div>`
    });
    document.querySelector('.render-icons').innerHTML = finalApp

    const cardName = document.querySelectorAll('.card');
    cardName.forEach(card => {
        card.addEventListener("click", () => {
            const folderName = card.dataset.app;
            console.log(folderName)
            openAppWindow(folderName);
        })
    })
}
function openAppWindow(folderName) {

    const Appwindow = document.querySelector('.app-window-container');
    const basePath = "http://127.0.0.1:3000/DeckstopOS/";
    const iFrameSrc = `${basePath}appfolder/${folderName}/index.html`;

    const newAppHtml = `
          <div class="app-window" >
                <div class="size-btns">
                    <button class="minimize"><img src="images/remove.svg" width="30px" height="30px"></button>
                    <button class="maximize"><img src="images/squre.svg" width="20px" height="20px"></button>
                    <button class="none"> <img src="images/cross.svg" width="35px" height="35px"></button>
                </div>
                
                    <iframe src="${iFrameSrc}" frameborder="0"></iframe>
                
         </div>`

    Appwindow.insertAdjacentHTML("beforeend", newAppHtml);

    const newWin = Appwindow.lastElementChild;

    newWin.addEventListener("mousedown", () => newWin.style.zIndex = ++topZ);

    document.addEventListener("click", function (e) {

        let btn = e.target.closest("button");
        if (!btn) return;

        let win = btn.closest(".app-window");

        if (btn.classList.contains("none")) {
            win.remove();
        }

        if (btn.classList.contains("minimize")) {
            const win = btn.closest(".app-window");
            win.classList.toggle("minimize");
        }
        if (btn.classList.contains("maximize")) {
            const win = btn.closest(".app-window");
            win.classList.toggle("maximize");
        }
    })
}

 function footerFolderApp(folderName) {
   
    console.log(folderName.folder)
}

windowBtn.addEventListener("click", () => {
    if (windowPageLoad.style.left == "-1000px") {
        windowPageLoad.style.left = 0;
    }
    else {
        windowPageLoad.style.left = "-1000px"
    }
})
shutDowmbtn.addEventListener("click", () => {
    shutDowmPageLoad.style.display = "block"

    setTimeout(() => {
        shutDowmPageLoad.style.display = "none";
        powerOnpage.style.display = "block";
    }, 3000);
})
powerOnbtn.addEventListener("click", () => {
    PoweringOnPage.style.display = "block";
    setTimeout(() => {
        PoweringOnPage.style.display = "none";
        shutDowmPageLoad.style.display = "none";
        powerOnpage.style.display = "none";
        windowPageLoad.style.left = "-1000px"
    }, 3000);
})

btnClickColor.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add('active')
    })
    btn.addEventListener('dblclick', () => {
        btn.classList.remove('active');
    })
})

const brightRange = document.querySelector('#bright-range');
const container = document.querySelector('.container');

brightRange.addEventListener('input', () => {
    const valuee = brightRange.value;
    container.style.filter = `brightness(${valuee})`
})


document.querySelector('.wifi-bat-lang').addEventListener('click', () => {
    if (document.querySelector('.wifi-bt-lg-page').style.display == "none") {
        document.querySelector('.wifi-bt-lg-page').style.display = "block";
    }
    else {
        document.querySelector('.wifi-bt-lg-page').style.display = "none";
    }
})

async function whetherupdate() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=noida&appid=362bac7c996ad45238c8c50e21ade0e1');
    const data = await response.json();

    document.querySelector('.temp').innerHTML = data.main.temp + "°C Clear";
}
whetherupdate();

async function datetime() {
    const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata')
    const data = await response.json();
    console.log(data);

    document.querySelector('.time').innerHTML = data.time;
    document.querySelector('.date').innerHTML = data.date;

}
datetime();