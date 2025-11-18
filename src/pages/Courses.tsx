import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Программирование', 'Дизайн', 'Маркетинг', 'Бизнес', 'Языки'];

  const courses = [
    {
      id: 1,
      title: 'Web-разработка с нуля',
      description: 'Полный курс по созданию современных веб-приложений',
      category: 'Программирование',
      duration: '12 недель',
      level: 'Начинающий',
      students: 2340,
      rating: 4.8,
      price: '29 990 ₽',
    },
    {
      id: 2,
      title: 'UX/UI дизайн',
      description: 'Основы пользовательского опыта и интерфейсов',
      category: 'Дизайн',
      duration: '8 недель',
      level: 'Средний',
      students: 1820,
      rating: 4.9,
      price: '24 990 ₽',
    },
    {
      id: 3,
      title: 'Digital-маркетинг',
      description: 'Стратегии продвижения в цифровой среде',
      category: 'Маркетинг',
      duration: '10 недель',
      level: 'Начинающий',
      students: 3150,
      rating: 4.7,
      price: '19 990 ₽',
    },
    {
      id: 4,
      title: 'Python для анализа данных',
      description: 'Изучите Python и библиотеки для работы с данными',
      category: 'Программирование',
      duration: '14 недель',
      level: 'Средний',
      students: 1950,
      rating: 4.8,
      price: '34 990 ₽',
    },
    {
      id: 5,
      title: 'Графический дизайн',
      description: 'Создание визуального контента с нуля',
      category: 'Дизайн',
      duration: '10 недель',
      level: 'Начинающий',
      students: 2670,
      rating: 4.6,
      price: '22 990 ₽',
    },
    {
      id: 6,
      title: 'Управление проектами',
      description: 'Методологии и инструменты project management',
      category: 'Бизнес',
      duration: '6 недель',
      level: 'Средний',
      students: 1430,
      rating: 4.7,
      price: '27 990 ₽',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">Каталог курсов</h1>
            <p className="text-xl text-muted-foreground">
              Найдите идеальный курс для развития ваших навыков
            </p>
          </div>

          <div className="mb-8 space-y-6">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Поиск курсов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center animate-fade-in">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className="hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-primary fill-primary" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{course.category}</Badge>
                  </div>
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
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-xl font-bold">{course.price}</span>
                    <Button asChild>
                      <Link to={`/course/${course.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Курсы не найдены</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
