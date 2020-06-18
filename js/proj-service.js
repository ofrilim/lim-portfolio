
const id = (function() {
    let idx = 100;
    return  function() { return idx += 1;}
})()

const gProjs = [
    createProj(id(), 'Appsus', 'Email & Notes app', 'Team work. My part was the Email app',
    'img/portfolio/frame-email.png', 'November 2019', ['HTML, CSS, JS, Vue'], 'https://ofrilim.github.io/appSus/#/email/inbox'),    
    createProj(id(), 'Meme Creator', 'Create your own meme!', 'Design you own meme!',
    'img/portfolio/frame-meme.png', 'September 2019',  ['HTML, CSS, JS'], 'https://ofrilim.github.io/Meme-Creator/'),    
    createProj(id(), 'B-Good', 'E-commerce fashion app', 'Buying and selling clothes online',
    'img/portfolio/frame-bgood.png', 'October 2019', ['Vue, JS, SASS, Node.js, mongoDB'], 'https://b-good.herokuapp.com/'),    
    // createProj(id(), 'Mine Sweaper', 'My first self Project!', 'super cool mine sweaper game!',
    //  'img/portfolio/photo-frame-computer+mine.png', 'September 2019', ['html, css, JS'], ''),
];

function createProj(id, name, title, desc, src, publishedAt, labels, url) {
    return {
        id,
        name,
        title,
        desc,
        src,
        publishedAt,
        labels,
        url 
    }
}

function getProjs() {
    return gProjs;
}




