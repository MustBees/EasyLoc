# Mobility Flow - Démo Next.js

Base de démonstration pour une plateforme de location de voiture connectée à Odoo.

## Ce qui est inclus
- Page d'accueil avec 4 parcours
- Pages modules : réservation, choix voiture, transport, sinistre
- Architecture claire pour brancher Odoo
- Base de styling sans dépendances supplémentaires

## Lancer en local
```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Déploiement démo sur Vercel
1. Créer un compte GitHub.
2. Mettre ce projet dans un repository GitHub.
3. Créer un compte Vercel.
4. Importer le repository GitHub dans Vercel.
5. Cliquer sur Deploy.
6. Pour une démo simple, aucune variable d'environnement n'est obligatoire tant que Odoo n'est pas branché.

## Étape suivante recommandée
Construire le workflow complet du module **Loue une voiture** avant d'intégrer les autres.
