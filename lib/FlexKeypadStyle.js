'use strict';

exports.__esModule = true;
exports.GetBackdropStyle = GetBackdropStyle;
exports.GetModelStyle = GetModelStyle;
exports.flexContainer = flexContainer;
exports.flexItem = flexItem;
exports.SetModalStyle = SetModalStyle;
var cColors = exports.cColors = {
    crBackground: '#D5EEF7'
};
var textInput = exports.textInput = {

    width: '100%',
    height: '100%',
    fontSize: 'large',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: 'none'
};

var btn = exports.btn = {

    width: '100%',
    height: '100%',
    background: '#fff',
    fontSize: 'large'
};
var btnCircle = exports.btnCircle = {

    width: '100%',
    height: '100%',
    background: '#fff',
    fontSize: 'large',
    border: 'none',
    //width: '30px',
    //height: '30px',
    textAlign: 'center',
    padding: '6px 0',
    //fontSize: '12px',
    lineHeight: '1.42',
    borderRadius: '50%'
};
function GetBackdropStyle() {

    return {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    };
}
function GetModelStyle() {

    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    };
}
function flexContainer(display, align, backColor) {
    return {

        display: display,
        justify: 'spaceAround',
        alignItems: align,
        alignContent: align,
        background: backColor

    };
}
function flexItem(height, width) {

    return {
        flex: 1,
        margin: '10px',
        height: height,
        width: width

    };
}
function SetModalStyle(width, height) {
    return {

        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -30%)',
        width: width,
        height: height
    };
}