import React, {ChangeEvent} from 'react';
import styles from './SuperDoubleRange.module.css';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
    min?: number,
    max?: number,
    step?: number,
    disabled?: boolean
}


export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled
    }
) => {

    const handleChange = (e: ChangeEvent<{}>, newValue: number | number[]) => {
        if (typeof newValue === 'object') {
            onChangeRange && onChangeRange(newValue)
        }
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const position = e.currentTarget.dataset.position;

        if (position) {
            if (value) {
                if (position === 'left') {
                    if (e.currentTarget.valueAsNumber <= value[1]) {
                        handleChange(e, [Number(e.currentTarget.value), value[1]]);
                    }
                } else {
                    if (e.currentTarget.valueAsNumber >= value[0]) {
                        handleChange(e, [value[0], Number(e.currentTarget.value)]);
                    }
                }
            }
        }

    }

    const maxValue = max ? max : 100;
    const minValue = min ? min : 0;


    return (
        <div className={styles.doubleRange}>
            <span>{minValue}</span>
            <div className={styles.rangeSlider}>
                <input type={'range'}
                       data-position={'left'}
                       value={value ? value[0] : 0}
                       min={minValue}
                       max={maxValue}
                       onChange={onInputChange}
                       step={step}
                       disabled={disabled}
                />
                <input type={'range'}
                       data-position={'right'}
                       value={value ? value[1] : 100}
                       min={minValue}
                       max={maxValue}
                       onChange={onInputChange}
                       step={step}
                       disabled={disabled}
                />

            </div>
            <span>{maxValue}</span>
        </div>

    )
}
