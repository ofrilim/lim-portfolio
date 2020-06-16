
const id = (function() {
    let idx = 100;
    return  function() { return idx += 1;}
})()

const gProjs = [
    createProj(id(), 'Mine Sweaper', 'My first self Project!', 'super cool mine sweaper game!',
     'img/portfolio/photo-frame-computer+mine.png', 'September 2019', ['html, css, JS'], ''),
    createProj(id(), 'Meme Creator', 'Create your own meme!', 'Design you own meme!',
     'img/portfolio/photo-frame-computer+meme1.png', 'September 2019',  ['html, css, JS'], 'https://ofrilim.github.io/Meme-Creator/'),    
    createProj(id(), 'B-Good', 'E-commerce fashion app', 'Buying and selling clothes online',
    'img/portfolio/photo-frame-computer+bgood.png', 'October 2019', ['html, css flexbox'], 'https://b-good.herokuapp.com/'),    
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




