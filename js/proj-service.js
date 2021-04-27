
const id = (function() {
    let idx = 100;
    return  function() { return idx += 1;}
})()

const gProjs = [
    createProj(id(), 'Mine Sweaper', 'My first self Project!', 'A traditional mine sweaper game with option to choose a level',
    'img/portfolio/frame-minesweaper.png', 'September 2019', ['Html, CSS, JS'], 'https://ofrilim.github.io/mine-sweeper/', 'https://github.com/ofrilim/mine-sweeper'),
    createProj(id(), 'Elevators System', 'Manage calls to elevators in a building', 'A project that I developed during learning react.js',
    'img/portfolio/frame-elevators.png', 'April 2021', ['React.js, SCSS'], 'https://ofrilim.github.io/elevator-react/', 'https://github.com/ofrilim/elevator-react'),
    createProj(id(), 'Appsus', 'Email & Notes app', 'Team work. My part was the Email app',
    'img/portfolio/frame-email.png', 'November 2019', ['Html, CSS, JS, Vue'], 'https://ofrilim.github.io/appSus/#/email/inbox', 'https://github.com/ofrilim/appSus/tree/master/js/apps/missEmail'),    
    createProj(id(), 'Meme Creator', 'Create your own meme!', 'Design your own meme, option to upload your own image or choose from gallery!',
    'img/portfolio/frame-meme.png', 'September 2019',  ['Html, canvas, CSS, JS'], 'https://ofrilim.github.io/Meme-Creator/', 'https://github.com/ofrilim/Meme-Creator'),    
    createProj(id(), 'B-Good', 'E-commerce fashion app', 'Buying and selling clothes online',
    'img/portfolio/frame-bgood.png', 'October 2019', ['Vue, Vuex, SCSS, Node.js, Express, mongoDB'], 'https://b-good.herokuapp.com/', 'https://github.com/ofrilim/Bgood/tree/master/frontend/src')
];

function createProj(id, name, title, desc, src, publishedAt, labels, websiteUrl, codeUrl) {
    return {
        id,
        name,
        title,
        desc,
        src,
        publishedAt,
        labels,
        websiteUrl,
        codeUrl
    }
}

function getProjs() {
    return gProjs;
}







