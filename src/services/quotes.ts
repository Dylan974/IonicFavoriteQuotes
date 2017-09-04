import { Quote } from '../data/quote.interface';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote){
    const quoteAlreadyAdded = this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    })
    console.log(quoteAlreadyAdded);
    if(!quoteAlreadyAdded){
      this.favoriteQuotes.push(quote);
    }
  }

  removeQuoteFromFavorites(quote: Quote){
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    })
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes(){
    // add slice to return a copy of the array
    return this.favoriteQuotes.slice();
  }

}
