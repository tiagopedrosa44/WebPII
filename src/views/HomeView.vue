<template>
  <div id="background">
    <nav>
      <NavBar />
    </nav>
    <div>
      <GMapMap
        :center="getPos()"
        :zoom="18"
        map-type-id="terrain"
        style="width: 500px; height: 300px">
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
  </div>
  
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
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

<style>
  #background {
    background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
    min-height: 1080px;
  }
  @media (max-width: 576px) {
    nav{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (max-width: 768px) {
    nav{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (min-width: 992px) {
    nav{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (max-width: 1200px) {
    nav{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (min-width: 1400px) {
    nav{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
