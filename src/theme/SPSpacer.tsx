import React from 'react';
import { View, ViewProps } from 'react-native';
import { SPColors } from './SPTheme';

interface PWSpaceProps extends ViewProps {
    width?: number | string;
    height?: number;
    color?: string;
}

const SPSpacer: React.FC<PWSpaceProps> = ({
    height = 10,
    width = 10,
    color = SPColors.transparent
}) => {
    return <View style={{
        height: height,
        width: width,
        backgroundColor: color
    }} />;
};


export default SPSpacer;
