import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { delay, map, mergeMap } from "rxjs/operators";
import { loadCheckups, loadCheckupSuccess } from "./admin.reducer";
import { AdminService } from "../services/admin.service";
import { of } from "rxjs";

@Injectable()
export class AdminEffects {
	constructor(private actions$ : Actions,private adminService:AdminService) {}

    loadCheckup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCheckups),
            mergeMap(() => 
                this.adminService.getAllCheckups().pipe(
                    delay(1000),
                    map(checkups => loadCheckupSuccess({ checkups })
                    )
                )
            )
        )
    
    )
}