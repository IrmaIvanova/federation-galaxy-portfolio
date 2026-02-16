import { TabsContentOptionProps, TabsOptionProps } from '../Tabs';
import { CodeBlock } from '../CodeBlock';
import { Dropdown } from './DropDown';
import React from 'react';
import { CodePreview } from '../CodePreview';
import { dropdownPropsDocs, codeDropdown } from './docs';
import { Container, Section, Grid, GridItem } from '../../Layout';
import { Card } from '../Card';

const tabsOptions: TabsOptionProps[] = [
    { value: 'preview', label: 'Preview' },
    { value: 'code', label: 'Code' },
    { value: 'props', label: 'Props' }
];

// Иконки для примеров
const UserIcon = () => <span><UserIcon /></span>;
const SettingsIcon = () => <span><SettingsIcon /></span>;
const LogoutIcon = () => <span><LogoutIcon /></span>;

const tabsPreviewContentOptions: TabsContentOptionProps[] = [
    {
        value: 'preview',
        children: (
            <>
                <Section className="mb-12">
                    <h2 className="text-2xl font-bold text-copy mb-6">Базовое меню</h2>
                    <Grid cols={2} md={4} gap="lg">
                        <GridItem>
                            <Container>
                                <div className="flex justify-center p-4  rounded-lg">
                                    <Dropdown
                                        items={[
                                            { label: 'Редактировать', onClick: () => console.log('edit') },
                                            { label: 'Дублировать', onClick: () => console.log('duplicate') },
                                            { label: 'Удалить', variant: 'danger', onClick: () => console.log('delete') }
                                        ]}
                                    />
                                </div>
                                <p className="text-center text-sm text-muted mt-2">По умолчанию</p>
                            </Container>
                        </GridItem>

                        <GridItem>
                            <Container>
                                <div className="flex justify-center p-4  rounded-lg">
                                    <Dropdown
                                        align="left"
                                        items={[
                                            { label: 'Редактировать' },
                                            { label: 'Дублировать' },
                                            { label: 'Удалить', variant: 'danger' }
                                        ]}
                                    />
                                </div>
                                <p className="text-center text-sm text-muted mt-2">Выравнивание слева</p>
                            </Container>
                        </GridItem>
                    </Grid>
                </Section>
                <Section className="mb-12">
                    <h2 className="text-2xl font-bold text-copy mb-6">Размер меню</h2>
                    <Grid cols={2} md={4} gap="lg">

                        <GridItem>
                            <Container>
                                <div className="flex justify-center p-4 rounded-lg">
                                    <Dropdown
                                        size="sm"
                                        items={[
                                            { label: 'Маленькое меню' },
                                            { label: 'Пункт 2' }
                                        ]}
                                    />
                                </div>
                                <p className="text-center text-sm text-muted mt-2">Размер SM</p>
                            </Container>
                        </GridItem>

                        <GridItem>
                            <Container>
                                <div className="flex justify-center p-4  rounded-lg">
                                    <Dropdown
                                        size="lg"
                                        items={[
                                            { label: 'Большое меню' },
                                            { label: 'Пункт 2' }
                                        ]}
                                    />
                                </div>
                                <p className="text-center text-sm text-muted mt-2">Размер LG</p>
                            </Container>
                        </GridItem>
                    </Grid>
                </Section>

                <Section className="mb-12">
                    <h2 className="text-2xl font-bold text-copy mb-6">В реальном интерфейсе</h2>
                    <Grid cols={1} md={2} gap="lg">
                        <GridItem>
                            <Container className='group' >
                                <Card >
                                    {/* <div className="p-6 border border-light-gray-200 dark:border-dark-gray-700 rounded-lg bg-light-background-muted dark:bg-dark-background-muted"> */}
                                    <div className="flex  justify-between items-center">
                                        <h4 className="font-semibold">Карточка проекта</h4>
                                        <Dropdown
                                            variant='options'
                                            items={[
                                                { label: 'Открыть', icon: <span>📂</span> },
                                                { label: 'Редактировать', icon: <span>✏️</span> },
                                                { label: 'Архивировать', icon: <span>📦</span> },
                                                { label: 'Удалить', icon: <span>🗑️</span>, variant: 'danger' }
                                            ]}
                                        />
                                    </div>
                                    <p className="text-sm text-muted mt-2">Исчезающее выпадающее меню отображается при наведении на карточку.</p>
                                    {/* </div> */}
                                </Card>
                            </Container>
                        </GridItem>

                        <GridItem>
                            <Container >
                                <Card >
                                    {/* <div className="p-6 border border-light-gray-200 dark:border-dark-gray-700 rounded-lg bg-light-background-muted dark:bg-dark-background-muted"> */}
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-semibold">Настройки профиля</h4>
                                        <Dropdown
                                            variant='unstyled'
                                            items={[
                                                { label: 'Редактировать профиль', icon: <span>👤</span> },
                                                { label: 'Сменить пароль', icon: <span>🔒</span> },
                                                { label: 'Выйти', icon: <span>🚪</span>, variant: 'danger' }
                                            ]}
                                        />
                                    </div>
                                    <p className="text-sm text-muted mt-2">Выпадающее меню отображается всегда.</p>
                                    {/* </div> */}
                                </Card>
                            </Container>
                        </GridItem>
                    </Grid>
                </Section>
            </>
        )
    },
    {
        value: 'code',
        children: (
            <CodeBlock
                code={codeDropdown}
                language="tsx"
            />
        )
    },
    {
        value: 'props',
        children: (
            <div className="p-4">
                <h4 className="font-semibold mb-4">Доступные пропсы:</h4>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                {["Prop", "Type", "Default", "Description"].map((tableName: string) => (
                                    <th key={tableName} className="text-left py-2 px-4">{tableName}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dropdownPropsDocs.map((prop) => (
                                <tr key={prop.prop} className="border-b align-top">
                                    <td className="py-2 px-4 font-mono">{prop.prop}</td>
                                    <td className="py-2 px-4 font-mono whitespace-pre-line">{prop.type}</td>
                                    <td className="py-2 px-4">{prop.defaultValue}</td>
                                    <td className="py-2 px-4">
                                        {prop.description}
                                        {prop.details && (
                                            <ul className="mt-1 text-xs space-y-0.5 list-disc list-inside">
                                                {prop.details.map((detail, idx) => (
                                                    <li key={idx}>{detail}</li>
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
        )
    }
];

export const DropdownPreview: React.FC = () => {
    return (
        <CodePreview
            title={"Выпадающее меню (Dropdown)"}
            defaultValue="preview"
            options={tabsOptions}
            contentOptions={tabsPreviewContentOptions}
        />
    );
};