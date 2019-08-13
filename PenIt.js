  /*creating a new list item when clicking the "Add" button*/
    function newElement(){
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if(inputValue === ''){
        alert("You must write something!");
      }
      document.getElementById("myinput").value= " ";
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className= "close";
      span.appendChild(txt);
      li.appendChild(span);

      for(i=0; i<close.length; i++){
           close[i].onclick=function(){
             var div = this.parentElement;
              div.style.display="none";
           }
      }
    }
  /*create a "close" button & append it to each list item*/
     var myNodeList = document.getElementsByTagName("LI");
     var i;
     for(i=0; i<myNodeList.length; i++){
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.appendChild(txt);
      myNodeList[i].appendChild(span);
     }