import {PokemonServiceClass} from '../services/pokemon.service';

class PokemonController {
  pokemon;
  search:string;
  results:Array<any> = [{name: 'No Results'}];

  constructor(private PokemonService: PokemonServiceClass) {
    this.retrievePokemon();
  }

  retrievePokemon() {
    this.PokemonService.getPokemon()
      .then((pokemon) => {
        this.pokemon = pokemon.data['pokemon'];
      }).catch((e) => {
        console.log(e);
        this.results = [{name: 'Unable to retrieve Pokemon'}];
      });
  }

  searchPokemon() {
    if(this.search !== "") {
      this.results = this.pokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    } else {
      this.results = [{name: 'No Results'}];
    }
  }
}

PokemonController.$inject = ['PokemonService'];

export default PokemonController;
