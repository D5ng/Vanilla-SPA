import dayjs from "dayjs"
import "dayjs/locale/ko"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export function formatDate(dt: number, timezone: number) {
  const utcTime = dayjs.unix(dt).utc() // dt는 초 단위
  const offsetHours = timezone / 3600 // 예: 32400 → 9
  const localTime = utcTime.utcOffset(offsetHours)

  return localTime.format("YYYY-MM-DD HH:mm")
}

export function formatISODate(iso: string | number) {
  return dayjs(iso).locale("ko").format("YYYY년 M월 D일 ddd요일 HH:mm")
}
