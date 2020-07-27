import React from 'react';

import { generateLorem } from './lorem.js';

import { 
    Checkbox,
    ChoiceGroup,
    DetailsList,
    Dropdown,
    Label,
    Link,
    Pivot,
    PivotItem,
    MessageBar,
    TextField,
    Toggle,
} from 'office-ui-fabric-react';

const getParenVal = function(str, defaultVal)
{
    if (str.includes('(') && str.includes(')') && !str.includes('()'))
    {   
        let targetVal = parseInt(/\(([^)]+)\)/.exec(str)[1]);

        if (targetVal !== null)
        {
            return targetVal;
        }
        else
        {
            return defaultVal;
        }
    }
    else
    {
        return defaultVal;
    }
}

export const fillObjArr = function(targetArr, outputArr)
{
    for (let i = 0; i < targetArr.length; i++)
    {
        if (targetArr[i].includes('checkbox'))
        {
            let options = [];
            let optionsNum = getParenVal(targetArr[i], 1);
            for (let i = 0; i < optionsNum; i++)
            {
                options.push(<Checkbox label="Checkbox" defaultChecked />);
            }
            outputArr.push(<div className="checkboxes">{options}</div>);
        }

        if (targetArr[i].includes('choicegroup'))
        {
            let options = [];
            let optionsNum = getParenVal(targetArr[i], 1);   
            for (let i = 0; i < optionsNum; i++)
            {
                options.push({ key: i, text: 'Option' })
            }
            outputArr.push(<div className="choicegroup"><ChoiceGroup defaultSelectedKey={0} options={options} /></div>);
        }

        if (targetArr[i].includes('detailslist'))
        {
            let items = [];
            let rowNum = getParenVal(targetArr[i], 8);

            for (let i = 0; i < rowNum; i++)
            {
                items.push({ key: i, name: 'Item ' + i, value: i, });
            }

            let columns =
            [
                { key: 'column1', name: 'Name', fieldName: 'name', }
            ];

            outputArr.push(<div className="detailslist"><DetailsList items={items} columns={columns} /></div>)
        }

        if (targetArr[i] === 'dropdown')
        {
            let options = [ { key: 0, text: 'Option 0' }, { key: 1, text: 'Option 1' }, { key: 2, text: 'Option 2' }, ];
            outputArr.push(<div className="dropdown"><Dropdown placeholder="Select an option" options={options} /></div>)
        }

        if (targetArr[i] === 'label')
        {
            outputArr.push(<div className="label"><Label>Label</Label></div>);
        }

        if (targetArr[i] === 'labelforlists')
        {
            outputArr.push(<div className="labelforlists"><Label>Label</Label></div>);
        }

        if (targetArr[i].includes('link'))
        {
            let options = [];
            let optionsNum = getParenVal(targetArr[i], 1);
            for (let i = 0; i < optionsNum; i++)
            {
                options.push(<Link>Link</Link>)
            }
            outputArr.push(<div className="links">{options}</div>);
        }

        if (targetArr[i].includes('messagebar'))
        {
            let wordCount = getParenVal(targetArr[i], 12);
            outputArr.push(<div className="messagebar"><MessageBar>{generateLorem(wordCount)}</MessageBar></div>);
        }

        if (targetArr[i].includes('paragraph'))
        {
            let wordCount = getParenVal(targetArr[i], 14);
            outputArr.push(<p>{generateLorem(wordCount)}</p>);
        }

        if (targetArr[i].includes('pivot'))
        {
            let options = [];
            let optionsNum = getParenVal(targetArr[i], 3);
            for (let i = 0; i < optionsNum; i++)
            {
                options.push(<PivotItem headerText="Pivot"></PivotItem>);
            }
            outputArr.push(<div className="pivots"><Pivot>{options}</Pivot></div>)
        }

        if (targetArr[i] === 'subhead')
        {
            outputArr.push(<h2 className="subhead">Sub header text</h2>)
        }

        if (targetArr[i] === 'textfield')
        {
            outputArr.push(<div className="textfield"><TextField placeholder='Enter a description' /></div>);
        }

        if (targetArr[i] === 'textfieldmulti')
        {
            outputArr.push(<div className="textfieldmulti"><TextField multiline rows={4} placeholder='Enter a description' resizable={false} /></div>);
        }

        if (targetArr[i] === 'toggle')
        {
            outputArr.push(<div className="toggle"><Toggle onText="On" offText="Off" /></div>);
        }
    }
}