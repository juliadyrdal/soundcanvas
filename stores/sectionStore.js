import { defineStore } from 'pinia'
import { cloneDeep, uniqueId } from 'lodash-es';

// Import thumbnail images
import sectionHero1Image from '@/assets/images/section-hero-1.png';
import sectionHero2Image from '@/assets/images/section-hero-2.png';
import sectionHero3Image from '@/assets/images/section-hero-3.png';
import sectionCopy1Image from '@/assets/images/section-copy-1.png';
import sectionCopy2Image from '@/assets/images/section-copy-2.png';
import sectionMedia1Image from '@/assets/images/section-media-1.png';

export const useSectionStore = defineStore('section', {
    state: () => ({
        categories: [
            {
                name: "hero"
            },
            {
                name: "copy"
            },
            {
                name: "media"
            }
        ],
        sections: [
            {
                componentName: 'SectionHero',
                key: 1,
                displayName: "Hero",
                category: "hero",
                description: "Hero with background image, header and subtitle.",
                thumbnail: sectionHero1Image,
                styles: {
                    backgroundColor: "#fff",
                    image: "https://images.unsplash.com/photo-1536426694225-d9c33045c03d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    headingColor: "#fff",
                },
                html: `
                    <section class="hero">
                        <div class="hero-content">
                            <h1 {{ heroTitle }}</h1>
                            <p >{{ heroText }}</p>
                        </div>
                    </section>
                `,
                css: `
                    .hero {
                        position: relative;
                        height: 100vh;
                        background-image: url('https://images.unsplash.com/photo-1724926201899-40530ae44ee4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
                        background-size: cover;
                        background-position: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        color: #fff;
                    }
        
                    .hero-content {
                        max-width: 600px;
                        padding: 20px;
                    }
        
                    .hero h1 {
                        font-size: 48px;
                        margin-bottom: 20px;
                    }
        
                    .hero p {
                        font-size: 18px;
                        margin-bottom: 30px;
                    }
        
                `
            },
            {
                componentName: 'SectionHero2',
                key: 2,
                displayName: "Hero 2",
                category: "hero",
                description: "Hero with large image on colorful background.",
                thumbnail: sectionHero2Image,
                styles: {
                    backgroundColor: "#8DA693",
                    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    headingColor: "#035116",
                },
                html: `
                    <section :style="{ backgroundColor: backgroundValue }" class="section">
                        <nav class="navigation">
                            <h2>{{ heroTitle }}</h2>
                            <div>
                                <NuxtLink>Social 1</NuxtLink>
                                <NuxtLink>Social 2</NuxtLink>
                                <NuxtLink>Social 3</NuxtLink>
                            </div>
                        </nav>
                        <div class="image-container" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
                        </div>
                        <div class="heading">
                            <h1>{{ heroHeading }}</h1>
                        </div>
                    </section>
                `,
                css: `
                    .section {
                    padding: 10px 40px;
                    color: #333;
                }
        
                .navigation {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
        
                .navigation h2 {
                    font-size: 22px;
                    text-transform: uppercase;
                    font-family: sans-serif;
                    padding: 0;
                    margin: 0;
                    cursor: pointer;
                }
        
                .image-container {
                    display: flex;
                    justify-content: end;
                    align-items: start;
                    margin: 10px 0;
                    width: 100%;
                    height: 60vh;
                    background-size: cover;
                }
        
                .edit-photo {
                    display: flex;
                    cursor: pointer;
                }
        
                .heading h1 {
                    text-transform: uppercase;
                    font-family: sans-serif;
                    font-size: 98px;
                    font-weight: 800;
                    text-align: center;
                    margin: 0;
                    cursor: pointer;
                }
        
                .edit-heading-input {
                    width: 100%;
                    height: 65px;
                    text-transform: uppercase;
                    font-family: sans-serif;
                    text-align: center;
                    font-size: 98px;
                    font-weight: 800;
                    padding: 35px 0;
                }
                `,
            },
            {
                componentName: 'SectionHero3',
                key: 3,
                displayName: "Hero 3",
                category: "hero",
                description: "Hero with image and text side by side.",
                thumbnail: sectionHero3Image,
                styles: {
                    backgroundColor: "#fff",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    headingColor: "#333",
                },
            },
            {
                componentName: 'SectionCopy1',
                key: 4,
                displayName: "Copy 1",
                category: "copy",
                description: "Hero with image and text side by side.",
                thumbnail: sectionCopy1Image,
                content: {
                    heading: "Occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum."
                },
                styles: {
                    backgroundColor: "#fff",
                    image: "https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?q=80&w=2209&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    headingColor: "#333",
                },
            },
            {
                componentName: 'SectionCopy2',
                key: 5,
                displayName: "Copy 2",
                category: "copy",
                description: "Hero with image and text side by side.",
                thumbnail: sectionCopy2Image,
                content: {
                    heading: "Bio",
                    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nVestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus.\n\nQuisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
                },
                styles: {
                    backgroundColor: "#F5F5F5",
                    image: "https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?q=80&w=2209&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    headingColor: "#333",
                    copyColor: "#333",
                },
            },
            {
                componentName: 'SectionMedia1',
                key: 6,
                displayName: "Media 1",
                category: "media",
                description: "Hero with image and text side by side.",
                thumbnail: sectionMedia1Image,
                media: {
                    spotifyUri: "5pKCCKE2ajJHZ9KAiaK11H",
                },
                styles: {
                    backgroundColor: "#fff",
                    image: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    headingColor: "#333",
                    copyColor: "#333",
                },
            }
        ],
        addedSections: []
    }),
    actions: {
        addSectionByKey(key) {
            // Find the section with the matching key
            const sectionToAdd = this.sections.find(section => section.key === key);
            if (sectionToAdd) {
                // Make a deep copy of the section
                const sectionCopy = cloneDeep(sectionToAdd);
                // Add a unique ID to new copy
                sectionCopy.id = uniqueId('section_');
                this.addedSections.push(sectionCopy);
            } else {
                console.warn(`Section with key ${key} not found`);
            }
        },
        removeSectionById(id) {
            // Find the section with the matching id
            const sectionToRemove = this.addedSections.findIndex(section => section.id === id);
            if (sectionToRemove !== -1) {
                this.addedSections.splice(sectionToRemove, 1);
            }
        },
        changeBackgroundValue(newValue, id) {
            // Find the section with the matching id
            const sectionIndex = this.addedSections.findIndex(section => section.id === id);
            if (sectionIndex !== -1) {
              this.addedSections[sectionIndex].styles.backgroundColor = newValue;
            } else {
              console.warn(`Section with id ${id} not found in addedSections`);
            }
          },
          changeImageUrl(newUrl, id) {
            // Find the section with the matching id
            const sectionIndex = this.addedSections.findIndex(section => section.id === id);
            if (sectionIndex !== -1) {
              this.addedSections[sectionIndex].styles.image = newUrl;
            } else {
              console.warn(`Section with id ${id} not found in addedSections`);
            }
          },
          changeHeadingColor(newValue, id) {
            // Find the section with the matching id
            const sectionIndex = this.addedSections.findIndex(section => section.id === id);
            if (sectionIndex !== -1) {
                this.addedSections[sectionIndex].styles.headingColor = newValue;
              } else {
                console.warn(`Section with id ${id} not found in addedSections`);
              }
          },
          updateSpotifyId(newValue, id) {
            // Find the section with the matching id
            const sectionIndex = this.addedSections.findIndex(section => section.id === id);
            if (sectionIndex !== -1) {
                this.addedSections[sectionIndex].media.spotifyUri = newValue;
              } else {
                console.warn(`Section with id ${id} not found in addedSections`);
              }
          }
    },
    getters: {
        // Return all hero sections
        heroSections(state) {
            return state.sections.filter((section) => section.category === 'hero')
        },
        // Return all copy sections
        copySections(state) {
            return state.sections.filter((section) => section.category === 'copy')
        },
        //Return all media sections
        mediaSections(state) {
            return state.sections.filter((section) => section.category === 'media')
        }
    },
})
   
