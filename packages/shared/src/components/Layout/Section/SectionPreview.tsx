import React, { Children } from 'react';
import { CodeBlock } from '../../ui';
import { sectionPropsDocs } from './docs';

import { Section } from './Section';
import { CodePreview, TabsContentOptionProps, TabsOptionProps } from '../../ui';


export const codeSection = `import React from 'react';

import { CodeBlock, CodePreview, Tabs, TabsContentOptionProps, TabsOptionProps }  from '@packages/shared/src;
import { Section } from '@packages/shared/src;
import { Grid, GridItem } from '@packages/shared/src;

const Example = () => (
   return  <Section className="mb-12">
                   <h2 className="text-2xl font-bold text-copy mb-6">Layout Components</h2>
   
                   <div className="space-y-8">
                       {/* Section Backgrounds */}
                       <div>
                           <h3 className="text-lg font-semibold text-copy mb-4">Section Backgrounds</h3>
                           <Section background="primary" padding="md" className="rounded-lg mb-4">
                               <p className="text-accent text-center text-copy dark text-accent">Primary Background Section</p>
                           </Section>
                           <Section background="muted" padding="md" className="rounded-lg">
                               <p className="text-center text-copy">Muted Background Section</p>
                           </Section>
                       </div>
   
                   </div>
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

                <div className="space-y-8">
                    {/* Section Backgrounds */}
                    <div>
                        <h3 className="text-lg font-semibold text-copy mb-4">Section Backgrounds</h3>
                        <Section background="primary" padding="md" className="rounded-lg mb-4">
                            <p className="text-accent text-center text-copy dark text-accent">Primary Background Section</p>
                        </Section>
                        <Section background="muted" padding="md" className="rounded-lg">
                            <p className="text-center text-copy">Muted Background Section</p>
                        </Section>
                    </div>


                </div>
            </Section>
        </>
    },
    {
        value: 'code',
        children: <CodeBlock

            code={codeSection}
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
                        {sectionPropsDocs.map((prop) => (
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


export const SectionPreview: React.FC = () => {
    return (
        <CodePreview
            title={"Секция"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}