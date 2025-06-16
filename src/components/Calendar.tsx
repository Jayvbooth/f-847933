
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  type: 'qualified-lead' | 'referral' | 'organic-search' | 'social-media';
  date: Date;
  time: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const today = new Date();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const eventTypes = [
    { type: 'qualified-lead', title: 'Qualified Lead Call', weight: 80, color: 'bg-green-500/20 border-green-500/40 text-green-600' },
    { type: 'referral', title: 'Referral Lead', weight: 12, color: 'bg-blue-500/20 border-blue-500/40 text-blue-600' },
    { type: 'organic-search', title: 'Organic Search Lead', weight: 5, color: 'bg-purple-500/20 border-purple-500/40 text-purple-600' },
    { type: 'social-media', title: 'Social Media Lead', weight: 3, color: 'bg-orange-500/20 border-orange-500/40 text-orange-600' }
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

  const generateEvents = (): CalendarEvent[] => {
    const events: CalendarEvent[] = [];
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    const daysToShow = isMobile ? 3 : 7;
    const startDay = isMobile ? 1 : 0; // Start from Monday on mobile, Sunday on desktop
    
    for (let dayOffset = startDay; dayOffset < startDay + daysToShow; dayOffset++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + dayOffset);
      
      // Skip weekends (Saturday = 6, Sunday = 0)
      if (day.getDay() === 0 || day.getDay() === 6) continue;
      
      // Add 3-5 events per weekday (more qualified leads)
      const numEvents = Math.floor(Math.random() * 3) + 3;
      const usedTimes = new Set();
      
      for (let i = 0; i < numEvents; i++) {
        let hour, time;
        let attempts = 0;
        
        // Generate unique times between 9 AM and 5 PM
        do {
          hour = Math.floor(Math.random() * 8) + 9; // 9 AM to 4 PM
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
            time
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
    const startDay = isMobile ? 1 : 0; // Start from Monday on mobile
    
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

  return (
    <div className="w-full h-full bg-background rounded-lg overflow-hidden">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-3 md:p-4 border-b border-border bg-card">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <CalendarIcon className="h-4 w-4 md:h-5 md:w-5 text-foreground flex-shrink-0" />
          <h3 className="text-sm md:text-lg font-medium text-foreground truncate">
            Week of {getWeekDays()[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </h3>
        </div>
        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          <button
            onClick={previousWeek}
            className="p-1.5 md:p-2 rounded-md hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
          </button>
          <button
            onClick={nextWeek}
            className="p-1.5 md:p-2 rounded-md hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-7'} border-b border-border bg-muted/30`}>
        {getWeekDays().map(day => (
          <div key={day.getTime()} className={`p-2 md:p-3 text-center ${isToday(day) ? 'bg-primary/10' : ''}`}>
            <div className="text-xs md:text-sm font-medium text-foreground">
              {isMobile ? shortDayNames[day.getDay()] : dayNames[day.getDay()]}
            </div>
            <div className={`text-sm md:text-lg font-semibold mt-1 ${isToday(day) ? 'text-primary' : 'text-foreground'}`}>
              {day.getDate()}
            </div>
            {isToday(day) && (
              <div className="w-1.5 h-1.5 bg-primary rounded-full mx-auto mt-1"></div>
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
              className={`border-r border-b border-border min-h-[300px] md:min-h-[400px] p-2 md:p-3 bg-background ${isToday(day) ? 'bg-primary/5' : ''}`}
            >
              <div className="space-y-1.5 md:space-y-2">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    className={`
                      px-2 md:px-3 py-1.5 md:py-2 rounded-md text-[10px] md:text-xs border cursor-pointer transition-all duration-200 
                      hover:shadow-md hover:-translate-y-0.5 hover:scale-105
                      ${getEventColor(event.type)}
                      ${selectedEvent === event.id ? 'shadow-lg transform -translate-y-1 scale-105 ring-2 ring-primary/30' : ''}
                    `}
                  >
                    <div className="font-medium text-[9px] md:text-[11px] leading-tight">
                      {event.title}
                    </div>
                    <div className="text-[8px] md:text-[10px] opacity-80 mt-0.5 md:mt-1">
                      {event.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
