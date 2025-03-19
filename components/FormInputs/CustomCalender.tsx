"use client";

import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  format,
  isToday,
  isValid,
  isAfter,
  isBefore,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  getYear,
  setYear,
  setMonth,
  getMonth,
} from "date-fns";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CalendarProps {
  selectedDate?: Date;
  onSelectDate: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  showOutsideDays?: boolean;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Generate a range of years (current year -10 to +10)
const generateYearRange = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear - 100; year <= currentYear + 20; year++) {
    years.push(year);
  }
  return years;
};

const YEARS = generateYearRange();

const CustomCalendar: React.FC<CalendarProps> = ({
  selectedDate,
  onSelectDate,
  minDate,
  maxDate,
  className,
  showOutsideDays = true,
}) => {
  const [currentMonth, setCurrentMonth] = useState(
    selectedDate && isValid(selectedDate) ? selectedDate : new Date()
  );
  const [calendarDays, setCalendarDays] = useState<Array<Date>>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<"next" | "prev">(
    "next"
  );
  const [yearSelectOpen, setYearSelectOpen] = useState(false);

  const generateCalendarDays = useCallback((date: Date) => {
    // Get the start and end of the month
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);

    // Get the start and end of the calendar (including days from previous/next months)
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);

    // Get all the days in the interval
    return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  }, []);

  useEffect(() => {
    setCalendarDays(generateCalendarDays(currentMonth));
  }, [currentMonth, generateCalendarDays]);

  const handlePreviousMonth = () => {
    setIsAnimating(true);
    setAnimationDirection("prev");
    setTimeout(() => {
      setCurrentMonth((prev) => subMonths(prev, 1));
      setIsAnimating(false);
    }, 200);
  };

  const handleNextMonth = () => {
    setIsAnimating(true);
    setAnimationDirection("next");
    setTimeout(() => {
      setCurrentMonth((prev) => addMonths(prev, 1));
      setIsAnimating(false);
    }, 200);
  };

  const handleSelectDate = (day: Date) => {
    onSelectDate(day);
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && isBefore(date, minDate)) return true;
    if (maxDate && isAfter(date, maxDate)) return true;
    return false;
  };

  const handleMonthChange = (monthIndex: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      const newDate = setMonth(currentMonth, parseInt(monthIndex));
      setCurrentMonth(newDate);
      setIsAnimating(false);
    }, 200);
  };

  const handleYearChange = (year: string) => {
    setIsAnimating(true);
    setYearSelectOpen(false);
    setTimeout(() => {
      const newDate = setYear(currentMonth, parseInt(year));
      setCurrentMonth(newDate);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div
      className={cn("p-3 space-y-4 select-none pointer-events-auto", className)}
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handlePreviousMonth}
          className="calendar-nav-button"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1 cursor-pointer">
          {/* Month Selection */}
          <Select
            value={getMonth(currentMonth).toString()}
            onValueChange={handleMonthChange}
          >
            <SelectTrigger className="h-auto w-auto border-none p-0 font-medium text-sm hover:bg-secondary/50 rounded">
              <SelectValue>{format(currentMonth, "MMMM")}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {MONTHS.map((month, index) => (
                <SelectItem key={month} value={index.toString()}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Year Selection */}
          <DropdownMenu open={yearSelectOpen} onOpenChange={setYearSelectOpen}>
            <DropdownMenuTrigger asChild>
              <button className="font-medium text-sm hover:bg-secondary/50 rounded px-1 inline-flex items-center gap-1">
                {format(currentMonth, "yyyy")}
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-56 overflow-y-auto">
              {YEARS.map((year) => (
                <DropdownMenuItem
                  key={year}
                  onClick={() => handleYearChange(year.toString())}
                  className={cn(
                    "cursor-pointer",
                    getYear(currentMonth) === year &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  {year}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button
          type="button"
          onClick={handleNextMonth}
          className="calendar-nav-button"
          aria-label="Next month"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div
        className={cn(
          "animate-fade-in",
          isAnimating && animationDirection === "next" && "animate-fade-out",
          isAnimating && animationDirection === "prev" && "animate-fade-out"
        )}
      >
        <div className="grid grid-cols-7 mb-1">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="text-[0.6rem] font-medium text-center text-muted-foreground h-8 flex items-center justify-center"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            const isOutsideDay = !isSameMonth(day, currentMonth);
            const isSelectedDay = selectedDate
              ? isSameDay(day, selectedDate)
              : false;
            const isCurrentDay = isToday(day);
            const isDisabled = isDateDisabled(day);

            return (
              <div key={index} className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => !isDisabled && handleSelectDate(day)}
                  disabled={isDisabled}
                  className={cn(
                    "calendar-day",
                    isSelectedDay && "calendar-day-selected",
                    isCurrentDay && !isSelectedDay && "calendar-day-today",
                    isOutsideDay &&
                      !isSelectedDay &&
                      !showOutsideDays &&
                      "invisible",
                    isOutsideDay &&
                      !isSelectedDay &&
                      showOutsideDays &&
                      "calendar-day-outside",
                    isDisabled && "calendar-day-disabled",
                    "text-sm font-normal"
                  )}
                >
                  {format(day, "d")}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
