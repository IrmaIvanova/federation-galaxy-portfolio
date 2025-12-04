export const cardPropsDocs = [
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Содержимое карточки. Любой React-элемент или текст',
    defaultValue: '-',
  },
  {
    prop: 'padding',
    type: "'none' | 'sm' | 'md' | 'lg'",
    required: false,
    description: 'Внутренние отступы карточки. Контролирует визуальную плотность контента',
    defaultValue: "'md'",
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    description: 'Дополнительные CSS классы для кастомизации внешнего вида карточки',
    defaultValue: '-',
  },
];

export const codeCard = `import React from 'react';

import {Container, Section, CodeBlock} from '@packages/shared/src';

const Example = () => (
   <>
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
    </div>
          
);
`