import React from 'react'
import './CompanyRegister.css'

const CompanyRegister = () => {
    return (
        <div>
            <div className="form-division">
            <p style={{marginLeft:'80px',marginTop:'20px'}}>This form is provide for you, if you're a company owner or a member, who expect to recruit employees for your vacancies.</p>
                <form className="form">
                    
                    <table>
                        
                        <br />
                        <br />
                        <tr>
                            <td>
                            <label>Company name: </label> 
                            </td>
                            <td>
                            <input type="text"/>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />
                        <tr>
                            <td>
                            <label>Company Address: </label> 
                            </td>
                            <td>
                            <input type="text"/>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />

                        <tr>
                            <td>
                            <label>Number 1: </label> 
                            </td>
                            <td>
                            <input type="text"/>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />

                        <tr>
                            <td>
                            <label>Number 2: </label> 
                            </td>
                            <td>
                            <input type="text"/>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />

                        <tr>
                            <td>
                            <label>Email: </label> 
                            </td>
                            <td>
                            <input type="text"/>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />

                        <tr>
                            <td>
                            <label>Fax: </label> 
                            </td>
                            <td>
                            <input type="text"/>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />

                        <tr>
                            <td>
                            <label>Company Logo: </label> 
                            </td>
                            <td>
                            <input type="file" style={{marginLeft:'149px'}}/>
                            </td>
                        </tr>
                        <br />
                        <br />
                        <br />
                        
                    </table>

                    <table>
                        <tr>
                            <td>
                                <input type="submit" className="submit-btn" value="Register"/>
                            </td>
                            <td>
                                <input type="submit" className="close-btn" value="Cancel"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default CompanyRegister