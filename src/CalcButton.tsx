import React from 'react';
import './styles/CalcButton.css';

export interface CalcButtonProps {
  name: string,
  emoji?: string,
  emojiStyle?: React.CSSProperties,
  count: number,
  onClickAdd: () => void,
  onClickMinus: () => void
}

function CalcButton(props: CalcButtonProps) {
  const countButtonClass = props.count > 0 ? 'calc-span-count' : 'calc-span-count-0';
  const countDisplay = props.count > 0 ? props.count : '';
  const minusButtonClass = props.count > 0 ? 'calc-button-count' : 'calc-button-count-0';
  const minusButtonDisplay = props.count > 0 ? '-' : '';

  return (
    <div className='calc-div'>
      <div className='button-buttons-div'>
        <button className={minusButtonClass} onClick={() => {
          props.onClickMinus();
        }}>{minusButtonDisplay}</button>
        <div className={countButtonClass}>{countDisplay}</div>
        <button className='calc-button-count' onClick={() => {
          props.onClickAdd();
        }}>+</button>
      </div>
      <div style={props.emojiStyle}>{props.emoji}</div>
      <div className='button-name-div'>{props.name}</div>
    </div>
  );
}

export default CalcButton;
