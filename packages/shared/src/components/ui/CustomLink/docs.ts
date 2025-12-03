export const customLinkPropsDocs = [
  {
    prop: 'to',
    type: 'string',
    required: true,
    description: 'URL для перехода. Для внешних ссылок используйте полный URL, для внутренних - относительный путь',
    defaultValue: '-',
  },
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Текст или содержимое ссылки',
    defaultValue: '-',
  },
  {
    prop: 'variant',
    type: "'default' | 'primary' | 'secondary' | 'muted'",
    required: false,
    description: 'Вариант стилизации ссылки. Primary использует акцентный цвет темы',
    defaultValue: "'default'",
  },
  {
    prop: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    description: 'Размер текста ссылки',
    defaultValue: "'md'",
  },
  {
    prop: 'underline',
    type: 'boolean',
    required: false,
    description: 'Показывать ли подчеркивание у ссылки',
    defaultValue: 'true',
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    description: 'Дополнительные CSS классы',
    defaultValue: '-',
  },
  {
    prop: 'external',
    type: 'boolean',
    required: false,
    description: 'Если true, ссылка откроется в новой вкладке (использует тег <a>)',
    defaultValue: 'false',
  },
];

export const customLinkExamples = [
  {
    title: 'Базовая внутренняя ссылка',
    code: `<CustomLink to="/about">Обо мне</CustomLink>`,
  },
  {
    title: 'Акцентная ссылка без подчеркивания',
    code: `<CustomLink 
  to="/projects"
  variant="primary"
  underline={false}
>
  Проекты
</CustomLink>`,
  },
  {
    title: 'Внешняя ссылка',
    code: `<CustomLink 
  to="https://github.com"
  external
  variant="secondary"
>
  GitHub
</CustomLink>`,
  },
  {
    title: 'Маленькая приглушенная ссылка',
    code: `<CustomLink 
  to="/contacts"
  variant="muted"
  size="sm"
>
  Контакты
</CustomLink>`,
  },
];