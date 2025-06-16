
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  // Generate events for the current month
  const generateEvents = (): CalendarEvent[] => {
    const events: CalendarEvent[] = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
      // Add 1-3 events per day randomly
      const numEvents = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numEvents; i++) {
        const hour = Math.floor(Math.random() * 12) + 9; // 9 AM to 8 PM
        const minute = Math.random() > 0.5 ? '00' : '30';
        events.push({
          id: `${year}-${month}-${day}-${i}`,
          title: 'One new high-quality lead',
          date: new Date(year, month, day),
          time: `${hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`
        });
      }
    }
    
    return events.sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  const events = generateEvents();

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getEventsForDay = (day: number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return events.filter(event => 
      event.date.getDate() === day &&
      event.date.getMonth() === month &&
      event.date.getFullYear() === year
    );
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="w-full h-full bg-background rounded-lg overflow-hidden">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <CalendarIcon className="h-5 w-5 text-foreground" />
          <h3 className="text-lg font-medium text-foreground">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={previousMonth}
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 border-b border-border bg-muted/30">
        {dayNames.map(day => (
          <div key={day} className="p-3 text-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 h-full">
        {getDaysInMonth().map((day, index) => {
          const dayEvents = day ? getEventsForDay(day) : [];
          
          return (
            <div
              key={index}
              className={`border-r border-b border-border min-h-[120px] p-2 ${
                day ? 'bg-background' : 'bg-muted/20'
              }`}
            >
              {day && (
                <>
                  <div className="text-sm font-medium text-foreground mb-2">
                    {day}
                  </div>
                  <div className="space-y-1">
                    {dayEvents.map(event => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                        className={`
                          px-2 py-1 rounded text-xs bg-primary/10 border border-primary/20 
                          cursor-pointer transition-all duration-200 
                          hover:bg-primary/20 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5
                          ${selectedEvent === event.id ? 'bg-primary/30 border-primary/60 shadow-lg transform -translate-y-1' : ''}
                        `}
                      >
                        <div className="font-medium text-primary text-[10px] leading-tight">
                          {event.title}
                        </div>
                        <div className="text-muted-foreground text-[9px]">
                          {event.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
