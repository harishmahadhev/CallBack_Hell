  
let countdown = 10
setTimeout(function (){
    document.getElementById("display").innerHTML = countdown--;
    setTimeout(function(){
        document.getElementById("display").innerHTML = countdown--;
        setTimeout(function(){
            document.getElementById("display").innerHTML = countdown--;
            setTimeout(function(){
                document.getElementById("display").innerHTML = countdown--;
                setTimeout(function(){
                    document.getElementById("display").innerHTML = countdown--;
                    setTimeout(function(){
                        document.getElementById("display").innerHTML = countdown--;
                        setTimeout(function(){
                            document.getElementById("display").innerHTML = countdown--;
                            setTimeout(function(){
                                document.getElementById("display").innerHTML = countdown--;
                                setTimeout(function(){
                                    document.getElementById("display").innerHTML = countdown--;
                                    setTimeout(function(){
                                        document.getElementById("display").innerHTML = countdown--;
                                        setTimeout(function(){
                                            document.getElementById("display").innerHTML = "Happy New year ";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
