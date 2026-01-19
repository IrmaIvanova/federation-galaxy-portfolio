import { Card, Grid, Section, Typography } from "@packages/shared/src";

export function WebGLCard({ }) {
    return (
        <Section>
            <Typography variant="h2" children={"WebGL vs Canvas 2D"} />
            <Grid cols={1} md={2} lg={3} gap="md" >
                <Card>
                    <Typography variant="h3">
                        WebGL vs Canvas 2D
                    </Typography>
                    <Typography variant="p">
                        WebGL рендерит 2D/3D графику, используя GPU и шейдеры для сложных задач с высокой производительностью,
                         <br />
                        <br /> Canvas 2D рисует 2D-графику через CPU с помощью простых команд, идеально для игр и визуализации,
                        но медленнее, чем WebGL для тяжелых сцен; ключевое отличие — использование GPU и шейдеров для 3D в WebGL.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Принцип работы WebGL
                    </Typography>
                    <Typography variant="p">
                        JavaScript как «мозг»: Ваш код на JavaScript отправляет команды для отрисовки 2D и 3D объектов,
                        задавая им координаты, цвета и текстуры.<br /><br />
                        Использование GPU: Эти команды передаются в графический процессор (GPU) видеокарты.
                        GPU выполняет параллельные вычисления для растеризации (преобразования 3D в 2D пиксели).<br /><br />
                        Шейдеры: Используются программы (шейдеры), которые выполняются прямо на GPU,
                        позволяя создавать сложные эффекты освещения, теней и материалов.<br /><br />
                        HTML Canvas: Результат отрисовки появляется в элементе &lt;canvas&gt; в HTML.<br /><br />
                        Аппаратное ускорение: За счет GPU, WebGL обеспечивает высокую производительность для 3D-графики и игр.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Принцип работы Canvas 2D
                    </Typography>
                    <Typography variant="p">
                        JavaScript как «рисовальщик»: JavaScript использует методы вроде fillRect(), arc(), lineTo(),
                        чтобы пошагово рисовать фигуры, текст и изображения.<br /><br />
                        Использование CPU: Все операции выполняются центральным процессором (CPU).<br /><br />
                        Простота: Это простой API для 2D, не требует шейдеров.<br /><br />
                        HTML Canvas: Рисует на том же элементе &lt;canvas&gt;.<br /><br />
                        Производительность: Хорош для простой 2D-графики (схемы, графики),
                        но медленнее WebGL при работе со сложными сценами, так как не использует GPU.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Основные отличия WebGL и Canvas 2D
                    </Typography>
                    <Typography variant="p">
                        Процессор (CPU vs. GPU): Canvas 2D полагается на CPU, WebGL — на GPU (видеокарту).<br /><br />
                        Сложность: WebGL для 3D, Canvas 2D для 2D. WebGL сложнее, но мощнее.<br /><br />
                        Производительность: WebGL намного быстрее для 3D-графики из-за GPU-ускорения,
                        Canvas 2D быстрее для простых 2D-операций.<br /><br />
                        Контроль: WebGL дает полный контроль над рендерингом (шейдеры, свет),
                        Canvas 2D — более высокий уровень абстракции для простых форм.
                    </Typography>
                </Card>
            </Grid>

            <Typography variant="h2">
                CPU vs GPU
            </Typography>
            <Grid cols={1} md={2} lg={3} gap="md" >

                <Card>
                    <Typography variant="h3">
                        CPU vs GPU: Основное отличие
                    </Typography>
                    <Typography variant="p">
                        CPU (Центральный процессор) — это «мозг» компьютера, выполняющий общие задачи и управляющий системой,
                        а GPU (Графический процессор) — это специализированный ускоритель для графики и параллельных вычислений,
                        обрабатывающий изображения, видео и сложные расчеты в играх, ИИ и майнинге, отличающийся от CPU множеством
                        маленьких ядер вместо нескольких мощных.<br /><br />
                        CPU — универсал, GPU — узкоспециализированный мастер для графики и параллельных вычислений.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        CPU (Central Processing Unit)
                    </Typography>
                    <Typography variant="p">
                        <strong>Что это:</strong> Основной вычислительный компонент компьютера, выполняющий все системные и программные задачи.<br /><br />
                        <strong>Как работает:</strong> Имеет несколько мощных ядер, каждое из которых хорошо справляется с последовательными,
                        сложными задачами и управлением всем компьютером (ввод/вывод, ОС).<br /><br />
                        <strong>Когда используется:</strong> Для работы операционной системы, приложений, браузеров и любых общих задач.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        GPU (Graphics Processing Unit)
                    </Typography>
                    <Typography variant="p">
                        <strong>Что это:</strong> Специализированный процессор для обработки графики и массивных параллельных вычислений.<br /><br />
                        <strong>Как работает:</strong> Имеет сотни или тысячи более простых ядер, которые отлично выполняют множество
                        одинаковых операций одновременно (параллельные вычисления).<br /><br />
                        <strong>Когда используется:</strong> Игры, 3D-моделирование, рендеринг видео, машинное обучение,
                        майнинг криптовалют (благодаря своей способности к параллельным вычислениям).
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Ключевые различия CPU и GPU
                    </Typography>
                    <Typography variant="p">
                        <strong>Архитектура:</strong><br />
                        • <strong>CPU</strong>: 2-16 мощных ядер, оптимизированных для последовательных задач<br />
                        • <strong>GPU</strong>: 1000-10000+ простых ядер, оптимизированных для параллельных задач<br /><br />

                        <strong>Тип задач:</strong><br />
                        • <strong>CPU</strong>: Управление системой, логика программ, сложные вычисления<br />
                        • <strong>GPU</strong>: Обработка графики, параллельные вычисления, матричные операции<br /><br />

                        <strong>Память:</strong><br />
                        • <strong>CPU</strong>: Большой кэш, быстрый доступ<br />
                        • <strong>GPU</strong>: Высокая пропускная способность для параллельного доступа<br /><br />

                        <strong>Аналогия:</strong><br />
                        • <strong>CPU</strong> — как профессор, решающий сложную математическую задачу<br />
                        • <strong>GPU</strong> — как армия студентов, одновременно перемножающих тысячи матриц
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        CPU vs GPU в веб-разработке
                    </Typography>
                    <Typography variant="p">
                        <strong>CPU обрабатывает:</strong><br />
                        • JavaScript выполнение<br />
                        • React Virtual DOM вычисления<br />
                        • Маршрутизация (Routing)<br />
                        • Управление состоянием приложения<br />
                        • HTTP запросы<br /><br />

                        <strong>GPU обрабатывает (через WebGL/Canvas):</strong><br />
                        • 3D графика и анимации<br />
                        • Сложные визуализации<br />
                        • Фильтры и эффекты CSS<br />
                        • Видео декодирование<br />
                        • Анимации с hardware acceleration<br /><br />

                        <strong>Оптимизация:</strong><br />
                        • Тяжёлые вычисления → выносить в Web Worker (CPU)<br />
                        • Сложная графика → использовать WebGL (GPU)<br />
                        • Анимации → использовать transform/opacity (GPU)<br />
                        • Большие данные → использовать GPU для рендеринга
                    </Typography>
                </Card>
            </Grid>
        </Section>
    )
}