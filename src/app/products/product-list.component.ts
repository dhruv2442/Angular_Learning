import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  // Notice the backticks ( ` ) that define a JavaScript template literal for embedding the product name
  imageWidth: number = 50;
  imageMargin: number = 2;
  lineHeight: number = 75;
  tdWidth: number = 16.67;
  btnWidth: number = 105;
  filteredProducts: IProduct[];
  showImage: boolean = false;
  errorMessage : string;
  onRatingCicked(message : string) : void {
    this.pageTitle = 'Product List: ' + message;
  }
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  products: IProduct[];

constructor(private _productService: ProductService) {
    this.listFilter = "";
    }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  onRatingClicked(message : string) : void {
    this.pageTitle = "Product List : " + message;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("In OnInit");
    this._productService.getProducts()
    .subscribe(
      products=>{

        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = error
  )
  }
}
