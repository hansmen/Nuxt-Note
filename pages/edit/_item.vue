<template lang="pug">
  main#main.w-full.flex.justify-center
    div.container.h-screen.m-0.flex.justify-center.content-center.text-center.flex-col
      div.z-10.absolute.inset-0.flex.justify-center.items-center.popup.p-4(class="md:p-0")
        div.w-full.max-w-md
          form(@submit.prevent="edit").bg-white.shadow-md.rounded.px-8.pt-6.pb-8.mb-4
            nuxt-link(tag="a" :to="localePath('/')").flex.justify-end
              svg.logo__icon.w-4.h-4
                use(xlink:href="#icon-close")
            div.mb-4
              label(for="username").block.text-gray-700.text-sm.font-bold.mb-2 Author
              input(placeholder="author" class="focus:outline-none focus:bg-white" v-model="task.name").appearance-none.bloc.w-full.bg-gray-200.text-gray-700.border.rounded.py-3.px-4.mb-3.leading-tight
            div.mb-4
              label(for="content").block.text-gray-700.text-sm.font-bold.mb-2 Content
              input(placeholder="content" class="focus:outline-none focus:bg-white" v-model="task.content").appearance-none.block.w-full.bg-gray-200.text-gray-700.border.rounded.py-3.px-4.mb-3.leading-tight.h-32
            div
              button(type="submit" value="add" class="hover:bg-gray-800 focus:outline-none focus:shadow-outline").bg-gray-900.text-white.font-bold.py-2.px-4.rounded.w-full.uppercase.tracking-wider Add
</template>

<script>
const components = {};
export default {
  name: 'Item',
  components,
  async asyncData({ app, route }) {
    const task = await app.$fireStore
      .collection('todos')
      .doc(route.params.item)
      .get()
      .then(response => {
        let newDoc = {};
        newDoc = response.data();
        newDoc.id = response.id;
        return newDoc;
      });
    return {
      task,
    };
  },
  data() {
    return {};
  },
  methods: {
    async edit() {
      try {
        delete this.task.id;
        await this.$fireStore
          .collection('todos')
          .doc(this.$route.params.item)
          .set(this.task)
          .then(response => {
            console.info(response);
            this.$router.push(this.localePath('index'));
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
