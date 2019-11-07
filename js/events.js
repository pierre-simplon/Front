document.getElementById("li1").addEventListener('click', function() {
    ShowIt("last");
    HideIt("top");
    HideIt("table");
    HideIt("graph");
});
document.getElementById("li2").addEventListener('click', function() {
    ShowIt("top");
    HideIt("last");
    HideIt("last");
    HideIt("graph");
});
document.getElementById("li3").addEventListener('click', function() {
    ShowIt("table");
    HideIt("top");
    HideIt("last");
    HideIt("graph");
});
document.getElementById("li4").addEventListener('click', function() {
    ShowIt("graph");
    HideIt("top");
    HideIt("last");
    HideIt("table");
});