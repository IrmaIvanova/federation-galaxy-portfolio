import { Tabs, TabsContentOptionProps, TabsOptionProps } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import { Button } from './Button';
import React, { Children } from 'react';
import { CodePreview } from '../CodePreview';
import { buttonPropsDocs } from './docs';


const codeTabs = `import React from 'react';

import { Button } from '@packages/shared/src';

const Example = () => (
    <div className="space-y-6">
        <div>
            <h3 className="text-lg font-semibold text-copy mb-3">Variants</h3>
            <div className="flex gap-3 flex-wrap">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
            </div>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-copy mb-3">Sizes</h3>
            <div className="flex gap-3 flex-wrap items-center">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
            </div>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-copy mb-3">States</h3>
            <div className="flex gap-3 flex-wrap">
                <Button disabled>Disabled</Button>
                <Button variant="primary" disabled>Disabled Primary</Button>
            </div>
        </div>
    </div>
          
);
`


const tabsOptions: TabsOptionProps[] = [
    { value: 'preview', label: 'Preview' },
    { value: 'code', label: 'Code' },
    { value: 'props', label: 'Props' }
]


const tabsPreviewContentOptions: TabsContentOptionProps[] = [
    {
        value: 'preview',
        children: <>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-copy mb-3">Variants</h3>
                    <div className="flex gap-3 flex-wrap">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-copy mb-3">Sizes</h3>
                    <div className="flex gap-3 flex-wrap items-center">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-copy mb-3">States</h3>
                    <div className="flex gap-3 flex-wrap">
                        <Button disabled>Disabled</Button>
                        <Button variant="primary" disabled>Disabled Primary</Button>
                    </div>
                </div>
            </div>
        </>
    },
    {
        value: 'code',
        children: <CodeBlock
            code={codeTabs}
            language="tsx"
        />
    },
    {
        value: 'props',
        children: <div className="p-4">
            <h4 className="font-semibold mb-4">Доступные пропсы:</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="border-b">
                            {["Prop", "Type", "Default", "Description"].map((tableName: string) => <th className="text-left py-2">{tableName}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {buttonPropsDocs.map((prop) => (
                            <tr key={prop.prop} className="border-b">
                                <td className="py-2 pr-4 font-mono">{prop.prop}</td>
                                <td className="py-2 pr-4 font-mono">{prop.type}</td>
                                <td className="py-2 pr-4">{prop.defaultValue}</td>
                                <td className="py-2 pr-4 ">{prop.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    },
]


export const ButtonPreview: React.FC = () => {
    return (
        <CodePreview
            title={"Заголовки"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}