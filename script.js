var t1=gsap.timeline();


t1.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})

t1.from("#line1-part1",{
    opacity:0,
    onStart: function(){

var h5timer = document.querySelector("#line1-part1 h5");
var grow=0;
setInterval(() => {
    if(grow<100){
      
        h5timer.innerHTML =   grow++;
    }
    else{
        h5timer.innerHTML = grow;
        
    }

}, 33);
}
})

t1.to(".line h2",{
    animationName:"animes",
    opacity:1
})
t1.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4
})

t1.from("page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duratioN:0.5,
    ease:Power4
})
t1.to("#loader",{
    display:"none",
   
})