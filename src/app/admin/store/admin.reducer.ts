import { createAction, createReducer, on, props } from "@ngrx/store";
import { Checkup } from "src/app/shared/models/checkup.model";

export const loadCheckups = createAction('[Admin] Load Checkups');
export const loadCheckupSuccess = createAction('[Admin] Load Checkups Success',
    props<{ checkups: Checkup[] }>()
);

export interface AdminState {
    checkups: Checkup[];
    loading: boolean;
}

export const initialState: AdminState = {
    checkups: [],
    loading: false
};

export const adminReducer = createReducer(
    initialState,
    on(loadCheckups, state => ({ ...state, loading: true })),
    on(loadCheckupSuccess, (state, { checkups }) => ({
        ...state, checkups, loading: false
    }))
)

export const adminFeatureKey = 'admin';