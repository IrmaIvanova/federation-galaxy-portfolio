import { TabsContentOptionProps, TabsOptionProps } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import { Card } from './Card';
import React from 'react';
import { CodePreview } from '../CodePreview';
import { cardPropsDocs, codeCard } from './docs';
import { Container, Section, Grid, GridItem } from '../../Layout'




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
                <h2 className="text-2xl font-bold text-copy mb-6">Cards</h2>
                <Grid cols={1} md={2} lg={3} gap="lg">
                    <GridItem span={3}>
                        <Card padding="sm">
                            <h4 className="font-semibold text-copy mb-2">Small Padding</h4>
                            <p className="text-muted text-sm">Карточка с маленькими отступами</p>
                        </Card>
                    </GridItem>

                    <GridItem>
                        <Card padding="md">
                            <h4 className="font-semibold text-copy mb-2">Medium Padding</h4>
                            <p className="text-muted text-sm">Стандартная карточка с средними отступами</p>
                        </Card>
                    </GridItem>

                    <GridItem>
                        <Card padding="lg">
                            <h4 className="font-semibold text-copy mb-2">Large Padding</h4>
                            <p className="text-muted text-sm">Карточка с большими отступами для важного контента</p>
                        </Card>
                    </GridItem>
                </Grid>

            </Section>
            <Section className="mb-12">
                <h2 className="text-2xl font-bold text-copy mb-6">Cards</h2>
                <Grid cols={1} md={2} lg={3} gap="md" className="mb-8">
                    <Container>
                        <Card padding="sm">
                            <h4 className="font-semibold text-copy mb-2">Small Padding</h4>
                            <p className="text-muted text-sm">Карточка с маленькими отступами</p>
                        </Card>
                    </Container>

                    <Container>
                        <Card padding="md">
                            <h4 className="font-semibold text-copy mb-2">Medium Padding</h4>
                            <p className="text-muted text-sm">Стандартная карточка с средними отступами</p>
                        </Card>
                    </Container>

                    <Container>
                        <Card padding="lg">
                            <h4 className="font-semibold text-copy mb-2">Large Padding</h4>
                            <p className="text-muted text-sm">Карточка с большими отступами для важного контента</p>
                        </Card>
                    </Container>
                </Grid>
            </Section>
        </>
    },
    {
        value: 'code',
        children: <CodeBlock
            code={codeCard}
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
                        {cardPropsDocs.map((prop) => (
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


export const CardPreview: React.FC = () => {
    return (
        <CodePreview
            title={"Карточки"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}