import React from 'react'
import { authTypes } from '../types/authTypes';

export const AuthReducer = (state,action) => {
  switch (action.type) {
    case authTypes.login:
            return {
                status: true
            }
  
    case authTypes.logout:
        return {
            status: false
        }
    default:
        return state;
  }
  
};

