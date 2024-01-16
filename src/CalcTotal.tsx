import './styles/CalcTotal.css';

interface CalcTotalProps {
  total: number,
  onClearClick: () => void
}

function CalcTotal(props: CalcTotalProps) {
    return (
      <div className='calc-total'>
        <span className='total'>
          <span className='total-display'>
            {(props.total / 100).toFixed(2)}
          </span>
        </span>
        <button className='clear-button' onClick={props.onClearClick}>Clear</button>
      </div>
    )
}

export default CalcTotal;
