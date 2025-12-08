import React, { Children } from 'react';
import { CodeBlock } from '../../ui/CodeBlock/CodeBlock';
import { Typography } from '../../ui/Typography/Typography';
import { gridItemPropsDocs, gridPropsDocs } from './docs';

import { GridItem, Grid } from './index';

import { Card, CodePreview, TabsContentOptionProps, TabsOptionProps } from '../../ui';
import { Section } from '../Section';


export const codeGrid = `import React from 'react';

import { CodeBlock, CodePreview, Tabs, TabsContentOptionProps, TabsOptionProps }  from '@packages/shared/src;
import { Section } from '@packages/shared/src;
import { Grid, GridItem } from '@packages/shared/src;

const Example = () => (
return   <Section className="mb-12">
            <Typography>Grid System</Typography>
            <Grid cols={1} md={2} lg={3} gap="md">
                {/* <Grid cols={2} md={4} gap="md"> */}
                {[1, 2, 3, 4].map(num => (
                    <GridItem key={num}>
                        <Card padding='sm'>
                            <span className="text-accent font-semibold">Item {num}</span>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </Section>
          
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
            <Section className="mb-12">
                    <Typography>Grid System</Typography>
                    <Grid cols={1} md={2} lg={3} gap="md">
                        {/* <Grid cols={2} md={4} gap="md"> */}
                        {[1, 2, 3, 4].map(num => (
                            <GridItem key={num}>
                                <Card padding='sm'>
                                    <span className="text-accent font-semibold">Item {num}</span>
                                </Card>
                            </GridItem>
                        ))}
                    </Grid>
            </Section>
        </>
    },
    {
        value: 'code',
        children: <CodeBlock

            code={codeGrid}
            language="tsx"
        />
    },
    {
        value: 'props',
        children: <> <div className="p-4">
            <h4 className="font-semibold mb-4">Доступные пропсы Grid:</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="border-b">
                            {["Prop", "Type", "Default", "Description"].map((tableName: string) => <th className="text-left py-2">{tableName}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {gridPropsDocs.map((prop) => (
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
            <div className="p-4">
                <h4 className="font-semibold mb-4">Доступные пропсы  GridItem:</h4>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                {["Prop", "Type", "Default", "Description"].map((tableName: string) => <th className="text-left py-2">{tableName}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {gridItemPropsDocs.map((prop) => (
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
        </>
    },
]


export const GridPreview: React.FC = () => {
    return (
        <CodePreview
            title={"Сетка"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}