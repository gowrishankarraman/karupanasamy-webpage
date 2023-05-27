
import './App.css';
import { useEffect } from "react"
import { Card, Col, Row } from 'react-bootstrap';
import banana from './images/banana3.png'
import apple from './images/apple2.png'
import cocknet from './images/cocknet2.png'
import plate from './images/plate2.png'
import baner from './images/kovil paner.jpeg'
import yagapujai1 from './images/yagapujai1.jpeg'
import yagapujai3 from './images/yagapujai3.jpeg'
import kovilpujai from './images/kovilpujai.jpeg'
import seer2 from './images/seer2.jpeg'
import baner2 from './images/baner2.png'
import welcom from './images/welcomspng.png'


function App() {

  useEffect(() => {
    const observ = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {


          entry.target.classList.add('show')




        }
        else {
          entry.target.classList.remove('show')




        }
      })

    })
    const hidden1 = document.querySelectorAll('.hid')
    hidden1.forEach((el) => observ.observe(el))

  }, [])

  return (
    <div className=" container ">
       <div className='anim1 mt-5'>
        <Row className='text-center' >
          <Col>
            <img src='https://tse4.mm.bing.net/th?id=OIP.3TNRPgFfCEjvTQXZBCwEwwHaJh&pid=Api&P=0&h=180' className='img-fluid header' alt='img'></img>

          </Col>
          <Col>
            <img src='https://tse3.mm.bing.net/th?id=OIP.UvX6ctLaEUJfQySCx5MyMQHaLW&pid=Api&P=0&h=180' className='img-fluid header ' alt='img'></img>


          </Col>
          <Col>
            <img src='https://tse2.mm.bing.net/th?id=OIP.w-TQGAygIuk_W9s6WKkTdAHaJ4&pid=Api&P=0&h=180' className='img-fluid header ' alt='img'></img>


          </Col>
          <Col>
            <img src='https://tse3.mm.bing.net/th?id=OIP.IJIlPJb1M3gN__8oM6VITQAAAA&pid=Api&P=0&h=180' className='img-fluid header' alt='img'></img>

          </Col>


        </Row>


      </div>


      <h1 className='text-center background mt-5 hid'> கருப்பண சாமி திருக்கோவில்</h1>

      <section className='parallax-bg mt-5 '>
        <div className='parallax-overlay'>

          <h2 className='text-center pt-2 pb-2 background mt-2 hid '>
            பழைய கருப்பண சாமி திருக்கோவில்
          </h2>

        </div>

      </section>
      <Card className='mt-5 background hid'>
        <Card.Body className='bg'>
          <img src={baner} className='img-fluid hid ' alt='img'></img>

        </Card.Body>
      </Card>
      <Card className='mt-5 mb-5 background hid'>
        <Card.Body>
        <section className='mt-2'>
        <Row className='text-center'>
          <Col className='col-md-8 '>
            <img src={yagapujai1} className='img-fluid hid' alt='img'></img>
          </Col>
          <Col className='col-md-4'>
            <p className='hid txt'>புதிய கருப்பண சாமி கோவில் யாகசாலை 
            </p>

          </Col>
        </Row>
      </section>
      <section className='mt-5'>
        <Row className='text-center'>
          <Col className='col-md-4 '>
          <p className='hid txt'>புதிய கருப்பண சாமி கோவில் யாகசாலை பூஜை
            </p>
          </Col>
          <Col className='col-md-8'>
          
            <img src={yagapujai3} className='img-fluid hid' alt='img'></img>

          </Col>
        </Row>
      </section>
        </Card.Body>
      </Card>
   
      
      <section className='kalasam '>
        <div className='kalasamoverlay'>
        
        <h2 className='text-center pt-2 pb-2 background hid ' id='kalasam'>
        புதிய கருப்பண சாமி கோவில் கலசம்
          </h2>
        </div>

      </section>
      <Card className='mt-5 p-3 background hid'>
     
      <section >
        <Row className='text-center'>
          <Col className='col-md-8 '>
            <img src={kovilpujai} className='img-fluid hid 'alt='img'></img>
          </Col>
          <Col className='col-md-4 '>
            <p className='hid txt'>புதிய கருப்பண சாமி கோவில்  பூஜை
            </p>
           

          </Col>
        </Row>
      </section>
     
     
      <section className='mt-5'>
        <Row className='text-center'>
          <Col className='col-md-4 '>
          <p className='hid txt'> புதிய கருப்பணசாமி  கோவிலுக்கு சீர் எடுத்து வருதல்
            </p>
          </Col>
          <Col className='col-md-8 hid'>
          
            <img src={seer2} className='img-fluid' alt='img'></img>

          </Col>
        </Row>
      </section>
      </Card>
        <Card className='mt-5 mb-5 hid'>
          <Card.Body className='welcom'>
          <Row className=' d-flex p-3' >
        <Col className='col-12 col-md-4 hid pt-5'>
            
           <p>வருகிற புதன் கீழமை வைகாசி மாதம் 17 ஆம் நாள் (31.5.2023) புதிய கருப்பணசாமி கோவில் முதலாம் ஆண்டு விழா பூஜை  நடைபெறவுள்ளது  ஊர் மக்கள் அனைவரும் கலந்து கொள்ள வேண்டும்</p>
  
            </Col>
          <Col className='col-12 col-md-4  mt-5  '>
            
          <img src={welcom} className='hid img-fluid'></img>

          </Col>
  
        <Col className='position-relative col-12 col-md-4 pt-5 '>
        
    <img src={banana} className='img-fluid position-absolute mt-1 me-2 hid pe-5  ' id='banana'width={1000} alt='img' ></img>
<img src={apple} className='img-fluid position-absolute mt-2 hid pe-5  ' id='apple' width={1000} alt='img' ></img>
<img src={baner2} className='img-fluid hid position-absolute ' id='baner2'alt='img' ></img>
<img src={cocknet} className='img-fluid position-absolute mt-3 hid px-5 ' id='cocknet' width={1000} alt='img' ></img>
<img src={plate} width={1000} className='img-fluid plate ' alt='img'></img>
        </Col>
      </Row> 
          </Card.Body>
    
        </Card>
     
 
   <div className='temple '>
    <div className='templeoverlay'>
    <h2 className='text-center pt-2 pb-2 background  hid 'id='templeid' >
    புதிய கருப்பணசாமி கோவில்
          </h2>
    </div>
    
   </div>


           
<Card className='mt-5 mb-5 background hid'>
  <Card.Header >
    <Card.Title className='text-center'>
      <h1>முக்கிய தகவல்</h1>
    </Card.Title>
  </Card.Header>
  <Card.Body >
    <Card.Text>
    <marquee direction="left" scrollamount="2.5"  height="100px">
    வருகிற புதன் கீழமை வைகாசி மாதம் 17 ஆம் நாள் (31.5.2023)புதிய கருப்பணசாமி கோவில் முதலாம் ஆண்டு விழா பூஜை  நடைபெறவுள்ளது  ஊர் மக்கள் அனைவரும் கலந்து கொள்ள வேண்டும்
    </marquee>
    </Card.Text>
  </Card.Body>
</Card> 
     <Card className='mb-5 background hid'>
    
      <Card.Body className='overflow-auto'>
     <Card.Header className='text-center'>
     <Card.Title >
       <h1> புதிய கருப்பணசாமி கோவில் Google Map</h1> 
        </Card.Title>
     </Card.Header>
    
      <div class="mapouter text-center"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1197&amp;height=400&amp;hl=en&amp;q=KARUPPUSAMY KOVIL, FH5X+HRJ, Oricheri Pudur, Tamil Nadu 638315&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
     
      </Card.Body>
     </Card>
     <div className='text-center'>
     <hr></hr>
<span ><small >@All copy rights are received from 2023 to 2024</small></span>
     <hr className='mt-5 mb-5'></hr>
     </div>



    </div>



  );
}

export default App;
