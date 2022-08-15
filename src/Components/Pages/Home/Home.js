import * as React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import { ButtonGoBack, ButtonGoForward, ButtonStart, CardSettings, ConteudoAnguloPlataforma, DefaultP, DivDireção, DivQuantidadeFotos, DivVelocidade, MainContainer, SectionAnguloPlataforma, SectionButtons, StyledFooter, StyledLogo } from './Styled'
import Logo from '../../../Assets/logo01.svg'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function Home() {
    const [checkbox, setCheckBox] = React.useState('Horário')
    const [angle, setAngle] = React.useState(50)

    const onChangeCheckbox = (event) => {
        setCheckBox(event.target.value)
    }

    const onChangeAngle = (value) => {
        setAngle(value)
    }

    function ValueLabelComponent(props) {
        const { children, value } = props;

        return (
            <Tooltip enterTouchDelay={0} placement="top" title={value}>
                {children}
            </Tooltip>
        );
    }

    ValueLabelComponent.propTypes = {
        children: PropTypes.element.isRequired,
        value: PropTypes.number.isRequired,
    };

    const marks = [
        {
            value: 50,
            label: '50 rpm',
        },
    ];

    const marks2 = [
        {
            value: 50,
            label: '25 fotos',
        },
    ];

    const marks3 = [
        {
            value: 50,
            label: '180°',
        },
    ];

    return (
        <MainContainer>
            <StyledLogo src={Logo} />

            <CardSettings>

                <DivVelocidade>
                    <DefaultP>Velocidade</DefaultP>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        aria-label="custom thumb label"
                        defaultValue={50}
                        marks={marks}
                    />
                </DivVelocidade>

                <DivQuantidadeFotos>
                    <DefaultP>Quantidade de fotos</DefaultP>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        aria-label="custom thumb label"
                        defaultValue={50}
                        marks={marks2}
                    />
                </DivQuantidadeFotos>

                <DivDireção>
                    <DefaultP>Direção</DefaultP>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value='Horário' control={<Radio />} label="Horário" checked={checkbox === 'Horário'} onChange={onChangeCheckbox} />
                            <FormControlLabel value='Anti-Horário' control={<Radio />} label="Anti-Horário" checked={checkbox === 'Anti-Horário'} onChange={onChangeCheckbox}/>

                        </RadioGroup>
                    </FormControl>
                </DivDireção >

            </CardSettings>

            <SectionAnguloPlataforma>

                <ConteudoAnguloPlataforma>
                    <DefaultP>Ângulo da plataforma</DefaultP>
                    <Slider
                        valueLabelDisplay="auto"
                        components={{
                            ValueLabel: ValueLabelComponent,
                        }}
                        aria-label="custom thumb label"
                        
                        value={angle}
                        marks={marks3}
                    />
                </ConteudoAnguloPlataforma>

                <SectionButtons>

                    <ButtonGoBack onClick={()=> onChangeAngle(angle - 50)}/>
                    <ButtonGoForward onClick={()=> onChangeAngle(angle + 50)}/>

                </SectionButtons>
            </SectionAnguloPlataforma>
            
            <ButtonStart>INICIAR</ButtonStart>
            
            <StyledFooter>
                Photo 360
            </StyledFooter>
        </MainContainer>
    )
}
