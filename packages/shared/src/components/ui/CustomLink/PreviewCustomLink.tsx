import { Tabs, TabsContentOptionProps, TabsOptionProps } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import React, { Children } from 'react';
import { CustomLink } from './CustomLink';
import { CodePreview } from '../CodePreview';
import { customLinkPropsDocs } from './docs';
import { Typography } from '../Typography';


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
        <div>
            <h4 className="font-medium mb-2">Якорные ссылки:</h4>
            <div className="space-y-2">
                <CustomLink to="#section1" variant="primary">
                    Якорь с smooth scroll
                </CustomLink>
                <div className="text-xs text-muted">
                    Нажмите чтобы протестировать плавную прокрутку
                </div>
            </div>
        </div>

        <div>
            <h4 className="font-medium mb-2">NavLink (активное состояние):</h4>
            <div className="flex gap-4">
                <CustomLink to="/preview" nav variant="primary">
                    Preview (активно)
                </CustomLink>
                <CustomLink to="/other" nav variant="primary">
                    Other (неактивно)
                </CustomLink>
            </div>
            <div className="text-xs text-muted mt-1">
                NavLink автоматически добавляет класс .link-active
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
            <div   className="mb-10">
                <Typography variant='h3' > Варианты ссылок:</Typography>

                <CustomLink to="/сlickyLinkPage">Обо мне (default)</CustomLink>
                <br />
                <CustomLink to="/сlickyLinkPage" variant="primary">
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

            <div className="mb-10">
                <Typography variant='h3' >Якорные ссылки:</Typography>
                <div className="space-y-2">
                    <CustomLink to="#smootheControll"  variant="primary">
                        Якорь с smooth scroll
                    </CustomLink>
                    <div className="text-xs text-muted">
                        Нажмите чтобы протестировать плавную прокрутку
                    </div>
                </div>
            </div>


            <div>
                <Typography variant='h3' >NavLink (активное состояние):</Typography>

                <div >

                    <CustomLink
                        variant='primary'
                        to="/customStoryBook"
                        nav
                    >
                        Preview (активно)
                    </CustomLink>

                    <br />

                    <CustomLink
                        to="/сlickyLinkPage"
                        variant="primary">
                        Other (неактивно)
                    </CustomLink>
                </div>
                <div className="text-xs text-muted mt-1">
                    NavLink автоматически добавляет класс .link-active
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
                        {customLinkPropsDocs.map((prop) => (
                            <tr key={prop.prop} className="border-b">
                                <td className="py-2 pr-4 font-mono">{prop.prop}</td>
                                <td className="py-2 pr-4 font-mono">{prop.type}</td>
                                <td className="py-2 pr-4">{prop.defaultValue}</td>
                                <td className="py-2 pr-4 ">
                                    {prop.description}
                                    {prop.details && (
                                        <ul className="mt-1 space-y-0.5">
                                            {prop.details.map((detail, idx) => (
                                                <li key={idx} className="text-xs">
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </td>
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
            title={"Ссылки"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions} />
    )
}