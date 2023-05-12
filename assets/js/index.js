var wrapper = document.getElementById("s-p");
var clearButton = wrapper.querySelector("[data-action=clear]");
var changeColorButton = wrapper.querySelector("[data-action=change-color]");
var undoButton = wrapper.querySelector("[data-action=undo]");
var savePNGButton = wrapper.querySelector("[data-action=png]");
var saveJPGButton = wrapper.querySelector("[data-action=jpg]");
var saveSVGButton = wrapper.querySelector("[data-action=svg]");
var canvas = wrapper.querySelector("canvas");

// Set backgroundColor for the signature pad
var signaturePad = new SP(canvas, {
    backgroundColor: '#ffffff' // white
});