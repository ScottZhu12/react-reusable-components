import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { data } from '../../App';
import StepIndicator from '../StepIndicator';

const MainContent: React.FC = () => {
  const { stepId } = useParams();

  const content = data.find((content) => content.id === Number(stepId));

  if (!content) {
    return <h2>Content not found</h2>;
  }

  let btnsContent;

  if (Number(stepId) === 1) {
    btnsContent = <Link to={`/sign-up/step/${Number(stepId) + 1}`}>Next</Link>;
  } else if (Number(stepId) === 4) {
    btnsContent = (
      <>
        <Link to={`/sign-up/step/${Number(stepId) - 1}`}>Prev</Link>
        <Link to='/'>Finish</Link>
      </>
    );
  } else {
    btnsContent = (
      <>
        <Link to={`/sign-up/step/${Number(stepId) - 1}`}>Prev</Link>
        <Link to={`/sign-up/step/${Number(stepId) + 1}`}>Next</Link>
      </>
    );
  }

  return (
    <div className='main-content'>
      <StepIndicator id={stepId || ''} />
      <div className='main-content__detail'>
        {content.title}
        <div className='btns-container'>{btnsContent}</div>
      </div>
    </div>
  );
};

export default MainContent;
