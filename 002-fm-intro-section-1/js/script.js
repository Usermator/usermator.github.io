const elems = document.querySelectorAll('[data-toggle-role="switch"][data-toggle-group]');

elems.forEach(button => {

    const groupNumber = button.getAttribute("data-toggle-group");
    const buttonClass = button.getAttribute("data-toggle-class");
    const content = document.querySelectorAll(`[data-toggle-role="content"][data-toggle-group='${groupNumber}']`);

    button.addEventListener("click", element => {
        content.forEach(el => {
            const contentClass = el.getAttribute("data-toggle-class");
            tglClass(contentClass, el);
        })
        tglClass(buttonClass, button);
    });
});

function tglClass(cls, elm){
    if(elm.classList.contains(cls)){
        elm.classList.remove(cls);
    }else{
        elm.classList.add(cls);
    }
}


/*

const elems = document.querySelectorAll('[data-toggle-role="switch"][data-toggle-group]');

elems.forEach(button => {

    const groupNumber = button.getAttribute("data-toggle-group");
    const buttonClass = button.getAttribute("data-toggle-class");
    const content = document.querySelector(`[data-toggle-role="content"][data-toggle-group='${groupNumber}']`);
    const contentClass = content.getAttribute("data-toggle-class");

    button.addEventListener("click", element => {
        tglClass(contentClass, content);
        tglClass(buttonClass, button);
    });
});

function tglClass(cls, elm){
    if(elm.classList.contains(cls)){
        elm.classList.remove(cls);
    }else{
        elm.classList.add(cls);
    }
}


*/