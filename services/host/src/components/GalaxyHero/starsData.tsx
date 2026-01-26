
export type StarAnimationType = 
  | 'flicker' 
  | 'neon-pulse' 
  | 'neon-flicker' 
  | 'subtle-flicker' 
  | 'quick-flicker';

export type StarData = [
  cx: number, 
  cy: number, 
  r: number, 
  animation: StarAnimationType, 
  color: StarColor
];
export type StarColor = string;


export const starsData: StarData[] = [
    // Первый ряд - левая часть (разные анимации)
    [470, 170, 1.2, 'flicker', '#0fa'],
    [520, 220, 1.5, 'neon-pulse', '#7af'],
    [480, 280, 0.9, 'quick-flicker', '#f5f'],
    [530, 330, 1.1, 'flicker', '#0ff'],
    [490, 380, 1.3, 'neon-flicker', '#ff6'],
    [540, 430, 1.0, 'subtle-flicker', '#f85'],
    [500, 480, 1.4, 'flicker', '#0fa'],
    [550, 530, 0.8, 'neon-pulse', '#7af'],

    // Второй ряд - центральная левая часть
    [600, 160, 1.6, 'quick-flicker', '#f5f'],
    [650, 210, 1.1, 'flicker', '#0ff'],
    [620, 260, 1.8, 'neon-flicker', '#ff6'],
    [670, 310, 1.2, 'subtle-flicker', '#f85'],
    [640, 360, 1.5, 'flicker', '#0fa'],
    [690, 410, 0.9, 'neon-pulse', '#7af'],
    [660, 460, 1.3, 'quick-flicker', '#f5f'],
    [610, 510, 1.0, 'flicker', '#0ff'],

    // Третий ряд - центр
    [750, 180, 1.7, 'neon-flicker', '#ff6'],
    [800, 230, 1.2, 'flicker', '#f85'],
    [770, 280, 1.4, 'subtle-flicker', '#0fa'],
    [820, 330, 2.0, 'neon-pulse', '#7af'],
    [790, 380, 1.1, 'quick-flicker', '#f5f'],
    [840, 430, 1.6, 'flicker', '#0ff'],
    [810, 480, 1.3, 'neon-flicker', '#ff6'],
    [760, 530, 0.8, 'subtle-flicker', '#f85'],

    // Четвертый ряд - центральная правая часть
    [900, 170, 1.5, 'flicker', '#0fa'],
    [950, 220, 1.9, 'quick-flicker', '#7af'],
    [920, 270, 1.0, 'neon-flicker', '#f5f'],
    [970, 320, 1.7, 'flicker', '#0ff'],
    [940, 370, 1.4, 'subtle-flicker', '#ff6'],
    [990, 420, 1.2, 'neon-pulse', '#f85'],
    [960, 470, 1.6, 'quick-flicker', '#0fa'],
    [910, 520, 0.9, 'flicker', '#7af'],

    // Пятый ряд - правая часть
    [1050, 190, 2.1, 'neon-flicker', '#f5f'],
    [1100, 240, 1.3, 'flicker', '#0ff'],
    [1070, 290, 1.8, 'subtle-flicker', '#ff6'],
    [1120, 340, 1.1, 'quick-flicker', '#f85'],
    [1090, 390, 1.5, 'neon-pulse', '#0fa'],
    [1140, 440, 1.9, 'flicker', '#7af'],
    [1110, 490, 1.2, 'quick-flicker', '#f5f'],
    [1060, 540, 0.7, 'subtle-flicker', '#0ff'],

    // Шестой ряд - дальняя правая часть
    [1200, 160, 1.4, 'flicker', '#ff6'],
    [1250, 210, 2.0, 'neon-flicker', '#f85'],
    [1220, 260, 1.6, 'quick-flicker', '#0fa'],
    [1270, 310, 1.3, 'flicker', '#7af'],
    [1240, 360, 1.7, 'subtle-flicker', '#f5f'],
    [1290, 410, 1.0, 'neon-pulse', '#0ff'],
    [1260, 460, 1.5, 'flicker', '#ff6'],
    [1210, 510, 1.2, 'quick-flicker', '#f85'],

    // Седьмой ряд - дальняя правая граница
    [1320, 180, 1.8, 'neon-flicker', '#0fa'],
    [1340, 230, 1.1, 'flicker', '#7af'],
    [1300, 280, 1.4, 'subtle-flicker', '#f5f'],
    [1350, 330, 2.2, 'quick-flicker', '#0ff'],
    [1310, 380, 1.7, 'flicker', '#ff6'],
    [1330, 430, 1.3, 'neon-pulse', '#f85'],
    [1290, 480, 1.0, 'quick-flicker', '#0fa'],
    [1345, 530, 0.9, 'flicker', '#7af'],

    // Отдельные яркие звезды для акцентов
    [580, 150, 2.5, 'neon-flicker', '#ff9'],
    [880, 140, 2.3, 'flicker', '#aff'],
    [1150, 150, 2.8, 'quick-flicker', '#f9f'],
    [750, 550, 2.4, 'neon-pulse', '#9ff'],
    [1000, 560, 2.6, 'subtle-flicker', '#ff6'],
    [1300, 100, 2.2, 'flicker', '#f96'],

    // Маленькие далекие звезды (в основном простые flicker)
    [460, 200, 0.6, 'flicker', '#fff'],
    [510, 250, 0.5, 'quick-flicker', '#ccc'],
    [1400, 300, 0.7, 'flicker', '#ddd'],
    [1450, 350, 0.6, 'subtle-flicker', '#eee'],
    [1380, 400, 0.5, 'flicker', '#fff'],
    [1430, 450, 0.8, 'quick-flicker', '#ccc'],
    [1360, 500, 0.6, 'flicker', '#ddd'],
    [1410, 550, 0.7, 'subtle-flicker', '#eee'],

    // Дополнительные звезды для заполнения
    [480, 400, 0.7, 'flicker', '#9cf'],
    [720, 500, 0.9, 'quick-flicker', '#fc9'],
    [850, 190, 1.1, 'flicker', '#cf9'],
    [980, 310, 0.8, 'subtle-flicker', '#9fc'],
    [1100, 420, 1.0, 'flicker', '#f9c'],
    [1250, 380, 0.7, 'quick-flicker', '#c9f'],
    [1320, 490, 0.9, 'flicker', '#9ff'],
    [560, 450, 0.8, 'subtle-flicker', '#ffc'],

]