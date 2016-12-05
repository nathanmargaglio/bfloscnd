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
                generateGrid(Math.abs(value));
            }else{
                instruct.innerHTML = "How about a positive integer, eh?<br>"
            }
        };
    });
    start.appendChild(input);
};

generateGrid = function(secAmnt){
    var start = document.getElementById('start');
    start.remove();

    var main = document.createElement("DIV");
    main.style.height = "100%";
    main.style.width = "100%";
    main.style.overflow = "hidden";
    document.body.appendChild(main);

    for (y = 0; y < secAmnt; ++y){
        var row = document.createElement("DIV");
        row.style.height = (100./secAmnt).toString() + "%";
        main.appendChild(row);
        for (x = 0; x < secAmnt; ++x){
            var sec = document.createElement("DIV");
            sec.id = "sec" + (y*secAmnt+x).toString();
            sec.style.width = (100./secAmnt).toString() + "%";
            sec.style.height = "100%";
            sec.style.float = "left";
            sec.style.background = getRandomColor();
            sec.style.display = "flex";
            sec.style.flexDirection = "column";
            sec.style.flex = "1";
            sec.style.overflow = "auto";
            sec.onclick = function(){
                this.style.background = getRandomColor();
            }

            sections.push(sec);
            row.appendChild(sec);
        };
    };
};

