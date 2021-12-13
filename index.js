
 const items = document.querySelectorAll('.item');

 items.forEach(item =>{
     item.addEventListener('mouseover', ()=>{
        removeFocus();
        item.classList.add('selected');
        
       
     })

    removeFocus = () =>{
        items.forEach(item=>{
            item.classList.remove('selected');
        })
    }
})


gsap.to("h1",{
    text:"We are finally open",
    duration: 3,
    repeat:-1,
    repeatDelay: .5,
    ease: "power1.in",
    yoyo: true,

})




