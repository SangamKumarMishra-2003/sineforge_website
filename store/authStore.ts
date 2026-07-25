"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface User {
  id: string;
  name: string;
  email: string;
  role?: "student" | "mentor" | "admin";
  avatar?: string;
  token?: string;
}


interface AuthState {

  user: User | null;

  isAuthenticated: boolean;

  isLoading: boolean;


  login: (
    user: User
  ) => void;


  logout: () => void;


  updateUser: (
    data: Partial<User>
  ) => void;


  setLoading: (
    value: boolean
  ) => void;
}



export const useAuthStore =
  create<AuthState>()(
    persist(

      (set) => ({

        user: null,

        isAuthenticated: false,

        isLoading: false,


        login: (user) =>

          set({
            user,
            isAuthenticated: true,
          }),



        logout: () =>

          set({
            user: null,
            isAuthenticated: false,
          }),



        updateUser: (data) =>

          set((state) => ({

            user: state.user
              ? {
                  ...state.user,
                  ...data,
                }
              : null,

          })),



        setLoading: (value) =>

          set({
            isLoading: value,
          }),

      }),


      {
        name: "sineforge-auth",
      }

    )
  );