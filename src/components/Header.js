
// import Logo from './Logo';
// import Menu from './Menu';

// function Header(){
//   return (
//     <header>
//       <Logo />
//       <Menu />
//       <div>
//         <button>Sign in</button>
//         <button>Log in</button>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import './Header.css'; // Import du fichier CSS pour le styling

function Header() {
  return (
    <header className="header">
      <Logo />
      <Menu />
      <div className="auth-buttons">
        <button className="btn">Sign in</button>
        <button className="btn">Log in</button>
      </div>
    </header>
  );
}

export default Header;
