import React from 'react'
import {Container} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
  return (
    <Container className='skill-container'>
        <div>
            <h2 className='header-clr'>Skills</h2>
            <div className="divider"></div><br/>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className='skill-main'>    
                <div className='skill-left'>
                    <p>HTML (100%)</p>
                    <ProgressBar variant="info" now={100} />
                    <p> </p>
                    <p>CSS (90%)</p>
                    <ProgressBar variant="info" now={90} />
                    <p> </p>
                    <p>JAVASCRIPT (80%)</p>
                    <ProgressBar variant="info" now={80} />
                </div>
                <div className='skill-right'> 
                    <p>ReactJs (75%)</p>
                    <ProgressBar variant="info" now={75} />
                    <p> </p>
                    <p>C/C++ (100%)</p>
                    <ProgressBar variant="info" now={100} />
                    <p> </p>
                    <p>DSA (80%)</p>
                    <ProgressBar variant="info" now={80} />
                </div>
            </div>    
        </div>
    </Container>
  )
}

export default Skills