import React from 'react';

const HistoryItem = ({ transaction }) => {
  return (
    <li
      className={`history__item history__item-${
        transaction.add ? 'plus' : 'minus'
      }`}
    >
      {transaction.description}
      <span className='history__money'>{transaction.amount} ₽</span>
      <button className='history__delete'>x</button>
    </li>
  );
}

export default HistoryItem;

// <li class='history__item  history__item-minus'>
//   Отдал долг
//   <span class='history__money'>-10000 ₽</span>
//   <button class='history__delete'>x</button>
// </li>;