import dayjs from "dayjs"; // default import
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import buddhistEra from "dayjs/plugin/buddhistEra";
import calendar from "dayjs/plugin/calendar";
import isBetween from "dayjs/plugin/isBetween";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isoWeek from "dayjs/plugin/isoWeek";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isYesterday from "dayjs/plugin/isYesterday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
import localeData from "dayjs/plugin/localeData";

import "dayjs/locale/th";
import "dayjs/locale/en";

dayjs.locale("th"); // ตั้งค่า locale เป็น th
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);
dayjs.extend(quarterOfYear);
dayjs.extend(buddhistEra);
dayjs.extend(calendar);
dayjs.extend(isBetween);
dayjs.extend(isLeapYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isoWeek);
dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(localeData);

dayjs.tz.setDefault("Asia/Bangkok");

export default dayjs;
