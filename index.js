const gallery = document.getElementById("gallery");
const modal = document.getElementById("myModal");

const modalContent = document.querySelector("#myModal > div")
gallery.addEventListener("click", (e) => {
    removeElement("modal-image")
    modal.style.display = "block";
    const image = getSiblings(e.target)[0];
    const el = document.createElement("div");
    el.setAttribute("id", "modal-image")
    el.innerHTML = `
    <div id="header">
    The Summer Tale
    <div class="hdr-close">
        <i class="fa fa-close" style="font-size:30px;color:white;"></i>
    </div>
</div>
<div class="arrow">

    <i class="fa fa-arrow-left" style="font-size:36px;padding-left: 30px;padding-top: 20px"></i>
    <i class="fa fa-arrow-right" style="font-size:36px;padding-top: 20px"></i>
</div>
<img class="images" src="${image.src}" width="300"
    height="300">
<div class="description">
    <div class="go">
        <h5>OVERVIEW</h5>
        <p class="text">some text.....</p>
    </div>

    <div class="view">
        <h5>CLIENT</h5>
        <p>some text....</p>
        <h5>URL</h5>
        <p>some text......</p>

    </div>

</div>

<hr style="margin-bottom:20px">
<h3 style="margin-bottom:20px">RELATED CONCEPTS</h3>
<div class="rel-images">
    <div class="icon">
        <i class="fa fa-arrow-left" style="font-size:36px;"></i>
    </div>
    <div class="imag">
        <img src="https://i.pinimg.com/564x/b1/be/1e/b1be1e57faec75f59727892181c3af22.jpg" width="300" height="300">
    </div>
    <div class="imag">
        <img src="https://i.pinimg.com/564x/b1/be/1e/b1be1e57faec75f59727892181c3af22.jpg" width="300" height="300">
    </div>
    <div class="imag">
        <img src="https://i.pinimg.com/564x/b1/be/1e/b1be1e57faec75f59727892181c3af22.jpg" width="300" height="300">
    </div>
    <div class="icon">
        <i class="fa fa-arrow-right" style="font-size:36px"></i>
    </div>
</div>
<div class="f-close">CLOSE</div>
    `;
    modalContent.appendChild(el)
    var span = document.getElementsByClassName("hdr-close")[0];    
    var f = document.getElementsByClassName("f-close")[0];    
    span.addEventListener("click", (e) => {
        e.stopPropagation()
        modal.style.display = "none";
    })
    f.addEventListener("click", (e) => {
        e.stopPropagation()
        modal.style.display = "none";
    })
})

function getChildren(n, skipMe) {
    var r = [];
    for (; n; n = n.nextSibling)
        if (n.nodeType == 1 && n != skipMe)
            r.push(n);
    return r;
};

function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
}
function removeElement(id) {
    var elem = document.getElementById(id);
    if (elem) {
        return elem.parentNode.removeChild(elem);
    }
}