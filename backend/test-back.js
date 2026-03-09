import {
    getArtistesByDate,
    getScenesByOrder,
    getArtistesByOrder,
    infoArtiste,
    infoScene,
    getArtistesByScene,
    getArtistesBySceneName,
    upsertRecord,
    login,
    logout,
    register,
    isLoggedIn
} from './backend.mjs';

/*

// Test : liste des artistes triés par date
try {
    const artistes = await getArtistesByDate();
    console.log('getArtistesByDate :', artistes);
} catch (e) {
    console.error(e);
}

// Test : liste des scènes triées par nom
try {
    const scenes = await getScenesByOrder();
    console.log('getScenesByOrder :', scenes);
} catch (e) {
    console.error(e);
}

// Test : liste des artistes triés par ordre alphabétique
try {
    const artistes = await getArtistesByOrder();
    console.log('getArtistesByOrder :', artistes);
} catch (e) {
    console.error(e);
}

// Test : infos d'un artiste par son id
try {
    const artiste = await infoArtiste('ID_ARTISTE_ICI');
    console.log('infoArtiste :', artiste);
} catch (e) {
    console.error(e);
}

// Test : infos d'une scène par son id
try {
    const scene = await infoScene('ID_SCENE_ICI');
    console.log('infoScene :', scene);
} catch (e) {
    console.error(e);
}

// Test : artistes d'une scène par son id, triés par date
try {
    const artistes = await getArtistesByScene('ID_SCENE_ICI');
    console.log('getArtistesByScene :', artistes);
} catch (e) {
    console.error(e);
}

// Test : artistes d'une scène par son nom, triés par date
try {
    const artistes = await getArtistesBySceneName('NOM_SCENE_ICI');
    console.log('getArtistesBySceneName :', artistes);
} catch (e) {
    console.error(e);
}

// Test : création d'un artiste
try {
    const nouvelArtiste = await upsertRecord('artiste', {
        nom_artiste: 'Test Artiste',
        date_artiste: '2026-07-01'
    });
    console.log('upsertRecord (création artiste) :', nouvelArtiste);
} catch (e) {
    console.error(e);
}

// Test : modification d'un artiste existant
try {
    const artisteModifie = await upsertRecord('artiste', {
        nom_artiste: 'Artiste Modifié'
    }, 'ID_ARTISTE_ICI');
    console.log('upsertRecord (modification artiste) :', artisteModifie);
} catch (e) {
    console.error(e);
}

// Test : création d'une scène
try {
    const nouvelleScene = await upsertRecord('scene', {
        nom_scene: 'Nouvelle Scène'
    });
    console.log(nouvelleScene);
} catch (e) {
    console.error(e);
}

// Test : modification d'une scène existante
try {
    const sceneModifiee = await upsertRecord('scene', {
        nom_scene: 'Scène Modifiée'
    }, 'ID_SCENE_ICI');
    console.log(sceneModifiee);
} catch (e) {
    console.error(e);
}



// Test : enregistrement d'un utilisateur / login / logout 


try {
    const user = await register('testuser', 'password123');
    console.log('Utilisateur enregistré :', user);
} catch (e) {
    console.error(e);
}

try {
    const loginResult = await login('testuser', 'password123');
    console.log('Résultat de la connexion :', loginResult);
} catch (e) {
    console.error(e);
}

try {
    const loggedIn = await isLoggedIn();
    console.log('Utilisateur connecté :', loggedIn);
} catch (e) {
    console.error(e);
}

try {
    await logout();
    console.log('Utilisateur déconnecté');
} catch (e) {
    console.error(e);
}

*/
