function reset() {
    let classid = document.getElementById("count");
    for (let i = 0; i < classid.length; i++) {
      classid[i].value = "";
    }
}    