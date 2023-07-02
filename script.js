function displayMobileNav(){
    console.log("works")
    var mobile_nav = document.getElementById("mobile_nav");
    if(mobile_nav.style.display !== "block"){
        mobile_nav.style.display = "block";
        mobile_nav.style.transition = "transition: all 1s ease";
    } else{
        mobile_nav.style.display = "none";
    }
}


const nav = document.querySelector(".nav")
let last_scroll_y = window.scrollY

window.addEventListener("scroll", () =>{
    if(last_scroll_y < window.scrollY){
        console.log("We are going down")
        nav.style.display = "none";
    } else{
        console.log("we are going up")
        nav.style.display = "block";
    }

    last_scroll_y = window.scrollY
})

function CloseMenu(){
    console.log("clicked")
    var mobile_nav = document.getElementById("mobile_nav");
    mobile_nav.style.display = "none";
}

function CheckForm(){
    if(document.getElementById("input").value==""){
        alert("cannot have empty input")
        return true;
    } else{
        return false;
    }
}

function ResetForm(event){
    const decision = confirm("Are you sure you want to clear form?")

    if(decision){
        document.getElementById("add_post_form").reset();
        event.preventDefault();
    }
}

function StorePost(clicked_id){
    localStorage.setItem("postId", clicked_id);
}