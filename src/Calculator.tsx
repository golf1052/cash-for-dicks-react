import { useState } from 'react';
import CalcTotal from './CalcTotal';
import CalcButton, { CalcButtonProps } from './CalcButton';
import RandomButton from './RandomButton';
import './styles/Calculator.css';

function Calculator() {
  const taxRate = 0.1025; // Seattle's sales tax rate is the highest at 10.25%
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState(Array(22).fill(0));
  const totalWithTax = total * (1 + taxRate);

  const prices: { [index: string]: number } = {
    fries: 280,
    plainHamburger: 245,
    hamburger: 255,
    plainCheeseburger: 290,
    cheeseburger: 305,
    special: 320,
    deluxe: 530,
    onions: 20,
    ketchup: 20,
    tartar: 20,
    shake: 380,
    milk: 185,
    smallSoda: 200,
    mediumSoda: 230,
    largeSoda: 250,
    coffee: 200,
    hotChocolate: 200,
    kidsCone: 220,
    singleCone: 305,
    doubleCone: 425,
    rootBeerFloat: 380,
    sundae: 350
  };

  const items: { [index: string]: CalcButtonProps } = {
    fries: {
      name: 'Fries',
      emoji: '🍟',
      count: counts[0],
      onClickAdd: () => {
        setTotal(t => t + prices.fries);
        onClickAdd(0);
      },
      onClickMinus: () => {
        if (counts[0] > 0) {
          setTotal(t => t - prices.fries);
          onClickMinus(0);
        }
      }
    },
    plainHamburger: {
      name: 'Plain Hamburger',
      emoji: '🍔',
      count: counts[1],
      onClickAdd: () => {
        setTotal(t => t + prices.plainHamburger);
        onClickAdd(1);
      },
      onClickMinus: () => {
        if (counts[1] > 0) {
          setTotal(t => t - prices.plainHamburger);
          onClickMinus(1);
        }
      }
    },
    hamburger: {
      name: 'Hamburger',
      emoji: '🍔',
      count: counts[2],
      onClickAdd: () => {
        setTotal(t => t + prices.hamburger);
        onClickAdd(2);
      },
      onClickMinus: () => {
        if (counts[2] > 0) {
          setTotal(t => t - prices.hamburger);
          onClickMinus(2);
        }
      }
    },
    plainCheeseburger: {
      name: 'Plain Cheeseburger',
      emoji: '🍔',
      count: counts[3],
      onClickAdd: () => {
        setTotal(t => t + prices.plainCheeseburger);
        onClickAdd(3);
      },
      onClickMinus: () => {
        if (counts[3] > 0) {
          setTotal(t => t - prices.plainCheeseburger);
          onClickMinus(3);
        }
      }
    },
    cheeseburger: {
      name: 'Cheeseburger',
      emoji: '🍔',
      count: counts[4],
      onClickAdd: () => {
        setTotal(t => t + prices.cheeseburger);
        onClickAdd(4);
      },
      onClickMinus: () => {
        if (counts[4] > 0) {
          setTotal(t => t - prices.cheeseburger);
          onClickMinus(4);
        }
      }
    },
    special: {
      name: 'Special',
      emoji: '🍔',
      count: counts[5],
      onClickAdd: () => {
        setTotal(t => t + prices.special);
        onClickAdd(5);
      },
      onClickMinus: () => {
        if (counts[5] > 0) {
          setTotal(t => t - prices.special);
          onClickMinus(5);
        }
      }
    },
    deluxe: {
      name: 'Deluxe',
      emoji: '🍔',
      count: counts[6],
      onClickAdd: () => {
        setTotal(t => t + prices.deluxe);
        onClickAdd(6);
      },
      onClickMinus: () => {
        if (counts[6] > 0) {
          setTotal(t => t - prices.deluxe);
          onClickMinus(6);
        }
      }
    },
    onions: {
      name: 'Onions',
      emoji: '🧅',
      count: counts[7],
      onClickAdd: () => {
        setTotal(t => t + prices.onions);
        onClickAdd(7);
      },
      onClickMinus: () => {
        if (counts[7] > 0) {
          setTotal(t => t - prices.onions);
          onClickMinus(7);
        }
      }
    },
    ketchup: {
      name: 'Ketchup',
      emoji: '🍅',
      count: counts[8],
      onClickAdd: () => {
        setTotal(t => t + prices.ketchup);
        onClickAdd(8);
      },
      onClickMinus: () => {
        if (counts[8] > 0) {
          setTotal(t => t - prices.ketchup);
          onClickMinus(8);
        }
      }
    },
    tartar: {
      name: 'Tartar',
      emoji: '🫙',
      count: counts[9],
      onClickAdd: () => {
        setTotal(t => t + prices.tartar);
        onClickAdd(9);
      },
      onClickMinus: () => {
        if (counts[9] > 0) {
          setTotal(t => t - prices.tartar);
          onClickMinus(9);
        }
      }
    },
    shake: {
      name: 'Shake',
      emoji: '🥤',
      count: counts[10],
      onClickAdd: () => {
        setTotal(t => t + prices.shake);
        onClickAdd(10);
      },
      onClickMinus: () => {
        if (counts[10] > 0) {
          setTotal(t => t - prices.shake);
          onClickMinus(10);
        }
      }
    },
    milk: {
      name: 'Milk',
      emoji: '🥛',
      count: counts[11],
      onClickAdd: () => {
        setTotal(t => t + prices.milk);
        onClickAdd(11);
      },
      onClickMinus: () => {
        if (counts[11] > 0) {
          setTotal(t => t - prices.milk);
          onClickMinus(11);
        }
      }
    },
    smallSoda: {
      name: 'Small Soda',
      emoji: '🥤',
      count: counts[12],
      onClickAdd: () => {
        setTotal(t => t + prices.smallSoda);
        onClickAdd(12);
      },
      onClickMinus: () => {
        if (counts[12] > 0) {
          setTotal(t => t - prices.smallSoda);
          onClickMinus(12);
        }
      }
    },
    mediumSoda: {
      name: 'Medium Soda',
      emoji: '🥤',
      emojiStyle: { fontSize: 'x-large' },
      count: counts[13],
      onClickAdd: () => {
        setTotal(t => t + prices.mediumSoda);
        onClickAdd(13);
      },
      onClickMinus: () => {
        if (counts[13] > 0) {
          setTotal(t => t - prices.mediumSoda);
          onClickMinus(13);
        }
      }
    },
    largeSoda: {
      name: 'Large Soda',
      emoji: '🥤',
      emojiStyle: { fontSize: 'xxx-large' },
      count: counts[14],
      onClickAdd: () => {
        setTotal(t => t + prices.largeSoda);
        onClickAdd(14);
      },
      onClickMinus: () => {
        if (counts[14] > 0) {
          setTotal(t => t - prices.largeSoda);
          onClickMinus(14);
        }
      }
    },
    coffee: {
      name: 'Coffee',
      emoji: '☕',
      count: counts[15],
      onClickAdd: () => {
        setTotal(t => t + prices.coffee);
        onClickAdd(15);
      },
      onClickMinus: () => {
        if (counts[15] > 0) {
          setTotal(t => t - prices.coffee);
          onClickMinus(15);
        }
      }
    },
    hotChocolate: {
      name: 'Hot Chocolate',
      emoji: '🍫',
      count: counts[16],
      onClickAdd: () => {
        setTotal(t => t + prices.hotChocolate);
        onClickAdd(16);
      },
      onClickMinus: () => {
        if (counts[16] > 0) {
          setTotal(t => t - prices.hotChocolate);
          onClickMinus(16);
        }
      }
    },
    kidsCone: {
      name: 'Kids Cone',
      emoji: '🍦',
      count: counts[17],
      onClickAdd: () => {
        setTotal(t => t + prices.kidsCone);
        onClickAdd(17);
      },
      onClickMinus: () => {
        if (counts[17] > 0) {
          setTotal(t => t - prices.kidsCone);
          onClickMinus(17);
        }
      }
    },
    singleCone: {
      name: 'Single Cone',
      emoji: '🍦',
      emojiStyle: { fontSize: 'x-large' },
      count: counts[18],
      onClickAdd: () => {
        setTotal(t => t + prices.singleCone);
        onClickAdd(18);
      },
      onClickMinus: () => {
        if (counts[18] > 0) {
          setTotal(t => t - prices.singleCone);
          onClickMinus(18);
        }
      }
    },
    doubleCone: {
      name: 'Double Cone',
      emoji: '🍦',
      emojiStyle: { fontSize: 'xxx-large' },
      count: counts[19],
      onClickAdd: () => {
        setTotal(t => t + prices.doubleCone);
        onClickAdd(19);
      },
      onClickMinus: () => {
        if (counts[19] > 0) {
          setTotal(t => t - prices.doubleCone);
          onClickMinus(19);
        }
      }
    },
    rootBeerFloat: {
      name: 'Root Beer Float',
      emoji: '🥤',
      count: counts[20],
      onClickAdd: () => {
        setTotal(t => t + prices.rootBeerFloat);
        onClickAdd(20);
      },
      onClickMinus: () => {
        if (counts[20] > 0) {
          setTotal(t => t - prices.rootBeerFloat);
          onClickMinus(20);
        }
      }
    },
    sundae: {
      name: 'Sundae',
      emoji: '🍨',
      count: counts[21],
      onClickAdd: () => {
        setTotal(t => t + prices.sundae);
        onClickAdd(21);
      },
      onClickMinus: () => {
        if (counts[21] > 0) {
          setTotal(t => t - prices.sundae);
          onClickMinus(21);
        }
      }
    }
  };

  function onClickMinus(i: number) {
    if (counts[i] > 0) {
      setCounts(c => {
        c[i] -= 1;
        return c;
      });
    }
  }

  function onClickAdd(i: number) {
    setCounts(c => {
      c[i] += 1;
      return c;
    });
  }

  function clear() {
    setTotal(0)
    setCounts(Array(22).fill(0));
  }

  return (
    <div className='calculator-div'>
      <CalcTotal
        total={totalWithTax}
        onClearClick={() => {
          clear();
        }}/>
      <div className='calc-flex'>
        <CalcButton {...items.fries} />
        <CalcButton {...items.plainHamburger} />
        <CalcButton {...items.hamburger} />
        <CalcButton {...items.plainCheeseburger} />
        <CalcButton {...items.cheeseburger} />
        <CalcButton {...items.special} />
        <CalcButton {...items.deluxe} />
        <CalcButton {...items.onions} />
        <CalcButton {...items.ketchup} />
        <CalcButton {...items.tartar} />
        <CalcButton {...items.shake} />
        <CalcButton {...items.milk} />
        <CalcButton {...items.smallSoda} />
        <CalcButton {...items.mediumSoda} />
        <CalcButton {...items.largeSoda} />
        <CalcButton {...items.coffee} />
        <CalcButton {...items.hotChocolate} />
        <CalcButton {...items.kidsCone} />
        <CalcButton {...items.singleCone} />
        <CalcButton {...items.doubleCone} />
        <CalcButton {...items.rootBeerFloat} />
        <CalcButton {...items.sundae} />
        <RandomButton onClick={() => {
          const value = prompt('How much cash do you have?');
          if (value === null) {
            alert('Please enter a number next time, k thanks.');
            return;
          }

          const parsedValue = parseFloat(value);
          if (isNaN(parsedValue)) {
            alert('Please enter a number next time, k thanks.');
            return;
          }

          if (!isFinite(parsedValue)) {
            alert('Please enter a real amount of money next time, k thanks.');
            return;
          }

          clear();

          function isCondiment(key: string) {
            return key === 'onions' || key === 'ketchup' || key === 'tartar';
          }

          function isBurger(key: string) {
            return key === 'plainHamburger' || key === 'hamburger' || key === 'plainCheeseburger' || key === 'cheeseburger' || key === 'special' || key === 'deluxe';
          }

          let condimentsAdded = 0;
          let availableFunds = Math.floor(parsedValue / (1 + taxRate) * 100);
          let internalCount = Array(22).fill(0);
          while (availableFunds > 185) {
            const randomNumber = Math.floor(Math.random() * Object.keys(items).length);
            const key: string = Object.keys(items)[randomNumber];
            const randomItem = items[key];
            const itemPrice = prices[key];
            if (itemPrice < availableFunds) {
              if (isCondiment(key)) {
                let hasBurger = false;
                for (let i = 0; i < internalCount.length; i++) {
                  const current = Object.keys(items)[i];
                  if (isBurger(current) && internalCount[i] > 0) {
                    hasBurger = true;
                    break;
                  }
                }

                if (!hasBurger) {
                  continue;
                } else {
                  condimentsAdded += 1;
                }
              }

              availableFunds -= itemPrice;
              randomItem.onClickAdd();
              internalCount[randomNumber] += 1;
            } else if (isCondiment(key) && internalCount[randomNumber] > 2) {
              condimentsAdded += 1;
            } else if (condimentsAdded > 10) {
              break;
            }
          }
        }} />
      </div>
    </div>
  );
}

export default Calculator;
