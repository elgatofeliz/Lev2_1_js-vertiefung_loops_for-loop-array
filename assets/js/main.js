let loop = () => {
    let input = document.getElementById("input").value
    let schleife = ["L"]
    for (let i = 0; i < input; i++) {
        schleife.push("O")
    }

    document.getElementById("output").innerHTML = schleife.join("") + "P"
}

/*====== Lev2_1_js-vertiefung_loops_for-loop-array =====*/

let imageArray = () => {
    let returnArray = []
    for (let i = 1; i <= 100; i++) {
        if (i < 10) {
            returnArray.push("image_00" + i + ".img")
        } else if (i < 100) {
            returnArray.push("image_0" + i + ".img")
        } else {
            returnArray.push("image_" + i + ".img")
        }
        console.log(returnArray)
    }
}
imageArray()