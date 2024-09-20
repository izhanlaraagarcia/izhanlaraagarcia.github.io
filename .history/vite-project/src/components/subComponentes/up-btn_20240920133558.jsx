import React, {useState, useEffect} from "react";
import "./main.css";

export default function UpBtn(){
    const [isVisible, setInVisible] = useState(false);

    const toggleVisible = () => {
        if (window.pageXOffset = "300"){
            setInVisible(true);
        } else{
            setInVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    }, []);

    return (
        <div className="up-btn">
            {isVisible && (
                <button onClick={scrollToTop} className="scrollToTop">
                    ↑
                </button>
            )}
        </div>
    )
}