/*Muestro oculto*/
function ShowHide(id) {
    var divId = document.getElementById(id);
    var divStatus = window.getComputedStyle(divId).getPropertyValue('display');

    var divCol = ["EnterHours", "ListHours" , "Help"];
    for (let i = 0; i < divCol.length; i++) {
        const element = divCol[i];
        document.getElementById(element).style.display = 'none';
    } 

    if (divStatus === 'none') {
        divId.style.display = 'block';
    }
}