# Vitrine Soutien blocus

Page d'accueil statique : `index.html` (français), `en/index.html` (anglais). Aucun outil de build, aucune ressource externe.

## Tester en local

Double-cliquer sur `index.html` suffit pour la lire, ce qui sert de secours sans réseau. Le navigateur peut alors bloquer le choix de thème mémorisé, et la page suit le thème du système.

Pour un rendu identique à la mise en ligne, depuis ce dossier :

```bash
py -m http.server 8765
```

puis ouvrir `http://localhost:8765/`.

## Publier sur GitHub Pages

GitHub Pages est gratuit pour un dépôt public. Le code de la plateforme reste dans un dépôt séparé.

1. Sur GitHub, créer un dépôt public, par exemple `soutien-blocus`.
2. Y copier le contenu de ce dossier `vitrine/` à la racine (pas le dossier lui-même) :

   ```bash
   cd vitrine
   git init -b main
   git add .
   git commit -m "Vitrine"
   git remote add origin https://github.com/SoutienLyceeBlocus/cours-distanciel.git
   git push -u origin main
   ```

3. Dans le dépôt : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`, **Save**.
4. Après une à deux minutes, la page est en ligne sur `https://soutienlyceeblocus.github.io/cours-distanciel/`.

## Avant d'envoyer le lien

1. Remplacer tous les `[À COMPLÉTER : …]` dans `index.html` et `en/index.html`.
2. Mettre l'adresse complète de l'image de partage dans `og:image`, sinon WhatsApp, Signal et Telegram n'affichent pas d'aperçu :
   - `index.html` : `https://soutienlyceeblocus.github.io/cours-distanciel/og.png`
   - `en/index.html` : `https://soutienlyceeblocus.github.io/cours-distanciel/og-en.png`
3. Lancer les vérifications de publication depuis la racine du projet :

   ```bash
   .venv/Scripts/python -m pytest tests/vitrine -v
   ```

   Tout doit passer, y compris `test_aucun_texte_provisoire` et `test_og_image_absolue`.

## Polices

Fraunces et Public Sans, sous licence SIL Open Font License 1.1 (voir `fonts/LICENCE-OFL.txt`). Elles sont réduites aux caractères latins et à la ponctuation française.
