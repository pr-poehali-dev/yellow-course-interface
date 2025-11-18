import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const CoursePage = () => {
  const { id } = useParams();

  const course = {
    title: 'Web-разработка с нуля',
    description: 'Полный курс по созданию современных веб-приложений с использованием React, TypeScript и современных инструментов',
    category: 'Программирование',
    duration: '12 недель',
    level: 'Начинающий',
    students: 2340,
    rating: 4.8,
    price: '29 990 ₽',
    instructor: 'Иван Петров',
    lessons: 48,
  };

  const modules = [
    {
      title: 'Модуль 1: Основы HTML и CSS',
      lessons: [
        'Введение в веб-разработку',
        'Структура HTML документа',
        'Семантические теги',
        'CSS селекторы и свойства',
        'Flexbox и Grid',
        'Адаптивная верстка',
      ],
    },
    {
      title: 'Модуль 2: JavaScript основы',
      lessons: [
        'Переменные и типы данных',
        'Функции и области видимости',
        'Массивы и объекты',
        'DOM манипуляции',
        'События и обработчики',
        'Асинхронность',
      ],
    },
    {
      title: 'Модуль 3: React разработка',
      lessons: [
        'Введение в React',
        'Компоненты и props',
        'State и lifecycle',
        'Hooks',
        'Работа с формами',
        'Роутинг',
      ],
    },
    {
      title: 'Модуль 4: TypeScript',
      lessons: [
        'Типы данных',
        'Интерфейсы и типы',
        'Generics',
        'React с TypeScript',
      ],
    },
  ];

  const features = [
    'Практические задания после каждого урока',
    'Поддержка менторов 24/7',
    'Проектная работа в конце курса',
    'Сертификат об окончании',
    'Доступ к материалам навсегда',
    'Помощь в трудоустройстве',
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-in">
                <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
                  <Icon name="ArrowLeft" size={16} />
                  Назад к курсам
                </Link>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Star" size={16} className="text-primary fill-primary" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.students} студентов)</span>
                  </div>
                </div>
              </div>

              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Что вы изучите</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={16} className="text-primary" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4">Программа курса</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {modules.map((module, index) => (
                    <AccordionItem
                      key={index}
                      value={`module-${index}`}
                      className="border rounded-lg px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left hover:text-primary">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium">{index + 1}</span>
                          </div>
                          <span className="font-semibold">{module.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 ml-11">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center gap-2 text-muted-foreground">
                              <Icon name="PlayCircle" size={16} />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={32} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Преподаватель</h3>
                      <p className="text-lg font-medium mb-1">{course.instructor}</p>
                      <p className="text-muted-foreground">
                        Senior Frontend Developer с 8-летним опытом. Работал в крупных IT-компаниях и стартапах.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 animate-fade-in">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{course.price}</div>
                      <p className="text-sm text-muted-foreground">Единоразовая оплата</p>
                    </div>
                    <Button className="w-full h-12 text-lg animate-pulse-glow" asChild>
                      <Link to="/dashboard">Записаться на курс</Link>
                    </Button>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h3 className="font-semibold">Этот курс включает:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="Clock" size={18} className="text-primary" />
                        <span>{course.duration} обучения</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="BookOpen" size={18} className="text-primary" />
                        <span>{course.lessons} видеоуроков</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="Award" size={18} className="text-primary" />
                        <span>Сертификат</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="Infinity" size={18} className="text-primary" />
                        <span>Бессрочный доступ</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="MessageCircle" size={18} className="text-primary" />
                        <span>Поддержка менторов</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoursePage;
