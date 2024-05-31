import {useNavigate} from "react-router-dom";
import ErrorIcon from "../assets/error_icon.webp"

function ErrorFallback ({ error }) {
    const navigate = useNavigate();
//Using the useNavigate hook to reload the page
    const handleReload = () => {
        navigate(0);
    }

    return (
      <div className="fallbackpage">
        <img src={ErrorIcon} alt="Error" className="erroricon " />
        <h1 className="errorheader">Error!!</h1>
        <button onClick={handleReload} className= "reloadbutton">Try to reload the page</button>
      </div>
    );
  }
  
  export default ErrorFallback;