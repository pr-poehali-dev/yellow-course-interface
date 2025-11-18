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
      title: 'Широкий выбор курсов',
      description: 'Более 500 курсов по программированию, дизайну, маркетингу и бизнесу',
    },
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Учитесь у практикующих специалистов с многолетним опытом',
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Получайте сертификаты после успешного завершения курсов',
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Учитесь в удобное время в своем темпе',
    },
  ];

  const popularCourses = [
    {
      title: 'Web-разработка с нуля',
      description: 'Полный курс по созданию современных веб-приложений',
      duration: '12 недель',
      level: 'Начинающий',
      students: 2340,
      rating: 4.8,
    },
    {
      title: 'UX/UI дизайн',
      description: 'Основы пользовательского опыта и интерфейсов',
      duration: '8 недель',
      level: 'Средний',
      students: 1820,
      rating: 4.9,
    },
    {
      title: 'Digital-маркетинг',
      description: 'Стратегии продвижения в цифровой среде',
      duration: '10 недель',
      level: 'Начинающий',
      students: 3150,
      rating: 4.7,
    },
  ];

  const faqs = [
    {
      question: 'Как начать обучение?',
      answer: 'Зарегистрируйтесь на платформе, выберите интересующий курс и начните обучение сразу после оплаты.',
    },
    {
      question: 'Есть ли бесплатные курсы?',
      answer: 'Да, у нас есть бесплатные вводные курсы по различным направлениям.',
    },
    {
      question: 'Получу ли я сертификат?',
      answer: 'После успешного завершения курса вы получите официальный сертификат.',
    },
    {
      question: 'Можно ли учиться в своем темпе?',
      answer: 'Да, все материалы доступны 24/7, вы можете учиться когда удобно.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Развивайте навыки с{' '}
              <span className="text-primary">лучшими курсами</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Онлайн-платформа для обучения современным профессиям. Начните учиться сегодня и измените свою карьеру.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg animate-pulse-glow">
                <Link to="/courses">Смотреть курсы</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-card py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Почему выбирают нас
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 animate-float">
                      <Icon name={feature.icon as any} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Популярные курсы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-primary fill-primary" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/courses/${index + 1}`}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/courses">Все курсы</Link>
            </Button>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/20 to-accent/20 py-20">
          <div className="container mx-auto px-4 text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              Готовы начать обучение?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к тысячам студентов, которые уже меняют свою жизнь
            </p>
            <Button size="lg" asChild className="text-lg animate-pulse-glow">
              <Link to="/dashboard">Начать бесплатно</Link>
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
