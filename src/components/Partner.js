import React from 'react';
import './Partner.css';
import partnerimg from './Image/partner.jpg';
import sap from './Image/sap.png';
import tcs from './Image/tcs.png';
import generation from './Image/generation.png';
import coursera from './Image/courseera.png';
import p1 from './Image/p1.jpg';
import p2 from './Image/p2.jpg';
import p3 from './Image/p3.jpg';
import p4 from './Image/p4.jpg';
import p5 from './Image/p5.jpg';
import p6 from './Image/p6.jpg';
import p7 from './Image/p7.jpg';
import p8 from './Image/p8.jpg';

const partner = () => {
    return (
        <>
            <h1 className='phead'>Partners</h1>
            <div className='partnerbody'>
                <div className="left-section">
                    {/* Content for the left section */}
                    {/* <h2>This is the Left Section</h2> */}
                    <p className='text'>A partnership model is one of the ways in which Tata STRIVE aims
                        to accomplish its mission to build capacity to train youth for
                        employment, entrepreneurship and community enterprise. In the
                        Partnership Model, the centres are owned and operated by partners
                        and Tata STRIVE supports them with knowledge and domain expertise.
                    </p>
                    <div className='partimg'>
                    <img src={sap} alt='sap' width={100} height={100} />
                    <img src={tcs} alt='sap' width={100} height={100} />
                    <img src={generation} alt='sap' width={120} height={100} />
                    <img src={coursera} alt='sap' width={150} height={100} />
                    </div>
                </div>
                <div className="right-section">
                    {/* Content for the right section */}
                    {/* <h2>This is the Right Section</h2> */}
                    <img src={partnerimg}/>
                </div>
            </div>
            
            <div className='discription'>
            <div id='headpartner'><h2><em>Placement</em> <em>Partners</em></h2></div>
            <div id='imgpartner'>
            <img src={p1} alt='p1' width={65} height={65} />
            <img src={p2} alt='p2' width={60} height={60} />
            <img src={p3} alt='p3' width={60} height={60} />
            <img src={p4} alt='p4' width={60} height={60} />
            <img src={p5} alt='p5' width={60} height={60} />
            <img src={p6} alt='p6' width={65} height={65} />
            <img src={p7} alt='p7' width={70} height={60} />
            <img src={p8} alt='p8' width={60} height={60} />
            </div>
            </div>
        </>
    );
}

export default partner