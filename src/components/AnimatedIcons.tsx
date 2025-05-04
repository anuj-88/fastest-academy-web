
import { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, LightBulb, ArrowUp, School, BookUser, BookText } from 'lucide-react';

interface AnimatedIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary';
  className?: string;
}

const iconSizes = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16'
};

const iconColors = {
  primary: 'text-fa-blue',
  secondary: 'text-white'
};

export const FloatingIcon = ({ 
  icon: Icon, 
  delay = 0,
  duration = 3,
  size = 'md',
  variant = 'primary',
  className = ''
}: { 
  icon: React.ElementType; 
  delay?: number;
  duration?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary';
  className?: string;
}) => {
  return (
    <div 
      className={`absolute ${iconSizes[size]} ${iconColors[variant]} ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <Icon className="h-full w-full" />
    </div>
  );
};

export const HeroAnimation = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <FloatingIcon icon={GraduationCap} delay={0} size="xl" className="top-0 right-0" />
      <FloatingIcon icon={BookOpen} delay={0.8} size="lg" className="top-1/4 right-1/4" />
      <FloatingIcon icon={LightBulb} delay={1.6} size="lg" className="bottom-1/4 right-0" />
      <FloatingIcon icon={ArrowUp} delay={2.4} size="md" className="bottom-0 right-1/3" />
      <FloatingIcon icon={School} delay={3.2} size="xl" className="top-1/3 right-2/3" />
    </div>
  );
};

export const SectionAnimation = ({ className = '', variant = 'primary' }: AnimatedIconProps) => {
  const [randomSeed, setRandomSeed] = useState(0);
  
  useEffect(() => {
    setRandomSeed(Math.random());
  }, []);
  
  const icons = [BookOpen, BookText, GraduationCap, LightBulb, School];
  const SelectedIcon = icons[Math.floor(randomSeed * icons.length)];
  
  return (
    <div className={`relative ${className}`}>
      <SelectedIcon className={`${iconSizes.md} ${iconColors[variant || 'primary']} animate-pulse`} />
    </div>
  );
};
