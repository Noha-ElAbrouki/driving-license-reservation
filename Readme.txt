This project implements the good practices front (code splitting, lazy loding, lint, tests ..) using github actiond for ci/cd ,
deployed on vercel.

visit : https://driving-license-reservation.vercel.app/rdvs

or start the project locally: 

1- npm install
2- npm start

Utiliser le tableau de bord de prise de rendez-vous pour le permis de conduire.

L'application se compose d'un :

Tableau de bord affichant les dates et les lieux pour chaque auto-école.
Chaque colonne du tableau permet le tri (champs numériques ainsi que champs textuels).
Chaque ligne du tableau contient 2 actions (boutons) :
"Visualiser" pour voir les détails de l'école.
"Réserver" qui vous dirige vers un assistant, demandant les informations de l'utilisateur (inscription) et un paiement, pour réserver un rendez-vous pour le permis de conduire.
Un espace utilisateur contenant le rendez-vous réservé avec 2 actions :
"Modifier" pour changer la date du rendez-vous à partir d'une liste de dates.
 une notification de confirmation pour une date modifié avec succés
"Supprimer" pour annuler le rendez-vous.
