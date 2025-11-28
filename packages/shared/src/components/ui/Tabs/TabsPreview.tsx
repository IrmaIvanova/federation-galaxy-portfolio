import { Tabs, TabsContentOptionProps, TabsOptionProps } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import React, { Children } from 'react';
import { CodePreview } from '../CodePreview';


const codeTabs = `import { Tabs } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import React from 'react';



export interface TabsPreviewProps { }


const tabsPreviewOptions: TabsOptionProps[] = [
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2' },
    { value: 'tab3', label: 'Tab 3', disabled: true }
]



const tabsContentOptions: TabsContentOptionProps[] = [
    { value: 'tab1', children: 'Tab 1 контент' },
    { value: 'tab2', children: 'Tab 2 контент' },

]



export const TabsPreview: React.FC<TabsPreviewProps> = ({ }) => {
    return <section className="mb-12">
        <h2 className="text-2xl font-bold text-copy mb-6">Tabs</h2>

        <Tabs
            defaultValue="preview"
            options={tabsPreviewOptions}
            contentOptions={tabsContentOptions}
        >

        </Tabs>
    </section>
}`



const tabsOptions: TabsOptionProps[] = [
    { value: 'preview', label: 'Preview' },
    { value: 'code', label: 'Code' },
    { value: 'props', label: 'Props' }
]

const tabsPreviewOptions: TabsOptionProps[] = [
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2' },
    { value: 'tab3', label: 'Tab 3', disabled: true }
]



const tabsContentOptions: TabsContentOptionProps[] = [
    { value: 'tab1', children: 'Tab 1 контент' },
    { value: 'tab2', children: 'Tab 2 контент' },

]


const tabsPreviewContentOptions: TabsContentOptionProps[] = [
    {
        value: 'preview',
        children: <Tabs
            defaultValue="tab1"
            options={tabsPreviewOptions}
            contentOptions={tabsContentOptions}
        >
        </Tabs>
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
                <li><code>defaultValue</code> - начальная активная вкладка</li>
                <li><code>value</code> - уникальное значение вкладки</li>
                <li><code>disabled</code> - вкладка недоступна</li>
                <li><code>options</code> - массив опций для отображаения вкладок</li>
                <li><code>contentOptions</code> - массив опция контента, для отображения контента вкладок </li>
            </ul>
        </div>
    },
]


export const TabsPreview: React.FC = () => {
    return (
        <CodePreview
            title={"Вкладки"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}