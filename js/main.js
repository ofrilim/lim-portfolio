
$(document).ready(() => {
    AOS.init({once: true});
    renderHeading();
    renderProjs();
})

function renderHeading() {
    const headerContent = "Welcome to my portfolio";
    let delay = 100;
    const delayFunc = function() {
        return delay += 100;
    }
    
    const strHtmls = headerContent.split('').map(function(ltr) {
        return `<span data-aos="fade-in" data-aos-delay="${delayFunc()}" data-aos-duration="500">${ltr}</span>`
    })

    $('.intro-heading').html(strHtmls.join(''));
}

function renderProjs() {
    const projs = getProjs();

    const strHtmls = projs.map(proj =>
        `<div class="col-md-4 col-sm-6 portfolio-item" data-id="${proj.id}">
        <a class="portfolio-link" onclick="renderModal(${proj.id})" data-toggle="modal" href="#portfolioModal">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content"><i class="fa fa-plus fa-3x"></i>
        </div></div><img class="img-fluid" src="${proj.src}" alt=""></a>
        <div class="portfolio-caption"><h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p></div></div>`
    )

    $('.projs-container').html(strHtmls.join(''));
}

function renderModal(projId) {
    const projs = getProjs();
    const currProj = projs.find(proj => proj.id === projId)

    const strHtml = `<div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog"><div class="modal-content"><div class="close-modal" data-dismiss="modal">
                    <div class="lr"><div class="rl"></div></div></div>
                    <div class="container"><div class="row"><div class="col-lg-8 mx-auto"><div class="modal-body">
                    <h2>${currProj.name}</h2><p class="item-intro text-muted">${currProj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="${currProj.src}" alt=""><p>${currProj.desc}</p>
                    <ul class="list-inline"><li>Date: ${currProj.publishedAt}</li><li>Technologies: ${currProj.labels}</li>
                    </ul><button class="btn btn-primary" type="button">
                    <a href="${currProj.url}" target="blank">visit website</a>
                    </button><button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>back</button></div></div></div></div></div></div></div>`

    $('.modal-container').html(strHtml);
}

