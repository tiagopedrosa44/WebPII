<template>
  <div>
    <GMapMap
      :center="getPos()"
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
      lat: 41.36611,
      lng: -8.739542,
    },
  },
];

function getPos() {
  if (
    navigator.geolocation.getCurrentPosition((position) => {
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    })
  );
  else {
    return {
      lat: 41.36611,
      lng: -8.739542,
    };
  }
}
</script>
