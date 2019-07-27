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
    var attTable=document.createAttribute("class");
    attTable.value="table table-bordered table-dark"
    table_name.setAttributeNode(attTable);
    table_name.classList.add("datatable1");
    var user_name=document.getElementsByClassName("nameId")[i];
    var item_name = document.getElementsByClassName("item")[i];
    var item_price = document.getElementsByClassName("price")[i];
    var z=user_name.childNodes[0].nodeValue;
    var x = item_name.childNodes[0].nodeValue;
    var y = item_price.childNodes[0].nodeValue;
    var temp_array1 = x.split(",");
    var temp_array2 = y.split(",");
    var table_row = document.createElement("tr");
    var table_data = document.createElement("th");
    var attSPAN=document.createAttribute("colspan");
    attSPAN.value="2";
    table_data.setAttributeNode(attSPAN);
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
    divison.appendChild(document.createElement("hr"))
  }
}