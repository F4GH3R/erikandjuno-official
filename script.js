     
        // Scrolls down 90px from the top of
        // the document, to resize the navlist
        // padding and the title font-size
        
        window.onscroll = function() {
            scrollFunction()
        };
         
        function scrollFunction() {
            if (document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50)
                
            {
                document.getElementById("navlist").style.padding = "10px 10px";
                document.getElementById("navlist").style.backgroundColor = "rgba(44,52,76,1)";

                // document.getElementById("smrtec-logo").style.width = "200px";
            }
            else {
                document.getElementById("navlist").style.backgroundColor = "rgba(44,52,76,0.7)";
                document.getElementById("navlist").style.padding = "40px 10px";
                // document.getElementById("smrtec-logo").style.width = "300px";

            }
        }