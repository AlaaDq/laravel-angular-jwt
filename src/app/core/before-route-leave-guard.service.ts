import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ICanComponentDeactivate } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BeforeRouteLeaveGuardService implements CanDeactivate<ICanComponentDeactivate> {

  constructor() { }

    canDeactivate(
        component:ICanComponentDeactivate,
        currentRoute:ActivatedRouteSnapshot,
        currentState:RouterStateSnapshot,
        nextState?:RouterStateSnapshot
    ):Observable<boolean> | Promise<boolean> | boolean
  {
    return component.canDeactivate();
  }
}
