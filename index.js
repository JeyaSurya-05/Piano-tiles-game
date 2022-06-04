
var order_given=[];
    var seq_clicked=[];
    var tile;
    var temp_order_given;
    var level=0;
    document.addEventListener('keypress',color_change);
    document.addEventListener('click',function(e){
      if(e.target.id !=0 && e.target.id !="header"){
        if(temp_order_given.includes(e.target.id)){
          temp_order_given=temp_order_given.filter(item => item !== e.target.id);
          
        }else{
          alert("OPPS!!!You clicked a wrong tile...Try again"+level);
          order_given=[];
          seq_clicked=[];
          level=0;
        }
        if(temp_order_given.length===0){
          level+=1;
          color_change();
          console.log(" Sucessfully completed level "+level+" Move forward");
        }
            }
    });
    function color_change(){
      tile=(1+Math.floor(Math.random()*16)).toString();
      document.getElementById(tile).style.backgroundColor="black";
      setTimeout(function(){
        document.getElementById(tile).style.backgroundColor="rgb(229, 222, 231)";
      },450);
      order_given.push(tile);
      
      temp_order_given=order_given;
  
     };