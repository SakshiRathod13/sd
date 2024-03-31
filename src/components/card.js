import React from 'react';

const Card=(props)=>{
    const {id,name,email}=props.contacts;
    return(
        <div className='ui celled list'>
                    
            <div className='item'>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                    <div className='ui right'>
                    <i className='trash alternate outline icon' style={{color:'red', marginTopright:'7px'}}></i>

                    </div>

                </div>
            </div>

        </div>
    );
}
export default Card;