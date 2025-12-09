import { Tabs, TabsContentOptionProps, TabsOptionProps } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import { Button } from './Button';
import React, { Children } from 'react';
import { CodePreview } from '../CodePreview';
import { buttonPropsDocs } from './docs';
import { Typography } from '../Typography';
import { Card } from '../Card';


const codeTabs = `import React from 'react';

import { Button, Card, Typography } from '@packages/shared/src';

const Example = () => (
    <div className="space-y-6">
        <div>
            <h3 className="text-lg font-semibold text-copy mb-3">Variants</h3>
            {/* родительский div */}
            <div className="flex gap-3 flex-wrap group">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="unstyled">Unstyled</Button>

                {/* вариант options  */}
                <div className="relative">
                    <div className="absolute -top-6 left-0 text-xs text-muted opacity-30 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Показывается при hover
                    </div>
                    <div className="group-hover:opacity-100 opacity-10 transition-opacity duration-300">
                        <Button variant="options">Options</Button>
                    </div>
                </div>

            </div>
        </div>
        {/* пример кнопки в связке с карточкой */}
        <div>
            <h4 className="font-medium mb-2">* Вариант "options" (требует group):</h4>
                <Card className="group relative">
                    <Typography variant='h5'>Карточка с скрытой кнопкой</Typography>
                    <p className="text-sm text-gray-600 mb-4">Наведите на карточку чтобы увидеть кнопку</p>
                    <Button
                        variant="options"
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        ✏️ Редактировать
                    </Button>
                </Card>
                <p className="text-xs text-muted mt-2">
                    Кнопка появляется только при наведении на родительский элемент с классом "group"
                </p>
            <p className="text-xs text-muted mt-2">
                Кнопка появляется только при наведении на родительский элемент с классом "group"
            </p>
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
                    {/* родительский div */}
                    <div className="flex gap-3 flex-wrap group">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="unstyled">Unstyled</Button>

                        {/* вариант options  */}
                        <div className="relative">
                            <div className="absolute -top-6 left-0 text-xs text-muted opacity-30 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                Показывается при hover
                            </div>
                            <div className="group-hover:opacity-100 opacity-10 transition-opacity duration-300">
                                <Button variant="options">Options</Button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* пример кнопки в связке с карточкой */}
                <div>
                    <h4 className="font-medium mb-2">* Вариант "options" (требует group):</h4>
                    <Card className="group relative">
                        <Typography variant='h5'>Карточка с скрытой кнопкой</Typography>
                        <p className="text-sm text-gray-600 mb-4">Наведите на карточку чтобы увидеть кнопку</p>
                        <Button
                            variant="options"
                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            ✏️ Редактировать
                        </Button>
                    </Card>
                    <p className="text-xs text-muted mt-2">
                        Кнопка появляется только при наведении на родительский элемент с классом "group"
                    </p>
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
                                <td className="py-2 pr-4 whitespace-pre-line ">{prop.description}</td>
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
            title={"Кнопки"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}