import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserSecret, faInstagram } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";


type InitialLogoProps = {
    init: (value: boolean) => void;
};

export const InitialLogo:React.FC<InitialLogoProps> = ({init}) => {
    setTimeout(() => {
        init(true)
    },1000)
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <div>
            <FontAwesomeIcon icon={faInstagram} style={{fontSize:'48px',color:'red'}}/>
        </div>
        <div>
            Instagram
        </div>
    </div>
  )
}
