import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret, faHome, faSearch, faCompass, faFilm, faHeart, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {  faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";


const Menu = () => {
  return (
    <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 p-0 m-0">
    <ul className="">
      <li className="flex items-center pt-4 pb-4 pr-4 hover:bg-gray-900">
        <div className="text-white">
            <FontAwesomeIcon icon={faHome} size="lg" />
        </div>
        <span className="ml-3 text-white">Inicio</span>
      </li>
      <li className="flex items-center pt-4 pb-4 pr-4 hover:bg-gray-900">
        <div className="text-white">
            <FontAwesomeIcon icon={faSearch} size="lg" />
        </div>
        <span className="ml-3 text-white">Buscar</span>
      </li>
      <li className="flex items-center pt-4 pb-4 pr-4 hover:bg-gray-900">
        <div className="text-white">
            <FontAwesomeIcon icon={faCompass} size="lg" />
        </div>
        <span className="ml-3 text-white">Explorar</span>
      </li>
      <li className="flex items-center pt-4 pb-4 pr-4 hover:bg-gray-900">
        <div className="text-white">
            <FontAwesomeIcon icon={faFilm} size="lg" />
        </div>
        <span className="ml-3 text-white">Reels</span>
      </li>
      <li className="flex items-center pt-4 pb-4 pr-4 hover:bg-gray-900">
        <div className="text-white">
            <FontAwesomeIcon icon={faFacebookMessenger} size="lg" />
        </div>
        <span className="ml-3 text-white">Mensajes</span>
      </li>
      <li className="flex items-center pt-4 pb-4 pr-4 hover:bg-gray-900">
        <div className="text-white">
            <FontAwesomeIcon icon={faHeart} size="lg" />
        </div>
        <span className="ml-3 text-white">Notificaciones</span>
      </li>
      <li className="flex items-center pt-4 pb-4 pr-4 hover:bg-gray-900">
        <div className="text-white">
            <FontAwesomeIcon icon={faSquarePlus} size="lg" />
        </div>
        <span className="ml-3 text-white">Crear</span>
      </li>
      <li className="flex items-center pt-4 pb-4 pr-4 hover:bg-gray-900">
        <div className="text-white rounded-full">
            <img src="https://picsum.photos/200/300" alt="Imagen Redonda" class="rounded-full h-5 w-5" />
        </div>
        <span className="ml-3 text-white">Perfil</span>
      </li>
    </ul>
  </div>
  )
}

export default Menu
