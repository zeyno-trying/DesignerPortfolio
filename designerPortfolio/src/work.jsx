import eye from './assets/eye.png'
import haze from './assets/haze.png'
import gotme from './assets/gotMe.png'
import love from './assets/love.png'
import American from './assets/American.png'
import pressure from './assets/pressure.png'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import user1 from './assets/user1.png'

function Work(){
return(
    <>
    
    <div className="col">
        <p className="works">My Latest Works</p>
        <div className="row">
                <div className="card">
                    <img src={eye} alt="" />
                    <h6>Free Bird</h6>
                    <p>Lynyryd Skynyrd</p>
                </div>
                <div className="card">
                    <img src={haze} alt="" />
                    <h6>Purple Haze</h6>
                    <p>Jimie Hendrix</p>
                </div>
                <div className="card">
                    <img src={gotme} alt="" />
                    <h6>You Really Got Me</h6>
                    <p>The Kinks</p>
                </div>
        </div>
        <div className="row">
                <div className="card">
                    <img src={American} alt="" />
                    <h6>American Girl</h6>
                    <p>Tom Petty</p>
                </div>
                <div className="card">
                    <img src={love} alt="" />
                    <h6>Whole Lotta Love</h6>
                    <p>Led Zeppelin</p>
                </div>
                <div className="card">
                    <img src={pressure} alt="" />
                    <h6>Under Pressure</h6>
                    <p>Queen</p>
                </div>
        </div>
        <p className="works">Clients</p>
        <div className="row">
           <div className="card2">
               <p className='Clienttext'>I appreciate the hard work and the creativity, Iam absolutely gonnawork with this artist in my futur projects.</p>
               <div className="picfeed">
                    <img src={user1} alt="" />
                    <div className="feedName">
                        <div className="feedback">
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    </div>
                    <p>Gemma Nolen, <br/> Google.</p>
                    </div>
               </div>
           </div>
           <div className="card2">
               <p className='Clienttext'>I appreciate the hard work and the creativity, Iam absolutely gonnawork with this artist in my futur projects.</p>
               <div className="picfeed">
                    <img src={user1} alt="" />
                    <div className="feedName">
                        <div className="feedback">
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    </div>
                    <p>Gemma Nolen, <br/> Google.</p>
                    </div>
               </div>
           </div>
           <div className="card2">
               <p className='Clienttext'>I appreciate the hard work and the creativity, Iam absolutely gonnawork with this artist in my futur projects.</p>
               <div className="picfeed">
                    <img src={user1} alt="" />
                    <div className="feedName">
                        <div className="feedback">
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    <FaStar color="gold" size={20} />
                    </div>
                    <p>Gemma Nolen, <br/> Google.</p>
                    </div>
               </div>
           </div>
        </div>
        
    </div>
    <hr/>
    </>
    
);
}
export default Work