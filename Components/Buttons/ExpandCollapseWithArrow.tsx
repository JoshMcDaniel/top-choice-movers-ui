import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

type Props = {
  onClick: Function;
  isOpen: boolean;
  text: string;
  id?: string;
};

const ExpandCollapseWithArrow = (props: Props) => {
  return (
    <button
      className="grid grid-flow-col gap-2 justify-start items-center transition duration-500 ease-in-out"
      type="button"
      onClick={() => props.onClick()}
      id={props.id}
    >
      {props.text}
      <span
        className={`ml-auto border-0 h-5 w-5 shrink-0 transition-transform duration-500 ease-in-out motion-reduce:transition-none ${
          props.isOpen
            ? 'mr-1 rotate-[-180deg] fill-secondary'
            : 'mr-0 rotate-0 fill-primary'
        }`}
      >
        <AiOutlineDown />
      </span>
    </button>
  );
};

export default ExpandCollapseWithArrow;
