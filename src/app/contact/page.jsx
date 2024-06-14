import './style.css';
import Form from '@/components/Form';

function Contact() {
  return(  
    <div className="contact-page mx-[8%] page">
      <h3 className='text-2xl font-bold text-center my-10'>Contact Us</h3>
      <div className='contact-text text-start'>
      Feel free to Contact us by submitting the form below and one of our partners will get back to you as soon as possible
      </div>

      <Form />
      
    </div>
  )
}
  
export default Contact;