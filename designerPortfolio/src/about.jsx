import "./about.css"

import designer from "./assets/designer.png"
function About(){
    return (
<>
<div className="BioHome">
<div className="PicBio">
 <img src={designer} alt="" />
 <div className="bioo">
   <h4>Bio:</h4>
 <p>Father of 3 humans, 5 unicorns & 2 dogs, I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard.</p> 
 </div>
 
</div>
<h4 className="underline">Pablo Designero</h4>
<p>Designer & Unicorn <br/> Trainer</p>
</div>
<div className="content">
<p className="txt1">When I was 5, I got adbucted by a unicorn family. When they returned me to earth, I joined a designer school. But, fo’ real, what I learned with my kidnaptive family really gave an edge to my creative language.</p>
<span className="txt2">Being a human is way too complicated. Time to be a unicorn.</span>
<p>Try it and you’ll see. Then your Figma files are just gonna fly in color, glitter, interactions and autolayout</p>
<span className="txt2">Also, grow a beard. Check my bio if that is not clear.</span>
<p>Available for projects, from Monday to Tuesday, mainy between 14 and 16. (Unless there is a unicorn race on TV - DUH -in that case, come back another day).
Projects include, RocknRoll covers, furniture refurbishing, Unicorn potty training and more.</p>
<hr />
</div>


</>
    );
}
export default About