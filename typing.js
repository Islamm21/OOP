class header1 {
    constructor({ el }) {
        this.el = document.querySelector(el);
        this.el.addEventListener("mouseover", event_1 => {
            if (event_1.clientX - event_1.offsetX < 1200 - (event_1.clientX - event_1.offsetX - 240)) {
                if (event_1.clientY - event_1.offsetY < 600 - (event_1.clientY - event_1.offsetY - 40)) {
                    this.el.style.transform = "translate(" + event_1.offsetX * Math.floor((2 * Math.random() + 1)) + "px" + "," + event_1.offsetY * Math.floor((4 * Math.random() + 1)) + "px" + ")";
                }
                else {
                    this.el.style.transform = "translate(" + event_1.offsetX * Math.floor((2 * Math.random() + 1)) + "px" + "," + -event_1.offsetY * Math.floor((6 * Math.random() + 1)) + "px" + ")";
                }
            }
            else {
                if (event_1.clientY - event_1.offsetY < 600 - (event_1.clientY - event_1.offsetY - 40)) {
                    this.el.style.transform = "translate(" + -event_1.offsetX * Math.floor((2 * Math.random() + 1)) + "px" + "," + event_1.offsetY * 2 * (Math.random() + 1) + "px" + ")";
                }
                else {
                    this.el.style.transform = "translate(" + -event_1.offsetX * Math.floor((2 * Math.random() + 1)) + "px" + "," + -event_1.offsetY * Math.floor((6 * Math.random() + 1)) + "px" + ")";
                }
            }
        });
    }
}
new header1({
    el: ".header__content h1"
});


class palm {
    constructor({ dell }) {
        this.dell = document.querySelector(dell);
        this.dell.addEventListener("mouseover", event_1 => {
            if (event_1.clientX - event_1.offsetX < 1200 - (event_1.clientX - event_1.offsetX - 240)) {
                if (event_1.clientY - event_1.offsetY < 600 - (event_1.clientY - event_1.offsetY - 40)) {
                    this.dell.style.transform = "translate(" + event_1.offsetX * Math.floor((2 * Math.random() + 1)) + "px" + "," + event_1.offsetY * Math.floor((4 * Math.random() + 1)) + "px" + ")";
                }
                else {
                    this.dell.style.transform = "translate(" + event_1.offsetX * Math.floor((2 * Math.random() + 1)) + "px" + "," + -event_1.offsetY * Math.floor((6 * Math.random() + 1)) + "px" + ")";
                }
            }
            else {
                if (event_1.clientY - event_1.offsetY < 600 - (event_1.clientY - event_1.offsetY - 40)) {
                    this.dell.style.transform = "translate(" + -event_1.offsetX * Math.floor((2 * Math.random() + 1)) + "px" + "," + event_1.offsetY * 2 * (Math.random() + 1) + "px" + ")";
                }
                else {
                    this.dell.style.transform = "translate(" + -event_1.offsetX * Math.floor((2 * Math.random() + 1)) + "px" + "," + -event_1.offsetY * Math.floor((6 * Math.random() + 1)) + "px" + ")";
                }
            }
        });
    }
}
new palm({
    dell: ".header__content p"
});        