function generateSection(row, column) {
    let section = "";
    for (let iR = 0; iR < row; iR++) {
        section += "<div class='Img1'>";
        for (let iC = 0; iC < column; iC++) {
            section += "<div></div>";
        }
        section += "</div>"
    }
    return section;
}

document.getElementById("container").innerHTML = generateSection(2, 4);