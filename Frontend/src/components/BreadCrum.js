import React from 'react'

const BreadCrum = (props) => {
    const title= props.title
  return (
    <div className='breadcrum py-4'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <p><Link to="/" className="text-dark">Home</Link>/{title}</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default BreadCrum
