export const ListItem = (props) => {
  const { done, product, amount, unit } = props;

  const element = document.createElement('div');
  element.classList.add('list-item');

  let tickClass = '';
  if (done) {
    tickClass = ' btn-tick--on';
  }

  element.innerHTML = 
   `
      <button class="icon-btn btn-tick${tickClass}"></button>
      <div class="list-item__body">
        <div class="list-item__product">${product}</div>
        <div class="list-item__amount">${amount} ${unit}</div>
      </div>
  `;

  const btnElm = element.querySelector('button');
  btnElm.addEventListener('click', () => {
    element.replaceWith(ListItem({
      product: product,
      amount: amount,
      unit: unit,
      done: !done,
    }));
  });

  return element;
};
