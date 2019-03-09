import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Pipe({
  name: 'filter',
  // pure: true ??
})
export class FilterPipe implements PipeTransform {

  transform(products: IProduct[], searchText: string, priceSort: boolean): any {
    if (!searchText) {
      return this.sortProduct(products, priceSort);
    }

    const filteredProducts: IProduct[] = products
      .filter((product: IProduct) => {
        return `${product.title.toLowerCase()}${product.description.toLowerCase()}`
          .includes(searchText.toLowerCase());
      });


    return this.sortProduct(filteredProducts, priceSort);
  }

  private sortProduct(products: IProduct[], priceSort: boolean): IProduct[] {
    return products.sort((a: IProduct, b: IProduct) => {
      if (priceSort) {
        return a.price - b.price;
      }

      return b.price - a.price;
    });
  }
}
