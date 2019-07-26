
// function add() {
//     var temp = document.getElementById("mySelect").value
//     var input_name=["Name","Email","Phone","Password"];
//     var input_type=["text","email","number","password"];
//     var form=document.createElement("form");
//     form.classList.add("form-style");
//     form.action="/register";
//     form.method="post";
//     var button=document.createElement("button");
//     button.classList.add("btn","btn-success");
//     button.type="Submit";
//     button.appendChild(document.createTextNode("Submit"));
//     for (var i = 0; i < temp; i++) {
//         var divison = document.createElement("div");
//         divison.classList.add("div-style");
//         for(var j=0;j<4;j++){
//             var inputfield=document.createElement("input");
//             inputfield.classList.add("input-style");
//             inputfield.setAttribute("type",input_type[j]);
//             inputfield.placeholder=input_name[j];
//             inputfield.name=input_name[j].concat(i.toString());
//             divison.appendChild(inputfield);
//         }
//         form.appendChild(divison);
//     }
//     form.appendChild(button);
//     document.getElementById("container").appendChild(form);
// }
function editmodal() {
    var modal = document.getElementById("edit");
    //console.log(modal);
    var span = document.getElementsByClassName("close2")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// function showmodal() {
//   var modal1 = document.getElementById("show");
//   //console.log(modal);
//   var span1 = document.getElementsByClassName("close")[0];
//   modal1.style.display = "block";
//   span1.onclick = function() {
//     modal1.style.display = "none";
//   };
//   window.onclick = function(event) {
//     if (event.target == modal1) {
//       modal1.style.display = "none";
//     }
//   };
// }

function calculatemodal() {
  var modal1 = document.getElementById("calculate");
  //console.log(modal);
  var span1 = document.getElementsByClassName("close3")[0];
  modal1.style.display = "block";
  span1.onclick = function() {
    modal1.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  };
}



function showmodal() {
  var item_length = document.getElementsByClassName("item").length;
  console.log(item_length)
  var divison = document.getElementById("data")
  for (var i = 0; i < item_length; i++) {
    var table_name = document.createElement("table");
    table_name.style.border = "2px solid red"
    var user_name=document.getElementsByClassName("nameId")[i];
    var item_name = document.getElementsByClassName("item")[i];
    var item_price = document.getElementsByClassName("price")[i];
    var z=user_name.childNodes[0].nodeValue;
    var x = item_name.childNodes[0].nodeValue;
    var y = item_price.childNodes[0].nodeValue;
    var temp_array1 = x.split(",");
    var temp_array2 = y.split(",");
    var table_row = document.createElement("tr");
    var table_data = document.createElement("td");
    table_data.textContent=z;
    table_row.appendChild(table_data);
    table_name.appendChild(table_row);
    for (var j = 0; j < temp_array1.length; j++) {
      var table_row = document.createElement("tr");
      var table_data1 = document.createElement("td");
      var table_data2 = document.createElement("td");
      table_data1.textContent = temp_array1[j];
      table_data2.textContent = temp_array2[j];
      table_row.appendChild(table_data1)
      table_row.appendChild(table_data2)
      table_name.appendChild(table_row)
    }
    divison.appendChild(table_name)
    divison.appendChild(document.createElement("br"))
    console.log(temp_array1)
    console.log(temp_array2)
  }
}
