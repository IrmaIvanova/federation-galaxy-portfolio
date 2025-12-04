export const sectionPropsDocs = [
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Содержимое секции. Обычно включает заголовок и контент',
    defaultValue: '-',
  },
  {
    prop: 'padding',
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
    required: false,
    description: 'Вертикальные отступы секции. Контролирует пространство вокруг контента',
    defaultValue: "'md'",
  },
  {
    prop: 'background',
    type: "'default' | 'muted' | 'primary' | 'secondary'",
    required: false,
    description: 'Фон секции. Muted - приглушенный фон, Primary/Secondary - акцентные фоны',
    defaultValue: "'default'",
  },
  {
    prop: 'as',
    type: "'section' | 'div' | 'article'",
    required: false,
    description: 'HTML тег для рендеринга. Section для семантических разделов, article для независимого контента',
    defaultValue: "'section'",
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    description: 'Дополнительные CSS классы для кастомизации секции',
    defaultValue: '-',
  },
];

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