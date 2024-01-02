import { useState } from 'react';
import './styles.css';

import Cell from './Cell';

const cellStructure = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const activateCell = (index) => {
    let newOrder = [...order];
    if (!newOrder.includes(index)) {
      newOrder = [...order, index];
    } else {
      newOrder = newOrder.filter((i) => i != index);
    }

    setOrder(newOrder);

    // deactivating cells
    if (newOrder.length === cellStructure.flat().filter(Boolean).length) {
      deactivateCells();
    }
  };

  const deactivateCells = () => {
    setIsDeactivating(true);
    const id = setInterval(() => {
      setOrder((currentOrder) => {
        const newOrder = [...currentOrder];
        newOrder.pop();

        if (newOrder.length < 1) {
          clearInterval(id);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  return (
    <section className="section grid-light">
      <div className="section-center">
        <div className="title">
          <h3>grid lights</h3>
          <div className="underline"></div>
        </div>
        <div
          className="grid-container"
          style={{
            gridTemplateColumns: `repeat(${cellStructure[0].length},1fr)`,
          }}
        >
          {cellStructure.flat().map((cell, index) => {
            return cell ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                onClick={() => {
                  activateCell(index);
                }}
                isDisabled={isDeactivating}
                label={`cell ${index + 1}`}
              />
            ) : (
              <div key={index}></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default GridLights;
