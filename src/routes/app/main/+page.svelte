<script lang="ts">
  import "$lib/app.css"; // Ensure your app.css includes the Tailwind base styles
  import MainCalendar from "$lib/widgets/MainCalendar/MainCalendar.svelte";
  import { ScreenInfoValue } from "$lib/stores/ScreenInfoStore";

  let isLandscape: boolean;

  ScreenInfoValue.subscribe((value) => {
    isLandscape = value.isLandscape;
  });
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<section
  class="flex flex-1 flex-col items-center justify-center p-5 text-center"
  class:flex-row={isLandscape}
  class:flex-col={!isLandscape}
>
  <div class="flex flex-col w-full h-full basis-0 grow shrink">
    <MainCalendar />
  </div>
  <div class="flex flex-col w-full h-full flex-1 bg-orange-100"></div>
</section>
