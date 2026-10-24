



// // var x = document.querySelector("#try"); 


// // x.parentNode.parentNode.style.backgroundColor="red";

// // console.log(x);




// // var x = document.querySelector("#private").getAttribute("placeholder");


// // console.log(x);

// //     var x = "Enter your data"

// //      document.querySelector("#naga").setAttribute("placeholder",x);

// //  console.log(x);







// // document.querySelector("#btno").onclick= function(){

// //     console.log(123);
// //     console.log(456);
// //     console.log(789);
// // }



// // document.querySelector("#btno").onclick = getdata 


// // function getdata(){


// //    console.log(123);
// //     console.log(456);
// //     console.log(789);

// // }



// document.querySelector("#btno").addEventListener("click",function(){

//     console.log(1,2,3);


//     console.log(1,2,3);

//     console.log(1,2,3);
// })


// document.querySelector("#red").onclick=function(){

//     document.querySelector("#testing").style.color="red";


// }


// document.querySelector("#yellow").onclick=function(){

//     document.querySelector("#testing").style.color="yellow";

// }

// document.querySelector("#green").onclick=function(){

//     document.querySelector("#testing").style.color="green";

// }

// document.querySelector("#orange ").onclick=function(){

//     document.querySelector("#testing").style.color="orange ";

// }



// document.querySelectorAll("button").forEach(function(item){

//     item.onclick=(function(event){

//         document.querySelector("#testing").style.color="red"; 
//     })
// })




document.querySelectorAll("button").forEach(function (f) {

    f.onclick = function (event) {
        document.querySelector("#testing").style.color = f.dataset.color;
        document.querySelector("#testing").style.textAlign = f.dataset.location;
    }
})






document.querySelector("#myform").addEventListener("submit", function (event) {

    var work = document.querySelector("#work").value;

    var result = document.querySelector("#result");




    if (work == "") {
        alert("kindy fill in data ")
        event.preventDefault();
        
    } else {


        var MYli = document.createElement("li");
        MYli.innerHTML = work;

        result.append(MYli);


        document.querySelector("#work").value = "";


        event.preventDefault(); 
    }


    var del = document.createElement("button");
del.innerHTML = "🗑️";
del.style.marginLeft = "10px";

del.onclick = function () {
    MYli.remove();
};

MYli.append(del);



document.querySelector("#clear").onclick = function () {
    document.querySelector("#result").innerHTML = "";
};



document.querySelector("#clear").onclick = function () {
    document.querySelector("#result").innerHTML = "";
};



})


