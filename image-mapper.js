var table = document.getElementById("myTable");
var imgDetailsTable = document.getElementById("imgDetailsTable");
// Load Img 
var loadFile = function (event) {
    var output = document.getElementById('output');
    var imgDetails = document.getElementById('imgDetails');

    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        imgDetails.innerHTML = '<span>File Name :' + event.target.files[0].name + '</span> | <span>MIME Type :' + event.target.files[0].type + '</span> | <span> Dimensions :' + this.width + " * " + this.height + '</span>';
        URL.revokeObjectURL(output.src)
    }
	$('#myTable').empty();
	$('.pointer-cntnr').find('.pointer').remove();
};
// Add Description 
document.getElementById('output').addEventListener('click', function (event) {
    let dimensionsTxt = prompt("Please enter Description", "Description Not add properly");
    let element = document.createElement("span"),
        elStyle = {
            top: event.pageY + "px",
            left: event.pageX + "px",
        };
    let row = table.insertRow(0);
    row.insertCell(0).innerHTML = event.pageY;
    row.insertCell(1).innerHTML = event.pageX;
    row.insertCell(2).innerHTML = dimensionsTxt;
    imgDetailsTable.style.display = 'table';
    element.setAttribute("class", "pointer");
    Object.keys(elStyle).forEach(function (property) {
        element.style[property] = elStyle[property];
    });
    element.innerHTML = '<span class="active">' + dimensionsTxt + '</span>';
    //document.body.appendChild(element);
	$('.pointer-cntnr').append(element);
});
