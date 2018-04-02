var t = 0;
var count = 0;
var win = 0;
function myFunc1() {
    if (
        document.getElementById('b1').innerText !== 'X' && document.getElementById('b1').innerText !== 'O' && win === 0
    ) 
         {
            
        if (t == 0){
            document.getElementById('b1').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b1').innerText = "O";
            t = 0;
        }
            count++;
    }
       if (
           (document.getElementById('b1').innerText === document.getElementById('b2').innerText
           && 
           document.getElementById('b1').innerText === document.getElementById('b3').innerText )
           ||
           (document.getElementById('b1').innerText ===
           document.getElementById('b4').innerText
           &&
           document.getElementById('b1').innerText ===
           document.getElementById('b7').innerText)
           ||
           document.getElementById('b1').innerText ===
           document.getElementById('b5').innerText
           &&
           document.getElementById('b1').innerText ===
           document.getElementById('b9').innerText
       )
       {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
            
            document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
}
function myFunc2() {
    if (
        document.getElementById('b2').innerText !== 'X' && document.getElementById('b2').innerText !== 'O' && win === 0
    ) {
            
        if (t == 0){
            document.getElementById('b2').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b2').innerText = "O";
            t = 0;
        }
            count++;
    }
    if (
           (document.getElementById('b2').innerText === document.getElementById('b1').innerText
           && 
           document.getElementById('b2').innerText === document.getElementById('b3').innerText )
           ||
           (document.getElementById('b2').innerText ===
           document.getElementById('b5').innerText
           &&
           document.getElementById('b2').innerText ===
           document.getElementById('b8').innerText)
          
       )
        {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
            document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
        }
function myFunc3() {
    if (
        document.getElementById('b3').innerText !== 'X' && document.getElementById('b3').innerText !== 'O' && win === 0
    ) {
            
        if (t == 0){
            document.getElementById('b3').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b3').innerText = "O";
            t = 0;
        }
            count++;
    }
    if (
           (document.getElementById('b3').innerText === document.getElementById('b1').innerText
           && 
           document.getElementById('b3').innerText === document.getElementById('b2').innerText )
           ||
           (document.getElementById('b3').innerText ===
           document.getElementById('b6').innerText
           &&
           document.getElementById('b3').innerText ===
           document.getElementById('b9').innerText)
           ||
           document.getElementById('b3').innerText ===
           document.getElementById('b5').innerText
           &&
           document.getElementById('b3').innerText ===
           document.getElementById('b7').innerText
       )
          {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
           document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
        }
function myFunc4() {
    if (
        document.getElementById('b4').innerText !== 'X' && document.getElementById('b4').innerText !== 'O' && win === 0
    ){
            
        if (t == 0){
            document.getElementById('b4').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b4').innerText = "O";
            t = 0;
        }
            count++;
    }
    if (
           (document.getElementById('b4').innerText === document.getElementById('b1').innerText
           && 
           document.getElementById('b4').innerText === document.getElementById('b7').innerText )
           ||
           (document.getElementById('b4').innerText ===
           document.getElementById('b5').innerText
           &&
           document.getElementById('b4').innerText ===
           document.getElementById('b6').innerText)
          
       )
          {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
            document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
        }
function myFunc5() {
    if (
       document.getElementById('b5').innerText !== 'X' && document.getElementById('b5').innerText !== 'O' && win === 0
    ) {
            
        if (t == 0){
            document.getElementById('b5').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b5').innerText = "O";
            t = 0;
        } count++;
    }
    if (
           (document.getElementById('b5').innerText === document.getElementById('b1').innerText
           && 
           document.getElementById('b5').innerText === document.getElementById('b9').innerText )
           ||
           (document.getElementById('b5').innerText ===
           document.getElementById('b2').innerText
           &&
           document.getElementById('b5').innerText ===
           document.getElementById('b8').innerText)
           ||
           document.getElementById('b5').innerText ===
           document.getElementById('b3').innerText
           &&
           document.getElementById('b5').innerText ===
           document.getElementById('b7').innerText
       )
           {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
          document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
        }
function myFunc6() {
    if (
        document.getElementById('b6').innerText !== 'X' && document.getElementById('b6').innerText !== 'O' && win === 0
    ) {
            
        if (t == 0){
            document.getElementById('b6').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b6').innerText = "O";
            t = 0;
        } count++;
    }
    if (
           (document.getElementById('b6').innerText === document.getElementById('b3').innerText
           && 
           document.getElementById('b6').innerText === document.getElementById('b9').innerText )
           ||
           (document.getElementById('b6').innerText ===
           document.getElementById('b5').innerText
           &&
           document.getElementById('b6').innerText ===
           document.getElementById('b4').innerText)
           
       )
           {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
            document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
        }
function myFunc7() {
    if (
        document.getElementById('b7').innerText !== 'X' && document.getElementById('b7').innerText !== 'O' && win === 0
    ) {
            
        if (t == 0){
            document.getElementById('b7').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b7').innerText = "O";
            t = 0;
        } count++;
    }
    if (
           (document.getElementById('b7').innerText === document.getElementById('b4').innerText
           && 
           document.getElementById('b7').innerText === document.getElementById('b1').innerText )
            ||
           (document.getElementById('b7').innerText === document.getElementById('b5').innerText
           && 
           document.getElementById('b7').innerText === document.getElementById('b3').innerText ) 
           ||
           (document.getElementById('b7').innerText ===
           document.getElementById('b8').innerText
           &&
           document.getElementById('b7').innerText ===
           document.getElementById('b9').innerText)
           
       )
          {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
           document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
        }
function myFunc8() {
    if (
        document.getElementById('b8').innerText !== 'X' && document.getElementById('b8').innerText !== 'O' && win === 0
    ) {
            
        if (t == 0){
            document.getElementById('b8').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b8').innerText = "O";
            t = 0;
        } count++;
    } 
    if (
           (document.getElementById('b8').innerText === document.getElementById('b5').innerText
           && 
           document.getElementById('b8').innerText === document.getElementById('b2').innerText )
           ||
           (document.getElementById('b8').innerText ===
           document.getElementById('b7').innerText
           &&
           document.getElementById('b8').innerText ===
           document.getElementById('b9').innerText)
           
       )
           {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
            document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
        }
function myFunc9() {
    if (
       document.getElementById('b9').innerText !== 'X' && document.getElementById('b9').innerText !== 'O' && win === 0
    ) {
            
        if (t == 0){
            document.getElementById('b9').innerText = "X";
            t = 1;
        } else {
            document.getElementById('b9').innerText = "O";
            t = 0;
        }
            count++;
    }
    if (
           (document.getElementById('b9').innerText === document.getElementById('b6').innerText
           && 
           document.getElementById('b9').innerText === document.getElementById('b3').innerText )
           ||
           (document.getElementById('b9').innerText ===
           document.getElementById('b5').innerText
           &&
           document.getElementById('b9').innerText ===
           document.getElementById('b1').innerText)
           ||
           document.getElementById('b9').innerText ===
           document.getElementById('b8').innerText
           &&
           document.getElementById('b9').innerText ===
           document.getElementById('b7').innerText
       )
           {    
           if (t===1)
               document.getElementById('victorie').innerText = "A castigat jucatorul 1";
           else 
               document.getElementById('victorie').innerText = "A castigat jucatorul 2";
        win = 1;
       }
    else {
        if (count===9 && win ===0) {
           document.getElementById('victorie').innerText = "Este egalitate!"
        }
    }
        }
function again(){
    t = 0;
    count = 0;
    win = 0;
    document.getElementById("b1").innerText= " ";
    document.getElementById("b2").innerText= " ";
    document.getElementById("b3").innerText= " ";
    document.getElementById("b4").innerText= " ";
    document.getElementById("b5").innerText= " ";
    document.getElementById("b6").innerText= " ";
    document.getElementById("b7").innerText= " ";
    document.getElementById("b8").innerText= " ";
    document.getElementById("b9").innerText= " ";
    document.getElementById('victorie').innerText= " ";
}