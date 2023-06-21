import { IoIosArrowUp } from 'react-icons/io';
import { BsPerson, BsCart, BsCashCoin } from 'react-icons/bs';
import { TbBuildingBank } from 'react-icons/tb';

import './widget.css';

const Widget = ({ type }) => {
  let input;

  let amount = 100; //temp
  let perc = 20;
  switch (type) {
    case 'user':
      input = {
        title: 'USERS',
        money: false,
        link: 'See All Users',
        icon: (
          <BsPerson
            className="widget-icon"
            style={{
              color: 'rgb(31, 148, 109)',
              backgroundColor: 'rgb(127, 244, 205)',
            }}
          />
        ),
      };
      break;
    case 'order':
      input = {
        title: 'ORDERS',
        money: false,
        link: 'View All Orders',
        icon: (
          <BsCart
            className="widget-icon"
            style={{
              color: 'rgb(186, 178, 65)',
              backgroundColor: 'rgb(251, 246, 176) ',
            }}
          />
        ),
      };
      break;
    case 'earnings':
      input = {
        title: 'EARNINGS',
        money: true,
        link: 'View Total Earnings',
        icon: (
          <BsCashCoin
            className="widget-icon"
            style={{
              color: 'rgb(234, 95, 63)',
              backgroundColor: 'rgb(255, 166, 146)',
            }}
          />
        ),
      };
      break;
    case 'balance':
      input = {
        title: 'BALANCE',
        money: true,
        link: 'View Balance',
        icon: (
          <TbBuildingBank
            className="widget-icon"
            style={{
              color: 'rgb(251, 104, 158) ',
              backgroundColor: 'rgb(255, 184, 210) ',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget-container">
      <div className="widget-left">
        <span className="title"> {input.title}</span>
        <span className="counter">
          {input.money && '$'}
          {amount}
        </span>
        <span className="link">{input.link}</span>
      </div>
      <div className="widget-right">
        <div className="percentage pos">
          <IoIosArrowUp />
          {perc}%
        </div>
        {input.icon}
      </div>
    </div>
  );
};

export default Widget;
