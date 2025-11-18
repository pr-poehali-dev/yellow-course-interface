import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@learnhub.ru',
      link: 'mailto:info@learnhub.ru',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (900) 123-45-67',
      link: 'tel:+79001234567',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Примерная, 123',
      link: null,
    },
  ];

  const socials = [
    { icon: 'Instagram', link: '#', label: 'Instagram' },
    { icon: 'Facebook', link: '#', label: 'Facebook' },
    { icon: 'Twitter', link: '#', label: 'Twitter' },
    { icon: 'Linkedin', link: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground">
              Остались вопросы? Мы всегда рады помочь
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>
                  Заполните форму и мы ответим в течение 24 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="О чем ваш вопрос?"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Расскажите подробнее..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription>
                    Другие способы связи с нами
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">{contact.title}</p>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Социальные сети</CardTitle>
                  <CardDescription>
                    Следите за нами в соцсетях
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
                        aria-label={social.label}
                      >
                        <Icon name={social.icon as any} size={20} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Часы работы</CardTitle>
                  <CardDescription>
                    Когда мы на связи
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Понедельник - Пятница</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Суббота</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Воскресенье</span>
                    <span className="font-medium">Выходной</span>
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

export default Contacts;
