<!-- Sidebar (Preline overlay) -->
<div id="hs-application-sidebar" class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full duration-300 transform hidden hs-overlay-open:block fixed top-0 start-0 bottom-0 z-60 w-64 h-full bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0" role="dialog" tabindex="-1" aria-label="Sidebar">
  <nav class="size-full flex flex-col">
    <div class="flex items-center pt-4 pe-4 ps-7">
      <a class="flex-none focus:outline-hidden focus:opacity-80" href="/" aria-label="Meta Esthetic">
        <?php include __DIR__ . "/logo-meta-esthetic.svg.php"; ?>
      </a>
      <div class="hidden lg:block lg:ms-2">
        <span class="text-lg font-semibold tracking-tight text-me-graphite">Meta Esthetic</span>
      </div>
    </div>
    <div class="h-full overflow-y-auto p-4">
      <ul class="space-y-1.5">
        <li><a class="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">New chat</a></li>
      </ul>
    </div>
  </nav>
  <!-- End Sidebar -->
</div>

<!-- Content -->
<div class="relative h-screen w-full lg:ps-64 pt-14 md:pt-16 overflow-hidden flex flex-col">
  <div class="flex-1 flex flex-col py-4 lg:py-6">
    <!-- Title / Hero -->
    <div data-hero class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center pt-[30%] sm:pt-[18%] md:pt-[6%] lg:pt-[4%]">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
        <span class="inline-block">Intelligent AI for Doctors and Patients</span>
      </h1>
      <p class="mt-3 text-gray-600">
        <span class="inline-block">Dual intelligence for clients and doctors — precise, empathetic, and clinically aware.</span>
      </p>
    </div>
    <!-- End Title -->

    <!-- Chat Messages -->
    <ul id="chat-messages" class="mt-4 space-y-5 max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto flex-1 overflow-y-auto"></ul>
  </div>

  <!-- Composer -->
  <div class="max-w-4xl mx-auto shrink-0 p-3 sm:py-6">
    <!-- Mobile: Sidebar toggle -->
    <div class="lg:hidden flex justify-end mb-2 sm:mb-3">
      <button type="button" class="p-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay='{"target": "#hs-application-sidebar"}'>
        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <span>Sidebar</span>
      </button>
    </div>

    <div class="relative">
      <textarea id="chat-input" class="p-4 pb-12 block w-full bg-gray-100 border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ask me anything..."></textarea>

      <!-- Toolbar on right -->
      <div class="fixed bottom-px right-px p-2 rounded-b-lg bg-gray-100 w-max">
        <div class="flex items-center justify-end gap-2">
          <button id="upload-btn" type="button" class="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-white focus:outline-hidden">
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 5 17 10"/><line x1="12" x2="12" y1="5" y2="15"/></svg>
          </button>
          <button id="mic-btn" type="button" class="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-white focus:outline-hidden">
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0V4a3 3 0 0 0-3-3Z"/><path d="M19 10a7 7 0 0 1-14 0"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
          </button>
          <button id="send-btn" type="button" onclick="sendMessage()" class="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-hidden">
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End Content -->

