import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const features = [
    {
      icon: 'BookOpen',
      title: 'Более 1000+ курсов',
      description: 'Широкий выбор курсов по различным направлениям'
    },
    {
      icon: 'Users',
      title: 'Экспертные преподаватели',
      description: 'Обучение у лучших специалистов индустрии'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Подтвержденные документы о завершении курсов'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Учитесь в удобное для вас время'
    }
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      students: '2,543',
      rating: '4.9',
      price: '9,990 ₽'
    },
    {
      id: 2,
      title: 'UI/UX дизайн',
      students: '1,832',
      rating: '4.8',
      price: '7,990 ₽'
    },
    {
      id: 3,
      title: 'Data Science',
      students: '3,124',
      rating: '4.9',
      price: '12,990 ₽'
    }
  ];

  const faqItems = [
    {
      question: 'Как начать обучение?',
      answer: 'Выберите интересующий курс, зарегистрируйтесь на платформе и оплатите доступ. После этого вы сразу получите доступ к материалам курса.'
    },
    {
      question: 'Есть ли возможность вернуть деньги?',
      answer: 'Да, у нас есть 14-дневная гарантия возврата денег. Если курс вам не подошел, мы вернем полную стоимость.'
    },
    {
      question: 'Выдаются ли сертификаты?',
      answer: 'После успешного завершения курса вы получите сертификат, который можно добавить в портфолио или LinkedIn.'
    },
    {
      question: 'Можно ли учиться в своем темпе?',
      answer: 'Да, все курсы доступны в записи. Вы можете учиться когда удобно, в своем темпе, без привязки ко времени.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-secondary/20 to-background">
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Обучайтесь новому каждый день
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Тысячи курсов от ведущих экспертов. Начните свой путь к успеху прямо сейчас.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/catalog">
                      <Icon name="Rocket" size={20} className="mr-2" />
                      Начать обучение
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/catalog">
                      Каталог курсов
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center"
                >
                  <Icon name="GraduationCap" size={200} className="text-primary/40" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы создали платформу, которая делает обучение доступным и эффективным
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="text-center h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center"
                      >
                        <Icon name={feature.icon as any} size={32} className="text-primary" />
                      </motion.div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные курсы</h2>
              <p className="text-lg text-muted-foreground">
                Начните с самых востребованных курсов
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {popularCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Icon name="Users" size={16} className="mr-1" />
                          {course.students}
                        </div>
                        <div className="flex items-center">
                          <Icon name="Star" size={16} className="text-primary fill-primary mr-1" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <Button asChild>
                          <Link to={`/course/${course.id}`}>Подробнее</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button size="lg" variant="outline" asChild>
                <Link to="/catalog">
                  Смотреть все курсы
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы о платформе
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готовы начать обучение?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Присоединяйтесь к тысячам студентов, которые уже достигли своих целей
              </p>
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/catalog">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Начать сейчас
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
