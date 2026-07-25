"use client";

import { create } from "zustand";


interface UIState {

  isMobileMenuOpen: boolean;

  isSearchOpen: boolean;

  activeModal:
    | string
    | null;


  theme:
    | "light"
    | "dark"
    | "system";


  toggleMobileMenu: () => void;


  closeMobileMenu: () => void;


  openSearch: () => void;


  closeSearch: () => void;


  openModal: (
    modalName: string
  ) => void;


  closeModal: () => void;


  setTheme: (
    theme:
      | "light"
      | "dark"
      | "system"
  ) => void;

}



export const useUIStore =
  create<UIState>((set) => ({

    isMobileMenuOpen: false,

    isSearchOpen: false,

    activeModal: null,


    theme: "dark",



    toggleMobileMenu: () =>

      set((state) => ({

        isMobileMenuOpen:
          !state.isMobileMenuOpen,

      })),



    closeMobileMenu: () =>

      set({

        isMobileMenuOpen: false,

      }),



    openSearch: () =>

      set({

        isSearchOpen: true,

      }),



    closeSearch: () =>

      set({

        isSearchOpen: false,

      }),



    openModal: (
      modalName
    ) =>

      set({

        activeModal: modalName,

      }),



    closeModal: () =>

      set({

        activeModal: null,

      }),



    setTheme: (
      theme
    ) =>

      set({

        theme,

      }),


  }));