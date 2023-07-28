

React – c'est l'API qui permet de gérer les composants.

React DOM – c’est l'API qui est responsable de générer les composants dans le DOM.

Babel – cet outil permet d'utiliser les dernières syntaxes de JS dans le navigateur (ES6+)

 
React met également à notre disposition un outil, les *Fragments*.
si on veut wrapper deux composants dans un seul parent sans que le parent apparaisse dans le DOM.
Pour ça, vous pouvez faire :
ReactDOM.render(<React.Fragment><Header /><Description /></React.Fragment>, document.getElementById("root"))

`*Les dossiers:*`
- *node_modules:* c’est là que sont installées toutes les dépendances de notre code.
- *public:* vous y trouvez votre fichier index.html et d’autres fichiers relatifs au référencement web de votre page.
- *src:* L’essentiel des fichiers que vous créerez et modifierez seront là.

`*Les fichiers*`
- *package.json:*  il vous permet de gérer vos dépendances (tous les outils permettant de construire votre projet).
- */public/index.html*: il s'agit du template de votre application.
- */src/index.js*: il permet d’initialiser notre app React.
- */src/App.js*: qui est notre premier composant React.


`*Les commandes*`
- *yarn/npm run build:*   vous permettra de créer un build  avec votre code transformé et minifié, si vous devez déployer votre application en production (la mettre en ligne, par exemple).
- *yarn test:*  pour exécuter les tests.