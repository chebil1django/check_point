import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card-style.css'

function App() {
  let input =<input type='text'></input>
  function create_in (){
    let a=10;
    return(
      a
    )
  }
        return (
            <div className='APP'>
    <nav className="nav">
  <a className="nav-link active" aria-current="page" href="#">Visit</a>
  <a className="nav-link" href="#">Sing UP</a>
  <a className="nav-link" href="#">Connection</a>
  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
    </nav>
    {input}
          
          <div className='container-fluid d-flex align-items-center'> 
            <div className='row'>
              <div className='col-md-4'>

              <div className="card text-center" >
              <img src="https://cdn.pixabay.com/photo/2024/03/08/16/43/star-magnolia-8621246_1280.jpg" className="card-img-top" alt="test"/>
               <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Vist {create_in()}</a>
             </div>
            </div>

              </div>
              <div className='col-md-4'>
              <div class="card text-center" >
              <img src="https://cdn.pixabay.com/photo/2024/03/08/16/22/clouds-8621202_1280.jpg" className="card-img-top" alt="test"/>
               <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">Go somewhere</button>
             </div>
            </div>

              </div>
              <div className='col-md-4'>

              <div className="card text-center" >
              <img src="https://cdn.pixabay.com/photo/2024/03/09/07/14/wild-duck-8622063_1280.jpg" className="card-img-top" alt="test"/>
               <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Discover</a>
             </div>
            </div>

              </div>
            </div>
          </div>
    </div>
        );
        }

export default App;
