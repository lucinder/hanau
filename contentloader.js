var urlbase = "https://lucinder.github.io/hanau/";
function loadChapterText(c){
    const body = document.getElementById("chapterText");
    fetch("text/"+c+".txt")
        .then(response => {
            if (!response.ok) {
            throw new Error('Invalid response from network when loading file contents!');
            }
            return response.text();
        })
        .then(contents => {
            body.innerHTML = contents;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function prevChapter(c){
    window.location = urlbase + (c-1);
}
function nextChapter(c){
    window.location = urlbase + (c+1);
}