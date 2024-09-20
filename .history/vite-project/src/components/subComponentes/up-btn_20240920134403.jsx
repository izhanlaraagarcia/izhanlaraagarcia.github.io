import React, {useState, useEffect} from "react";
import "./main.css";

export default function UpBtn(){
    const [isVisible, setInVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {  // Cambia 100 por el valor que prefieras
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            display: none,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
<div className={`up-btn ${isVisible ? 'visible' : ''}`}>
{isVisible && (
                <button onClick={scrollToTop} className="scrollToTop">
                    ↑
                </button>
            )}
        </div>
    )
}