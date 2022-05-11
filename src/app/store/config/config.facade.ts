import {filter, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ConfigSelectors} from "./config.selectors";
import {select, Store} from "@ngrx/store";
import {ConfigState} from "./config.reducer";

@Injectable({
  providedIn: 'root'
})
export class ConfigFacade {
  constructor(private store: Store<any>) {}

  config$: Observable<ConfigState | null> = this.store.pipe(
    select(ConfigSelectors.config),
    filter(v => !!v)
  );

}
