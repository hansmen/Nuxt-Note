<template lang="pug">
  li.task.w-full(class="sm:w-full md:w-1/2 lg:w-1/3").h-64.p-2.list-none.text-left
    div.bg-white.h-full.rounded.p-2.shadow.flex.flex-col
      div.text-gray-800.font-bold.uppercase.text-sm.flex.justify-between.items-start
        span(class="w-11/12") {{ taskData.name }}
        nuxt-link(tag="a" :to="localePath({name: 'task', params:{task: taskData.id}})")
          svg.logo__icon.w-8.h-8
            use(xlink:href="#icon-view")
      div.flex-1.mt-2.text-gray-700.text-xs {{ taskData.content }}
      div.flex.justify-between
        div.flex.justify-between.text-gray-400.text-sm.items-center
          span.flex.items-center
            span.ml-2 {{ taskData.created_at.seconds | moment("MMMM DD YYYY h:mm:ss a") }}
        div.flex    
          nuxt-link(tag="a" :to="localePath({name: 'edit-item', params:{item: taskData.id}})")
            svg.logo__icon.w-8.h-8
              use(xlink:href="#icon-edit")
          span.flex.items-center.ml-4
            button.mr-1.text-gray-300(@click="deleteItem" class="hover:text-gray-500").h-8.w-8
              svg.logo__icon.w-8.h-8
                use(xlink:href="#icon-delete")    
</template>

<script>
const components = {};
export default {
  name: 'Todo',
  components,
  props: {
    taskData: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      name: 'Paul',
    };
  },
  methods: {
    async deleteItem() {
      try {
        await this.$fireStore
          .collection('todos')
          .doc(this.taskData.id)
          .delete()
          .then(response => {
            console.info(response);
            window.location.reload(true);
          });
      } catch (error) {
        console.info(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
