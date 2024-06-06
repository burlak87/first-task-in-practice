let imgCategory = {
    elementOne: {
        category_name: "print",
        img_path: "./assets/images/print-one.jpg"
    },
    elementTwo: {
        category_name: "web design",
        img_path: "./assets/images/web-design-imgOne.webp"
    },
    elementThree: {
        category_name: "logo",
        img_path: "./assets/images/Business-logo.png"
    },
    elementFour: {
        category_name: "print",
        img_path: "./assets/images/print-two.jpg"
    },
    elementFive: {
        category_name: "motion",
        img_path: "./assets/images/motion-three.png"
    },
    elementSix: {
        category_name: "web design",
        img_path: "./assets/images/web-design-imgTwo.png"
    },
    elementSeven: {
        category_name: "motion",
        img_path: "./assets/images/motion-two.jpg"
    },
    elementEight: {
        category_name: "motion",
        img_path: "./assets/images/motion-one.png"
    }
};

document.addEventListener("DOMContentLoaded",() => {
    displayAllImages();
});

const btnNav = [...document.getElementsByClassName("textNavigation")];
console.log(btnNav);

btnNav.forEach(function(element) {
    element.addEventListener("click", () => {
        if(!element.classList.contains("activeTextNavigation")) {
            deleteClassActive(btnNav);
            removeAllImages();
            element.classList.add("activeTextNavigation");
            imageSearch(element);
            return
        } else {
            alert("данное поле уже выбранно");
        };
    });
});

function deleteClassActive(btnNav) {
    btnNav.forEach(function(element) {
        element.classList.remove("activeTextNavigation");
    });
};

function removeAllImages() {
    let images = [...document.getElementsByClassName("imagesProduct")];
    images.forEach(image => {
      image.parentNode.removeChild(image);
    });
};

function imageSearch(element){
    console.log(element)
    if(element.textContent == 'all') {
        displayAllImages();
    } else {
        imagesByCategory(element);
    };
};

function displayAllImages() {
    let categories = Object.values(imgCategory).map(obj => ({  
      category_name: obj.category_name, img_path: obj.img_path  
    })); 
    let imageContainer = document.getElementById("imageContainer"); 
    categories.forEach(category => {
      let img = document.createElement("img"); 
      img.setAttribute("src", category.img_path);
      img.setAttribute("class", "imagesProduct"); 
      img.setAttribute("width", "440"); 
      img.setAttribute("height", "330"); 
      imageContainer.appendChild(img); 
    });
};

function imagesByCategory(element) {
    let categories = Object.values(imgCategory).map(obj => ({ 
        category_name: obj.category_name, img_path: obj.img_path 
    }));
    for (let i = 0; i < categories.length; i++) {
        let txt = element.textContent;
        if(txt == categories[i].category_name) {
            let imageContainer = document.getElementById("imageContainer");
            let img = document.createElement("img");
            img.setAttribute("src", categories[i].img_path);
            img.setAttribute("class", "imagesProduct"); 
            img.setAttribute("width", "440");
            img.setAttribute("height", "330");
            imageContainer.appendChild(img);
        };
    };
};