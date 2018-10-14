<template>
  <v-container
    fluid
    grid-list-md>
    <v-data-iterator
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      :items="items"
      content-tag="v-layout"
      hide-actions
      row
      wrap>
      <v-toolbar
        slot="header"
        class="mb-2"
        color="#000063"
        dark
        flat>
        <v-toolbar-title>
          <ruby>
            {{ book.title }}<rt>{{ book.title_yomi }}</rt>
          </ruby>
        </v-toolbar-title>
      </v-toolbar>
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6>
        <v-card>
          <v-card-title class="subheading font-weight-bold">
            {{ props.item.title }}
          </v-card-title>
          <v-divider/>
          <v-list dense>
            <template
              v-for="(field,index) in props.item.fields">
              <v-list-tile
                :key="index">
                <v-list-tile-content>{{ field.name }}：</v-list-tile-content>
                <v-list-tile-content class="text-xs-right">
                  {{ field.value }}
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .text-xs-right {
  align-items: flex-end;
  }
</style>
