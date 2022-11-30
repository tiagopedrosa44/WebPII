<template>
  <div>
    <GMapMap
      :center="center"
      :zoom="18"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GMapMarker :key="index" v-for="(m, index) in markers" />
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script setup>
markers: [
  {
    position: {
      lat:  41.36611,
      lng: -8.739542,
    },
  },
];
const center = { lat: 41.36611, lng: -8.739542 };
</script>

<style lang="scss" scoped></style>
