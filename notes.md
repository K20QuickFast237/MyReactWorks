React – c'est l'API qui permet de gérer les composants.

React DOM – c’est l'API qui est responsable de générer les composants dans le DOM.

Babel – cet outil permet d'utiliser les dernières syntaxes de JS dans le navigateur (ES6+)

React met également à notre disposition un outil, les _Fragments_.
si on veut wrapper deux composants dans un seul parent sans que le parent apparaisse dans le DOM.
Pour ça, vous pouvez faire :
ReactDOM.render(<React.Fragment><Header /><Description /></React.Fragment>, document.getElementById("root"))

`*Les dossiers:*`

- _node_modules:_ c’est là que sont installées toutes les dépendances de notre code.
- _public:_ vous y trouvez votre fichier index.html et d’autres fichiers relatifs au référencement web de votre page.
- _src:_ L’essentiel des fichiers que vous créerez et modifierez seront là.

`*Les fichiers*`

- _package.json:_ il vous permet de gérer vos dépendances (tous les outils permettant de construire votre projet).
- _/public/index.html_: il s'agit du template de votre application.
- _/src/index.js_: il permet d’initialiser notre app React.
- _/src/App.js_: qui est notre premier composant React.

`*Les commandes*`

- _yarn/npm run build:_ vous permettra de créer un build avec votre code transformé et minifié, si vous devez déployer votre application en production (la mettre en ligne, par exemple).
- _yarn test:_ pour exécuter les tests.

### Les Termes de réact:

**Les props:** ce sont les paramètres que l'on passe à nos composants depuis le composant parent. Pour le composant parent, il s'apparente à des attributs que l'on spécifie au composant.

**Les propTypes:** elles nous permettent de préciser dès le début le type d'une prop, si elle est requise, et de lui attribuer une valeur par défaut.

**La prop children:** C'est une prop particulière qui est utilisée lorsque l'on ne connait pas d'avance le contenu d'un composant. Coté enfant elle est récupérée par la prop children. Coté parent elle est générée en imbricant des composants à l'intérieur du composant recevant la prop. exple:

- chez le parent:
  <monComposant>
  <h1>un titre</h1>
  <p>un paragraphe</p>
  <div>ma div</div>
  </monComposant>
- chez l'enfant:
  function MonComposant({childre}){
  return(
  <div className='affichageParticulier'>
  {children}
  </div>
  )
  }

**Un hook** est une fonction qui permet de _« se brancher » (to hook up)_ sur des fonctionnalités React.

**useEffect** permet d'effectuer _des effets_ : cela permet à notre composant d'exécuter des actions après l'affichage, en choisissant à quel moment cette action doit être exécutée.

Le hook useEffect est appelé après chaque rendu de votre composant. Il est possible de préciser quelle modification de donnée déclenche les effets exécutés dans useEffect, avec le tableau de dépendances.

Un tableau de dépendances vide permet d'exécuter un effet uniquement au premier rendu de votre composant.

**Styled Components**
Il existe plusieurs solutions de CSS in JS, avec leurs syntaxes propres. Ici nous allons nous intéresser à la bibliothèque _styled components_. npm i styled-components. Sa syntaxe est basée sur les Templates Stings de js pour faire du css in js. [details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

_Remarques:_

- Il faut toujours appeler useEffect au niveau racine votre composant, sans l'inclure dans une condition, une fonction imbriquée ou une boucle

### Quelques liens

- Des outils pour la [gestion des formulaires](https://react-hook-form.com/)

### Un peu de redux/react-redux

- Lorsque le state de Redux change, React-Redux réexécute les selectors, puis compare leur résultat avec le résultat précédent. Si le résultat est différent, alors le composant qui contient ce selector va être de nouveau rendu pour que les informations affichées soient toujours à jour.
