<template lang="pug">
  li.task.w-full(class="sm:w-1/2 md:w-1/3 lg:w-1/4").h-48.p-2.list-none.text-left
    div.bg-white.h-full.rounded.p-2.shadow.flex.flex-col
      div.text-gray-800.font-bold.uppercase.text-sm.flex.justify-between.items-start
        span(class="w-11/12") {{ commentData.author }}
      div.flex-1.mt-2.text-gray-700.text-xs {{ commentData.content }}
      div.flex.justify-between.text-gray-400.text-sm.items-center
          span.flex.items-center
            span.ml-2 {{ commentData.created_at.seconds | moment("MMMM Do YYYY, h:mm:ss a") }}
</template>

<script>
const components = {};
export default {
  name: 'Comment',
  components,
  props: {
    commentData: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
