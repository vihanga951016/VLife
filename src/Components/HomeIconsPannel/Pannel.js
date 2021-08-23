import React from 'react'
import './Pannel.css'


const Pannel = () => {
    return (
        <div className="pannel-body">
            <table className="anim-table">
                <tr>
                    <th>
                    <a href="product.html" style={{textDecoration:'none'}}>
                        <div className="card-1">  
                             <p style={{width:'77px',height:'19px',marginLeft:'20px',marginTop:'10px'}}>Job seeker's</p>
                             {/* using this user can visible every post category. so that they have to search their category and find
                                a suitable work for them*/}
                        </div>
                    </a>
                    </th>
                    <th>
                    <a href="product.html" style={{textDecoration:'none'}}>
                        <div className="card-2">
                            <p style={{width:'77px',height:'19px',marginLeft:'20px',marginTop:'10px'}}>Post Vacancies</p>
                            {/* using this, a company member can create vacancy posts without creating any account. but he/she has to
                            give all data every time, when they creating a new vacancy post*/}
                        </div>
                    </a>
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default Pannel
