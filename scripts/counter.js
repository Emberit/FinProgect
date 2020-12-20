const Counter =  function () {
    
    let div_count = document.querySelectorAll(".picture_h3"),
        div_count1 = 359,
        div_count2 = 240,
        div_count3 = 198,
        div_count4 = 113;
   

    let i = 0,
        i2 = 0,
        i3 = 0,
        i4 = 0;

    let timerId = setInterval(function() {
        ++i;
        div_count[0].innerHTML = `${i}`
        
        if (i >= div_count1) {
            clearInterval(timerId);
        }
    }, 0.5);

    let timerId2 = setInterval(function() {
        ++i2;
        div_count[1].innerHTML = `${i2}`
        
        if (i2 > div_count2) {
            clearInterval(timerId2);
        }
    }, 1);

    let timerId3 = setInterval(function() {
        ++i3;
        div_count[2].innerHTML = `${i3}`
        
        if (i3 > div_count3) {
            clearInterval(timerId3);
        }
    }, 1);

    let timerId4 = setInterval(function() {
        ++i4;
        div_count[3].innerHTML = `${i4}`
        
        if (i4 > div_count4) {
            clearInterval(timerId4);
        }
    }, 1);
    

}(); 
