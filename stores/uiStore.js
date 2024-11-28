import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
    state: () => ({
        modals: {
            sectionModal: false,
            photoModal: false,
            backgroundModal: false,
            textColorModal: false,
            removeSectionModal: false,
            spotifyModal: false,
        },
        filters: {
            heroFilter: false,
            copyFilter: false,
            mediaFilter: false,
        },
        showAllCategories: true,
        isCodeView: false,
        hasUpdatedSpotify: false,
    }),
    actions: {
        openModal(modalName) {
            this.modals[modalName] = true;
        },
        closeModal(modalName) {
            this.modals[modalName] = false;
        },
        filterBy(filterName) {
           this.filters[filterName] = !this.filters[filterName];
        },
        switchView() {
            this.isCodeView = !this.isCodeView;
        },
        spotifyUiUpdate() {
            this.hasUpdatedSpotify = true;
        }
    },
    getters: {
        allFiltersInactive() {
            return Object.values(this.filters).every(value => value === false);    
        }
    }
})