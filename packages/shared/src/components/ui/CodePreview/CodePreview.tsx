import { Tabs, TabsProps } from '../Tabs';

import React from 'react';
import { Container, Section } from '../../Layout';
import { Typography } from '../Typography';

export interface CodePreviewProps extends TabsProps {
    title?: string | React.ReactNode
}


export const CodePreview: React.FC<CodePreviewProps> = ({
    title,
    defaultValue,
    contentOptions,
    options
}) => {
    return <Container padding="none" className="mb-12">
        {title && typeof title === "string" ? <Typography variant={"h2"} children={title} /> : title}

        <Tabs
            defaultValue={defaultValue}
            options={options}
            contentOptions={contentOptions}
        />
    </Container>
}