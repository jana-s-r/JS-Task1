document.addEventListener("DOMContentLoaded", function() {
var nameinput=document.getElementById("nameinput")
var ageinput=document.getElementById("ageinput")
var gendervalue = document.getElementsByName('gender')
var selectedValue = ""
var courseselect=document.getElementById("courseselect")
var emailinput=document.getElementById("emailinput")
var tbody=document.querySelector("tbody")

function save(event){
    event.preventDefault()

    var tr = document.createElement('tr')

    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var td6 = document.createElement('td')
    
    var deleteButton = document.createElement('button')
    deleteButton.className = "deleteButton"
    
    td1.textContent = nameinput.value
    tr.appendChild(td1)

    td2.textContent = ageinput.value
    tr.appendChild(td2)

    for (var i = 0; i < gendervalue.length; i++) {
        if (gendervalue[i].checked) {
          selectedValue = gendervalue[i].value
        }
    }
    tr.appendChild(td3).innerHTML = selectedValue

    td4.textContent = courseselect.value
    tr.appendChild(td4)

    td5.textContent = emailinput.value
    tr.appendChild(td5)
    
    
    
    deleteButton.textContent = "Delete"
    deleteButton.onclick = function() {
        deleteRow(this)
    }
    td6.appendChild(deleteButton)
    tr.appendChild(td6)

    function deleteRow(row) {
        var rowIndex = row.parentNode.parentNode.rowIndex
        var tbody=document.querySelector("tbody").deleteRow(rowIndex)
    }
    tbody.appendChild(tr) 


    deleteButton.style.backgroundColor="red"
}
var submitButton = document.querySelector("button[type='submit']");
    submitButton.addEventListener("click", save);
});
