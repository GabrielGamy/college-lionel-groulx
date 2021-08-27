// ======================================
// Exemple - Async & Promise
// ======================================

// 1- Envoi d'un courriel apres 3 secondes
const sendEmail = (to, subject, body) => {
    console.log(`Sending an email to ${to}, Subject[${subject}], Body[${body}]`);
}

setTimeout(() => {
    sendEmail('info@univ.com', 'Demande Inscription', 'Inscription au cours 420-154-LG');
}, 3000)


// 2- Obtenir la liste des cours disponibles et choisir un cours 
const fetchCourses = (callback) => {
    setTimeout(() => {
        let courses = ['420-156-LG', '420-160-LG'];
        callback(courses);
    }, 6000)
}

setTimeout(() => {
    fetchCourses((courses) => {
        courses.forEach(course => {
            sendEmail('info@univ.com', 'Demande Inscription', `Inscription au cours ${course}`);
        });
    });
}, 5000)

// 3- La technique des callbacks fonctionne mais devient difficile de gestion avec plusieurs appels 
// On utilise dans ce cas le Promise.
const fetchCoursesWithPromise = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let courses = ['420-156-LG', '420-160-LG'];
            resolve(courses);
        }, 20000)
    });
    return promise;
}

setTimeout(() => {
    fetchCoursesWithPromise()
    .then((courses) => {
        sendEmail('info@univ.com', 'Demande Inscription', `Inscription au cours ${courses[0]}`);
        return fetchCoursesWithPromise();
    })
    .then((courses) => {
        sendEmail('info@univ.com', 'Annulation Inscription', `Inscription au cours ${courses[1]}`);
    });
}, 15000)
