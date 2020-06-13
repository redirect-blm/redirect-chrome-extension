import React from 'react';
import Logo from '../../assets/logo.png';
import Image from 'react-bootstrap/Image';

export default function Header() {
  return (
    <header>
      {/* <img alt="Redire&cent;" /> */}
      <Image src={Logo} alt="Logo" className="mb-3" />
    </header>
  );
}
