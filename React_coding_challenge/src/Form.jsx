import React from 'react'
import Button from './Button'

const Form = ({ reqType, setReqType }) => {
    return (//
        <form onSubmit={(e) => e.preventDefault()} >  
         {/* to prevent it from reloading after it has been submitted */}
        
            <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
            <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
            <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />

        </form>
    )
}

export default Form
