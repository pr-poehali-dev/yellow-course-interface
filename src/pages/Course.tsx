import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Course = () => {
  const { id } = useParams();

  const course = {
    title: 'Веб-разработка с нуля',
    description: 'Полный курс по frontend и backend разработке',
    fullDescription: 'Этот курс охватывает все аспекты современной веб-разработки: от основ HTML и CSS до продвинутых фреймворков React и Node.js. Вы научитесь создавать полноценные веб-приложения и готовы к работе в реальных проектах.',
    instructor: 'Иван Петров',
    duration: '12 недель',
    students: '2,543',
    rating: '4.9',
    level: 'Начальный',
    price: '9,990 ₽',
    lessons: 48,
    hours: 120
  };

  const curriculum = [
    {
      module: 'Модуль 1: Основы HTML и CSS',
      lessons: ['Введение в HTML', 'Семантическая разметка', 'Основы CSS', 'Flexbox и Grid', 'Адаптивный дизайн']
    },
    {
      module: 'Модуль 2: JavaScript',
      lessons: ['Основы JavaScript', 'DOM-манипуляции', 'Асинхронность', 'ES6+ возможности', 'Работа с API']
    },
    {
      module: 'Модуль 3: React',
      lessons: ['Компоненты React', 'State и Props', 'Хуки', 'Роутинг', 'Управление состоянием']
    },
    {
      module: 'Модуль 4: Backend с Node.js',
      lessons: ['Введение в Node.js', 'Express.js', 'Базы данных', 'REST API', 'Деплой приложения']
    }
  ];

  const features = [
    { icon: 'Video', label: '120 часов видео', value: '120 ч' },
    { icon: 'FileText', label: '48 уроков', value: '48' },
    { icon: 'Award', label: 'Сертификат', value: 'Да' },
    { icon: 'Clock', label: 'Доступ навсегда', value: '∞' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2">
                <Badge className="mb-4">{course.level}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{course.fullDescription}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <Icon name="Star" size={20} className="text-primary fill-primary mr-2" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground ml-1">({course.students} студентов)</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="User" size={20} className="mr-2" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={20} className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle className="text-3xl text-primary">{course.price}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" size="lg">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Купить курс
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Icon name="Play" size={20} className="mr-2" />
                      Пробный урок
                    </Button>
                    
                    <div className="pt-4 border-t space-y-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <Icon name={feature.icon as any} size={18} className="mr-2 text-primary" />
                            <span className="text-sm">{feature.label}</span>
                          </div>
                          <span className="font-medium">{feature.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="container py-12">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="curriculum">Программа</TabsTrigger>
              <TabsTrigger value="about">О курсе</TabsTrigger>
            </TabsList>
            
            <TabsContent value="curriculum" className="mt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {curriculum.map((module, moduleIndex) => (
                  <motion.div
                    key={moduleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: moduleIndex * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center">
                          <Icon name="BookOpen" size={24} className="mr-3 text-primary" />
                          {module.module}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <motion.li
                              key={lessonIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: lessonIndex * 0.05 }}
                              className="flex items-center text-muted-foreground"
                            >
                              <Icon name="CheckCircle2" size={18} className="mr-3 text-primary" />
                              {lesson}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="about" className="mt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Что вы узнаете</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {['Создавать современные веб-приложения', 'Работать с React и Node.js', 'Проектировать базы данных', 'Деплоить приложения в production'].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Sparkles" size={18} className="mr-3 mt-0.5 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Требования</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Базовые навыки работы с компьютером. Опыт программирования не требуется.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Преподаватель</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="User" size={32} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{course.instructor}</h3>
                        <p className="text-muted-foreground">
                          Senior Full-stack разработчик с 10+ годами опыта. Работал в крупных IT-компаниях и стартапах.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Course;
