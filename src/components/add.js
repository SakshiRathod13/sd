import React from 'react';
class Add extends React.Component{
    render(){
        return(
            <div>
                <h2>Add Contact</h2>
                <div className='ui conatiner'>
                    <form className='ui form'>
                        <div className='field'>
                            <label>Name</label>
                            <input type='text' name='name' placeholder='Name'/>
                        </div>
                        <div className='field'>
                            <label>Email</label>
                            <input type='text' name='email' placeholder='Email'/>
                        </div>
                        <button className='ui button blue'>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Add;