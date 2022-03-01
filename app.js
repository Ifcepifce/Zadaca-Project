import dataJason from './data.json' assert {type:"json"};

let container = document.getElementById("container");
let cardContainer = document.createElement("div");
let cardButton = document.createElement("button");
let size = 4;
let firstElement = 0;

const lightboxBg = document.createElement("div");
lightboxBg.id = "lightboxBg";
document.body.appendChild(lightboxBg);

loadCards();

  function loadCards() {
    dataJason.slice(firstElement, size).map((item, index )=> {

     let cardItem = document.createElement("div");
     let cardHeader = document.createElement("div");
     let cardUser = document.createElement("div");
     let cardProfileImage = document.createElement("img");
     let cardUserInfo = document.createElement("div");
     let cardName = document.createElement("h3");
     let cardDate = document.createElement("span");
     let cardMain = document.createElement("div");
     let cardMainImage = document.createElement("img");
     let cardCaption = document.createElement("p");
     let hr = document.createElement('hr');
     let cardLike = document.createElement("div");
     let cardHeartLogo = document.createElement("img");
     let cardNumbLikes = document.createElement("p");
     let cardInstaLogo = document.createElement("img");
    
    
      
     cardContainer.classList.add("card-container");
     cardItem.classList.add("card-item");
     cardHeader.classList.add("header");
     cardUser.classList.add("user");
     cardProfileImage.classList.add("profile-image");
     cardUserInfo.classList.add("user-info");
     cardMain.classList.add("main");
     cardMainImage.classList.add("main-image");
     hr.classList.add("hr");
     cardLike.classList.add("likes");
     cardButton.classList.add("btn");
      
       container.append(cardContainer);
       cardContainer.append(cardItem);
       cardItem.append(cardHeader);
       cardHeader.append(cardUser);
       cardUser.append(cardProfileImage);
       
       cardProfileImage.src = item.profile_image;
       
       cardUser.append(cardUserInfo);
       cardUserInfo.append(cardName);
       cardName.innerHTML = item.name;
       
       cardUserInfo.append(cardDate);
       cardDate.innerHTML = item.date;
       
       cardHeader.appendChild(cardInstaLogo).src="/icons/instagram-logo.svg";
       
       cardItem.append(cardMain);
       cardMain.append(cardMainImage);
       cardMainImage.style.cursor = "pointer";
       cardMainImage.addEventListener("click", () => imageSelect(item));
       cardMainImage.src = item.image;
       
       cardMain.append(cardCaption);
       cardCaption.innerHTML = item.caption;
       
       cardMain.append(hr);
       
       cardMain.append(cardLike);
       cardLike.appendChild(cardHeartLogo).src="/icons/heart.svg";
       cardHeartLogo.style.cursor = "pointer";
       cardHeartLogo.addEventListener("click", () => likeCard(item.likes, (index+firstElement)), false);
       cardLike.append(cardNumbLikes);
       cardNumbLikes.innerHTML = item.likes;
      cardLike.id = (index+firstElement + 4);
      cardNumbLikes.setAttribute("liked", false);
    });
    size += 4;
    firstElement += 4;
    
    if(size >= 24){
      cardButton.disabled = true;
      cardButton.style.cursor = "not-allowed";
      cardButton.style.backgroundColor = "gray";
    }   
  }
  
  function likeCard(likes, index) {
    let likesCount = parseInt(likes);
    const likeText = document.getElementById(index);
    console.log(index);
    console.log(likeText);
   if(likeText.getAttribute("liked") !== "false"){
     likesCount += 1;
    likeText.setAttribute("liked", false);
    likeText.children[0].style.transform = 'scale(1.5)';
  } else{
    likeText.setAttribute("liked", true);
    likeText.children[0].style.transform = 'scale(1)';;
  }
  likeText.children[1].innerHTML = likesCount;
};

  function imageSelect(item){
    let cardPopupItem = document.createElement("div");
    cardPopupItem.id = "popup";
    let cardMainPopup = document.createElement("div");
    let cardMainImagePopUp = document.createElement("img");
    let cardPopup = document.createElement("div");
    let cardHeaderPopup = document.createElement("div");
    let cardHeaderProfilePopup = document.createElement("div");
    let cardProfileImagePopup = document.createElement("img");
    let cardUserInfoPopup = document.createElement("div");
    let cardName = document.createElement("h3");
    let cardDate = document.createElement("span");
    let hr = document.createElement('hr');
    let cardCaption = document.createElement("p");
    let cardLikes = document.createElement("div");
    let cardHeartLogo = document.createElement("img");
    let cardNumbLikes = document.createElement("p");
    let cardInstaLogo = document.createElement("img");

    cardPopupItem.classList.add('card-popup-item');
    cardMainPopup.classList.add('main-popup');
    cardMainImagePopUp.classList.add('main-image-popup');
    cardPopup.classList.add('popup');
    cardHeaderPopup.classList.add('header-popup');
    cardHeaderProfilePopup.classList.add('header-profile-popup');
    cardProfileImagePopup.classList.add('profile-image-popup');
    cardUserInfoPopup.classList.add('user-info-popup');
    cardLikes.classList.add('likes');
    cardInstaLogo.classList.add('intagram');
    hr.classList.add("hr");

    cardPopupItem.append(cardMainPopup);
    cardMainPopup.append(cardMainImagePopUp);
    cardMainImagePopUp.src = item.image;

    cardPopupItem.append(cardPopup);
    cardPopup.append(cardHeaderPopup);
    cardHeaderPopup.append(cardHeaderProfilePopup);

    cardHeaderProfilePopup.append(cardProfileImagePopup);
    cardProfileImagePopup.src = item.profile_image;

    cardHeaderProfilePopup.append(cardUserInfoPopup);

    cardUserInfoPopup.append(cardName);
    cardName.innerHTML = item.name;

    cardUserInfoPopup.append(cardDate);
    cardDate.innerHTML = item.date;

    cardHeaderProfilePopup.append(cardInstaLogo);
    cardHeaderPopup.appendChild(cardInstaLogo).src="/icons/instagram-logo.svg";

    cardPopup.append(hr);
    cardPopup.append(cardCaption);
    cardCaption.innerHTML = item.caption;

    cardPopup.append(cardLikes);
    cardLikes.append(cardHeartLogo);
    cardLikes.appendChild(cardHeartLogo).src="/icons/heart.svg";

    cardLikes.append(cardNumbLikes);
    cardNumbLikes.innerHTML = item.likes;

    console.log(item);
    console.log("clicked");

    lightboxBg.classList.add('active');
    
    document.querySelector('#container').appendChild(cardPopupItem);
    window.scrollTo(0, 0);
  }
    lightboxBg.addEventListener('click', e =>{
      lightboxBg.classList.remove('active');
      document.querySelector('#container').removeChild(document.getElementById('popup'));
    })

    document.body.appendChild(cardButton);
    cardButton.innerText = "Load more"
    cardButton.addEventListener("click", () => loadCards())
