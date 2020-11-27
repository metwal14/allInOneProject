import React, { useCallback, useState } from 'react';
import { View} from 'react-native';
import Slider from 'rn-range-slider';
import Thumb from '../Slider/Thumb';
import Rail from '../Slider/Rail';
import RailSelected from '../Slider/RailSelected';
import Label from '../Slider/Label';

/*
props
unit- km,age etc (empty) string
maxValue- number(maxValue of the slider)
HighValue -number(highest Value of the slider),
 minValue -number(minValue of the slider)
 onValueChange- function
 */

const SliderScreen = ({ unit, maxValue, highValue, minValue, onValueChange }) => {
    const [min, setMin] = useState(minValue); //minValue
    const [max, setMax] = useState(maxValue); //maxValue

    const renderThumb = useCallback(() => <Thumb />, []); // to render the thumb of the slider
    const renderRail = useCallback(() => <Rail />, []); // to render the all range slider of the slider
    const renderRailSelected = useCallback(() => <RailSelected />, []);// to color change of the selected range of the slider
    const renderLabel = useCallback(value => <Label text={value} unit={unit} highValue={highValue} />, []); //// to render the label of the slider
    // on value change
    const handleValueChange = useCallback(onValueChange, []);

    return <View>
        <Slider
            min={min}
            max={max}
            step={1}
            disableRange={false} // to disable the range
            floatingLabel={false}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            onValueChanged={handleValueChange}
        />
    </View>;
};

export default SliderScreen;

