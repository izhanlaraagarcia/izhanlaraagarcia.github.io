import React, {useState, useEffect} from "react";

export default function UpBtn(){
    const [inVisible, setInVisible] = useState(false);

    const toggleVisible = () => {
        if (window.pageXOffset = "300"){
            setInVisible(true);
        } else{
            setInVisible(false);
        }
    }
}