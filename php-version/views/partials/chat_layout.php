<!-- Content -->
<div class="relative h-screen w-full bg-white overflow-hidden flex flex-col">
  <div class="flex-1 flex flex-col py-6 lg:py-8 min-h-0">
    <!-- Title / Hero -->
    <div data-hero class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
      <img src="/assets/chat-ui-logo-small.png" alt="Meta Esthetic" class="mb-3 h-10 sm:h-12 w-auto select-none" loading="lazy">
      <h1 class="text-gray-800 font-bold sm:text-4xl">
        <span class="inline-block">Intelligent AI for Doctors and Patients</span>
      </h1>
      <p class="mt-3 text-gray-600">
        <span class="inline-block">Dual intelligence for clients and doctors — precise, empathetic, and clinically aware.</span>
      </p>
    </div>
    <!-- End Title -->

    <!-- Chat Messages -->
    <ul id="chat-messages" class="mx-auto space-y-5 max-w-4xl px-4 sm:px-6 lg:px-8 flex-1 overflow-y-auto min-h-0"></ul>
  </div>

  <!-- Composer -->
  <div class="absolute right-0 z-10 p-3 sm:py-6">
    <div class="max-w-4xl mx-auto">

    <div class="relative">
      <textarea id="chat-input" class="pb-12 sm:p-4 sm:pb-12 block w-full bg-gray-100 border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ask me anything..."></textarea>

      <!-- Toolbar -->
      <div class="absolute right-px pt-2.5 w-max rounded-b-lg bg-gray-100">
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

