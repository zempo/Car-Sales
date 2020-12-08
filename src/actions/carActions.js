export const ADD_FEATURE = "ADD_FEATURE";
export const EDIT_FEATURE = "EDIT_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

// redux hooks
export const addFeature = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};

export const deleteFeature = (feature) => {
  return {
    type: DELETE_FEATURE,
    payload: feature,
  };
};
