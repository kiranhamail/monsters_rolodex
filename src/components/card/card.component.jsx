import './card.styles.css';

const Card = ({ monster }) => { 
  const { id, name, email } = monster;

  return (
    <div className='card-container'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
//===========================================
// or we can do it like this : 
// const Card =({monster:{id,name,email}})=>{
//   return (
//     <div className='card-container'>
//       <img
//         alt={`monster ${name}`}
//         src={`https://robohash.org/${id}?set=set2&size=180x180`}
//       />
//       <h2>{name}</h2>
//       <p>{email}</p>
//     </div>
//   );
// };
// export default Card;
//=============================================
//Using CLASS COMPONENT:
// import {Component} from 'react';
//  import './card.styles.css';

// class Card extends Component{
//   render(){
//  const { id, name, email } = this.props.monster;

//  return (
//    <div className='card-container'>
//       <img
//         alt={`monster ${name}`}
//         src={`https://robohash.org/${id}?set=set2&size=180x180`}
//       />
//       <h2>{name}</h2>
//       <p>{email}</p>
//     </div>
//   );
// };
// }
// export default Card;