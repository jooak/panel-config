import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { fillObjArr} from './objects.js';

import { initializeIcons } from '@uifabric/icons';
import {
    Checkbox,
    DefaultButton,
    Icon,
    IconButton,
    Label,
    PrimaryButton,
    TextField,
    IIconProps,
} from 'office-ui-fabric-react';

initializeIcons();
const closeIcon: IIconProps = { iconName: 'ChromeClose' };
const skypeCircleCheckIcon: IIconProps = { iconName: 'SkypeCircleCheck' };

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            lineItems: [],
            textAreaNum: 1,
            headerItems:
                <div className="panelHeaderWrapper">
                    <h1 className="panelHeader">Panel header</h1>
                </div>,
        }
    }

    readLayers()
    {
        let layerList = [];

        for (let i = 0; i < document.querySelectorAll('#layerPanelTextArea').length; i++)
        {
            let strArr = document.querySelectorAll('#layerPanelTextArea')[i].value.split('\n');
            let objArr = [];

            fillObjArr(strArr, objArr); // fills objArray based on strings in strArr

            layerList.push(
                <div className='section'>
                    {objArr}
                </div>
            );
        }

        this.setState({lineItems: layerList});
    }

    addTextFields()
    {
        let testArr = [];

        for (let i = 0; i < this.state.textAreaNum; i++)
        {
            testArr.push(
                <div className="layerPanelSection">
                    <Label>New section</Label>
                    <TextField id="layerPanelTextArea" multiline rows={3} autoAdjustHeight />
                </div>
            )
        }

        return testArr;
    }
    
    // headerHasIcon(e) // temp
    // {   
    //     let testBool = e.target.getAttribute('aria-checked');

    //     if (testBool === 'false')
    //     {
    //         this.setState({
    //             headerItems:
    //                 <div className="panelHeaderWrapper">
    //                     <Icon iconName="SkypeCircleCheck" className="panelHeaderIcon" />
    //                     <h1 className="panelHeader">Panel header</h1>
    //                 </div>
    //         });
    //     }
    //     else
    //     {
    //         this.setState({
    //             headerItems:
    //                 <div className="panelHeaderWrapper">
    //                     <h1 className="panelHeader">Panel header</h1>
    //                 </div>
    //         });
    //     }
    // }

    render()
    {
        const onChange = function(
            ev: React.ChangeEvent<HTMLElement>,
            isChecked: boolean
            )
        {
            console.log('hello world!');

            if ({isChecked}.isChecked === true)
            {
                // this.setState({
                //     headerItems:
                //         <div className="panelHeaderWrapper">
                //             <Icon iconName="SkypeCircleCheck" className="panelHeaderIcon" />
                //             <h1 className="panelHeader">Panel header</h1>
                //         </div>
                // })
            }
            else
            {
                // this.setState({
                //     headerItems:
                //         <div className="panelHeaderWrapper">
                //             <h1 className="panelHeader">Panel header</h1>
                //         </div>
                // });
            }
        }

        return (
            <div className="wrapper">
                <div className="layerPanel">
                    <h1 className="panelHeader">Panel layout configurator</h1>
                    <p>Cheat sheet: checkbox(n), choicegroup(n), detailslist(n), dropdown, label, labelforlists, link(n), messagebar(n), paragraph(n), pivot(n), subhead, textfield, textfieldmulti, toggle</p>
                    <div className="panelHeaderControls">
                        <Checkbox 
                            label="Header has icon?"
                            // onChange={(e) => this.headerHasIcon(e)}
                            onChange={onChange}
                        />
                    </div>
                    {this.addTextFields()}
                    <div className="buttonWrapper">
                        <PrimaryButton
                            id="layerPanelSubmit"
                            text="Update"
                            allowDisabledFocus
                            className="accent"
                            onClick={(e) => {
                                this.readLayers()
                            }}
                        />
                        <DefaultButton
                            text="Add section"
                            onClick={(e) => {
                                this.setState({textAreaNum: this.state.textAreaNum + 1})
                            }}
                        />
                        <DefaultButton
                            text="Remove section"
                            onClick={(e) => {
                                if (this.state.textAreaNum > 1) { this.setState({textAreaNum: this.state.textAreaNum - 1}) }
                            }}
                        />
                    </div>
                </div>
                <div className="artboard">
                    <div className="panelWrapper">
                        <div className="panelNav">
                            <IconButton className="panelNavAction" iconProps={closeIcon} title="ChromeClose" ariaLabel="ChromeClose"/>
                        </div>
                        <div className="panelContent">
                            {this.state.headerItems}
                            {this.state.lineItems}
                        </div>
                        <div className="panelActions">
                            <div className="buttonWrapper">
                                <PrimaryButton text="Button" allowDisabledFocus />
                                <DefaultButton text="Button" allowDisabledFocus />
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);