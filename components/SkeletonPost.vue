<template>
  <UCard
    :ui="{
      base: 'overflow-hidden w-full',
      background: 'bg-white/50 dark:bg-gray-900/50',
      ring: '',
      divider: '',
      body: { padding: '' },
      footer: { padding: 'p-2' },
    }"
  >
    <USkeleton class="pb-[100%]" />

    <template #footer>
      <div class="flex gap-2 items-center">
        <USkeleton class="h-10 w-10" :ui="{ rounded: 'rounded-full' }" />

        <div class="flex flex-col gap-2">
          <USkeleton class="h-3 w-[200px]" />
          <USkeleton class="h-4 w-[350px]" />
        </div>
      </div>
    </template>
  </UCard>
</template>
