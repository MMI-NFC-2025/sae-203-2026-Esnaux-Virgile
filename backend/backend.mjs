import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://sae203.luminix.virgile-esnaux.fr:443'); // Port sur lequel PocketBase est lancé sur le VPS

// Retourne la liste de tous les artistes triés par date de représentation
export async function getArtistesByDate() {
    const records = await pb.collection('artiste').getFullList({
        sort: '+date_artiste'
    });
    return records;
}

// Retourne la liste de toutes les scènes triées par nom
export async function getScenesByOrder() {
    const records = await pb.collection('scene').getFullList({
        sort: '+nom_scene'
    });
    return records;
}

// Retourne la liste de tous les artistes triés par ordre alphabétique
export async function getArtistesByOrder() {
    const records = await pb.collection('artiste').getFullList({
        sort: '+nom_artiste'
    });
    return records;
}

// Retourne les informations d'un artiste en donnant son id en paramètre
export async function infoArtiste(id) {
    const record = await pb.collection('artiste').getOne(id);
    return record;
}

// Retourne les informations d'une scène en donnant son id en paramètre
export async function infoScene(id) {
    const record = await pb.collection('scene').getOne(id);
    return record;
}

// Retourne tous les artistes se produisant sur une scène donnée par son id, triés par date
export async function getArtistesByScene(sceneId) {
    const records = await pb.collection('artiste').getFullList({
        sort: '+date_artiste',
        filter: `scene = "${sceneId}"`
    });
    return records;
}

// Retourne tous les artistes se produisant sur une scène donnée par son nom, triés par date
export async function getArtistesBySceneName(sceneName) {
    const records = await pb.collection('artiste').getFullList({
        sort: '+date_artiste',
        filter: `scene.nom_scene = "${sceneName}"`
    });
    return records;
}

// Ajoute un nouvel artiste
export async function createArtiste(data) {
    const record = await pb.collection('artiste').create(data);
    return record;
}

// Modifie un artiste existant en donnant son id en paramètre
export async function updateArtiste(id, data) {
    const record = await pb.collection('artiste').update(id, data);
    return record;
}

// Ajoute une nouvelle scène
export async function createScene(data) {
    const record = await pb.collection('scene').create(data);
    return record;
}

// Modifie une scène existante en donnant son id en paramètre
export async function updateScene(id, data) {
    const record = await pb.collection('scene').update(id, data);
    return record;
}


// Commande utilisateur 

// Connecte un utilisateur avec son email et son mot de passe
export async function login(email, password) {
    const authData = await pb.collection('users').authWithPassword(email, password);
    return authData;
}

// Déconnecte l'utilisateur en effaçant le token de session
export async function logout() {
    pb.authStore.clear();
}

// Crée un nouveau compte utilisateur
export async function register(data) {
    const record = await pb.collection('users').create(data);
    return record;
}

// Retourne true si un utilisateur est actuellement connecté
export async function isLoggedIn() {
    return pb.authStore.isValid;
}


// Fonctions annexes


// Retourne la liste de tous les membres de l'équipe triés par nom
export async function getMembres() {
    const records = await pb.collection('membre').getFullList({
        sort: '+nom_membre'
    });
    return records;
}