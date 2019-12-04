import React from 'react';
import Types from 'prop-types';
import HelpCircleIcon from '@transferwise/icons/react/help-circle';

import Popover from '../popover';

import './InstructionList.css';

const InstructionList = ({ instructions }) => (
  <div className="instruction-list">
    {instructions.map(({ icon, text, help, body }, i) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="instruction">
          <div className="instruction__main">
            <div className="instruction__icon m-r-2">{icon}</div>
            <div className="instruction__text">
              <strong>{text}</strong>
            </div>
            {help && (
              <div className="instruction__help m-l-2">
                <Popover preferredPlacement="top" title={help.title} content={help.content}>
                  <HelpCircleIcon size="sm" />
                </Popover>
              </div>
            )}
          </div>
          {body && <div className="instruction__body m-t-1">{body}</div>}
        </div>
      );
    })}
  </div>
);

InstructionList.propTypes = {
  instructions: Types.arrayOf(
    Types.shape({
      icon: Types.node.isRequired,
      text: Types.node.isRequired,
      help: Types.shape({
        title: Types.node,
        content: Types.node.isRequired,
      }),
      body: Types.node,
    }),
  ).isRequired,
};

export default InstructionList;