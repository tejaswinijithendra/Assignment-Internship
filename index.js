const gallery = document.getElementById("gallery");
const modal = document.getElementById("myModal");
let urls = [];
const imageElements = document.getElementsByClassName('images');
for (let index = 0; index < imageElements.length; index++) {
    urls.push(imageElements[index].src)
};
const modalContent = document.querySelector("#myModal > div");
let imageState = 0;

function inject(image) {
    console.log(image)
    removeElement("modal-image")
    modal.style.display = "block";
    let index = urls.indexOf(image);
    imageState = index;
    index++;
    let recs = [];
    for (let i = 0; i < 3; i++) {
        if (index > 5) {
            index = 0;
        }
        recs.push(urls[index])
        index++;
    }
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

    <i class="fa fa-arrow-left" id="left" style="font-size:36px;padding-left: 30px;padding-top: 20px"></i>
    <i class="fa fa-arrow-right" id="right" style="font-size:36px;padding-top: 20px"></i>
</div>
<img class="images" src="${image}" width="300"
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
        <i class="fa fa-arrow-left" id="bottomLeft" style="font-size:36px;"></i>
    </div>
    <div class="imag">
        <img src="${recs[0]}" width="300" height="300">
    </div>
    <div class="imag">
        <img src="${recs[1]}" width="300" height="300">
    </div>
    <div class="imag">
        <img src="${recs[2]}" width="300" height="300">
    </div>
    <div class="icon">
        <i class="fa fa-arrow-right" id="bottomRight" style="font-size:36px"></i>
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
    });
    handleIcons();
}
gallery.addEventListener("click", (e) => {
    console.log('here')
    inject(getSiblings(e.target)[0].src);
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

function handleIcons() {
    const leftIcon = document.getElementById("left")
    const rightIcon = document.getElementById("right");
    const bottomRight = document.getElementById("bottomRight");
    const bottomLeft = document.getElementById("bottomLeft");
    rightIcon.addEventListener("click", (e) => {
        e.stopPropagation()
        imageState++
        if (imageState > 5) {
            imageState = 0
        }
        inject(urls[imageState])
    })
    leftIcon.addEventListener("click", (e) => {
        e.stopPropagation()
        imageState--;
        if (imageState < 0) {
            imageState = 5
        }
        inject(urls[imageState])
    })
    bottomRight.addEventListener("click", (e) => {
        e.stopPropagation()
        const firstElement = document.querySelector("#modal-image > div.rel-images > div:nth-child(2) > img");
        const secondElement = document.querySelector("#modal-image > div.rel-images > div:nth-child(3) > img");
        const thirdElement = document.querySelector("#modal-image > div.rel-images > div:nth-child(4) > img");
        let ind = urls.indexOf(firstElement.src);
        const els = [firstElement, secondElement, thirdElement];
        els.map((el) => {
            ind++;
            if (ind > 5) {
                ind = 0;
            }
            el.src = urls[ind];
        })
    })
    bottomLeft.addEventListener("click", (e) => {
        e.stopPropagation()
        const firstElement = document.querySelector("#modal-image > div.rel-images > div:nth-child(2) > img");
        const secondElement = document.querySelector("#modal-image > div.rel-images > div:nth-child(3) > img");
        const thirdElement = document.querySelector("#modal-image > div.rel-images > div:nth-child(4) > img");
        let ind = urls.indexOf(firstElement.src);
        const els = [firstElement, secondElement, thirdElement];
        els.map((el) => {
            ind--;
            if (ind < 0) {
                ind = 5;
            }
            el.src = urls[ind];
        })
    })

}