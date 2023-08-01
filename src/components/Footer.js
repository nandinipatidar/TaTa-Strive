import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Contact = () => {
  return (
    <>
     <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a href='/tatastriveanand.com'>
          tatastriveanand
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Contact