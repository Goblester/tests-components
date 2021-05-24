import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const onDoubleRangeChange = ([val1, val2]: Array<number>) => {
        setValue1(val1);
        setValue2(val2);
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <SuperDoubleRange
                    onChangeRange={onDoubleRangeChange}
                    value={[value1, value2]}
                    min={0}
                    max={200}
                    step={10}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
