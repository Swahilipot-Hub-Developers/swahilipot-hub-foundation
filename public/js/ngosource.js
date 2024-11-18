;(function () {
  function async_load() {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    var theUrl =
      'http://www.ngosource.org/sites/default/files/ngos_ed_on_file_widget.js'
    s.src =
      theUrl +
      (theUrl.indexOf('?') >= 0 ? '&' : '?') +
      'ref=' +
      encodeURIComponent(window.location.href)
    var embedder = document.getElementById(
      'ngos-ed-on-file-widget-script-17336c1f-917d-492b-bc53-225c95e103da'
    )
    embedder.parentNode.insertBefore(s, embedder)
  }

  if (window.attachEvent) {
    window.attachEvent('onload', async_load)
  } else {
    window.addEventListener('load', async_load, false)
  }
})()
