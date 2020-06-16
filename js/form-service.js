const FORM = document.forms[0];

FORM.addEventListener('submit', function(e) {
    e.preventDefault();

    const DATA = new FormData(FORM)
    ajax(FORM.method, FORM.action, DATA, success, error);
});

function success() {
    FORM.reset();
    const successMsg = 'Thank you! Your message has been sent successfully!';
    const content = `<div>${successMsg}</div><img src="../img/icons/success.png"></img>`
    $('.form-modal').css('display', 'block').html(content)

    removeClass();
}
success() // remove

function error() {
    const errorMsg = 'Oops! There was a problem, please try again later.';
    const content = `<div>${errorMsg}</div><img src="../img/icons/error.png"></img>`
    $('.form-modal').css('display', 'block').html(content)

    removeClass();
}
// error() // remove

function removeClass() {
    setTimeout(()=> {
        $('.form-modal').css('display', 'none');
    }, 3500)
}

function ajax(method, url, DATA, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(DATA);
  }

