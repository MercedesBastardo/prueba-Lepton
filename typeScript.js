var _this = this;
// Begin SideBar
var closeBtn = document.getElementById('btnClose');
var closeSideBar = function () {
    var sideBar = document.getElementById('sidebar');
    return (sideBar.style.display = 'none');
};
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', function () { closeSideBar; });
// End SiderBar
// Begin DialogSection
var openDialogBtn = document.getElementById('openDialogBtn');
var openDialog = function () {
    var dialogSection = document.getElementById('dialogSection');
    return dialogSection.style.display = 'block';
};
openDialogBtn === null || openDialogBtn === void 0 ? void 0 : openDialogBtn.addEventListener('click', function () { openDialog; });
// End DialogSection
//Begin Canvas
var mouseOver = function () {
    var canvas = document.getElementById('canvas');
    var text = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (text) {
        text.font = "bold 20px arial";
        text.textAlign = 'start';
        text.textBaseline = 'middle';
        text.fillStyle = 'aquamarine';
        text.fillText("El mouse esta parado aqui!", 30, 75);
    }
    canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mouseover', function () { _this; });
    return text;
};
var mouseOut = function () {
    var canvas = document.getElementById('canvas');
    var text = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
    if (text) {
        text.clearRect(0, 0, canvas.width, canvas.height);
    }
    canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mouseout', function () { _this; });
    return text;
};
