import React from 'react';

const Total = ({ transactions }) => {
  let res = transactions.map((transaction) => transaction.add ? +transaction.amount : -transaction.amount);
  console.log(res)
  return (
    <section className='total'>
      <header className='total__header'>
        <h3>Баланс</h3>
        <p className='total__balance'>{`${transactions.map((transaction) => transaction.add ? +transaction.amount : -transaction.amount).reduce(
          function(sum, current) {
          return sum + current
        }, 0)} ₽`}</p>
      </header>
      <div className='total__main'>
        <div className='total__main-item total__income'>
          <h4>Доходы</h4>
          <p className='total__money total__money-income'>{`+${transactions.map((transaction) => transaction.add ? +transaction.amount : 0).filter(
            function(number) {
              return number > 0;
            }
          ).reduce(function(sum, current) {
          return sum + current
        }, 0)} ₽`}</p>
        </div>
        <div className='total__main-item total__expenses'>
          <h4>Расходы</h4>
          <p className='total__money total__money-expenses'>{`-${transactions.map((transaction) => transaction.add ? 0 : -transaction.amount).filter(
            function(number) {
              return number < 0;
            }
          ).reduce(function(sum, current) {
          return Math.abs(sum + current)
        }, 0)} ₽`}</p>
        </div>
      </div>
    </section>
  );
}

export default Total;