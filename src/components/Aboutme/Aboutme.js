import './Aboutme.css'

function Aboutme() {
  return (
    <div className='about-container' id='about'>
        <h1 className='about-title'>About Me</h1>
        <div className="about-description" data-aos="flip-up">
            <h3 className="hello">Hello, my name is Miguel Torres</h3>
            <p>
              &emsp; I graduated from Cal State University San Bernardino with a Bachelors in Computer Science. 
              Tech, both software and hardware, has always piqued my interest growing up. It has been a journey learning about
              software development and machines that help us do our daily tasks and jobs, or even for our entertainment.
              It is incredible that we can create so much for the people from our computers and some people don't even think about it.
              Somebody has to create the technology we use everyday and I am one of those people. 
              The purpose of this project is to serve as a portfolio and help me practice web development using ReactJS while showing off what
              I've learned and been up to in the meantime.
            </p>
        </div>
    </div>
  )
}

export default Aboutme