import useDate from "@/pages/hooks/useDate";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Calendar = () => {
  const { day, weekDays, month } = useDate();
  return (
    <div className="flex flex-row-reverse items-center gap-2 text-white pt-3 pr-2">
      <span>
        <CalendarMonthIcon sx={{ fontSize: 16 }} />
      </span>
      <span className="flex flex-row-reverse text-xs gap-1">
        <p>{weekDays}</p>
        <p>{day}</p>
        <p>{month}</p>
      </span>
    </div>
  );
};

export default Calendar;
