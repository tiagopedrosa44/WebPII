<template>
  <GoogleMap
    api-key="AIzaSyAYi2BJ0UcEc3zgu2s6g9UFV-6JHuSkyxE"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="18"
  >
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  //center: { lat: 41.36611, lng: -8.739542 },
  data() {
    return {
      center: { lat: 0, lng: 0 },
      markerOptions: {
        position: { lat: 0, lng: 0 },
      },
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.markerOptions = {
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        };
      });
    } else {
      this.center = { lat: 41.36611, lng: -8.739542 };
      this.markerOptions = {
        position: { lat: 41.36611, lng: -8.739542 },
      };
    }
  },
});
</script>
