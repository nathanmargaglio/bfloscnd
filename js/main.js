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
    var main = document.createElement("DIV");
    main.style.height = "100%";
    main.style.width = "100%";
    document.body.appendChild(main);

    var secAmnt = 4;

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

