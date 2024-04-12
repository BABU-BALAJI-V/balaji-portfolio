import React from 'react'
import {Container} from 'react-bootstrap'

const Portfolio = () => {
  return (
   <Container id='portfolio'>
      <h2 className='header-clr'>Portfolio</h2>
      <div className="divider"></div><br/>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p><br/>

      <div className='card-main'>
        <div className='card-1'>
            <div className="card">
              <img src={require('../Images/hog.png')} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Histogram of oriented gradients</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://github.com/BABU-BALAJI-V/AttendanceTracker" target="_blank" className="btn btn-primary">Link</a>
              </div>
            </div>
        </div>

        <div className='card-2'>
            <div className="card">
              <img src={require('../Images/todo.jpg')} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">To-do List</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's.</p>
                <a href="https://github.com/BABU-BALAJI-V/to-do-react" target="_blank" className="btn btn-primary">Link</a>
              </div>
            </div>
        </div>

        <div className='card-3'>
            <div className="card">
              <img src={require('../Images/rdp.jpg')} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Remote Desktop Protocol</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content .</p>
                <a href="https://github.com/BABU-BALAJI-V/final" target="_blank" className="btn btn-primary">Link</a>
              </div>
            </div>
        </div>

      </div>

      
   </Container>
  )
}

export default Portfolio