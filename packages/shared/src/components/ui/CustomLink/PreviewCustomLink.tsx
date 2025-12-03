import { Tabs, TabsContentOptionProps, TabsOptionProps } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import React, { Children } from 'react';
import { CustomLink } from './CustomLink';
import { CodePreview } from '../CodePreview';
import { customLinkPropsDocs } from './docs';


const codeTabs = `import React from 'react';

import { CustomLink } from '@packages/shared/src';

const Example = () => (
    <div className="space-y-4">
        <CustomLink to="/about">Обо мне (default)</CustomLink>
        <br />
        <CustomLink to="/projects" variant="primary">
            Проекты (primary)
        </CustomLink>
        <br />
        <CustomLink
            to="https://github.com"
            external
            variant="secondary"
        >
            GitHub (external)
        </CustomLink>
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
            <div className="space-y-4">
                <CustomLink to="/about">Обо мне (default)</CustomLink>
                <br />
                <CustomLink to="/projects" variant="primary">
                    Проекты (primary)
                </CustomLink>
                <CustomLink to="/projects" nav variant="primary">
                    Проекты (primary)
                </CustomLink>
                <br />
                <CustomLink
                    to="https://github.com"
                    external
                    variant="secondary"
                >
                    GitHub (external)
                </CustomLink>
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
                        {customLinkPropsDocs.map((prop) => (
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


export const CustomLinkPreview: React.FC = () => {
    return (
        <CodePreview
            title={"Заголовки"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}