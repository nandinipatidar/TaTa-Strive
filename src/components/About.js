import React from 'react';
import './About.css';
import {FaUser,FaUsers,FaUserTie } from 'react-icons/fa';
import zubair from './Image/zubair.jpg'
import pinkesh from './Image/pinkesh.jpg'
import madhusmita from './Image/madhusmita.jpg'
import mrundang from './Image/mrundang.jpg'
import rahul from './Image/rahul.jpg'
import dimple from './Image/dimple.jpg'


const About = () => {
  return (
    <>
    <div className='aboutbody'>
    <h1 id='head'>About Strive</h1>
    <div className='aboutdescription'>
    Tata STRIVE is an initiative of the TCIT, aimed at actively bridging the gap
     between vocational education and industry needs. In FY 2017-18, Tata STRIVE 
     began working under the aegis of Tata Trusts as a result of the Tata Group’s 
     strategy of ‘Simplification, synergy and scale’. The move rec.
    </div>
    <div className='container1'>
    <div className='aboutcard'>
        <div className='aboutimg'>
            <img id='facultyimg' src={zubair} alt='profile' width={50} height={130} />
        </div>
        <div className='abouttext'>
            <h3>Center Manager</h3>
            <p>MD. Saiyad Zubair</p>
        </div>
    </div>

    <div className='aboutcard'>
        <div className='aboutimg'>
        <img id='facultyimg' src={pinkesh} alt='profile'  width={50} height={130}  />
        </div>
        <div className='abouttext'>
        <h3>Mobilizer</h3>
        <p>Pinkesh Sargara</p>
        </div>
    </div>

    <div className='aboutcard'>
        <div className='aboutimg'>
        <img id='facultyimg' src={madhusmita} alt='profile'  width={50} height={130}  />
        </div>
        <div className='abouttext'>
        <h3>JFSJD Facilitator</h3>
        <p>Madhusmita Sahu</p>
        </div>
    </div>

    <div className='aboutcard'>
        <div className='aboutimg'>
        <img id='facultyimg' src={mrundang} alt='profile'  width={50} height={130}  />
        </div>
        <div className='abouttext'>
        <h3>ux-ui Facilitator</h3>
        <p>Mrundand Bhavsar</p>
        </div>
    </div>

    <div className='aboutcard'>
        <div className='aboutimg'>
        <img id='facultyimg' src={rahul} alt='profile'  width={50} height={130}  />
        </div>
        <div className='abouttext'>
        <h3>SC Facilitator</h3>
        <p>Rahul Shah</p>
        </div>
    </div>

    <div className='aboutcard'>
        <div className='aboutimg'>
        <img id='facultyimg' src={dimple} alt='profile' height={130} width={50}/>
        </div>
        <div className='abouttext'>
        <h3> Facilitator</h3>
        <p>Dimple Barot</p>
        </div>
    </div>
</div>
<div className='abouticon'>
    <div className='icon1'>
        <FaUser className='icons'/>
        
        <div className='icontext'>200+</div>
        <div className='iconhead'>students</div>
    </div>

    <div className='icon2'>
        <FaUsers className='icons'/>
        <div className='icontext'>200+</div>
        <div className='iconhead'>Our Team</div>
    </div>

    <div className='icon3'>
        <FaUserTie className='icons'/>
        <div className='icontext'>200+</div>
        <div className='iconhead'>Placement</div>
    </div>

</div>
</div>

    </>
  )
}

export default About