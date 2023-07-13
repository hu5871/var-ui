<template>
  <!-- <view class="flex "> -->
    <v-card
      :bg-color="props.bgColor" :round="props.round" _class="overflow-hidden" :width="props.size" :height="props.size" :margin="props.margin" :padding="props.padding"
    >
      <v-icon :img-mode="props.imgMode" :name="props.icon" :size="props.size" :color="props.color">
      </v-icon>
    </v-card>
  <!-- </view> -->
</template>

<script lang="ts" setup>
import vIcon from '../v-icon/v-icon.vue'
import vCard from '../v-card/v-card.vue'
import { _defineProps } from '../../lib/share/customProps';
import { avatarProps } from './v-avatar';

const props=defineProps({..._defineProps,...avatarProps})
</script>

<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<style>

</style>