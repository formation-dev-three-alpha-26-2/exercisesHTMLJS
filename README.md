

#  Exercice 1 — Sélecteur de Thème

## Créer une page web interactive qui permet à l’utilisateur de choisir un thème de couleur pour personnaliser l’apparence de la page.

Selon le choix de l’utilisateur, la page devra :

- Changer ses couleurs  
- Afficher une image différente  
- Afficher un message indiquant le thème appliqué  

---

1 — Demander un thème

Utiliser `prompt()`.

Choix possibles :

- green  
- blue  
- red  

---


2 — Validation

Le programme doit continuer à demander un thème tant que
l’utilisateur n’entre pas une valeur valide.

Si l’entrée est incorrecte, afficher :

**Invalid input. Please type green, blue, or red**

Utiliser `while()` et `break`.

---

3 —  Modifier le style

Une fois le thème choisi, modifiez le style de la page avec JavaScript.
Chaque thème doit utiliser au moins trois nuances de la couleur choisie.

Exemple pour **green** :

- Fond : vert clair  
- Texte : vert  
- Bordure : vert foncé  

---

4 — Message

Affichez un message pour indiquer quel thème a été appliqué.

Exemple :

Green theme applied!
Changer l’image

---

5 — Changer l’image

La page doit afficher une image différente selon le thème choisi.

---


#  Exercice 2 — To-Do List App


## Créer une application To-Do List interactive 


L’application doit permettre de :

- Ajouter une nouvelle tâche.  
- Afficher toutes les tâches dans une liste. 
- Supprimer une tâche en cliquant dessus.
- Sauvegarder les tâches dans localStorage pour qu’elles restent après un refresh.

 --- 
 
### Structure des données

Chaque tâche doit être représentée par un objet JavaScript.

Exemple :

````javascript
{
  id: 1,
  value: "Apprendre JS",
  date: "2026-03-02",
  completed: false
}
````

Stockez toutes les tâches dans un tableau :
````javascript
let todos = [];
````
---

### Fonctionnalités : 

1 — Afficher les tâches :

* parcourir le tableau tasks et créer un élément  `<li>`   pour chaque tâche

* afficher le texte de la tâche


2  —  Ajouter une tâche , Créer :

* un input

* un bouton Add

Quand l'utilisateur ajoute une tâche :

* créer un objet task

* ajouter la tâche dans le tableau

* afficher la tâche dans la liste


3 — Supprimer une tâche :  

* Ajouter la possibilité de supprimer une tâche.

4 — Marquer une tâche comme completed  , quand on clique sur une tâche :

* changer completed à true

* appliquer une classe CSS

Exemple :
````css
text-decoration: line-through;
opacity: 0.6;
````

5 — Ajouter un compteur de tâches le compteur doit se mettre à jour quand on ajoute une tâche ou on supprime une tâche
et Afficher :

 `Tasks: 3` 



6 — Bouton Clear All , ajouter un bouton  `Clear All` ce bouton doit : 

* supprimer toutes les tâches

* vider le tableau tasks

  

7 — Modifier une tâche (Edit) , ajouter un bouton Edit pour chaque tâche quand on clique : 


* remplacer le texte par un input

* permettre à l'utilisateur de modifier la tâche

* sauvegarder la modification


8 — Trier les tâches par date qued haque tâche possède une date de création , créer un bouton  `Sort by Date`:

* trier les tâches du plus récent au plus ancien


9 — Sauvegarde avec localStorage  , sauvegarder les tâches avec local storage :

indice : 
````javascript
localStorage.setItem()
localStorage.getItem()

````
