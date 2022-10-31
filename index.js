function myfunc(){
    // var b = document.getElementById('username').value;
    // if(b===''){
    //     document.getElementById('message1').innerHTML="Required Field";
    // }else{
    //     document.getElementById('message1').innerHTML="";   
    // }

    // var c = document.getElementById('email').value;
    // if(c===''){
    //     document.getElementById('message2').innerHTML="Please Enter Valid Email ID";
    // } 
    // else{
    //     document.getElementById('message2').innerHTML="";   
    // }
    
    // var d=document.getElementById('review').value;

    // if(d.length <= 20 ){
    //     document.getElementById('message3').innerHTML="Charachter Must Be More 20 letters !";
    // }else{
    //     document.getElementById('message3').innerHTML="";   
    // }
    
    // var a = document.getElementById('mobilenumber').value;
    // if(a===""){
    //     alert("Contact Field Cannot be Empty !");
    // } 
    // if(a.length !== 10){
    //     alert("Please Enter 10 Digit Number");
    // }

    if( document.getElementById('username').value === ""){
        alert("Please enter your name!")
        document.my_form.Name.focus();
        return false;}
    
        if( document.getElementById('email').value === "") {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
    
    
        if(document.getElementById('mobilenumber').value.length != 10){
            alert("Please Enter a valid Phone Number");
            document.my_form.number.focus();
            return false;
        }

        


    let username = document.my_form.username.value;
    let contactNo = document.my_form.contact.value;
    let Address = document.my_form.email.value;
    let feedback=document.my_form.review.value;
    let d = new Date();

    var opened=window.open();
    opened.document.write(`
    <html>
     <body>
       <h2>Your Receipt!!</h2>
       <div style="border: 2px solid black; width:300px; height: 200px; display:grid; place-items: center;">

       <p>You order is Successfully Placed!  Date of Generation:${d} <br>
       Name: ${username}<br>
       Contact Info: ${contactNo}<br>
       Email ID: ${Address}<br>
       Feedback: ${feedback}
       <br>
       Thank You for Shopping !!!
       </div>
     </body>
    </html>
`);

    

}

// function Receipt(){
//     let username = document.my_form.username.value;
//     let contactNo = document.my_form.contact.value;
//     let Address = document.my_form.email.value;
//     let d = new Date();

//     var opened=window.open();
//     opened.document.write(`
//     <html>
//      <body>
//        <h2>Your Receipt!!</h2>
//        <div style="border: 2px solid black; width:300px; height: 200px; display:grid; place-items: center;">

//        <p>You order is Successfully Placed!  Date of Generation:${d} <br>
//        Name: ${username}<br>
//        Contact Info: ${contactNo}<br>
//        Email ID: ${Address}<br>
//        Thank You for Shopping !!!
//        </div>
//      </body>
//     </html>
// `);
// }
