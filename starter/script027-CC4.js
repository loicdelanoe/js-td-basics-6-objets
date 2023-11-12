/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const mark = {
    nom: 'Mark',
    poids: 70,
    taille: 190,
    bmi() {
        return this.poids / this.taille ** 2;
    },
};

const john = {
    nom: 'John',
    poids: 70,
    taille: 190,
    bmi() {
        return this.poids / this.taille ** 2;
    },
};

if (john.bmi() > mark.bmi()) {
    console.log("John à un BMI plus élevé");
} else if (john.bmi() < mark.bmi()) {
    console.log("Mark à un BMI plus élevé");
} else {
    console.log("John et Mark on le même BMI");
}