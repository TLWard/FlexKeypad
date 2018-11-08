import React, { Component } from 'react';

import {GetBackdropStyle,
        SetModalStyle,
        flexContainer,
        flexItem,
        cColors,
        textInput,
        btn,
        btnCircle
} from './FlexKeypadStyle'

export class FlexKeypad extends React.Component{

    constructor(props) {
        super(props);
        this.state = { numValue : '' }
    }
    componentWillReceiveProps() {

        this.SetState(0);
    }
    SetState( numValue ) {

        this.setState({ numValue: numValue });
    }
    closeModal() {
          
        let minutes = this.state.numValue;
        if (minutes === "")
            minutes = 0;

        this.SetState(minutes);

        //Call to parent function.
        if( this.props.close !== undefined )
            this.props.close(minutes);
    }
    handleEnter(value) {

        if (this.state.numValue === 0)
            this.SetState(value.toString());
        else
            this.SetState(this.state.numValue + value.toString());
    };
    handleBack(value) {

        if (this.state.numValue !== 0) {
            let valueNew = this.state.numValue.substring(0, this.state.numValue.length - 1);
            this.SetState(valueNew);
        }
    };
    GetSize() {

        let btnW = this.props.width * .32;
        let btnH = this.props.height * .10;

        let ph = .50;
        var pw = .50;
        if (this.props.width > 1000) {

            ph = .20;
            pw = .20;
        }

        let s = { width: pw, height: ph, btnWidth:  btnW, btnHeight: btnH};
        return s;
    }

    GetInputItem(value, sFlexItem) {

        return <div style={sFlexItem}>
            <button className="btn btn-transparent center" style={btnCircle} onClick={this.handleEnter.bind(this, value )}>{value}</button></div>
    }
    render() {

        if (this.props.open === false)
            return null
        else { 
            
            let s = this.GetSize();
            const sFlexItem = flexItem(s.btnHeight, s.btnWidth)
            const iFlexItem = flexItem(s.btnHeight * .50, s.btnWidth )

            return (
                  
                <div className="backdrop" style={GetBackdropStyle()}>
                    <div style={SetModalStyle(this.props.width * s.width, this.props.height * s.height)} >
                        <div style={flexContainer('flex', 'center', cColors.crBackground)}>
                            <div style={iFlexItem}><input id="numValue" style={textInput} value={this.state.numValue} /></div>
                        </div>
                        <div style={flexContainer('flex', 'center', cColors.crBackground)}>
                            {this.GetInputItem(1, sFlexItem)}
                            {this.GetInputItem(2, sFlexItem)}
                            {this.GetInputItem(3, sFlexItem)}
                        </div>
                        <div style={flexContainer('flex', 'center', cColors.crBackground)}>
                            {this.GetInputItem(4, sFlexItem)}
                            {this.GetInputItem(5, sFlexItem)}
                            {this.GetInputItem(6, sFlexItem)}
                        </div>
                        <div style={flexContainer('flex', 'center', cColors.crBackground)}>
                            {this.GetInputItem(7, sFlexItem)}
                            {this.GetInputItem(8, sFlexItem)}
                            {this.GetInputItem(9, sFlexItem)}
                        </div>
                        <div style={flexContainer('flex', 'center', cColors.crBackground)}>
                            <div style={sFlexItem} >
                                <button className="btn btn-transparent center" style={btnCircle}
                                    onClick={this.closeModal.bind(this)}><span className="glyphicon glyphicon-ok"></span>
                                </button></div>
                            {this.GetInputItem(0, sFlexItem)}
                            <div style={sFlexItem}>
                                <button className="btn btn-transparent center" style={btnCircle}
                                    onClick={this.handleBack.bind(this)}><span className="glyphicon glyphicon-chevron-left"></span></button>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }
    }
}