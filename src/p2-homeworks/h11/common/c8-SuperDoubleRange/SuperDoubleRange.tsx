import React, {ChangeEvent} from 'react';
import {createStyles, makeStyles, Slider, Theme} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
    min?: number,
    max?: number,
    step?: number,
    disabled?: boolean
}



const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled
    }
) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                width: max,
                marginLeft: 20
            },
            margin: {
                height: theme.spacing(3),
            },
        }),
    );


    const classes = useStyles();
    const handleChange = (e: ChangeEvent<{}>, newValue: number | number[]) => {
        if (typeof newValue === 'object') {
            onChangeRange && onChangeRange(newValue)
        }
    }
    const maxValue = max?max:100;
    const minValue = min?min:0;

    const marks = [
        {
            value: minValue,
            label: `${minValue}`,
        },
        {
            value: maxValue,
            label: `${maxValue}`
        },
    ]

    return (
        <div className={classes.root}>
            <Slider value={value}
                    onChange={handleChange}
                    step={step}
                    min={min}
                    max={max}
                    disabled={disabled}
                    marks={marks}
            />
        </div>
    )
}

export default SuperDoubleRange;
