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
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
</div>
    )
 }

 export default Slider;