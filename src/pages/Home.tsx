import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Star, Users, Zap, Shield, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-sports.jpg';

export const Home = () => {
  const popularSports = [
    { name: 'Badminton', icon: '🏸', venues: 24 },
    { name: 'Tennis', icon: '🎾', venues: 18 },
    { name: 'Basketball', icon: '🏀', venues: 12 },
    { name: 'Football', icon: '⚽', venues: 8 },
  ];

  const featuredVenues = [
    {
      id: 1,
      name: 'Ace Sports Complex',
      sport: 'Badminton',
      price: 1200,
      rating: 4.8,
      location: 'Koramangala',
      image: '/api/placeholder/300/200',
    },
    {
      id: 2,
      name: 'Court Champions',
      sport: 'Tennis',
      price: 1800,
      rating: 4.9,
      location: 'Indiranagar',
      image: '/api/placeholder/300/200',
    },
    {
      id: 3,
      name: 'Slam Dunk Arena',
      sport: 'Basketball',
      price: 2000,
      rating: 4.7,
      location: 'Whitefield',
      image: '/api/placeholder/300/200',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book courts in seconds with real-time availability',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Safe and encrypted payment processing',
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Choose from morning, evening, or late-night slots',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Book Your Perfect{' '}
            <span className="text-gradient-primary">Sports Court</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover and book local sports facilities instantly. Join matches, 
            meet players, and elevate your game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/venues">
              <Button size="lg" className="btn-bounce neon-glow bg-primary hover:bg-primary/90 text-lg px-8">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            </Link>
            <Link to="/venues">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white/20 text-white hover:bg-white/10"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Find Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose QuickCourt?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of sports booking with our cutting-edge platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient hover-lift border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sports */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Sports
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose from a variety of sports and find the perfect venue
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularSports.map((sport, index) => (
              <Link key={index} to={`/venues?sport=${sport.name.toLowerCase()}`}>
                <Card className="card-gradient hover-lift border-border/50 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{sport.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {sport.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {sport.venues} venues
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Venues
            </h2>
            <p className="text-muted-foreground text-lg">
              Top-rated sports facilities in your area
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredVenues.map((venue) => (
              <Link key={venue.id} to={`/venues/${venue.id}`}>
                <Card className="card-gradient hover-lift border-border/50 overflow-hidden">
                  <div className="h-48 bg-muted/50 flex items-center justify-center">
                    <span className="text-muted-foreground">Venue Image</span>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {venue.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-warning fill-current" />
                        <span className="text-sm text-muted-foreground">
                          {venue.rating}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-3">
                      {venue.sport}
                    </Badge>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{venue.location}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-secondary">
                          ₹{venue.price}
                        </span>
                        <span className="text-sm text-muted-foreground">/hr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/venues">
              <Button size="lg" variant="outline" className="btn-bounce">
                View All Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of sports enthusiasts who book their courts with QuickCourt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 btn-bounce text-lg px-8">
                <Users className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
            <Link to="/venues">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-white/30 text-white hover:bg-white/10"
              >
                Browse Venues
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;