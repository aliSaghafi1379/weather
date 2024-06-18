const useDate = (date: Date = new Date(), mon: any = "long") => {
  const day = date.toLocaleDateString("fa-IR", { day: "numeric" });
  const weekDays = date.toLocaleDateString("fa-IR", { weekday: "long" });
  const month = date.toLocaleDateString("fa-IR", { month: mon });
  return { day, weekDays, month };
};

export default useDate;
