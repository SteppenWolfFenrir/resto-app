const bubbleButton = document.querySelector(".bubble__button");

bubbleButton.addEventListener("click", () => {
    const bubbleBlock = bubbleButton.parentElement;
    bubbleBlock.remove();
});