

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

**Un hook** est une fonction qui permet de *« se brancher » (to hook up)* sur des fonctionnalités React.

**useEffect** permet d'effectuer *des effets* : cela permet à notre composant d'exécuter des actions après l'affichage, en choisissant à quel moment cette action doit être exécutée.

Le hook  useEffect   est appelé après chaque rendu de votre composant. Il est possible de préciser quelle modification de donnée déclenche les effets exécutés dans useEffect, avec le tableau de dépendances.

Un tableau de dépendances vide permet d'exécuter un effet uniquement au premier rendu de votre composant.

*Remarques:* 
- Il faut toujours appeler  useEffect  au niveau racine votre composant, sans l'inclure dans une condition, une fonction imbriquée ou une boucle

### Quelques liens
- Des outils pour la [gestion des formulaires](https://react-hook-form.com/)