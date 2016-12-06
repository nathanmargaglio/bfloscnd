critters = [
"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODUyNDQ2NV5BMl5BanBnXkFtZTYwODk2MTYz._V1_UY317_CR3,0,214,317_AL_.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/ChristopherWalkenFeb08.jpg/220px-ChristopherWalkenFeb08.jpg",
"http://a3.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjM0MDAwNjcyMjY4.jpg",
"http://www.famousbirthdays.com/headshots/christopher-walken-3.jpg",
"https://inafutureage.files.wordpress.com/2010/05/christopherwalken1.jpg",
"http://media.salon.com/2015/04/christopher_walken.jpg",
"https://s-media-cache-ak0.pinimg.com/originals/1d/17/b9/1d17b926cb140339fa5d3524711d9798.jpg"
]

getRandom = function(myArray){
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
sections = [];

window.onload = function(){
    document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
    generateGrid(3, getRandom(critters));
    return;
    // Init function
    var start = document.createElement("DIV");
    start.id = "start";
    start.style.width = "100%";
    start.style.display = "table-cell";
    start.style.textAlign = "center";
    start.style.position = "absolute";
    start.style.top = "50%";
    document.body.appendChild(start);

    var instruct = document.createElement("DIV");
    start.appendChild(instruct);

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Input Positive Integer, Hit Enter..."
    input.size = "30"
    input.addEventListener("keyup", function(event){
        if (event.keyCode == 13){
            var value = parseInt(input.value);
            console.log(value);
            if (!isNaN(value)){
                var start = document.getElementById('start');
                start.remove();
                generateGrid(Math.abs(value), getRandom(critters));
            }else{
                instruct.innerHTML = "How about a positive integer, eh?<br>"
            }
        };
    });
    start.appendChild(input);
};

generateGrid = function(secAmnt, center_image){
    var main = document.createElement("DIV");
    main.style.height = "100%";
    main.style.width = "100%";
    main.style.overflow = "hidden";
    document.body.appendChild(main);
    main.onclick = function(){
        for (i = 0; i < sections.length; ++i){
            if (sections[i].clicked != true){
                break;
            }
        }

        if (i == sections.length){
            this.remove();
            generateGrid(secAmnt+2, bg.src);
        }
    }

    var bg = document.createElement("IMG");
    main.appendChild(bg);
    bg.src = center_image;
    bg.style.width = "100%";
    bg.style.height = "100%";

    for (y = 0; y < secAmnt; ++y){
        var row = document.createElement("DIV");
        row.style.position = "absolute";
        row.style.top = (y*100./secAmnt).toString() + "%";
        row.style.left = "0";
        row.style.height = (100./secAmnt).toString() + "%";
        row.style.width = "100%";
        main.appendChild(row);
        for (x = 0; x < secAmnt; ++x){
            var sec = document.createElement("DIV");
            sec.id = y*secAmnt+x;
            sec.style.width = (100./secAmnt).toString() + "%";
            sec.style.height = "100%";
            sec.style.float = "left";
            //sec.style.background = getRandomColor();
            sec.style.display = "flex";
            sec.style.flexDirection = "column";
            sec.style.flex = "1";
            sec.style.overflow = "auto";

            var img = document.createElement("IMG");
            if (x == Math.floor(secAmnt/2) && y == Math.floor(secAmnt/2)){
                img.src = center_image;
            }else{
                img.src = getRandom(critters);
            }
            img.style.width = "100%";
            img.style.height = "100%";

            sec.onclick = function(){
                console.log(this.childNodes[0]);
                this.clicked = true;
                this.childNodes[0].style.opacity = "0";
            }

            sec.appendChild(img);

            sections.push(sec);
            row.appendChild(sec);
        };
    };
};

