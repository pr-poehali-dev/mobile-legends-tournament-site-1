import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedLeague, setSelectedLeague] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const heroImages = [
    {
      src: "https://cdn.poehali.dev/files/c9a2dc2b-eb84-4c52-8831-36aaa671cf71.jpg",
      alt: "Mobile Legends Heroes",
      title: "Легендарные герои",
      subtitle: "Выберите своего чемпиона"
    },
    {
      src: "https://cdn.poehali.dev/files/a6f1037a-7590-4f51-801f-0de460779024.jpg", 
      alt: "Mobile Legends Characters",
      title: "Эпические персонажи",
      subtitle: "Мастерство и стратегия"
    },
    {
      src: "https://cdn.poehali.dev/files/16734add-3e82-48ef-8bc9-67d274afc3b7.jpg",
      alt: "Welcome to Community", 
      title: "Добро пожаловать",
      subtitle: "Присоединяйтесь к сообществу"
    },
    {
      src: "https://cdn.poehali.dev/files/fd0b6d19-a61a-42c0-9e7b-55260646c1b8.jpeg",
      alt: "Esports Player",
      title: "Профессиональный киберспорт", 
      subtitle: "Стань чемпионом"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const matches = [
    {
      id: 1,
      team1: 'Thunder Legends',
      team2: 'Cyber Warriors',
      time: '19:00',
      date: '2025-08-05',
      league: 'legendary',
      status: 'upcoming',
      prize: '₽100,000'
    },
    {
      id: 2,
      team1: 'Mythic Titans',
      team2: 'Storm Riders',
      time: '20:30',
      date: '2025-08-05',
      league: 'mythic',
      status: 'live',
      prize: '₽75,000'
    },
    {
      id: 3,
      team1: 'Immortal Squad',
      team2: 'Phoenix Rising',
      time: '22:00',
      date: '2025-08-05',
      league: 'immortal',
      status: 'upcoming',
      prize: '₽50,000'
    }
  ];

  const leagueStyles = {
    legendary: 'bg-gradient-to-r from-league-legendary-gold to-league-legendary-red',
    mythic: 'bg-gradient-to-r from-league-mythic-gold to-league-mythic-teal',
    immortal: 'bg-gradient-to-r from-league-immortal-purple to-league-immortal-blue'
  };

  const filteredMatches = selectedLeague === 'all' 
    ? matches 
    : matches.filter(match => match.league === selectedLeague);

  return (
    <div className="min-h-screen bg-cyber-dark text-foreground font-['Roboto']">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/10 via-cyber-purple/5 to-cyber-dark"></div>
        
        <header className="relative z-10 border-b border-border/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" className="h-8 w-8 text-cyber-cyan animate-glow" />
                <h1 className="text-2xl font-['Orbitron'] font-bold bg-gradient-to-r from-cyber-cyan to-cyber-pink bg-clip-text text-transparent">
                  ML TOURNAMENTS
                </h1>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="hover:text-cyber-cyan transition-colors">Главная</a>
                <a href="#schedule" className="hover:text-cyber-cyan transition-colors">Расписание</a>
                <a href="#leagues" className="hover:text-cyber-cyan transition-colors">Лиги</a>
                <a href="#rules" className="hover:text-cyber-cyan transition-colors">Правила</a>
                <a href="#stats" className="hover:text-cyber-cyan transition-colors">Статистика</a>
                <a href="#streams" className="hover:text-cyber-cyan transition-colors">Трансляции</a>
                <a href="#contact" className="hover:text-cyber-cyan transition-colors">Контакты</a>
              </div>

              <Button className="bg-gradient-to-r from-cyber-cyan to-cyber-purple hover:from-cyber-purple to-cyber-pink animate-pulse-glow">
                Регистрация
              </Button>
            </nav>
          </div>
        </header>

        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-12 animate-slide-up">
              <div className="relative w-full max-w-6xl mx-auto h-96 rounded-2xl overflow-hidden shadow-2xl shadow-cyber-cyan/20">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/40 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-left">
                      <h3 className="text-3xl font-['Orbitron'] font-bold text-white mb-2 animate-slide-up">
                        {image.title}
                      </h3>
                      <p className="text-lg text-cyber-cyan animate-slide-up [animation-delay:200ms]">
                        {image.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-cyber-cyan shadow-lg shadow-cyber-cyan/50' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-cyber-dark/50 hover:bg-cyber-dark/80 text-white p-2 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
                >
                  <Icon name="ChevronLeft" className="h-6 w-6" />
                </button>
                
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-cyber-dark/50 hover:bg-cyber-dark/80 text-white p-2 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
                >
                  <Icon name="ChevronRight" className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-['Orbitron'] font-black mb-6 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink bg-clip-text text-transparent animate-pulse-glow">
              ПОЕХАЛИ!
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к самым эпическим турнирам Mobile Legends: Bang Bang. 
              Сражайтесь за славу, призы и место в истории киберспорта!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyber-cyan to-cyber-purple hover:from-cyber-purple to-cyber-pink text-lg px-8 animate-glow">
                <Icon name="Trophy" className="mr-2 h-5 w-5" />
                Участвовать в турнире
              </Button>
              <Button size="lg" variant="outline" className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark text-lg px-8">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Смотреть трансляции
              </Button>
            </div>
          </div>
        </section>
      </div>

      <section id="schedule" className="py-16 bg-cyber-darker/50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-['Orbitron'] font-bold text-center mb-12 bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
            Расписание матчей
          </h3>
          
          <div className="flex justify-center mb-8">
            <Tabs value={selectedLeague} onValueChange={setSelectedLeague} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm">
                <TabsTrigger value="all" className="data-[state=active]:bg-cyber-cyan data-[state=active]:text-cyber-dark">
                  Все
                </TabsTrigger>
                <TabsTrigger value="legendary" className="data-[state=active]:bg-league-legendary-gold data-[state=active]:text-cyber-dark">
                  Legendary
                </TabsTrigger>
                <TabsTrigger value="mythic" className="data-[state=active]:bg-league-mythic-teal data-[state=active]:text-cyber-dark">
                  Mythic
                </TabsTrigger>
                <TabsTrigger value="immortal" className="data-[state=active]:bg-league-immortal-purple data-[state=active]:text-cyber-dark">
                  Immortal
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {filteredMatches.map((match) => (
              <Card key={match.id} className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-cyber-cyan/50 transition-all duration-300 animate-slide-up">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className={`w-4 h-4 rounded-full ${leagueStyles[match.league as keyof typeof leagueStyles]} animate-glow`}></div>
                      <div>
                        <p className="text-sm text-muted-foreground">{match.date} в {match.time}</p>
                        <div className="flex items-center space-x-2 text-lg font-semibold">
                          <span>{match.team1}</span>
                          <Icon name="Swords" className="h-4 w-4 text-cyber-pink" />
                          <span>{match.team2}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Badge className={`${match.status === 'live' ? 'bg-cyber-pink animate-pulse' : 'bg-cyber-cyan'} text-cyber-dark`}>
                        {match.status === 'live' ? 'LIVE' : 'Скоро'}
                      </Badge>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Призовой фонд</p>
                        <p className="font-bold text-cyber-cyan">{match.prize}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="leagues" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-['Orbitron'] font-bold text-center mb-12 bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
            Лиги турнира
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-league-legendary-gold/20 to-league-legendary-red/20 border-league-legendary-gold/50 hover:scale-105 transition-transform duration-300 animate-slide-up">
              <CardHeader className="text-center">
                <Icon name="Crown" className="h-12 w-12 mx-auto text-league-legendary-gold animate-glow" />
                <CardTitle className="text-2xl font-['Orbitron'] text-league-legendary-gold">Легендарная лига</CardTitle>
                <CardDescription className="text-muted-foreground">Элитный уровень соревнований</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Участников:</span>
                    <span className="font-bold text-league-legendary-gold">32</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Призовой фонд:</span>
                    <span className="font-bold text-league-legendary-gold">₽500,000</span>
                  </div>
                  <Progress value={85} className="bg-cyber-dark" />
                  <p className="text-sm text-center text-muted-foreground">85% мест занято</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-league-mythic-gold/20 to-league-mythic-teal/20 border-league-mythic-teal/50 hover:scale-105 transition-transform duration-300 animate-slide-up [animation-delay:200ms]">
              <CardHeader className="text-center">
                <Icon name="Gem" className="h-12 w-12 mx-auto text-league-mythic-teal animate-glow" />
                <CardTitle className="text-2xl font-['Orbitron'] text-league-mythic-teal">Мифическая лига</CardTitle>
                <CardDescription className="text-muted-foreground">Продвинутый уровень игры</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Участников:</span>
                    <span className="font-bold text-league-mythic-teal">64</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Призовой фонд:</span>
                    <span className="font-bold text-league-mythic-teal">₽300,000</span>
                  </div>
                  <Progress value={70} className="bg-cyber-dark" />
                  <p className="text-sm text-center text-muted-foreground">70% мест занято</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-league-immortal-purple/20 to-league-immortal-blue/20 border-league-immortal-purple/50 hover:scale-105 transition-transform duration-300 animate-slide-up [animation-delay:400ms]">
              <CardHeader className="text-center">
                <Icon name="Shield" className="h-12 w-12 mx-auto text-league-immortal-purple animate-glow" />
                <CardTitle className="text-2xl font-['Orbitron'] text-league-immortal-purple">Бессмертная лига</CardTitle>
                <CardDescription className="text-muted-foreground">Начинающие чемпионы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Участников:</span>
                    <span className="font-bold text-league-immortal-purple">128</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Призовой фонд:</span>
                    <span className="font-bold text-league-immortal-purple">₽150,000</span>
                  </div>
                  <Progress value={45} className="bg-cyber-dark" />
                  <p className="text-sm text-center text-muted-foreground">45% мест занято</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="stats" className="py-16 bg-cyber-darker/50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-['Orbitron'] font-bold text-center mb-12 bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
            Статистика турнира
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 text-center animate-slide-up">
              <CardContent className="p-6">
                <Icon name="Users" className="h-8 w-8 mx-auto mb-3 text-cyber-cyan" />
                <div className="text-3xl font-['Orbitron'] font-bold text-cyber-cyan mb-1">1,247</div>
                <div className="text-sm text-muted-foreground">Зарегистрированных игроков</div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 text-center animate-slide-up [animation-delay:100ms]">
              <CardContent className="p-6">
                <Icon name="Trophy" className="h-8 w-8 mx-auto mb-3 text-cyber-pink" />
                <div className="text-3xl font-['Orbitron'] font-bold text-cyber-pink mb-1">₽950K</div>
                <div className="text-sm text-muted-foreground">Общий призовой фонд</div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 text-center animate-slide-up [animation-delay:200ms]">
              <CardContent className="p-6">
                <Icon name="Zap" className="h-8 w-8 mx-auto mb-3 text-cyber-purple" />
                <div className="text-3xl font-['Orbitron'] font-bold text-cyber-purple mb-1">156</div>
                <div className="text-sm text-muted-foreground">Матчей проведено</div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 text-center animate-slide-up [animation-delay:300ms]">
              <CardContent className="p-6">
                <Icon name="Eye" className="h-8 w-8 mx-auto mb-3 text-league-legendary-gold" />
                <div className="text-3xl font-['Orbitron'] font-bold text-league-legendary-gold mb-1">89K</div>
                <div className="text-sm text-muted-foreground">Зрителей онлайн</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="streams" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-['Orbitron'] font-bold text-center mb-12 bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
            Прямые трансляции
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-cyber-pink/50 transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cyber-pink rounded-full animate-pulse"></div>
                    <span>Главная арена</span>
                  </CardTitle>
                  <Badge className="bg-cyber-pink text-cyber-dark">LIVE</Badge>
                </div>
                <CardDescription>Thunder Legends vs Cyber Warriors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-cyber-darker rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Play" className="h-16 w-16 text-cyber-cyan" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">24,567 зрителей</span>
                  </div>
                  <Button size="sm" className="bg-cyber-pink hover:bg-cyber-pink/80">
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:border-cyber-cyan/50 transition-all duration-300 animate-slide-up [animation-delay:200ms]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse"></div>
                    <span>Арена #2</span>
                  </CardTitle>
                  <Badge className="bg-cyber-cyan text-cyber-dark">LIVE</Badge>
                </div>
                <CardDescription>Mythic Titans vs Storm Riders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-cyber-darker rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Play" className="h-16 w-16 text-cyber-pink" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">15,892 зрителей</span>
                  </div>
                  <Button size="sm" className="bg-cyber-cyan hover:bg-cyber-cyan/80">
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-cyber-darker border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-6 w-6 text-cyber-cyan" />
                <span className="font-['Orbitron'] font-bold text-lg">ML TOURNAMENTS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучшая платформа для турниров Mobile Legends: Bang Bang
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Турниры</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyber-cyan transition-colors">Расписание</a></li>
                <li><a href="#" className="hover:text-cyber-cyan transition-colors">Лиги</a></li>
                <li><a href="#" className="hover:text-cyber-cyan transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-cyber-cyan transition-colors">Призы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Игрокам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyber-cyan transition-colors">Регистрация</a></li>
                <li><a href="#" className="hover:text-cyber-cyan transition-colors">Статистика</a></li>
                <li><a href="#" className="hover:text-cyber-cyan transition-colors">Рейтинги</a></li>
                <li><a href="#" className="hover:text-cyber-cyan transition-colors">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>support@mltournaments.ru</p>
                <p>+7 (800) 123-45-67</p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Youtube" className="h-5 w-5 hover:text-cyber-pink transition-colors cursor-pointer" />
                  <Icon name="Twitch" className="h-5 w-5 hover:text-cyber-purple transition-colors cursor-pointer" />
                  <Icon name="MessageCircle" className="h-5 w-5 hover:text-cyber-cyan transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ML Tournaments. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;