import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const date = (
  num: Date | string | number,
  time: Intl.DateTimeFormatOptions
) => {
  const newDate = new Date(num).toLocaleDateString("fa-IR", time);
  return newDate;
};

const Calendar = () => {
  return (
    <div className="flex flex-row-reverse items-center gap-2 text-white pt-3 pr-2">
      <span>
        <CalendarMonthIcon sx={{ fontSize: 16 }} />
      </span>
      <span className="flex flex-row-reverse text-xs gap-1">
        <p>{date(new Date(), { weekday: "long" })}</p>
        <p>{date(new Date(), { day: "numeric" })}</p>
        <p>{date(new Date(), { month: "long" })}</p>
      </span>
    </div>
  );
};

export default Calendar;
