function readCSVFile(file) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var csvData = e.target.result;
    var lines = csvData.split("\n");

    var ul = document.getElementById("linksList");

    for (var i = 0; i < lines.length; i++) {
      var linkData = lines[i].split(",");
      var link = linkData[0];
      var title = linkData[1];

      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = link;
      a.textContent = title;
      a.target = "_blank";

      li.appendChild(a);
      ul.appendChild(li);
    }
  };
  reader.readAsText(file);
}

function handleFileSelect(event) {
  var file = event.target.files[0];
  readCSVFile(file);
}
