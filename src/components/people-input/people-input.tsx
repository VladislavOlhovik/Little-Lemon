import * as SC from './people-input.styled';

interface IPeopleInput {
  peopleCount: number;
  disabled?: boolean;
  onChange: (count: number) => void;
}

export const PeopleInput = ({
  peopleCount,
  disabled = false,
  onChange,
}: IPeopleInput) => {
  const updatePeopleCount = (operation: string) => {
    onChange(operation === 'increment' ? peopleCount + 1 : peopleCount - 1);
  };
  return (
    <SC.DateInputContainer>
      <label htmlFor='peopleInput'>People:</label>
      <div className='inputContainer'>
        <input
          type='text'
          id='peopleInput'
          name='people'
          readOnly
          disabled={disabled}
          value={peopleCount}
        />
        <button
          disabled={peopleCount <= 0}
          onClick={() => updatePeopleCount('decrement')}
        >
          -
        </button>
        <button
          disabled={peopleCount >= 20}
          onClick={() => updatePeopleCount('increment')}
        >
          +
        </button>
      </div>
    </SC.DateInputContainer>
  );
};
