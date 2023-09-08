import logo from '/src/assets/layout/images/logo.png';
import '/src/assets/layout/styles/AppTopbar.css';


const AppTopbar = () => {

    return (
        
        <div className="app-bar">
            <div className="app-bar-content">
                <div className="logo-container">
                    <img src={logo}  alt="Logo" className="logo" />
                </div>
            </div>
        </div>
    )
}

export default AppTopbar;