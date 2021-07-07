/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, FC } from 'react';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import Presentation from 'components/Presentation';
import Button from 'components/Button';
import SubmitButton from 'components/SubmitButton';

import { SurveyWrapper, FooterSurvey, SurveyForm } from './styles';

import { steps } from './consts';

type SurveyProps = {
  onCloseModal: () => void;
};

type Inputs = {
  name: string;
  email: string;
  gender: string;
  age: number;
};

const Survey: FC<SurveyProps> = ({ onCloseModal }: SurveyProps) => {
  const [isAnswered, setAnswered] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isPreviousDisabled = activeStepIndex === 0;
  const isLastStep = activeStepIndex === steps.length - 1;
  const { component: Component } = steps[activeStepIndex];

  const methods = useForm();

  const { trigger } = methods;

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log('data', data);
    setAnswered(true);

    setTimeout(() => {
      onCloseModal();
    }, 3000);
  };

  const handlePreviousStep = () => {
    if (activeStepIndex > 0) setActiveStepIndex(activeStepIndex - 1);
  };

  const handleNextStep = async () => {
    const result = await trigger();
    if (!result) return;

    if (activeStepIndex < steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  return (
    <SurveyWrapper>
      <FormProvider {...methods}>
        <SurveyForm onSubmit={methods.handleSubmit(onSubmit)}>
          {isAnswered ? (
            <Presentation isSubimt />
          ) : (
            <>
              <Component />

              <FooterSurvey>
                <Button
                  isDisabled={isPreviousDisabled}
                  onClick={handlePreviousStep}
                >
                  Previous
                </Button>

                {isLastStep ? (
                  <SubmitButton />
                ) : (
                  <Button onClick={handleNextStep}>Next</Button>
                )}
              </FooterSurvey>
            </>
          )}
        </SurveyForm>
      </FormProvider>
    </SurveyWrapper>
  );
};

export default Survey;
