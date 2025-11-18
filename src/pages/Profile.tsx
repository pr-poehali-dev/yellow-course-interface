import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const user = {
    name: 'Мария Иванова',
    email: 'maria@example.com',
    joinedDate: 'Январь 2024',
    completedCourses: 3,
    inProgressCourses: 2,
    certificates: 3
  };

  const activeCourses = [
    {
      title: 'Веб-разработка с нуля',
      progress: 65,
      lessons: '31/48',
      nextLesson: 'React Hooks'
    },
    {
      title: 'UI/UX дизайн',
      progress: 40,
      lessons: '16/40',
      nextLesson: 'Прототипирование'
    }
  ];

  const completedCourses = [
    {
      title: 'Python для начинающих',
      completedDate: 'Март 2024',
      rating: 5,
      certificate: 'CERT-2024-001'
    },
    {
      title: 'Digital-маркетинг',
      completedDate: 'Февраль 2024',
      rating: 5,
      certificate: 'CERT-2024-002'
    }
  ];

  const achievements = [
    { icon: 'Award', title: 'Первый курс', description: 'Завершите первый курс' },
    { icon: 'Target', title: 'Целеустремленный', description: 'Учитесь 7 дней подряд' },
    { icon: 'Trophy', title: 'Отличник', description: 'Получите 5 сертификатов' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center"
                  >
                    <Icon name="User" size={48} className="text-primary" />
                  </motion.div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <p className="text-muted-foreground mb-4">{user.email}</p>
                    <p className="text-sm text-muted-foreground">На платформе с {user.joinedDate}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{user.completedCourses}</div>
                      <div className="text-xs text-muted-foreground">Завершено</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{user.inProgressCourses}</div>
                      <div className="text-xs text-muted-foreground">В процессе</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{user.certificates}</div>
                      <div className="text-xs text-muted-foreground">Сертификатов</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="courses">Курсы</TabsTrigger>
              <TabsTrigger value="achievements">Достижения</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="mt-8 space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-2xl font-bold mb-4">Текущие курсы</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {activeCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle>{course.title}</CardTitle>
                          <CardDescription>Следующий урок: {course.nextLesson}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>Прогресс</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{course.lessons} уроков</span>
                            <Button>Продолжить</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4">Завершенные курсы</h2>
                <div className="space-y-4">
                  {completedCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Icon name="GraduationCap" size={24} className="text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold">{course.title}</h3>
                                <p className="text-sm text-muted-foreground">Завершен: {course.completedDate}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="flex">
                                {[...Array(course.rating)].map((_, i) => (
                                  <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                                ))}
                              </div>
                              <Button variant="outline" size="sm">
                                <Icon name="Download" size={16} className="mr-2" />
                                Сертификат
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-2xl font-bold mb-4">Ваши достижения</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className="text-center h-full">
                        <CardHeader>
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon name={achievement.icon as any} size={32} className="text-primary" />
                          </div>
                          <CardTitle>{achievement.title}</CardTitle>
                          <CardDescription>{achievement.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="settings" className="mt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-2xl"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки профиля</CardTitle>
                    <CardDescription>Управление вашим аккаунтом</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        defaultValue={user.name}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        defaultValue={user.email}
                      />
                    </div>
                    <Button>Сохранить изменения</Button>
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

export default Profile;
