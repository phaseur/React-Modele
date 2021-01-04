// import d'une syntaxe de Chai
import { expect } from 'chai';

// import de la fonction à tester
import reducer from '../src/reducers/recipes';

// import de l'action creator
import { saveRecipes } from '../src/actions/recipes';

// only (sur describe ou it) permet d'exécuter seulement ce bloc de test, les autres
// blocs et les autres fichiers sont ignorés (=> bien penser à l'enlever quand on a
// fini de mettre au point les tests)
// describe.only('reducer for recipes', () => {

// skip (sur describe ou it) permet de zapper le bloc de test
// describe.skip('reducer for recipes', () => {
describe('reducer for recipes', () => {
  it('is a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('check initial state', () => {
    const expectedInitialState = {
      listRecipes: [],
    };
    // on appelle reducer sans arguments pour récupérer le state initial
    // on veut comparer par valeur et pas par référence => deep
    expect(reducer()).to.deep.equal(expectedInitialState);
  });

  // vérifier que le reducer traite correctement l'action SAVE_RECIPES
  it('check treatment of action SAVE_RECIPES', () => {
    // on définit un faux état
    const stateBefore = {
      listRecipes: [],
      // une fausse donnée, pour vérifier qu'elle ne sera pas modifiée
      anotherElement: true,
    };

    // on crée une action de type SAVE_RECIPES
    // on vérifie d'abord que saveRecipes est une fonction, au cas où
    expect(saveRecipes).to.be.a('function');
    // fausses données pour les recettes : on respecte le type du payload (ici un
    // tableau d'objets) mais peu importe si les données ne sont pas cohérentes
    const recipes = [
      { a: 1 },
      { b: 2 },
    ];
    const action = saveRecipes(recipes);

    // on calcule l'état qu'on devrait avoir après application de l'action sur
    // stateBefore
    const expectedState = {
      listRecipes: recipes,
      anotherElement: true,
    };

    expect(reducer(stateBefore, action)).to.deep.equal(expectedState);
  });
});
