import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Dashboard = () => {
  const myCourses = [
    {
      id: 1,
      title: 'Web-разработка с нуля',
      progress: 65,
      nextLesson: 'React Hooks',
      totalLessons: 48,
      completedLessons: 31,
    },
    {
      id: 2,
      title: 'UX/UI дизайн',
      progress: 30,
      nextLesson: 'Прототипирование в Figma',
      totalLessons: 36,
      completedLessons: 11,
    },
  ];

  const achievements = [
    { icon: 'Award', title: 'Первый курс', description: 'Завершили первый курс' },
    { icon: 'Target', title: '10 уроков', description: 'Прошли 10 уроков подряд' },
    { icon: 'Zap', title: 'Быстрый старт', description: 'Закончили курс за месяц' },
  ];

  const stats = [
    { icon: 'BookOpen', label: 'Курсов в процессе', value: '2' },
    { icon: 'CheckCircle2', label: 'Завершено уроков', value: '42' },
    { icon: 'Clock', label: 'Часов обучения', value: '87' },
    { icon: 'Award', label: 'Достижений', value: '3' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Личный кабинет</h1>
            <p className="text-muted-foreground">Добро пожаловать! Продолжайте обучение</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={stat.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="courses">Мои курсы</TabsTrigger>
              <TabsTrigger value="achievements">Достижения</TabsTrigger>
              <TabsTrigger value="profile">Профиль</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {myCourses.map((course, index) => (
                  <Card
                    key={course.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>
                        Урок {course.completedLessons} из {course.totalLessons}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Прогресс</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="PlayCircle" size={16} />
                        <span>Следующий урок: {course.nextLesson}</span>
                      </div>
                      <Button asChild className="w-full">
                        <Link to={`/course/${course.id}`}>Продолжить обучение</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="animate-fade-in">
                <CardContent className="p-6 text-center space-y-4">
                  <Icon name="Plus" size={48} className="mx-auto text-muted-foreground" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Добавить новый курс</h3>
                    <p className="text-muted-foreground mb-4">
                      Изучите новые навыки и продолжайте развиваться
                    </p>
                    <Button asChild>
                      <Link to="/courses">Выбрать курс</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-float">
                        <Icon name={achievement.icon as any} className="text-primary-foreground" size={32} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Профиль пользователя</CardTitle>
                  <CardDescription>Управляйте своими данными и настройками</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                        ИП
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Иван Петров</h3>
                      <p className="text-muted-foreground">ivan.petrov@example.com</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Имя</p>
                        <p className="text-sm text-muted-foreground">Иван Петров</p>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">ivan.petrov@example.com</p>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Пароль</p>
                        <p className="text-sm text-muted-foreground">••••••••</p>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
