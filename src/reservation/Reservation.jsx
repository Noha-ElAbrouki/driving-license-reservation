import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import { reservationAtom } from '../espaceUser/userAtom';
import Inscription from './Inscription';
import Paiement from './Paiement';
import Confirmation from './Confirmation';


const steps = ['Inscription', 'Paiement', 'Confirmation'];

export default function Reservation() {
    const { state } = useLocation()
    const navigate = useNavigate()
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [reservation, setReservation] = useAtom(reservationAtom)

    console.log('reservation staaaate', state)

    const handleNext = () => {
        setCompleted({ ...completed, [activeStep]: true })
        setActiveStep(activeStep + 1)
    };

    const handleBack = () => {
        setCompleted({ ...completed, [activeStep]: false })
        setActiveStep(activeStep - 1)
    };

    const handleFinished = () => {
        setCompleted({ ...completed, [activeStep]: true })
        setReservation({ ...state })
        navigate('/mon-espace')
    }

    const isNext = activeStep != steps.length - 1
    const isFinished = activeStep === steps.length - 1

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index] === true}>
                        <StepButton color="inherit">
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>

            <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                    {activeStep === 0 && <Inscription />}
                    {activeStep === 1 && <Paiement />}
                    {activeStep === 2 && <Confirmation data={state} />}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {isNext && <Button
                        onClick={handleNext} sx={{ mr: 1 }}
                    >
                        Next
                    </Button>}
                    {isFinished && (
                        <Button onClick={handleFinished}>
                            Finish
                        </Button>
                    )}

                </Box>
            </React.Fragment>

        </Box>
    );
}
