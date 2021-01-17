document.addEventListener('keydown', e => {
    if(e.key === 's'){
        const svg = document.getElementById("defaultCanvas").innerHTML;
        const name = "drawing" + Math.random().toFixed(5) + ".svg";
        const type = "image/svg+xml";
        download(svg, name, type)
    }
})

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}