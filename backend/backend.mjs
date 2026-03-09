import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090/');

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

// Ajoute ou modifie les informations d'un artiste ou d'une scène selon le type fourni ('artiste' ou 'scene')
export async function upsertRecord(type, data, id = null) {
    if (type !== 'artiste' && type !== 'scene') {
        throw new Error("Le type doit être 'artiste' ou 'scene'");
    }
    if (id) {
        // Modification d'un enregistrement existant
        const record = await pb.collection(type).update(id, data);
        return record;
    } else {
        // Ajout d'un nouvel enregistrement
        const record = await pb.collection(type).create(data);
        return record;
    }
}


// Commande utilisateur 

// Connecte un utilisateur avec son email et son mot de passe
// Retourne les données de l'utilisateur connecté + le token
export async function login(email, password) {
    const authData = await pb.collection('users').authWithPassword(email, password);
    return authData;
}

// Déconnecte l'utilisateur en effaçant le token de session
export async function logout() {
    pb.authStore.clear();
}

// Crée un nouveau compte utilisateur
// data doit contenir : email, password, passwordConfirm (et optionnellement name)
export async function register(data) {
    const record = await pb.collection('users').create(data);
    return record;
}

// Retourne true si un utilisateur est actuellement connecté
export async function isLoggedIn() {
    return pb.authStore.isValid;
}