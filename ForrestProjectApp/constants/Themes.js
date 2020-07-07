
import Colors from '../constants/Colors';

export const getColor1 = (isLight) => {
    return isLight ? Colors.light4 : Colors.dark1;
};
export const getColor2 = (isLight) => {
    return isLight ? Colors.light3 : Colors.dark2;
};
export const getColor3 = (isLight) => {
    return isLight ? Colors.light2 : Colors.dark3;
};
export const getColor4 = (isLight) => {
    return isLight ? Colors.light1 : Colors.dark4;
};
export const getColor5 = (isLight) => {
    return isLight ? Colors.light4RGBa : Colors.dark4RGB;
};