export const buttonPropsDocs = [
  {
    prop: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Содержимое кнопки (текст, иконки и т.д.)',
    defaultValue: '-',
  },
 {
    prop: 'variant',
    type: "'primary' | 'secondary' | 'outline' | 'unstyled' | 'options'",
    required: false,
    description: `Вариант стилизации кнопки.\n
      • primary - основное действие\n
      • secondary - второстепенное действие\n
      • outline - контурная кнопка\n
      • unstyled - без стилей\n
      • options - требует родителя с классом group`,
    defaultValue: "'primary'",
  },
  {
    prop: 'size',
    type: "'sm' | 'md' | 'lg'",
    required: false,
    description: 'Размер кнопки. Влияет на padding и размер текста',
    defaultValue: "'md'",
  },
  {
    prop: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Отключает кнопку. Добавляет стили disabled и блокирует клики',
    defaultValue: 'false',
  },
  {
    prop: 'className',
    type: 'string',
    required: false,
    description: 'Дополнительные CSS классы для кастомизации',
    defaultValue: '-',
  },
  {
    prop: 'onClick',
    type: 'React.MouseEventHandler<HTMLButtonElement>',
    required: false,
    description: 'Обработчик клика по кнопке',
    defaultValue: '-',
  },
  {
    prop: 'type',
    type: "'button' | 'submit' | 'reset'",
    required: false,
    description: 'HTML атрибут type. Важен для форм',
    defaultValue: "'button'",
  },
];
