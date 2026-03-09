import PocketBase from 'pocketbase';

export const pb = new PocketBase(import.meta.env.PUBLIC_POCKETBASE_URL ?? 'http://127.0.0.1:8090');

export const getArtistes = () => pb.collection('artistes').getFullList({ sort: 'name' });
export const getArtisteById = (id) => pb.collection('artistes').getOne(id);
export const getScenes = () => pb.collection('scenes').getFullList({ sort: 'name' });
export const getSceneById = (id) => pb.collection('scenes').getOne(id, { expand: 'artistes' });
export const getPartenaires = () => pb.collection('partenaires').getFullList();
export const getMembres = () => pb.collection('membres').getFullList({ sort: 'groupe' });

export const isLoggedIn = () => pb.authStore.isValid;
export const login = (email, password) => pb.collection('users').authWithPassword(email, password);
export const logout = () => pb.authStore.clear();
