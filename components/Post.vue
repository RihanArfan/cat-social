<script setup lang="ts">
interface Post {
  id: string;
  photos: string[];
  caption: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  posted_at: string;
}

const props = defineProps<Post>();
const timeAgo = useTimeAgo(props.posted_at);
</script>

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
    <img
      :src="photos[0]"
      class="w-full"
      width="500"
      height="500"
      :alt="`${user.username}'s post'`"
      loading="lazy"
    />

    <template #footer>
      <div class="flex gap-2">
        <UAvatar
          :src="user.avatar"
          size="md"
          class="shrink-0 aspect-square"
          :alt="`${user.name}'s avatar`"
        />

        <div class="flex flex-col">
          <div class="flex text-xs text-gray-500 gap-2">
            <span
              class="text-md text-neutral-700 dark:text-neutral-300 font-bold"
            >
              {{ user.name }}
            </span>
            <span>@{{ user.username }}</span>
            <time :datetime="posted_at.toString()">{{ timeAgo }}</time>
          </div>

          <p class="text-neutral-900 dark:text-neutral-100">{{ caption }}</p>
        </div>
      </div>
    </template>
  </UCard>
</template>
