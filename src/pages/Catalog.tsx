import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Все курсы',
    'Программирование',
    'Дизайн',
    'Бизнес',
    'Маркетинг',
    'Data Science'
  ];

  const [activeCategory, setActiveCategory] = useState('Все курсы');

  const courses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      description: 'Полный курс по frontend и backend разработке',
      category: 'Программирование',
      duration: '12 недель',
      students: '2,543',
      rating: '4.9',
      level: 'Начальный',
      price: '9,990 ₽'
    },
    {
      id: 2,
      title: 'UI/UX дизайн',
      description: 'Создание современных интерфейсов',
      category: 'Дизайн',
      duration: '8 недель',
      students: '1,832',
      rating: '4.8',
      level: 'Средний',
      price: '7,990 ₽'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Анализ данных и машинное обучение',
      category: 'Data Science',
      duration: '16 недель',
      students: '3,124',
      rating: '4.9',
      level: 'Продвинутый',
      price: '12,990 ₽'
    },
    {
      id: 4,
      title: 'Digital-маркетинг',
      description: 'Стратегии продвижения в интернете',
      category: 'Маркетинг',
      duration: '10 недель',
      students: '1,456',
      rating: '4.7',
      level: 'Начальный',
      price: '8,990 ₽'
    },
    {
      id: 5,
      title: 'Управление проектами',
      description: 'Agile, Scrum и современные методологии',
      category: 'Бизнес',
      duration: '6 недель',
      students: '987',
      rating: '4.8',
      level: 'Средний',
      price: '6,990 ₽'
    },
    {
      id: 6,
      title: 'Python для начинающих',
      description: 'Основы программирования на Python',
      category: 'Программирование',
      duration: '8 недель',
      students: '4,234',
      rating: '4.9',
      level: 'Начальный',
      price: '5,990 ₽'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'Все курсы' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог курсов</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Найдите идеальный курс для вашего развития
            </p>

            <div className="relative max-w-2xl">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск курсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                >
                  <Badge
                    variant={activeCategory === category ? 'default' : 'outline'}
                    className="cursor-pointer px-4 py-2 text-sm"
                  >
                    {category}
                  </Badge>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{course.level}</Badge>
                      <div className="flex items-center">
                        <Icon name="Star" size={16} className="text-primary fill-primary mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Icon name="Clock" size={16} className="mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Icon name="Users" size={16} className="mr-1" />
                          {course.students}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <Button asChild>
                          <Link to={`/course/${course.id}`}>Подробнее</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                Курсы не найдены. Попробуйте изменить фильтры или поисковый запрос.
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
