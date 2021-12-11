import dayjs, { Dayjs } from "dayjs";

export const formatDate = (date: string, format: "MM/DD/YYYY" | "MM/DD/YYYY hh:mm a"): string => {
  return dayjs(date).format(format)
}

interface IFullName {
  firstName: string;
  lastName: string;
  createdAt?: Date; // new Date()
  friendCount?: number;
  isActive?: boolean;
}

export const fullName = ({ firstName, lastName, createdAt }: IFullName): string => {
  if (createdAt) return `${firstName} ${lastName} created at ${createdAt.getUTCMilliseconds()}`;
  else return `${firstName} ${lastName}`;
}

// example
const user: IFullName = {
  firstName: "George",
  lastName: "Jungle"
}

const name = fullName(user);
console.log(name);

enum FormatTypes {
  dateTime = "MM/DD/YYYY hh:mm",
  date = "MM/DD/YYYY",
}

const dayjsFormatter = (date: Dayjs, format: FormatTypes): string => {
  return date.format(format.valueOf());
}

dayjsFormatter(dayjs(), FormatTypes.dateTime);