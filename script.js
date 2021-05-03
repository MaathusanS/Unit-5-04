document.getElementById('cng-img').addEventListener('click', image)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('cng-txt').addEventListener('click', text)
document.getElementById('back').addEventListener('click', background)

function image () {
  document.getElementById('monkeypic').src = 'Images/funniermonkey.jpg'
}

function hide () {
  document.getElementById('para').style.display = 'none'
}

function show () {
  document.getElementById('para').style.display = 'block'
}

function text () {
  document.getElementById('para').innerHTML = 'I see you changed the text...'
}

function background () {
  document.body.style.backgroundColor = 'purple'
}
