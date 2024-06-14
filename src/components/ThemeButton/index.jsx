import './style.css';


const ThemeButton = () => {

  function changeTheme(ev){
    if(ev.target.checked){
    document.documentElement.setAttribute('theme', 'dark');
    } else {
    document.documentElement.setAttribute('theme', 'light');
    }
  }

  return(
    <div className='switch-container'>
      <label className="ui-switch">
      <input type="checkbox" className='checkbox' onClick={changeTheme}/>
      <div className="slider">
        <div className="circle"></div>
      </div>
      </label>
    </div>
  )
} 


export default ThemeButton;