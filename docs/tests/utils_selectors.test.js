// fichier de test pour src/utils/selectors

// on importe la syntaxe should
import { should } from 'chai';

// import de la fonction à tester
import { slugifyTitle, getRecipeBySlug } from '../src/utils/selectors';

// données de test pour les recettes => on met ce qu'on veut dedans
import recipes from './recipes';

// spécificité de should : il faut l'exécuter une première fois pour pouvoir l'utiliser
should();

/* describe décrit un bloc de test, 2 paramètres :
  - un texte qui décrit le bloc
  - une callback qui permet d'exécuter les tests pour ce bloc
*/

describe('selectors', () => {
  describe('function slugifyTitle', () => {
    /* it décrit un cas de test, 2 paramètres :
      - un texte qui décrit le cas de test
      - une callback qui permet d'exécuter les tests pour ce cas
     */
    it('is a function', () => {
      // notre première assertion :)
      slugifyTitle.should.be.a('function');
    });

    it('replaces spaces', () => {
      slugifyTitle('pizza margherita').should.equal('pizza-margherita');
    });

    // objectif: écrire un cas de test qui vérifie que les majuscules sont
    // remplacées par des minuscules
    it('lower case text', () => {
      slugifyTitle('PiZzA').should.equal('pizza');
    });
  });

  describe('function getRecipeBySlug', () => {
    it('get a recipe from its slug', () => {
      // je calcule le slug de la première recette en utilisant la fonction pour ça
      const slug = slugifyTitle(recipes[0].title);
      // jé vérifie que je récupère bien la première recette à partir du slug
      getRecipeBySlug(recipes, slug).should.equal(recipes[0]);
    });
  });
});
