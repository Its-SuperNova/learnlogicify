// allcourses/utils/typeGuards.ts
import { Course } from "../data/courseData";

export function isCourseKey(key: string): key is keyof Course {
  return [
    "Level",
    "icon",
    "title",
    "topics",
    "videos",
    "desc",
    "offer",
    "price",
    "originalPrice",
    "bannerColor",
  ].includes(key);
}
