import img from './assets/image.png'
import behance from './assets/image copy.png'
import apple from './assets/apple.png'
import google from './assets/gog1.png'
import dribble from './assets/drib1.png'
import awards from './assets/awd.png'
function Home() {
    return (
    <>
    <div className='homeWithHr'>

    
    <div className="home">
        
            <div className='left-side'>
               <p>Branding | Image making</p>
               <h2>My awsome<br/> portfolio</h2> 
            </div>
            <img src={img} alt="" />
        </div>
        <hr/> 
        <div className='logosRow'>
            <img src={behance} alt="" />
            <img src={google} alt="" />
            <img src={apple} alt="" />
            <img src={dribble} alt="" />
            <img src={awards} alt="" />
        </div>
        <hr/> 
        </div>
        
    </>
        
        
        
    );
}
export default Home