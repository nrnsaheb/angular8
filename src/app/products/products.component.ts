import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { Products } from '@app/_models';
import { UserService, AuthenticationService} from '@app/_services';

import { ProductsService } from '@app/_services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  loading = false;
    items = [];
    pageOfItems: Array<any>;
    Products: Products[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.loading = true;
    // tslint:disable-next-line:no-shadowed-variable
    this.productsService.getAllProducts().pipe(first()).subscribe((Products: Products[]) => {
        this.loading = false;
        this.Products = Products;
        console.log(this.Products);
    });
  }

}
