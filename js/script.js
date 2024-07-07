function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(copyText).then(function() {
        alert('Copied to clipboard: ' + copyText);
    }, function (err) {
        console.error('Could not copy text: ' + err);
    });
}