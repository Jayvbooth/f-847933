import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Phone, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CalendarEvent {
  id: string;
  title: string;
  type: 'qualified-lead' | 'referral' | 'organic-search' | 'social-media';
  date: Date;
  time: string;
  description?: string;
  company?: string;
  location?: string;
}

const Calendar = () => {
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
      type: 'qualified-lead', 
      title: 'Qualified Lead Call', 
      weight: 78, 
      color: 'bg-green-500/20 border-green-500/40 text-green-600',
      descriptions: [
        'Tech startup looking for $50K+ solution',
        'Fortune 500 company seeking enterprise package',
        'Growing business ready to scale operations',
        'High-intent prospect with immediate need'
      ]
    },
    { 
      type: 'referral', 
      title: 'Referral Lead', 
      weight: 13, 
      color: 'bg-blue-500/20 border-blue-500/40 text-blue-600',
      descriptions: [
        'Referred by existing client',
        'Partner network introduction',
        'Word-of-mouth recommendation'
      ]
    },
    { 
      type: 'organic-search', 
      title: 'Organic Search Lead', 
      weight: 6, 
      color: 'bg-purple-500/20 border-purple-500/40 text-purple-600',
      descriptions: [
        'Found through Google search',
        'SEO-driven inquiry',
        'Direct website contact'
      ]
    },
    { 
      type: 'social-media', 
      title: 'Social Media Lead', 
      weight: 3, 
      color: 'bg-orange-500/20 border-orange-500/40 text-orange-600',
      descriptions: [
        'LinkedIn connection',
        'Facebook ad response',
        'Twitter engagement'
      ]
    }
  ];

  const companies = ['TechCorp Inc.', 'Digital Solutions LLC', 'Innovation Partners', 'Growth Dynamics', 'Future Systems', 'Peak Performance Co.'];

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

  const generateEvents = (): CalendarEvent[] => {
    const events: CalendarEvent[] = [];
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    const daysToShow = isMobile ? 3 : 7;
    const startDay = isMobile ? 1 : 0;
    
    for (let dayOffset = startDay; dayOffset < startDay + daysToShow; dayOffset++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + dayOffset);
      
      if (day.getDay() === 0 || day.getDay() === 6) continue;
      
      const numEvents = Math.floor(Math.random() * 3) + 3;
      const usedTimes = new Set();
      
      for (let i = 0; i < numEvents; i++) {
        let hour, time;
        let attempts = 0;
        
        do {
          hour = Math.floor(Math.random() * 8) + 9;
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
            company: companies[Math.floor(Math.random() * companies.length)],
            location: eventType.type === 'qualified-lead' ? 'Video Call' : 'Phone Call'
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
  };

  const events = generateEvents();

  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    const days = [];
    const daysToShow = isMobile ? 3 : 7;
    const startDay = isMobile ? 1 : 0;
    
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
    
    if (event.type === 'qualified-lead') {
      toast({
        title: "🎯 Qualified Lead Details",
        description: `${event.company} - ${event.description}`,
        duration: 5000,
      });
    }
  };

  return (
    <div className="w-full h-full bg-background rounded-lg overflow-hidden">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-3 min-w-0">
          <CalendarIcon className="h-5 w-5 text-foreground flex-shrink-0" />
          <h3 className="text-lg font-medium text-foreground truncate">
            Week of {getWeekDays()[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={previousWeek}
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={nextWeek}
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-7'} border-b border-border bg-muted/30`}>
        {getWeekDays().map(day => (
          <div key={day.getTime()} className={`p-3 text-center ${isToday(day) ? 'bg-green-500/10' : ''}`}>
            <div className="text-sm font-medium text-foreground">
              {isMobile ? shortDayNames[day.getDay()] : dayNames[day.getDay()]}
            </div>
            <div className={`text-lg font-semibold mt-1 ${isToday(day) ? 'text-green-600' : 'text-foreground'}`}>
              {day.getDate()}
            </div>
            {isToday(day) && (
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto mt-1"></div>
            )}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-7'} h-full`}>
        {getWeekDays().map(day => {
          const dayEvents = getEventsForDay(day);
          
          return (
            <div
              key={day.getTime()}
              className={`border-r border-b border-border min-h-[400px] p-3 bg-background ${isToday(day) ? 'bg-green-500/5' : ''}`}
            >
              <div className="space-y-2">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    onClick={() => handleEventClick(event)}
                    className={`
                      px-3 py-2 rounded-md text-xs border cursor-pointer transition-all duration-200 
                      hover:shadow-lg hover:-translate-y-1 hover:scale-105
                      ${getEventColor(event.type)}
                      ${selectedEvent?.id === event.id ? 'shadow-lg transform -translate-y-1 scale-105 ring-2 ring-green-500/30' : ''}
                      ${event.type === 'qualified-lead' ? 'border-2 border-green-500/60' : ''}
                    `}
                  >
                    <div className="font-medium text-[11px] leading-tight">
                      {event.company}
                    </div>
                    <div className="text-[10px] opacity-80 mt-1 flex items-center gap-1">
                      <Clock className="h-2 w-2" />
                      {event.time}
                    </div>
                    {event.type === 'qualified-lead' && (
                      <div className="text-[9px] text-green-600 font-medium mt-1">
                        💎 Leadea Premium
                      </div>
                    )}
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
          <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-foreground">{selectedEvent.title}</h3>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-green-500/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{selectedEvent.company}</div>
                  <div className="text-sm text-muted-foreground">{selectedEvent.description}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {selectedEvent.time}
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {selectedEvent.location}
              </div>
              
              {selectedEvent.type === 'qualified-lead' && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md">
                  <div className="text-sm font-medium text-green-600 mb-1">
                    🎯 Leadea Premium Lead
                  </div>
                  <div className="text-xs text-green-600">
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
