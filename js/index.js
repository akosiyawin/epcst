const scrollAppear = () => {

    const hiddenItems = document.getElementsByClassName("hide");
    const screenPos = window.innerHeight;

    for (i = 0; i < hiddenItems.length; i++) {
        const item = hiddenItems[i];
        const hiddenItemPos = item.getBoundingClientRect().top;
        if (hiddenItemPos <= screenPos / 1.4)
            item.classList.add("appear");
        else
            item.classList.remove("appear");
    }
}

document.addEventListener("scroll", () => scrollAppear());