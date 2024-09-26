let storyData = [
  {
    user: "abdul",
    dp: "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1661765722951-7c001baba43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "sharma",
    dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1687382111414-7b87afa5da34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "khushi",
    dp: "https://images.unsplash.com/photo-1623170909888-4e97ff277186?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1463674349210-38e4fa154dda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "ar_comm",
    dp: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    user: "info_v",
    dp: "https://plus.unsplash.com/premium_photo-1697612942566-e0c243ab512c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1697612943572-460a55c10ec1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let stories_Container = document.querySelector(".stories-container");
let storyBar = document.querySelector(".storybar");
let progressBar = document.querySelector(".progress");
let viewStory = document.querySelector(".viewstory");

let clutter = "";

storyData.forEach(function (elem, idx) {
  clutter += `<div class="story-con">
                <div class="story-box">
                  <img id="${idx}" src="${elem.dp}" alt="img">
                </div>
                <p class='namee'>${elem.user}</p>
              </div>
              `;
  // console.log(elem.user);
});

stories_Container.innerHTML = clutter;

// stories_Container.addEventListener("click", function (details) {
//   // console.log(details.target.id);
//   // console.log(storyData[details.target.id]);
//   let value = storyData[details.target.id].story;
//   // console.log(viewStory);

//   viewStory.style.display = "block";
//   storyBar.style.display = "block";
//   progressBar.style.display = "block";

//   viewStory.style.backgroundImage = `url(${value})`;
//   setTimeout(function () {
//     viewStory.style.display = "none";
//   }, 5000);
// });

stories_Container.addEventListener("click", function (details) {
  let value = storyData[details.target.id].story;

  viewStory.style.display = "block";
  viewStory.style.backgroundImage = `url(${value})`;

  setTimeout(function () {
    storyBar.style.display = "block";
    progressBar.style.display = "block";
  }, 200);

  setTimeout(function () {
    viewStory.style.display = "none";
    storyBar.style.display = "none";
    progressBar.style.display = "none";
  }, 5000);
});

let bgChange = document.querySelector(".bg_mode");
let bg = document.querySelector(".container");
let icons = document.querySelectorAll("i");
let paras = document.querySelectorAll("p");
let selectOption = document.querySelector("select");
let darkMode = document.querySelector("#dark");
let lightMode = document.querySelector("#light");
let profBG = document.querySelector(".content_user");
let followBTN = document.querySelector(".content_btns button");
let flag = 1;

bgChange.addEventListener("click", () => {
  // console.log(icons);

  if (flag == 1) {
    bg.style.backgroundColor = "#fff";
    bg.style.color = "#292929";
    selectOption.style.color = "#292929";

    profBG.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    followBTN.style.border = "1px solid black";
    followBTN.style.color = "black";

    darkMode.style.display = "block";
    lightMode.style.display = "none";

    paras.forEach((elem) => {
      elem.style.color = "#292929";
    });

    icons.forEach((elem) => {
      // console.log(elem);
      elem.style.color = "#000";
    });

    flag = 0;
  } else if (flag == 0) {
    bg.style.backgroundColor = "#292929";
    bg.style.color = "#fff";
    selectOption.style.color = "#fff";

    profBG.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    followBTN.style.border = "1px solid white";
    followBTN.style.color = "white";

    darkMode.style.display = "none";
    lightMode.style.display = "block";

    paras.forEach((elem) => {
      elem.style.color = "#fff";
    });

    icons.forEach((elem) => {
      // console.log(elem);
      elem.style.color = "#fff";
    });

    flag = 1;
  }
});

let likeBTN = document.querySelectorAll("#hearticon");
let imgContent = document.querySelectorAll(".content-img");
let imgHeart = document.querySelectorAll("#imgHeart");

let likeStatus = 1;

likeBTN.forEach((el) => {
  el.addEventListener("click", function () {
    if (likeStatus == 1) {
      el.style.color = "red";
      el.style.fontWeight = "bold";
      likeStatus = 0;
    } else if (likeStatus == 0) {
      el.style.color = "rgb(190, 190, 190";
      likeStatus = 1;
    }
  });
});

imgContent.forEach((elem) => {
  elem.addEventListener("dblclick", function () {
    imgHeart.forEach((e) => {
      e.style.transform = "translate(-50%, -50%) scale(1.1)";
      console.log('q');
    });

    setTimeout(() => {
      imgHeart.forEach((e) => {
        e.style.transform = "translate(-50%, -50%) scale(0)";
        console.log("dbl clicked");
      });
    }, 3000);
  });
});
