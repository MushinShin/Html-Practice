
// method in a object referecens the obj
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this, tag);
        }, this);
    }
};

video.showTags();


video.stop = function () {
    console.log(this);
};

video.stop();
// method in a object referecens the obj


// function not part of an object references global (window, global)
function Video(title) {
    this.title = title; //Add title propertie to the new object
    console.log(this);
}

const v = new Video('a'); //New empty objetct {}