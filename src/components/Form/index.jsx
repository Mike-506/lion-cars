import './style.css';

const Form = () => {
  return (
    <div className="form-container">
      <form action="/form" method="post" className="flex flex-col">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder='Enter your name' required/>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter your email' required/>

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" cols="50" placeholder='Enter your message' required></textarea>
        <div className='flex justify-end'>
        <input type="submit" value="Submit" className='submit-button'/>
        </div>
      </form>
    </div>
  )
}

export default Form;