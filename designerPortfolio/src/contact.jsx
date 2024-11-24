import discord from './assets/dsc.png'
import fb from './assets/fb.png'
import dribble from './assets/drib1.png'
import insta from './assets/insta.png'
import bh from './assets/image copy.png'
import drib from './assets/drib.png'
function contact(){
    return(
        <>
        <div className="container">
            <div className='left'>
                <h1>Let's Work Together</h1>
            <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <div className="contacts-row">
                <img src={discord} alt="" />
                <img src={fb} alt="" />
                <img src={drib} alt="" />
                <img src={insta} alt="" />
                <img src={bh} alt="" />
            </div>
            </div>
            <div className='right'>
               <input type="text" placeholder='Name'/>
               <input type="email" placeholder='Email'/>
               <textarea type="text" placeholder='Type your message here'/>
               <button className='btn' type='submit'>Submit</button>
            </div>
            
        </div>
        </>
    );
}
export default contact