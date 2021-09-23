import http from './http-common'
import { categories } from '../mock-data/categories.js'

const loadCategories = () => {
  return categories;
}

const categoryService = {
  loadCategories
};

export default categoryService
