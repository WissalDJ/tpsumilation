// function Menu(){
//   return (
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Service</li>
//         <li>Blog</li>
//       </ul>
//     </nav>
//   );
// };

// export default Menu;
import React from 'react';

function Menu() {
  const menuItems = ['Home', 'About Us', 'Service', 'Blog']; // Liste des éléments du menu
  return (
    <nav className="menu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
