// Title body author views comments
// comments (author, body)
//  isLive

let Post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 3,
    comments: [ //Comments is an array wit 2 objects
        { autohor: 'a', body: 'b' }, //obj 1
        { autohor: 'e', body: 'd' }, //obj 2
    ],
    isLive: true
};

console.log(Post);