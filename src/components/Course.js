import React from 'react';
import './Course.css';
import jfsdc from './Image/jfsdc.jpg'

const Course = () => {
    return (
        <>
            <h1>COURSE</h1>
            <div className="container" >
                <div className="card">
                    <div className="courseimg">
                        <img src={jfsdc} alt="a gift" width={200} height={200} />
                    </div>
                    <div className="card-body">
                        <h1 className="head">JFSJD</h1>
                        <p> A Java full stack developer. A web-based application is comps</p>
                        <center>
                            <button>
                                <span class="transition"></span>
                                <span class="gradient"></span>
                                <span class="label">Learn More</span>
                            </button></center>
                    </div>
                </div>
                <div className="card">
                    <div className="courseimg">
                        <img src="https://www.abujadataschool.com/wp-content/uploads/2022/03/ui-ux-programme-in-abuja-nigeria.jpg" alt="a gift" width={200} height={200} />
                    </div>
                    <div className="card-body">
                        <h1 className="head">UI UX</h1>
                        <p>UX design involves managing the user journey as they interact with a product</p>
                        <center>
                            <button>
                                <span class="transition"></span>
                                <span class="gradient"></span>
                                <span class="label">Learn More</span>
                            </button></center>
                    </div>
                </div>
                <div className="card">
                    <div className="courseimg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaQ_hysVgCH2rYMow01O0nOOtrXZ7cDMXPA&usqp=CAU" alt=" gift" width={200} height={200} />
                    </div>
                    <div className="card-body">
                        <h1 className="head">Cyber Security</h1>
                        <p>The practice of protecting systems, networks, and programs from digital</p>
                        <center>
                            <button>
                                <span class="transition"></span>
                                <span class="gradient"></span>
                                <span class="label">Learn More</span></button></center>
                    </div>
                </div>

                <div className="card">
                    <div className="courseimg">
                        <img src="https://media.istockphoto.com/id/1368593225/photo/businessman-touching-virtual-screen-with-icon-online-banking-online-payments-cyber-security.webp?b=1&s=170667a&w=0&k=20&c=0Fq1NsiN2oC4fOhdsw_0C9mbr7UI3M6VIvv3LMDKt1Q=" alt=" gift" width={20} height={200} />
                    </div>
                    <div className="card-body">
                        <h1 className="head">BFSI</h1>
                        <p>
                            Banking, Financial Services and Insurance (BFSI) is set to India</p>
                        <center>
                            <button>  <span class="transition"></span>
                                <span class="gradient"></span>
                                <span class="label">Learn More</span></button>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course