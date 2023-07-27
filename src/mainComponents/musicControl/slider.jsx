import React from "react";

import './musicControl.css'

 const Slider = () => {

//     var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider valuegit rm --cached FILENAME

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
    
    return(
        <div class="slidecontainer">
            <input type="range" class="progress--bar" id="seek" defaultValue="0" min="1" max="100" step="1" />
        </div>
    )
 }

 export default Slider;