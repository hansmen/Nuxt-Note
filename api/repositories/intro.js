import Repository from '@/api/Repository';
import { INTROS } from '@/api/consts/intro';

export default {
  getCategories(params) {
    return Repository.get(INTROS.GET_INTROS, {
      params,
    });
  },
  getCategory(query) {
    return Repository.get(INTROS.GET_INTRO + query);
  },
  createCategory(payload) {
    return Repository.post(INTROS.CREATE_INTRO, payload);
  },
  copyCategory(query) {
    return Repository.post(INTROS.CREATE_INTRO, query);
  },
  updateCategory(query, payload) {
    return Repository.put(INTROS.UPDATE_INTRO + query, payload);
  },
  deleteCategory(query) {
    return Repository.delete(INTROS.DELETE_INTRO + query);
  },
};
