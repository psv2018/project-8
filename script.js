let galleryImage = document.querySelector("#gallery-image");
let galleryDetail = document.querySelector("#gallery-detail");
let image = document.querySelector("#galleryImage");
let backButton = document.querySelector("#back-button");
let nextButton = document.querySelector("#next-button");
var count = 0;
const noOfPics = data.length;
var currentCount = 0;
displayNextPhoto();

function displayNextPhoto(direction) {
  console.log("sdshhhhhdds" + count + "  " + noOfPics);
  if (count >= 0 && count < noOfPics) {
    console.log("iunside" + count);
    image.classList.add("image");
    let imgUrl = "images/" + data[count].src;
    image.src = imgUrl;
    currentCount = count;
    count++;
    galleryImage.appendChild(image);
    let fullName = document.querySelector("#gallery-detail h1");
    let details = document.querySelectorAll("h4");
    let firstName = data[currentCount].firstName;
    let LastName = data[currentCount].lastName;
    console.log(LastName);
    let title = data[currentCount].title;
    let nationality = data[currentCount].nationality;
    let skills = data[currentCount].skills;
    let full_Name = data[currentCount];
    fullName.textContent = firstName + LastName;
    details[0].textContent = "Name       : " + firstName;
    details[1].textContent = "Last Name  : " + LastName;
    details[2].textContent = "Title      :" + title;
    details[3].textContent = "Nationality:" + nationality;
    details[6].textContent = "Skills : " + skills;
  }
  if (direction == "n" && count == data.length) {
    count = 0;
    displayNextPhoto("n");
  }
}

function previousPhoto() {
  console.log("inside previous" + count + " " + currentCount);
  count = currentCount;
  if (count == 0) {
    count = data.length - 1;
    displayNextPhoto("b");
  } else if (count > 0 && count <= noOfPics) {
    count--;
    displayNextPhoto();
  }
}

function toggleDetails() {
  count = currentCount;
  var galleryDetail = document.getElementById("gallery-detail");
  console.log("i am in toggledetails");
  if (galleryDetail.style.display === "none") {
    galleryDetail.style.display = "block";
  } else {
    galleryDetail.style.display = "none";
  }
}

let i = 0;
let images = [];
let time = 2000;

images[0] = "url('backgroundimages/group1.jpg')";
images[1] = "url('backgroundimages/group2.jpg')";

function changeBackgroundImg() {
  document.body.style.backgroundImage = images[i];
  document.body.style.objectFit = "cover";
  document.body.style.width = "100%";

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeBackgroundImg()", time);
}
window.onload = changeBackgroundImg();
window.onload = " displayNextPhoto(n)";
