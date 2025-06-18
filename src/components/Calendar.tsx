
import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Phone, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CalendarEvent {
  id: string;
  title: string;
  type: 'qualified-call' | 'referral' | 'organic-search' | 'social-media';
  date: Date;
  time: string;
  description?: string;
  location?: string;
}

interface CalendarProps {
  callCount: number;
}

const Calendar = ({ callCount }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { toast } = useToast();
  const today = new Date();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const eventTypes = [
    { 
      type: 'qualified-call', 
      title: 'Leadea Call', 
      weight: 78, 
      color: 'bg-primary/10 border-primary/20 text-primary',
      descriptions: [
        'High-intent prospect with immediate need',
        'Pre-qualified enterprise opportunity',
        'Ready-to-buy prospect consultation',
        'Qualified decision maker meeting'
      ]
    },
    { 
      type: 'referral', 
      title: 'Referral Call', 
      weight: 13, 
      color: 'bg-muted/50 border-border text-muted-foreground',
      descriptions: [
        'Referred by existing client',
        'Partner network introduction',
        'Word-of-mouth recommendation'
      ]
    },
    { 
      type: 'organic-search', 
      title: 'Organic Call', 
      weight: 6, 
      color: 'bg-muted/50 border-border text-muted-foreground',
      descriptions: [
        'Found through Google search',
        'SEO-driven inquiry',
        'Direct website contact'
      ]
    },
    { 
      type: 'social-media', 
      title: 'Social Call', 
      weight: 3, 
      color: 'bg-muted/50 border-border text-muted-foreground',
      descriptions: [
        'LinkedIn connection',
        'Social media engagement',
        'Platform outreach'
      ]
    }
  ];

  const getWeightedEventType = () => {
    const random = Math.random() * 100;
    let cumulative = 0;
    
    for (const eventType of eventTypes) {
      cumulative += eventType.weight;
      if (random <= cumulative) {
        return eventType;
      }
    }
    return eventTypes[0];
  };

  const formatTo12Hour = (hour: number) => {
    if (hour === 0) return '12:00 AM';
    if (hour === 12) return '12:00 PM';
    if (hour < 12) return `${hour}:00 AM`;
    return `${hour - 12}:00 PM`;
  };

  // Memoize events to prevent regeneration on every render
  const events = useMemo((): CalendarEvent[] => {
    const events: CalendarEvent[] = [];
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    const daysToShow = isMobile ? 3 : 5;
    const startDay = isMobile ? 1 : 1;
    
    // Use a seed based on the week to ensure consistent events for the same week
    const weekSeed = Math.floor(startOfWeek.getTime() / (7 * 24 * 60 * 60 * 1000));
    
    for (let dayOffset = startDay; dayOffset < startDay + daysToShow; dayOffset++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + dayOffset);
      
      if (day.getDay() === 0 || day.getDay() === 6) continue;
      
      // Use seeded random for consistent events
      const dayRandomSeed = weekSeed + dayOffset;
      const seededRandom = () => {
        const x = Math.sin(dayRandomSeed * 9999) * 10000;
        return x - Math.floor(x);
      };
      
      const numEvents = Math.floor(seededRandom() * 2) + 2;
      const usedTimes = new Set();
      
      for (let i = 0; i < numEvents; i++) {
        let hour, time;
        let attempts = 0;
        
        do {
          const eventSeed = dayRandomSeed + i + attempts;
          const eventRandom = () => {
            const x = Math.sin(eventSeed * 9999) * 10000;
            return x - Math.floor(x);
          };
          
          hour = Math.floor(eventRandom() * 8) + 9;
          time = formatTo12Hour(hour);
          attempts++;
        } while (usedTimes.has(time) && attempts < 10);
        
        if (attempts < 10) {
          usedTimes.add(time);
          const eventType = getWeightedEventType();
          
          events.push({
            id: `${day.getTime()}-${i}`,
            title: eventType.title,
            type: eventType.type as any,
            date: new Date(day),
            time,
            description: eventType.descriptions[Math.floor(Math.random() * eventType.descriptions.length)],
            location: eventType.type === 'qualified-call' ? 'Video Call' : 'Phone Call'
          });
        }
      }
    }
    
    return events.sort((a, b) => {
      const dateCompare = a.date.getTime() - b.date.getTime();
      if (dateCompare !== 0) return dateCompare;
      
      const timeA = parseInt(a.time.split(':')[0]) + (a.time.includes('PM') && !a.time.startsWith('12') ? 12 : 0);
      const timeB = parseInt(b.time.split(':')[0]) + (b.time.includes('PM') && !b.time.startsWith('12') ? 12 : 0);
      return timeA - timeB;
    });
  }, [currentDate, isMobile]); // Only regenerate when week changes or mobile view changes

  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    const days = [];
    const daysToShow = isMobile ? 3 : 5;
    const startDay = isMobile ? 1 : 1;
    
    for (let i = startDay; i < startDay + daysToShow; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    
    return days;
  };

  const getEventsForDay = (day: Date) => {
    return events.filter(event => 
      event.date.toDateString() === day.toDateString()
    );
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const previousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventColor = (type: string) => {
    const eventType = eventTypes.find(et => et.type === type);
    return eventType?.color || 'bg-primary/10 border-primary/20 text-primary';
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    
    if (event.type === 'qualified-call') {
      toast({
        title: "Leadea Premium Sales Call",
        description: event.description,
        duration: 4000,
      });
    }
  };

  return (
    <div className="w-full bg-background rounded-lg overflow-hidden">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-2 border-b border-border bg-card">
        <div className="flex items-center gap-2 min-w-0">
          <CalendarIcon className="h-4 w-4 text-foreground flex-shrink-0" />
          <h3 className="text-sm font-medium text-foreground truncate">
            Week of {getWeekDays()[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </h3>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={previousWeek}
            className="p-1 rounded hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-3 w-3 text-foreground" />
          </button>
          <button
            onClick={nextWeek}
            className="p-1 rounded hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-3 w-3 text-foreground" />
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-5'} border-b border-border bg-muted/30`}>
        {getWeekDays().map(day => (
          <div key={day.getTime()} className={`p-2 text-center ${isToday(day) ? 'bg-primary/5' : ''}`}>
            <div className="text-xs font-medium text-foreground">
              {isMobile ? shortDayNames[day.getDay()] : dayNames[day.getDay()]}
            </div>
            <div className={`text-sm font-semibold mt-1 ${isToday(day) ? 'text-primary' : 'text-foreground'}`}>
              {day.getDate()}
            </div>
            {isToday(day) && (
              <div className="w-1 h-1 bg-primary rounded-full mx-auto mt-1"></div>
            )}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-5'} min-h-[200px]`}>
        {getWeekDays().map(day => {
          const dayEvents = getEventsForDay(day);
          
          return (
            <div
              key={day.getTime()}
              className={`border-r border-b border-border p-1 bg-background ${isToday(day) ? 'bg-primary/5' : ''}`}
            >
              <div className="space-y-1">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    onClick={() => handleEventClick(event)}
                    className={`
                      px-2 py-1 rounded text-xs border cursor-pointer transition-all duration-200 
                      hover:shadow-sm hover:scale-102
                      ${getEventColor(event.type)}
                      ${selectedEvent?.id === event.id ? 'ring-1 ring-primary/30' : ''}
                    `}
                  >
                    <div className="font-medium text-[10px] leading-tight">
                      {event.title}
                    </div>
                    <div className="text-[9px] opacity-80 mt-0.5 flex items-center gap-1">
                      <Clock className="h-2 w-2" />
                      {event.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedEvent(null)}>
          <div className="bg-card border border-border rounded-lg p-4 max-w-sm w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-base text-foreground">{selectedEvent.title}</h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center">
                  <Phone className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{selectedEvent.description}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                {selectedEvent.time}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {selectedEvent.location}
              </div>
              
              {selectedEvent.type === 'qualified-call' && (
                <div className="p-2 bg-primary/10 border border-primary/20 rounded">
                  <div className="text-xs font-medium text-primary mb-1">
                    Leadea Premium Sales Call
                  </div>
                  <div className="text-xs text-primary">
                    Pre-qualified, high-intent prospect with verified budget and decision-making authority.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
