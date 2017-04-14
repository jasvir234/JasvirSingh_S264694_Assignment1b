(function () { 
var Person = { 
Id: 0, 
Name: "", 
Address: "",  
Email: "",  
MobileNo:0, 
Gender:"" 
};
 
var applogic = {
clearuielements: function () { 
    var inputs = document.getElementsByClassName("c1"); 
    for (i = 0; i < inputs.length; i++) { 
        inputs[i].value = ""; 
    } 
},
 
saveitem: function () { 
    var lscount = localStorage.length;
    var inputs = document.getElementsByClassName("c1"); 
            Person.Id = inputs[0].value; 
            Person.Name = inputs[1].value; 
            Person.Address = inputs[2].value; 
            Person.Email = inputs[3].value; 
            Person.MobileNo = inputs[4].value; 
            Person.Gender = inputs[5].value;  
            localStorage.setItem("Person_" + lscount, JSON.stringify(Person));  
            location.reload(); 
},


loaddata: function () { 
    var datacount = localStorage.length; 
    if (datacount > 0) 
    { 
        var render = "<table border='1'>"; 
        render += "<tr><th>Id</th><th>Name</th><th>Address</th>  <th>Email</th><th>MobileNo</th>  <th>Gender</th></tr>"; 
        for (i = 0; i < datacount; i++) { 
            var key = localStorage.key(i); 
            var person = localStorage.getItem(key); 
            var data = JSON.parse(person); 
            
            render += "<tr><td>" + data.Id + "</td><td>" + data.Name + " </td>"; 
            render += "<td>" + data.Address + "</td>"; 
            render += "<td>" + data.Email + "</td>"; 
            render += "<td>" + data.MobileNo + "</td>"; 
            render += "<td>" + data.Gender + "</td></tr>"; 
        } 
        render+="</table>"; 
        dvcontainer.innerHTML = render; 
    } 
},

clearstorage: function () { 
    var storagecount = localStorage.length; 
    if (storagecount > 0) 
    { 
        for (i = 0; i < storagecount; i++) { 
            localStorage.clear(); 
        } 
    } 
    window.location.reload(); 
}
    
};
     
var btnsave = document.getElementById('btnsave'); 
btnsave.addEventListener('click', applogic.saveitem, false); 
var btnclear = document.getElementById('btnclear'); 
btnclear.addEventListener('click', applogic.clearuielements, false);  
var btnclearstorage = document.getElementById('btnclearstorage'); 
btnclearstorage.addEventListener('click', applogic.clearstorage, false); 
window.onload = function () { 
applogic.loaddata(); 
}; 
})(); 


