export const codeDropdown = `import { Dropdown } from '@packages/shared';

const Example = () => {
  return (
    <Dropdown
      items={[
        { label: 'Редактировать', onClick: () => edit() },
        { label: 'Дублировать', onClick: () => duplicate() },
        { label: 'Удалить', variant: 'danger', onClick: () => remove() }
      ]}
    />
  );
};`;

export const dropdownPropsDocs = [
    {
        prop: 'items',
        type: 'DropdownItem[]',
        required: true,
        description: 'Массив пунктов выпадающего меню. Каждый элемент может содержать:',
        details: [
            '• label: string - текст пункта меню',
            '• onClick?: () => void - обработчик клика',
            '• icon?: React.ReactNode - иконка слева от текста',
            '• disabled?: boolean - заблокировать пункт',
            '• variant?: "default" | "danger" - вариант оформления'
        ],
        defaultValue: '-',
    },
    {
        prop: 'align',
        type: "'left' | 'right'",
        required: false,
        description: 'Выравнивание выпадающего меню относительно кнопки',
        defaultValue: "'right'",
    },
    {
        prop: 'size',
        type: "'sm' | 'md' | 'lg'",
        required: false,
        description: 'Размер кнопки с иконкой',
        defaultValue: "'md'",
    },
    {
        prop: 'variant',
        type: "'options' | 'unstyled'",
        required: false,
        description: `Вариант стилизации кнопки`,
        details: [
            '• unstyled - без стилей',
            "• options - требует родителя с классом group"
        ],
        defaultValue: "unstyled",
    },
    {
        prop: 'icon',
        type: 'React.ReactNode',
        required: false,
        description: 'Кастомная иконка для кнопки. По умолчанию используется иконка с тремя точками (вертикальное меню)',
        defaultValue: 'default menu icon',
    },
    {
        prop: 'className',
        type: 'string',
        required: false,
        description: 'Дополнительные CSS классы для контейнера',
        defaultValue: '-',
    },
    {
        prop: 'defaultOpen',
        type: 'boolean',
        required: false,
        description: 'Открыто ли меню по умолчанию',
        defaultValue: 'false',
    },
    {
        prop: 'onOpenChange',
        type: '(open: boolean) => void',
        required: false,
        description: 'Колбэк, вызываемый при открытии/закрытии меню',
        defaultValue: '-',
    },
];

export const dropdownExamples = [
    {
        title: 'Базовое меню',
        code: `<Dropdown
     items={[
        { label: 'Редактировать', onClick: () => console.log('edit') },
        { label: 'Дублировать', onClick: () => console.log('duplicate') },
        { label: 'Удалить', variant: 'danger', onClick: () => console.log('delete') }
    ]}
    />`,
    },
    {
        title: 'Меню с иконками',
        code: `<Dropdown
    items={[
            { 
            label: 'Профиль', 
            icon: <UserIcon />,
            onClick: () => navigate('/profile')
            },
            { 
            label: 'Настройки', 
            icon: <SettingsIcon />,
            onClick: () => navigate('/settings')
            },
            { 
            label: 'Выйти', 
            variant: 'danger',
            icon: <LogoutIcon />,
            onClick: () => logout()
            }
            ]}
        />`,
    },
    {
        title: 'Меню с разным выравниванием',
        code: `<div className="flex justify-between">
            <Dropdown 
            align="left"
            items={[{ label: 'Слева' }, { label: 'Пункт 2' }]}
            />
            <Dropdown 
            align="right" 
            items={[{ label: 'Справа' }, { label: 'Пункт 2' }]}
            />
        </div>`,
    },
    {
        title: 'Разные размеры',
        code: `<div className="flex gap-4 items-center">
        <Dropdown size="sm" items={[{ label: 'Маленький' }]} />
        <Dropdown size="md" items={[{ label: 'Средний' }]} />
        <Dropdown size="lg" items={[{ label: 'Большой' }]} />
    </div>`,
    },
    {
        title: 'Заблокированные пункты',
        code: `<Dropdown
        items={[
            { label: 'Доступно', onClick: () => console.log('click') },
            { label: 'Недоступно', disabled: true },
            { label: 'Ещё доступно', onClick: () => console.log('another click') }
        ]}
        />`,
    },
    {
        title: 'С кастомной иконкой',
        code: `<Dropdown
  icon={
    <svg width="24" height="24" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="20" cy="12" r="2" fill="currentColor" />
      <circle cx="4" cy="12" r="2" fill="currentColor" />
    </svg>
  }
  items={[
    { label: 'Горизонтальное меню' },
    { label: 'Другой пункт' }
  ]}
/>`,
    },
    {
        title: 'С обработчиком открытия',
        code: `<Dropdown
  items={[{ label: 'Пункт 1' }, { label: 'Пункт 2' }]}
  onOpenChange={(open) => console.log('Меню:', open ? 'открыто' : 'закрыто')}
/>`,
    },
];

export const dropdownUsageNotes = [
    {
        title: 'Доступность',
        content: `Компонент поддерживает базовые ARIA-атрибуты:
      • aria-expanded - состояние меню
      • aria-haspopup - указывает на наличие выпадающего меню
      • Поддержка клавиатурной навигации (Tab, Enter, Escape)`,
    },
    {
        title: 'Закрытие',
        content: 'Меню автоматически закрывается при клике вне компонента, выборе пункта или нажатии Escape',
    },
    {
        title: 'Темизация',
        content: 'Поддерживает светлую и тёмную темы. Цвета автоматически адаптируются под текущую тему через CSS переменные',
    },
];