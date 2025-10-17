<?php
// FAQ Accordion Partial
// Variables expected: $items (array of ['q' => question, 'a' => answer]), $id (unique identifier)
?>

<div class="hs-accordion-group">
  <?php foreach ($items as $index => $item): ?>
    <div class="hs-accordion hs-accordion-active:bg-white hs-accordion-active:border-me-core/20 hs-accordion-active:shadow-sm border border-black/10 rounded-xl mb-2" id="<?= $id ?>-<?= $index ?>">
      <button class="hs-accordion-toggle py-4 px-6 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 rounded-xl transition hover:text-gray-500 focus:outline-none focus:text-gray-500 disabled:max-w-xs disabled:text-neutral-400 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="<?= $id ?>-<?= $index ?>-body">
        <span class="flex-1 text-sm md:text-base"><?= htmlspecialchars($item['q']) ?></span>
        <svg class="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg class="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <div id="<?= $id ?>-<?= $index ?>-body" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="<?= $id ?>-<?= $index ?>">
        <div class="px-6 pb-4">
          <p class="text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed"><?= htmlspecialchars($item['a']) ?></p>
        </div>
      </div>
    </div>
  <?php endforeach; ?>
</div>
