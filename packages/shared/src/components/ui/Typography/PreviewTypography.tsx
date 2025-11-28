import { Tabs, TabsContentOptionProps, TabsOptionProps } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import React, { Children } from 'react';
import { Typography } from './Typography';
import { CodePreview } from '../CodePreview';


const codeTabs = `import { Tabs } from '../Tabs';
import React from 'react';

import { Typography } from '@packages/shared';

const Example = () => (
  <div>
   <Typography variant="h1">Заголовок 1</Typography>
    <Typography variant="h2">Заголовок 2</Typography>
    <Typography variant="h3">Заголовок 3</Typography>
    <Typography variant="h4">Заголовок 4</Typography>
    <Typography variant="p">Обычный текст </Typography>
    <Typography variant="small">Мелкий текст</Typography>
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
            <Typography variant="h1">Заголовок 1</Typography>
            <Typography variant="h2">Заголовок 2</Typography>
            <Typography variant="h3">Заголовок 3</Typography>
            <Typography variant="h4">Заголовок 4</Typography>
            <Typography variant="p">Обычный текст </Typography>
            <Typography variant="small">Мелкий текст</Typography>
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
            <h4 className="font-semibold mb-2">Доступные пропсы:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
                <li><code>variant</code> - вариант отображения</li>
            </ul>
        </div>
    },
]


export const TypographyPreview: React.FC = () => {
    return (
        <CodePreview
            title={"Заголовки"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}