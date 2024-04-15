const readBtn = document.querySelector(".all-read");
const numMsg = document.querySelector(".count-msg");
const unRead = document.querySelectorAll(".unread");

readBtn.addEventListener("click", () => {
    for (const read of unRead) {
        read.style.background = "#fff";
    }
    numMsg.innerHTML = 0;
})
