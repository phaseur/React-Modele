import React from 'react';

// Enzyme permet de faire le rendu d'un composant React avec 'shallow'
// on peut ensuite tester le contenu HTML, les enfants, simuler des clics...
// https://enzymejs.github.io/enzyme/docs/api/shallow.html
import { shallow } from 'enzyme';

// pour faciliter l'écriture des assertions
import { expect } from 'chai';

// import du composant à tester
import RecipeSmall from '../src/components/Home/RecipeSmall';

describe('<RecipeSmall />', () => {
  it('Uses information given as props', () => {
    // j'indique du JSX en argument à shallow pour qu'il fasse le rendu
    // je fournis des fausses valeurs de props
    const testTitle = 'Pizza Margherita';

    const wrapper = shallow(<RecipeSmall thumbnail="pizza.png" title={testTitle} difficulty="Facile" />);

    // objectif : vérifier qu'il y a bien un h2 avec 'Pizza' dedans
    // je récupère tous les éléments h2 dans le rendu du composant
    const elementsH2 = wrapper.find('h2');
    // je vérifie que j'en ai bien un seul
    expect(elementsH2).to.have.lengthOf(1);

    // je vérifie que le contenu est bien ce qui est fourni en prop
    expect(elementsH2.text()).to.equal(testTitle);

    // => si pour debugguer l'affichage on met un nom de recette en dur dans le
    // composant, alors le test nous informe qu'il y a un problème

    // TODO : vérifier aussi les deux autres props

    // objectif : vérifier l'URL du lien => je devrais avoir /recipe/pizza-margherita
    // rendu shallow : les sous-composants ne sont pas rendus, on les voit, mais pas
    // leur html
    const linkElements = wrapper.find(Link);
    expect(linkElements).to.have.lengthOf(1);
    // je vérifie que la prop "to" du composant Link a bien la valeur attendue
    expect(linkElements.props()).to.have.property('to', '/recipe/pizza-margherita');
  });
});
