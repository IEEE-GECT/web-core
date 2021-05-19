// import * as React from 'react'
// import './RegisterCard.styles.css'

// const RegisterCard = () => {
//     return (
//     <>
//         <h1>Tickets cards</h1>
// <ul>
//   <li class="booking-card" style="background-image: url(https://images.unsplash.com/photo-1578944032637-f09897c5233d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)">
//     <div class="book-container">
//       <div class="content">
//         <button class="btn">Réserver</button>
//       </div>
//     </div>
//     <div class="informations-container">
//       <h2 class="title">Je suis un billet pour aller visiter un truc</h2>
//       <p class="sub-title">Et moi un je suis sous-titre</p>
//       <p class="price"><svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//     <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
// </svg>De 0 à 15 €</p>
//       <div class="more-information">
//         <div class="info-and-date-container">
//           <div class="box info">
//             <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//       <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
//   </svg>
//             <p>Parc des expositions à NANTES</p>
//           </div>
//           <div class="box date">
//             <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//       <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
//   </svg>
//             <p>Samedi 1er février 2020</p>
//           </div>
//         </div>
//         <p class="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
//         </div>
//     </div>
//   </li>
//   <li class="booking-card" style="background-image: url(https://images.unsplash.com/photo-1580137197581-df2bb346a786?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);">
//     <div class="book-container">
//       <div class="content">
//         <button class="btn">Réserver</button>
//       </div>
//     </div>
//     <div class="informations-container">
//       <h2 class="title">Je suis moi aussi un billet</h2>
//       <p class="sub-title">Et moi je suis un 2ème sous-titre</p>
//       <p class="price"><svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//     <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
// </svg>De 0 à 35 €</p>
//       <div class="more-information">
//         <div class="info-and-date-container">
//           <div class="box info">
//             <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//       <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
//   </svg>
//             <p>Parlement de Bretagne à RENNES</p>
//           </div>
//           <div class="box date">
//             <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//       <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
//   </svg>
//             <p>À partir du Dimanche 3 Juin 2020</p>
//           </div>
//         </div>
//         <p class="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
//         </div>
//     </div>
//   </li>
//   <li class="booking-card" style="background-image: url(https://images.unsplash.com/photo-1579489225078-27977a77bf72?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);">
//     <div class="book-container">
//       <div class="content">
//         <button class="btn">Réserver</button>
//       </div>
//     </div>
//     <div class="informations-container">
//       <h2 class="title">Encore un billet</h2>
//       <p class="sub-title">Encore un sous-titre</p>
//       <p class="price"><svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//     <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
// </svg>20 €</p>
//       <div class="more-information">
//         <div class="info-and-date-container">
//           <div class="box info">
//             <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//       <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
//   </svg>
//             <p>Le Trident à CHERBOURG</p>
//           </div>
//           <div class="box date">
//             <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//       <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
//   </svg>
//             <p>Février 2020</p>
//           </div>
//         </div>
//         <p class="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
//         </div>
//     </div>
//   </li>
//   <li class="booking-card" style="background-image: url(https://images.unsplash.com/photo-1532509854226-a2d9d8e66f8e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);">
//     <div class="book-container">
//       <div class="content">
//         <button class="btn">Réserver</button>
//       </div>
//     </div>
//     <div class="informations-container">
//       <h2 class="title">Now I'm a ticket but in english</h2>
//       <p class="sub-title">And me, call me "sub-title" now</p>
//       <p class="price"><svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//     <path fill="currentColor" d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
// </svg>From 0 to 15 €</p>
//       <div class="more-information">
//         <div class="info-and-date-container">
//           <div class="box info">
//             <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//       <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
//   </svg>
//             <p>Centre Pompidou at PARIS</p>
//           </div>
//           <div class="box date">
//             <svg class="icon" style="width:24px;height:24px" viewBox="0 0 24 24">
//       <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
//   </svg>
//             <p>From October to December 2020</p>
//           </div>
//         </div>
//         <p class="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
//         </div>
//     </div>
//   </li>
// </ul>

// <p class="credits">Designed by <a href="https://www.linkedin.com/in/ana%C3%AFs-laghzali-8b613297/" target="_blank">Anaïs Laghzali</a> & developed by <a href="https://remiruc.com" target="_blank">Rémi Rucojevic</a><br>at <a href="https://www.hippocampe.fr" target="_blank">Hippocampe.fr</a></p>
//     </>)

// }

// export default RegisterCard;
