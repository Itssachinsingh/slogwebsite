import React from 'react'
import leaf from '../images/leaf.png';
import autodesk from '../images/autodesk.png';
import certiport from '../images/certiport.png';
import eeict from '../images/eict.png';
import microsoft from '../images/Microsoft.png';
import nsdc from '../images/nsdc.png';
import tssc from '../images/tssc.png';
import iit from '../images/iit.png';
import institute from '../images/institute.png';




export const Partners = () => {
    return (
        <div className='partners_container'>
            <h1>Why Choose Us?</h1>
            <div className='partners'>
                <div className="stat-card">
                    <div className='stat-card-icon'><i class="fa-solid fa-book"></i></div>
                    <h1>100+</h1>
                    <p>Online Courses</p>
                    <span>Minimize errors, maximize precision</span>
                </div>
                <div className="stat-card">
                    <div className='stat-card-icon'><i class="fa-solid fa-person-chalkboard"></i></div>
                    <h1> 50+</h1>
                    <p>Top Instructor</p>
                    <span>Minimize errors, maximize precision</span>
                </div>
                <div className="stat-card">
                    <div className='stat-card-icon'><i class="fa-solid fa-award"></i></div>
                    <h1>35+</h1>
                    <p>Online Certificates</p>
                    <span>Minimize errors, maximize precision</span>
                </div>
                <div className="stat-card">
                    <div className='stat-card-icon'><i class="fa-solid fa-people-group"></i></div>
                    <h1>2000+</h1>
                    <p>Members</p>
                    <span>Minimize errors, maximize precision</span>
                </div>
            </div>

            <div className='partners_lists_container'>
                <h2>Learn with Our Partners</h2>
                <p>Unlock opportunities for collaboration and growth by learning with our esteemed industry partners. Join us today!</p>
                    <div className='brands_container'>
                        <div className='leaf-left'><img src={leaf} alt="" /></div>
                        <div className='leaf-right'><img src={leaf} alt="" /></div>
                        <div className='brand_lists'>
                            <div className='brands_img'><img src={autodesk} alt="" />
                            <img src={certiport} alt="" />
                            <img src={eeict} alt="" />
                            <img src={iit} alt="" /></div>
                            <div className='brands_img'><img src={institute} alt="" />
                            <img src={microsoft} alt="" />
                            <img src={nsdc} alt="" />
                            <img src={tssc} alt="" /></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
