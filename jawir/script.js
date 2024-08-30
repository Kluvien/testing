function tambah() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
  
    var hasil = parseInt(input1) + parseInt(input2);
  
    document.getElementById("hasil").innerHTML = hasil;
  }
  
  function kurang() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
  
    var hasil = parseInt(input1) - parseInt(input2);
  
    document.getElementById("hasil").innerHTML = hasil;
  }
  
  function kali() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
  
    var hasil = parseInt(input1) * parseInt(input2);
  
    document.getElementById("hasil").innerHTML = hasil;
  }
  
  function bagi() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
  
    var hasil = parseInt(input1) / parseInt(input2);
  
    document.getElementById("hasil").innerHTML = hasil;
  }
  

  