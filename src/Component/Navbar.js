import React from 'react';
import img2 from './image/name.png'

const Navbar = () => {
  return (
    <>
    {/* <img src="./name.png" alt='img'/> */}

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark " id='eeee1'>
  <div class="container-fluid" >
    {/* img1 */}
    <a class="navbar-brand offset-md-1" href="#"><img src={img2} alt='img' className='img1'/></a>
    {/* img1 */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav offset-md-7">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./Services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Project</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
