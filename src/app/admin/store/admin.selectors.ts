import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adminFeatureKey, AdminState } from "./admin.reducer";

export const selectAdminState = createFeatureSelector<AdminState>(adminFeatureKey);

export const selectCheckups = createSelector(
    selectAdminState,
    (state:AdminState) => state.checkups
);

export const selectLoading = createSelector(
    selectAdminState,
    (state:AdminState) => state.loading
)