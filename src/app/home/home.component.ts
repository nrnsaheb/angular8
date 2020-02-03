import { Component, NgModule } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { Products } from '@app/_models';
import { UserService, AuthenticationService} from '@app/_services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ProductsService } from '@app/_services';

@Component({ templateUrl: 'home.component.html',
styleUrls: ['./home.component.less'] })
export class HomeComponent {
    loading = false;
    searchText;
    users: User[];
    items = [];
    pageOfItems: Array<any>;
    Products: Products[];
    ProductsService: any;

    constructor(private userService: UserService) { }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
        this.items = Array(3).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
}
