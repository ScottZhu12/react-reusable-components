import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../../App';

interface StepIndicatorProps {
  id: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ id }) => {
  const renderedSteps = data.map((step) => {
    return (
      <>
        <Link
          key={step.id}
          to={`/sign-up/step/${step.id}`}
          className={`setp-indicator__content ${
            Number(id) === step.id ? 'active' : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {step.id}
        </Link>
        <hr />
      </>
    );
  });

  return <div className='setp-indicator'>{renderedSteps}</div>;
};

export default StepIndicator;
