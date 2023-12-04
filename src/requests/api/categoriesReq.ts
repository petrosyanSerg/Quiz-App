import instance from "@/requests/instance";

const CATEGORIES = "/categories"
export const getCategories = async () => {
  return await instance.get(CATEGORIES)
}