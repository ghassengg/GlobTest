# GlobTest

## Enoncé

[Echo](https://www.instagram.com/globalisecho/?hl=fr), mascotte de l'équipe de [Globalis](https://www.globalis-ms.com/), a découvert une fonction `foo()` bien mystérieuse. Hélas, il n'a pas accès au code. Curieux et grand amateur de [rétro-ingénierie](https://fr.wikipedia.org/wiki/R%C3%A9tro-ing%C3%A9nierie), Echo s'est amusé à appeler cette fonction, en injectant des données en entrée et en récoltant les sorties. Le comportement de la fonction `foo()` est le suivant :

| Appel                                                                |        Sortie         |
| -------------------------------------------------------------------- | :-------------------: |
| `foo([[0, 3], [6, 10]])`                                             |  `[[0, 3], [6, 10]]`  |
| `foo([[0, 5], [3, 10]])`                                             |      `[[0, 10]]`      |
| `foo([[0, 5], [2, 4]])`                                              |      `[[0, 5]]`       |
| `foo([[7, 8], [3, 6], [2, 4]])`                                      |  `[[2, 6], [7, 8]]`   |
| `foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]])` | `[[1, 10], [15, 20]]` |

Le challenge, si vous l'acceptez, serait d'aider Echo à comprendre ce que fait cette fonction et à la recoder. Vous êtes partant ? ;)

### Question 1

Expliquez, en quelques lignes, ce que fait cette fonction.

### Réponse 1

La fonction FOO permet de trier les intervalles tout d'abord ensuite elle fusion les intervalles qui ont une intersection entre eux.
Example si on a deux intervalles [70,80] et [75,85] , on remarque qu'ils ont un intervalle commun entre les deux ==> [75,80] , donc la fonction FOO fusionner les deux intervalles en obtenant un seul intervalle [70,85].

### Question 2

Codez cette fonction.
Merci de fournir un fichier contenant :

- la fonction,
- l'appel de la fonction, avec un jeu de test en entrée,
- l'affichage du résultat en sortie.

### Réponse 3

Pour tester l'application il faut utiliser la CLI en tapant la commande suivante par example node app.js [1,2],[2,6]

### Question 3

Précisez en combien de temps vous avez implémenté cette fonction.

### Réponse 3

le temps emis est 2 H 15 minutes

## Merci

Par avance, un grand merci pour le temps que vous consacrerez à ce challenge, en espérant vous voir rejoindre très prochainement [nos équipes](https://www.globalis-ms.com/jobs/) ;)
