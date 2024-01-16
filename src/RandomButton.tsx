import './styles/RandomButton.css';

interface RandomButtonProps {
  onClick: () => void
}

function RandomButton(props: RandomButtonProps) {
  return (
    <button className='random-button' onClick={() => {
      props.onClick();
    }}>
      <div className='random-question-marks'>❓🤔❓</div>
      <div>Random</div>
    </button>
  );
}

export default RandomButton;
