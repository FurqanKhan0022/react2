import React from 'react';
import img2 from './image/mypic.jpg'
const Home = () => {
  return (
    <>
        <div className='container-fluid my-5' id='home1'>
         <div className='row'>
            <div className='col-md-6 offset-md-1'>

            <p  className='p1 disappear-appear'>Hey there</p>
<h1 className='hh1   '>    I'm FurqanShah,</h1>
<h5 className='hh5'>A Web Developer</h5>
<p className='p2'>A web developer is a professional who specializes in creating and maintaining websites and web applications. They are skilled in programming languages such as HTML, CSS, and JavaScript, which are used to
</p>
<button type="button" class="btn btn-dark "id='buttton1' className="button">Secondary</button>

                
            </div>
            <div className='col-md-4 '>

<img src={img2} alt=''width={300}  className='mypic mx-5 slide-in-image '/>
              </div>

            </div>   
        </div>

    </>
  );
};

export default Home;
