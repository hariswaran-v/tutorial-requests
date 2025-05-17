import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function formatDate(date, format = " DD-MMM-YYYY, hh:mm A") {
  return dayjs(date).format(format);
}

export function timeFromNow(date) {
  return dayjs(date).fromNow();
}
