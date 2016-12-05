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
    document.body.appendChild(main)

    var secAmnt = 2;
    for (x = 0; x < secAmnt; ++x){
        var sec = document.createElement("DIV");
        sec.id = "sec" + x.toString();
        sec.style.width = (100./secAmnt).toString() + "%";
        sec.style.height = "100%";
        sec.style.float = "left";
        sec.style.background = "darkgray";
        sec.style.display = "flex";
        sec.style.flexDirection = "column";
        sec.style.flex = "1";
        sec.style.overflow = "auto";
        sections.push(sec);
        main.appendChild(sec);
    };

    var table = document.createElement("TABLE");
    table.class = "table";
    sections[1].appendChild(table);

    for (y = 0; y < 50; ++y){
        var row = table.insertRow();

        var cell0 = row.insertCell();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();

        cell0.innerHTML = "HELLO";
        cell1.innerHTML = ", ";
        cell2.innerHTML = "WORLD!";
    }
};

