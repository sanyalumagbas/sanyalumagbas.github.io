
let scrollToBottom = document.querySelector('#scroll-to-bottom');
let pageBottom = document.querySelector('#page-bottom');

scrollToBottom.addEventListener('click', function () {

  pageBottom.scrollIntoView();
})
