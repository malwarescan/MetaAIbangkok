<!-- Sidebar (Preline overlay) -->
<div id="hs-application-sidebar" class="hs-overlay [--auto-close:lg]
hs-overlay-open:translate-x-0 -translate-x-full duration-300 transform
hidden hs-overlay-open:block
fixed top-0 start-0 bottom-0 z-60
w-64 h-full
bg-white border-e border-gray-200
lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
dark:bg-neutral-900 dark:border-neutral-700" role="dialog" tabindex="-1" aria-label="Sidebar">
  <nav class="size-full flex flex-col">
    <div class="flex items-center pt-4 pe-4 ps-7">
      <a class="flex-none focus:outline-hidden focus:opacity-80" href="/" aria-label="Meta Esthetic">
        <?php include __DIR__ . "/logo-meta-esthetic.svg.php"; ?>
      </a>
      <div class="hidden lg:block lg:ms-2">
        <span class="text-me-graphite font-semibold tracking-tight">Meta Esthetic</span>
      </div>
    </div>
    <div class="h-full overflow-y-auto p-4">
      <ul class="space-y-1.5">
        <li><a class="flex items-center gap-x-3 px-3 text-gray-700 rounded-lg hover:bg-gray-100" href="#">New chat</a></li>
      </ul>
    </div>
  </nav>
  <!-- End Sidebar -->
</div>

<!-- Content -->
<div class="relative h-screen w-full lg:ps-64">
  <div class="py-10 lg:py-14">
    <!-- Title / Hero -->
    <div data-hero class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
      <h1 class="text-gray-800 font-bold sm:text-4xl">
        <span class="inline-block">Intelligent AI for Doctors and Patients</span>
      </h1>
      <p class="mt-3 text-gray-600">
        <span class="inline-block">Dual intelligence for clients and doctors — precise, empathetic, and clinically aware.</span>
      </p>
    </div>
    <!-- End Title -->

    <!-- Chat Messages -->
    <ul id="chat-messages" class="mt-16 space-y-5 max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto"></ul>
  </div>

  <!-- Composer -->
  <div class="max-w-4xl mx-auto sticky bottom-0 z-10 p-3 sm:py-6">
    <!-- Mobile: Sidebar toggle -->
    <div class="lg:hidden flex justify-end mb-2 sm:mb-3">
      <button type="button" class="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <span>Sidebar</span>
      </button>
    </div>

    <div class="relative">
      <textarea id="chat-input" class="p-3 sm:p-4 pb-12 sm:pb-12 block w-full bg-gray-100 border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ask me anything..."></textarea>

      <!-- Toolbar -->
      <div class="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-gray-100">
        <div class="flex items-center justify-end gap-2">
          <button id="upload-btn" type="button" class="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-white focus:z-10 focus:outline-hidden focus:bg-white">
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
          </button>
          <button id="mic-btn" type="button" class="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-white focus:z-10 focus:outline-hidden focus:bg-white">
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
          <button id="send-btn" type="button" onclick="sendMessage()" class="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-hidden focus:bg-blue-500">
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 1-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg>
          </button>
        </div>
      </div>
      <!-- End Toolbar -->
    </div>
  </div>
</div>
<!-- End Content -->

