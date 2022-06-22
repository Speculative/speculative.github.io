<script context="module" type="ts">
    import type { Load } from './__types/index';
    export const load: Load = async () => {
        const Bio = (await import ('$content/Bio.md')).default;
        console.log("Bio", Bio);

        return {
            props: {
                Bio
            }
        }
    }
</script>

<script lang="ts">
    import type { SvelteComponent } from 'svelte';


    export let Bio: SvelteComponent;
</script>

<svelte:component this={Bio} />

