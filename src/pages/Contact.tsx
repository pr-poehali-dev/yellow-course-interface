import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@eduplatform.com',
      link: 'mailto:info@eduplatform.com'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Примерная, д. 1',
      link: '#'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Пн-Пт: 9:00 - 18:00',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Есть вопросы? Мы всегда рады помочь. Заполните форму или свяжитесь с нами удобным способом.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={info.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <Input
                        required
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Тема</label>
                      <Input
                        required
                        placeholder="Тема сообщения"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Сообщение</label>
                      <Textarea
                        required
                        placeholder="Ваше сообщение..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Часто задаваемые вопросы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Как записаться на курс?</h3>
                    <p className="text-sm text-muted-foreground">
                      Выберите курс в каталоге, нажмите "Купить курс" и следуйте инструкциям.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Есть ли возврат средств?</h3>
                    <p className="text-sm text-muted-foreground">
                      Да, вы можете вернуть деньги в течение 14 дней после покупки.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Нужна ли предварительная подготовка?</h3>
                    <p className="text-sm text-muted-foreground">
                      Это зависит от курса. Проверьте раздел "Требования" на странице курса.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardHeader>
                  <CardTitle>Техническая поддержка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Наша команда поддержки готова помочь вам 24/7
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Открыть чат поддержки
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
