(function() {
  var qrCode = document.getElementById('qr-code');

  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function(tab) {
    // we get a list containing only the current tab
    tab = tab[0];

    qr.canvas({
      canvas: qrCode,
      value: tab.url,
      size: 10
    });
  });
})();
