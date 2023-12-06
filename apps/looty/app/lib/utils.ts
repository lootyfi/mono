import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(targetDate: string): string {
  // if date is in future in weeks, show 7W
  // if date is in future in days, show 7D
  // if date is in future in hours, show 7H
  // if date is in future in minutes, show 7M
  // if date is in future in seconds, show 7S
  // date must be in future
  // date format formatDate("2024-10-10T10:10:10.000Z")
  const date = new Date(targetDate)
  const now = new Date()
  
  const diff = date.getTime() - now.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  
  if (weeks > 0) {
    return `${weeks}w`
  }
  if (days > 0) {
    return `${days}d`
  }
  if (hours > 0) {
    return `${hours}h`
  }
  if (minutes > 0) {
    return `${minutes}m`
  }
  if (seconds > 0) {
    return `${seconds}s`
  }

  return "0s"

}
