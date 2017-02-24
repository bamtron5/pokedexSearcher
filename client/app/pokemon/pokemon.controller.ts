import {PokemonServiceClass} from '../services/pokemon.service';

class PokemonController {
  pokemon;
  search:string;
  results:Array<any> = [{name: 'No Results'}];
  types:Array<any>;
  selectedType:any = {name: 'all'};

  constructor(private PokemonService: PokemonServiceClass) {
    this.retrievePokemon();
  }

  retrievePokemon() {
    this.PokemonService.getPokemon()
      .then((pokemon) => {
        this.pokemon = pokemon.data['pokemon'];
        this.getTypes();
      }).catch((e) => {
        console.log(e);
        this.results = [{name: 'Unable to retrieve Pokemon'}];
      });
  }

  selectType(type) {
    this.selectedType = type;
  }

  getTypes() {
    this.PokemonService.getTypes()
      .then((types) => {
        this.types = types.data['results'];
        this.types.unshift({name: 'all'});
      }).catch((e) => {
        console.log(encodeURI);
      });
  }

  searchPokemon() {
    if(this.search !== "") {
      if(this.selectedType.name === 'all') {
        this.results = this.searchByString(this.pokemon);
      } else {
        this.results = this.filterByType();
        this.results = this.searchByString(this.results);
      }
    } else {
      this.results = [{name: 'No Results'}];
    }
  }

  searchByString(listOfPokemon) {
    return listOfPokemon.filter((pokemon) => {
      return pokemon.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
    });
  }

  filterByType() {
    return this.pokemon.filter((pokemon) => {
      return pokemon.type.some((type) => {
        return type.toLowerCase() === this.selectedType.name;
      });
    });
  }
}

PokemonController.$inject = ['PokemonService'];

export default PokemonController;
