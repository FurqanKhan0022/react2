import React from 'react'
import pic1 from './image/pic1.png'
import pic2 from './image/pic2.png'
import pic3 from './image/pic3.png'
import pic4 from './image/pic4.png'
function Project() {
  return (
    <>
    
    
    <div className='container-fluid my-5'>
    <div className='row'>
<div className='col'>



<h1 className='namep bouncing-text'>Projects</h1>

<p className='pre my-5  '>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. 
If you cannot provide a valid href.If you cannot provide a valid href, but still need the element to resemble</p>






</div>


    </div>
</div>


<div className='container my-5'>
    <div className='row'>
<div className='col-md-6'>

<img src={pic1} alt=''/>

</div>

<div className='col-md-6'>

<img src={pic2} alt=''/>

</div>




    </div>
</div>




<div className='container my-5'>
    <div className='row'>
<div className='col-md-6'>

<img src={pic4} alt=''/>

</div>

<div className='col-md-6'>

<img src={pic3} alt=''/>

</div>
<div className='col'>
<button class="btn btn-primary offset-md-5 my-5"id='pr4' type="submit"><b>SeeMore</b></button>
</div>

    </div>
</div>

    </>
  )
}

export default Project