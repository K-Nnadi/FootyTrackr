import {create} from "zustand";


interface HeaderNavbarStore {
	navbarOpen: boolean;
	toggleNavbar: () => void;
}

export const useHeaderNavbarStore = create<HeaderNavbarStore>((set) => ({
	navbarOpen: false,
	toggleNavbar: () => set((state) => ({navbarOpen: !state.navbarOpen}))

}))